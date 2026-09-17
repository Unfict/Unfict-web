# ZYPPI-DESIGN-SYSTEM-REGISTRY-001
# Zyppi Reusable Design-System Inventory

**Version:** 0.1  
**Status:** DRAFT — INITIAL SEED REGISTRY / FOR COUNCIL REVIEW  
**Date:** 8 September 2026  
**Registry Authority:** `ZYPPI-DESIGN-SYSTEM-001 v0.1`  
**Issued By:** Chair, Zyppi Constitutional Council  
**Scope:** Initial Web design-system inventory plus shared CORE foundations  
**Applies To:** Stitch · Jules · Figma workflows · future authorized design/implementation agents  
**Repository Implementation Status:** NOT YET RECONCILED  
**Web Design-System Freeze:** NOT REACHED  
**Iconography Integration:** HELD / NOT RATIFIED  
**Purpose:** Define what reusable design-system assets currently exist, their status, source, permitted use, and readiness  

---

# 0. Registry Purpose

`ZYPPI-DESIGN-SYSTEM-001` defines the governance rules.

This Registry answers:

> **What reusable design-system assets exist now, what state are they in, and what may an agent legitimately do with them?**

It is the machine-oriented inventory for:

- foundations;
- tokens;
- primitives;
- components;
- patterns;
- sections;
- shells;
- navigation systems;
- archetypes;
- candidate one-off extractions.

This Registry SHALL prevent agents from confusing:

```text
DOCUMENTED
with
APPROVED

MANDATED
with
VISUALLY ACCEPTED

VISUALLY ACCEPTED
with
IMPLEMENTED

IMPLEMENTED
with
GOVERNED OWNER
```

---

# 1. Registry Status Model

Every registry item SHALL carry four independent status dimensions.

---

## 1.1 Registry Status

Allowed values:

```text
EXPERIMENTAL
PROPOSED
CANDIDATE
APPROVED
DEPRECATED
RETIRED
```

Definitions:

### EXPERIMENTAL

Exploration only. Not available for governed production composition.

### PROPOSED

A Job/pattern has been defined by authority or mandate but does not yet have sufficient visual evidence.

### CANDIDATE

A reusable owner has credible visual evidence and is suitable for extraction/review, but is not yet formally frozen.

### APPROVED

Reusable owner has been accepted for governed use.

### DEPRECATED

Still present for migration only.

### RETIRED

Must not be used.

---

## 1.2 Design Evidence

Allowed values:

```text
NONE
MANDATE_ONLY
VISUAL_EXPLORATION
VISUALLY_ACCEPTED
REFERENCE_PAGE_ACCEPTED
```

Definitions:

- `NONE` — no design exists.
- `MANDATE_ONLY` — textual design contract exists but final visual output has not been accepted.
- `VISUAL_EXPLORATION` — visual output exists but has not been accepted.
- `VISUALLY_ACCEPTED` — design direction/component appearance has been accepted by Chair/Council.
- `REFERENCE_PAGE_ACCEPTED` — an accepted page is sufficient source evidence for extraction of the pattern.

---

## 1.3 Implementation Readiness

Allowed values:

```text
NOT_READY
READY_FOR_EXTRACTION
READY_FOR_DESIGN_FREEZE
READY_FOR_REPO_RECON
READY_FOR_IMPLEMENTATION
IMPLEMENTED
```

Current v0.1 expectation:

> No item is `READY_FOR_IMPLEMENTATION` until repository reconnaissance determines repository-native ownership, architecture, existing components, styling system, test strategy, and build constraints.

---

## 1.4 Authority Confidence

Allowed values:

```text
LOCKED
OPERATIVE
PROVISIONAL
UNRESOLVED
```

Meaning:

- `LOCKED` — exact authority value is known and must not drift.
- `OPERATIVE` — currently governing project behavior but broader ratification may still be pending.
- `PROVISIONAL` — reasonable candidate requiring extraction/freeze.
- `UNRESOLVED` — do not infer.

---

# 2. Agent Decision Rule

Before using any registry item:

```text
IF status = APPROVED
    use according to contract

IF status = CANDIDATE
    design agents may compose for review
    implementation agents require explicit mandate

IF status = PROPOSED
    do not treat appearance as settled

IF status = EXPERIMENTAL
    exploration only

IF no item matches
    create PATTERN-GAP
```

Jules SHALL NOT treat `PROPOSED` or `CANDIDATE` as implementation authority unless a mandate explicitly promotes or authorizes that use.

---

# 3. Registry Summary — v0.1

```text
CORE FOUNDATIONS
- Color                         6 locked raw values
- Typography                    2 operative families
- Border                        1 operative default
- Radius                        provisional restrained family
- Elevation                     operative no-decorative-shadow rule
- Breakpoint proof set          operative design proof
- Spacing                       unresolved exact token mapping
- Content widths                proposed semantic categories
- Motion                        operative doctrine
- Focus                         operative doctrine

CORE PRIMITIVES
- Button Primary                candidate
- Button Secondary              candidate
- Text Link                     candidate
- Heading/Text system           candidate extraction
- Form primitives               proposed
- Disclosure trigger            proposed
- Code treatment                candidate

WEB COMPONENTS
- Global Header                 strong candidate
- Global Mobile Nav             candidate / needs state extraction
- Global Footer                 strong candidate
- FAQ Item                      proposed
- Code Block                    candidate
- Form Field                    proposed
- Breadcrumb                    proposed / not yet designed

WEB PATTERNS
- Human Reality Hero            strong candidate
- Editorial Hero                proposed
- Concept Flow                  candidate
- Progressive Depth Paths       proposed
- Entity Rail                   proposed
- FAQ Group                     proposed
- Final CTA                     candidate
- Integration Reassurance       proposed
- Brand Signature               proposed

WEB SECTIONS
- Human Hero                    candidate
- Editorial Hero                proposed
- Conceptual Model              candidate
- Entity Orientation            proposed
- FAQ Category                  proposed
- Brand Signature               proposed
- Integration Reassurance       proposed
- Final CTA                     candidate
- Article Body                  not yet designed
- Early Access Form             not yet designed

SHELLS
- Public Web Shell              candidate
- Article Shell                 proposed / not yet designed

ARCHETYPES
- Acquisition                   candidate from homepage
- Pillar                        proposed from S2A REV-A
- Entity                        proposed from S2B
- Answer Hub                    proposed from S2C
- Article                       proposed
- Conversion                    proposed
- Legal                         proposed
- Utility                       proposed
```

---

# 4. Source Authority Codes

The Registry uses short source codes.

