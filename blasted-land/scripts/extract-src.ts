import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

const projectRoot = path.resolve('src');
let tsFiles = glob.sync(`${projectRoot}/quests/**/*.ts`);

/**
 * Normalize paths to handle platform differences.
 * @param filePath The path to normalize.
 */
function normalizePath(filePath: string): string {
  return path.normalize(filePath).replace(/[\\]+/g, '/');
}
tsFiles = tsFiles.map(normalizePath);

const outputFile = path.resolve('dist/combined.ts');
const processedFiles = new Set<string>([
  projectRoot + "/quests/plots.txt"
]);

const blackListedPatterns = [
  "lib/resources",
  "events/chat_commands",
  "lib/log",
  "abilities",
  "abilities",
  "quests/registry"
]

tsFiles = tsFiles.filter(file => {
  return !blackListedPatterns.some(pattern => file.includes(pattern));
});

/**
 * Get all files recursively in a directory.
 * @param dir The directory to read.
 */
function getAllFiles(dir: string): string[] {
    let results: string[] = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFiles(filePath));
        } else {
            results.push(filePath);
        }
    });
    return results;
}

// Cache all files in the project root
const fileCache = new Set(getAllFiles(projectRoot).map(normalizePath));

/**
 * Attempt to resolve a module specifier as internal
 * @param importPath The import path
 * @param sourceFilePath The source file path from which the import originates
 * @param extensions List of allowed file extensions to check
 */
function resolveAsInternal(importPath: string, sourceFilePath: string, extensions: string[] = ['.ts', '.tsx']): string | null {
    const sourceDir = path.dirname(sourceFilePath);
    for (const ext of extensions) {
        const candidate = normalizePath(path.resolve(projectRoot, importPath + ext));
        if (fileCache.has(normalizePath(candidate))) {
            return candidate;
        }
    }
    const candidateDirIndex = path.resolve(sourceDir, importPath, 'index.ts');
    if (fileCache.has(normalizePath(candidateDirIndex))) {
        return candidateDirIndex;
    }
    return null;
}

/**
 * Recursively gets the internal dependencies for a given sourceFile.
 * Excludes anything from `node_modules`.
 * @param sourceFile The SourceFile to parse.
 * @param program The TypeScript program.
 * @param dependencies The set to store resolved dependencies.
 */
function getDependencies(sourceFile: ts.SourceFile, program: ts.Program, dependencies: Set<string>): void {
    const visitNode = (node: ts.Node) => {
        if (ts.isImportDeclaration(node) && node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
            const importPath = node.moduleSpecifier.text;
            const resolvedInternalPath = resolveAsInternal(importPath, sourceFile.fileName);

            if (resolvedInternalPath) {
                dependencies.add(resolvedInternalPath);
                const depSourceFile = program.getSourceFile(resolvedInternalPath);
                if (depSourceFile) {
                    getDependencies(depSourceFile, program, dependencies);  // Recurse for nested dependencies
                }
            }
        }
        ts.forEachChild(node, visitNode);
    };
    visitNode(sourceFile);
}

/**
 * Reads the entire content of the given source file.
 * @param filePath The path to the source file.
 */
function readWholeFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
}

/**
 * Main function to create a combined TypeScript file.
 */
async function combineFiles() {
    // Read TypeScript files based on glob pattern

    if (tsFiles.length === 0) {
        console.error('No TypeScript files found');
        return;
    } else {
        console.log(`Found TypeScript files: ${tsFiles.length}`);
    }

    // Convert all to absolute paths and normalize them
    tsFiles = tsFiles.map(file => normalizePath(path.resolve(file)));
    const program = ts.createProgram(tsFiles, {});
    const printer = ts.createPrinter();

    let combinedCode = '';

    // Extract and combine code snippets
    const sourceFiles = program.getSourceFiles().filter(file => tsFiles.includes(normalizePath(file.fileName)));
    sourceFiles.forEach(sourceFile => {
        if (!processedFiles.has(sourceFile.fileName)) {
            const relativePath = path.relative(projectRoot, sourceFile.fileName);
            processedFiles.add(sourceFile.fileName);
        }
    });

    // Resolve and extract dependencies
    const dependencies = new Set<string>();
    sourceFiles.forEach(sourceFile => {
        // getDependencies(sourceFile, program, dependencies);
    });

    console.log(dependencies);  // Print all gathered dependencies

    dependencies.forEach(dep => {
        if (blackListedPatterns.some(pattern => dep.includes(pattern))) {
            console.log(`Skipping dependency ${dep} due to blacklisted pattern`);
            return;
        }
        processedFiles.add(dep);
    });

    const normRoot = normalizePath(projectRoot)+"/";
    for(const file of processedFiles) {
        const fileContent = readWholeFile(file)
          .replace("\r", "")
          .split('\n')
          .map(s => s.trim())
          .filter(s => s.length > 0)
          // convert comment lines from // to /* and */
        //   .map(s => s.replace(/\/\/(.+)$/, "/*$1*/"))
        //   .map(s => s.replace(/\/\* eslint-.+ \*\//g, ""))
        //   .map(s => s.replace(/QuestSounds\\\\__refined\\\\.+\\\\[^-]+-/g, ""))
        //   // if string ends with alpha numeric, then add new line
        //   .map(s => s.replace(/[a-zA-Z0-9]$/, "$&\n"))
        //   // if string ends with ], then add new line
        //   .map(s => s.replace(/]$/, "$&\n"))
          .join('\n');
        const comment = `// File: ${normalizePath(file).replace(normRoot, "")}\n`;
        combinedCode += comment + fileContent + '\n';
        console.log(`Appended content from ${file}`);
    }

    combinedCode = `You are a Warcraft 3 quest designer. Below are the existing quests and their code implementation writen in TypeScript using w3ts library and other custom functions in the project. Your response must be brief and concise. Do not repeat any information already mentioned in the conversation, for instance when asked to modify code, only give the code diff, not printing the whole code again. Or when asked to change dialogue, only print the diff.\n\n` + combinedCode

    // Write combined code to an output file
    fs.writeFileSync(outputFile, combinedCode);
    console.log(`Combined file created at ${outputFile}`);
}

combineFiles().catch(error => {
    console.error("Error combining files: ", error);
});