/* global process, console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../..');

const overlayPath = path.join(rootDir, 'src/design-system/metadata/INTERFACE-PLACEHOLDERS.json');

if (!fs.existsSync(overlayPath)) {
  console.error('FAIL: INTERFACE-PLACEHOLDERS.json file missing.');
  process.exit(1);
}

const overlay = JSON.parse(fs.readFileSync(overlayPath, 'utf8'));
const placeholders = overlay.placeholders || [];

console.log(
  `Interface Release Check: Found ${placeholders.length} tracked interface placeholders.`
);

if (placeholders.length > 0) {
  console.error('FAIL: Release readiness check failed!');
  console.error(
    `Zero interface placeholders are permitted for production release, but ${placeholders.length} remain:`
  );
  placeholders.forEach((id) => console.error(` - ${id}`));
  process.exit(1);
}

console.log('SUCCESS: Release readiness check passed! (0 interface placeholders remain).');
