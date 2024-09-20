import * as fs from "fs-extra";
import * as path from 'path';
import * as ffmpeg from 'fluent-ffmpeg';

// Set the paths to ffmpeg and ffprobe
ffmpeg.setFfmpegPath('bin\\ffmpeg-7.0.2-essentials_build\\bin\\ffmpeg.exe');
ffmpeg.setFfprobePath('bin\\ffmpeg-7.0.2-essentials_build\\bin\\ffmpeg-7.0.2-essentials_build\\bin\\ffprobe.exe');

// Define the input and output directories
const inputDir: string = 'sounds\\QuestSounds';
const outputDir: string = 'maps\\silverpine.w3x\\QuestSounds\\__refined';

function transform(inputFilePath: string, cmd: ffmpeg.FfmpegCommand): ffmpeg.FfmpegCommand {
    cmd.audioFilters('volume=2');
    if (inputFilePath.includes("QuestSounds\\cementery\\cementary-lady")) {
        cmd.audioFilters([
            'areverse',
            'aecho=1:0.88:50:0.4',
            'areverse',
            'aecho=1:0.88:50:0.4',
        ])
    }
    return cmd.outputOptions([
        '-ac', '1',            // Ensure mono audio
        '-ar', '44100',        // Set sample rate to 44100 Hz
        '-b:a', '128k',        // Set audio bit rate to 128 kbps
        '-map_metadata', '-1', // Remove metadata
    ]);
}

// Function to process audio files
const processAudioFile = (inputFilePath: string, outputFilePath: string): void => {
    transform(inputFilePath, ffmpeg(inputFilePath))
        .on('end', () => {
        })
        .on('error', (err: any) => {  // Updated, `err` type might need to be more specific, e.g., `ffmpeg.FfmpegCommandError`
            console.error(`Error processing file ${inputFilePath}:`, err.message);
        })
        .save(outputFilePath);
};

// Function to ensure the output directory exists
const ensureOutputDirectory = (outputPath: string): void => {
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }
};

// Function to recursively find audio files and process them
const processAudioFilesRecursively = (inputDir: string, outputDir: string): void => {
    const filesAndDirs: string[] = fs.readdirSync(inputDir);

    filesAndDirs.forEach(fileOrDir => {
        const fullPath: string = path.join(inputDir, fileOrDir);
        const outputFullPath: string = path.join(outputDir, fileOrDir);

        if (fs.statSync(fullPath).isDirectory()) {
            // Create the corresponding directory in the output directory
            ensureOutputDirectory(outputFullPath);

            // Recurse into the subdirectory
            processAudioFilesRecursively(fullPath, outputFullPath);
        } else if (fileOrDir.endsWith('.mp3') || fileOrDir.endsWith('.wav')) {
            // Process the audio file
            processAudioFile(fullPath, outputFullPath);
        }
    });
};

// Main function
const main = (): void => {
    // Ensure the base output directory exists
    ensureOutputDirectory(outputDir);

    // Process all audio files recursively
    processAudioFilesRecursively(inputDir, outputDir);
};

main();