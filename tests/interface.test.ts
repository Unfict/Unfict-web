import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import {
  INTERFACE_REGISTRY,
  getRegistryRecordById,
  getRegistryRecordsByBaseline
} from '../src/design-system/registry/interface-registry';
import {
  getEffectiveImplementationStatus,
  isPlaceholderOwner,
  getAllPlaceholderOwnerIds
} from '../src/design-system/registry/interface-runtime-state';

// Archetypes
import { ACQUISITION_ARCHETYPE } from '../src/design-system/archetypes/AcquisitionArchetype';
import { PILLAR_ARCHETYPE } from '../src/design-system/archetypes/PillarArchetype';
import { ENTITY_ARCHETYPE } from '../src/design-system/archetypes/EntityArchetype';
import { ANSWER_HUB_ARCHETYPE } from '../src/design-system/archetypes/AnswerHubArchetype';
import { ARTICLE_ARCHETYPE } from '../src/design-system/archetypes/ArticleArchetype';
import { CONVERSION_ARCHETYPE } from '../src/design-system/archetypes/ConversionArchetype';
import { LEGAL_ARCHETYPE } from '../src/design-system/archetypes/LegalArchetype';
import { UTILITY_ARCHETYPE } from '../src/design-system/archetypes/UtilityArchetype';