```text
BRAND
BRAND-001 v2.1

ZYUX-WEB
ZYPPI-WEB-ZYUX-PROJECTION-001 v0.2

IMG
ZYPPI-WEB-IMAGE-PLACEMENT-001 v0.1

WEB-CONTENT
ZYPPI-WEB-PRELAUNCH-001 v0.2

HOME-S1
STITCH-MANDATE-S1 v1.0

HOME-C01
STITCH-S1-CORRECTION-01 v1.0

GS1-S2A
STITCH-S2A-REV-A v1.0

ABOUT-S2B
STITCH-S2B v1.0

FAQ-S2C
STITCH-S2C v1.0

ICON
ZYPPI-ICONOGRAPHY-001 v0.1 — HELD

DS
ZYPPI-DESIGN-SYSTEM-001 v0.1
```

---

# PART I — CORE FOUNDATIONS

# 5. COLOR-RAW-WHITE

```yaml
id: COLOR-RAW-WHITE
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "#FFFFFF"
source:
  - BRAND
semantic_roles_candidate:
  - surface-primary
prohibited:
  - local replacement with near-white variants
```

---

# 6. COLOR-RAW-INSTITUTIONAL-GRAY

```yaml
id: COLOR-RAW-INSTITUTIONAL-GRAY
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "#F6F7F9"
source:
  - BRAND
semantic_roles_candidate:
  - surface-secondary
```

---

# 7. COLOR-RAW-DEEP-INK

```yaml
id: COLOR-RAW-DEEP-INK
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "#0A0D14"
source:
  - BRAND
semantic_roles_candidate:
  - text-primary
  - icon-default
```

---

# 8. COLOR-RAW-SLATE

```yaml
id: COLOR-RAW-SLATE
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "#596273"
source:
  - BRAND
semantic_roles_candidate:
  - text-secondary
  - metadata
```

---

# 9. COLOR-RAW-BORDER-GRAY

```yaml
id: COLOR-RAW-BORDER-GRAY
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "#DDE1E7"
source:
  - BRAND
semantic_roles_candidate:
  - border-default
  - diagram-connector-muted
```

---

# 10. COLOR-RAW-ZYPPI-BLUE

```yaml
id: COLOR-RAW-ZYPPI-BLUE
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "#1965EC"
source:
  - BRAND
semantic_roles_candidate:
  - accent
  - primary-action
  - active-path
rules:
  brand_ratio: "2–8% typical visible composition"
prohibited:
  - arbitrary blue variants
  - blue as decorative wallpaper
```

---

# 11. COLOR-SEMANTIC-TOKENS

```yaml
id: COLOR-SEMANTIC-TOKENS
layer: foundation
domain: core
registry_status: PROPOSED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
proposed_tokens:
  - surface-primary
  - surface-secondary
  - text-primary
  - text-secondary
  - border-default
  - accent
  - action-primary
  - focus
source:
  - BRAND
  - DS
note: >
  Raw values are locked. Exact semantic-token names and aliases
  require repository-aware extraction before implementation freeze.
```

---

# 12. TYPE-FAMILY-SANS

```yaml
id: TYPE-FAMILY-SANS
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "IBM Plex Sans"
source:
  - BRAND
usage:
  - body
  - headings
  - navigation
  - actions
```

---

# 13. TYPE-FAMILY-MONO

```yaml
id: TYPE-FAMILY-MONO
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: LOCKED
value: "IBM Plex Mono"
source:
  - BRAND
usage:
  - code
  - URI
  - technical labels
  - compact metadata
prohibited:
  - default body copy
```

---

# 14. TYPE-SEMANTIC-SCALE

```yaml
id: TYPE-SEMANTIC-SCALE
layer: foundation
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
candidate_styles:
  - DISPLAY-01
  - H1-01
  - H2-01
  - H3-01
  - BODY-L
  - BODY-M
  - BODY-S
  - LABEL-M
  - LABEL-S
  - MONO-M
  - MONO-S
  - CAPTION
source:
  - HOME-C01
  - DS
note: >
  Names are governed candidates; exact font-size, line-height, letter-spacing,
  and weight must be extracted from accepted visual evidence.
```

---

# 15. BORDER-DEFAULT-01

```yaml
id: BORDER-DEFAULT-01
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
width: "1px"
color: COLOR-RAW-BORDER-GRAY
source:
  - BRAND
```

---

# 16. RADIUS-SYSTEM-01

```yaml
id: RADIUS-SYSTEM-01
layer: foundation
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
range: "0–4px"
source:
  - BRAND
rules:
  - restrained
  - no pill-heavy default UI
  - no large SaaS-card rounding
note: >
  Exact token values require extraction.
```

---

# 17. ELEVATION-BASE-01

```yaml
id: ELEVATION-BASE-01
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
default: "none"
source:
  - BRAND
allowed_when:
  - overlay hierarchy
  - menu/popover
  - functional stacking
prohibited:
  - decorative card shadow
```

---

# 18. BREAKPOINT-PROOF-01

```yaml
id: BREAKPOINT-PROOF-01
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
design_proofs:
  mandatory:
    - 1440
    - 390
  validate:
    - 1280
    - 768
    - 360
  minimum_viable:
    - 320
source:
  - HOME-S1
  - HOME-C01
  - GS1-S2A
  - ABOUT-S2B
  - FAQ-S2C
note: >
  These are proof widths, not yet repository CSS breakpoint tokens.
```

---

# 19. GRID-WEB-12-01

```yaml
id: GRID-WEB-12-01
layer: foundation
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
columns_desktop: 12
source:
  - BRAND
  - HOME-C01
rules:
  - structural whitespace
  - responsive collapse by component Job
```

---

# 20. SPACING-SCALE-01

```yaml
id: SPACING-SCALE-01
layer: foundation
domain: core
registry_status: PROPOSED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: UNRESOLVED
candidate_steps:
  - SPACE-0
  - SPACE-1
  - SPACE-2
  - SPACE-3
  - SPACE-4
  - SPACE-5
  - SPACE-6
  - SPACE-8
  - SPACE-10
  - SPACE-12
  - SPACE-16
  - SPACE-20
  - SPACE-24
  - SPACE-32
source:
  - DS
blocker: >
  Exact rem/px mapping has not been extracted from accepted Figma evidence.
```

---

# 21. CONTENT-WIDTH-SYSTEM-01

```yaml
id: CONTENT-WIDTH-SYSTEM-01
layer: foundation
domain: core
registry_status: PROPOSED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
roles:
  - CONTENT-READING
  - CONTENT-STANDARD
  - CONTENT-WIDE
  - CONTENT-FULL
source:
  - DS
```

