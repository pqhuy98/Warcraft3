import { HexBuffer } from '../HexBuffer'
import { W3Buffer } from '../W3Buffer'
import { type WarResult, type JsonResult } from '../CommonInterfaces'
import { RandomSpawn, type Unit } from '../data/Unit'
import { type Translator } from './Translator'
import { type UnitSet } from '../data/UnitSet'

export class UnitsTranslator implements Translator<Unit[]> {
  private static instance: UnitsTranslator

  private constructor() { }

  public static getInstance(): UnitsTranslator {
    if (this.instance == null) {
      this.instance = new this()
    }
    return this.instance
  }

  public static jsonToWar(units: Unit[]): WarResult {
    return this.getInstance().jsonToWar(units)
  }

  public static warToJson(buffer: Buffer): JsonResult<Unit[]> {
    return this.getInstance().warToJson(buffer)
  }

  public jsonToWar(unitsJson: Unit[]): WarResult {
    const outBufferToWar = new HexBuffer()

    /*
         * Header
         */
    outBufferToWar.addChars('W3do')
    outBufferToWar.addInt(9)
    outBufferToWar.addInt(11)
    outBufferToWar.addInt(unitsJson?.length || 0) // number of units

    /*
         * Body
         */
    unitsJson?.forEach((unit) => {
      outBufferToWar.addChars(unit.type) // type
      outBufferToWar.addInt(unit.variation != null ? unit.variation : 0) // variation
      outBufferToWar.addFloat(unit.position[0]) // position x
      outBufferToWar.addFloat(unit.position[1]) // position y
      outBufferToWar.addFloat(unit.position[2]) // position z
      outBufferToWar.addFloat(unit.rotation != null ? unit.rotation : 0) // rotation angle

      if (unit.scale == null) unit.scale = [1, 1, 1]
      outBufferToWar.addFloat(unit.scale[0] != null ? unit.scale[0] : 1) // scale x
      outBufferToWar.addFloat(unit.scale[1] != null ? unit.scale[1] : 1) // scale y
      outBufferToWar.addFloat(unit.scale[2] != null ? unit.scale[2] : 1) // scale z

      outBufferToWar.addChars(unit.skin)

      // Unit flags
      outBufferToWar.addByte(0) // UNSUPPORTED: flags

      outBufferToWar.addInt(unit.player) // player #
      outBufferToWar.addByte(0) // (byte unknown - 0)
      outBufferToWar.addByte(0) // (byte unknown - 0)
      outBufferToWar.addInt(unit.hitpoints) // hitpoints
      outBufferToWar.addInt(unit.mana != null ? unit.mana : 0) // mana

      outBufferToWar.addInt(unit.randomItemSetPtr)
      outBufferToWar.addInt(unit.droppedItemSets?.length || 0)
      unit.droppedItemSets?.forEach(itemSet => {
        outBufferToWar.addInt(itemSet.items?.length || 0)
        itemSet.items?.forEach(item => {
          outBufferToWar.addChars(item.itemId)
          outBufferToWar.addInt(item.chance)
        })
      })

      // Gold amount
      // Required if unit is a gold mine
      // Optional (set to zero) if unit is not a gold mine
      outBufferToWar.addInt(unit.gold)
      // outBufferToWar.addInt(unit.type === 'ngol' ? unit.gold : 0);

      outBufferToWar.addFloat(unit.targetAcquisition != null ? unit.targetAcquisition : 0) // target acquisition

      // Unit hero attributes
      // Can be left unspecified, but values can never be below 1
      if (unit.hero == null) unit.hero = { level: 1, str: 1, agi: 1, int: 1 }
      outBufferToWar.addInt(unit.hero.level)
      outBufferToWar.addInt(unit.hero.str)
      outBufferToWar.addInt(unit.hero.agi)
      outBufferToWar.addInt(unit.hero.int)

      // Inventory - - -
      if (unit.inventory == null) unit.inventory = []
      outBufferToWar.addInt(unit.inventory?.length || 0) // # items in inventory
      unit.inventory?.forEach(item => {
        outBufferToWar.addInt(item.slot - 1) // zero-index item slot
        outBufferToWar.addChars(item.type)
      })

      // Modified abilities - - -
      if (unit.abilities == null) unit.abilities = []
      outBufferToWar.addInt(unit.abilities?.length || 0) // # modified abilities
      unit.abilities?.forEach((ability) => {
        outBufferToWar.addChars(ability.ability) // ability string
        outBufferToWar.addInt(+ability.active) // 0 = not active, 1 = active
        outBufferToWar.addInt(ability.level)
      })

      // Random
      outBufferToWar.addInt(unit.random.type)
      switch (unit.random.type) {
        case 0:
          outBufferToWar.addByte(unit.random.level as number)
          outBufferToWar.addByte(0) // Unknown - apparently it's part of level ^
          outBufferToWar.addByte(0) // Unknown - apparently it's part of level ^
          outBufferToWar.addByte(unit.random.itemClass as number)
          break
        case 1:
          outBufferToWar.addInt(unit.random.groupIndex as number)
          outBufferToWar.addInt(unit.random.columnIndex as number)
          break
        case 2:
          outBufferToWar.addInt((unit.random.unitSet as UnitSet)?.length || 0)
          unit.random.unitSet?.forEach(spawnableUnit => {
            outBufferToWar.addChars(spawnableUnit.unitId)
            outBufferToWar.addInt(spawnableUnit.chance)
          })
          break
      }

      outBufferToWar.addInt(unit.color != null ? unit.color : unit.player) // custom color, defaults to owning player
      outBufferToWar.addInt(unit.waygate) // waygate
      outBufferToWar.addInt(unit.id) // id
    })

    return {
      errors: [],
      buffer: outBufferToWar.getBuffer()
    }
  }

