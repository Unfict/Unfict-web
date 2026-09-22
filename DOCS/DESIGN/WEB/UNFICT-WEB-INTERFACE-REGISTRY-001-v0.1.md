# UNFICT-WEB-INTERFACE-REGISTRY-001

## Unfict Web Interface Owner, Status, Evidence & Runtime Registry

**Canonical ID:** `UNFICT-WEB-INTERFACE-REGISTRY-001`  
**Version:** `0.1`  
**Status:** `DRAFT — COMPANION REGISTRY / FOR CHAIR & COUNCIL REVIEW`  
**Date:** 21 September 2026  
**Issued For:** Chair / Unfict Constitutional Council  
**Governing System:** `UNFICT-WEB-INTERFACE-SYSTEM-001 v0.1`  
**Primary Upstream Authorities:** `BRAND-001 v3.0 — RATIFIED` · applicable ratified `ZyUX` doctrine · `ZYPPI-WEB-ZYUX-PROJECTION-001 v0.2` as inherited Web experience authority · approved public content authority  
**Coordinates With:** `UNFICT-ICONOGRAPHY-001 v1.0 — RATIFIED` · `UNFICT-ICONS-LIST v1.0 — RATIFIED` · `UNFICT-WEB-DESIGN-EXTRACTION-PROTOCOL-001` when created · `UNFICT-WEB-INTERFACE-ENGINE-IMPL-01` when issued  
**Repository:** `Unfict/Unfict-web`  
**Nature:** Machine/human-readable governance registry. It records what interface owners exist or are proposed, what evidence supports them, what their semantic/visual/implementation state is, and where their runtime owner belongs. It does not itself create product capability, public claims, or navigation authorization.

---

# 0. Purpose

This Registry is the operational inventory companion to `UNFICT-WEB-INTERFACE-SYSTEM-001`.

The governing system defines:

> **how the Unfict Web interface system works.**

This Registry defines:

> **what interface owners exist now, what state each owner is in, and what may safely happen next.**

The Registry is the synchronization boundary between:

```text
CREATIVE TRACK
whole-page design
visual evidence
extraction
approval

        ↕ REGISTRY ↕

ENGINE TRACK
runtime ownership
placeholder implementation
validation
tests
visual binding
```

The Registry SHALL prevent the following category errors:

```text
semantic legitimacy
≠ visual approval

visual approval
≠ implementation

implementation
≠ verification

placeholder implementation
≠ approved design
```

---

# 1. Registry Scope

Version `0.1` records the initial Unfict Web interface system across:

```text
L0 — Foundations / Tokens
L1 — Primitives
L2 — Components
L3 — Patterns
L4 — Sections
L5 — Navigation / Shells
L6 — Page Archetypes
L7 — Master / Approved Compositions
```

This version intentionally includes both:

- owners required for the first interface-engine milestone; and
- explicitly proposed owners that should remain unavailable to production implementation until their semantic status is promoted.

---

# 2. Three-Axis Status Model

Every reusable owner SHALL track three independent axes.

## 2.1 `semanticStatus`

Allowed values:

```text
PROPOSED
GOVERNED
DEPRECATED
RETIRED
```

Meaning:

- `PROPOSED` — plausible owner/Job; not yet available as production semantic authority.
- `GOVERNED` — owner identity and Job are legitimate for governed system use.
- `DEPRECATED` — retained for migration only.
- `RETIRED` — must not be used.

## 2.2 `visualStatus`

Allowed values:

```text
UNDESIGNED
EXPLORATION
REFERENCE_PAGE_ACCEPTED
CANDIDATE_EXTRACTED
APPROVED
FROZEN
```

Meaning:

- `UNDESIGNED` — no active Unfict visual treatment is approved.
- `EXPLORATION` — active visual exploration exists but is not accepted.
- `REFERENCE_PAGE_ACCEPTED` — an accepted page/reference contains credible source evidence.
- `CANDIDATE_EXTRACTED` — a reusable treatment has been extracted and awaits approval.
- `APPROVED` — reusable visual owner is approved.
- `FROZEN` — approved visual contract is stable and regression-protected.

## 2.3 `implementationStatus`

Allowed values:

```text
NOT_IMPLEMENTED
PLACEHOLDER
IMPLEMENTED
VERIFIED
DEPRECATED
```

Meaning:

- `NOT_IMPLEMENTED` — no governed runtime owner exists yet.
- `PLACEHOLDER` — structural runtime owner exists using deliberately neutral placeholder visuals.
- `IMPLEMENTED` — intended implementation exists.
- `VERIFIED` — implementation has passed its governed tests / regression obligations.
- `DEPRECATED` — runtime remains only for migration.

---

# 3. Authority Confidence

Allowed values:

```text
LOCKED
OPERATIVE
PROVISIONAL
UNRESOLVED
```

- `LOCKED` — exact upstream authority exists and must not drift.
- `OPERATIVE` — sufficient authority exists for current governed use.
- `PROVISIONAL` — credible working contract, still subject to extraction or review.
- `UNRESOLVED` — do not infer.

---

# 4. Visual Evidence Classes

Allowed values:

```text
NONE
AUTHORITY_LOCKED
MANDATE_ONLY
VISUAL_EXPLORATION
VISUALLY_ACCEPTED
REFERENCE_PAGE_ACCEPTED
EXTRACTED_REFERENCE
CANONICAL_COMPONENT_REFERENCE
```

`AUTHORITY_LOCKED` is a Registry extension for ratified upstream foundations such as Brand color and typography that do not depend on a page-composition screenshot.

---

# 5. Engine Eligibility Rule

The engine MAY create a runtime owner or neutral placeholder only when:

```text
semanticStatus = GOVERNED
AND
placeholderAllowed = true
```

unless an explicit Chair mandate authorizes a narrower exception.

`PROPOSED` owners SHALL remain unavailable to production implementation by default.

A placeholder implementation SHALL NOT cause `visualStatus` to advance.

---

# 6. Runtime Path Rule

`runtimeOwner` records the intended single implementation owner.

When:

```text
implementationStatus = NOT_IMPLEMENTED
```

the path is a target path, not a claim that the file already exists.

Runtime paths are repository-native and may be corrected by an implementation mandate when repository evidence proves a better owner location, provided the Registry is updated in the same change.

---

# 7. Placeholder Rule

For governed owners whose final visual treatment is unresolved:

