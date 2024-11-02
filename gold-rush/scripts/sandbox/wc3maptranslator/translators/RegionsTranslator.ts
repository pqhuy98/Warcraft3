import { HexBuffer } from '../HexBuffer'
import { W3Buffer } from '../W3Buffer'
import { type WarResult, type JsonResult } from '../CommonInterfaces'
import { type Translator } from './Translator'
import { type Region } from '../data/Region'

export class RegionsTranslator implements Translator<Region[]> {
  private static instance: RegionsTranslator

  private constructor () {}

  public static getInstance (): RegionsTranslator {
    if (this.instance == null) {
      this.instance = new this()
    }
    return this.instance
  }

  public static jsonToWar (regions: Region[]): WarResult {
    return this.getInstance().jsonToWar(regions)
  }

  public static warToJson (buffer: Buffer): JsonResult<Region[]> {
    return this.getInstance().warToJson(buffer)
  }

  public jsonToWar (regionsJson: Region[]): WarResult {
    const outBufferToWar = new HexBuffer()

    /*
         * Header
         */
    outBufferToWar.addInt(5) // file version
    outBufferToWar.addInt(regionsJson?.length || 0) // number of regions

    /*
         * Body
         */
    regionsJson?.forEach(region => {
      // Position
      // Note that the .w3x guide has these coords wrong - the guide swaps bottom and right, but this is incorrect; bottom should be written before right
      outBufferToWar.addFloat(region.position.left)
      outBufferToWar.addFloat(region.position.bottom)
      outBufferToWar.addFloat(region.position.right)
      outBufferToWar.addFloat(region.position.top)

      outBufferToWar.addString(region.name)
      outBufferToWar.addInt(region.id)

      // Weather effect name - lookup necessary: char[4]
      if (region.weatherEffect != null) {
        outBufferToWar.addChars(region.weatherEffect) // Weather effect is optional - defaults to 0000 for "none"
      } else {
        // We can't put a string "0000", because ASCII 0's differ from 0x0 bytes
        outBufferToWar.addByte(0)
        outBufferToWar.addByte(0)
        outBufferToWar.addByte(0)
        outBufferToWar.addByte(0)
      }

      // Ambient sound - refer to names defined in .w3s file
      outBufferToWar.addString(region.ambientSound != null ? region.ambientSound : '') // May be empty string

      // Color of region used by editor
      // Careful! The order in .w3r is BB GG RR, whereas the JSON spec order is [RR, GG, BB]
      outBufferToWar.addByte(region.color[2]) // blue
      outBufferToWar.addByte(region.color[1]) // green
      outBufferToWar.addByte(region.color[0]) // red

      // End of structure - for some reason the .w3r needs this here;
      // Value is set to 0xff based on observing the .w3r file, but not sure if it could be something else
      outBufferToWar.addByte(0xff)
    })

    return {
      errors: [],
      buffer: outBufferToWar.getBuffer()
    }
  }

  public warToJson (buffer: Buffer): JsonResult<Region[]> {
    const result: Region[] = []
    const outBufferToJSON = new W3Buffer(buffer)

    const fileVersion = outBufferToJSON.readInt() // File version
    const numRegions = outBufferToJSON.readInt() // # of regions

    for (let i = 0; i < numRegions; i++) {
      const region: Region = {
        name: '',
        id: 0,
        weatherEffect: '',
        ambientSound: '',
        color: [0, 0, 0],
        position: {
          left: 0,
          bottom: 0,
          right: 0,
          top: 0
        }
      }

      region.position.left = outBufferToJSON.readFloat()
      region.position.bottom = outBufferToJSON.readFloat()
      region.position.right = outBufferToJSON.readFloat()
      region.position.top = outBufferToJSON.readFloat()
      region.name = outBufferToJSON.readString()
      region.id = outBufferToJSON.readInt()
      region.weatherEffect = outBufferToJSON.readChars(4)
      region.ambientSound = outBufferToJSON.readString()
      region.color = [
        outBufferToJSON.readByte(), // red
        outBufferToJSON.readByte(), // green
        outBufferToJSON.readByte() // blue
      ]
      region.color.reverse() // json wants it in RGB, but .w3r file stores it as BB GG RR
      outBufferToJSON.readByte() // end of region structure

      result.push(region)
    }

    return {
      errors: [],
      json: result
    }
  }
}
