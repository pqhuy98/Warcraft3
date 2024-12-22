import { HexBuffer } from '../HexBuffer'
import { W3Buffer } from '../W3Buffer'
import { type WarResult, type JsonResult } from '../CommonInterfaces'
import { type Translator } from './Translator'
import { type Camera } from '../data/Camera'

export class CamerasTranslator implements Translator<Camera[]> {
  private static instance: CamerasTranslator

  private constructor () {}

  public static getInstance (): CamerasTranslator {
    if (this.instance == null) {
      this.instance = new this()
    }
    return this.instance
  }

  public static jsonToWar (cameras: Camera[]): WarResult {
    return this.getInstance().jsonToWar(cameras)
  }

  public static warToJson (buffer: Buffer): JsonResult<Camera[]> {
    return this.getInstance().warToJson(buffer)
  }

  public jsonToWar (cameras: Camera[]): WarResult {
    const outBufferToWar = new HexBuffer()

    /*
         * Header
         */
    outBufferToWar.addInt(0) // file version
    outBufferToWar.addInt(cameras?.length || 0) // number of cameras

    /*
         * Body
         */
    cameras?.forEach((camera) => {
      outBufferToWar.addFloat(camera.target.x)
      outBufferToWar.addFloat(camera.target.y)
      outBufferToWar.addFloat(camera.offsetZ)
      outBufferToWar.addFloat(camera.rotation != null ? camera.rotation : 0) // optional
      outBufferToWar.addFloat(camera.aoa)
      outBufferToWar.addFloat(camera.distance)
      outBufferToWar.addFloat(camera.roll != null ? camera.roll : 0)
      outBufferToWar.addFloat(camera.fov)
      outBufferToWar.addFloat(camera.farClipping)
      outBufferToWar.addFloat(100) // (?) unknown - usually set to 100

      // Camera name - must be null-terminated
      outBufferToWar.addString(camera.name)
    })

    return {
      errors: [],
      buffer: outBufferToWar.getBuffer()
    }
  }

  public warToJson (buffer: Buffer): JsonResult<Camera[]> {
    const result: Camera[] = []
    const outBufferToJSON = new W3Buffer(buffer)

    const fileVersion = outBufferToJSON.readInt() // File version
    const numCameras = outBufferToJSON.readInt() // # of cameras

    for (let i = 0; i < numCameras; i++) {
      const camera: Camera = {
        target: {
          x: 0,
          y: 0
        },
        offsetZ: 0,
        rotation: 0,
        aoa: 0,
        distance: 0,
        roll: 0,
        fov: 0,
        farClipping: 0,
        name: ''
      }

      camera.target.x = outBufferToJSON.readFloat()
      camera.target.y = outBufferToJSON.readFloat()
      camera.offsetZ = outBufferToJSON.readFloat()
      camera.rotation = outBufferToJSON.readFloat()
      camera.aoa = outBufferToJSON.readFloat() // angle of attack
      camera.distance = outBufferToJSON.readFloat()
      camera.roll = outBufferToJSON.readFloat()
      camera.fov = outBufferToJSON.readFloat() // field of view
      camera.farClipping = outBufferToJSON.readFloat()
      outBufferToJSON.readFloat() // consume this unknown float field
      camera.name = outBufferToJSON.readString()

      result.push(camera)
    }

    return {
      errors: [],
      json: result
    }
  }
}
