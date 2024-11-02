import { type JsonResult, type WarResult } from '../CommonInterfaces'

export interface Translator<T> {
  jsonToWar: (json: T) => WarResult
  warToJson: (buffer: Buffer) => JsonResult<T>
}
