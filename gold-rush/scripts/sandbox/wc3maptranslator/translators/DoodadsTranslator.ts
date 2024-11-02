import { HexBuffer } from '../HexBuffer'
import { W3Buffer } from '../W3Buffer'
import { rad2Deg, deg2Rad } from '../AngleConverter'
import { type WarResult, type JsonResult } from '../CommonInterfaces'
import { type Translator } from './Translator'
import { SpecialDoodad, type Doodad } from '../data/Doodad'

enum flag {
  // 0= invisible and non-solid tree
  // 1= visible but non-solid tree
  // 2= normal tree (visible and solid)
  undefined = 0,
  visible = 1,
  solid = 2
}

export class DoodadsTranslator implements Translator<[Doodad[], SpecialDoodad[]]> {
  private static instance: DoodadsTranslator

  private constructor() { }

  public static getInstance(): DoodadsTranslator {
    if (this.instance == null) {
      this.instance = new this()
    }
    return this.instance
  }

  public static jsonToWar(doodads: [Doodad[], SpecialDoodad[]]): WarResult {
    return this.getInstance().jsonToWar(doodads)
  }

  public static warToJson(buffer: Buffer): JsonResult<[Doodad[], SpecialDoodad[]]> {
    return this.getInstance().warToJson(buffer)
  }

  public jsonToWar(compositeJson: [Doodad[], SpecialDoodad[]]): WarResult {
    const doodadsJson = compositeJson[0];
    const specialDoodadsJson = compositeJson[1];
    const outBufferToWar = new HexBuffer()
    /*
         * Header
         */
    outBufferToWar.addChars('W3do') // file id
    outBufferToWar.addInt(8) // file version
    outBufferToWar.addInt(11) // subversion 0x0B
    outBufferToWar.addInt(doodadsJson?.length || 0) // num of trees

    /*
         * Body
         */
    doodadsJson?.forEach((tree) => {
      outBufferToWar.addChars(tree.type)
      outBufferToWar.addInt(tree.variation != null ? tree.variation : 0) // optional - default value 0
      outBufferToWar.addFloat(tree.position[0])
      outBufferToWar.addFloat(tree.position[1])
      outBufferToWar.addFloat(tree.position[2])

      // Angle
      // Doodads format is unique because it uses radians for angles, as opposed
      // to angles in any other file which use degrees. Hence conversion is needed.
      //    war3map: Expects angle in RADIANS
      //    JSON: Spec defines angle in DEGREES
      const radAngle = deg2Rad(tree.angle != null ? tree.angle : 0)
      outBufferToWar.addFloat(radAngle) // optional - default value 0

      // Scale
      if (tree.scale == null) tree.scale = [1, 1, 1]
      outBufferToWar.addFloat(tree.scale[0] != null ? tree.scale[0] : 1)
      outBufferToWar.addFloat(tree.scale[1] != null ? tree.scale[1] : 1)
      outBufferToWar.addFloat(tree.scale[2] != null ? tree.scale[2] : 1)

      outBufferToWar.addChars(tree.skinId)

      // Tree flags
      /* | Visible | Solid | Flag value |
               |   no    |  no   |     0      |
               |  yes    |  no   |     1      |
               |  yes    |  yes  |     2      | */
      let treeFlag = 2 // default: normal tree
      if (tree.flags == null) tree.flags = { visible: true, solid: true } // defaults if no flags are specified
      if (!tree.flags.visible && !tree.flags.solid) treeFlag = 0
      else if (tree.flags.visible && !tree.flags.solid) treeFlag = 1
      else if (tree.flags.visible && tree.flags.solid) treeFlag = 2
      // Note: invisible and solid is not an option
      outBufferToWar.addByte(treeFlag)

      outBufferToWar.addByte(tree.life != null ? tree.life : 100)
      outBufferToWar.addInt(tree.randomItemSetPtr)
      outBufferToWar.addInt(tree.droppedItemSets?.length || 0)
      tree?.droppedItemSets?.forEach(itemSet => {
        // Write the item set
        outBufferToWar.addInt(itemSet.items?.length || 0);
        itemSet.items?.forEach(item => {
          outBufferToWar.addChars(item.itemId)
          outBufferToWar.addInt(item.chance)
        })
      })
      outBufferToWar.addInt(tree.id)
    })

    /*
      * Footer
      */
    outBufferToWar.addInt(0) // special doodad format number, fixed at 0x00
    outBufferToWar.addInt(specialDoodadsJson?.length || 0) // number of special doodads
    specialDoodadsJson?.forEach(specialDoodad => {
      outBufferToWar.addChars(specialDoodad.type)
      outBufferToWar.addInt(specialDoodad.position[0]) //x
      outBufferToWar.addInt(specialDoodad.position[1]) //y
      outBufferToWar.addInt(specialDoodad.position[2]) //z
    })

    return {
      errors: [],
      buffer: outBufferToWar.getBuffer()
    }
  }

