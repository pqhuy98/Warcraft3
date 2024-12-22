import { HexBuffer } from '../HexBuffer'
import { type WarResult, type JsonResult } from '../CommonInterfaces'
import { type Translator } from './Translator'

export class StringsTranslator implements Translator<Record<string, string>> {
  private static instance: StringsTranslator

  private constructor () {}

  public static getInstance (): StringsTranslator {
    if (this.instance == null) {
      this.instance = new this()
    }
    return this.instance
  }

  public static jsonToWar (string: Record<string, string>): WarResult {
    return this.getInstance().jsonToWar(string)
  }

  public static warToJson (buffer: Buffer): JsonResult<object> {
    return this.getInstance().warToJson(buffer)
  }

  public jsonToWar (stringsJson: Record<string, string>): WarResult {
    const outBufferToWar = new HexBuffer()

    /*
         * Strings
         */
    Object.keys(stringsJson).forEach((key) => {
      outBufferToWar.addChars('STRING ' + key)
      outBufferToWar.addNewLine()
      outBufferToWar.addChars('{')
      outBufferToWar.addNewLine()
      outBufferToWar.addStringNoNewline(stringsJson[key] as unknown as string)
      outBufferToWar.addNewLine()
      outBufferToWar.addChars('}')
      outBufferToWar.addNewLine()
      outBufferToWar.addNewLine()
    })

    return {
      errors: [],
      buffer: outBufferToWar.getBuffer()
    }
  }

  public warToJson (buffer: Buffer): JsonResult<Record<string, string>> {
    const wts = buffer.toString().replace(/\r\n/g, '\n') // may contain Windows linebreaks (\r\n), but below regex just assumes \n
    const matchStringDefinitionBlock = /STRING ([0-9]+)\n?(?:.*\n)?{\n((?:.|\n)*?)\n}/g // see: https://regexr.com/3r572

    const result = {} // stores the json form of strings file
    let match: RegExpExecArray | null // stores individual matches as input is read

    while ((match = matchStringDefinitionBlock.exec(wts)) !== null) {
      const num = match[1]
      const body = match[2]
      result[num] = body
    }

    return {
      errors: [],
      json: result
    }
  }
}