---

# 22. FOCUS-SYSTEM-01

```yaml
id: FOCUS-SYSTEM-01
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
requirements:
  - visible
  - high contrast
  - independent of hover
  - WCAG 2.2 AA direction
source:
  - BRAND
  - ZYUX-WEB
```

---

# 23. MOTION-DOCTRINE-01

```yaml
id: MOTION-DOCTRINE-01
layer: foundation
domain: core
registry_status: APPROVED
design_evidence: MANDATE_ONLY
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
allowed_jobs:
  - state
  - relation
  - progression
  - route
  - loading
  - disclosure
requirements:
  - reduced-motion compatible
prohibited:
  - decorative spectacle
source:
  - BRAND
  - ZYUX-WEB
  - DS
```

---

# PART II — CORE PRIMITIVES

# 24. BUTTON-PRIMARY

```yaml
id: BUTTON-PRIMARY
layer: primitive
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
purpose:
  - highest-priority legitimate action in current decision context
source:
  - HOME-C01
allowed_surfaces:
  - web
  - future app where semantically appropriate
states_required:
  - default
  - hover
  - focus
  - disabled
prohibited:
  - multiple equal primary actions in one decision context
  - page-specific blue variants
```

---

# 25. BUTTON-SECONDARY

```yaml
id: BUTTON-SECONDARY
layer: primitive
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
source:
  - HOME-C01
note: >
  Exact visual treatment requires extraction.
  Public Web often prefers text links over secondary buttons.
```

---

# 26. TEXT-LINK-01

```yaml
id: TEXT-LINK-01
layer: primitive
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
purpose:
  - progressive depth
  - related reading
  - secondary navigation
source:
  - HOME-C01
  - GS1-S2A
```

---

# 27. TEXT-SYSTEM-01

```yaml
id: TEXT-SYSTEM-01
layer: primitive
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
includes:
  - heading
  - body
  - label
  - caption
  - mono-label
source:
  - HOME-C01
```

---

# 28. INPUT-TEXT-01

```yaml
id: INPUT-TEXT-01
layer: primitive
domain: core
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
required_future_states:
  - default
  - focus
  - error
  - disabled
  - autofill
source:
  - DS
future_source:
  - Early Access design
```

---

# 29. TEXTAREA-01

```yaml
id: TEXTAREA-01
layer: primitive
domain: core
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
```

---

# 30. CHECKBOX-01

```yaml
id: CHECKBOX-01
layer: primitive
domain: core
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
```

---

# 31. DISCLOSURE-TRIGGER-01

```yaml
id: DISCLOSURE-TRIGGER-01
layer: primitive
domain: core
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - FAQ-S2C
requirements:
  - keyboard operable
  - clear focus
  - programmatically determinable state
```

---

# 32. CODE-INLINE-01

```yaml
id: CODE-INLINE-01
layer: primitive
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
font: TYPE-FAMILY-MONO
source:
  - HOME-C01
```

---

# PART III — COMPONENTS

# 33. GLOBAL-HEADER-01

```yaml
id: GLOBAL-HEADER-01
layer: component
domain: web
registry_status: CANDIDATE
design_evidence: VISUALLY_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
purpose:
  - public global navigation
source:
  - HOME-C01
required_slots:
  - canonical_logo
  - primary_navigation
  - primary_cta
allowed_navigation:
  - GS1 Digital Link
  - Developers
  - Insights
  - About
current_primary_cta:
  - Request developer preview
responsive:
  desktop: accepted visual parent
  mobile: needs explicit component-state extraction
prohibited:
  - future capability menu
  - deep platform menu
  - alternate page-specific header
```

---

# 34. GLOBAL-MOBILE-NAV-01

```yaml
id: GLOBAL-MOBILE-NAV-01
layer: component
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
source:
  - HOME-C01
requirements:
  - same legitimate navigation scope as desktop
  - keyboard/focus accessibility
  - no hidden capability leakage
blocker:
  - exact open/close state design should be captured in design-system extraction
```

---

# 35. GLOBAL-FOOTER-01

```yaml
id: GLOBAL-FOOTER-01
layer: component
domain: web
registry_status: CANDIDATE
design_evidence: VISUALLY_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
semantic_content:
  brand: "Zyppi — Reality Sync"
  status: "Private preview in development."
  independence: "Zyppi is not GS1."
content_groups_candidate:
  - Infrastructure
  - Company
  - Legal
prohibited:
  - page-specific footer variants
  - unsupported GS1 affiliation
```

---

# 36. FAQ-ITEM-01

```yaml
id: FAQ-ITEM-01
layer: component
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - GS1-S2A
  - FAQ-S2C
purpose:
  - canonical question/answer disclosure
slots:
  question:
    required: true
  direct_answer:
    required: true
  explanation:
    required: false
  deeper_link:
    required: false
behavior:
  disclosure_allowed: true
  answer_must_remain_semantic: true
accessibility:
  keyboard_required: true
  focus_required: true
  machine_readable_question_answer: true
prohibited:
  - gated answer
  - conversion-first treatment
  - keyword-stuffed duplicate question
```

---

# 37. CODE-BLOCK-01

```yaml
id: CODE-BLOCK-01
layer: component
domain: core
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
source:
  - HOME-C01
note: >
  Component exists visually in the accepted design system,
  but homepage public composition must not invent API contracts.
allowed_surfaces:
  - developers
  - docs
  - design-system reference
```

---

# 38. FORM-FIELD-01

```yaml
id: FORM-FIELD-01
layer: component
domain: core
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
future_source:
  - Early Access
required_parts:
  - label
  - control
  - optional_help
  - error
```

---

# 39. BREADCRUMB-01

```yaml
id: BREADCRUMB-01
layer: component
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
expected_surfaces:
  - article
  - developer depth if needed
source:
  - DS
```

---

# 40. ARTICLE-METADATA-01

```yaml
id: ARTICLE-METADATA-01
layer: component
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
expected_slots:
  - publish_or_updated_date
  - optional_reading_metadata
source:
  - DS
```

---

# PART IV — PATTERNS

# 41. PATTERN-HERO-ACTION-01

```yaml
id: PATTERN-HERO-ACTION-01
layer: pattern
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
purpose:
  - establish page Job with one primary action
slots:
  - H1
  - body
  - primary_action
optional:
  - secondary_text_link
rules:
  primary_actions_max: 1
```

---

# 42. PATTERN-HERO-EDITORIAL-01

