import { readFileSync } from "fs";

export interface Material {
  name: string;
  Ns?: number;
  Ka?: [number, number, number];
  Ks?: [number, number, number];
  Ke?: [number, number, number];
  Ni?: number;
  illum?: number;
  map_Kd?: string;
  map_d?: string;
}

export class MTLFile {
  materials: Material[] = [];

  constructor(filePath: string) {
    let mtlContent: string
    try {
      mtlContent = readFileSync(filePath, "utf-8")
    } catch (e) {
      console.error("Cannot read mtl file", filePath, " - skip it")
      return;
    }

    const lines = mtlContent.split('\n');
    let currentMaterial: Material | null = null;

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.length === 0 || trimmedLine.startsWith('#')) {
        return; // Ignore empty lines and comments
      }

      const [key, ...values] = trimmedLine.split(/\s+/);
      
      switch (key) {
        case 'newmtl':
          if (currentMaterial) {
            this.materials.push(currentMaterial);
          }
          currentMaterial = { name: values[0] };
          break;
        case 'Ns':
          if (currentMaterial) currentMaterial.Ns = parseFloat(values[0]);
          break;
        case 'Ka':
        case 'Ks':
        case 'Ke':
          if (currentMaterial) {
            currentMaterial[key as 'Ka' | 'Ks' | 'Ke'] = values.map(Number) as [number, number, number];
          }
          break;
        case 'Ni':
          if (currentMaterial) currentMaterial.Ni = parseFloat(values[0]);
          break;
        case 'illum':
          if (currentMaterial) currentMaterial.illum = parseInt(values[0], 10);
          break;
        case 'map_Kd':
        case 'map_d':
          if (currentMaterial) {
            currentMaterial[key as 'map_Kd' | 'map_d'] = values.join(' ');
          }
          break;
        default:
          console.warn(`Unknown property ${key}`);
          break;
      }
    });

    if (currentMaterial) {
      this.materials.push(currentMaterial);
    }
  }
}