/* global process, console */
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve(process.cwd(), 'src/design-system/icons');
const MANIFEST_PATH = path.join(ROOT_DIR, 'metadata/MANIFEST.json');
const PLACEHOLDERS_PATH = path.join(ROOT_DIR, 'metadata/PLACEHOLDERS.json');

function validate() {
  const errors = [];

  if (!fs.existsSync(MANIFEST_PATH)) {
    console.error('ERROR: MANIFEST.json does not exist.');
    process.exit(1);
  }

  if (!fs.existsSync(PLACEHOLDERS_PATH)) {
    console.error('ERROR: PLACEHOLDERS.json does not exist.');
    process.exit(1);
  }

  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
  const placeholdersData = JSON.parse(fs.readFileSync(PLACEHOLDERS_PATH, 'utf8'));
  const placeholderList = placeholdersData.placeholders || [];

  // 1. Exactly 127 entries
  if (!manifest.icons || manifest.icons.length !== 127) {
    errors.push(
      `Manifest icon count must be exactly 127, found ${manifest.icons ? manifest.icons.length : 0}`
    );
  }

  const seenIds = new Set();
  const seenSources = new Set();
  const manifestIdMap = new Map();

  for (const icon of manifest.icons || []) {
    // 2. Canonical IDs unique
    if (seenIds.has(icon.id)) {
      errors.push(`Duplicate canonical ID in manifest: ${icon.id}`);
    }
    seenIds.add(icon.id);
    manifestIdMap.set(icon.id, icon);

    // ID naming convention
    if (!/^uf-(icon|motif)-[a-z0-9-]+$/.test(icon.id)) {
      errors.push(`Invalid canonical ID format: ${icon.id}`);
    }

    // 3. Source file exists
    const fullSourcePath = path.join(ROOT_DIR, icon.source);
    if (seenSources.has(icon.source)) {
      errors.push(`Duplicate source path in manifest: ${icon.source}`);
    }
    seenSources.add(icon.source);

    if (!fs.existsSync(fullSourcePath)) {
      errors.push(`Source file missing for ID ${icon.id}: ${icon.source}`);
      continue;
    }

    // 4. Filename matches ID
    const filename = path.basename(icon.source, '.svg');
    if (filename !== icon.id) {
      errors.push(`Filename mismatch: source "${filename}" does not match ID "${icon.id}"`);
    }

    // 8. Prohibited appearance-specific filenames
    if (/-(dark|light|white|blue|final|temp|v\d+)\.svg$/i.test(icon.source)) {
      errors.push(`Prohibited appearance-specific filename: ${icon.source}`);
    }

    // SVG validation
    const svgContent = fs.readFileSync(fullSourcePath, 'utf8');

    // 7. Canonical viewBox rules
    if (!svgContent.includes('viewBox="0 0 24 24"')) {
      errors.push(`SVG viewBox must be "0 0 24 24" for ID ${icon.id}`);
    }

    // Prohibited SVG elements
    if (/<text[\s>]/i.test(svgContent)) {
      errors.push(`SVG contains prohibited <text> element: ${icon.id}`);
    }
    if (/<image[\s>]/i.test(svgContent)) {
      errors.push(`SVG contains prohibited <image> raster element: ${icon.id}`);
    }
    if (/<(linearGradient|radialGradient)[\s>]/i.test(svgContent)) {
      errors.push(`SVG contains prohibited gradient element: ${icon.id}`);
    }
    if (/<filter[\s>]/i.test(svgContent)) {
      errors.push(`SVG contains prohibited filter element: ${icon.id}`);
    }

    // Prohibited fixed status colors in non-brand assets
    if (!icon.brandLocked) {
      if (/#ff0000|#00ff00|rgb\(255,0,0\)|rgb\(0,255,0\)/i.test(svgContent)) {
        errors.push(`SVG contains arbitrary hard-coded status color: ${icon.id}`);
      }
    }

    // Two-way placeholder check
    const hasPlaceholderComment = svgContent.includes('UNFICT_PLACEHOLDER');
    const isListedInPlaceholders = placeholderList.includes(icon.id);

    // 5. All placeholder sources tracked
    if (hasPlaceholderComment && !isListedInPlaceholders) {
      errors.push(
        `SVG ${icon.id} has UNFICT_PLACEHOLDER comment but is not listed in PLACEHOLDERS.json`
      );
    }
    // 6. Every tracked placeholder actually marked
    if (isListedInPlaceholders && !hasPlaceholderComment) {
      errors.push(
        `ID ${icon.id} is listed in PLACEHOLDERS.json but SVG does not contain UNFICT_PLACEHOLDER comment`
      );
    }
  }

  // Placeholder list integrity
  for (const pId of placeholderList) {
    if (!manifestIdMap.has(pId)) {
      errors.push(`PLACEHOLDERS.json lists ID "${pId}" which is not in MANIFEST.json`);
    }
  }

  if (errors.length > 0) {
    console.error(`\nIcon Validation Failed with ${errors.length} error(s):`);
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log(
    `Icon Validation Passed successfully! (127 assets verified, ${placeholderList.length} tracked placeholders).`
  );
}

validate();