```text
semanticStatus: GOVERNED
visualStatus: UNDESIGNED | REFERENCE_PAGE_ACCEPTED | CANDIDATE_EXTRACTED
implementationStatus: PLACEHOLDER
```

is valid.

The placeholder must remain visually neutral.

Binding an approved design later should preserve:

- owner ID;
- consumer API;
- content-slot model;
- import path where practical;
- semantic behavior;
- accessibility contract.

---

# 8. Source Codes

Registry records may use these source codes:

```text
BRAND-V3
BRAND-001 v3.0 — RATIFIED

ZYUX-WEB
ZYPPI-WEB-ZYUX-PROJECTION-001 v0.2

UIS
UNFICT-WEB-INTERFACE-SYSTEM-001 v0.1

LEGACY-DS
ZYPPI-DESIGN-SYSTEM-001 v0.1

LEGACY-REG
ZYPPI-DESIGN-SYSTEM-REGISTRY-001 v0.1

HOME-LEGACY
accepted Zyppi-era Homepage visual parent / corrected Homepage evidence

GS1-LEGACY
GS1 Digital Link legacy structural / design evidence

ABOUT-LEGACY
About legacy structural / mandate evidence

FAQ-LEGACY
FAQ legacy structural / mandate evidence

REPO
current `Unfict/Unfict-web` repository implementation evidence

ICON
ratified Unfict iconography/runtime authority
```

Legacy evidence may support extraction or structural understanding.

It does not automatically make a treatment an approved active Unfict visual.

---

# 9. Registry Record Schema

Each reusable owner SHOULD record:

```yaml
id:
name:
layer:
domain:
version:

job:

semanticStatus:
visualStatus:
implementationStatus:
authorityConfidence:
visualEvidence:

sources:
sourceCompositions:

allowedSurfaces:
slots:
states:
variants:

responsiveContract:
accessibilityContract:

runtimeOwner:
visualRegressionOwner:

placeholderAllowed:
engineBaseline:

prohibitedUses:
notes:
```

Fields that do not apply MAY be omitted.

---

# 10. Baseline Interpretation

This Registry intentionally distinguishes:

```text
GOVERNED OWNER
```

from:

```text
APPROVED VISUAL OWNER
```

Many engine-baseline owners are therefore registered as semantically governed while still:

```text
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
```

This is intentional.

It permits the engine to proceed with neutral placeholders without freezing the creative outcome.

---

# PART I — L0 FOUNDATIONS / TOKENS

## FOUNDATION-COLOR-PALETTE-01 — Canonical Web Color Palette

```yaml
id: FOUNDATION-COLOR-PALETTE-01
name: Canonical Web Color Palette
layer: foundation
domain: core
version: 0.1

job:
  - Provide the locked active Unfict Web color set and prevent local near-duplicate palette invention.

semanticStatus: GOVERNED
visualStatus: FROZEN
implementationStatus: IMPLEMENTED
authorityConfidence: LOCKED
visualEvidence: AUTHORITY_LOCKED

sources:
  - BRAND-V3
  - REPO

runtimeOwner: src/styles/tokens.css
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: REQUIRED

notes: >-
  Current repository already exposes White, Institutional Gray, Deep Ink, Slate, Border Gray, and Unfict Blue tokens.
```

## FOUNDATION-TYPOGRAPHY-01 — Canonical Web Typography Families

```yaml
id: FOUNDATION-TYPOGRAPHY-01
name: Canonical Web Typography Families
layer: foundation
domain: core
version: 0.1

job:
  - Own primary and technical type-family selection for the public Web system.

semanticStatus: GOVERNED
visualStatus: FROZEN
implementationStatus: IMPLEMENTED
authorityConfidence: LOCKED
visualEvidence: AUTHORITY_LOCKED

sources:
  - BRAND-V3
  - REPO

runtimeOwner: src/styles/tokens.css
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: REQUIRED

notes: >-
  IBM Plex Sans is primary; IBM Plex Mono is technical/machine treatment.
```

## FOUNDATION-BORDER-01 — Structural Border System

```yaml
id: FOUNDATION-BORDER-01
name: Structural Border System
layer: foundation
domain: core
version: 0.1

job:
  - Own restrained structural separation using the canonical Border Gray and thin rule doctrine.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: LOCKED
visualEvidence: AUTHORITY_LOCKED

sources:
  - BRAND-V3
  - LEGACY-DS

runtimeOwner: src/design-system/foundations/borders.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Default Web structural rule derives from 1px Border Gray; final semantic token mapping still needs implementation.
```

## FOUNDATION-RADIUS-01 — Restrained Radius System

```yaml
id: FOUNDATION-RADIUS-01
name: Restrained Radius System
layer: foundation
domain: core
version: 0.1

job:
  - Prevent uncontrolled rounding and encode the restrained Web radius family.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: LOCKED
visualEvidence: AUTHORITY_LOCKED

sources:
  - BRAND-V3
  - LEGACY-DS

runtimeOwner: src/design-system/foundations/radius.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Public marketing/corporate surfaces remain within the Brand 0–4px direction; exact semantic token mapping is not yet frozen.
```

## FOUNDATION-ELEVATION-01 — Elevation & Shadow Discipline

```yaml
id: FOUNDATION-ELEVATION-01
name: Elevation & Shadow Discipline
layer: foundation
domain: core
version: 0.1

job:
  - Keep decorative shadow absent by default and reserve elevation for real hierarchy.

semanticStatus: GOVERNED
visualStatus: FROZEN
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: LOCKED
visualEvidence: AUTHORITY_LOCKED

sources:
  - BRAND-V3
  - LEGACY-DS

runtimeOwner: src/design-system/foundations/elevation.css
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: REQUIRED
```

## FOUNDATION-MOTION-01 — Motion Discipline

```yaml
id: FOUNDATION-MOTION-01
name: Motion Discipline
layer: foundation
domain: core
version: 0.1

job:
  - Allow motion only when it explains state, relation, progression, loading, route, or disclosure.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: AUTHORITY_LOCKED

sources:
  - BRAND-V3
  - ZYUX-WEB
  - REPO

runtimeOwner: src/styles/base.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Reduced-motion baseline exists in `base.css`; component-specific motion behavior remains to be extracted.
```

## FOUNDATION-FOCUS-01 — Keyboard Focus System

