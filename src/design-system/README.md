# Unfict Web Interface System & Runtime Engine

## Core Invariants

> **Pages consume the governed interface system. Pages do not independently define it.**

> **One recurring visual Job → one governed implementation owner.**

> **Missing owner → PATTERN-GAP, not local visual invention.**

> **A governed interface owner may be structurally implemented before its final visual design exists. Binding an approved visual extraction later preserves the owner ID, semantic API, consumer import, content contract, and page logic.**

## Interface Engine Layering

```text
L0 — Foundations (Tokens, borders, radius, focus, grid, spacing, widths)
  ↓
L1 — Primitives (Button, TextLink, IconButton, Divider, Input, Textarea, DisclosureTrigger, CodeInline)
  ↓
L2 — Components (GlobalHeader, GlobalFooter, FaqItem, FormField, CodeBlock, Callout, ArticleMetadata, RelatedLink)
  ↓
L3 — Patterns (ActionHero, EditorialHero, ConceptFlow, ProgressiveDepthPaths, FaqGroup, ArticleHeader, RelatedReading, FinalCta, IntegrationReassurance, BrandSignature)
  ↓
L4 — Sections (HumanRealityHero, EditorialHeroSection, ConceptualModelSection, IntegrationReassuranceSection, BrandSignatureSection, FaqCategorySection, ArticleIntroSection, ArticleBodySection, RelatedReadingSection, FinalCtaSection, EarlyAccessFormSection)
  ↓
L5 — Navigation & Shells (NavWebPrimary, NavWebMobile, PublicWebShell, ArticleShell)
  ↓
L6 — Archetypes (AcquisitionArchetype, PillarArchetype, EntityArchetype, AnswerHubArchetype, ArticleArchetype, ConversionArchetype, LegalArchetype, UtilityArchetype)
  ↓
L7 — Page Compositions
```

## Three-Axis Status Separation

Every reusable interface owner tracks three independent axes:

1. `semanticStatus` (`PROPOSED` | `GOVERNED` | `DEPRECATED` | `RETIRED`)
2. `visualStatus` (`UNDESIGNED` | `EXPLORATION` | `REFERENCE_PAGE_ACCEPTED` | `CANDIDATE_EXTRACTED` | `APPROVED` | `FROZEN`)
3. `implementationStatus` (`NOT_IMPLEMENTED` | `PLACEHOLDER` | `IMPLEMENTED` | `VERIFIED` | `DEPRECATED`)

A component may have `semanticStatus: GOVERNED` and `implementationStatus: PLACEHOLDER` while `visualStatus` remains `UNDESIGNED` or `REFERENCE_PAGE_ACCEPTED`. Creating a runtime placeholder component **never** converts an unresolved visual status into visual approval.

## Placeholder Tracking Policy

Tracked interface placeholders are recorded in:
`src/design-system/metadata/INTERFACE-PLACEHOLDERS.json`

Every placeholder owner exposes:

- Source marker: `UNFICT_INTERFACE_PLACEHOLDER`
- HTML rendered attributes: `data-uf-interface-owner="<OWNER_ID>"` and `data-uf-interface-status="placeholder"`

All placeholder components are:

- **Structurally real**
- **Semantically meaningful**
- **Visually neutral** (no invented final visual design, cardification, shadows, or gradients)

> **STRUCTURAL PLACEHOLDER — NOT VISUAL AUTHORITY**

## Validation & Quality Gates

Run local interface validation:

```bash
pnpm run interface:validate
```

Run release readiness gate (fails while placeholders remain):

```bash
pnpm run interface:check-release
```

Normal CI includes `interface:validate` alongside lint, format check, typecheck, icon validation, unit tests, and static build:

```bash
pnpm run ci
```