  public warToJson(buffer: Buffer): JsonResult<[Doodad[], SpecialDoodad[]]> {
    const result: Doodad[] = []
    const outBufferToJSON = new W3Buffer(buffer)

    const fileId = outBufferToJSON.readChars(4) // W3do for doodad file
    const fileVersion = outBufferToJSON.readInt() // File version = 8
    const subVersion = outBufferToJSON.readInt() // 0B 00 00 00
    const numDoodads = outBufferToJSON.readInt() // # of doodads

    for (let i = 0; i < numDoodads; i++) {
      const doodad: Doodad = {
        type: '',
        variation: 0,
        position: [0, 0, 0],
        angle: -1,
        scale: [0, 0, 0],
        skinId: '',
        flags: { visible: true, solid: true },
        life: -1,
        randomItemSetPtr: 0,
        droppedItemSets: [],
        id: -1
      }

      doodad.type = outBufferToJSON.readChars(4)
      doodad.variation = outBufferToJSON.readInt()
      doodad.position = [outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat()] // X Y Z coords

      // Angle
      // Doodads format is unique because it uses radians for angles, as opposed
      // to angles in any other file which use degrees. Hence conversion is needed.
      //    war3map: Expects angle in RADIANS
      //    JSON: Spec defines angle in DEGREES
      doodad.angle = rad2Deg(outBufferToJSON.readFloat())

      doodad.scale = [outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat()] // X Y Z scaling
      doodad.skinId = outBufferToJSON.readChars(4)

      const flags: flag = outBufferToJSON.readByte()
      doodad.flags = {
        visible: flags === flag.visible || flags === flag.solid,
        solid: flags === flag.solid
      }

      doodad.life = outBufferToJSON.readByte() // as a %

      doodad.randomItemSetPtr = outBufferToJSON.readInt() // points to an item set defined in the map (rather than custom one defined below)
      const numberOfItemSets = outBufferToJSON.readInt() // this should be 0 if randomItemSetPtr is >= 0

      for (let j = 0; j < numberOfItemSets; j++) {
        // Read the item set
        const numberOfItems = outBufferToJSON.readInt()
        doodad.droppedItemSets.push({ items: [] })
        for (let k = 0; k < numberOfItems; k++) {
          doodad.droppedItemSets[j].items.push({
            itemId: outBufferToJSON.readChars(4), // Item ID
            chance: outBufferToJSON.readInt() // % chance to drop
          });
        }
      }

      doodad.id = outBufferToJSON.readInt()

      result.push(doodad)
    }

    const resultSpecial: SpecialDoodad[] = []
    outBufferToJSON.readInt() // special doodad format version set to '0'
    const numSpecialDoodads = outBufferToJSON.readInt()
    for (let i = 0; i < numSpecialDoodads; i++) {
      resultSpecial.push({
        type: outBufferToJSON.readChars(4), // doodad ID
        position: [outBufferToJSON.readInt(),
        outBufferToJSON.readInt(),
        outBufferToJSON.readInt()]
      })
    }

    return {
      errors: [],
      json: [result, resultSpecial]
    }
  }
}
