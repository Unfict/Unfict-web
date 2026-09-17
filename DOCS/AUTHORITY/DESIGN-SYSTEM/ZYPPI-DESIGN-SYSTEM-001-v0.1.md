# ZYPPI-DESIGN-SYSTEM-001
# Zyppi Reusable Interface, Pattern & Template System

**Version:** 0.1  
**Status:** DRAFT — PROPOSED SECONDARY DESIGN GOVERNANCE CONSTRUCT / FOR COUNCIL REVIEW  
**Date:** 8 September 2026  
**Issued By:** Chair, Zyppi Constitutional Council  
**Authority Domain:** Brand · ZyUX · Interface Composition · Reusable UI · Responsive Behavior · Accessibility · AI-Agent Implementation  
**Applies To:** Public website · future Zyppi product UI · developer surfaces · documentation · host-native surfaces · authorized design and implementation agents  
**Primary Design Authorities:** `BRAND-001` · applicable `ZyUX` doctrine · approved page/design authorities  
**Coordinates With:** `ZYPPI-WEB-ZYUX-PROJECTION-001` · `ZYPPI-WEB-IMAGE-PLACEMENT-001` · `ZYPPI-ICONOGRAPHY-001` when ratified · repository-native implementation conventions  
**Companion Artifact Planned:** `ZYPPI-DESIGN-SYSTEM-REGISTRY-001`  
**Nature:** Secondary design governance construct; does not create product capabilities, public claims, navigation exposure, or implementation authority by itself  

---

# 0. Executive Proposition

Zyppi SHALL maintain a governed reusable design system that sits between:

```text
BRAND + ZyUX
      ↓
ZYPPI DESIGN SYSTEM
      ↓
APPROVED PAGE / PRODUCT DESIGNS
      ↓
IMPLEMENTATION
```

The purpose is to ensure that Zyppi does not become a collection of individually designed pages, one-off components, or agent-invented CSS decisions that merely resemble each other.

The governing proposition is:

> **One visual grammar. Many legitimate compositions.**

The system SHALL provide reusable:

- foundations;
- design tokens;
- primitives;
- components;
- patterns;
- section templates;
- navigation systems;
- shells;
- page archetypes;
- state models;
- responsive behaviors;
- accessibility expectations;
- content-slot contracts;
- implementation boundaries.

The system SHALL enable future designers, Stitch, Jules, and other authorized AI Agents to compose Zyppi surfaces from governed visual language rather than inventing new interface grammar per task.

---

# 1. Why This Construct Exists

Zyppi’s current pre-launch work has established a recognizable Brand direction, a narrow public information architecture, a selected homepage visual parent, recurring section patterns, Human Reality photography doctrine, technical diagram language, FAQ/answer patterns, entity/About patterns, and developer-facing principles.

Without a reusable design-system authority, each new page or implementation could independently reproduce buttons, headers, accordions, section spacing, image treatments, CTA blocks, diagram nodes, menu behavior, sidebars, article layouts, form controls, empty/error states—and still appear superficially consistent.

That is not sufficient.

Visual consistency must be structural, not accidental.

---

# 2. Core Invariant — Single Visual Pattern Owner

## **Single Visual Pattern Owner**

Every recurring Zyppi interface pattern SHALL have one governed design-system owner.

Pages, product surfaces, documentation, and host-native extensions SHALL compose, configure, or legitimately specialize that governed owner.

They SHALL NOT independently reproduce its:

- visual semantics;
- behavioral semantics;
- responsive semantics;
- accessibility semantics;
- state semantics.

Example:

```text
                 FAQ-ITEM-01
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
     Homepage FAQ   FAQ Page   GS1 Page
```

Not:

```text
HomepageFAQ.tsx
GS1Accordion.tsx
FAQBox.tsx
AboutQuestion.tsx
```

that merely happen to look similar.

This invariant is mandatory.

---

# 3. Core Invariant — Reuse Before Invention

Before creating any new visual solution, an authorized designer or implementation agent SHALL:

1. search the governed design-system registry;
2. identify whether an existing token, primitive, component, pattern, section, shell, or archetype satisfies the Job;
3. reuse it when it does;
4. use an approved variant where appropriate;
5. stop and record a Pattern Gap when no governed pattern fits.

The agent SHALL NOT silently invent a replacement.

---

# 4. Core Invariant — Composition Is Not Redesign

A page or product surface may combine governed pieces in a new composition.

That does not authorize changing component semantics, inventing variants, changing spacing scales, changing state behavior, altering accessibility, introducing new imagery treatment, creating a new nav system, or creating a new shell.

The distinction is:

```text
COMPOSITION
allowed when using governed parts

REDESIGN
requires design authority
```

---

# 5. Core Invariant — Design Availability ≠ Product Availability

The existence of a component, nav item style, sidebar pattern, domain icon, product shell, or empty-state pattern does NOT authorize public or product exposure of a capability.

Visibility remains governed by product scope, ZyUX, authorization, market scope, and current implementation truth.

---

# 6. Core Invariant — No Agent-Specific Visual Dialect

Stitch, Jules, Figma automation, and future AI Agents SHALL NOT develop independent stylistic dialects.

All authorized agents must operate through:

> **the same governed system.**

A Stitch-created design that cannot map back to the design system is not implementation-ready.

A Jules implementation that cannot identify its design-system owner is not complete.

---

# 7. Authority Order

For design and implementation decisions, apply:

```text
1. Constitutional / North Star authority
2. ZyUX doctrine
3. Brand authority
4. Product / market / content authority
5. ZYPPI-DESIGN-SYSTEM-001
6. Approved design-system registry entries
7. Approved page/product design
8. Repository-native conventions
9. Agent preference
```

Where a lower layer conflicts with a higher one:

> follow the higher authority and record the conflict.

---

# 8. System Architecture

The design system SHALL be organized in three top-level domains:

```text
ZYPPI DESIGN SYSTEM
│
├── CORE
│
├── WEB
│
└── APP
```

These domains share identity but solve different Jobs.

---

# 9. CORE Domain

The CORE domain contains cross-surface design primitives.

Examples:

- color;
- typography;
- spacing;
- grid;
- radius;
- borders;
- focus;
- motion;
- icon sizing;
- buttons;
- links;
- form controls;
- status;
- text hierarchy;
- code treatment;
- accessibility behavior.

CORE may be used by Web, App, Developers, Docs, and future Host-native surfaces.

---

# 10. WEB Domain

The WEB domain contains patterns specific to public acquisition, editorial explanation, SEO/search surfaces, articles, public FAQ, pre-launch forms, and marketing/education pages.

Examples:

- Human Reality Hero;
- Editorial Hero;
- Conceptual Model section;
- Progressive Depth Paths;
- FAQ Category;
- Article Intro;
- Related Reading;
- Final CTA;
- Early Access form.

WEB patterns SHALL NOT automatically appear inside the future operational product.

---

# 11. APP Domain

The APP domain contains future operational interface patterns.

Examples:

- product shell;
- application header;
- primary sidebar;
- context sidebar;
- object header;
- data table;
- filters;
- object status;
- activity/receipt stream;
- explanation drawer;
- empty states;
- error states;
- contextual actions;
- scope/context controls.

APP SHALL reuse CORE but may require substantially different layout behavior from WEB.

---

# 12. Optional Future Domain — HOST

A future `HOST` domain MAY be introduced for host-native Zyppi surfaces.

It SHALL NOT be created prematurely.

If authorized later, it should reuse CORE identity, host-specific composition constraints, and governed capability semantics.

Host context does not authorize independent visual semantics.

---

# 13. Design System Layers

The system SHALL use these layers:

```text
L0 — Foundations / Tokens
L1 — Primitives
L2 — Components
L3 — Patterns
L4 — Section Templates
L5 — Shells / Navigation Systems
L6 — Page / Surface Archetypes
L7 — Approved Compositions
```

Each layer has a distinct Job.

---

# 14. L0 — Foundations / Tokens

Foundations define values that SHALL NOT be re-decided per page.

Initial categories:

- color;
- typography;
- spacing;
- grid;
- width;
- radius;
- border;
- elevation;
- motion;
- focus;
- z-index;
- breakpoint;
- image treatment;
- content density.

---

# 15. Color Foundation

Current Brand palette:

```text
White              #FFFFFF
Institutional Gray #F6F7F9
Deep Ink           #0A0D14
Slate              #596273
Border Gray        #DDE1E7
Zyppi Blue         #1965EC
```

Brand ratio guidance:

```text
White / Gray   70–85%
Ink / Slate    10–25%
Blue            2–8%
```

Design-system tokens SHALL refer to semantic roles, not only raw values.

Example:

```text
--zy-color-surface-primary
--zy-color-surface-secondary
--zy-color-text-primary
--zy-color-text-secondary
--zy-color-border-default
--zy-color-accent
```

Raw hexadecimal values remain implementation details behind governed tokens.

---

# 16. Color Token Rule

Agents SHALL NOT create ad hoc colors because they “look close.”

If a needed semantic color does not exist:

> record a Token Gap.

Do not silently add a near-duplicate.

---

# 17. Typography Foundation

Primary family:

> IBM Plex Sans

Machine / technical family:

> IBM Plex Mono

IBM Plex Mono SHALL be used where machine identity or technical semantics matter.

Examples:

- code;
- URI;
- technical labels;
- compact metadata;
- controlled category markers.

It SHALL NOT become the default body face.

---

# 18. Typography Token Classes

The eventual registry SHOULD include semantic text styles such as:

```text
DISPLAY-01
H1-01
H2-01
H3-01
BODY-L
BODY-M
BODY-S
LABEL-M
LABEL-S
MONO-M
MONO-S
CAPTION
```

The exact values require design-system extraction/freeze.

Until then, agents SHALL inherit the approved visual parent rather than inventing independent sizes.

---

# 19. Spacing Foundation

A governed spacing scale SHALL replace arbitrary per-page spacing.

Recommended conceptual scale:

```text
SPACE-0
SPACE-1
SPACE-2
SPACE-3
SPACE-4
SPACE-5
SPACE-6
SPACE-8
SPACE-10
SPACE-12
SPACE-16
SPACE-20
SPACE-24
SPACE-32
```

Exact pixel/rem mapping SHALL be ratified in the registry.

Agents SHALL NOT introduce arbitrary values unless unavoidable and documented.

---

# 20. Content Width Foundation

The system SHALL distinguish content Jobs.

Recommended width categories:

```text
CONTENT-READING
for long-form text

CONTENT-STANDARD
for ordinary page sections

CONTENT-WIDE
for diagrams / multi-column

CONTENT-FULL
for environmental image / full-bleed section
```

This prevents every section from choosing its own width.

---

# 21. Grid Foundation

Public Web SHOULD use a governed 12-column grid at major desktop breakpoints, consistent with Brand direction.

Responsive implementations SHALL collapse based on component behavior rather than mechanically preserving desktop columns.

---

# 22. Radius Foundation

Brand direction:

> restrained radius, approximately 0–4 px

The design system SHALL define a very small radius set.

Avoid pill-heavy UI, large SaaS-style cards, and inconsistent rounding.

---

# 23. Border Foundation

Default border:

> 1 px Border Gray

Use borders for structural separation, input boundaries, restrained containers, and diagrams.

Do not use borders to turn every piece of content into a card.

---

# 24. Elevation Foundation

Default:

> no decorative shadow.

Elevation may exist only where overlay hierarchy, focus, menu/popover, or functional stacking requires it.

Cards do not receive shadows merely to look “premium.”

---

# 25. Motion Foundation

Motion must explain state, relation, progression, route, loading, or disclosure.

Motion SHALL NOT exist simply because animation is available.

All motion must support reduced-motion behavior.

---

# 26. Focus Foundation

Visible keyboard focus is mandatory.

Focus states must be obvious, Brand-consistent, high contrast, and independent of hover.

Agents SHALL NOT suppress outlines without governed replacement.

---

# 27. Breakpoint Foundation

Canonical design proof currently uses:

```text
1440
1280
768
390
360
```

Usability should remain viable at:

```text
320
```

The registry SHALL eventually map these design proofs to implementation breakpoints.

---

# 28. L1 — Primitives

Primitives are atomic reusable interface elements.

Initial CORE primitive candidates:

```text
BUTTON
TEXT-LINK
HEADING
BODY-TEXT
DIVIDER
BADGE
STATUS
INPUT
TEXTAREA
SELECT
CHECKBOX
RADIO
DISCLOSURE-TRIGGER
TOOLTIP
ICON-BUTTON
CODE-INLINE
TAG
```

Each primitive SHALL have semantic Job, allowed variants, states, responsive behavior if applicable, accessibility behavior, and implementation owner.

---

# 29. Button System

Initial candidate variants:

```text
BUTTON-PRIMARY
BUTTON-SECONDARY
BUTTON-GHOST
BUTTON-DESTRUCTIVE
```

The public pre-launch site may use only the variants required by current design.

No arbitrary page-specific button variants.

---

# 30. Primary Button Semantics

Primary means:

> highest-priority legitimate action within the current decision context.

It does NOT mean:

> Blue button used for visual decoration.

Pages should generally expose one primary action at a time.

---

# 31. Text Link Semantics