```yaml
id: PATTERN-HERO-EDITORIAL-01
layer: pattern
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - FAQ-S2C
  - DS
purpose:
  - text-led orientation without Human Reality image
```

---

# 43. PATTERN-CONCEPT-FLOW-01

```yaml
id: PATTERN-CONCEPT-FLOW-01
layer: pattern
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
  - GS1-S2A
purpose:
  - explain ordered conceptual relationship
visual_rules:
  - flat
  - Deep Ink labels
  - Border Gray connectors
  - restrained Zyppi Blue
  - no 3D
  - no network-web decoration
responsive:
  mobile: verticalize when needed
```

---

# 44. PATTERN-DEPTH-PATHS-01

```yaml
id: PATTERN-DEPTH-PATHS-01
layer: pattern
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - GS1-S2A
purpose:
  - provide legitimate optional deeper paths
rules:
  - low-emphasis
  - text-link-oriented
  - shall not compete with primary CTA
prohibited:
  - oversized SaaS feature cards
```

---

# 45. PATTERN-ENTITY-RAIL-01

```yaml
id: PATTERN-ENTITY-RAIL-01
layer: pattern
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
purpose:
  - compact entity orientation
candidate_fields:
  - Brand
  - Current Entry
  - Status
prohibited:
  - KPI dashboard treatment
  - proof badges
```

---

# 46. PATTERN-FAQ-GROUP-01

```yaml
id: PATTERN-FAQ-GROUP-01
layer: pattern
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - FAQ-S2C
purpose:
  - group canonical questions around one topic
requires:
  - FAQ-ITEM-01
```

---

# 47. PATTERN-FINAL-CTA-01

```yaml
id: PATTERN-FINAL-CTA-01
layer: pattern
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
  - GS1-S2A
  - FAQ-S2C
purpose:
  - conclude page with one legitimate primary next action
slots:
  - heading
  - body
  - primary_action
  - optional_microcopy
rules:
  primary_actions_max: 1
```

---

# 48. PATTERN-INTEGRATION-REASSURANCE-01

```yaml
id: PATTERN-INTEGRATION-REASSURANCE-01
layer: pattern
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
purpose:
  - communicate integration-not-replacement
behavioral_job:
  - reduce switching-cost anxiety truthfully
prohibited:
  - competitor logos
  - red X comparisons
  - migration implication
```

---

# 49. PATTERN-BRAND-SIGNATURE-01

```yaml
id: PATTERN-BRAND-SIGNATURE-01
layer: pattern
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
purpose:
  - create one memorable Reality Sync visual peak
rules:
  - large whitespace
  - restrained Blue
  - no sci-fi architecture
```

---

# PART V — SECTION TEMPLATES

# 50. SECTION-HERO-HUMAN-01

```yaml
id: SECTION-HERO-HUMAN-01
layer: section
domain: web
registry_status: CANDIDATE
design_evidence: VISUALLY_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
  - IMG
purpose:
  - establish page Job using live copy plus Human Reality image
slots:
  H1:
    required: true
  body:
    required: true
  image:
    required: true
  eyebrow:
    required: false
  primary_action:
    required: false
  secondary_link:
    required: false
limits:
  primary_action_max: 1
  secondary_link_max: 1
photography:
  full_bleed_or_environmental: true
  framed: false
  decorative_shadow: false
  metadata_strip: false
responsive:
  desktop: accepted visual parent
  mobile:
    - text_then_image
    - accessible_overlay_if_contrast_proven
accessibility:
  H1_live_text: true
  image_nonessential_to_factual_understanding: true
```

---

# 51. SECTION-HERO-EDITORIAL-01

```yaml
id: SECTION-HERO-EDITORIAL-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - FAQ-S2C
purpose:
  - text-first page orientation
photography:
  default: none
```

---

# 52. SECTION-CONCEPTUAL-MODEL-01

```yaml
id: SECTION-CONCEPTUAL-MODEL-01
layer: section
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
  - GS1-S2A
requires:
  - PATTERN-CONCEPT-FLOW-01
purpose:
  - explain a small conceptual sequence
rules:
  - text semantics remain primary
  - diagram does not expose internal architecture
```

---

# 53. SECTION-ENTITY-ORIENTATION-01

```yaml
id: SECTION-ENTITY-ORIENTATION-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
requires:
  - PATTERN-ENTITY-RAIL-01
```

---

# 54. SECTION-INTEGRATION-REASSURANCE-01

```yaml
id: SECTION-INTEGRATION-REASSURANCE-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
requires:
  - PATTERN-INTEGRATION-REASSURANCE-01
```

---

# 55. SECTION-BRAND-SIGNATURE-01

```yaml
id: SECTION-BRAND-SIGNATURE-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
requires:
  - PATTERN-BRAND-SIGNATURE-01
canonical_signature:
  - "Zyppi — Reality Sync"
```

---

# 56. SECTION-FAQ-SHORT-01

```yaml
id: SECTION-FAQ-SHORT-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - GS1-S2A
purpose:
  - small page-specific FAQ subset
requires:
  - FAQ-ITEM-01
question_range:
  min: 2
  max: 5
```

---

# 57. SECTION-FAQ-CATEGORY-01

```yaml
id: SECTION-FAQ-CATEGORY-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - FAQ-S2C
purpose:
  - group canonical FAQ answers by one topic
slots:
  category:
    required: true
  introduction:
    required: false
  questions:
    min: 2
    max: 8
requires:
  - FAQ-ITEM-01
prohibited:
  - photography
  - marketing-card-grid
  - primary CTA
```

---

# 58. SECTION-FINAL-CTA-01

```yaml
id: SECTION-FINAL-CTA-01
layer: section
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
requires:
  - PATTERN-FINAL-CTA-01
```

---

# 59. SECTION-ARTICLE-INTRO-01

```yaml
id: SECTION-ARTICLE-INTRO-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
future_source:
  - Resolver Insight design
```

---

# 60. SECTION-ARTICLE-BODY-01

```yaml
id: SECTION-ARTICLE-BODY-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
```

---

# 61. SECTION-RELATED-READING-01

```yaml
id: SECTION-RELATED-READING-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
```

---

# 62. SECTION-EARLY-ACCESS-FORM-01

```yaml
id: SECTION-EARLY-ACCESS-FORM-01
layer: section
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
future_source:
  - Early Access design
```

---

# PART VI — NAVIGATION & SHELLS

# 63. NAV-WEB-PRIMARY-01

