/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { HexBuffer } from '../HexBuffer'
import { W3Buffer } from '../W3Buffer'
import { type WarResult, type JsonResult } from '../CommonInterfaces'
import { type Translator } from './Translator'
import { FogType, type Force, type Info, type Player, ScriptLanguage, SupportedModes } from '../data/Info'

export class InfoTranslator implements Translator<Info> {
  private static instance: InfoTranslator

  private constructor() { }

  public static getInstance(): InfoTranslator {
    if (this.instance == null) {
      this.instance = new this()
    }
    return this.instance
  }

  public static jsonToWar(info: Info): WarResult {
    return this.getInstance().jsonToWar(info)
  }

  public static warToJson(buffer: Buffer): JsonResult<Info> {
    return this.getInstance().warToJson(buffer)
  }

  public jsonToWar(infoJson: Info): WarResult {
    const outBufferToWar = new HexBuffer()

    outBufferToWar.addInt(31) // file version, 0x1F
    outBufferToWar.addInt(infoJson.saves != null ? infoJson.saves : 0)
    outBufferToWar.addInt(infoJson.editorVersion != null ? infoJson.editorVersion : 0)

    outBufferToWar.addInt(infoJson.gameVersion.major)
    outBufferToWar.addInt(infoJson.gameVersion.minor)
    outBufferToWar.addInt(infoJson.gameVersion.patch)
    outBufferToWar.addInt(infoJson.gameVersion.build)

    // Map information
    outBufferToWar.addString(infoJson.map.name)
    outBufferToWar.addString(infoJson.map.author)
    outBufferToWar.addString(infoJson.map.description)
    outBufferToWar.addString(infoJson.map.recommendedPlayers)

    // Camera bounds (8 floats total)
    for (let cbIndex = 0; cbIndex < 8; cbIndex++) {
      outBufferToWar.addFloat(infoJson.camera.bounds[cbIndex])
    }

    // Camera complements (4 ints total)
    for (let ccIndex = 0; ccIndex < 4; ccIndex++) {
      outBufferToWar.addInt(infoJson.camera.complements[ccIndex])
    }

    // Playable area
    outBufferToWar.addInt(infoJson.map.playableArea.width)
    outBufferToWar.addInt(infoJson.map.playableArea.height)

    /*
         * Flags
         */
    let flags = 0
    if (infoJson.map.flags != null) { // can leave out the entire flags object, all flags will default to false
      if (infoJson.map.flags.hideMinimapInPreview) flags |= 0x0001 // hide minimap in preview screens
      if (infoJson.map.flags.modifyAllyPriorities) flags |= 0x0002 // modify ally priorities
      if (infoJson.map.flags.isMeleeMap) flags |= 0x0004 // melee map
      if (infoJson.map.flags.nonDefaultTilesetMapSizeLargeNeverBeenReducedToMedium) flags |= 0x0008 // playable map size was large and never reduced to medium (?)
      if (infoJson.map.flags.maskedPartiallyVisible) flags |= 0x0010 // masked area are partially visible
      if (infoJson.map.flags.fixedPlayerSetting) flags |= 0x0020 // fixed player setting for custom forces
      if (infoJson.map.flags.useCustomForces) flags |= 0x0040 // use custom forces
      if (infoJson.map.flags.useCustomTechtree) flags |= 0x0080 // use custom techtree
      if (infoJson.map.flags.useCustomAbilities) flags |= 0x0100 // use custom abilities
      if (infoJson.map.flags.useCustomUpgrades) flags |= 0x0200 // use custom upgrades
      if (infoJson.map.flags.mapPropertiesMenuOpenedAtLeastOnce) flags |= 0x0400 // map properties menu opened at least once since map creation (?)
      if (infoJson.map.flags.waterWavesOnCliffShores) flags |= 0x0800 // show water waves on cliff shores
      if (infoJson.map.flags.waterWavesOnRollingShores) flags |= 0x1000 // show water waves on rolling shores
      if (infoJson.map.flags.useTerrainFog) flags |= 0x2000
      if (infoJson.map.flags.tftRequired) flags |= 0x4000
      if (infoJson.map.flags.useItemClassificationSystem) flags |= 0x8000
      if (infoJson.map.flags.enableWaterTinting) flags |= 0x10000
      if (infoJson.map.flags.useAccurateProbabilityForCalculations) flags |= 0x20000
      if (infoJson.map.flags.useCustomAbilitySkins) flags |= 0x40000
      // 0x80000
      // 0x100000
      // 0x200000
      // 0x400000
      // 0x800000
      // 8 -unknown bits?
    }

    outBufferToWar.addInt(flags) // Add flags

    // Map main ground type
    outBufferToWar.addChar(infoJson.map.mainTileType)

    // Loading screen
    outBufferToWar.addInt(infoJson.loadingScreen.background)
    outBufferToWar.addString(infoJson.loadingScreen.path)
    outBufferToWar.addString(infoJson.loadingScreen.text)
    outBufferToWar.addString(infoJson.loadingScreen.title)
    outBufferToWar.addString(infoJson.loadingScreen.subtitle)

    // Use game data set
    outBufferToWar.addInt(infoJson.gameDataSet)

    // Prologue
    outBufferToWar.addString(infoJson.prologue.path)
    outBufferToWar.addString(infoJson.prologue.text)
    outBufferToWar.addString(infoJson.prologue.title)
    outBufferToWar.addString(infoJson.prologue.subtitle)

    // Fog
    outBufferToWar.addInt(infoJson.fog.type)
    outBufferToWar.addFloat(infoJson.fog.startHeight)
    outBufferToWar.addFloat(infoJson.fog.endHeight)
    outBufferToWar.addFloat(infoJson.fog.density)
    outBufferToWar.addByte(infoJson.fog.color[0])
    outBufferToWar.addByte(infoJson.fog.color[1])
    outBufferToWar.addByte(infoJson.fog.color[2])
    outBufferToWar.addByte(infoJson.fog.color[3])

    // Misc.
    // // If globalWeather is not defined or is set to 'none', use 0 sentinel value, else add char[4] -- why this distinct crap? it just breaks the w3i for me.
    // if (infoJson.globalWeather == null || infoJson.globalWeather.toLowerCase() === 'none') {
    //   outBufferToWar.addInt(0)
    // } else {
    outBufferToWar.addInt(infoJson.globalWeather)
    // }
    outBufferToWar.addString(infoJson.customSoundEnvironment != null ? infoJson.customSoundEnvironment : '')
    outBufferToWar.addByte(infoJson.customLightEnv)

    // Custom water tinting
    outBufferToWar.addByte(infoJson.water[0])
    outBufferToWar.addByte(infoJson.water[1])
    outBufferToWar.addByte(infoJson.water[2])
    outBufferToWar.addByte(infoJson.water[3])

    outBufferToWar.addInt(infoJson.scriptLanguage)
    outBufferToWar.addInt(infoJson.supportedModes)
    outBufferToWar.addInt(infoJson.gameDataVersion)

    // Players
    outBufferToWar.addInt(infoJson.players?.length || 0)
    infoJson.players?.forEach((player) => {
      outBufferToWar.addInt(player.playerNum)
      outBufferToWar.addInt(player.type)
      outBufferToWar.addInt(player.race)
      outBufferToWar.addInt(player.startingPos.fixed ? 1 : 0)
      outBufferToWar.addString(player.name)
      outBufferToWar.addFloat(player.startingPos.x)
      outBufferToWar.addFloat(player.startingPos.y)
      outBufferToWar.addInt(player.allyLowPriorities) // ally low prio flags
      outBufferToWar.addInt(player.allyHighPriorities) // ally high prio flags
      outBufferToWar.addInt(player.enemyLowPriorities) // enemy low prio flags
      outBufferToWar.addInt(player.enermyHighPriorities) // enemy high prio flags
    })

    // Forces
    outBufferToWar.addInt(infoJson.forces?.length || 0)
    infoJson.forces?.forEach((force) => {
      // Calculate flags
      let forceFlags = 0
      if (force.flags.allied) forceFlags |= 0x0001
      if (force.flags.alliedVictory) forceFlags |= 0x0002
      // Skip 0x0004
      if (force.flags.shareVision) forceFlags |= 0x0008
      if (force.flags.shareUnitControl) forceFlags |= 0x0010
      if (force.flags.shareAdvUnitControl) forceFlags |= 0x0020

      outBufferToWar.addInt(forceFlags)
      outBufferToWar.addInt(force.players)
      outBufferToWar.addString(force.name)
    })

    // Struct: upgrade avail.
    outBufferToWar.addInt(infoJson.upgrades?.length || 0)
    infoJson.upgrades?.forEach(upgrade => {
      outBufferToWar.addInt(upgrade.playerFlags)
      outBufferToWar.addChars(upgrade.upgradeId)
      outBufferToWar.addInt(upgrade.level)
      outBufferToWar.addInt(upgrade.availability)
    })

    // Struct: tech avail.
    outBufferToWar.addInt(infoJson.techBlacklist?.length || 0)
    infoJson.techBlacklist?.forEach(tech => {
      outBufferToWar.addInt(tech.playerFlags)
      outBufferToWar.addChars(tech.techId)
    })

    // Struct: random unit table
    outBufferToWar.addInt(infoJson.randomUnitTables?.length || 0)
    infoJson.randomUnitTables?.forEach(randomUnitTable => {
      outBufferToWar.addInt(randomUnitTable.id)
      outBufferToWar.addString(randomUnitTable.name)

      outBufferToWar.addInt(randomUnitTable.positions?.length || 0)
      randomUnitTable.positions?.forEach(position => outBufferToWar.addInt(position))

      outBufferToWar.addInt(randomUnitTable.chances?.length || 0)
      randomUnitTable.chances?.forEach(chance => {
        outBufferToWar.addInt(chance.chance)
        chance.unitIds.forEach(unitId => outBufferToWar.addChars(unitId)) //Amount of units must match amount of positions
      })
    })

    // Struct: random item table
    outBufferToWar.addInt(infoJson.randomItemTables?.length || 0)
    infoJson.randomItemTables?.forEach(randomItemTable => {
      outBufferToWar.addInt(randomItemTable.id)
      outBufferToWar.addString(randomItemTable.name)

      outBufferToWar.addInt(randomItemTable.rows?.length || 0)
      randomItemTable.rows?.forEach(randomItemPool => {
        outBufferToWar.addInt(randomItemPool.objects?.length || 0)
        randomItemPool.objects?.forEach(randomItem => {
          outBufferToWar.addInt(randomItem.chance)
          outBufferToWar.addChars(randomItem.objectId)
        })
      })
    })
    return {
      errors: [],
      buffer: outBufferToWar.getBuffer()
    }
  }

