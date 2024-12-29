import { execFile } from 'child_process';
import * as path from 'path';

const gameExecutable = 'D:\\Programs\\Blizzard Games\\Warcraft III\\_retail_\\x86_64\\Warcraft III.exe';

function main() {
  const fileName = process.argv[2];
  const fullPath = path.join(process.cwd(), fileName);

  const args = [
    '-loadfile', fullPath,
    '-launch', '-nowfpause'];

  console.log(gameExecutable, args.join(' '));

  execFile(
    gameExecutable,
    args,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (err: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (err && err.code === 'ENOENT') {
        throw new Error(`No such file or directory "${gameExecutable}". Make sure gameExecutable is configured properly in config.json.`);
      }
    },
  );
}

main();

process.on('exit', () => {
  console.log('Exiting script...');
});