```yaml
id: NAV-WEB-PRIMARY-01
layer: navigation
domain: web
registry_status: CANDIDATE
design_evidence: VISUALLY_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
current_items:
  - GS1 Digital Link
  - Developers
  - Insights
  - About
rules:
  - GTM scope only
  - no deep architecture
  - no future capability leakage
```

---

# 64. NAV-WEB-MOBILE-01

```yaml
id: NAV-WEB-MOBILE-01
layer: navigation
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: PROVISIONAL
source:
  - HOME-C01
rules:
  - same semantic scope as NAV-WEB-PRIMARY-01
  - mobile composition may differ
```

---

# 65. NAV-ARTICLE-TOC-01

```yaml
id: NAV-ARTICLE-TOC-01
layer: navigation
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
```

---

# 66. NAV-DEVELOPER-LOCAL-01

```yaml
id: NAV-DEVELOPER-LOCAL-01
layer: navigation
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
future_source:
  - Developers design
```

---

# 67. SHELL-WEB-PUBLIC-01

```yaml
id: SHELL-WEB-PUBLIC-01
layer: shell
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
composition:
  - GLOBAL-HEADER-01
  - MAIN
  - GLOBAL-FOOTER-01
allowed_surfaces:
  - homepage
  - gs1-digital-link
  - developers
  - insights
  - about
  - faq
  - early-access
  - privacy
  - terms
  - 404
```

---

# 68. SHELL-WEB-ARTICLE-01

```yaml
id: SHELL-WEB-ARTICLE-01
layer: shell
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
candidate_structure:
  - GLOBAL-HEADER-01
  - ARTICLE_HEADER
  - READING_COLUMN
  - OPTIONAL_ARTICLE_NAV
  - RELATED_READING
  - GLOBAL-FOOTER-01
```

---

# PART VII — PAGE ARCHETYPES

# 69. PAGE-ARCHETYPE-ACQUISITION

```yaml
id: PAGE-ARCHETYPE-ACQUISITION
layer: archetype
domain: web
registry_status: CANDIDATE
design_evidence: VISUALLY_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - HOME-C01
purpose:
  - acquisition / current market-entry proposition
source_route:
  - "/"
```

---

# 70. PAGE-ARCHETYPE-PILLAR

```yaml
id: PAGE-ARCHETYPE-PILLAR
layer: archetype
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - GS1-S2A
candidate_structure:
  - Hero
  - Orientation
  - Conceptual Model
  - Core Explanation
  - Boundary
  - Progressive Depth
  - Short FAQ
  - CTA
source_route:
  - "/gs1-digital-link"
```

---

# 71. PAGE-ARCHETYPE-ENTITY

```yaml
id: PAGE-ARCHETYPE-ENTITY
layer: archetype
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
candidate_structure:
  - Human Hero
  - Entity Orientation
  - Purpose
  - Conceptual Model
  - Market Entry Rationale
  - Integration Boundary
  - Brand Signature
  - Progressive Discovery
  - Organizational CTA
source_route:
  - "/about"
```

---

# 72. PAGE-ARCHETYPE-ANSWER-HUB

```yaml
id: PAGE-ARCHETYPE-ANSWER-HUB
layer: archetype
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - FAQ-S2C
candidate_structure:
  - Editorial Hero
  - Quick Answer Index
  - Question Categories
  - Progressive Discovery
  - Final CTA
source_route:
  - "/faq"
```

---

# 73. PAGE-ARCHETYPE-ARTICLE

```yaml
id: PAGE-ARCHETYPE-ARTICLE
layer: archetype
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
candidate_structure:
  - Article Hero
  - Metadata
  - Lead
  - Body
  - Figures
  - Sources
  - Related Reading
  - CTA
```

---

# 74. PAGE-ARCHETYPE-CONVERSION

```yaml
id: PAGE-ARCHETYPE-CONVERSION
layer: archetype
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - DS
candidate_structure:
  - Focused Hero
  - Expectation Setting
  - Form
  - Privacy / Consent Context
  - Success State
  - Error State
source_route:
  - "/early-access"
```

---

# 75. PAGE-ARCHETYPE-LEGAL

```yaml
id: PAGE-ARCHETYPE-LEGAL
layer: archetype
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - DS
candidate_structure:
  - Minimal Header
  - Legal Title
  - Updated Date
  - Reading Column
  - Anchored Sections
  - Footer
source_routes:
  - "/privacy"
  - "/terms"
```

---

# 76. PAGE-ARCHETYPE-UTILITY

```yaml
id: PAGE-ARCHETYPE-UTILITY
layer: archetype
domain: web
registry_status: PROPOSED
design_evidence: NONE
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - DS
candidate_surfaces:
  - 404
```

---

# PART VIII — IMAGE / DIAGRAM SUBSYSTEM REFERENCES

# 77. IMAGE-HUMAN-REALITY-WEB-01

```yaml
id: IMAGE-HUMAN-REALITY-WEB-01
layer: subsystem
domain: web
registry_status: APPROVED
design_evidence: VISUALLY_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
source:
  - IMG
  - HOME-C01
rules:
  - documentary/editorial
  - human + real product/reality
  - full-bleed/environmental
  - no frame
  - no generic office stock
  - temporary Stitch placeholders must be replaced before production
```

---

# 78. DIAGRAM-GRAMMAR-WEB-01

```yaml
id: DIAGRAM-GRAMMAR-WEB-01
layer: subsystem
domain: web
registry_status: CANDIDATE
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_EXTRACTION
authority_confidence: OPERATIVE
source:
  - BRAND
  - HOME-C01
  - GS1-S2A
rules:
  - flat
  - thin Border Gray connectors
  - Deep Ink labels
  - restrained Zyppi Blue active path
  - no 3D
  - no holograms
  - no decorative node webs
```

---

# 79. ICONOGRAPHY-ZYPPI-01

```yaml
id: ICONOGRAPHY-ZYPPI-01
layer: subsystem
domain: core
registry_status: EXPERIMENTAL
design_evidence: VISUAL_EXPLORATION
implementation_readiness: NOT_READY
authority_confidence: UNRESOLVED
source:
  - ICON
status_note: "HELD BY CHAIR"
rules:
  - do not use pilot domain icons as production authority
  - simple temporary functional icons permitted where necessary
```

---

# PART IX — BEHAVIORAL / EXPERIENCE PATTERN REFERENCES

# 80. BEHAVIOR-ONE-PRIMARY-ACTION-01

```yaml
id: BEHAVIOR-ONE-PRIMARY-ACTION-01
layer: experience-rule
domain: core
registry_status: APPROVED
design_evidence: REFERENCE_PAGE_ACCEPTED
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
source:
  - ZYUX-WEB
rules:
  - one dominant action per decision context
  - depth links remain secondary
```

