import { HexBuffer } from '../HexBuffer'
import { W3Buffer } from '../W3Buffer'
import { type WarResult, type JsonResult } from '../CommonInterfaces'
import { type Translator } from './Translator'
import { type ObjectModificationTable, ObjectType, TableType, type Modification, ModificationType } from '../data/ObjectModificationTable'

export class ObjectsTranslator implements Translator<ObjectModificationTable> {
  private static readonly instances = new Map<ObjectType, ObjectsTranslator>()

  private readonly type: ObjectType

  private constructor (type: ObjectType) {
    this.type = type
  }

  public static getInstance (type: ObjectType): ObjectsTranslator {
    let instance = this.instances.get(type)
    if (instance == null) {
      instance = new this(type)
      this.instances.set(type, instance)
    }
    return instance
  }

  public static jsonToWar (type: ObjectType, info: ObjectModificationTable): WarResult {
    return this.getInstance(type).jsonToWar(info)
  }

  public static warToJson (type: ObjectType, buffer: Buffer): JsonResult<ObjectModificationTable> {
    return this.getInstance(type).warToJson(buffer)
  }

  // Expose the ObjectType enum as part of this abstract class
  // The enum could be "export"ed , but it wouldn't be accessible
  // via `ObjectsTranslator.ObjectType`, which is preferable.
  public static readonly ObjectType = ObjectType

  private static readonly varTypes = {
    int: 0,
    real: 1,
    unreal: 2,
    string: 3,
    0: 'int',
    1: 'real',
    2: 'unreal',
    3: 'string'
  }

  public jsonToWar (json: ObjectModificationTable): WarResult {
    const outBufferToWar = new HexBuffer()

    /*
         * Header
         */
    outBufferToWar.addInt(2) // file version

    const generateTableFromJson = (tableType: TableType, tableData: object): void => { // create "original" or "custom" table
      if (!tableData) {
        outBufferToWar.addInt(0)
        return
      }
      const data = Object.entries(tableData)
      outBufferToWar.addInt(data.length)
      data.forEach(([defKey, obj]) => {
        // Original and new object ids
        if (tableType === TableType.original) {
          outBufferToWar.addChars(defKey)
          outBufferToWar.addByte(0); outBufferToWar.addByte(0); outBufferToWar.addByte(0); outBufferToWar.addByte(0) // no new Id is assigned
        } else {
          // e.g. "h000:hfoo"
          outBufferToWar.addChars(defKey.substring(5, 9)) // original id
          outBufferToWar.addChars(defKey.substring(0, 4)) // custom id
        }

        // Number of modifications made to this object
        outBufferToWar.addInt(obj?.length || 0)

        obj?.forEach((mod: Modification) => {
          let modType: number

          // Modification id (e.g. unam = name; reference MetaData lookups)
          outBufferToWar.addChars(mod.id)

          // Determine what type of field the mod is (int, real, unreal, string)
          if (mod.type != null) { // if a type is specified, use it
            modType = ObjectsTranslator.varTypes[mod.type]
          } else { // otherwise we try to infer between int/string (note there is no way to detect unreal or float this way, so user must specify those explicitly)
            if (typeof mod.value === 'number') {
              modType = ObjectsTranslator.varTypes.int
            } else if (typeof mod.value === 'string') {
              modType = ObjectsTranslator.varTypes.string
            } else {
              throw new Error('No type specified and cannot infer type!')
            }
          }

          outBufferToWar.addInt(modType)

          // Addl integers
          // Required for: doodads, abilities, upgrades
          if (this.type === ObjectType.Doodads || this.type === ObjectType.Abilities || this.type === ObjectType.Upgrades) {
            // Level or variation
            // We need to check if hasOwnProperty because these could be explititly
            // set to 0, but JavaScript's truthiness evaluates to false to it was defaulting
            outBufferToWar.addInt((mod.level ?? mod.variation) ?? 0) // defaults to 0

            outBufferToWar.addInt(mod.column ?? 0) // E.g DataA1 is 1 because of col A; refer to the xyzData.slk files for Data fields
          }

          // Write mod value
          if (modType === ObjectsTranslator.varTypes.int) {
            outBufferToWar.addInt(mod.value as number)
          } else if (modType === ObjectsTranslator.varTypes.real || modType === ObjectsTranslator.varTypes.unreal) {
            // Follow-up: check if unreal values are same hex format as real
            outBufferToWar.addFloat(mod.value as number)
          } else if (modType === ObjectsTranslator.varTypes.string) {
            // Note that World Editor normally creates a TRIGSTR_000 for these string
            // values - WC3MapTranslator just writes the string directly to file
            outBufferToWar.addString(mod.value as string)
          }

          // End of struct
          if (tableType === TableType.original) {
            // Original objects are ended with their base id (e.g. hfoo)
            outBufferToWar.addChars(defKey)
          } else {
            // Custom objects are ended with 0000 bytes
            outBufferToWar.addByte(0)
            outBufferToWar.addByte(0)
            outBufferToWar.addByte(0)
            outBufferToWar.addByte(0)
          }
        })
      })
    }

    generateTableFromJson(TableType.original, json.original)
    generateTableFromJson(TableType.custom, json.custom)

    return {
      errors: [],
      buffer: outBufferToWar.getBuffer()
    }
  }