Text links are the preferred pattern for progressive depth, secondary navigation, related reading, and lower-commitment action.

They should not be visually inflated into competing CTAs.

---

# 32. Form Primitives

Every form primitive SHALL define label, required/optional state, help text, error, disabled, focus, autofill behavior, and mobile behavior.

Placeholder text SHALL NOT replace labels.

---

# 33. L2 — Components

Components combine primitives into reusable functional units.

Initial CORE / WEB candidates:

```text
GLOBAL-HEADER-01
GLOBAL-MOBILE-NAV-01
GLOBAL-FOOTER-01
BREADCRUMB-01
FAQ-ITEM-01
FORM-FIELD-01
CODE-BLOCK-01
CALLOUT-01
STATUS-BANNER-01
ARTICLE-METADATA-01
RELATED-LINK-01
EMPTY-STATE-01
ERROR-STATE-01
```

Future APP candidates may include:

```text
OBJECT-HEADER-01
DATA-TABLE-01
FILTER-BAR-01
ACTIVITY-ITEM-01
EXPLANATION-PANEL-01
CONTEXT-SWITCHER-01
```

---

# 34. Component Ownership

Every component SHALL have one implementation owner.

Example:

```text
FAQ-ITEM-01
```

should map to one reusable repository component.

Pages configure it.

They do not reimplement it.

---

# 35. Component State Contract

Each interactive component SHALL define applicable states:

```text
default
hover
focus
active
selected
disabled
loading
error
success
empty
```

Not every component needs every state.

But any state that exists must be governed.

---

# 36. Component Accessibility Contract

Every component SHALL document keyboard behavior, accessible name, semantic HTML intent, focus behavior, screen-reader behavior, color-independence, and reduced-motion requirements.

Accessibility is part of component ownership.

It is not a QA patch.

---

# 37. L3 — Patterns

Patterns combine components around a recurring user Job.

Initial candidate patterns:

```text
PATTERN-HERO-ACTION-01
PATTERN-HERO-EDITORIAL-01
PATTERN-CONCEPT-FLOW-01
PATTERN-DEPTH-PATHS-01
PATTERN-ENTITY-RAIL-01
PATTERN-FAQ-GROUP-01
PATTERN-ARTICLE-HEADER-01
PATTERN-RELATED-READING-01
PATTERN-FINAL-CTA-01
PATTERN-INTEGRATION-REASSURANCE-01
```

Patterns SHALL be named by Job, not by page.

---

# 38. Pattern Contract

Every pattern SHALL define:

```text
ID
Name
Domain
Status
Purpose
Allowed surfaces
Required slots
Optional slots
Allowed components
Responsive behavior
Accessibility notes
Variants
Prohibited uses
Source design
Implementation owner
Visual regression owner
```

---

# 39. L4 — Section Templates

Section Templates are reusable page-level composition units.

They are the closest equivalent to Elementor-style reusable sections.

They SHALL remain governed, constrained, and semantic.

Initial WEB section candidates:

```text
SECTION-HERO-HUMAN-01
SECTION-HERO-EDITORIAL-01
SECTION-PROBLEM-01
SECTION-VALUE-LIST-01
SECTION-CONCEPTUAL-MODEL-01
SECTION-PERSISTENCE-01
SECTION-INTEGRATION-REASSURANCE-01
SECTION-BRAND-SIGNATURE-01
SECTION-ENTITY-ORIENTATION-01
SECTION-FAQ-CATEGORY-01
SECTION-ARTICLE-INTRO-01
SECTION-ARTICLE-BODY-01
SECTION-RELATED-READING-01
SECTION-FINAL-CTA-01
SECTION-EARLY-ACCESS-FORM-01
```

These are initial candidates, not automatically ratified.

---

# 40. Section Contract Example

Example candidate:

```text
ID:
SECTION-HERO-HUMAN-01

Purpose:
Establish page Job using approved copy plus one Human Reality environmental image.

Required slots:
- H1
- body
- image

Optional slots:
- eyebrow
- primary action
- secondary text link

Limits:
- max 1 primary action
- max 1 secondary link
- no stats
- no metadata strip
- no testimonial
- no secondary card stack

Photography:
- full-bleed/environmental
- no frame
- no decorative shadow

Mobile:
- text then image OR accessible overlay
- image must retain meaningful crop

Accessibility:
- H1 live text
- contrast AA
- content understandable without image
```

The eventual registry SHALL formalize this in machine-readable form.

---

# 41. Section Reuse Rule

If a page needs a Human Reality hero and `SECTION-HERO-HUMAN-01` exists:

> use it.

A designer may vary copy, image, and approved slot usage, but SHALL NOT invent a new hero merely because the page is new.

---

# 42. Legitimate Section Variants

Variants are allowed only when the underlying Job differs materially.

Example:

```text
SECTION-HERO-HUMAN-01
SECTION-HERO-EDITORIAL-01
SECTION-HERO-TECHNICAL-01
```

may be legitimate.

Page-specific hero owners are usually not.

---

# 43. L5 — Shells / Navigation Systems

Shells define persistent interface structure.

They are high-authority patterns because inconsistency here strongly damages UX unity.

---

# 44. WEB Shell

Candidate:

```text
SHELL-WEB-PUBLIC-01

GLOBAL-HEADER-01
MAIN
GLOBAL-FOOTER-01
```

All initial public site pages should use the same Web Shell unless an explicit exception is approved.

---

# 45. Article Shell

Candidate:

```text
SHELL-WEB-ARTICLE-01

GLOBAL-HEADER-01
ARTICLE-HEADER
READING-COLUMN
OPTIONAL ARTICLE NAV
RELATED READING
GLOBAL-FOOTER-01
```

---

# 46. Future APP Shell

Candidate conceptual structure:

```text
SHELL-APP-PRIMARY-01

APP-HEADER
PRIMARY-SIDEBAR
CONTEXT-HEADER
MAIN-WORKSPACE
OPTIONAL-CONTEXT-PANEL
```

This is conceptual only until product design authority exists.

Do not implement from this draft.

---

# 47. Navigation Systems

Navigation SHALL be governed independently from page content.

Candidate IDs:

```text
NAV-WEB-PRIMARY-01
NAV-WEB-MOBILE-01
NAV-ARTICLE-TOC-01
NAV-DEVELOPER-LOCAL-01

future:
NAV-APP-PRIMARY-01
NAV-APP-CONTEXT-01
```

---

# 48. Navigation Semantics

Navigation must reflect current legitimate Jobs, current scope, and current disclosure.

It must NOT become a platform architecture map, a roadmap, a capability inventory, or a menu of future possibilities.

---

# 49. Sidebar Systems

Candidate future APP sidebars:

```text
SIDEBAR-APP-PRIMARY-01
SIDEBAR-APP-CONTEXT-01
```

A sidebar SHALL define purpose, scope, allowed content, active state, collapsed behavior, mobile behavior, context behavior, accessibility, and prohibited leakage.

---

# 50. Sidebar Leakage Rule

A sidebar SHALL NOT reveal unauthorized capability, hidden architecture, future feature, or organization context outside current legitimate scope.

Visual availability is disclosure.

Disclosure must be governed.

---

# 51. L6 — Page / Surface Archetypes

Archetypes describe recurring page Jobs.

They do not prescribe exact copy.

Initial WEB archetype candidates:

```text
PAGE-ARCHETYPE-ACQUISITION
PAGE-ARCHETYPE-PILLAR
PAGE-ARCHETYPE-ENTITY
PAGE-ARCHETYPE-ANSWER-HUB
PAGE-ARCHETYPE-ARTICLE
PAGE-ARCHETYPE-CONVERSION
PAGE-ARCHETYPE-LEGAL
PAGE-ARCHETYPE-UTILITY
```

---

# 52. Acquisition Archetype

Candidate structure:

```text
Hero
Problem
Value
How It Works
Why Zyppi
Standards Entry
Developer Direction
Industry Context
Platform Silhouette
Final CTA
```

Current homepage is the source candidate.

This does not mean every acquisition page uses all sections.

---

# 53. Pillar Archetype

Candidate:

```text
Hero
Orientation
Conceptual Model
Core Explanation
Boundary
Progressive Depth
Short FAQ
CTA
```

Current `/gs1-digital-link` REV-A is the source candidate.

---

# 54. Entity Archetype

Candidate:

```text
Human Hero
Entity Orientation
Purpose
Conceptual Model
Market Entry Rationale
Integration Boundary
Brand Signature
Progressive Discovery
Organizational CTA
```

Current About mandate is the source candidate.

---

# 55. Answer Hub Archetype

Candidate:

```text
Editorial Hero
Quick Answer Index
Question Categories
Progressive Discovery
Final CTA
```

Current FAQ mandate is the source candidate.

---

# 56. Article Archetype

Candidate:

```text
Article Hero
Metadata
Lead
Body
Figures / Diagrams
Sources
Related Reading
CTA
```

To be refined when the first Insight article is designed.

---

# 57. Conversion Archetype

Candidate:

```text
Focused Hero
Expectation Setting
Form
Privacy / Consent Context
Success State
Error State
Alternative Contact / Next Step if approved
```

To be refined for Early Access.

---

# 58. Legal Archetype

Candidate:

```text
Minimal Header
Legal Title
Updated Date
Reading Column
Anchored Sections
Footer
```

Legal pages should not inherit marketing decoration.

---

# 59. Utility Archetype

Candidate examples:

- 404;
- system status if later authorized;
- maintenance.

Utility pages should remain Brand-consistent but extremely simple.

---

# 60. L7 — Approved Compositions

Approved compositions are actual page/product designs that instantiate the system.

A composition may use governed patterns, use one-off content structure, or propose new pattern candidates.

A composition does not automatically promote every one-off element into the system.

---

# 61. Pattern Promotion Rule

A design element should be promoted into the reusable system when:

1. it solves a recurring Job;
2. it is likely to appear on more than one surface;
3. its semantics are stable;
4. responsive behavior is understood;
5. accessibility is understood;
6. its visual language is consistent with Brand/ZyUX;
7. reuse improves consistency.

Do not promote one-off decorative compositions unnecessarily.

---

# 62. Pattern Promotion States

Every registry entry SHALL have status such as:

```text
EXPERIMENTAL
CANDIDATE
APPROVED
DEPRECATED
RETIRED
```

A page design may use a Candidate during design exploration.

Production implementation should default to Approved entries.

---

# 63. Pattern Gap Protocol

When no governed element fits:

```text
PATTERN-GAP
```

must be recorded.

Required fields:

```text
Page / Surface:
Job:
Why existing pattern cannot satisfy:
Closest existing pattern:
Proposed new pattern:
Expected reuse:
Responsive considerations:
Accessibility considerations:
Semantic risk:
```

---

# 64. Pattern Gap Disposition

The design authority may decide:

```text
A. Reuse existing pattern unchanged
B. Extend existing pattern with approved variant
C. Create new pattern
D. Approve one-off exception
E. Reject proposed UI
```

No agent may choose C or D silently.

---

# 65. Jules Implementation Contract

Jules is an implementation/investigation agent.

For design-system implementation, Jules SHALL:

1. inspect repository conventions;
2. locate existing design-system implementation;
3. locate registry entry;
4. identify exact approved component/pattern owner;
5. reuse it;
6. compose page from governed pieces;
7. preserve content;
8. preserve responsive semantics;
9. preserve state semantics;
10. preserve accessibility semantics;
11. run design-system and visual regression tests;
12. document any Pattern Gap.

---

# 66. Jules No-Invention Rule

Jules SHALL NOT independently invent:

- new colors;
- new spacing values;
- new radius;
- new button variants;
- new card treatment;
- new nav style;
- new sidebar;
- new FAQ component;
- new image frame;
- new CTA pattern;
- new breakpoint behavior;
- new iconography;
- new animation language.

If no approved owner exists:

> STOP AND RECORD PATTERN-GAP.

---

# 67. Jules CSS Rule

Jules SHALL NOT solve design ambiguity by adding local CSS that produces a one-off visual pattern.

Local CSS is allowed only for legitimate composition, layout positioning, or page-specific content constraints where it does not create a new reusable semantic pattern.

---

# 68. Repository Structure Recommendation

The exact repository structure must follow recon findings.

Conceptually, prefer:

```text
design-system/
├── tokens/
├── primitives/
├── components/
├── patterns/
├── sections/
├── shells/
├── archetypes/
├── registry/
└── tests/
```

If the repository already has an established architecture:

> integrate rather than impose this exact path.

---

# 69. Component Naming in Code

Code names should map cleanly to governed IDs.

Example:

```text
FAQ-ITEM-01
→ FaqItem
```

or repository-native equivalent.

Avoid names based on page location when the underlying Job is shared.

---

# 70. AI Design Agent Contract

Stitch and future design agents SHALL operate as:

> **Design-System Composition and Extension Agents**

not blank-canvas page designers.

For every page mandate, the agent should receive:

- allowed shell;
- allowed patterns;
- allowed sections;
- candidate patterns;
- explicitly authorized new pattern Jobs.

---

# 71. AI Design Agent Workflow

For every page:

## Step 1 — Identify Page Archetype

Example:

`PAGE-ARCHETYPE-ENTITY`

## Step 2 — Identify Required Existing Patterns

Example:

```text
SECTION-HERO-HUMAN-01
SECTION-BRAND-SIGNATURE-01
SECTION-FINAL-CTA-01
```

## Step 3 — Identify Missing Jobs

Example:

`SECTION-ENTITY-ORIENTATION-01`

## Step 4 — Mark Missing Jobs as Candidates

Do not silently invent production patterns.

## Step 5 — Compose Page

## Step 6 — Produce Pattern Receipt

Record reused, specialized, proposed, and rejected items.

---

# 72. AI Design Agent Prohibitions

Do not:

- create a new card style because the current page “needs variety”;
- alter button treatment per page;
- add gradients;
- invent decorative motion;
- introduce new Blue shades;
- frame photography contrary to image doctrine;
- create a new menu;
- create a new mobile nav;
- invent sidebar behavior;
- use unratified iconography as final system authority;
- rewrite content to fit template.

---

# 73. Design-System Receipt Per Page

Every approved page design SHOULD produce:

```markdown
# DESIGN-SYSTEM-COMPOSITION-RECEIPT

## Archetype
- Used:

## Shell
- Used:

## Approved Patterns Reused
- ...

## Candidate Patterns Reused
- ...

## New Pattern Proposals
- ...

## Pattern Gaps
- ...

## One-Off Exceptions
- ...

## Responsive Deviations
- ...

## Accessibility Deviations
- ...

## Recommendation
- Ready for implementation:
```

---

# 74. Content Slot Contract

Patterns and sections SHALL define content slots.

Example:

```yaml
id: SECTION-FAQ-CATEGORY-01
slots:
  category:
    required: true
  introduction:
    required: false
  questions:
    min: 2
    max: 8
```

This protects both visual consistency and content semantics.

---

# 75. Slot Overflow Rule

If content does not fit a governed slot:

> change composition or raise Pattern Gap.

Do NOT shrink text below acceptable scale, truncate approved copy, silently rewrite copy, or overflow mobile.

Content is authority.

Design adapts.

---

# 76. Responsive Contract

Every reusable component/pattern SHALL define desktop behavior, tablet behavior, mobile behavior, minimum viable width, wrapping, order changes, image crop, overflow, and interaction changes.

Responsive behavior belongs to the component owner.

Pages SHALL NOT independently reinterpret it.

---

# 77. Mobile-First Semantic Preservation

Mobile may change stacking, ordering, spacing, and disclosure behavior.

It SHALL NOT change information hierarchy, semantic priority, action priority, or capability visibility.

Responsive adaptation is not semantic drift.

---

# 78. Accessibility Contract

Every approved registry entry SHALL declare applicable WCAG target, keyboard behavior, focus, semantics, contrast, touch size, reduced motion, and screen-reader behavior.

Target:

> WCAG 2.2 AA

---

# 79. Photography System Integration

`ZYPPI-WEB-IMAGE-PLACEMENT-001` remains the governing image-placement authority for the pre-launch Web surface.

Reusable image patterns SHALL reference slot ID, role, full-bleed/borderless rule, crop behavior, focal point, mobile crop, and replacement metadata.

Do not create local framed-photo variants.

---

# 80. Iconography System Integration

`ZYPPI-ICONOGRAPHY-001` is currently held / not ratified.

Therefore:

- do not treat the pilot set as production authority;
- use simple functional temporary icons where necessary;
- do not import domain pilot icons into final public design.

Once ratified, the icon system may become a CORE subsystem.

---

# 81. Diagram System

Technical diagrams SHALL use a reusable diagram grammar.

Candidate future system:

```text
DIAGRAM-NODE-01
DIAGRAM-CONNECTOR-01
DIAGRAM-ACTIVE-PATH-01
DIAGRAM-LABEL-01
DIAGRAM-FLOW-VERTICAL-01
```

Current Brand direction:

- flat;
- Border Gray;
- Deep Ink;
- restrained Blue;
- no 3D;
- no network-web decoration.

---

# 82. State Semantics

Status visuals must not strengthen meaning.

Examples:

```text
Validation
≠ Trust

Evidence
≠ Verification

Receipt
≠ Certification

Authority
≠ Ownership
```

This rule applies to icons, colors, badges, labels, and card treatments.

---

# 83. Empty State System

Future empty states SHALL use reusable patterns.

Example candidate:

```text
EMPTY-STATE-01

optional icon/motif
heading
explanation
optional action
```

Do not use cute characters, confetti, or decorative illustration packs.

---

# 84. Error State System

Error patterns SHALL distinguish:

- user-correctable input error;
- unavailable state;
- denied state;
- system failure;
- unresolved result.

One generic red error box is insufficient.

This requires future product-specific design authority.

---

# 85. Loading State System

Loading SHALL be calm, minimal, meaningful, and reduced-motion safe.

Do not animate the Zyppi logo everywhere.

---

# 86. Status System

Status must be communicated via:

```text
text
+
optional icon
+
optional color
```

Never color alone.

---

# 87. Web-Specific Current Seed Corpus

The current pre-launch work provides a seed corpus.

Important:

> **seed does not mean ratified.**

The current status of source designs must be respected.

---

# 88. Seed — Global Header

Source:

selected corrected homepage.

Candidate ID:

```text
GLOBAL-HEADER-01
```

Status:

> CANDIDATE FOR EXTRACTION / PAGE DESIGN ACCEPTED VISUALLY

Expected Jobs:

- logo;
- primary public nav;
- Request developer preview CTA;
- responsive mobile nav;
- active route.

---

# 89. Seed — Global Footer

Source:

corrected homepage.

Candidate:

```text
GLOBAL-FOOTER-01
```

Expected content groups:

- infrastructure;
- company;
- legal;
- Reality Sync identity;
- preview status;
- GS1 independence.

---

# 90. Seed — Human Reality Hero

Sources:

- corrected homepage;
- S2A REV-A;
- S2B About mandate.

Candidate:

```text
SECTION-HERO-HUMAN-01
```

Status:

> STRONG CANDIDATE

Key invariant:

> photography is environment, not card.

---

# 91. Seed — Editorial Hero

Sources:

- FAQ mandate;
- future Insights.

Candidate:

```text
SECTION-HERO-EDITORIAL-01
```

Status:

> CANDIDATE

---

# 92. Seed — Conceptual Model

Sources:

- homepage;
- GS1 pillar;
- About Reality Model.

Candidate:

```text
SECTION-CONCEPTUAL-MODEL-01
PATTERN-CONCEPT-FLOW-01
```

Status:

> CANDIDATE

---

# 93. Seed — Progressive Depth Paths

Source:

S2A REV-A.

Candidate:

```text
PATTERN-DEPTH-PATHS-01
```

Purpose:

offer one or two legitimate deeper paths without competing with primary CTA.

---

# 94. Seed — Entity Orientation Rail

Source:

S2B About mandate.

Candidate:

```text
PATTERN-ENTITY-RAIL-01
SECTION-ENTITY-ORIENTATION-01
```

Status:

> PROPOSED / NOT YET VISUALLY APPROVED

---

# 95. Seed — Brand Signature

Source:

S2B About mandate.

Candidate:

```text
SECTION-BRAND-SIGNATURE-01
```

Purpose:

one strong Reality Sync visual peak.

Status:

> PROPOSED / NOT YET VISUALLY APPROVED

---

# 96. Seed — FAQ Item

Sources:

- GS1 pillar FAQ;
- S2C FAQ mandate.

Candidate:

```text
FAQ-ITEM-01
```

Likely structure:

```text
question
direct answer
optional explanation
optional deeper link
```

Status:

> PROPOSED / NOT YET VISUALLY APPROVED

---

# 97. Seed — FAQ Category

Source:

S2C.

Candidate:

```text
SECTION-FAQ-CATEGORY-01
PATTERN-FAQ-GROUP-01
```

Status:

> PROPOSED

---

# 98. Seed — Final CTA

Sources:

- homepage;
- GS1;
- FAQ;
- future pages.

Candidate:

```text
SECTION-FINAL-CTA-01
PATTERN-FINAL-CTA-01
```

Variants may be legitimate based on Job:

- developer preview;
- organizational evaluation;
- article-related action.

Do not create one variant per page.

---

# 99. Seed — Integration Reassurance

Source:

About.

Candidate:

```text
SECTION-INTEGRATION-REASSURANCE-01
```

Purpose:

communicate:

> integrate with systems that already own their Jobs.

Status:

> PROPOSED.

---

# 100. Seed — Article Reading Pattern

Source:

planned Insight articles.

Candidate:

```text
SECTION-ARTICLE-BODY-01
SHELL-WEB-ARTICLE-01
PAGE-ARCHETYPE-ARTICLE
```

Status:

> NOT YET DESIGNED.

---

# 101. Seed Status Rule

The registry SHALL preserve distinction:

```text
VISUALLY ACCEPTED
CANDIDATE
PROPOSED
NOT YET DESIGNED
```

Do not infer ratification from document existence.

---

# 102. Initial Web Template Library Goal

Before Jules implements the full pre-launch site, the system SHOULD have approved definitions for at least:

```text
GLOBAL-HEADER-01
GLOBAL-MOBILE-NAV-01
GLOBAL-FOOTER-01

BUTTON-PRIMARY
BUTTON-SECONDARY
TEXT-LINK

SECTION-HERO-HUMAN-01
SECTION-HERO-EDITORIAL-01
SECTION-CONCEPTUAL-MODEL-01
PATTERN-DEPTH-PATHS-01
FAQ-ITEM-01
SECTION-FAQ-CATEGORY-01
SECTION-FINAL-CTA-01

SHELL-WEB-PUBLIC-01
SHELL-WEB-ARTICLE-01

PAGE-ARCHETYPE-PILLAR
PAGE-ARCHETYPE-ENTITY
PAGE-ARCHETYPE-ANSWER-HUB
PAGE-ARCHETYPE-ARTICLE
PAGE-ARCHETYPE-CONVERSION
```

This is a target, not an automatic approval list.

---

# 103. Elementor Analogy — Correct Interpretation

The system should provide the benefits of Elementor-like reusable design building blocks:

- fast composition;
- predictable layouts;
- reusable sections;
- reusable controls;
- shared styling;
- consistent responsive behavior.

But Zyppi SHALL NOT become a drag-and-drop free-form builder, a collection of arbitrary widget options, or a theme with dozens of visual variants.

The goal is:

> **constrained composability.**

---

# 104. Constrained Composability

A strong system offers enough patterns to avoid reinvention and few enough variants to preserve identity.

The system should prefer:

```text
ONE strong FAQ component
THREE legitimate hero patterns
ONE global header
ONE global footer
ONE article shell
```

over dozens of aesthetic choices.

---

# 105. Visual Unity Test

A surface passes visual unity if:

1. it uses governed tokens;
2. it uses governed shell;
3. it reuses governed components;
4. new patterns are explicitly approved;
5. spacing follows system;
6. Blue use follows system;
7. photography follows system;
8. typography follows system;
9. responsive behavior follows component contracts;
10. accessibility follows component contracts.

---

# 106. “Looks Similar” Is Not Sufficient

Two components that look identical but have different markup, different state semantics, different mobile behavior, or different focus behavior are not the same governed component.

System ownership includes behavior.

---

# 107. Design Regression

Every approved reusable visual owner SHOULD have canonical reference renders.

Recommended references:

```text
desktop
tablet
mobile
interactive states
dark/alternate surface if authorized
```

These references should support visual-regression testing.

---

# 108. Visual Regression Gate

Future implementation SHOULD fail quality gates when an unauthorized change causes:

- spacing drift;
- color drift;
- typography drift;
- border/radius drift;
- component geometry drift;
- responsive regression.

The exact tooling depends on repository recon.

---

# 109. Screenshot Baselines

Approved screenshots should be versioned, deterministic, tied to component/system version, and reviewed when intentionally changed.

Do not approve broad screenshot updates without understanding visual diffs.

---

# 110. Design Token Regression

Tokens should have automated protection where feasible.

Examples:

- no undeclared raw colors;
- no unauthorized radius values;
- no arbitrary font families;
- no non-system spacing where lint can reasonably detect it.

---

# 111. CSS / Styling Quality Gate

Future repo may add a design-system quality gate such as:

```text
design:validate
```

Potential checks:

- token usage;
- component imports;
- duplicate primitive implementation;
- unapproved CSS variables;
- visual snapshots;
- accessibility tests.

Exact command must follow repository design.

---

# 112. Duplication Detection

The implementation should periodically audit for duplicate visual owners.

Example risks:

```text
Button.tsx
PrimaryButton.tsx
MarketingButton.tsx
BlueCta.tsx
```

If their Job is the same, consolidation is required.

---

# 113. Pattern Deprecation

When a pattern is replaced:

```text
APPROVED
↓
DEPRECATED
↓
RETIRED
```

Deprecation SHALL document replacement, migration guidance, and affected surfaces.

Do not silently leave multiple active visual dialects.

---

# 114. Versioning

The design system SHOULD use explicit versions.

Example:

```text
ZYPPI-DESIGN-SYSTEM-001 v0.1
Registry v0.1
```

Individual patterns may carry `patternVersion` if implementation requires it.

Avoid unnecessary version complexity early.

---

# 115. Change Classes

Design-system changes should be classified:

## PATCH

optical / accessibility fix without semantic/layout contract change.

## MINOR

new approved variant or compatible component/pattern.

## MAJOR

breaking visual/behavioral contract requiring migration.

---

# 116. Governance Receipt for New Pattern

Any new reusable pattern should have:

```markdown
# DESIGN-PATTERN-RECEIPT

## Identity
- ID:
- Name:
- Version:
- Domain:

## Job
- Purpose:
- Repeated Job:

## Sources
- Design source:
- Content source:
- ZyUX authority:
- Brand authority:

## Contract
- Required slots:
- Optional slots:
- States:
- Responsive:
- Accessibility:

## Reuse
- Expected surfaces:
- Existing alternatives reviewed:

## Risks
- Semantic:
- Visual:
- Accessibility:
- Disclosure:

## Status
- Experimental / Candidate / Approved:
```

---

# 117. Registry Requirement

`ZYPPI-DESIGN-SYSTEM-REGISTRY-001` SHALL become the machine-readable source of truth for approved reusable owners.

This governance document defines rules.

The Registry defines:

> **what exists now.**

---

# 118. Recommended Registry Schema

Example:

```yaml
id: SECTION-FAQ-CATEGORY-01
name: FAQ Category
layer: section
domain: web
status: approved
version: 1.0

purpose:
  - group canonical questions around one topic

surfaces:
  - faq
  - pillar

slots:
  category:
    required: true
  introduction:
    required: false
  questions:
    min: 2
    max: 8

components:
  required:
    - FAQ-ITEM-01

responsive:
  desktop: stacked
  tablet: stacked
  mobile: stacked

accessibility:
  heading_required: true

prohibited:
  - photography
  - marketing-card-grid
  - primary-cta
  - unratified-domain-icons

source:
  - STITCH-S2C
```

---

# 119. Registry Search Requirement for Agents

Before design or implementation, an AI Agent SHALL be able to query by Job, surface, layer, status, allowed component, and prohibited behavior.

This is why the registry should be machine-readable.

---

# 120. Figma Library Relationship

The design system SHOULD have a Figma representation structured approximately:

```text
00_FOUNDATIONS
01_PRIMITIVES
02_COMPONENTS
03_PATTERNS
04_SECTIONS
05_SHELLS
06_ARCHETYPES
07_REFERENCE_PAGES
99_EXPERIMENTS
```

Only approved/candidate assets should live in governed sections.

Experiments must remain separate.

---

# 121. Stitch Role After Design-System Adoption

Stitch’s role evolves from:

> design an entire page from a blank canvas

to:

> compose governed patterns and propose only the missing design Jobs.

This reduces visual drift.

---

# 122. Future Stitch Mandate Format

A future page mandate SHOULD include:

```text
Archetype:
PAGE-ARCHETYPE-ARTICLE

Shell:
SHELL-WEB-ARTICLE-01

Required Approved Patterns:
SECTION-HERO-EDITORIAL-01
SECTION-ARTICLE-BODY-01
SECTION-RELATED-READING-01
SECTION-FINAL-CTA-01

New Pattern Authorized for Exploration:
ARTICLE-SOURCE-LIST-01
```

This makes design work cumulative.

---

# 123. Jules Role After Design-System Adoption

Jules SHALL receive:

- design-system authority;
- registry;
- approved page design;
- repository recon;
- exact implementation mandate.

Jules does not receive a screenshot and “make it look like this.”

Jules receives:

> **a governed composition contract.**

---

# 124. Implementation Source Priority

For implementation:

```text
1. Registry semantic contract
2. Approved design-system component
3. Approved page composition
4. Figma visual evidence
5. Repository conventions
```

Figma alone is not the semantic owner.

---

# 125. Page-Specific One-Offs

Some page designs legitimately contain one-off editorial compositions.

A one-off may remain local when it is not expected to repeat, does not define a reusable interaction, does not create a new visual dialect, and uses existing foundations.

Do not force every unique editorial layout into the reusable library.

---

# 126. One-Off Exception Receipt

If a local one-off is approved:

```text
ONE-OFF-EXCEPTION
Page:
Job:
Why not reusable:
Tokens used:
Components reused:
Accessibility:
Responsive:
```

This prevents accidental later reuse.

---

# 127. Content vs Design Ownership

The design system governs presentation, behavior, responsive composition, and accessibility.

It does NOT govern marketing claims, product semantics, legal text, API contract, or domain vocabulary.

Those remain upstream authorities.

---

# 128. Content Fidelity Rule

A reusable section SHALL adapt to approved copy.

Approved copy SHALL NOT be rewritten merely to fit a section template.

If copy exceeds slot assumptions:

> revise template or composition.

Do not shorten authority to satisfy component geometry.

---

# 129. Search / SEO Surfaces

Reusable public-web patterns SHALL support semantic headings, live text, crawlable links, stable anchors, reading order, and content visibility without interaction where needed.

SEO is not a separate decorative layer.

---

# 130. AI Retrieval Surfaces

Answer / article patterns should support self-contained semantic chunks.

Design should help questions map to answers, headings map to subjects, and internal links map to authority depth.

No hidden machine-only text.

---

# 131. Brand Consistency Beyond Visuals

Visual unity includes interaction tone, restraint, information hierarchy, disclosure boundaries, error language, and action hierarchy.

A visually matching component that violates ZyUX is not Brand-consistent.

---

# 132. Behavioral Consistency

Reusable patterns should encode ethical behavioral decisions.

Examples:

`PATTERN-DEPTH-PATHS-01` should preserve secondary depth, no false urgency, and no four equal CTAs.

`FAQ-ITEM-01` should preserve answer first, conversion last.

---

# 133. Economic Behavior Consistency

Patterns may reduce switching-cost anxiety, uncertainty cost, decision friction, and information search cost.

They SHALL NOT fabricate ROI, scarcity, demand, or risk.

Behavioral design becomes safer when the pattern itself encodes the ethical boundary.

---

# 134. Design-System Anti-Patterns

Reject:

- one component per page;
- one CSS file per visual idea;
- 12 variants of buttons;
- random marketing cards;
- duplicate accordions;
- page-specific nav;
- local icon packs;
- arbitrary gradients;
- arbitrary spacing;
- arbitrary radius;
- custom colors;
- image cards where photography doctrine requires full bleed;
- new breakpoint per component;
- hidden mobile content;
- inaccessible disclosure;
- “temporary” component that becomes permanent without governance.

---

# 135. Approval Model

No single agent may design, self-ratify, implement, and declare completion of a new reusable pattern without appropriate review.

Recommended flow:

```text
Need
↓
Pattern Gap
↓
Design Proposal
↓
Council / Chair Review
↓
Registry Approval
↓
Implementation
↓
Visual / Accessibility Validation
```