describe('Interface Engine Governance & Registry Parity', () => {
  it('should contain exactly 83 records in the v0.1 inventory', () => {
    expect(INTERFACE_REGISTRY.length).toBe(83);
  });

  it('should have unique canonical IDs across all records', () => {
    const ids = INTERFACE_REGISTRY.map((r) => r.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(83);
  });

  it('should maintain exact engineBaseline counts (63 REQUIRED, 15 DEFERRED, 5 CREATIVE)', () => {
    const required = getRegistryRecordsByBaseline('REQUIRED');
    const deferred = getRegistryRecordsByBaseline('DEFERRED');
    const creative = getRegistryRecordsByBaseline('CREATIVE');

    expect(required.length).toBe(63);
    expect(deferred.length).toBe(15);
    expect(creative.length).toBe(5);
  });

  it('should validate allowed status vocabularies and layer definitions', () => {
    const allowedLayers = new Set([
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
    const allowedSemanticStatuses = new Set(['PROPOSED', 'GOVERNED', 'DEPRECATED', 'RETIRED']);
    const allowedVisualStatuses = new Set([
      'UNDESIGNED',
      'EXPLORATION',
      'REFERENCE_PAGE_ACCEPTED',
      'CANDIDATE_EXTRACTED',
      'APPROVED',
      'FROZEN'
    ]);
    const allowedImplStatuses = new Set([
      'NOT_IMPLEMENTED',
      'PLACEHOLDER',
      'IMPLEMENTED',
      'VERIFIED',
      'DEPRECATED'
    ]);

    for (const record of INTERFACE_REGISTRY) {
      expect(allowedLayers.has(record.layer)).toBe(true);
      expect(allowedSemanticStatuses.has(record.semanticStatus)).toBe(true);
      expect(allowedVisualStatuses.has(record.visualStatus)).toBe(true);
      expect(allowedImplStatuses.has(record.implementationStatus)).toBe(true);
    }
  });

  it('should ensure comprehensive full-field parity between Markdown authority and TypeScript projection', () => {
    const mdPath = path.resolve(
      process.cwd(),
      'DOCS/DESIGN/WEB/UNFICT-WEB-INTERFACE-REGISTRY-001-v0.1.md'
    );
    const mdContent = fs.readFileSync(mdPath, 'utf8');

    const mdBlocksMap = new Map<string, Record<string, unknown>>();
    const blockRegex = /^## ([\w-]+)[^\n]*\n\n```yaml\n([\s\S]*?)\n```/gm;
    let match: RegExpExecArray | null;

    while ((match = blockRegex.exec(mdContent)) !== null) {
      const id = match[1];
      const yamlContent = match[2];

      const parsed: Record<string, unknown> = {};
      const lines = yamlContent.split('\n');
      let currentKey = '';
      let currentList: string[] | null = null;
      let multiLineVal = '';

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('- ') && currentList) {
          currentList.push(line.trim().replace(/^-\s*/, '').replace(/^'|'$/g, ''));
        } else if (line.includes(':') && !line.startsWith('  -')) {
          if (currentKey) {
            if (currentList) {
              parsed[currentKey] = currentList;
              currentList = null;
            } else if (multiLineVal) {
              parsed[currentKey] = multiLineVal.trim();
              multiLineVal = '';
            }
          }
          const [key, ...valParts] = line.split(':');
          const val = valParts.join(':').trim();
          currentKey = key.trim();

          if (val === '') {
            currentList = [];
          } else if (val === '>-' || val === '>') {
            multiLineVal = '';
          } else {
            parsed[currentKey] = val.replace(/^'|'$/g, '').trim();
          }
        } else if (multiLineVal !== undefined && line.startsWith('  ')) {
          multiLineVal += (multiLineVal ? ' ' : '') + line.trim();
        }
      }
      if (currentKey) {
        if (currentList) parsed[currentKey] = currentList;
        else if (multiLineVal) parsed[currentKey] = multiLineVal.trim();
      }
      mdBlocksMap.set(id, parsed);
    }

    expect(mdBlocksMap.size).toBe(83);

    for (const record of INTERFACE_REGISTRY) {
      const mdRecord = mdBlocksMap.get(record.id);
      expect(mdRecord).toBeDefined();
      if (!mdRecord) continue;

      expect(mdRecord.id).toBe(record.id);
      expect(mdRecord.name).toBe(record.name);
      expect(mdRecord.layer).toBe(record.layer);
      expect(mdRecord.domain).toBe(record.domain);
      expect(String(mdRecord.version)).toBe(String(record.version));
      expect(mdRecord.semanticStatus).toBe(record.semanticStatus);
      expect(mdRecord.visualStatus).toBe(record.visualStatus);
      expect(mdRecord.implementationStatus).toBe(record.implementationStatus);
      expect(mdRecord.authorityConfidence).toBe(record.authorityConfidence);
      expect(mdRecord.visualEvidence).toBe(record.visualEvidence);

      expect(mdRecord.sources).toEqual(record.sources);
      expect(mdRecord.sourceCompositions).toEqual(record.sourceCompositions);

      const expectedRuntimeOwner = record.runtimeOwner === null ? 'null' : record.runtimeOwner;
      expect(String(mdRecord.runtimeOwner)).toBe(String(expectedRuntimeOwner));

      const expectedRegressionOwner =
        record.visualRegressionOwner === null ? 'null' : record.visualRegressionOwner;
      expect(String(mdRecord.visualRegressionOwner)).toBe(String(expectedRegressionOwner));

      expect(String(mdRecord.placeholderAllowed)).toBe(String(record.placeholderAllowed));
      expect(mdRecord.engineBaseline).toBe(record.engineBaseline);

      if (record.job) {
        expect(mdRecord.job).toEqual(record.job);
      }
      if (record.notes) {
        expect(mdRecord.notes).toBe(record.notes);
      }
    }
  });

  it('should ensure two-way placeholder overlay consistency', () => {
    const overlayIds = getAllPlaceholderOwnerIds();
    expect(overlayIds.length).toBeGreaterThan(0);

    for (const id of overlayIds) {
      const record = getRegistryRecordById(id);
      expect(record).toBeDefined();
      expect(record?.placeholderAllowed).toBe(true);
      expect(isPlaceholderOwner(id)).toBe(true);
      expect(getEffectiveImplementationStatus(id)).toBe('PLACEHOLDER');
    }
  });

  it('should preserve original source Registry implementationStatus while resolving effective status', () => {
    const colorRecord = getRegistryRecordById('FOUNDATION-COLOR-PALETTE-01');
    expect(colorRecord?.implementationStatus).toBe('IMPLEMENTED');
    expect(getEffectiveImplementationStatus('FOUNDATION-COLOR-PALETTE-01')).toBe('IMPLEMENTED');

    const buttonRecord = getRegistryRecordById('BUTTON-SECONDARY-01');
    expect(buttonRecord?.implementationStatus).toBe('NOT_IMPLEMENTED');
    expect(getEffectiveImplementationStatus('BUTTON-SECONDARY-01')).toBe('PLACEHOLDER');
  });

  it('should verify all REQUIRED runtime owners exist on disk', () => {
    const requiredRecords = getRegistryRecordsByBaseline('REQUIRED');
    for (const record of requiredRecords) {
      if (record.runtimeOwner) {
        const filePath = path.resolve(process.cwd(), record.runtimeOwner);
        expect(fs.existsSync(filePath)).toBe(true);
      }
    }
  });

  it('should ensure DEFERRED owners are not implemented as production owners', () => {
    const deferredRecords = getRegistryRecordsByBaseline('DEFERRED');
    for (const record of deferredRecords) {
      expect(isPlaceholderOwner(record.id)).toBe(false);
      expect(getEffectiveImplementationStatus(record.id)).toBe('NOT_IMPLEMENTED');
    }
  });

  it('should ensure CREATIVE Master Compositions remain in creative track and not implemented as visual owners', () => {
    const creativeRecords = getRegistryRecordsByBaseline('CREATIVE');
    for (const record of creativeRecords) {
      expect(record.layer).toBe('composition');
      expect(isPlaceholderOwner(record.id)).toBe(false);
      expect(getEffectiveImplementationStatus(record.id)).toBe('NOT_IMPLEMENTED');
    }
  });
});

describe('Promoted Owners Component Contracts', () => {
  it('should verify ActionHero contract exports and theme capabilities', async () => {
    const filePath = path.resolve(process.cwd(), 'src/design-system/patterns/ActionHero.astro');
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).toContain('PATTERN-HERO-ACTION-01');
    expect(content).toContain('uf-pattern-action-hero--${theme}');
    expect(content).toContain('TextLink');
    expect(content).toContain('Button');
  });

  it('should verify HumanRealityHero requires imageSrc and imageAlt media contract', async () => {
    const filePath = path.resolve(
      process.cwd(),
      'src/design-system/sections/HumanRealityHero.astro'
    );
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).toContain('SECTION-HERO-HUMAN-01');
    expect(content).toContain('imageSrc: string;');
    expect(content).toContain('imageAlt: string;');
    expect(content).toContain("theme = 'dark'");
    expect(content).not.toContain('Reality-first Media');
  });

  it('should verify ConceptFlow supports variable step count ordering', async () => {
    const filePath = path.resolve(process.cwd(), 'src/design-system/patterns/ConceptFlow.astro');
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).toContain('PATTERN-CONCEPT-FLOW-01');
    expect(content).toContain('steps.map');
    expect(content).toContain('index + 1');
  });

  it('should verify FinalCta contract supports primary action and optional secondary link', async () => {
    const filePath = path.resolve(process.cwd(), 'src/design-system/patterns/FinalCta.astro');
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).toContain('PATTERN-FINAL-CTA-01');
    expect(content).toContain('primaryAction: ActionProp;');
    expect(content).toContain('secondaryAction?: ActionProp;');
  });
});