---

# 81. BEHAVIOR-ANSWER-FIRST-01

```yaml
id: BEHAVIOR-ANSWER-FIRST-01
layer: experience-rule
domain: web
registry_status: APPROVED
design_evidence: MANDATE_ONLY
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
source:
  - ZYUX-WEB
  - FAQ-S2C
rules:
  - answer before conversion
  - direct answer before deep explanation
```

---

# 82. BEHAVIOR-PROGRESSIVE-DEPTH-01

```yaml
id: BEHAVIOR-PROGRESSIVE-DEPTH-01
layer: experience-rule
domain: web
registry_status: APPROVED
design_evidence: MANDATE_ONLY
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
source:
  - ZYUX-WEB
  - GS1-S2A
rules:
  - orient first
  - depth optional
  - do not force platform education before first useful understanding
```

---

# 83. BEHAVIOR-INTEGRATE-NOT-REPLACE-01

```yaml
id: BEHAVIOR-INTEGRATE-NOT-REPLACE-01
layer: experience-rule
domain: core
registry_status: APPROVED
design_evidence: MANDATE_ONLY
implementation_readiness: READY_FOR_REPO_RECON
authority_confidence: OPERATIVE
source:
  - ZYUX-WEB
  - ABOUT-S2B
rules:
  - host/system-of-record ownership remains explicit
  - no replacement visual rhetoric
```

---

# PART X — CURRENT PAGE COMPOSITION MAP

# 84. COMPOSITION-HOME-01

```yaml
id: COMPOSITION-HOME-01
layer: composition
domain: web
registry_status: CANDIDATE
design_evidence: VISUALLY_ACCEPTED
implementation_readiness: READY_FOR_DESIGN_FREEZE
authority_confidence: OPERATIVE
source:
  - HOME-C01
route: "/"
shell:
  - SHELL-WEB-PUBLIC-01
known_reusable_owners:
  - GLOBAL-HEADER-01
  - GLOBAL-FOOTER-01
  - SECTION-HERO-HUMAN-01
  - PATTERN-HERO-ACTION-01
  - PATTERN-CONCEPT-FLOW-01
  - SECTION-CONCEPTUAL-MODEL-01
  - PATTERN-FINAL-CTA-01
  - SECTION-FINAL-CTA-01
note: >
  Page visual direction accepted. Exact extraction of reusable owners is still required.
```

---

# 85. COMPOSITION-GS1-01

```yaml
id: COMPOSITION-GS1-01
layer: composition
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - GS1-S2A
route: "/gs1-digital-link"
planned_reuse:
  - SHELL-WEB-PUBLIC-01
  - SECTION-HERO-HUMAN-01
  - SECTION-CONCEPTUAL-MODEL-01
  - PATTERN-DEPTH-PATHS-01
  - SECTION-FAQ-SHORT-01
  - SECTION-FINAL-CTA-01
```

---

# 86. COMPOSITION-ABOUT-01

```yaml
id: COMPOSITION-ABOUT-01
layer: composition
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - ABOUT-S2B
route: "/about"
planned_reuse:
  - SHELL-WEB-PUBLIC-01
  - SECTION-HERO-HUMAN-01
  - SECTION-ENTITY-ORIENTATION-01
  - SECTION-CONCEPTUAL-MODEL-01
  - SECTION-INTEGRATION-REASSURANCE-01
  - SECTION-BRAND-SIGNATURE-01
```

---

# 87. COMPOSITION-FAQ-01

```yaml
id: COMPOSITION-FAQ-01
layer: composition
domain: web
registry_status: PROPOSED
design_evidence: MANDATE_ONLY
implementation_readiness: NOT_READY
authority_confidence: PROVISIONAL
source:
  - FAQ-S2C
route: "/faq"
planned_reuse:
  - SHELL-WEB-PUBLIC-01
  - SECTION-HERO-EDITORIAL-01
  - FAQ-ITEM-01
  - SECTION-FAQ-CATEGORY-01
  - SECTION-FINAL-CTA-01
```

---

# PART XI — UNRESOLVED / REQUIRED EXTRACTIONS

# 88. TOKEN-GAP-001 — Exact Spacing Scale

```yaml
id: TOKEN-GAP-001
type: token-gap
status: OPEN
job: "Normalize accepted page spacing into reusable semantic tokens."
source_evidence:
  - accepted homepage design
required_before:
  - Web Design-System Freeze
```

---

# 89. TOKEN-GAP-002 — Exact Typography Scale

```yaml
id: TOKEN-GAP-002
type: token-gap
status: OPEN
job: "Extract exact size/weight/line-height/letter-spacing values from accepted visual parent."
required_before:
  - production token freeze
```

---

# 90. TOKEN-GAP-003 — Content Width Values

```yaml
id: TOKEN-GAP-003
type: token-gap
status: OPEN
job: "Map CONTENT-READING/STANDARD/WIDE/FULL to exact implementation values."
```

---

# 91. PATTERN-GAP-001 — Form System

```yaml
id: PATTERN-GAP-001
type: pattern-gap
status: OPEN
job: "Define Early Access form primitives, states, validation, success, error, privacy context."
expected_source:
  - Early Access design
```

---

# 92. PATTERN-GAP-002 — Article System

```yaml
id: PATTERN-GAP-002
type: pattern-gap
status: OPEN
job: "Define article shell, metadata, source list, body rhythm, related reading."
expected_source:
  - Resolver Insight article design
```

---

# 93. PATTERN-GAP-003 — Developer Local Navigation

```yaml
id: PATTERN-GAP-003
type: pattern-gap
status: OPEN
job: "Determine whether Developers requires local navigation or remains single-flow."
expected_source:
  - Developers design
```

---

# 94. PATTERN-GAP-004 — Legal Reading Pattern

```yaml
id: PATTERN-GAP-004
type: pattern-gap
status: OPEN
job: "Define minimal legal reading shell and anchored-section behavior."
```

---

# 95. PATTERN-GAP-005 — 404 Utility

```yaml
id: PATTERN-GAP-005
type: pattern-gap
status: OPEN
job: "Define restrained Brand-consistent 404 surface."
```

---

# 96. EXTRACTION-GAP-001 — Header States

```yaml
id: EXTRACTION-GAP-001
type: extraction-gap
status: OPEN
job: "Capture desktop/mobile/active/focus/header menu states from accepted visual parent."
```

---

# 97. EXTRACTION-GAP-002 — Button States

