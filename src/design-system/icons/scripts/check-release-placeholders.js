/* global process, console */
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve(process.cwd(), 'src/design-system/icons');
const PLACEHOLDERS_PATH = path.join(ROOT_DIR, 'metadata/PLACEHOLDERS.json');

function checkRelease() {
  let placeholderCount = 0;

  if (fs.existsSync(PLACEHOLDERS_PATH)) {
    const data = JSON.parse(fs.readFileSync(PLACEHOLDERS_PATH, 'utf8'));
    if (data.placeholders && Array.isArray(data.placeholders)) {
      placeholderCount = data.placeholders.length;
    }
  }

  console.log(`[RELEASE CHECK] Current tracked placeholders: ${placeholderCount}`);

  if (placeholderCount > 0) {
    console.error(
      `RELEASE CHECK FAILED: Production release requires 0 placeholders, but ${placeholderCount} remaining placeholders exist.`
    );
    process.exit(1);
  }

  console.log('RELEASE CHECK PASSED: 0 placeholders remain. Icon runtime system is release-ready!');
}

checkRelease();
