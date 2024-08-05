import OpenAI from 'openai';
import * as path from 'path';
import * as glob from 'glob';
import * as csv from 'csv-parser';
import { createReadStream, readFileSync, writeFileSync } from 'fs';
import { promisify } from 'util';
import 'dotenv/config'

const globAsync = promisify(glob);

const readCSVFile = (file: string, separator: string): Promise<Record<string, unknown>[]> => {
  const rows: Record<string, unknown>[] = []
  return new Promise((resolve, reject) => {
    createReadStream(file)
      .pipe(csv({ separator }))
      .on('data', (row) => {
        if (Object.keys(row).length > 1) {
          rows.push(row)
        }
      })
      .on('end', () => {
        resolve(rows);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

async function readAllCSVFiles(pattern: string, separator: string) {
  const files = await globAsync(pattern);
  if (files.length === 0) {
    throw new Error('No files found matching the pattern.');
  }

  const rows = (await Promise.all(files.map(file => readCSVFile(file, separator)))).flat();

  console.log(`Total rows of ${pattern}: ${rows.length}`);
  return rows
};

interface Wc3Row {
  doodID: string
  file: string
  numVar: number
}

interface WowRow {
  ModelFile: string
  PositionX: string,
  PositionY: string,
  PositionZ: string,
  RotationX: string,
  RotationY: string,
  RotationZ: string,
  RotationW: string,
  ScaleFactor: string,
  ModelId: string,
  FileDataID: string,
}

interface DoodadPlacement {
  type: string
  variation: number
  position: [number, number, number],
  angle: number,
  scale: [number, number, number],
  skinId: string,
  flags: {
    visible: boolean,
    solid: boolean
  },
  life: number,
  id: number
}

let stage = 1

async function main() {
  const wowPattern = 'C:\\Users\\quang\\wow.export\\maps\\northrend/*.csv';
  const wowRows: WowRow[] = await readAllCSVFiles(wowPattern, ";")
  writeFileSync(path.join(__dirname, "resources", "wowrows.json"), JSON.stringify(wowRows, null, 2))

  const wc3Pattern = __dirname + '\\resources\\Doodads.csv';
  const w3cRows: Wc3Row[] = await readAllCSVFiles(wc3Pattern, ",")

  if (stage === 0) {
    const mapping = await generateWowWc3Mapping(w3cRows, wowRows)
    writeFileSync(path.join(__dirname, "resources", "doodad-mapping.json"), JSON.stringify(mapping, null, 2))
  }
  if (stage === 1) {
    const mapping: Record<string, string[]> = JSON.parse(readFileSync(path.join(__dirname, "resources", "doodad-mapping.full.json")).toString())
    Object.keys(mapping).forEach(wow => {
      mapping[wow].forEach((wc3, i) => {
        if (wc3.startsWith("BAD:")) {
          const candidate = w3cRows.filter(r => r.file.endsWith(wc3.split("/").at(-1)!))
          if (candidate.length === 1) {
            mapping[wow][i] = candidate[0].file
          } else {
            console.log(wc3, candidate.length, candidate.map(c => c.file))
          }
        }
      })
      if (!wow.startsWith("..\\")) {
        const trueWow = wowRows.find(r => formatWowPath(r.ModelFile).endsWith(wow))
        if (!trueWow) {
          console.log(wow)
        } else {
          mapping[trueWow.ModelFile] = mapping[wow]
          delete mapping[wow]
        }
      }
    })


    const wowMinX = wowRows.reduce((acc, r) => Math.min(acc, f(r.PositionX)), f(wowRows[0].PositionX))
    const wowMaxX = wowRows.reduce((acc, r) => Math.max(acc, f(r.PositionX)), f(wowRows[0].PositionX))
    const wowMinY = wowRows.reduce((acc, r) => Math.min(acc, f(r.PositionY)), f(wowRows[0].PositionY))
    const wowMaxY = wowRows.reduce((acc, r) => Math.max(acc, f(r.PositionY)), f(wowRows[0].PositionY))
    const wowMinZ = wowRows.reduce((acc, r) => Math.min(acc, f(r.PositionZ)), f(wowRows[0].PositionZ))
    const wowMaxZ = wowRows.reduce((acc, r) => Math.max(acc, f(r.PositionZ)), f(wowRows[0].PositionZ))
    console.log(wowMaxX - wowMinX, [wowMinX, wowMaxX])
    console.log(wowMaxY - wowMinY, [wowMinY, wowMaxY])
    console.log(wowMaxZ - wowMinZ, [wowMinZ, wowMaxZ])

    const addedObj = new Set<string>()
    const result: DoodadPlacement[] = []
    let unmapped = 0
    let duped = 0
    wowRows.forEach((row, i) => {
      // if (!row.ModelFile.includes("icecrown_citadel_exterior_set0") && !row.ModelFile.includes("icecrown_gate_01_set0")) {
      //   return
      // }

      const dedupKey = [row.FileDataID, row.ModelId, row.PositionX, row.PositionY, row.PositionZ].join(":")
      if (addedObj.has(dedupKey)) {
        duped++
        return
      } else {
        addedObj.add(dedupKey)
      }

      if (mapping[row.ModelFile].length === 0) {
        unmapped++
        return;
      }
      const chosenWc3 = mapping[row.ModelFile][Math.floor(mapping[row.ModelFile].length * Math.random())]
      const wc3Equiv = w3cRows.find(r => r.file === chosenWc3)!
      result.push({
        type: wc3Equiv.doodID,

        variation: Math.floor(Math.random() * wc3Equiv.numVar),
        position: [
          percent(row.PositionX, wowMinX, wowMaxX), // rotate 180deg
          1 - percent(row.PositionZ, wowMinZ, wowMaxZ), // rotate 180deg
          percent(row.PositionY, wowMinY, wowMaxY), // Exported data has Y to be height
        ],
        angle: f(row.RotationX),
        scale: [f(row.ScaleFactor), f(row.ScaleFactor), f(row.ScaleFactor)],
        skinId: wc3Equiv.doodID,
        flags: {
          visible: true,
          solid: true
        },
        life: 100,
        id: i + 1
      })
    })
    console.log("Unmapped WoW objects:", unmapped)
    console.log("Mapped WoW objects:", addedObj.size)
    console.log("Ignored duplicated WoW objects:", duped)
    writeFileSync(path.join(__dirname, "resources", "doodad-mapping.final.json"), JSON.stringify(mapping, null, 2))
    writeFileSync(path.join(__dirname, "resources", "doodad-placement.json"), JSON.stringify(result, null, 2))
  }
}
main()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateWowWc3Mapping(w3cRows: Wc3Row[], wowRows: WowRow[], batchSize = 20): Promise<Record<string, string[]>> {
  const w3cPaths = [...new Set(w3cRows.map(r => r.file))]
  let wc3Map = new Map<string, string>(w3cPaths.map((model) => {
    const subs = model.split("\\")
    const shorts = [subs[1], subs[2], subs.at(-1)!].filter(onlyUnique)
    return [shorts.join('/'), model]
  }))
  console.log("Total W3C doodad models", w3cPaths.length)

  const wowMap = new Map<string, string>([...new Set(wowRows.map(r => r.ModelFile))].map(model => {
    const short = formatWowPath(model)
      .split("/").slice(-2).join("/")
    return [short, model]
  }))
  let wowPaths = [...wowMap.keys()]
  console.log("Total WoW doodad models", wowPaths.length)
  // wowPaths = wowPaths.slice(0, batchSize)

  let systemText = "I have a list of new WoW doodad model paths, I want to replace all of them with existing old Warcraft 3 models. Given a list of all Warcraft 3 doodad models. Input contains a list of WoW model paths. Use your best guess based on the pathname to determine the best 3 matching WC3 model for each WoW model. Output your mapping in JSON object { newWowPath: [oldWc3Path1, oldWc3Path2, oldWc3Path3] } and nothing else, never include any markdown format token. All model paths are case-sensitive.\n"
  systemText += "\n# Warcraft 3 model paths:\n"

  systemText += Array.from(wc3Map.keys()).join("\n")

  const fullMapping: Record<string, string[]> = {}
  for (let i = 0; i < wowPaths.length; i += batchSize) {
    const inputText = wowPaths.slice(i, i + batchSize).join("\n")

    try {
      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system', content: systemText,
          },
          { role: 'user', content: inputText },
        ],
        model: 'gpt-4o',
      });

      let output = completion.choices[0].message.content!;
      console.log(output)
      const shortMapping: Record<string, string[]> = JSON.parse(output)

      Object.keys(shortMapping).forEach(wow => {
        const wc3 = shortMapping[wow]
        const wowFull = wowMap.get(wow)
        const wc3Full = wc3.map(w => wc3Map.get(w))
        if (!wowFull) {
          console.warn("Found non-existent WoW key in AI response:", { wow, wc3 })
          fullMapping["BAD:" + wow] = wc3
          return
        }
        if (wc3Full.some(w => !w)) {
          console.warn("Found non-existent WC3 key in AI response:", { wow, wc3: wc3.find((_, i) => !wc3Full[i]) })
          fullMapping[wow] = wc3Full.map((w, i) => w ?? "BAD:" + wc3[i])
          return
        }
        fullMapping[wowFull] = wc3Full as string[]
      })
      console.log(i + batchSize, "/", wowPaths.length)
    } catch (e) {
      console.error("Found error", e)
      console.info("Retrying...")
      i -= batchSize
    }
  }
  return fullMapping
}

function onlyUnique(value: string, index: number, array: string[]) {
  return array.indexOf(value) === index;
}

function formatWowPath(path: string) {
  return path.replaceAll("..\\", "").replaceAll("\\", "/").replaceAll(".obj", "")
}

function f(s: string) {
  return parseFloat(s)
}

function percent(v: string, low: number, high: number) {
  return (f(v) - low) / (high - low)
}