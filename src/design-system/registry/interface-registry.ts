// Auto-generated projection of UNFICT-WEB-INTERFACE-REGISTRY-001 v0.1
// Source: DOCS/DESIGN/WEB/UNFICT-WEB-INTERFACE-REGISTRY-001-v0.1.md

export type RegistryLayer =
  | 'foundation'
  | 'primitive'
  | 'component'
  | 'pattern'
  | 'section'
  | 'navigation'
  | 'shell'
  | 'archetype'
  | 'composition';

export type RegistryDomain = 'core' | 'web';

export type SemanticStatus = 'PROPOSED' | 'GOVERNED' | 'DEPRECATED' | 'RETIRED';

export type VisualStatus =
  | 'UNDESIGNED'
  | 'EXPLORATION'
  | 'REFERENCE_PAGE_ACCEPTED'
  | 'CANDIDATE_EXTRACTED'
  | 'APPROVED'
  | 'FROZEN';

export type ImplementationStatus =
  'NOT_IMPLEMENTED' | 'PLACEHOLDER' | 'IMPLEMENTED' | 'VERIFIED' | 'DEPRECATED';

export type AuthorityConfidence = 'LOCKED' | 'OPERATIVE' | 'PROVISIONAL' | 'UNRESOLVED';

export type VisualEvidence =
  | 'NONE'
  | 'AUTHORITY_LOCKED'
  | 'MANDATE_ONLY'
  | 'VISUAL_EXPLORATION'
  | 'VISUALLY_ACCEPTED'
  | 'REFERENCE_PAGE_ACCEPTED'
  | 'EXTRACTED_REFERENCE'
  | 'CANONICAL_COMPONENT_REFERENCE';

export type EngineBaseline = 'REQUIRED' | 'DEFERRED' | 'CREATIVE';

export interface InterfaceRegistryRecord {
  readonly id: string;
  readonly name: string;
  readonly layer: RegistryLayer;
  readonly domain: RegistryDomain;
  readonly version: string;
  readonly job: string | readonly string[];
  readonly semanticStatus: SemanticStatus;
  readonly visualStatus: VisualStatus;
  readonly implementationStatus: ImplementationStatus;
  readonly authorityConfidence: AuthorityConfidence;
  readonly visualEvidence: VisualEvidence;
  readonly sources?: readonly string[];
  readonly sourceCompositions?: readonly string[];
  readonly allowedSurfaces?: readonly string[];
  readonly slots?: readonly string[];
  readonly states?: readonly string[];
  readonly variants?: readonly string[];
  readonly responsiveContract?: string;
  readonly accessibilityContract?: string;
  readonly runtimeOwner: string;
  readonly visualRegressionOwner: string | null;
  readonly placeholderAllowed: boolean;
  readonly engineBaseline: EngineBaseline;
  readonly prohibitedUses?: string;
  readonly notes?: string;
}