```yaml
id: EXTRACTION-GAP-002
type: extraction-gap
status: OPEN
job: "Capture primary/secondary button hover/focus/disabled states."
```

---

# 98. EXTRACTION-GAP-003 — Final CTA Contract

```yaml
id: EXTRACTION-GAP-003
type: extraction-gap
status: OPEN
job: "Compare homepage, GS1, About, FAQ CTA Jobs and decide approved variants."
```

---

# PART XII — IMPLEMENTATION READINESS MATRIX

# 99. Ready for Extraction Now

The following have sufficient source evidence to begin formal design-system extraction:

```text
COLOR raw values
Typography families
Border default
Elevation default
Breakpoint proof set
Global Header
Global Mobile Nav
Global Footer
Primary Button
Secondary Button
Text Link
Text hierarchy
Code Inline
Code Block
Human Reality Hero
Concept Flow
Conceptual Model
Final CTA
Public Web Shell
Acquisition Archetype
Human Reality image subsystem
Web diagram grammar
```

Extraction does NOT mean repository implementation.

---

# 100. Blocked on Visual Approval

The following are defined but await accepted visual output:

```text
Editorial Hero
Progressive Depth Paths
Entity Rail
FAQ Item
FAQ Group
Integration Reassurance
Brand Signature
FAQ Category
Pillar Archetype
Entity Archetype
Answer Hub Archetype
GS1 Composition
About Composition
FAQ Composition
```

---

# 101. Blocked on Future Design

```text
Article Shell
Article Intro
Article Body
Related Reading
Early Access Form
Form Field system
Developer Local Navigation
Legal Archetype details
Utility / 404
```

---

# 102. Blocked on Chair Hold

```text
Zyppi Iconography production subsystem
```

---

# 103. Blocked on Repository Recon

Even visually accepted assets remain blocked from code implementation until Jules or another authorized repository agent establishes:

- current framework;
- styling architecture;
- existing design tokens;
- existing reusable components;
- routing;
- test infrastructure;
- Storybook/component-preview equivalent if any;
- visual-regression capability;
- accessibility tooling;
- CSS/module/Tailwind conventions;
- package boundaries.

Registry semantics SHALL adapt to repository-native implementation rather than imposing arbitrary paths.

---

# PART XIII — AGENT QUERY INDEX

# 104. Query by Job — Hero

```text
Human / product Reality:
SECTION-HERO-HUMAN-01
status: CANDIDATE

Text/editorial:
SECTION-HERO-EDITORIAL-01
status: PROPOSED
```

Agent rule:

> Do not invent a third hero until a legitimate Job cannot be satisfied by these.

---

# 105. Query by Job — FAQ

```text
Question component:
FAQ-ITEM-01
PROPOSED

Short FAQ section:
SECTION-FAQ-SHORT-01
PROPOSED

Category FAQ section:
SECTION-FAQ-CATEGORY-01
PROPOSED
```

---

# 106. Query by Job — Concept Explanation

```text
PATTERN-CONCEPT-FLOW-01
CANDIDATE

SECTION-CONCEPTUAL-MODEL-01
CANDIDATE
```

---

# 107. Query by Job — Next Depth

```text
PATTERN-DEPTH-PATHS-01
PROPOSED
```

Do not invent unrelated cards to provide deeper links.

---

# 108. Query by Job — Final Conversion

```text
PATTERN-FINAL-CTA-01
CANDIDATE

SECTION-FINAL-CTA-01
CANDIDATE
```

---

# 109. Query by Job — Public Navigation

```text
GLOBAL-HEADER-01
CANDIDATE

NAV-WEB-PRIMARY-01
CANDIDATE

GLOBAL-MOBILE-NAV-01
CANDIDATE

NAV-WEB-MOBILE-01
CANDIDATE

GLOBAL-FOOTER-01
CANDIDATE
```

No page-local header/footer invention permitted.

---

# 110. Query by Job — Integration Reassurance

```text
PATTERN-INTEGRATION-REASSURANCE-01
PROPOSED

SECTION-INTEGRATION-REASSURANCE-01
PROPOSED
```

---

# 111. Query by Job — Brand Peak

```text
PATTERN-BRAND-SIGNATURE-01
PROPOSED

SECTION-BRAND-SIGNATURE-01
PROPOSED
```

---

# 112. Query by Job — Reading

```text
PAGE-ARCHETYPE-ARTICLE
PROPOSED

SHELL-WEB-ARTICLE-01
PROPOSED

SECTION-ARTICLE-INTRO-01
PROPOSED

SECTION-ARTICLE-BODY-01
PROPOSED

SECTION-RELATED-READING-01
PROPOSED
```

No implementation yet.

---

# PART XIV — REGISTRY CHANGE PROTOCOL

# 113. Promotion Rules

A registry item may be promoted:

```text
PROPOSED → CANDIDATE
```

when:

- visual output exists;
- output respects governing mandate;
- reusable Job remains valid.

A registry item may be promoted:

```text
CANDIDATE → APPROVED
```

when:

- visual behavior accepted;
- states understood;
- responsive behavior understood;
- accessibility contract understood;
- no unresolved semantic conflict;
- Chair/Council disposition authorizes it.

---

# 114. Implementation Promotion

An approved item becomes:

```text
READY_FOR_IMPLEMENTATION
```

only when:

- repository owner resolved;
- implementation pattern resolved;
- tests defined;
- visual baseline available where appropriate.

---

# 115. Registry Mutation Rule

No AI Agent SHALL silently modify Registry status.

A mandate or Council/Chair disposition must authorize:

- promotion;
- deprecation;
- retirement;
- breaking variant addition.

---

# 116. New Registry Entry Rule

A new entry requires at minimum:

```yaml
id:
layer:
domain:
registry_status:
design_evidence:
implementation_readiness:
authority_confidence:
purpose:
source:
```

If the Job already exists:

> reuse or extend the existing owner.

---

# 117. Identifier Stability

Once an item becomes `APPROVED`, its ID should remain stable.

Breaking semantic replacement should create:

- a new version;
- or a new ID with deprecation path.

Do not rename approved owners casually.

---

# PART XV — WEB FREEZE CHECKLIST

# 118. Web Freeze Required Foundations

Before Web Freeze:

- [x] Brand raw colors defined
- [x] Typography families defined
- [x] Border principle defined
- [x] Elevation principle defined
- [x] Responsive proof widths defined
- [ ] Semantic color-token names frozen
- [ ] Typography scale frozen
- [ ] Spacing scale frozen
- [ ] Content widths frozen
- [ ] Focus implementation token frozen
- [ ] Motion duration/easing tokens defined if needed