```yaml
id: FOUNDATION-FOCUS-01
name: Keyboard Focus System
layer: foundation
domain: core
version: 0.1

job:
  - Provide a consistent visible high-contrast keyboard focus treatment.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - ZYUX-WEB
  - UIS

runtimeOwner: src/design-system/foundations/focus.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## FOUNDATION-SPACING-01 — Semantic Spacing System

```yaml
id: FOUNDATION-SPACING-01
name: Semantic Spacing System
layer: foundation
domain: core
version: 0.1

job:
  - Normalize recurring spacing extracted from accepted compositions rather than inventing arbitrary page spacing.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-DS

runtimeOwner: src/design-system/foundations/spacing.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Exact scale intentionally unresolved pending Master Composition evidence.
```

## FOUNDATION-CONTENT-WIDTHS-01 — Semantic Content Width System

```yaml
id: FOUNDATION-CONTENT-WIDTHS-01
name: Semantic Content Width System
layer: foundation
domain: web
version: 0.1

job:
  - Own recurring width Jobs such as narrow, reading, standard, wide, and full.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-DS
variants:
  - CONTENT-NARROW
  - CONTENT-READING
  - CONTENT-STANDARD
  - CONTENT-WIDE
  - CONTENT-FULL

runtimeOwner: src/design-system/foundations/widths.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## FOUNDATION-GRID-01 — Responsive Web Grid

```yaml
id: FOUNDATION-GRID-01
name: Responsive Web Grid
layer: foundation
domain: web
version: 0.1

job:
  - Provide the stable alignment framework for major responsive Web compositions.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - BRAND-V3
  - LEGACY-DS
  - HOME-LEGACY

runtimeOwner: src/design-system/foundations/grid.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  12-column desktop direction is authoritative; exact implementation gutters/breakpoints still require extraction.
```

## FOUNDATION-BREAKPOINTS-01 — Responsive Breakpoint Proof System

```yaml
id: FOUNDATION-BREAKPOINTS-01
name: Responsive Breakpoint Proof System
layer: foundation
domain: web
version: 0.1

job:
  - Define implementation breakpoints from governed proof widths without treating every proof width as a CSS breakpoint.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-DS

runtimeOwner: src/design-system/foundations/breakpoints.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Design proof set includes 1440, 1280, 768, 390, 360; viability should extend to 320.
```

## FOUNDATION-IMAGE-TREATMENT-01 — Reality-First Image Treatment

```yaml
id: FOUNDATION-IMAGE-TREATMENT-01
name: Reality-First Image Treatment
layer: foundation
domain: web
version: 0.1

job:
  - Own documentary Reality-first image behavior, crop discipline, and no-decorative-frame doctrine.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: LOCKED
visualEvidence: AUTHORITY_LOCKED

sources:
  - BRAND-V3
  - HOME-LEGACY

runtimeOwner: src/design-system/foundations/images.css
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```


# PART II — L1 PRIMITIVES

## BUTTON-PRIMARY-01 — Primary Button

```yaml
id: BUTTON-PRIMARY-01
name: Primary Button
layer: primitive
domain: core
version: 0.1

job:
  - Highest-priority legitimate action in the current decision context.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01

runtimeOwner: src/design-system/primitives/Button.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## BUTTON-SECONDARY-01 — Secondary Button

```yaml
id: BUTTON-SECONDARY-01
name: Secondary Button
layer: primitive
domain: core
version: 0.1

job:
  - Secondary bounded action that must not compete with the current primary action.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY

runtimeOwner: src/design-system/primitives/Button.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## BUTTON-GHOST-01 — Ghost Button

```yaml
id: BUTTON-GHOST-01
name: Ghost Button
layer: primitive
domain: core
version: 0.1

job:
  - Low-emphasis button variant only if accepted compositions prove a stable recurring Job.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/Button.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## TEXT-LINK-01 — Text Link

```yaml
id: TEXT-LINK-01
name: Text Link
layer: primitive
domain: core
version: 0.1

job:
  - Progressive depth, related reading, secondary navigation, and low-commitment action.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01

runtimeOwner: src/design-system/primitives/TextLink.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## ICON-BUTTON-01 — Icon Button

```yaml
id: ICON-BUTTON-01
name: Icon Button
layer: primitive
domain: core
version: 0.1

job:
  - Compact labeled-by-context action using the governed icon runtime.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/IconButton.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## DIVIDER-01 — Divider

```yaml
id: DIVIDER-01
name: Divider
layer: primitive
domain: core
version: 0.1

job:
  - Structural separation without cardification or decorative elevation.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/Divider.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## INPUT-01 — Text Input

```yaml
id: INPUT-01
name: Text Input
layer: primitive
domain: core
version: 0.1

job:
  - Single-line user input with visible label, help, error, focus, and autofill behavior.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/Input.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## TEXTAREA-01 — Textarea

```yaml
id: TEXTAREA-01
name: Textarea
layer: primitive
domain: core
version: 0.1

job:
  - Multi-line user input with governed label, help, error, focus, and mobile behavior.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/Textarea.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SELECT-01 — Select

```yaml
id: SELECT-01
name: Select
layer: primitive
domain: core
version: 0.1

job:
  - Selection control only where the current form Job requires bounded choice.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/Select.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## CHECKBOX-01 — Checkbox

```yaml
id: CHECKBOX-01
name: Checkbox
layer: primitive
domain: core
version: 0.1

job:
  - Boolean/multiple-choice control only where required by a legitimate form Job.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/Checkbox.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## DISCLOSURE-TRIGGER-01 — Disclosure Trigger

```yaml
id: DISCLOSURE-TRIGGER-01
name: Disclosure Trigger
layer: primitive
domain: core
version: 0.1

job:
  - Keyboard-operable expand/collapse control for answer and progressive disclosure patterns.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/primitives/DisclosureTrigger.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## CODE-INLINE-01 — Inline Code

```yaml
id: CODE-INLINE-01
name: Inline Code
layer: primitive
domain: core
version: 0.1

job:
  - Inline machine/technical string treatment using the governed mono family.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY

runtimeOwner: src/design-system/primitives/CodeInline.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```


# PART III — L2 COMPONENTS

## GLOBAL-HEADER-01 — Global Header

```yaml
id: GLOBAL-HEADER-01
name: Global Header
layer: component
domain: web
version: 0.1

job:
  - Persistent public brand orientation, primary navigation, active route, and authorized primary CTA.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01

runtimeOwner: src/design-system/components/GlobalHeader.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## GLOBAL-MOBILE-NAV-01 — Global Mobile Navigation

