/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { type JsonResult, type WarResult } from '../CommonInterfaces';
import { Terrain } from '../data/Terrain';
import { HexBuffer } from '../HexBuffer';
import { W3Buffer } from '../W3Buffer';
import { Translator } from './Translator';

function splitLargeArrayIntoWidthArrays<T>(array: T[], width: number) {
  const rows: T[][] = [];
  for (let i = 0; i < array.length / width; i++) {
    rows.push(array.slice(i * width, (i + 1) * width));
  }
  return rows;
}

export class TerrainTranslator implements Translator<Terrain> {
  private static instance: TerrainTranslator;

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }

  public static jsonToWar(terrain: Terrain): WarResult {
    return this.getInstance().jsonToWar(terrain);
  }

  public static warToJson(buffer: Buffer): JsonResult<Terrain> {
    return this.getInstance().warToJson(buffer);
  }

  public jsonToWar(terrainJson: Terrain): WarResult {
    const outBufferToWar = new HexBuffer();

    /*
         * Header
         */
    outBufferToWar.addChars('W3E!'); // file id
    outBufferToWar.addInt(11); // file version
    outBufferToWar.addChar(terrainJson.tileset); // base tileset
    outBufferToWar.addInt(+terrainJson.customTileset); // 1 = using custom tileset, 0 = not

    /*
         * Tiles
         */
    outBufferToWar.addInt(terrainJson.tilePalette?.length || 0);
    terrainJson.tilePalette?.forEach((tile) => {
      outBufferToWar.addChars(tile);
    });

    /*
         * Cliffs
         */
    outBufferToWar.addInt(terrainJson.cliffTilePalette?.length || 0);
    terrainJson.cliffTilePalette?.forEach((cliffTile) => {
      outBufferToWar.addChars(cliffTile);
    });

    /*
         * Map size data
         */
    outBufferToWar.addInt(terrainJson.map.width + 1);
    outBufferToWar.addInt(terrainJson.map.height + 1);

    /*
         * Map offset
         */
    outBufferToWar.addFloat(terrainJson.map.offset.x);
    outBufferToWar.addFloat(terrainJson.map.offset.y);

    /*
         * Tile points
         */
    // Partition the terrainJson masks into "chunks" (i.e. rows) of (width+1) length,
    // reverse that list of rows (due to vertical flipping), and then write the rows out
    const rows = {
      groundHeight: terrainJson.groundHeight,
      waterHeight: terrainJson.waterHeight,
      boundaryFlag: terrainJson.boundaryFlag,
      flags: terrainJson.flags,
      groundTexture: terrainJson.groundTexture,
      groundVariation: terrainJson.groundVariation,
      cliffVariation: terrainJson.cliffVariation,
      cliffTexture: terrainJson.cliffTexture,
      layerHeight: terrainJson.layerHeight,
      tileset: '',
      customTileset: false,
      tilePalette: [],
      cliffTilePalette: [],
    };

    for (let i = 0; i < rows.groundHeight.length; i++) {
      for (let j = 0; j < rows.groundHeight[i].length; j++) {
        // these bit operations are based off documentation from https://github.com/stijnherfst/HiveWE/wiki/war3map.w3e-Terrain
        const groundHeight = rows.groundHeight[i][j];
        const waterHeight = rows.waterHeight[i][j];
        const boundaryFlag = rows.boundaryFlag[i][j];
        const flags = rows.flags[i][j];
        const groundTexture = rows.groundTexture[i][j];
        const groundVariation = rows.groundVariation[i][j];
        const cliffVariation = rows.cliffVariation[i][j];
        const cliffTexture = rows.cliffTexture[i][j];
        const layerHeight = rows.layerHeight[i][j];

        const hasBoundaryFlag = boundaryFlag ? 0x4000 : 0;

        outBufferToWar.addShort(groundHeight);
        outBufferToWar.addShort(waterHeight | hasBoundaryFlag);
        outBufferToWar.addByte(flags | groundTexture);
        outBufferToWar.addByte(groundVariation | cliffVariation);
        outBufferToWar.addByte(cliffTexture | layerHeight);
      }
    }

    return {
      errors: [],
      buffer: outBufferToWar.getBuffer(),
    };
  }

  public warToJson(buffer: Buffer): JsonResult<Terrain> {
    // create buffer
    const result: Terrain = {
      tileset: '',
      customTileset: false,
      tilePalette: [],
      cliffTilePalette: [],
      map: {
        width: 1,
        height: 1,
        offset: {
          x: 0,
          y: 0,
        },
      },
      groundHeight: [],
      waterHeight: [],
      boundaryFlag: [],
      flags: [],
      groundTexture: [],
      groundVariation: [],
      cliffVariation: [],
      cliffTexture: [],
      layerHeight: [],
    };
    const outBufferToJSON = new W3Buffer(buffer);

    /**
         * Header
         */
    const w3eHeader = outBufferToJSON.readChars(4); // W3E!
    const version = outBufferToJSON.readInt(); // 0B 00 00 00
    const tileset = outBufferToJSON.readChars(1); // tileset
    const customTileset = (outBufferToJSON.readInt() === 1);

    result.tileset = tileset;
    result.customTileset = customTileset;

    /**
         * Tiles
         */
    const numTilePalettes = outBufferToJSON.readInt();
    const tilePalettes: string[] = [];
    for (let i = 0; i < numTilePalettes; i++) {
      tilePalettes.push(outBufferToJSON.readChars(4));
    }

    result.tilePalette = tilePalettes;

    /**
         * Cliffs
         */
    const numCliffTilePalettes = outBufferToJSON.readInt();
    const cliffPalettes: string[] = [];
    for (let i = 0; i < numCliffTilePalettes; i++) {
      const cliffPalette = outBufferToJSON.readChars(4);
      cliffPalettes.push(cliffPalette);
    }

    result.cliffTilePalette = cliffPalettes;

    /**
         * map dimensions
         */
    const width = outBufferToJSON.readInt() - 1;
    const height = outBufferToJSON.readInt() - 1;
    result.map = { width, height, offset: { x: 0, y: 0 } };

    const offsetX = outBufferToJSON.readFloat();
    const offsetY = outBufferToJSON.readFloat();
    result.map.offset = { x: offsetX, y: offsetY };

    /**
         * map tiles
         */
    const arrGroundHeight: number[] = [];
    const arrWaterHeight: number[] = [];
    const arrBoundaryFlag: boolean[] = [];
    const arrFlags: number[] = [];
    const arrGroundTexture: number[] = [];
    const arrGroundVariation: number[] = [];
    const arrCliffVariation: number[] = [];
    const arrCliffTexture: number[] = [];
    const arrLayerHeight: number[] = [];

    while (!outBufferToJSON.isExhausted()) {
      const groundHeight = outBufferToJSON.readShort();
      const waterHeightAndBoundary = outBufferToJSON.readShort();
      const flagsAndGroundTexture = outBufferToJSON.readByte();
      const groundAndCliffVariation = outBufferToJSON.readByte();
      const cliffTextureAndLayerHeight = outBufferToJSON.readByte();

      // parse out different bits (based on documentation from https://github.com/stijnherfst/HiveWE/wiki/war3map.w3e-Terrain)
      const waterHeight = waterHeightAndBoundary & 32767;
      const boundaryFlag = (waterHeightAndBoundary & 0x4000) === 0x4000;
      const flags = flagsAndGroundTexture & 240;
      const groundTexture = flagsAndGroundTexture & 15;
      const groundVariation = groundAndCliffVariation & 248;
      const cliffVariation = groundAndCliffVariation & 7;
      const cliffTexture = cliffTextureAndLayerHeight & 240;
      const layerHeight = cliffTextureAndLayerHeight & 15;

      arrGroundHeight.push(groundHeight);
      arrWaterHeight.push(waterHeight);
      arrBoundaryFlag.push(boundaryFlag);
      arrFlags.push(flags);
      arrGroundTexture.push(groundTexture);
      arrGroundVariation.push(groundVariation);
      arrCliffVariation.push(cliffVariation);
      arrCliffTexture.push(cliffTexture);
      arrLayerHeight.push(layerHeight);
    }

    result.groundHeight = splitLargeArrayIntoWidthArrays(arrGroundHeight, result.map.width + 1);
    result.waterHeight = splitLargeArrayIntoWidthArrays(arrWaterHeight, result.map.width + 1);
    result.boundaryFlag = splitLargeArrayIntoWidthArrays(arrBoundaryFlag, result.map.width + 1);
    result.flags = splitLargeArrayIntoWidthArrays(arrFlags, result.map.width + 1).reverse();
    result.groundTexture = splitLargeArrayIntoWidthArrays(arrGroundTexture, result.map.width + 1);
    result.groundVariation = splitLargeArrayIntoWidthArrays(arrGroundVariation, result.map.width + 1);
    result.cliffVariation = splitLargeArrayIntoWidthArrays(arrCliffVariation, result.map.width + 1);
    result.cliffTexture = splitLargeArrayIntoWidthArrays(arrCliffTexture, result.map.width + 1);
    result.layerHeight = splitLargeArrayIntoWidthArrays(arrLayerHeight, result.map.width + 1);

    return {
      errors: [],
      json: result,
    };
  }
}
