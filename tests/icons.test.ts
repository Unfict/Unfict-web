import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = path.resolve(process.cwd(), 'src/design-system/icons');
const MANIFEST_PATH = path.join(ROOT_DIR, 'metadata/MANIFEST.json');
const PLACEHOLDERS_PATH = path.join(ROOT_DIR, 'metadata/PLACEHOLDERS.json');
const STYLES_PATH = path.join(ROOT_DIR, 'styles/icons.css');

interface IconManifestEntry {
  id: string;
  name: string;
  shortName: string;
  source: string;
  viewBox: string;
  colorChannels: number;
  defaultTone: string;
  allowedTones: string[];
  blueAccentAllowed: boolean;
  semanticColorAllowed: boolean;
  monochromeSafe: boolean;
  smallOptimized: boolean;
  sizes: number[];
  accessibilityMode: string;
  brandLocked: boolean;
  semanticStatus: string;
}

interface IconManifest {
  icons: IconManifestEntry[];
}

interface PlaceholderManifest {
  placeholders?: string[];
}

const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')) as IconManifest;

const placeholdersData = JSON.parse(
  fs.readFileSync(PLACEHOLDERS_PATH, 'utf8')
) as PlaceholderManifest;

const placeholders = placeholdersData.placeholders ?? [];

function getIconById(id: string): IconManifestEntry {
  const icon = manifest.icons.find((entry) => entry.id === id);

  if (!icon) {
    throw new Error(`Icon "${id}" must exist in MANIFEST.json`);
  }

  return icon;
}

function getIconByShortName(shortName: string): IconManifestEntry {
  const icon = manifest.icons.find((entry) => entry.shortName === shortName);

  if (!icon) {
    throw new Error(`Icon shortName "${shortName}" must exist in MANIFEST.json`);
  }

  return icon;
}

describe('Governed Unfict Icon Runtime Infrastructure', () => {
  it('1. should contain exactly 127 governed manifest entries', () => {
    expect(manifest.icons).toBeDefined();
    expect(manifest.icons.length).toBe(127);
  });

  it('2. should enforce unique canonical IDs', () => {
    const ids = manifest.icons.map((icon) => icon.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(127);
  });

  it('3. should verify every manifest source file exists', () => {
    for (const icon of manifest.icons) {
      const fullPath = path.join(ROOT_DIR, icon.source);
      expect(fs.existsSync(fullPath), `Missing source file for ${icon.id}: ${icon.source}`).toBe(
        true
      );
    }
  });

  it('4. should verify every source filename matches its canonical ID', () => {
    for (const icon of manifest.icons) {
      const filename = path.basename(icon.source, '.svg');
      expect(filename).toBe(icon.id);
    }
  });

  it('5. should track all placeholder SVG sources in PLACEHOLDERS.json', () => {
    for (const icon of manifest.icons) {
      const fullPath = path.join(ROOT_DIR, icon.source);
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('UNFICT_PLACEHOLDER')) {
        expect(placeholders).toContain(icon.id);
      }
    }
  });

  it('6. should verify every tracked placeholder actually contains UNFICT_PLACEHOLDER comment', () => {
    for (const pId of placeholders) {
      const icon = getIconById(pId);
      const fullPath = path.join(ROOT_DIR, icon.source);
      const content = fs.readFileSync(fullPath, 'utf8');
      expect(content).toContain('UNFICT_PLACEHOLDER');
    }
  });

  it('7. should enforce canonical viewBox="0 0 24 24" across all SVGs', () => {
    for (const icon of manifest.icons) {
      const fullPath = path.join(ROOT_DIR, icon.source);
      const content = fs.readFileSync(fullPath, 'utf8');
      expect(content, `SVG ${icon.id} must contain viewBox="0 0 24 24"`).toContain(
        'viewBox="0 0 24 24"'
      );
    }
  });

  it('8. should verify prohibited appearance-specific filenames do not exist', () => {
    for (const icon of manifest.icons) {
      expect(icon.source).not.toMatch(/-(dark|light|white|blue|final|temp|v\d+)\.svg$/i);
    }
  });

  it('9. should verify arbitrary hard-coded semantic status colors are absent in non-brand assets', () => {
    for (const icon of manifest.icons) {
      if (!icon.brandLocked) {
        const fullPath = path.join(ROOT_DIR, icon.source);
        const content = fs.readFileSync(fullPath, 'utf8');
        expect(content).not.toMatch(/#ff0000|#00ff00|rgb\(255,0,0\)|rgb\(0,255,0\)/i);
      }
    }
  });

  it('10. should support one-channel rendering using currentColor', () => {
    const searchIcon = getIconByShortName('search');
    expect(searchIcon.colorChannels).toBe(1);
    const fullPath = path.join(ROOT_DIR, searchIcon.source);
    const content = fs.readFileSync(fullPath, 'utf8');
    expect(content).toContain('currentColor');
  });

  it('11. should expose --uf-icon-accent in authorized two-channel assets', () => {
    const resolverIcon = getIconByShortName('resolver');
    expect(resolverIcon.colorChannels).toBe(2);
    expect(resolverIcon.blueAccentAllowed).toBe(true);
    const fullPath = path.join(ROOT_DIR, resolverIcon.source);
    const content = fs.readFileSync(fullPath, 'utf8');
    expect(content).toContain('var(--uf-icon-accent');
  });

  it('12. should structurally support monochrome collapse via CSS rules', () => {
    expect(fs.existsSync(STYLES_PATH)).toBe(true);
    const cssContent = fs.readFileSync(STYLES_PATH, 'utf8');
    expect(cssContent).toContain(".uf-icon[data-tone='mono']");
    expect(cssContent).toContain('--uf-icon-accent: currentColor;');
  });

  it('13. should resolve valid short semantic names in MANIFEST.json', () => {
    const search = getIconByShortName('search');
    const resolver = getIconByShortName('resolver');
    const mark = getIconByShortName('mark');
    expect(search).toBeDefined();
    expect(resolver).toBeDefined();
    expect(mark).toBeDefined();
  });

  it('14. should handle tone constraints according to runtime contract', () => {
    const search = getIconByShortName('search');
    expect(search.allowedTones).not.toContain('brand');
    const resolver = getIconByShortName('resolver');
    expect(resolver.allowedTones).toContain('brand');
  });

  it('15. should support representative decorative accessibility attributes', () => {
    const search = getIconByShortName('search');
    expect(search.accessibilityMode).toBe('contextual');
  });

  it('16. should support representative meaningful accessibility attributes', () => {
    const mark = getIconByShortName('mark');
    expect(mark.accessibilityMode).toBe('brand');
  });
});