```yaml
id: GLOBAL-MOBILE-NAV-01
name: Global Mobile Navigation
layer: component
domain: web
version: 0.1

job:
  - Mobile projection of legitimate primary Web navigation without capability leakage.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY

runtimeOwner: src/design-system/components/GlobalMobileNav.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## GLOBAL-FOOTER-01 — Global Footer

```yaml
id: GLOBAL-FOOTER-01
name: Global Footer
layer: component
domain: web
version: 0.1

job:
  - Persistent public brand signature, legitimate link groups, legal links, status/identity context, and responsive closure.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01

runtimeOwner: src/design-system/components/GlobalFooter.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## BREADCRUMB-01 — Breadcrumb

```yaml
id: BREADCRUMB-01
name: Breadcrumb
layer: component
domain: web
version: 0.1

job:
  - Hierarchical orientation where article/developer depth genuinely requires it.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: UNRESOLVED
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/Breadcrumb.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## FAQ-ITEM-01 — FAQ Item

```yaml
id: FAQ-ITEM-01
name: FAQ Item
layer: component
domain: web
version: 0.1

job:
  - One canonical question with direct answer, optional explanation, and optional deeper path.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - GS1-LEGACY
  - FAQ-LEGACY
sourceCompositions:
  - GS1-LEGACY
  - FAQ-LEGACY

runtimeOwner: src/design-system/components/FaqItem.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## FORM-FIELD-01 — Form Field

```yaml
id: FORM-FIELD-01
name: Form Field
layer: component
domain: core
version: 0.1

job:
  - Label + control + help + error composition for governed forms.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/FormField.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## CODE-BLOCK-01 — Code Block

```yaml
id: CODE-BLOCK-01
name: Code Block
layer: component
domain: core
version: 0.1

job:
  - Readable technical example container that does not imply a production API contract unless content authority says so.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY

runtimeOwner: src/design-system/components/CodeBlock.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## CALLOUT-01 — Callout / Note

```yaml
id: CALLOUT-01
name: Callout / Note
layer: component
domain: core
version: 0.1

job:
  - Bounded explanatory emphasis for editorial or technical content without becoming proof theater.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/Callout.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## STATUS-BANNER-01 — Status Banner

```yaml
id: STATUS-BANNER-01
name: Status Banner
layer: component
domain: core
version: 0.1

job:
  - Text-first status communication with optional governed icon/color.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/StatusBanner.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## ARTICLE-METADATA-01 — Article Metadata

```yaml
id: ARTICLE-METADATA-01
name: Article Metadata
layer: component
domain: web
version: 0.1

job:
  - Publication/update metadata and limited reading context for long-form editorial content.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/ArticleMetadata.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## RELATED-LINK-01 — Related Link

```yaml
id: RELATED-LINK-01
name: Related Link
layer: component
domain: web
version: 0.1

job:
  - Single related-reading/deeper-path item with restrained hierarchy.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/RelatedLink.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## EMPTY-STATE-01 — Empty State

```yaml
id: EMPTY-STATE-01
name: Empty State
layer: component
domain: core
version: 0.1

job:
  - Calm explanation of no-content state with optional legitimate next action.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: UNRESOLVED
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/EmptyState.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## ERROR-STATE-01 — Error State

```yaml
id: ERROR-STATE-01
name: Error State
layer: component
domain: core
version: 0.1

job:
  - Clear failure explanation with legitimate recovery path, distinct from product availability state.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/components/ErrorState.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```


# PART IV — L3 PATTERNS

## PATTERN-HERO-ACTION-01 — Action Hero

```yaml
id: PATTERN-HERO-ACTION-01
name: Action Hero
layer: pattern
domain: web
version: 0.1

job:
  - Establish page Job with one dominant legitimate action and optional subordinate path.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
  - STITCH-UNFICT-HOME-01
  - STITCH-UNFICT-GS1-PILLAR-01
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01
  - COMPOSITION-GS1-PILLAR-01
runtimeOwner: src/design-system/patterns/ActionHero.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-HERO-EDITORIAL-01 — Editorial Hero

```yaml
id: PATTERN-HERO-EDITORIAL-01
name: Editorial Hero
layer: pattern
domain: web
version: 0.1

job:
  - Orient a text-led informational page without requiring Human Reality photography.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - FAQ-LEGACY
sourceCompositions:
  - FAQ-LEGACY

runtimeOwner: src/design-system/patterns/EditorialHero.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-CONCEPT-FLOW-01 — Concept Flow

```yaml
id: PATTERN-CONCEPT-FLOW-01
name: Concept Flow
layer: pattern
domain: web
version: 0.1

job:
  - Explain a small ordered conceptual relationship using restrained technical diagram grammar.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
  - GS1-LEGACY
  - STITCH-UNFICT-HOME-01
  - STITCH-UNFICT-GS1-PILLAR-01
sourceCompositions:
  - HOME-LEGACY
  - GS1-LEGACY
  - COMPOSITION-HOME-01
  - COMPOSITION-GS1-PILLAR-01
runtimeOwner: src/design-system/patterns/ConceptFlow.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-DEPTH-PATHS-01 — Progressive Depth Paths

```yaml
id: PATTERN-DEPTH-PATHS-01
name: Progressive Depth Paths
layer: pattern
domain: web
version: 0.1

job:
  - Offer one or two legitimate deeper paths without competing with the primary action.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - GS1-LEGACY
sourceCompositions:
  - GS1-LEGACY
runtimeOwner: src/design-system/patterns/ProgressiveDepthPaths.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-ENTITY-RAIL-01 — Entity Orientation Rail

```yaml
id: PATTERN-ENTITY-RAIL-01
name: Entity Orientation Rail
layer: pattern
domain: web
version: 0.1

job:
  - Compactly orient the visitor to entity/status context without KPI/dashboard treatment.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - ABOUT-LEGACY
sourceCompositions:
  - ABOUT-LEGACY

runtimeOwner: src/design-system/patterns/EntityOrientationRail.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## PATTERN-FAQ-GROUP-01 — FAQ Group

```yaml
id: PATTERN-FAQ-GROUP-01
name: FAQ Group
layer: pattern
domain: web
version: 0.1

job:
  - Group canonical FAQ items around one topic while preserving direct-answer semantics.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - FAQ-LEGACY
sourceCompositions:
  - FAQ-LEGACY

runtimeOwner: src/design-system/patterns/FaqGroup.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-ARTICLE-HEADER-01 — Article Header

```yaml
id: PATTERN-ARTICLE-HEADER-01
name: Article Header
layer: pattern
domain: web
version: 0.1