  public warToJson(buffer: Buffer): JsonResult<Unit[]> {
    const result: Unit[] = []
    const outBufferToJSON = new W3Buffer(buffer)

    const fileId = outBufferToJSON.readChars(4) // W3do for doodad file
    const fileVersion = outBufferToJSON.readInt() // File version = 7
    const subVersion = outBufferToJSON.readInt() // 0B 00 00 00
    const numUnits = outBufferToJSON.readInt() // # of units

    for (let i = 0; i < numUnits; i++) {
      const unit: Unit = {
        type: '',
        variation: -1,
        position: [0, 0, 0],
        rotation: 0,
        scale: [0, 0, 0],
        hero: { level: 1, str: 1, agi: 1, int: 1 },
        skin: '',
        inventory: [],
        abilities: [],
        player: 0,
        hitpoints: -1,
        mana: -1,
        randomItemSetPtr: -1,
        droppedItemSets: [],
        gold: 0,
        targetAcquisition: -1,
        random: {
          type: -1,
        } as RandomSpawn,
        color: -1,
        waygate: -1,
        id: -1
      }

      unit.type = outBufferToJSON.readChars(4) // (iDNR = random item, uDNR = random unit)
      unit.variation = outBufferToJSON.readInt()
      unit.position = [outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat()] // X Y Z coords
      unit.rotation = outBufferToJSON.readFloat()
      unit.scale = [outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat()] // X Y Z scaling

      if (fileVersion > 7) {
        unit.skin = outBufferToJSON.readChars(4)
      } else { // default unit's skin - Note: Probably fails for items?
        unit.skin = unit.type
      }

      // UNSUPPORTED: flags
      const flags = outBufferToJSON.readByte()
      unit.player = outBufferToJSON.readInt() // (player1 = 0, 16=neutral passive); note: wc3 patch now has 24 max players

      outBufferToJSON.readByte() // unknown
      outBufferToJSON.readByte() // unknown

      unit.hitpoints = outBufferToJSON.readInt() // -1 = use default
      unit.mana = outBufferToJSON.readInt() // -1 = use default, 0 = unit doesn't have mana

      if (subVersion !== 9) { // not RoC
        unit.randomItemSetPtr = outBufferToJSON.readInt()
      }
      const numDroppedItemSets = outBufferToJSON.readInt()
      for (let j = 0; j < numDroppedItemSets; j++) {
        unit.droppedItemSets.push({ items: [] })
        const numDroppableItems = outBufferToJSON.readInt()
        for (let k = 0; k < numDroppableItems; k++) {
          unit.droppedItemSets[j].items.push({
            itemId: outBufferToJSON.readChars(4), // Item ID
            chance: outBufferToJSON.readInt() // % chance to drop
          })
        }
      }

      unit.gold = outBufferToJSON.readInt()
      unit.targetAcquisition = outBufferToJSON.readFloat() // (-1 = normal, -2 = camp)

      unit.hero = {
        level: outBufferToJSON.readInt(), // non-hero units = 1
        str: 0,
        agi: 0,
        int: 0
      }
      if (subVersion !== 9) { // not RoC
        unit.hero.str = outBufferToJSON.readInt()
        unit.hero.agi = outBufferToJSON.readInt()
        unit.hero.int = outBufferToJSON.readInt()
      }

      const numItemsInventory = outBufferToJSON.readInt()
      for (let j = 0; j < numItemsInventory; j++) {
        unit.inventory.push({
          slot: outBufferToJSON.readInt() + 1, // the int is 0-based, but json format wants 1-6
          type: outBufferToJSON.readChars(4) // Item ID
        })
      }

      const numModifiedAbil = outBufferToJSON.readInt()
      for (let j = 0; j < numModifiedAbil; j++) {
        unit.abilities.push({
          ability: outBufferToJSON.readChars(4), // Ability ID
          active: outBufferToJSON.readInt() === 1, // autocast active? 0=no, 1=active
          level: outBufferToJSON.readInt()
        })
      }

      unit.random.type = outBufferToJSON.readInt() // random unit/item flag "r" (for uDNR units and iDNR items)
      if (unit.random.type === 0) {
        // 0 = Any neutral passive building/item, in this case we have
        //   byte[3]: level of the random unit/item,-1 = any (this is actually interpreted as a 24-bit number)
        //   byte: item class of the random item, 0 = any, 1 = permanent ... (this is 0 for units)
        //   r is also 0 for non random units/items so we have these 4 bytes anyway (even if the id wasnt uDNR or iDNR)
        unit.random.level = outBufferToJSON.readByte()
        outBufferToJSON.readByte() // unknown
        outBufferToJSON.readByte() // unknown
        unit.random.itemClass = outBufferToJSON.readByte()
      } else if (unit.random.type === 1) {
        // 1 = random unit from random group (defined in the w3i), in this case we have
        //   int: unit group number (which group from the global table)
        //   int: position number (which column of this group)
        //   the column should of course have the item flag set (in the w3i) if this is a random item
        unit.random.groupIndex = outBufferToJSON.readInt()
        unit.random.columnIndex = outBufferToJSON.readInt()
      } else if (unit.random.type === 2) {
        // 2 = random unit from custom table, in this case we have
        //   int: number "n" of different available units
        //   then we have n times a random unit structure
        const numDiffAvailUnits = outBufferToJSON.readInt()
        unit.random.unitSet = []
        for (let k = 0; k < numDiffAvailUnits; k++) {
          unit.random.unitSet.push({
            unitId: outBufferToJSON.readChars(4), // Unit ID
            chance: outBufferToJSON.readInt() // % chance
          })
        }
      }

      unit.color = outBufferToJSON.readInt()
      unit.waygate = outBufferToJSON.readInt() // waygate (-1 = deactivated, else its the creation number of the target rect as in war3map.w3r)
      unit.id = outBufferToJSON.readInt()

      result.push(unit)
    }

    return {
      errors: [],
      json: result
    }
  }
}