  public warToJson(buffer: Buffer): JsonResult<Info> {
    const result: Info = {
      map: {
        name: '',
        author: '',
        description: '',
        recommendedPlayers: '',
        playableArea: {
          width: 64,
          height: 64
        },
        mainTileType: '',
        flags: {
          hideMinimapInPreview: false, // 0x0001: 1=hide minimap in preview screens
          modifyAllyPriorities: true, // 0x0002: 1=modify ally priorities
          isMeleeMap: false, // 0x0004: 1=melee map
          nonDefaultTilesetMapSizeLargeNeverBeenReducedToMedium: false, // 0x0008: 1=playable map size was large and has never been reduced to medium (?)
          maskedPartiallyVisible: false, // 0x0010: 1=masked area are partially visible
          fixedPlayerSetting: false, // 0x0020: 1=fixed player setting for custom forces
          useCustomForces: false, // 0x0040: 1=use custom forces
          useCustomTechtree: false, // 0x0080: 1=use custom techtree
          useCustomAbilities: false, // 0x0100: 1=use custom abilities
          useCustomUpgrades: false, // 0x0200: 1=use custom upgrades
          mapPropertiesMenuOpenedAtLeastOnce: false, // 0x0400: 1=map properties menu opened at least once since map creation (?)
          waterWavesOnCliffShores: false, // 0x0800: 1=show water waves on cliff shores
          waterWavesOnRollingShores: false, // 0x1000: 1=show water waves on rolling shores
          useTerrainFog: false, // 0x2000
          tftRequired: false, // 0x4000
          useItemClassificationSystem: false, // 0x8000: 1=use item classification system
          enableWaterTinting: false, // 0x10000
          useAccurateProbabilityForCalculations: false, // 0x20000
          useCustomAbilitySkins: false // 0x40000
        }
      },
      loadingScreen: {
        background: 0,
        path: '',
        text: '',
        title: '',
        subtitle: ''
      },
      prologue: {
        path: '',
        text: '',
        title: '',
        subtitle: ''
      },
      fog: {
        type: FogType.Linear,
        startHeight: 0,
        endHeight: 0,
        density: 0,
        color: [0, 0, 0, 1]
      },
      camera: {
        bounds: [],
        complements: []
      },
      players: [],
      forces: [],
      saves: 0,
      editorVersion: 0,
      scriptLanguage: ScriptLanguage.JASS,
      supportedModes: SupportedModes.Both,
      gameVersion: {
        major: 0,
        minor: 0,
        patch: 0,
        build: 0
      },
      globalWeather: 0,
      customSoundEnvironment: '',
      customLightEnv: 0,
      water: [],
      gameDataVersion: 0,
      gameDataSet: 0,
      upgrades: [],
      techBlacklist: [],
      randomUnitTables: [],
      randomItemTables: []
    }
    const outBufferToJSON = new W3Buffer(buffer)

    const fileVersion = outBufferToJSON.readInt()

    result.saves = outBufferToJSON.readInt()
    result.editorVersion = outBufferToJSON.readInt()

    result.gameVersion = {
      major: outBufferToJSON.readInt(),
      minor: outBufferToJSON.readInt(),
      patch: outBufferToJSON.readInt(),
      build: outBufferToJSON.readInt()
    }

    result.map.name = outBufferToJSON.readString()
    result.map.author = outBufferToJSON.readString()
    result.map.description = outBufferToJSON.readString()
    result.map.recommendedPlayers = outBufferToJSON.readString()

    result.camera.bounds = [
      outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat(),
      outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat(), outBufferToJSON.readFloat()
    ]

    result.camera.complements = [
      outBufferToJSON.readInt(), outBufferToJSON.readInt(), outBufferToJSON.readInt(), outBufferToJSON.readInt()
    ]

    result.map.playableArea = {
      width: outBufferToJSON.readInt(),
      height: outBufferToJSON.readInt()
    }

    const flags = outBufferToJSON.readInt()
    result.map.flags = {
      hideMinimapInPreview: !!(flags & 0x0001),
      modifyAllyPriorities: !!(flags & 0x0002),
      isMeleeMap: !!(flags & 0x0004),
      nonDefaultTilesetMapSizeLargeNeverBeenReducedToMedium: !!(flags & 0x0008),
      maskedPartiallyVisible: !!(flags & 0x0010),
      fixedPlayerSetting: !!(flags & 0x0020),
      useCustomForces: !!(flags & 0x0040),
      useCustomTechtree: !!(flags & 0x0080),
      useCustomAbilities: !!(flags & 0x0100),
      useCustomUpgrades: !!(flags & 0x0200),
      mapPropertiesMenuOpenedAtLeastOnce: !!(flags & 0x0400),
      waterWavesOnCliffShores: !!(flags & 0x0800),
      waterWavesOnRollingShores: !!(flags & 0x1000),
      useTerrainFog: !!(flags & 0x2000),
      tftRequired: !!(flags & 0x4000),
      useItemClassificationSystem: !!(flags & 0x8000),
      enableWaterTinting: !!(flags & 0x10000),
      useAccurateProbabilityForCalculations: !!(flags & 0x20000),
      useCustomAbilitySkins: !!(flags & 0x40000)
    }

    result.map.mainTileType = outBufferToJSON.readChars()

    result.loadingScreen.background = outBufferToJSON.readInt()
    result.loadingScreen.path = outBufferToJSON.readString()
    result.loadingScreen.text = outBufferToJSON.readString()
    result.loadingScreen.title = outBufferToJSON.readString()
    result.loadingScreen.subtitle = outBufferToJSON.readString()

    result.gameDataSet = outBufferToJSON.readInt() // 0 = standard

    result.prologue = {
      path: outBufferToJSON.readString(),
      text: outBufferToJSON.readString(),
      title: outBufferToJSON.readString(),
      subtitle: outBufferToJSON.readString()
    }

    result.fog = {
      type: outBufferToJSON.readInt(),
      startHeight: outBufferToJSON.readFloat(),
      endHeight: outBufferToJSON.readFloat(),
      density: outBufferToJSON.readFloat(),
      color: [outBufferToJSON.readByte(), outBufferToJSON.readByte(), outBufferToJSON.readByte(), outBufferToJSON.readByte()] // R G B A
    }

    result.globalWeather = outBufferToJSON.readInt()
    result.customSoundEnvironment = outBufferToJSON.readString()
    result.customLightEnv = outBufferToJSON.readByte()
    result.water = [outBufferToJSON.readByte(), outBufferToJSON.readByte(), outBufferToJSON.readByte(), outBufferToJSON.readByte()] // R G B A

    result.scriptLanguage = outBufferToJSON.readInt()
    result.supportedModes = outBufferToJSON.readInt()
    result.gameDataVersion = outBufferToJSON.readInt()

    // Struct: players
    const numPlayers = outBufferToJSON.readInt()
    for (let i = 0; i < numPlayers; i++) {
      const player: Player = {
        name: '',
        startingPos: { x: 0, y: 0, fixed: false },
        playerNum: 0,
        type: 0,
        race: 0,
        allyLowPriorities: 0,
        allyHighPriorities: 0,
        enemyLowPriorities: 0,
        enermyHighPriorities: 0
      }

      player.playerNum = outBufferToJSON.readInt()
      player.type = outBufferToJSON.readInt() // 1=Human, 2=Computer, 3=Neutral, 4=Rescuable
      player.race = outBufferToJSON.readInt() // 1=Human, 2=Orc, 3=Undead, 4=Night Elf

      const isPlayerStartPositionFixed: boolean = outBufferToJSON.readInt() === 1 // 00000001 = fixed start position

      player.name = outBufferToJSON.readString()
      player.startingPos = {
        x: outBufferToJSON.readFloat(),
        y: outBufferToJSON.readFloat(),
        fixed: isPlayerStartPositionFixed
      }

      player.allyLowPriorities = outBufferToJSON.readInt() // ally low priorities flags (bit "x"=1 --> set for player "x")
      player.allyHighPriorities = outBufferToJSON.readInt() // ally high priorities flags (bit "x"=1 --> set for player "x")
      player.enemyLowPriorities = outBufferToJSON.readInt() // enemy low priorities flags
      player.enermyHighPriorities = outBufferToJSON.readInt() // enemy high priorities flags

      result.players.push(player)
    }

    // Struct: forces
    const numForces = outBufferToJSON.readInt()
    for (let i = 0; i < numForces; i++) {
      const force: Force = {
        flags: { allied: false, alliedVictory: true, shareVision: true, shareUnitControl: false, shareAdvUnitControl: false },
        players: 0,
        name: ''
      }

      const forceFlag = outBufferToJSON.readInt()
      force.flags = {
        allied: !!(forceFlag & 0b1), // 0x00000001: allied (force 1)
        alliedVictory: !!(forceFlag & 0b10), // 0x00000002: allied victory
        // 0x00000004: share vision (the documentation has this incorrect)
        shareVision: !!(forceFlag & 0b1000), // 0x00000008: share vision
        shareUnitControl: !!(forceFlag & 0b10000), // 0x00000010: share unit control
        shareAdvUnitControl: !!(forceFlag & 0b100000) // 0x00000020: share advanced unit control
      }
      force.players = outBufferToJSON.readInt() // UNSUPPORTED: (bit "x"=1 --> player "x" is in this force; but carried over for accurate translation
      force.name = outBufferToJSON.readString()

      result.forces.push(force)
    }

    // Struct: upgrade avail.
    const numUpgrades = outBufferToJSON.readInt()
    for (let i = 0; i < numUpgrades; i++) {
      result.upgrades.push({
        playerFlags: outBufferToJSON.readInt(), // Player Flags (bit "x"=1 if this change applies for player "x")
        upgradeId: outBufferToJSON.readChars(4), // upgrade id (as in UpgradeData.slk)
        level: outBufferToJSON.readInt(), // Level of the upgrade for which the availability is changed (this is actually the level - 1, so 1 => 0)
        availability: outBufferToJSON.readInt() // Availability (0 = unavailable, 1 = available, 2 = researched)
      })
    }

    // Struct: tech avail.
    const numTech = outBufferToJSON.readInt()
    for (let i = 0; i < numTech; i++) {
      result.techBlacklist.push({
        playerFlags: outBufferToJSON.readInt(), // Player Flags (bit "x"=1 if this change applies for player "x")
        techId: outBufferToJSON.readChars(4) // tech id (this can be an item, unit or ability)
      })
    }

    // Struct: random unit table
    const numUnitTable = outBufferToJSON.readInt()
    for (let i = 0; i < numUnitTable; i++) {
      result.randomUnitTables.push({
        id: outBufferToJSON.readInt(), // Group number
        name: outBufferToJSON.readString(), // Group name
        positions: [],
        chances: []
      })

      const numPositions = outBufferToJSON.readInt() // Number "m" of positions
      for (let j = 0; j < numPositions; j++) {
        result.randomUnitTables[i].positions.push(outBufferToJSON.readInt()) // Apparently, the following is false: unit table (=0), a building table (=1) or an item table (=2)
      }

      const numChances = outBufferToJSON.readInt()
      for (let j = 0; j < numChances; j++) {
        result.randomUnitTables[i].chances.push({
          chance: outBufferToJSON.readInt(), // Chance of the unit/item (percentage)
          unitIds: []
        })

        for (let k = 0; k < numPositions; k++) {
          result.randomUnitTables[i].chances[j].unitIds.push(outBufferToJSON.readChars(4)) // unit/item id's for this line specified
        }
      }
    }

    // Struct: random item table
    const numItemTable = outBufferToJSON.readInt()
    for (let i = 0; i < numItemTable; i++) {
      result.randomItemTables.push({
        id: outBufferToJSON.readInt(), // Group number
        name: outBufferToJSON.readString(), // Group name
        rows: []
      })

      const itemSetsCurrentTable = outBufferToJSON.readInt() // Number "m" of item sets on the current item table
      for (let j = 0; j < itemSetsCurrentTable; j++) {
        result.randomItemTables[i].rows.push({
          type: 2, // unit table (=0), a building table (=1) or an item table (=2) - not used
          objects: []
        })

        const itemsInItemSet = outBufferToJSON.readInt() // Number "i" of items on the current item set
        for (let k = 0; k < itemsInItemSet; k++) {
          result.randomItemTables[i].rows[j].objects.push({
            chance: outBufferToJSON.readInt(), // Percentual chance
            objectId: outBufferToJSON.readChars(4) // Item id (as in ItemData.slk)
          })
        }
      }
    }

    return {
      errors: [],
      json: result
    }
  }
}