job:
  - Orient the reader to article category, title, lead, and relevant metadata.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/patterns/ArticleHeader.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-RELATED-READING-01 — Related Reading

```yaml
id: PATTERN-RELATED-READING-01
name: Related Reading
layer: pattern
domain: web
version: 0.1

job:
  - Present relevant next reading without turning article closure into a marketing card grid.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/patterns/RelatedReading.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-FINAL-CTA-01 — Final CTA

```yaml
id: PATTERN-FINAL-CTA-01
name: Final CTA
layer: pattern
domain: web
version: 0.1

job:
  - Conclude a content path with one legitimate primary next action.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
  - GS1-LEGACY
  - FAQ-LEGACY
  - STITCH-UNFICT-HOME-01
  - STITCH-UNFICT-GS1-PILLAR-01
sourceCompositions:
  - HOME-LEGACY
  - GS1-LEGACY
  - FAQ-LEGACY
  - COMPOSITION-HOME-01
  - COMPOSITION-GS1-PILLAR-01
runtimeOwner: src/design-system/patterns/FinalCta.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-INTEGRATION-REASSURANCE-01 — Integration Reassurance

```yaml
id: PATTERN-INTEGRATION-REASSURANCE-01
name: Integration Reassurance
layer: pattern
domain: web
version: 0.1

job:
  - Explain integration-not-replacement and reduce switching-cost anxiety truthfully.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - ABOUT-LEGACY
sourceCompositions:
  - ABOUT-LEGACY

runtimeOwner: src/design-system/patterns/IntegrationReassurance.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## PATTERN-BRAND-SIGNATURE-01 — Brand Signature

```yaml
id: PATTERN-BRAND-SIGNATURE-01
name: Brand Signature
layer: pattern
domain: web
version: 0.1

job:
  - Create one restrained, memorable Reality Sync identity peak without decorative spectacle.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - ABOUT-LEGACY
sourceCompositions:
  - ABOUT-LEGACY

runtimeOwner: src/design-system/patterns/BrandSignature.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```


# PART V — L4 SECTIONS

## SECTION-HERO-HUMAN-01 — Human Reality Hero

```yaml
id: SECTION-HERO-HUMAN-01
name: Human Reality Hero
layer: section
domain: web
version: 0.1

job:
  - Establish page Job with live copy and one Reality-first environmental image.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
  - STITCH-UNFICT-HOME-01
  - STITCH-UNFICT-GS1-PILLAR-01
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01
  - COMPOSITION-GS1-PILLAR-01
runtimeOwner: src/design-system/sections/HumanRealityHero.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-HERO-EDITORIAL-01 — Editorial Hero Section

```yaml
id: SECTION-HERO-EDITORIAL-01
name: Editorial Hero Section
layer: section
domain: web
version: 0.1

job:
  - Text-first page orientation with no required photography.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - FAQ-LEGACY
sourceCompositions:
  - FAQ-LEGACY

runtimeOwner: src/design-system/sections/EditorialHeroSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-PROBLEM-01 — Problem Section

```yaml
id: SECTION-PROBLEM-01
name: Problem Section
layer: section
domain: web
version: 0.1

job:
  - Explain the practical problem or consequence without feature-grid inflation.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/sections/ProblemSection.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## SECTION-VALUE-LIST-01 — Value List Section

```yaml
id: SECTION-VALUE-LIST-01
name: Value List Section
layer: section
domain: web
version: 0.1

job:
  - Present a small number of legitimate value outcomes without generic SaaS cardification.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/sections/ValueListSection.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## SECTION-CONCEPTUAL-MODEL-01 — Conceptual Model Section

```yaml
id: SECTION-CONCEPTUAL-MODEL-01
name: Conceptual Model Section
layer: section
domain: web
version: 0.1

job:
  - Explain a bounded conceptual sequence using the governed Concept Flow pattern.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
  - GS1-LEGACY
  - STITCH-UNFICT-HOME-01
  - STITCH-UNFICT-GS1-PILLAR-01
sourceCompositions:
  - HOME-LEGACY
  - GS1-LEGACY
  - COMPOSITION-HOME-01
  - COMPOSITION-GS1-PILLAR-01
runtimeOwner: src/design-system/sections/ConceptualModelSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-PERSISTENCE-01 — Persistence Section

```yaml
id: SECTION-PERSISTENCE-01
name: Persistence Section
layer: section
domain: web
version: 0.1

job:
  - Explain continuity/persistence value where current content authority supports it.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - GS1-LEGACY
sourceCompositions:
  - GS1-LEGACY

runtimeOwner: src/design-system/sections/PersistenceSection.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## SECTION-INTEGRATION-REASSURANCE-01 — Integration Reassurance Section

```yaml
id: SECTION-INTEGRATION-REASSURANCE-01
name: Integration Reassurance Section
layer: section
domain: web
version: 0.1

job:
  - Communicate that Unfict integrates with systems that continue to own their Jobs.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - ABOUT-LEGACY
sourceCompositions:
  - ABOUT-LEGACY

runtimeOwner: src/design-system/sections/IntegrationReassuranceSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-BRAND-SIGNATURE-01 — Brand Signature Section

```yaml
id: SECTION-BRAND-SIGNATURE-01
name: Brand Signature Section
layer: section
domain: web
version: 0.1

job:
  - Provide a restrained Reality Sync identity peak.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - ABOUT-LEGACY
sourceCompositions:
  - ABOUT-LEGACY

runtimeOwner: src/design-system/sections/BrandSignatureSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-ENTITY-ORIENTATION-01 — Entity Orientation Section

```yaml
id: SECTION-ENTITY-ORIENTATION-01
name: Entity Orientation Section
layer: section
domain: web
version: 0.1

job:
  - Orient About/entity pages to purpose, status, and identity without dashboard semantics.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - ABOUT-LEGACY
sourceCompositions:
  - ABOUT-LEGACY

runtimeOwner: src/design-system/sections/EntityOrientationSection.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## SECTION-FAQ-SHORT-01 — Short FAQ Section