describe('Navigation & Component Governance', () => {
  it('should maintain distinct ownership for NAV-WEB-PRIMARY-01 and NAV-WEB-MOBILE-01', () => {
    const primaryNav = getRegistryRecordById('NAV-WEB-PRIMARY-01');
    const mobileNav = getRegistryRecordById('NAV-WEB-MOBILE-01');

    expect(primaryNav).toBeDefined();
    expect(mobileNav).toBeDefined();

    expect(primaryNav?.runtimeOwner).toBe('src/design-system/navigation/NavWebPrimary.astro');
    expect(mobileNav?.runtimeOwner).toBe('src/design-system/navigation/NavWebMobile.astro');

    expect(fs.existsSync(path.resolve(process.cwd(), primaryNav!.runtimeOwner))).toBe(true);
    expect(fs.existsSync(path.resolve(process.cwd(), mobileNav!.runtimeOwner))).toBe(true);
  });

  it('should preserve separate identities for BUTTON-PRIMARY-01 and BUTTON-SECONDARY-01', () => {
    const primaryBtn = getRegistryRecordById('BUTTON-PRIMARY-01');
    const secondaryBtn = getRegistryRecordById('BUTTON-SECONDARY-01');

    expect(primaryBtn).toBeDefined();
    expect(secondaryBtn).toBeDefined();
    expect(primaryBtn?.id).not.toBe(secondaryBtn?.id);

    expect(primaryBtn?.runtimeOwner).toBe('src/design-system/primitives/Button.astro');
    expect(secondaryBtn?.runtimeOwner).toBe('src/design-system/primitives/Button.astro');
  });

  it('should export all 8 archetype contracts as valid TypeScript contracts', () => {
    const archetypes = [
      ACQUISITION_ARCHETYPE,
      PILLAR_ARCHETYPE,
      ENTITY_ARCHETYPE,
      ANSWER_HUB_ARCHETYPE,
      ARTICLE_ARCHETYPE,
      CONVERSION_ARCHETYPE,
      LEGAL_ARCHETYPE,
      UTILITY_ARCHETYPE
    ];

    expect(archetypes.length).toBe(8);
    for (const archetype of archetypes) {
      expect(archetype.id).toMatch(/^PAGE-ARCHETYPE-/);
      expect(archetype.requiredPhases.length).toBeGreaterThan(0);
      expect(archetype.actionExpectations).toBeDefined();
      expect(archetype.contentObligations).toBeDefined();
    }
  });

  it('should consume UfIcon as sole icon gateway across interface components', () => {
    const componentsDir = path.resolve(process.cwd(), 'src/design-system');
    function scanFiles(dir: string): string[] {
      let results: string[] = [];
      const list = fs.readdirSync(dir);
      for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
          if (!filePath.endsWith('/icons')) {
            results = results.concat(scanFiles(filePath));
          }
        } else if (file.endsWith('.astro')) {
          results.push(filePath);
        }
      }
      return results;
    }

    const astroFiles = scanFiles(componentsDir);
    for (const filePath of astroFiles) {
      const content = fs.readFileSync(filePath, 'utf8');
      expect(content.includes('<svg')).toBe(false);
    }
  });

  it('should verify public routes in src/pages remain untouched', () => {
    const pagesDir = path.resolve(process.cwd(), 'src/pages');
    const protectedPages = [
      'index.astro',
      'about.astro',
      'faq.astro',
      'gs1-digital-link.astro',
      'developers.astro',
      'early-access.astro'
    ];

    for (const pageName of protectedPages) {
      const pagePath = path.join(pagesDir, pageName);
      if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf8');
        expect(content.includes('data-uf-interface-owner')).toBe(false);
      }
    }
  });
});
