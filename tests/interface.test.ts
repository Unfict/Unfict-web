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

describe('Interface Engine Governance & Registry', () => {
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
    // FOUNDATION-COLOR-PALETTE-01 is source IMPLEMENTED in Registry and not in placeholders
    const colorRecord = getRegistryRecordById('FOUNDATION-COLOR-PALETTE-01');
    expect(colorRecord?.implementationStatus).toBe('IMPLEMENTED');
    expect(getEffectiveImplementationStatus('FOUNDATION-COLOR-PALETTE-01')).toBe('IMPLEMENTED');

    // BUTTON-SECONDARY-01 is source NOT_IMPLEMENTED in Registry, but in placeholder overlay
    const buttonRecord = getRegistryRecordById('BUTTON-SECONDARY-01');
    expect(buttonRecord?.implementationStatus).toBe('NOT_IMPLEMENTED');
    expect(getEffectiveImplementationStatus('BUTTON-SECONDARY-01')).toBe('PLACEHOLDER');
  });

  it('should verify all REQUIRED runtime owners exist on disk', () => {
    const requiredRecords = getRegistryRecordsByBaseline('REQUIRED');
    for (const record of requiredRecords) {
      const filePath = path.resolve(process.cwd(), record.runtimeOwner);
      expect(fs.existsSync(filePath)).toBe(true);
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

    // Both point to Button.astro as single technical owner
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
      // No raw <svg> tags inside interface components (excluding UfIcon itself)
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
        // Ensure components/placeholders from design-system are not injected into protected public pages
        expect(content.includes('data-uf-interface-owner')).toBe(false);
      }
    }
  });
});