```yaml
id: SECTION-FAQ-SHORT-01
name: Short FAQ Section
layer: section
domain: web
version: 0.1

job:
  - Present a small page-specific FAQ subset using the canonical FAQ item owner.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - GS1-LEGACY
sourceCompositions:
  - GS1-LEGACY

runtimeOwner: src/design-system/sections/ShortFaqSection.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## SECTION-FAQ-CATEGORY-01 — FAQ Category Section

```yaml
id: SECTION-FAQ-CATEGORY-01
name: FAQ Category Section
layer: section
domain: web
version: 0.1

job:
  - Group canonical questions under one topic for the Answer Hub.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - LEGACY-REG
  - FAQ-LEGACY
sourceCompositions:
  - FAQ-LEGACY

runtimeOwner: src/design-system/sections/FaqCategorySection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-ARTICLE-INTRO-01 — Article Intro Section

```yaml
id: SECTION-ARTICLE-INTRO-01
name: Article Intro Section
layer: section
domain: web
version: 0.1

job:
  - Orient article context, thesis/answer, lead, and relevant metadata.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/sections/ArticleIntroSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-ARTICLE-BODY-01 — Article Body Section

```yaml
id: SECTION-ARTICLE-BODY-01
name: Article Body Section
layer: section
domain: web
version: 0.1

job:
  - Provide reading-first long-form content behavior including technical and semantic sub-elements.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/sections/ArticleBodySection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-RELATED-READING-01 — Related Reading Section

```yaml
id: SECTION-RELATED-READING-01
name: Related Reading Section
layer: section
domain: web
version: 0.1

job:
  - Close editorial content with restrained relevant next reading.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/sections/RelatedReadingSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-FINAL-CTA-01 — Final CTA Section

```yaml
id: SECTION-FINAL-CTA-01
name: Final CTA Section
layer: section
domain: web
version: 0.1

job:
  - Page-level conclusion using the governed Final CTA pattern.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
  - STITCH-UNFICT-HOME-01
  - STITCH-UNFICT-GS1-PILLAR-01
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01
  - COMPOSITION-GS1-PILLAR-01
runtimeOwner: src/design-system/sections/FinalCtaSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## SECTION-EARLY-ACCESS-FORM-01 — Early Access Form Section

```yaml
id: SECTION-EARLY-ACCESS-FORM-01
name: Early Access Form Section
layer: section
domain: web
version: 0.1

job:
  - Collect minimum necessary preview context and preserve visitor intent through success/error states.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/sections/EarlyAccessFormSection.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```


# PART VI — L5 NAVIGATION

## NAV-WEB-PRIMARY-01 — Primary Web Navigation

```yaml
id: NAV-WEB-PRIMARY-01
name: Primary Web Navigation
layer: navigation
domain: web
version: 0.1

job:
  - Expose only current legitimate public navigation scope.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - ZYUX-WEB
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01

runtimeOwner: src/design-system/navigation/NavWebPrimary.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## NAV-WEB-MOBILE-01 — Mobile Web Navigation

```yaml
id: NAV-WEB-MOBILE-01
name: Mobile Web Navigation
layer: navigation
domain: web
version: 0.1

job:
  - Provide simpler mobile access to the same legitimate public navigation scope.

semanticStatus: GOVERNED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - ZYUX-WEB
  - LEGACY-REG
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY

runtimeOwner: src/design-system/components/GlobalMobileNav.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```

## NAV-ARTICLE-TOC-01 — Article Table of Contents

```yaml
id: NAV-ARTICLE-TOC-01
name: Article Table of Contents
layer: navigation
domain: web
version: 0.1

job:
  - Provide local article navigation only when article length/structure justifies it.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: UNRESOLVED
visualEvidence: NONE

sources:
  - UIS
  - ZYUX-WEB
  - LEGACY-REG

runtimeOwner: src/design-system/components/ArticleToc.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```

## NAV-DEVELOPER-LOCAL-01 — Developer Local Navigation

```yaml
id: NAV-DEVELOPER-LOCAL-01
name: Developer Local Navigation
layer: navigation
domain: web
version: 0.1

job:
  - Provide local developer-depth navigation only if current content proves the Job.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: UNRESOLVED
visualEvidence: NONE

sources:
  - UIS
  - ZYUX-WEB
  - LEGACY-REG

runtimeOwner: src/design-system/components/DeveloperLocalNav.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: DEFERRED
```


# PART VII — L5 SHELLS

## SHELL-WEB-PUBLIC-01 — Public Web Shell

```yaml
id: SHELL-WEB-PUBLIC-01
name: Public Web Shell
layer: shell
domain: web
version: 0.1

job:
  - Provide stable public orientation through one global header, main region, and global footer.

semanticStatus: GOVERNED
visualStatus: CANDIDATE_EXTRACTED
implementationStatus: IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - LEGACY-REG
  - HOME-LEGACY
  - REPO
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01

runtimeOwner: src/design-system/shells/PublicWebShell.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  `BaseLayout.astro` exists as bootstrap infrastructure but does not yet satisfy the complete governed shell contract.
```

## SHELL-WEB-ARTICLE-01 — Article Shell

```yaml
id: SHELL-WEB-ARTICLE-01
name: Article Shell
layer: shell
domain: web
version: 0.1

job:
  - Provide reading-first global framing for Insights and other long-form editorial surfaces.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - LEGACY-REG

runtimeOwner: src/design-system/shells/ArticleShell.astro
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED
```


# PART VIII — L6 PAGE ARCHETYPES

## PAGE-ARCHETYPE-ACQUISITION — Acquisition Archetype

```yaml
id: PAGE-ARCHETYPE-ACQUISITION
name: Acquisition Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support Job → relevance → value → conceptual understanding → reassurance → legitimate next action.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/AcquisitionArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```

## PAGE-ARCHETYPE-PILLAR — Pillar Archetype

```yaml
id: PAGE-ARCHETYPE-PILLAR
name: Pillar Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support subject → conceptual model → relevance/problem → useful system behavior → optional depth → next step.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/PillarArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```

## PAGE-ARCHETYPE-ENTITY — Entity Archetype

```yaml
id: PAGE-ARCHETYPE-ENTITY
name: Entity Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support entity → purpose → role → boundaries → credibility → identity.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/EntityArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```

## PAGE-ARCHETYPE-ANSWER-HUB — Answer Hub Archetype

```yaml
id: PAGE-ARCHETYPE-ANSWER-HUB
name: Answer Hub Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support question orientation → grouped direct answers → optional depth → related paths → legitimate next action.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/AnswerHubArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```

## PAGE-ARCHETYPE-ARTICLE — Article Archetype

```yaml
id: PAGE-ARCHETYPE-ARTICLE
name: Article Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support context → answer/thesis → explanation → evidence/examples → technical depth → related reading.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/ArticleArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```

## PAGE-ARCHETYPE-CONVERSION — Conversion Archetype

```yaml
id: PAGE-ARCHETYPE-CONVERSION
name: Conversion Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support expectation → qualification/context → minimum necessary form → privacy context → success/error → continuation.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/ConversionArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```

## PAGE-ARCHETYPE-LEGAL — Legal Archetype

```yaml
id: PAGE-ARCHETYPE-LEGAL
name: Legal Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support document identity → date → readable structured sections → stable legal navigation where useful.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/LegalArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```

## PAGE-ARCHETYPE-UTILITY — Utility Archetype

```yaml
id: PAGE-ARCHETYPE-UTILITY
name: Utility Archetype
layer: archetype
domain: web
version: 0.1

