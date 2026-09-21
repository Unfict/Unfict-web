/* global process, console */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../..');

// 1. Read Markdown Registry Authority
const mdPath = path.join(rootDir, 'DOCS/DESIGN/WEB/UNFICT-WEB-INTERFACE-REGISTRY-001-v0.1.md');
if (!fs.existsSync(mdPath)) {
  console.error('FAIL: Registry Markdown file not found:', mdPath);
  process.exit(1);
}

const md = fs.readFileSync(mdPath, 'utf8');
const blocks = md.split(/\n(?=## [A-Z0-9_-]+ — )/).slice(1);

const parsedMdRecords = blocks.map((b) => {
  const idMatch = b.match(/id:\s*([^\n]+)/);
  const baselineMatch = b.match(/engineBaseline:\s*([^\n]+)/);
  return {
    id: idMatch ? idMatch[1].trim() : '',
    engineBaseline: baselineMatch ? baselineMatch[1].trim() : ''
  };
});

console.log(`Interface Validation: Found ${parsedMdRecords.length} records in Markdown authority.`);

if (parsedMdRecords.length !== 83) {
  console.error(
    `FAIL: Expected exactly 83 records in Markdown authority, found ${parsedMdRecords.length}`
  );
  process.exit(1);
}

// 2. Read Runtime Projection from interface-registry.ts
const tsRegistryPath = path.join(rootDir, 'src/design-system/registry/interface-registry.ts');
if (!fs.existsSync(tsRegistryPath)) {
  console.error('FAIL: interface-registry.ts file not found at:', tsRegistryPath);
  process.exit(1);
}

const tsContent = fs.readFileSync(tsRegistryPath, 'utf8');

// Parse TS object literal safely or evaluate export
const idsMatches = [...tsContent.matchAll(/id:\s*'([A-Z0-9_-]+)'/g)].map((m) => m[1]);
const baselineMatches = [...tsContent.matchAll(/engineBaseline:\s*'([A-Z0-9_-]+)'/g)].map(
  (m) => m[1]
);
const layerMatches = [...tsContent.matchAll(/layer:\s*'([a-z0-9_-]+)'/g)].map((m) => m[1]);
const runtimeOwnerMatches = [...tsContent.matchAll(/runtimeOwner:\s*'([^']+)'/g)].map((m) => m[1]);
const placeholderAllowedMatches = [
  ...tsContent.matchAll(/placeholderAllowed:\s*(true|false)/g)
].map((m) => m[1] === 'true');

if (idsMatches.length !== 83) {
  console.error(`FAIL: Runtime projection record count (${idsMatches.length}) !== 83`);
  process.exit(1);
}

const interfaceRegistry = idsMatches.map((id, index) => ({
  id,
  engineBaseline: baselineMatches[index],
  layer: layerMatches[index],
  runtimeOwner: runtimeOwnerMatches[index],
  placeholderAllowed: placeholderAllowedMatches[index]
}));

// Verify ID uniqueness & baseline breakdown
const ids = new Set();
const baselineCounts = { REQUIRED: 0, DEFERRED: 0, CREATIVE: 0 };
const validLayers = new Set([
  'foundation',
  'primitive',
  'component',
  'pattern',
  'section',
  'navigation',
  'shell',
  'archetype',
  'composition'
]);
const validBaselines = new Set(['REQUIRED', 'DEFERRED', 'CREATIVE']);

for (const record of interfaceRegistry) {
  if (ids.has(record.id)) {
    console.error(`FAIL: Duplicate ID found: ${record.id}`);
    process.exit(1);
  }
  ids.add(record.id);

  if (!validLayers.has(record.layer)) {
    console.error(`FAIL: Invalid layer '${record.layer}' for ID ${record.id}`);
    process.exit(1);
  }

  if (!validBaselines.has(record.engineBaseline)) {
    console.error(`FAIL: Invalid engineBaseline '${record.engineBaseline}' for ID ${record.id}`);
    process.exit(1);
  }

  baselineCounts[record.engineBaseline]++;
}

console.log('Baseline breakdown in runtime projection:', baselineCounts);
if (
  baselineCounts.REQUIRED !== 63 ||
  baselineCounts.DEFERRED !== 15 ||
  baselineCounts.CREATIVE !== 5
) {
  console.error(
    `FAIL: Baseline count mismatch! Expected 63 REQUIRED, 15 DEFERRED, 5 CREATIVE. Got:`,
    baselineCounts
  );
  process.exit(1);
}

// 3. Read Placeholder Overlay
const overlayPath = path.join(rootDir, 'src/design-system/metadata/INTERFACE-PLACEHOLDERS.json');
if (!fs.existsSync(overlayPath)) {
  console.error('FAIL: INTERFACE-PLACEHOLDERS.json missing at', overlayPath);
  process.exit(1);
}

const overlay = JSON.parse(fs.readFileSync(overlayPath, 'utf8'));

if (!overlay.placeholders || !Array.isArray(overlay.placeholders)) {
  console.error('FAIL: Invalid overlay structure in INTERFACE-PLACEHOLDERS.json');
  process.exit(1);
}

// Validate every placeholder ID exists in Registry and is allowed
for (const placeholderId of overlay.placeholders) {
  const regRecord = interfaceRegistry.find((r) => r.id === placeholderId);
  if (!regRecord) {
    console.error(`FAIL: Placeholder ID '${placeholderId}' not found in Registry`);
    process.exit(1);
  }
  if (!regRecord.placeholderAllowed) {
    console.error(`FAIL: Record '${placeholderId}' is marked placeholderAllowed=false in Registry`);
    process.exit(1);
  }
}

// 4. Verify REQUIRED runtime owners exist on disk
for (const record of interfaceRegistry) {
  if (record.engineBaseline === 'REQUIRED') {
    const ownerPath = path.join(rootDir, record.runtimeOwner);
    if (!fs.existsSync(ownerPath)) {
      console.error(
        `FAIL: REQUIRED record '${record.id}' target path does not exist on disk: ${record.runtimeOwner}`
      );
      process.exit(1);
    }
  }
}

// 5. Verify Navigation owners specifically
const navPrimary = interfaceRegistry.find((r) => r.id === 'NAV-WEB-PRIMARY-01');
const navMobile = interfaceRegistry.find((r) => r.id === 'NAV-WEB-MOBILE-01');

if (!navPrimary || !fs.existsSync(path.join(rootDir, navPrimary.runtimeOwner))) {
  console.error('FAIL: NAV-WEB-PRIMARY-01 is missing or runtimeOwner missing on disk.');
  process.exit(1);
}

if (!navMobile || !fs.existsSync(path.join(rootDir, navMobile.runtimeOwner))) {
  console.error('FAIL: NAV-WEB-MOBILE-01 is missing or runtimeOwner missing on disk.');
  process.exit(1);
}

console.log(
  'SUCCESS: Interface Validation Passed! (83 records verified, all REQUIRED owners present).'
);
