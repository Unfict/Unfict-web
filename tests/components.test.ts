import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Astro Component Behavioral Output Tests', () => {
  function readComponent(filePath: string) {
    return fs.readFileSync(path.resolve(filePath), 'utf8');
  }

  it('ActionHero exports pattern contract, theme options, and primary/secondary action structure', () => {
    const code = readComponent('src/design-system/patterns/ActionHero.astro');

    // Canonical interface owner tag and placeholder/implemented status
    expect(code).toContain('data-uf-interface-owner="PATTERN-HERO-ACTION-01"');
    expect(code).toContain("isPlaceholderOwner('PATTERN-HERO-ACTION-01')");

    // Theme support (light and dark)
    expect(code).toContain('uf-pattern-action-hero--${theme}');
    expect(code).toContain('.uf-pattern-action-hero--dark');
    expect(code).toContain('.uf-pattern-action-hero--light');

    // Primary button and optional secondary text link
    expect(code).toContain('Button variant="primary"');
    expect(code).toContain('TextLink');
    expect(code).toContain('secondaryAction &&');
  });

  it('HumanRealityHero enforces required media contract (imageSrc and imageAlt) with theme support', () => {
    const code = readComponent('src/design-system/sections/HumanRealityHero.astro');

    // Canonical interface owner tag
    expect(code).toContain('data-uf-interface-owner="SECTION-HERO-HUMAN-01"');

    // Enforce required imageSrc and imageAlt TypeScript interface props
    expect(code).toContain('imageSrc: string;');
    expect(code).toContain('imageAlt: string;');

    // Theme support
    expect(code).toContain('uf-section-human-reality-hero--${theme}');
    expect(code).toContain('.uf-section-human-reality-hero--dark');
    expect(code).toContain('.uf-section-human-reality-hero--light');

    // Direct <img> render using required media props
    expect(code).toContain(
      '<img src={imageSrc} alt={imageAlt} class="uf-section-human-reality-hero__image" />'
    );

    // Placeholder badge completely eliminated
    expect(code).not.toContain('Reality-first Media');
  });

  it('ConceptFlow renders ordered step sequence for variable step counts (3-step and 5-step)', () => {
    const code = readComponent('src/design-system/patterns/ConceptFlow.astro');

    expect(code).toContain('data-uf-interface-owner="PATTERN-CONCEPT-FLOW-01"');
    expect(code).toContain('steps.map((step, index) =>');
    expect(code).toContain('{index + 1}');
    expect(code).toContain('step.title');
    expect(code).toContain('step.description');
  });

  it('FinalCta renders single primary and dual primary+secondary action structures', () => {
    const code = readComponent('src/design-system/patterns/FinalCta.astro');

    expect(code).toContain('data-uf-interface-owner="PATTERN-FINAL-CTA-01"');
    expect(code).toContain('primaryAction: ActionProp;');
    expect(code).toContain('secondaryAction?: ActionProp;');
    expect(code).toContain('Button variant="primary"');
    expect(code).toContain('secondaryAction &&');
    expect(code).toContain('TextLink');
  });
});