---

# 119. Web Freeze Required Global Components

- [ ] Global Header approved owner
- [ ] Mobile Nav approved owner
- [ ] Global Footer approved owner
- [ ] Primary Button approved owner
- [ ] Secondary/Button-link hierarchy approved
- [ ] Text Link approved owner
- [ ] Code treatment approved owner
- [ ] FAQ Item approved owner
- [ ] Form Field approved owner

---

# 120. Web Freeze Required Sections

- [ ] Human Hero approved
- [ ] Editorial Hero approved
- [ ] Conceptual Model approved
- [ ] Progressive Depth approved
- [ ] FAQ Short approved
- [ ] FAQ Category approved
- [ ] Final CTA approved
- [ ] Article Body approved
- [ ] Related Reading approved
- [ ] Early Access Form approved

---

# 121. Web Freeze Required Shells

- [ ] Public Web Shell approved
- [ ] Article Shell approved

---

# 122. Web Freeze Required Archetypes

- [ ] Acquisition
- [ ] Pillar
- [ ] Entity
- [ ] Answer Hub
- [ ] Article
- [ ] Conversion
- [ ] Legal
- [ ] Utility

---

# 123. Web Freeze Required Validation

- [ ] Desktop reference renders
- [ ] Mobile reference renders
- [ ] Component interactive-state references
- [ ] Accessibility behavior documented
- [ ] Pattern Gap list resolved for launch scope
- [ ] Image treatment owners resolved
- [ ] No unratified iconography dependency
- [ ] Visual-regression strategy defined
- [ ] Repository recon complete

---

# PART XVI — CURRENT COUNCIL INTERPRETATION

# 124. What Is Actually Mature Today

The current strongest reusable evidence comes from the corrected homepage.

Therefore v0.1 deliberately treats:

- Header;
- Footer;
- Human Reality Hero;
- Button hierarchy;
- Link hierarchy;
- Concept-flow language;
- Final CTA;
- Public Web Shell;
- Acquisition archetype;

as the primary extraction candidates.

---

# 125. What Is Not Mature Yet

S2A REV-A, S2B, and S2C are mandates.

Unless their final Stitch outputs have been separately reviewed and accepted:

> their new patterns remain `PROPOSED`.

This Registry SHALL NOT convert textual intent into fictitious visual approval.

---

# 126. Why This Distinction Matters

Without independent statuses, an implementation agent could incorrectly conclude:

```text
FAQ mandate exists
therefore
FAQ component is approved
```

That is false.

Correct reasoning:

```text
FAQ mandate exists
therefore
FAQ Job and proposed contract exist

visual output accepted?
NO

therefore
registry status remains PROPOSED
```

---

# PART XVII — INITIAL AI-AGENT QUERY EXAMPLES

# 127. Example — Stitch Designing Developers

Agent query:

> “I need a hero, code surface, conceptual implementation explanation, and final CTA.”

Registry response:

```text
Hero:
- SECTION-HERO-HUMAN-01 — CANDIDATE
- SECTION-HERO-EDITORIAL-01 — PROPOSED

Code:
- CODE-BLOCK-01 — CANDIDATE

Conceptual explanation:
- SECTION-CONCEPTUAL-MODEL-01 — CANDIDATE

Final CTA:
- SECTION-FINAL-CTA-01 — CANDIDATE

Developer local nav:
- NAV-DEVELOPER-LOCAL-01 — PROPOSED / not designed
```

Agent action:

> reuse candidates where mandate permits; raise Pattern Gap for any missing developer-specific Job.

---

# 128. Example — Jules Implementing FAQ

If FAQ pattern statuses remain `PROPOSED`:

Jules SHALL NOT invent and implement an accordion from scratch.

Correct action:

```text
STOP
PATTERN-GAP / DESIGN APPROVAL REQUIRED
```

If later promoted to `APPROVED`:

Jules SHALL use the one repository owner mapped to:

```text
FAQ-ITEM-01
```

---

# 129. Example — New Marketing Page

If a future page asks for a photographic hero:

Agent first checks:

```text
SECTION-HERO-HUMAN-01
```

If the Job fits:

> reuse.

The existence of a new route is not sufficient reason for a new Hero ID.

---

# 130. Example — Sidebars

Current Registry contains no approved APP sidebar.

Therefore:

> any current request to implement a Zyppi operational sidebar is a Pattern Gap.

Do not infer future APP UI from public Web patterns.

---

# PART XVIII — NEXT REQUIRED WORK

# 131. Registry v0.1 Next Actions

Recommended next sequence:

```text
1. Council review ZYPPI-DESIGN-SYSTEM-001
2. Council review this Registry
3. Extract accepted homepage foundations/components precisely
4. Update v0.2 with exact token values
5. Complete S2A visual review
6. Promote eligible GS1 patterns
7. Complete S2B visual review
8. Promote eligible About patterns
9. Complete S2C visual review
10. Promote eligible FAQ patterns
11. Design Developers using Registry
12. Design Article archetype using Registry
13. Design Early Access form system
14. Reach Web Freeze
15. Jules repository recon
16. Bind registry owners to repository paths/components
```

---

# 132. Expected v0.2 Additions

`ZYPPI-DESIGN-SYSTEM-REGISTRY-001 v0.2` should add:

- exact typography values;
- exact spacing values;
- exact content-width values;
- component state captures;
- Figma node references;
- final About/FAQ/GS1 statuses;
- Developers candidates;
- article patterns;
- form patterns;
- early visual-regression baseline references.

---

# 133. Expected Repository-Bound Registry Fields

After Jules reconnaissance, each approved implementation item should gain:

```yaml
implementation:
  package:
  path:
  component:
  stylesheet_or_token_source:
  tests:
  visual_baseline:
  accessibility_test:
```

These fields are intentionally absent from v0.1 because repository facts have not yet been reconciled.

---

# 134. Final Registry Rule

> **This Registry records reality. It SHALL NOT create reality by assumption.**

A source mandate can establish a proposed Job.

A visual review can establish a candidate.

A Council/Chair disposition can approve an owner.

Repository implementation can establish a code owner.

These are distinct events.

---

# 135. Status

**Registry Status:** DRAFT — INITIAL SEED REGISTRY / FOR COUNCIL REVIEW

**Current Web Freeze:** NOT REACHED

**Current strongest extraction source:** Corrected Homepage

**Current next design-system operation:** Precise homepage extraction + continued page design using registry-aware mandates

---

**End of `ZYPPI-DESIGN-SYSTEM-REGISTRY-001 v0.1`**