---

# 136. Initial Design-System Build Sequence

Recommended:

```text
DS-01
Foundations extraction

DS-02
Global primitives

DS-03
Header / Footer / Navigation

DS-04
Homepage reusable sections

DS-05
GS1 reusable sections

DS-06
About reusable sections

DS-07
FAQ reusable sections

DS-08
Article shell / article patterns

DS-09
Early Access / form system

DS-10
Web design-system freeze for implementation
```

---

# 137. Foundations Extraction

Do not invent tokens from scratch.

Extract current accepted Brand values, selected homepage design, and approved responsive behavior.

Then normalize deliberately.

---

# 138. Component Extraction Rule

When extracting a component from existing design:

1. identify repeated Job;
2. compare all existing instances;
3. separate content differences from structural differences;
4. define invariant;
5. define allowed variants;
6. reject accidental drift;
7. create one owner.

---

# 139. Example — CTA Extraction

Suppose homepage, GS1, and FAQ each contain a final CTA.

Do not create three CTA components.

Extract:

```text
SECTION-FINAL-CTA-01
```

Then define content slots:

```text
heading
body
primaryAction
microcopy? optional
```

If organizational About CTA has materially different action hierarchy, determine whether it is a variant or a different pattern.

---

# 140. Example — FAQ Extraction

GS1 has three FAQ questions.

FAQ page has 28.

They should share:

```text
FAQ-ITEM-01
```

but may use different section composition:

```text
SECTION-FAQ-SHORT-01
SECTION-FAQ-CATEGORY-01
```

This is legitimate reuse.

---

# 141. Example — Hero Extraction

Homepage and GS1/About can share Human Reality treatment without being identical layouts.

Possible structure:

```text
SECTION-HERO-HUMAN-01
variants:
- split
- environmental-overlay
```

Variants require design review.

Do not create page-specific hero owners.

---

# 142. Example — Progressive Depth

GS1 and FAQ both offer deeper content paths.

If their Job is materially the same:

> reuse `PATTERN-DEPTH-PATHS-01`.

Content changes.

Behavior does not.

---

# 143. Design-System Audit Questions

For every page:

1. Which archetype?
2. Which shell?
3. Which components?
4. Which patterns?
5. Which sections?
6. Which are approved?
7. Which are candidates?
8. Which are one-offs?
9. Did any token drift?
10. Did any accessibility behavior drift?
11. Did any responsive behavior drift?
12. Did any new visual Job appear without Pattern Gap?

---

# 144. Implementation Audit Questions

For every repository implementation:

1. Did Jules reuse the owner?
2. Did Jules create duplicate CSS?
3. Did Jules create duplicate component?
4. Are raw colors used?
5. Are arbitrary spacing values used?
6. Is mobile behavior governed?
7. Are focus states preserved?
8. Are screenshots consistent?
9. Are one-offs documented?
10. Are all Pattern Gaps resolved?

---

# 145. Design Quality Gate

A page SHALL NOT be considered implementation-ready until:

- visual parent approved;
- reusable owners identified;
- Pattern Gaps resolved;
- content locked;
- responsive behavior defined;
- accessibility behavior defined;
- imagery slots defined;
- component states defined.

---

# 146. Implementation Quality Gate

A page SHALL NOT be considered complete until:

- registry owners used;
- no unauthorized variants;
- build/type/lint/test pass;
- accessibility checks pass;
- visual regression passes;
- responsive proof passes;
- content fidelity passes;
- no unresolved Pattern Gap.

---

# 147. Web Freeze

Before public implementation begins in earnest, the Web subset SHOULD reach a **Design-System Web Freeze**.

Freeze means sufficient approved vocabulary exists for launch, agents no longer invent common patterns, and remaining gaps are exceptional.

Freeze does not mean the system can never evolve.

---

# 148. Post-Launch Evolution

After launch, analytics, accessibility findings, user behavior, search behavior, and product evolution may justify changes.

Changes should update the system owner first.

Then dependent pages inherit/migrate.

---

# 149. Compounding Principle

Every new page should ideally do one of three things:

```text
A. reuse existing system
B. prove a new legitimate variant
C. contribute one new reusable pattern
```

It should not create an isolated visual island.

---

# 150. Success Definition

`ZYPPI-DESIGN-SYSTEM-001` succeeds when:

- a new page can be designed without redefining basic visual language;
- Jules can implement without aesthetic invention;
- header/footer/buttons/forms/FAQ behave consistently;
- responsive rules are predictable;
- accessibility is encoded into reusable owners;
- visual regression catches drift;
- new patterns are explicit and reviewable;
- website and future product share identity without sharing inappropriate layouts;
- design speed increases while visual variance decreases.

---

# 151. Required Companion Registry

The next formal artifact SHOULD be:

# `ZYPPI-DESIGN-SYSTEM-REGISTRY-001`

Its first revision should catalog existing foundations, provisional tokens, current seed components, current seed patterns, current seed sections, source designs, statuses, allowed surfaces, and implementation readiness.

This document defines governance.

The Registry defines inventory.

---

# 152. Recommended Immediate Workflow

```text
ZYPPI-DESIGN-SYSTEM-001
        ↓
COUNCIL REVIEW
        ↓
ZYPPI-DESIGN-SYSTEM-REGISTRY-001
        ↓
EXTRACT HOMEPAGE SYSTEM
        ↓
EXTRACT GS1 / ABOUT / FAQ PATTERNS
        ↓
DESIGN ARTICLE / DEVELOPER / FORM GAPS
        ↓
WEB FREEZE
        ↓
JULES REPOSITORY RECON
        ↓
IMPLEMENTATION MANDATE
```

---

# 153. Final Doctrine

> **Do not design pages independently when the Job is reusable.**

> **Do not implement patterns independently when an owner exists.**

> **Do not let AI Agents solve design ambiguity through invention.**

> **Do not confuse visual variety with design quality.**

> **Use one visual grammar across many legitimate compositions.**

> **Let Brand define character. Let ZyUX define experience. Let the Design System define reusable form. Let pages define composition. Let Jules implement the governed result.**

# **Zyppi should feel unified because it is built from one system — not because every agent tried to imitate the same screenshots.**

---

# 154. Status & Next Action

**Current Status:** DRAFT — PROPOSED SECONDARY DESIGN GOVERNANCE CONSTRUCT / FOR COUNCIL REVIEW

Recommended next action:

> Generate `ZYPPI-DESIGN-SYSTEM-REGISTRY-001 v0.1` and begin the seed inventory from the current accepted / candidate Web designs.

---

**End of `ZYPPI-DESIGN-SYSTEM-001 v0.1`**