job:
  - Support state → clear explanation → legitimate recovery action with minimal UI.

semanticStatus: GOVERNED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: OPERATIVE
visualEvidence: MANDATE_ONLY

sources:
  - UIS
  - ZYUX-WEB

runtimeOwner: src/design-system/archetypes/UtilityArchetype.ts
visualRegressionOwner: null
placeholderAllowed: true
engineBaseline: REQUIRED

notes: >-
  Archetype defines experience obligations, not a rigid fixed section order.
```


# PART IX — L7 MASTER COMPOSITIONS

## COMPOSITION-HOME-01 — Homepage Master Composition

```yaml
id: COMPOSITION-HOME-01
name: Homepage Master Composition
layer: composition
domain: web
version: 0.1

job:
  - Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ACQUISITION` Job as part of the Master Composition Set.

semanticStatus: PROPOSED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: VISUALLY_ACCEPTED

sources:
  - UIS
  - HOME-LEGACY
sourceCompositions:
  - HOME-LEGACY
  - COMPOSITION-HOME-01

runtimeOwner: src/pages/index.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: CREATIVE

notes: >-
  Stitch export accepted as active design evidence for governed extraction; page route remains non-replaced pending full content/responsive ratification.
```

## COMPOSITION-GS1-PILLAR-01 — GS1 Digital Link Master Composition

```yaml
id: COMPOSITION-GS1-PILLAR-01
name: GS1 Digital Link Master Composition
layer: composition
domain: web
version: 0.1

job:
  - Establish the active Unfict visual language for the `PAGE-ARCHETYPE-PILLAR` Job as part of the Master Composition Set.

semanticStatus: PROPOSED
visualStatus: REFERENCE_PAGE_ACCEPTED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: REFERENCE_PAGE_ACCEPTED

sources:
  - UIS
  - GS1-LEGACY
  - STITCH-UNFICT-GS1-PILLAR-01
sourceCompositions:
  - GS1-LEGACY
  - COMPOSITION-GS1-PILLAR-01
runtimeOwner: src/pages/gs1-digital-link.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: CREATIVE

notes: >-
  Stitch export accepted as active design evidence for governed extraction; page route remains non-replaced pending full content/responsive ratification.
```

## COMPOSITION-ABOUT-01 — About Master Composition

```yaml
id: COMPOSITION-ABOUT-01
name: About Master Composition
layer: composition
domain: web
version: 0.1

job:
  - Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ENTITY` Job as part of the Master Composition Set.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - ABOUT-LEGACY
sourceCompositions:
  - ABOUT-LEGACY

runtimeOwner: src/pages/about.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: CREATIVE

notes: >-
  Stitch export accepted as active design evidence for governed extraction; page route remains non-replaced pending full content/responsive ratification.
```

## COMPOSITION-FAQ-01 — FAQ Master Composition

```yaml
id: COMPOSITION-FAQ-01
name: FAQ Master Composition
layer: composition
domain: web
version: 0.1

job:
  - Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ANSWER-HUB` Job as part of the Master Composition Set.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS
  - FAQ-LEGACY
sourceCompositions:
  - FAQ-LEGACY

runtimeOwner: src/pages/faq.astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: CREATIVE

notes: >-
  Stitch export accepted as active design evidence for governed extraction; page route remains non-replaced pending full content/responsive ratification.
```

## COMPOSITION-ARTICLE-01 — Insight Article Master Composition

```yaml
id: COMPOSITION-ARTICLE-01
name: Insight Article Master Composition
layer: composition
domain: web
version: 0.1

job:
  - Establish the active Unfict visual language for the `PAGE-ARCHETYPE-ARTICLE` Job as part of the Master Composition Set.

semanticStatus: PROPOSED
visualStatus: UNDESIGNED
implementationStatus: NOT_IMPLEMENTED
authorityConfidence: PROVISIONAL
visualEvidence: NONE

sources:
  - UIS

runtimeOwner: src/pages/insights/[id].astro
visualRegressionOwner: null
placeholderAllowed: false
engineBaseline: CREATIVE

notes: >-
  Stitch export accepted as active design evidence for governed extraction; page route remains non-replaced pending full content/responsive ratification.
```

# PART X — CROSS-REGISTRY CONTRACTS

# 11. Public Navigation Scope

The active public navigation family is constrained by current Web authority.

Current expected primary items:

```text
GS1 Digital Link
Developers
Insights
About
Request developer preview
```

This Registry does not authorize additional public navigation items merely because an archetype, icon, or component exists.

---

# 12. Article Subsystem Dependencies

The Article system may eventually extract additional governed owners such as:

```text
ARTICLE-EYEBROW-01
ARTICLE-LEAD-01
ARTICLE-FIGURE-01
ARTICLE-CAPTION-01
ARTICLE-DEFINITION-01
ARTICLE-QUOTE-01
ARTICLE-TABLE-01
ARTICLE-ORDERED-PROCESS-01
ARTICLE-PREV-NEXT-01
```

These are **not registered in v0.1** as independent governed owners.

They should be extracted from `COMPOSITION-ARTICLE-01` only when the Master Composition proves that independent ownership improves reuse.

This prevents premature componentization.

---

# 13. Foundation Extraction Rule

The following remain intentionally unresolved until accepted Master Composition evidence exists:

```text
exact type scale
exact spacing scale
exact content widths
exact grid gutters
exact section rhythm
exact responsive density
exact image aspect/crop families
exact breakpoint token mapping
```