export const INTERFACE_REGISTRY: readonly InterfaceRegistryRecord[] = [
  {
    id: 'FOUNDATION-COLOR-PALETTE-01',
    name: 'Canonical Web Color Palette',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: [
      'Provide the locked active Unfict Web color set and prevent local near-duplicate palette invention.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'FROZEN',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'LOCKED',
    visualEvidence: 'AUTHORITY_LOCKED',
    sources: ['BRAND-V3', 'REPO'],
    runtimeOwner: 'src/styles/tokens.css',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'REQUIRED',
    notes:
      'Current repository already exposes White, Institutional Gray, Deep Ink, Slate, Border Gray, and Unfict Blue tokens.'
  },
  {
    id: 'FOUNDATION-TYPOGRAPHY-01',
    name: 'Canonical Web Typography Families',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: ['Own primary and technical type-family selection for the public Web system.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'FROZEN',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'LOCKED',
    visualEvidence: 'AUTHORITY_LOCKED',
    sources: ['BRAND-V3', 'REPO'],
    runtimeOwner: 'src/styles/tokens.css',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'REQUIRED',
    notes: 'IBM Plex Sans is primary; IBM Plex Mono is technical/machine treatment.'
  },
  {
    id: 'FOUNDATION-BORDER-01',
    name: 'Structural Border System',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: [
      'Own restrained structural separation using the canonical Border Gray and thin rule doctrine.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'LOCKED',
    visualEvidence: 'AUTHORITY_LOCKED',
    sources: ['BRAND-V3', 'LEGACY-DS'],
    runtimeOwner: 'src/design-system/foundations/borders.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes:
      'Default Web structural rule derives from 1px Border Gray; final semantic token mapping still needs implementation.'
  },
  {
    id: 'FOUNDATION-RADIUS-01',
    name: 'Restrained Radius System',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: ['Prevent uncontrolled rounding and encode the restrained Web radius family.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'LOCKED',
    visualEvidence: 'AUTHORITY_LOCKED',
    sources: ['BRAND-V3', 'LEGACY-DS'],
    runtimeOwner: 'src/design-system/foundations/radius.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes:
      'Public marketing/corporate surfaces remain within the Brand 0–4px direction; exact semantic token mapping is not yet frozen.'
  },
  {
    id: 'FOUNDATION-ELEVATION-01',
    name: 'Elevation & Shadow Discipline',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: ['Keep decorative shadow absent by default and reserve elevation for real hierarchy.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'FROZEN',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'LOCKED',
    visualEvidence: 'AUTHORITY_LOCKED',
    sources: ['BRAND-V3', 'LEGACY-DS'],
    runtimeOwner: 'src/design-system/foundations/elevation.css',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'FOUNDATION-MOTION-01',
    name: 'Motion Discipline',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: [
      'Allow motion only when it explains state, relation, progression, loading, route, or disclosure.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'AUTHORITY_LOCKED',
    sources: ['BRAND-V3', 'ZYUX-WEB', 'REPO'],
    runtimeOwner: 'src/styles/base.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes:
      'Reduced-motion baseline exists in `base.css`; component-specific motion behavior remains to be extracted.'
  },
  {
    id: 'FOUNDATION-FOCUS-01',
    name: 'Keyboard Focus System',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: ['Provide a consistent visible high-contrast keyboard focus treatment.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['ZYUX-WEB', 'UIS'],
    runtimeOwner: 'src/design-system/foundations/focus.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'FOUNDATION-SPACING-01',
    name: 'Semantic Spacing System',
    layer: 'foundation',
    domain: 'core',
    version: '0.1',
    job: [
      'Normalize recurring spacing extracted from accepted compositions rather than inventing arbitrary page spacing.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-DS'],
    runtimeOwner: 'src/design-system/foundations/spacing.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Exact scale intentionally unresolved pending Master Composition evidence.'
  },
  {
    id: 'FOUNDATION-CONTENT-WIDTHS-01',
    name: 'Semantic Content Width System',
    layer: 'foundation',
    domain: 'web',
    version: '0.1',
    job: ['Own recurring width Jobs such as narrow, reading, standard, wide, and full.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-DS'],
    variants: [
      'CONTENT-NARROW',
      'CONTENT-READING',
      'CONTENT-STANDARD',
      'CONTENT-WIDE',
      'CONTENT-FULL'
    ],
    runtimeOwner: 'src/design-system/foundations/widths.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'FOUNDATION-GRID-01',
    name: 'Responsive Web Grid',
    layer: 'foundation',
    domain: 'web',
    version: '0.1',
    job: ['Provide the stable alignment framework for major responsive Web compositions.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['BRAND-V3', 'LEGACY-DS', 'HOME-LEGACY'],
    runtimeOwner: 'src/design-system/foundations/grid.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes:
      '12-column desktop direction is authoritative; exact implementation gutters/breakpoints still require extraction.'
  },
  {
    id: 'FOUNDATION-BREAKPOINTS-01',
    name: 'Responsive Breakpoint Proof System',
    layer: 'foundation',
    domain: 'web',
    version: '0.1',
    job: [
      'Define implementation breakpoints from governed proof widths without treating every proof width as a CSS breakpoint.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-DS'],
    runtimeOwner: 'src/design-system/foundations/breakpoints.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Design proof set includes 1440, 1280, 768, 390, 360; viability should extend to 320.'
  },
  {
    id: 'FOUNDATION-IMAGE-TREATMENT-01',
    name: 'Reality-First Image Treatment',
    layer: 'foundation',
    domain: 'web',
    version: '0.1',
    job: [
      'Own documentary Reality-first image behavior, crop discipline, and no-decorative-frame doctrine.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'LOCKED',
    visualEvidence: 'AUTHORITY_LOCKED',
    sources: ['BRAND-V3', 'HOME-LEGACY'],
    runtimeOwner: 'src/design-system/foundations/images.css',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'BUTTON-PRIMARY-01',
    name: 'Primary Button',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Highest-priority legitimate action in the current decision context.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01'],
    runtimeOwner: 'src/design-system/primitives/Button.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'BUTTON-SECONDARY-01',
    name: 'Secondary Button',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Secondary bounded action that must not compete with the current primary action.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    runtimeOwner: 'src/design-system/primitives/Button.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'BUTTON-GHOST-01',
    name: 'Ghost Button',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: [
      'Low-emphasis button variant only if accepted compositions prove a stable recurring Job.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/Button.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'TEXT-LINK-01',
    name: 'Text Link',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Progressive depth, related reading, secondary navigation, and low-commitment action.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01'],
    runtimeOwner: 'src/design-system/primitives/TextLink.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'ICON-BUTTON-01',
    name: 'Icon Button',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Compact labeled-by-context action using the governed icon runtime.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/IconButton.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'DIVIDER-01',
    name: 'Divider',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Structural separation without cardification or decorative elevation.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/Divider.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'INPUT-01',
    name: 'Text Input',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Single-line user input with visible label, help, error, focus, and autofill behavior.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/Input.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'TEXTAREA-01',
    name: 'Textarea',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Multi-line user input with governed label, help, error, focus, and mobile behavior.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/Textarea.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SELECT-01',
    name: 'Select',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Selection control only where the current form Job requires bounded choice.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/Select.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'CHECKBOX-01',
    name: 'Checkbox',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Boolean/multiple-choice control only where required by a legitimate form Job.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/Checkbox.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'DISCLOSURE-TRIGGER-01',
    name: 'Disclosure Trigger',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: [
      'Keyboard-operable expand/collapse control for answer and progressive disclosure patterns.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/primitives/DisclosureTrigger.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'CODE-INLINE-01',
    name: 'Inline Code',
    layer: 'primitive',
    domain: 'core',
    version: '0.1',
    job: ['Inline machine/technical string treatment using the governed mono family.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    runtimeOwner: 'src/design-system/primitives/CodeInline.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'GLOBAL-HEADER-01',
    name: 'Global Header',
    layer: 'component',
    domain: 'web',
    version: '0.1',
    job: [
      'Persistent public brand orientation, primary navigation, active route, and authorized primary CTA.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01'],
    runtimeOwner: 'src/design-system/components/GlobalHeader.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'GLOBAL-MOBILE-NAV-01',
    name: 'Global Mobile Navigation',
    layer: 'component',
    domain: 'web',
    version: '0.1',
    job: ['Mobile projection of legitimate primary Web navigation without capability leakage.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY'],
    runtimeOwner: 'src/design-system/components/GlobalMobileNav.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'GLOBAL-FOOTER-01',
    name: 'Global Footer',
    layer: 'component',
    domain: 'web',
    version: '0.1',
    job: [
      'Persistent public brand signature, legitimate link groups, legal links, status/identity context, and responsive closure.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01'],
    runtimeOwner: 'src/design-system/components/GlobalFooter.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'BREADCRUMB-01',
    name: 'Breadcrumb',
    layer: 'component',
    domain: 'web',
    version: '0.1',
    job: ['Hierarchical orientation where article/developer depth genuinely requires it.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'UNRESOLVED',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/Breadcrumb.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'FAQ-ITEM-01',
    name: 'FAQ Item',
    layer: 'component',
    domain: 'web',
    version: '0.1',
    job: [
      'One canonical question with direct answer, optional explanation, and optional deeper path.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'GS1-LEGACY', 'FAQ-LEGACY'],
    sourceCompositions: ['GS1-LEGACY', 'FAQ-LEGACY'],
    runtimeOwner: 'src/design-system/components/FaqItem.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'FORM-FIELD-01',
    name: 'Form Field',
    layer: 'component',
    domain: 'core',
    version: '0.1',
    job: ['Label + control + help + error composition for governed forms.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/FormField.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'CODE-BLOCK-01',
    name: 'Code Block',
    layer: 'component',
    domain: 'core',
    version: '0.1',
    job: [
      'Readable technical example container that does not imply a production API contract unless content authority says so.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY'],
    runtimeOwner: 'src/design-system/components/CodeBlock.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'CALLOUT-01',
    name: 'Callout / Note',
    layer: 'component',
    domain: 'core',
    version: '0.1',
    job: [
      'Bounded explanatory emphasis for editorial or technical content without becoming proof theater.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/Callout.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'STATUS-BANNER-01',
    name: 'Status Banner',
    layer: 'component',
    domain: 'core',
    version: '0.1',
    job: ['Text-first status communication with optional governed icon/color.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/StatusBanner.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'ARTICLE-METADATA-01',
    name: 'Article Metadata',
    layer: 'component',
    domain: 'web',
    version: '0.1',
    job: [
      'Publication/update metadata and limited reading context for long-form editorial content.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/ArticleMetadata.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'RELATED-LINK-01',
    name: 'Related Link',
    layer: 'component',
    domain: 'web',
    version: '0.1',
    job: ['Single related-reading/deeper-path item with restrained hierarchy.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/RelatedLink.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'EMPTY-STATE-01',
    name: 'Empty State',
    layer: 'component',
    domain: 'core',
    version: '0.1',
    job: ['Calm explanation of no-content state with optional legitimate next action.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'UNRESOLVED',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/EmptyState.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'ERROR-STATE-01',
    name: 'Error State',
    layer: 'component',
    domain: 'core',
    version: '0.1',
    job: [
      'Clear failure explanation with legitimate recovery path, distinct from product availability state.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/ErrorState.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'PATTERN-HERO-ACTION-01',
    name: 'Action Hero',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Establish page Job with one dominant legitimate action and optional subordinate path.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: [
      'UIS',
      'LEGACY-REG',
      'HOME-LEGACY',
      'STITCH-UNFICT-HOME-01',
      'STITCH-UNFICT-GS1-PILLAR-01'
    ],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01', 'COMPOSITION-GS1-PILLAR-01'],
    runtimeOwner: 'src/design-system/patterns/ActionHero.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-HERO-EDITORIAL-01',
    name: 'Editorial Hero',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Orient a text-led informational page without requiring Human Reality photography.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'FAQ-LEGACY'],
    sourceCompositions: ['FAQ-LEGACY'],
    runtimeOwner: 'src/design-system/patterns/EditorialHero.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-CONCEPT-FLOW-01',
    name: 'Concept Flow',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: [
      'Explain a small ordered conceptual relationship using restrained technical diagram grammar.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: [
      'UIS',
      'LEGACY-REG',
      'HOME-LEGACY',
      'GS1-LEGACY',
      'STITCH-UNFICT-HOME-01',
      'STITCH-UNFICT-GS1-PILLAR-01'
    ],
    sourceCompositions: [
      'HOME-LEGACY',
      'GS1-LEGACY',
      'COMPOSITION-HOME-01',
      'COMPOSITION-GS1-PILLAR-01'
    ],
    runtimeOwner: 'src/design-system/patterns/ConceptFlow.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-DEPTH-PATHS-01',
    name: 'Progressive Depth Paths',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Offer one or two legitimate deeper paths without competing with the primary action.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'GS1-LEGACY'],
    sourceCompositions: ['GS1-LEGACY'],
    runtimeOwner: 'src/design-system/patterns/ProgressiveDepthPaths.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-ENTITY-RAIL-01',
    name: 'Entity Orientation Rail',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Compactly orient the visitor to entity/status context without KPI/dashboard treatment.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'ABOUT-LEGACY'],
    sourceCompositions: ['ABOUT-LEGACY'],
    runtimeOwner: 'src/design-system/patterns/EntityOrientationRail.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'PATTERN-FAQ-GROUP-01',
    name: 'FAQ Group',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Group canonical FAQ items around one topic while preserving direct-answer semantics.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'FAQ-LEGACY'],
    sourceCompositions: ['FAQ-LEGACY'],
    runtimeOwner: 'src/design-system/patterns/FaqGroup.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-ARTICLE-HEADER-01',
    name: 'Article Header',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Orient the reader to article category, title, lead, and relevant metadata.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/patterns/ArticleHeader.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-RELATED-READING-01',
    name: 'Related Reading',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: [
      'Present relevant next reading without turning article closure into a marketing card grid.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/patterns/RelatedReading.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-FINAL-CTA-01',
    name: 'Final CTA',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Conclude a content path with one legitimate primary next action.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: [
      'UIS',
      'LEGACY-REG',
      'HOME-LEGACY',
      'GS1-LEGACY',
      'FAQ-LEGACY',
      'STITCH-UNFICT-HOME-01',
      'STITCH-UNFICT-GS1-PILLAR-01'
    ],
    sourceCompositions: [
      'HOME-LEGACY',
      'GS1-LEGACY',
      'FAQ-LEGACY',
      'COMPOSITION-HOME-01',
      'COMPOSITION-GS1-PILLAR-01'
    ],
    runtimeOwner: 'src/design-system/patterns/FinalCta.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-INTEGRATION-REASSURANCE-01',
    name: 'Integration Reassurance',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: ['Explain integration-not-replacement and reduce switching-cost anxiety truthfully.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'ABOUT-LEGACY'],
    sourceCompositions: ['ABOUT-LEGACY'],
    runtimeOwner: 'src/design-system/patterns/IntegrationReassurance.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PATTERN-BRAND-SIGNATURE-01',
    name: 'Brand Signature',
    layer: 'pattern',
    domain: 'web',
    version: '0.1',
    job: [
      'Create one restrained, memorable Reality Sync identity peak without decorative spectacle.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'ABOUT-LEGACY'],
    sourceCompositions: ['ABOUT-LEGACY'],
    runtimeOwner: 'src/design-system/patterns/BrandSignature.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-HERO-HUMAN-01',
    name: 'Human Reality Hero',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Establish page Job with live copy and one Reality-first environmental image.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: [
      'UIS',
      'LEGACY-REG',
      'HOME-LEGACY',
      'STITCH-UNFICT-HOME-01',
      'STITCH-UNFICT-GS1-PILLAR-01'
    ],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01', 'COMPOSITION-GS1-PILLAR-01'],
    runtimeOwner: 'src/design-system/sections/HumanRealityHero.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-HERO-EDITORIAL-01',
    name: 'Editorial Hero Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Text-first page orientation with no required photography.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'FAQ-LEGACY'],
    sourceCompositions: ['FAQ-LEGACY'],
    runtimeOwner: 'src/design-system/sections/EditorialHeroSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-PROBLEM-01',
    name: 'Problem Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Explain the practical problem or consequence without feature-grid inflation.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/sections/ProblemSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'SECTION-VALUE-LIST-01',
    name: 'Value List Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: [
      'Present a small number of legitimate value outcomes without generic SaaS cardification.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/sections/ValueListSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'SECTION-CONCEPTUAL-MODEL-01',
    name: 'Conceptual Model Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Explain a bounded conceptual sequence using the governed Concept Flow pattern.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: [
      'UIS',
      'LEGACY-REG',
      'HOME-LEGACY',
      'GS1-LEGACY',
      'STITCH-UNFICT-HOME-01',
      'STITCH-UNFICT-GS1-PILLAR-01'
    ],
    sourceCompositions: [
      'HOME-LEGACY',
      'GS1-LEGACY',
      'COMPOSITION-HOME-01',
      'COMPOSITION-GS1-PILLAR-01'
    ],
    runtimeOwner: 'src/design-system/sections/ConceptualModelSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-PERSISTENCE-01',
    name: 'Persistence Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Explain continuity/persistence value where current content authority supports it.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'GS1-LEGACY'],
    sourceCompositions: ['GS1-LEGACY'],
    runtimeOwner: 'src/design-system/sections/PersistenceSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'SECTION-INTEGRATION-REASSURANCE-01',
    name: 'Integration Reassurance Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Communicate that Unfict integrates with systems that continue to own their Jobs.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'ABOUT-LEGACY'],
    sourceCompositions: ['ABOUT-LEGACY'],
    runtimeOwner: 'src/design-system/sections/IntegrationReassuranceSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-BRAND-SIGNATURE-01',
    name: 'Brand Signature Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Provide a restrained Reality Sync identity peak.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'ABOUT-LEGACY'],
    sourceCompositions: ['ABOUT-LEGACY'],
    runtimeOwner: 'src/design-system/sections/BrandSignatureSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-ENTITY-ORIENTATION-01',
    name: 'Entity Orientation Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: [
      'Orient About/entity pages to purpose, status, and identity without dashboard semantics.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'ABOUT-LEGACY'],
    sourceCompositions: ['ABOUT-LEGACY'],
    runtimeOwner: 'src/design-system/sections/EntityOrientationSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'SECTION-FAQ-SHORT-01',
    name: 'Short FAQ Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Present a small page-specific FAQ subset using the canonical FAQ item owner.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'GS1-LEGACY'],
    sourceCompositions: ['GS1-LEGACY'],
    runtimeOwner: 'src/design-system/sections/ShortFaqSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'SECTION-FAQ-CATEGORY-01',
    name: 'FAQ Category Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Group canonical questions under one topic for the Answer Hub.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'LEGACY-REG', 'FAQ-LEGACY'],
    sourceCompositions: ['FAQ-LEGACY'],
    runtimeOwner: 'src/design-system/sections/FaqCategorySection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-ARTICLE-INTRO-01',
    name: 'Article Intro Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Orient article context, thesis/answer, lead, and relevant metadata.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/sections/ArticleIntroSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-ARTICLE-BODY-01',
    name: 'Article Body Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: [
      'Provide reading-first long-form content behavior including technical and semantic sub-elements.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/sections/ArticleBodySection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-RELATED-READING-01',
    name: 'Related Reading Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Close editorial content with restrained relevant next reading.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/sections/RelatedReadingSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-FINAL-CTA-01',
    name: 'Final CTA Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: ['Page-level conclusion using the governed Final CTA pattern.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: [
      'UIS',
      'LEGACY-REG',
      'HOME-LEGACY',
      'STITCH-UNFICT-HOME-01',
      'STITCH-UNFICT-GS1-PILLAR-01'
    ],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01', 'COMPOSITION-GS1-PILLAR-01'],
    runtimeOwner: 'src/design-system/sections/FinalCtaSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'SECTION-EARLY-ACCESS-FORM-01',
    name: 'Early Access Form Section',
    layer: 'section',
    domain: 'web',
    version: '0.1',
    job: [
      'Collect minimum necessary preview context and preserve visitor intent through success/error states.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/sections/EarlyAccessFormSection.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'NAV-WEB-PRIMARY-01',
    name: 'Primary Web Navigation',
    layer: 'navigation',
    domain: 'web',
    version: '0.1',
    job: ['Expose only current legitimate public navigation scope.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'ZYUX-WEB', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01'],
    runtimeOwner: 'src/design-system/navigation/NavWebPrimary.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'NAV-WEB-MOBILE-01',
    name: 'Mobile Web Navigation',
    layer: 'navigation',
    domain: 'web',
    version: '0.1',
    job: ['Provide simpler mobile access to the same legitimate public navigation scope.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'ZYUX-WEB', 'LEGACY-REG', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY'],
    runtimeOwner: 'src/design-system/navigation/NavWebMobile.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'NAV-ARTICLE-TOC-01',
    name: 'Article Table of Contents',
    layer: 'navigation',
    domain: 'web',
    version: '0.1',
    job: ['Provide local article navigation only when article length/structure justifies it.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'UNRESOLVED',
    visualEvidence: 'NONE',
    sources: ['UIS', 'ZYUX-WEB', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/ArticleToc.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'NAV-DEVELOPER-LOCAL-01',
    name: 'Developer Local Navigation',
    layer: 'navigation',
    domain: 'web',
    version: '0.1',
    job: ['Provide local developer-depth navigation only if current content proves the Job.'],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'UNRESOLVED',
    visualEvidence: 'NONE',
    sources: ['UIS', 'ZYUX-WEB', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/components/DeveloperLocalNav.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'DEFERRED'
  },
  {
    id: 'SHELL-WEB-PUBLIC-01',
    name: 'Public Web Shell',
    layer: 'shell',
    domain: 'web',
    version: '0.1',
    job: [
      'Provide stable public orientation through one global header, main region, and global footer.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'CANDIDATE_EXTRACTED',
    implementationStatus: 'IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'LEGACY-REG', 'HOME-LEGACY', 'REPO'],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01'],
    runtimeOwner: 'src/design-system/shells/PublicWebShell.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes:
      '`BaseLayout.astro` exists as bootstrap infrastructure but does not yet satisfy the complete governed shell contract.'
  },
  {
    id: 'SHELL-WEB-ARTICLE-01',
    name: 'Article Shell',
    layer: 'shell',
    domain: 'web',
    version: '0.1',
    job: [
      'Provide reading-first global framing for Insights and other long-form editorial surfaces.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'LEGACY-REG'],
    runtimeOwner: 'src/design-system/shells/ArticleShell.astro',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED'
  },
  {
    id: 'PAGE-ARCHETYPE-ACQUISITION',
    name: 'Acquisition Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: [
      'Support Job → relevance → value → conceptual understanding → reassurance → legitimate next action.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/AcquisitionArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'PAGE-ARCHETYPE-PILLAR',
    name: 'Pillar Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: [
      'Support subject → conceptual model → relevance/problem → useful system behavior → optional depth → next step.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/PillarArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'PAGE-ARCHETYPE-ENTITY',
    name: 'Entity Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: ['Support entity → purpose → role → boundaries → credibility → identity.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/EntityArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'PAGE-ARCHETYPE-ANSWER-HUB',
    name: 'Answer Hub Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: [
      'Support question orientation → grouped direct answers → optional depth → related paths → legitimate next action.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/AnswerHubArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'PAGE-ARCHETYPE-ARTICLE',
    name: 'Article Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: [
      'Support context → answer/thesis → explanation → evidence/examples → technical depth → related reading.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/ArticleArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'PAGE-ARCHETYPE-CONVERSION',
    name: 'Conversion Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: [
      'Support expectation → qualification/context → minimum necessary form → privacy context → success/error → continuation.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/ConversionArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'PAGE-ARCHETYPE-LEGAL',
    name: 'Legal Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: [
      'Support document identity → date → readable structured sections → stable legal navigation where useful.'
    ],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/LegalArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'PAGE-ARCHETYPE-UTILITY',
    name: 'Utility Archetype',
    layer: 'archetype',
    domain: 'web',
    version: '0.1',
    job: ['Support state → clear explanation → legitimate recovery action with minimal UI.'],
    semanticStatus: 'GOVERNED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'OPERATIVE',
    visualEvidence: 'MANDATE_ONLY',
    sources: ['UIS', 'ZYUX-WEB'],
    runtimeOwner: 'src/design-system/archetypes/UtilityArchetype.ts',
    visualRegressionOwner: null,
    placeholderAllowed: true,
    engineBaseline: 'REQUIRED',
    notes: 'Archetype defines experience obligations, not a rigid fixed section order.'
  },
  {
    id: 'COMPOSITION-HOME-01',
    name: 'Homepage Master Composition',
    layer: 'composition',
    domain: 'web',
    version: '0.1',
    job: [
      'Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ACQUISITION` Job as part of the Master Composition Set.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'VISUALLY_ACCEPTED',
    sources: ['UIS', 'HOME-LEGACY'],
    sourceCompositions: ['HOME-LEGACY', 'COMPOSITION-HOME-01'],
    runtimeOwner: 'src/pages/index.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'CREATIVE',
    notes:
      'Stitch export accepted as active design evidence for governed extraction; page route remains non-replaced pending full content/responsive ratification.'
  },
  {
    id: 'COMPOSITION-GS1-PILLAR-01',
    name: 'GS1 Digital Link Master Composition',
    layer: 'composition',
    domain: 'web',
    version: '0.1',
    job: [
      'Establish the active Unfict visual language for the `PAGE-ARCHETYPE-PILLAR` Job as part of the Master Composition Set.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'REFERENCE_PAGE_ACCEPTED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'REFERENCE_PAGE_ACCEPTED',
    sources: ['UIS', 'GS1-LEGACY', 'STITCH-UNFICT-GS1-PILLAR-01'],
    sourceCompositions: ['GS1-LEGACY', 'COMPOSITION-GS1-PILLAR-01'],
    runtimeOwner: 'src/pages/gs1-digital-link.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'CREATIVE',
    notes:
      'Stitch export accepted as active design evidence for governed extraction; page route remains non-replaced pending full content/responsive ratification.'
  },
  {
    id: 'COMPOSITION-ABOUT-01',
    name: 'About Master Composition',
    layer: 'composition',
    domain: 'web',
    version: '0.1',
    job: [
      'Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ENTITY` Job as part of the Master Composition Set.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'ABOUT-LEGACY'],
    sourceCompositions: ['ABOUT-LEGACY'],
    runtimeOwner: 'src/pages/about.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'CREATIVE',
    notes:
      'Legacy Zyppi-era material is seed/reference evidence only; active Unfict composition must be designed and accepted as a whole.'
  },
  {
    id: 'COMPOSITION-FAQ-01',
    name: 'FAQ Master Composition',
    layer: 'composition',
    domain: 'web',
    version: '0.1',
    job: [
      'Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ANSWER-HUB` Job as part of the Master Composition Set.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS', 'FAQ-LEGACY'],
    sourceCompositions: ['FAQ-LEGACY'],
    runtimeOwner: 'src/pages/faq.astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'CREATIVE',
    notes:
      'Legacy Zyppi-era material is seed/reference evidence only; active Unfict composition must be designed and accepted as a whole.'
  },
  {
    id: 'COMPOSITION-ARTICLE-01',
    name: 'Insight Article Master Composition',
    layer: 'composition',
    domain: 'web',
    version: '0.1',
    job: [
      'Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ARTICLE` Job as part of the Master Composition Set.'
    ],
    semanticStatus: 'PROPOSED',
    visualStatus: 'UNDESIGNED',
    implementationStatus: 'NOT_IMPLEMENTED',
    authorityConfidence: 'PROVISIONAL',
    visualEvidence: 'NONE',
    sources: ['UIS'],
    runtimeOwner: 'src/pages/insights/[id].astro',
    visualRegressionOwner: null,
    placeholderAllowed: false,
    engineBaseline: 'CREATIVE',
    notes:
      'Legacy Zyppi-era material is seed/reference evidence only; active Unfict composition must be designed and accepted as a whole.'
  }
] as const;

export function getRegistryRecordById(id: string): InterfaceRegistryRecord | undefined {
  return INTERFACE_REGISTRY.find((r) => r.id === id);
}

export function getRegistryRecordsByLayer(
  layer: RegistryLayer
): readonly InterfaceRegistryRecord[] {
  return INTERFACE_REGISTRY.filter((r) => r.layer === layer);
}

export function getRegistryRecordsByBaseline(
  baseline: EngineBaseline
): readonly InterfaceRegistryRecord[] {
  return INTERFACE_REGISTRY.filter((r) => r.engineBaseline === baseline);
}