  public warToJson (buffer: Buffer): JsonResult<ObjectModificationTable> {
    const result: ObjectModificationTable = { original: {}, custom: {} }
    const outBufferToJSON = new W3Buffer(buffer)

    const fileVersion = outBufferToJSON.readInt()

    const readModificationTable = (isOriginalTable: boolean): void => {
      const numTableModifications = outBufferToJSON.readInt()

      for (let i = 0; i < numTableModifications; i++) {
        const objectDefinition: Modification[] = [] // object definition will store one or more modification objects

        const originalId = outBufferToJSON.readChars(4)
        const customId = outBufferToJSON.readChars(4)
        let sets: number
        if (fileVersion >= 3) {
          sets = outBufferToJSON.readInt()
        } else {
          sets = 1
        }

        for (let j = 0; j < sets; j++) {
          if (fileVersion >= 3) {
            const setFlag = outBufferToJSON.readInt()
          }
          const modificationCount = outBufferToJSON.readInt()

          for (let k = 0; k < modificationCount; k++) {
            const modification: Modification = {
              id: '',
              type: ModificationType.string,
              level: 0,
              column: 0,
              value: {}
            }

            modification.id = outBufferToJSON.readChars(4)
            modification.type = ObjectsTranslator.varTypes[outBufferToJSON.readInt()] as unknown as ModificationType // 'int' | 'real' | 'unreal' | 'string',

            if (this.type === ObjectType.Doodads || this.type === ObjectType.Abilities || this.type === ObjectType.Upgrades) {
              modification.level = outBufferToJSON.readInt()
              modification.column = outBufferToJSON.readInt()
            }

            if (modification.type === 'int') {
              modification.value = outBufferToJSON.readInt()
            } else if (modification.type === 'real' || modification.type === 'unreal') {
              modification.value = outBufferToJSON.readFloat()
            } else { // modification.type === 'string'
              modification.value = outBufferToJSON.readString()
            }

            if (isOriginalTable) {
              outBufferToJSON.readInt() // should be 0 for original objects
            } else {
              outBufferToJSON.readChars(4) // should be object ID for custom objects
            }

            objectDefinition.push(modification)
          }
        }

        if (isOriginalTable) {
          result.original[originalId] = objectDefinition
        } else {
          result.custom[customId + ':' + originalId] = objectDefinition
        }
      }
    }

    readModificationTable(true)
    readModificationTable(false)

    return {
      errors: [],
      json: result
    }
  }
}