The engine MAY establish placeholder variables or semantic token names where needed.

It SHALL NOT freeze arbitrary final values.

---

# 14. Runtime Placeholder Policy

A governed owner with:

```text
placeholderAllowed: true
```

may receive a neutral runtime placeholder under `UNFICT-WEB-INTERFACE-ENGINE-IMPL-01`.

Placeholder visual treatment should normally use:

- inherited typography;
- document flow;
- neutral structural boundaries where useful for debugging;
- no decorative Blue;
- no final image treatment;
- no unapproved radius language;
- no decorative motion;
- no page-specific styling dialect.

The Registry status must then be updated:

```text
implementationStatus:
NOT_IMPLEMENTED
→ PLACEHOLDER
```

without changing `visualStatus`.

---

# 15. Design Binding Policy

When an approved visual extraction is bound to an existing owner:

```text
visualStatus:
REFERENCE_PAGE_ACCEPTED / CANDIDATE_EXTRACTED
→ APPROVED
→ FROZEN when regression-protected

implementationStatus:
PLACEHOLDER
→ IMPLEMENTED
→ VERIFIED
```

The preferred change does not alter the consumer's semantic API.

If the approved design proves the prior semantic contract itself was wrong, the mismatch must be explicitly reviewed rather than hidden inside styling changes.

---

# 16. Visual Regression Ownership

`visualRegressionOwner` is initially `null` for all records in v0.1.

It SHALL be populated when:

- an owner has an approved visual reference;
- deterministic rendering exists;
- an implementation can be compared meaningfully against the accepted source.

Reference renders SHOULD cover, where relevant:

```text
desktop
tablet
mobile
interactive states
alternate/dark surface only where authorized
```

---

# 17. Pattern Gap Integration

When the creative or engineering track discovers a missing Job:

```text
PATTERN-GAP
```

must be recorded before adding a new Registry owner.

The gap disposition may be:

```text
A. reuse existing owner
B. approve variant
C. create new owner
D. composition-specific exception
E. reject
```

Only disposition C creates a new Registry entry.

---

# 18. Variant Registration Rule

A visual variation SHALL NOT automatically create a new Registry owner.

Create a variant only when:

- the underlying Job differs materially; or
- a stable recurring use has been proven by accepted compositions.

Aesthetic variety is not sufficient reason.

---

# 19. Design-System Harness Projection

A future internal development harness SHOULD read or reflect this Registry and show:

```text
owner ID
layer
semantic status
visual status
implementation status
source evidence
runtime owner
placeholder state
responsive states
accessibility states
approved reference when available
```

The harness is an inspection / QA surface.

It is not a blank-canvas design authority.

---

# 20. Repository Evidence at Registry Draft Time

Current `Unfict/Unfict-web` evidence establishes:

```text
Astro static-first bootstrap exists
src/design-system/ exists
BaseLayout.astro exists
route shells exist
tokens.css exists
base.css exists
CI exists
bootstrap tests exist
dependency-policy tests exist
```

The repository does **not yet** contain the governed interface-engine owner library defined by this Registry.

Therefore most owner records correctly remain:

```text
implementationStatus: NOT_IMPLEMENTED
```

The separate icon runtime workstream is outside this Registry except where interface owners consume the governed `UfIcon` gateway.

---

# 21. Engine Baseline Set

Records marked:

```text
engineBaseline: REQUIRED
```

form the initial semantic coverage target for `UNFICT-WEB-INTERFACE-ENGINE-IMPL-01`.

Records marked:

```text
engineBaseline: DEFERRED
```

shall not be implemented merely for completeness.

Records marked:

```text
engineBaseline: CREATIVE
```

belong primarily to the Master Composition workstream.

This prevents the engine from manufacturing future UI simply because the Registry can name it.

---

# 22. Master Composition Gate

No reusable visual owner should be promoted to:

```text
visualStatus: APPROVED
```

solely from isolated component design.

Approval should ordinarily be supported by:

- accepted whole-page composition evidence;
- extraction from that evidence;
- reconstruction of the source composition;
- visual-equivalence review.

Global Brand-locked foundations are the principal exception because their authority exists upstream of page composition.

---

# 23. Initial Registry Summary

This v0.1 Registry contains:

```text
12 foundation owners
12 primitive owners
13 component owners
11 pattern owners
16 section owners
4 navigation owners
2 shell owners
8 archetype owners
5 Master Composition records
--------------------------------
83 total records
```

The count is an inventory count, not an implementation mandate.

---

# 24. Immediate Next Uses

After Chair/Council review, this Registry is intended to support two parallel actions:

```text
CREATIVE
Design the Master Composition Set
starting with COMPOSITION-HOME-01
while preserving family accumulation.

ENGINE
Issue UNFICT-WEB-INTERFACE-ENGINE-IMPL-01
to establish registry runtime, neutral placeholders,
system harness, validation, accessibility foundations,
and tests for REQUIRED owners.
```

The tracks converge through Registry status updates.

---

# 25. Registry Update Receipt

Any change to this Registry SHOULD record:

```text
owner added / changed / deprecated
reason
authority source
semantic status change
visual status change
implementation status change
runtime owner change
source-composition change
visual-regression impact
migration impact
```

Silent status promotion is prohibited.

---

# 26. Current Draft Disposition

`UNFICT-WEB-INTERFACE-REGISTRY-001 v0.1` is a draft companion inventory.

It establishes:

- the three-axis status model in operational form;
- initial stable owner identities;
- engine eligibility;
- placeholder eligibility;
- target runtime ownership;
- source/evidence relationships;
- the Master Composition records;
- the initial engine baseline;
- explicit deferred owners;
- the bridge between Creative and Engine tracks.

It does **not** claim that unresolved visual owners are approved.

It does **not** claim that target runtime files already exist.

It does **not** authorize capabilities or public navigation beyond current upstream authority.

---

# 27. Canonical Working Statement

> **The Interface System defines the rules. The Interface Registry defines what exists, what is proposed, what is visually known, what is implemented, and what may happen next.**

> **A governed owner may exist before its final design. A final design may exist before it is implemented. The Registry keeps those states distinct.**

> **Design evidence moves downward into reusable owners. Runtime ownership builds upward into compositions. Both meet here.**

---

**End of `UNFICT-WEB-INTERFACE-REGISTRY-001 v0.1`**
