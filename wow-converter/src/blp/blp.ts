/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as fs from 'fs';
import * as path from 'path';

// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-unsafe-assignment
const {
  Image, TYPE_PNG, TYPE_JPEG, TYPE_BLP,
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-eval
} = eval('require')('../../bin/blp-preview/win32-x64-binding.node');

export function blp2Image(blpPath: string, distPath: string, type: 'png' | 'jpg' | 'blp' = 'png') {
  const img = new Image();
  const buf = fs.readFileSync(blpPath);
  img.loadFromBuffer(buf, 0, buf.length);
  fs.mkdirSync(path.dirname(distPath), { recursive: true });
  if (type === 'png') {
    fs.writeFileSync(distPath, img.toBuffer(TYPE_PNG));
  } else if (type === 'blp') {
    fs.writeFileSync(distPath, img.toBuffer(TYPE_BLP));
  } else {
    fs.writeFileSync(distPath, img.toBuffer(TYPE_JPEG));
  }
}
