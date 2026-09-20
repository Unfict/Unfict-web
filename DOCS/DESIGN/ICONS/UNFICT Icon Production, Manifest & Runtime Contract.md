# UNFICT-ICON-RUNTIME-CONTRACT-001

## SVG Production Contract · Manifest Schema · Runtime Component Specification

**Version:** 0.1  
**Status:** DRAFT — IMPLEMENTATION CONTRACT  
**Date:** 17 September 2026  
**Authority Domain:** Iconography · Design System · Frontend Architecture · Developer Experience · Accessibility  
**Applies To:** Unfict website · product interfaces · developer surfaces · documentation · host-native surfaces · diagram systems · future authorized applications  
**Coordinates With:** `UNFICT-ICONOGRAPHY-001` · `UNFICT-ICON-IMPLEMENTATION-GUIDE-001` · Universal Illustration Design Instruction · Collections A–J · Brand authority · applicable ZyUX doctrine  
**Nature:** Technical production and runtime contract. It does not redefine icon meaning, capability availability, Brand authority, or product semantics.

---

# 0. Mission

This contract converts the Unfict iconography system into an implementation-ready technical standard.

It defines:

1. how every production SVG must be authored;
2. how icon metadata must be represented;
3. how icon files are validated;
4. how runtime components consume icons;
5. how Light, Dark, Mono, Brand, Muted, Disabled, and semantic states are produced;
6. how accessibility behavior is assigned;
7. how build systems generate derivative outputs;
8. how semantic and visual drift are prevented.

The governing architecture is:

> **ONE SEMANTIC ICON → ONE GOVERNED GEOMETRY → MANY CONTEXTUAL APPEARANCES**

The implementation layer SHALL NOT create duplicate source geometry merely because the surrounding UI changes color, theme, status, or state.

---

# 1. Governing Principles

The implementation SHALL preserve the following hierarchy:

```text
SEMANTIC CORRECTNESS
        ↓
GEOMETRIC INTEGRITY
        ↓
ACCESSIBILITY
        ↓
SYSTEM CONSISTENCY
        ↓
THEME / STATE FLEXIBILITY
        ↓
IMPLEMENTATION CONVENIENCE
```

Implementation convenience may never justify semantic or geometric corruption.

The core rules are:

> **Geometry carries meaning.**

> **Context carries appearance.**

> **Tokens carry state.**

> **Metadata carries implementation policy.**

> **Components enforce correct consumption.**

---

# 2. System Layers

The complete icon implementation architecture consists of six layers.

```text
01  SEMANTIC SPECIFICATION
        ↓
02  CANONICAL SVG SOURCE
        ↓
03  MANIFEST / METADATA
        ↓
04  BUILD & VALIDATION PIPELINE
        ↓
05  RUNTIME COMPONENT
        ↓
06  CONSUMING INTERFACE
```

Each layer has a different responsibility.

---

# 3. Layer 1 — Semantic Specification

The semantic specification defines:

- icon ID;
- semantic name;
- meaning;
- what the icon does not mean;
- family;
- permitted uses;
- visual direction;
- permitted color behavior;
- allowed variants.

Example:

```text
ID:
uf-icon-resolver

Semantic Name:
Resolver

Meaning:
Infrastructure that determines an appropriate resource relationship from identity and request context.

Must not imply:
authentication
authorization
generic routing
AI decision-making
CMS
```

No implementation may silently broaden this meaning.

---

# 4. Layer 2 — Canonical SVG

The canonical SVG is the geometric source of truth.

Example:

```text
svg/domain/uf-icon-resolver.svg
```

It defines:

- paths;
- fills;
- strokes;
- apertures;
- terminal geometry;
- negative space;
- geometry hierarchy;
- allowed accent channel.

It SHALL NOT define:

- specific page context;
- final ARIA label;
- hover behavior;
- selected state;
- success color;
- warning color;
- destructive color;
- surrounding container.

---

# 5. Layer 3 — Manifest

The manifest tells software how the governed SVG may be used.

It records:

- semantic family;
- source file;
- color channels;
- default tone;
- whether Blue is allowed;
- whether semantic color is allowed;
- supported sizes;
- small-size variants;
- Brand locking;
- accessibility category.

The manifest is therefore:

> **implementation governance expressed as machine-readable data.**

---

# 6. Layer 4 — Build & Validation

The build pipeline SHALL:

- validate SVG structure;
- validate manifest records;
- validate naming;
- reject unauthorized colors;
- reject malformed viewBoxes;
- reject text/raster content;
- generate runtime components;
- generate SVG sprite outputs where required;
- generate previews;
- generate static exports if needed.

Generated outputs are derivatives.

They are not new source authorities.

---

# 7. Layer 5 — Runtime Component

The runtime component provides a safe interface such as:

```jsx
<UfIcon name="resolver" />
```

It SHALL:

- resolve the correct governed icon;
- apply contextual sizing;
- apply contextual tone;
- preserve semantic geometry;
- select small-size geometry where required;
- enforce valid tones;
- handle accessibility correctly;
- prevent arbitrary internal path styling.

---

# 8. Layer 6 — Consuming Interface

The surrounding product controls:

- page theme;
- text/foreground color;
- active state;
- semantic state;
- destructive state;
- selected container;
- focus ring;
- interaction behavior.

The icon should not independently decide these states.

---

# PART I — SVG PRODUCTION CONTRACT

# 9. Canonical Coordinate System

Standard Unfict icons SHALL use:

```svg
viewBox="0 0 24 24"
```

unless a governed exception exists.

The standard master frame is:

```text
24 × 24 units
```

Preferred visible geometry:

```text
approximately 20 × 20
```

Typical nominal inset:

```text
approximately 2 units
```

Optical overshoot is permitted where required.

---

# 10. SVG Root Element

Recommended standard root:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
>
```

The source SHOULD NOT require fixed:

```text
width
height
```

unless an export target requires them.

Preferred canonical source:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
>
```

Runtime sizing should be external.

---

# 11. Functional Outline Icon Contract

For conventional monoline functional icons:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="..." />
</svg>
```

Typical families:

```text
Collection B
Collection D
Collection E
most of Collection J
selected Collection I icons
selected Collection F controls
```

---

# 12. Functional Filled Icon Contract

Where a filled silhouette is governed:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="..." />
</svg>
```

Filled construction must be intentional.

Do not convert outline icons to fill merely to achieve a selected state.

---

# 13. Two-Tone Domain Icon Contract

A governed two-tone icon may expose two semantic channels:

```text
PRIMARY
ACCENT
```

Recommended implementation:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
>
  <path
    d="..."
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />

  <path
    d="..."
    fill="var(--uf-icon-accent, #1965EC)"
  />
</svg>
```

Or, where both elements are fills:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
>
  <path
    d="..."
    fill="currentColor"
  />

  <path
    d="..."
    fill="var(--uf-icon-accent, #1965EC)"
  />
</svg>
```

---

# 14. Meaning of Primary Channel

`currentColor` represents the normal foreground role.

It may become:

```text
Deep Ink
White
Slate
semantic error color
semantic success color
disabled foreground
inherited button/link color
```

depending on context.

The SVG does not decide which.

---

# 15. Meaning of Accent Channel

`--uf-icon-accent` represents a specifically governed secondary visual role.

For ordinary Unfict domain icons, its default may be:

```text
Unfict Blue
#1965EC
```

The accent SHALL correspond to an actual semantic or Brand-owned structural role.

Examples:

```text
Resolver
→ resolution point

Identifier
→ identity anchor

API
→ mediated interface boundary

Webhook
→ triggered outbound relationship

DPP
→ digital-information relationship
```

It must not represent arbitrary decoration.

---

# 16. Monochrome Collapse

Every governed two-tone icon SHALL support:

```css
--uf-icon-accent: currentColor;
```

Example:

```css
.uf-icon[data-tone="mono"] {
  --uf-icon-accent: currentColor;
}
```

This must preserve:

- silhouette;
- semantic recognition;
- negative-space structure;
- Unfict family resemblance.

If monochrome collapse destroys the concept, the SVG fails production readiness.

---

# 17. Hard-Coded Color Policy

Canonical functional icons SHOULD contain no hard-coded presentation colors.

Allowed:

```text
currentColor
```

For governed two-tone icons:

```text
var(--uf-icon-accent, #1965EC)
```

may be used.

Canonical Brand assets may use explicit governed Brand colors where required.

---

# 18. Prohibited Colors in Core Assets

Unless specifically authorized:

```text
#FF0000
#00FF00
#FFA500
#FFFF00
random gray values
alternative blues
gradient values
opacity-derived status colors
```

shall not be embedded into production SVG geometry.

Status belongs to the consuming design system.

---

# 19. No Gradient Rule

Core icons SHALL NOT contain:

```svg
<linearGradient>
<radialGradient>
```

unless a future Brand authority explicitly authorizes such an exception.

Standard Unfict iconography remains flat vector geometry.

---

# 20. No Raster Rule

Production SVGs SHALL NOT contain:

```svg
<image>
```

or embedded:

```text
base64 PNG
base64 JPEG
WebP
```

An icon is vector source.

---

# 21. No Text Rule

Production SVGs SHALL NOT contain:

```svg
<text>
```

Literal textual characters should only exist as vector geometry when the governed icon concept genuinely requires them.

Even then, text dependence should be minimized.

---

# 22. Transform Policy

Editor-generated transforms SHOULD be flattened where practical.

Avoid:

```svg
transform="translate(...) rotate(...) scale(...)"
```

when the same geometry can be deterministically represented directly.

Transforms may be retained only when:

- they are intentional;
- they do not create unstable exports;
- flattening would reduce clarity or determinism.

---

# 23. Path Ordering

Path order SHALL be deterministic.

Recommended order:

```text
1. primary/background semantic structure
2. secondary structure
3. accent structure
4. foreground detail
```

Do not allow editor save order to change paths randomly.

---

# 24. IDs Within SVG

Avoid unnecessary internal IDs.

Do not emit:

```text
path1234
clipPath777
layer12
```

unless structurally required.

When IDs are necessary, they must be stable and deterministic.

---

# 25. SVG Metadata

Remove unnecessary:

```text
Illustrator metadata
Figma metadata
Inkscape metadata
generator comments
editing history
hidden layers
unused definitions
```

The canonical SVG should remain clean and portable.

---

# 26. Geometry Mutation Prohibition

Product code SHALL NOT modify internal icon geometry.

Forbidden runtime operations include:

```text
move one path
hide one semantic fragment
resize only the accent
rotate only the terminal
change aperture width
add a badge directly into SVG
convert outline to fill
merge separate forms
```

If geometry changes meaning, define a governed icon or variant.

---

# 27. Directional Integrity

Directional icons SHALL NOT automatically be mirrored.

Examples:

```text
uf-icon-arrow-right
uf-icon-arrow-left
```

remain separate assets.

Likewise:

```text
Chevron Right
Chevron Down
```

are governed siblings rather than CSS rotations unless an explicit implementation authority establishes otherwise.

Optical correction matters.

---

# 28. Small-Size Variant Contract

A small-size variant MAY exist when necessary.

Example:

```text
uf-icon-resolver.svg
uf-icon-resolver-16.svg
```

Allowed reasons:

- aperture collapse;
- over-dense internal detail;
- terminal collision;
- poor optical centering;
- insufficient negative space;
- illegibility at 16 px.

Not allowed:

- creating variants automatically;
- visual experimentation;
- arbitrary style differences.

---

# 29. Small-Size Semantic Invariance

A small-size variant must preserve:

- same semantic meaning;
- same dominant silhouette;
- same core relationship;
- same ID family;
- same color policy.

It may simplify detail.

It may not redefine the icon.

---

# 30. Source Filename Contract

Canonical filenames:

```text
uf-icon-search.svg
uf-icon-resolver.svg
uf-icon-dpp.svg
uf-icon-authentication.svg
uf-motif-mark.svg
```

Allowed governed suffixes:

```text
-16
-20
-filled
-outline
```

only where required.

---

# 31. Prohibited Source Filename Patterns

Do not use:

```text
-search-final.svg
-search-final2.svg
-search-new.svg
-resolver-blue.svg
-resolver-white.svg
-resolver-dark.svg
-resolver-light.svg
-resolver-v3-real.svg
```

Version history belongs to source control.

Appearance belongs to styling.

---

# PART II — MANIFEST CONTRACT

# 32. Purpose of `MANIFEST.json`

`MANIFEST.json` is the authoritative machine-readable index of the governed icon library.

It SHALL answer:

```text
What is this icon?
Where is its source?
Which family owns it?
How may it be colored?
Which sizes are supported?
Does it have optimized variants?
Is it Brand locked?
What runtime tones are permitted?
```

---

# 33. Top-Level Manifest Structure

Recommended:

```json
{
  "schemaVersion": "1.0",
  "library": "unfict-icons",
  "iconographyVersion": "0.3",
  "generatedAt": "2026-09-17",
  "icons": []
}
```

---

# 34. Required Icon Record

Each icon SHALL include:

```json
{
  "id": "uf-icon-resolver",
  "name": "Resolver",
  "family": "domain",
  "collection": "C",
  "source": "svg/domain/uf-icon-resolver.svg",
  "viewBox": "0 0 24 24",
  "colorChannels": 2,
  "defaultTone": "brand",
  "allowedTones": [
    "inherit",
    "mono",
    "brand",
    "muted",
    "disabled"
  ],
  "blueAccentAllowed": true,
  "semanticColorAllowed": false,
  "monochromeSafe": true,
  "smallOptimized": true,
  "sizes": [16, 20, 24, 32, 40, 48],
  "accessibilityMode": "contextual",
  "brandLocked": false,
  "semanticStatus": "governed"
}
```

---

# 35. Manifest Field Definitions

## `id`

Canonical governed identifier.

Examples:

```text
uf-icon-search
uf-icon-resolver
uf-motif-mark
```

Must be globally unique.

---

## `name`

Human-readable canonical name.

Example:

```text
Resolver
```

---

## `family`

Recommended enum:

```text
motif
functional
domain
navigation
content
developer
gs1
governance
state
interaction
```

---

## `collection`

Collection identifier:

```text
A
B
C
D
E
F
G
H
I
J
```

---

## `source`

Relative canonical SVG source path.

---

## `viewBox`

Usually:

```text
0 0 24 24
```

---

## `colorChannels`

Allowed values:

```text
1
2
```

Current architecture SHOULD avoid more than two public styling channels.

---

## `defaultTone`

Recommended values:

```text
inherit
mono
brand
muted
semantic
disabled
locked
```

`locked` should be reserved for Brand assets whose color behavior cannot be arbitrarily overridden.

---

## `allowedTones`

Explicit whitelist.

The component SHALL reject or ignore tones not listed here.

---

## `blueAccentAllowed`

Boolean.

Determines whether the icon may render a governed Unfict Blue accent.

---

## `semanticColorAllowed`

Boolean.

Examples likely to allow semantic UI color:

```text
warning
success
error
unavailable
processing
```

This does not mean the color is embedded in the SVG.

---

## `monochromeSafe`

Must normally be:

```text
true
```

for functional and domain icons.

---

## `smallOptimized`

Indicates whether optimized small geometry exists.

---

## `sizes`

Supported standard component sizes.

---

## `accessibilityMode`

Recommended enum:

```text
contextual
decorative-only
meaningful
brand
```

---

## `brandLocked`

Boolean.

Canonical Brand assets generally:

```text
true
```

Ordinary icons:

```text
false
```

---

## `semanticStatus`

Recommended values:

```text
governed
proposed
deprecated
experimental
```

Production components SHALL normally expose only:

```text
governed
```

unless a development build explicitly permits others.

---

# 36. Optional Semantic Metadata

Recommended optional fields:

```json
{
  "meaning": "Infrastructure that determines an appropriate resource relationship from identity and request context.",
  "doesNotMean": [
    "authentication",
    "authorization",
    "generic router",
    "AI decision-making"
  ],
  "primaryUses": [
    "resolver education",
    "technical diagrams",
    "authorized resolver surfaces"
  ]
}
```

This makes the manifest useful for:

- documentation;
- AI coding agents;
- semantic linting;
- design tooling.

---

# 37. Optional Variant Record

Example:

```json
{
  "variants": {
    "small": {
      "16": "svg/domain/uf-icon-resolver-16.svg"
    }
  }
}
```

Do not list non-existent variants.

---

# 38. Canonical Brand Record Example

```json
{
  "id": "uf-motif-mark",
  "name": "Canonical Mark",
  "family": "motif",
  "collection": "A",
  "source": "svg/motifs/uf-motif-mark.svg",
  "colorChannels": 1,
  "defaultTone": "locked",
  "allowedTones": ["locked"],
  "blueAccentAllowed": false,
  "semanticColorAllowed": false,
  "monochromeSafe": true,
  "smallOptimized": false,
  "brandLocked": true,
  "semanticStatus": "governed"
}
```

A separate Brand authority may define approved monochrome exports.

The runtime component must not infer arbitrary mark recoloring.

---

# 39. Functional Icon Record Example

```json
{
  "id": "uf-icon-search",
  "name": "Search",
  "family": "functional",
  "collection": "B",
  "source": "svg/functional/uf-icon-search.svg",
  "viewBox": "0 0 24 24",
  "colorChannels": 1,
  "defaultTone": "inherit",
  "allowedTones": [
    "inherit",
    "mono",
    "muted",
    "semantic",
    "disabled"
  ],
  "blueAccentAllowed": false,
  "semanticColorAllowed": true,
  "monochromeSafe": true,
  "smallOptimized": false,
  "sizes": [16, 20, 24, 32, 48],
  "accessibilityMode": "contextual",
  "brandLocked": false,
  "semanticStatus": "governed"
}
```

---

# 40. Two-Tone Domain Record Example

```json
{
  "id": "uf-icon-identifier",
  "name": "Identifier",
  "family": "domain",
  "collection": "C",
  "source": "svg/domain/uf-icon-identifier.svg",
  "viewBox": "0 0 24 24",
  "colorChannels": 2,
  "defaultTone": "brand",
  "allowedTones": [
    "inherit",
    "mono",
    "brand",
    "muted",
    "disabled"
  ],
  "blueAccentAllowed": true,
  "semanticColorAllowed": false,
  "monochromeSafe": true,
  "smallOptimized": true,
  "sizes": [16, 20, 24, 32, 40, 48],
  "accessibilityMode": "contextual",
  "brandLocked": false,
  "semanticStatus": "governed"
}
```

---

# 41. JSON Schema

Recommended formal schema:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://unfict.com/schemas/icon-manifest.schema.json",
  "title": "Unfict Icon Manifest",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "library",
    "icons"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string"
    },
    "library": {
      "const": "unfict-icons"
    },
    "iconographyVersion": {
      "type": "string"
    },
    "generatedAt": {
      "type": "string"
    },
    "icons": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/icon"
      }
    }
  },
  "$defs": {
    "icon": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "id",
        "name",
        "family",
        "collection",
        "source",
        "colorChannels",
        "defaultTone",
        "allowedTones",
        "blueAccentAllowed",
        "semanticColorAllowed",
        "monochromeSafe",
        "smallOptimized",
        "brandLocked",
        "semanticStatus"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^uf-(icon|motif)-[a-z0-9]+(?:-[a-z0-9]+)*$"
        },
        "name": {
          "type": "string",
          "minLength": 1
        },
        "family": {
          "enum": [
            "motif",
            "functional",
            "domain",
            "navigation",
            "content",
            "developer",
            "gs1",
            "governance",
            "state",
            "interaction"
          ]
        },
        "collection": {
          "enum": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J"
          ]
        },
        "source": {
          "type": "string",
          "pattern": "^svg/.+\\.svg$"
        },
        "viewBox": {
          "type": "string"
        },
        "colorChannels": {
          "type": "integer",
          "minimum": 1,
          "maximum": 2
        },
        "defaultTone": {
          "$ref": "#/$defs/tone"
        },
        "allowedTones": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "$ref": "#/$defs/tone"
          }
        },
        "blueAccentAllowed": {
          "type": "boolean"
        },
        "semanticColorAllowed": {
          "type": "boolean"
        },
        "monochromeSafe": {
          "type": "boolean"
        },
        "smallOptimized": {
          "type": "boolean"
        },
        "sizes": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "enum": [16, 20, 24, 32, 40, 48]
          }
        },
        "accessibilityMode": {
          "enum": [
            "contextual",
            "decorative-only",
            "meaningful",
            "brand"
          ]
        },
        "brandLocked": {
          "type": "boolean"
        },
        "semanticStatus": {
          "enum": [
            "governed",
            "proposed",
            "experimental",
            "deprecated"
          ]
        },
        "meaning": {
          "type": "string"
        },
        "doesNotMean": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "type": "string"
          }
        },
        "primaryUses": {
          "type": "array",
          "uniqueItems": true,
          "items": {
            "type": "string"
          }
        },
        "variants": {
          "type": "object"
        }
      }
    },
    "tone": {
      "enum": [
        "inherit",
        "mono",
        "brand",
        "muted",
        "semantic",
        "disabled",
        "locked"
      ]
    }
  }
}
```

---

# 42. Manifest Validation Invariants

The validator SHALL enforce:

```text
unique icon ID
unique source path
source file exists
source filename matches ID
default tone ∈ allowed tones
Brand locked → tone must be governed
colorChannels = 1 or 2
blueAccentAllowed=false for ordinary functional icons unless explicitly governed
monochromeSafe=true for production functional/domain icons
smallOptimized=true → variant file exists
```

---

# 43. Cross-Record Semantic Checks

Recommended semantic lint rules:

```text
QR Code != Digital Link
GTIN != Barcode
Authority != Permission
Authority != Authentication
Revocation != Delete
Expiry != Time
Standing != Success
Evidence != Validation
Receipt != Certification
Resolver != Refresh
API != Interface
```

These checks may initially be documentation/lint assertions rather than geometry analysis.

Their purpose is preventing accidental aliasing.

---

# PART III — RUNTIME COMPONENT CONTRACT

# 44. Component Name

The preferred generic abstraction is:

```text
UfIcon
```

Illustrative usage:

```jsx
<UfIcon name="resolver" />
```

Framework-specific implementations may differ internally.

The external behavioral contract should remain equivalent.

---

# 45. Canonical Component API

Recommended conceptual interface:

```ts
type UfIconProps = {
  name: UfIconName;
  size?: UfIconSize;
  tone?: UfIconTone;
  decorative?: boolean;
  label?: string;
  className?: string;
};
```

Optional framework-native props may also be supported.

---

# 46. `name`

`name` selects the semantic icon.

Recommended consumer form:

```jsx
<UfIcon name="resolver" />
```

rather than requiring:

```jsx
<UfIcon name="uf-icon-resolver" />
```

Internally:

```text
resolver
→ uf-icon-resolver
```

The canonical full ID remains in the manifest.

---

# 47. Name Type Generation

The build system SHOULD generate a type union from the manifest.

Example:

```ts
type UfIconName =
  | "search"
  | "close"
  | "copy"
  | "resolver"
  | "identifier"
  | "digital-link"
  | "dpp"
  | "authentication";
```

Do not manually maintain this list independently.

---

# 48. `size`

Recommended:

```ts
type UfIconSize =
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48;
```

Default:

```text
24
```

The component SHALL verify that the selected icon supports the requested size where restrictions exist.

---

# 49. Size Rendering

Recommended runtime output:

```html
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
```

At 16:

```html
<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
>
```

unless the manifest specifies a 16px optimized source.

---

# 50. Small-Optimized Resolution Logic

Conceptually:

```text
requested size = 16
        │
        ▼
icon.smallOptimized?
   │             │
  yes            no
   │             │
   ▼             ▼
use -16.svg     use canonical SVG
```

The consumer does not choose manually.

---

# 51. `tone`

Recommended:

```ts
type UfIconTone =
  | "inherit"
  | "mono"
  | "brand"
  | "muted"
  | "semantic"
  | "disabled";
```

Brand locked assets may use internal:

```text
locked
```

but this need not be exposed as a general consumer option.

---

# 52. Tone Validation

If:

```jsx
<UfIcon
  name="search"
  tone="brand"
/>
```

but `brand` is not allowed in the Search manifest record, the implementation should:

### Development

Warn or throw depending on project conventions.

### Production

Use a safe governed fallback.

Recommended fallback:

```text
defaultTone
```

---

# 53. `inherit` Tone

Behavior:

```css
color: inherit;
```

Accent behavior:

```text
if icon has accent:
follow manifest/default accent policy
```

For ordinary one-channel functional icons this is the standard behavior.

---

# 54. `mono` Tone

Behavior:

```css
color: inherit;
--uf-icon-accent: currentColor;
```

All visible geometry becomes one foreground color.

---

# 55. `brand` Tone

Behavior:

```css
color: inherit;
--uf-icon-accent: var(--uf-blue);
```

Only valid if:

```text
blueAccentAllowed = true
```

---

# 56. `muted` Tone

Behavior:

```css
color: var(--uf-icon-muted);
```

Accent behavior should follow manifest policy.

For most domain icons:

```text
Muted primary + governed Blue accent
```

may be allowed.

For reduced-emphasis contexts, teams may choose mono muted where the product system requires less emphasis.

---

# 57. `semantic` Tone

The parent component supplies status color.

Example:

```jsx
<div data-status="error">
  <UfIcon
    name="error"
    tone="semantic"
  />
  Failed
</div>
```

CSS:

```css
[data-status="error"] {
  color: var(--color-status-error);
}
```

The icon inherits that color.

---

# 58. `disabled` Tone

Recommended:

```css
color: var(--color-foreground-disabled);
--uf-icon-accent: currentColor;
```

This prevents a bright Blue accent from remaining active inside a disabled control.

---

# 59. Class Assignment

Illustrative output:

```html
<svg
  class="uf-icon uf-icon--resolver"
  data-tone="brand"
  data-size="24"
>
```

Do not expose classes for internal path anatomy.

---

# 60. CSS Baseline

Recommended:

```css
.uf-icon {
  display: inline-block;
  flex: 0 0 auto;

  width: 1em;
  height: 1em;

  color: inherit;
  vertical-align: middle;

  --uf-icon-accent: var(--uf-blue);
}
```

When explicit pixel size is set by component:

```css
.uf-icon {
  width: var(--uf-icon-size);
  height: var(--uf-icon-size);
}
```

---

# 61. Tone CSS

```css
.uf-icon[data-tone="inherit"] {
  color: inherit;
}

.uf-icon[data-tone="mono"] {
  color: inherit;
  --uf-icon-accent: currentColor;
}

.uf-icon[data-tone="brand"] {
  color: inherit;
  --uf-icon-accent: var(--uf-blue);
}

.uf-icon[data-tone="muted"] {
  color: var(--uf-icon-muted);
}

.uf-icon[data-tone="semantic"] {
  color: inherit;
}

.uf-icon[data-tone="disabled"] {
  color: var(--uf-icon-disabled);
  --uf-icon-accent: currentColor;
}
```

---

# 62. Recommended Root Tokens

```css
:root {
  --uf-ink: #0A0D14;
  --uf-slate: #596273;
  --uf-blue: #1965EC;

  --uf-icon-default: var(--uf-ink);
  --uf-icon-muted: var(--uf-slate);
}
```

Semantic status tokens should come from the product system.

Example:

```css
:root {
  --uf-icon-disabled: var(--color-foreground-disabled);
  --uf-status-success: var(--color-status-success);
  --uf-status-warning: var(--color-status-warning);
  --uf-status-error: var(--color-status-error);
}
```

---

# 63. Light Theme

Illustrative:

```css
[data-theme="light"] {
  --uf-icon-default: #0A0D14;
  --uf-icon-muted: #596273;
}
```

---

# 64. Dark Theme

Illustrative:

```css
[data-theme="dark"] {
  --uf-icon-default: var(--color-foreground-on-dark);
  --uf-icon-muted: var(--color-foreground-secondary-on-dark);
}
```

Do not invent new Unfict Brand colors merely for dark mode.

---

# 65. Parent Inheritance

Recommended:

```css
.button {
  color: var(--color-button-foreground);
}
```

Then:

```jsx
<button className="button">
  <UfIcon name="arrow-right" />
  Continue
</button>
```

The icon automatically follows the button.

---

# 66. Destructive Example

```jsx
<button className="danger-button">
  <UfIcon
    name="delete"
    tone="semantic"
  />
  Delete resource
</button>
```

```css
.danger-button {
  color: var(--color-destructive);
}
```

No red exists inside:

```text
uf-icon-delete.svg
```

---

# 67. Resolver Example

```jsx
<UfIcon
  name="resolver"
  size={24}
  tone="brand"
/>
```

Light context:

```text
Primary → Ink
Accent → Blue
```

Dark context:

```text
Primary → light foreground
Accent → Blue
```

Mono export:

```jsx
<UfIcon
  name="resolver"
  tone="mono"
/>
```

Result:

```text
Primary → currentColor
Accent → currentColor
```

---

# 68. Accessibility Contract

Accessibility behavior belongs primarily to the runtime component and consuming control.

The canonical SVG source SHALL NOT bake context-specific labels into the asset.

---

# 69. Decorative Mode

Usage:

```jsx
<UfIcon
  name="search"
  decorative
/>
```

Expected output:

```html
<svg aria-hidden="true">
```

No accessible label.

---

# 70. Meaningful Mode

Where an icon conveys information independently:

```jsx
<UfIcon
  name="warning"
  label="Warning"
  decorative={false}
/>
```

Implementation may use:

```html
role="img"
aria-label="Warning"
```

depending on framework/accessibility architecture.

---

# 71. Icon Button Rule

Preferred:

```jsx
<IconButton
  icon="copy"
  label="Copy Digital Link URI"
/>
```

rather than:

```jsx
<UfIcon
  name="copy"
  label="Copy"
/>
```

inside an unlabeled button.

The control owns the action semantics.

---

# 72. Redundant Label Avoidance

Example:

```jsx
<button>
  <UfIcon
    name="download"
    decorative
  />
  Download report
</button>
```

The visible text already communicates meaning.

Do not produce duplicate screen-reader output.

---

# 73. Proprietary Domain Icon Rule

For unfamiliar concepts:

```jsx
<div className="domain-label">
  <UfIcon
    name="resolver"
    tone="brand"
    decorative
  />
  <span>Resolver</span>
</div>
```

The label remains visible.

Do not rely on icon-only recognition for first-use domain navigation.

---

# PART IV — BUILD PIPELINE

# 74. Source Directory

Recommended:

```text
svg/
├── motifs/
├── functional/
├── domain/
├── navigation/
├── content/
├── developer/
├── gs1/
├── governance/
├── state/
└── interaction/
```

---

# 75. Build Inputs

The build process reads:

```text
SVG source
+
MANIFEST.json
+
JSON Schema
```

---

# 76. Build Outputs

Recommended:

```text
dist/
├── svg/
├── sprite/
│   └── unfict-icons.svg
├── components/
├── types/
├── manifest/
├── static/
└── preview/
```

---

# 77. Generated Components

Generated component names may follow:

```text
UfIconSearch
UfIconResolver
UfIconIdentifier
```

alongside generic:

```text
UfIcon
```

Both may be supported.

---

# 78. Direct Component Imports

Potential API:

```ts
import { UfIconSearch } from "@unfict/icons";
```

Useful for maximal tree shaking.

---

# 79. Generic Component Import

Potential API:

```ts
import { UfIcon } from "@unfict/icons";
```

Usage:

```jsx
<UfIcon name="search" />
```

The implementation should preserve tree-shaking or code-generation efficiency where feasible.

---

# 80. Type Generation

Generate automatically:

```ts
export type UfIconName =
  | "search"
  | "close"
  | "resolver"
  | "identifier"
  | "...";
```

Do not manually maintain it separately from the manifest.

---

# 81. Build Validation Sequence

Recommended:

```text
1. validate MANIFEST.json against JSON Schema
2. scan canonical SVG directory
3. confirm every governed SVG has manifest record
4. confirm every manifest source exists
5. validate filenames and IDs
6. validate SVG root/viewBox
7. validate color rules
8. detect raster/text content
9. detect malformed transforms
10. validate small-size variants
11. generate runtime assets
12. generate preview boards
13. run visual regression tests
```

---

# 82. SVG Lint Rules

Production lint SHOULD reject:

```text
embedded raster images
unexpected text
non-governed hard-coded colors
gradients
missing viewBox
invalid dimensions
unknown internal CSS variables
hidden layers
duplicate IDs
unexpected masks/filters
drop shadows
editor metadata
```

---

# 83. Color Lint Rules

Functional icons:

```text
allowed:
currentColor

normally reject:
#1965EC
arbitrary fixed colors
```

Two-tone governed icons:

```text
allowed:
currentColor
var(--uf-icon-accent, #1965EC)
```

Brand assets:

```text
validated against Brand-specific rules
```

---

# 84. Semantic Alias Lint

Prevent aliases such as:

```json
{
  "digital-link": "qr-code"
}
```

or:

```json
{
  "authority": "locked"
}
```

unless a semantic authority explicitly authorizes such mapping—which current doctrine does not.

---

# 85. Preview Generation

Automatically generate:

```text
light
dark
mono
brand
muted
16
20
24
48
```

for review.

Status icons additionally:

```text
success
warning
error
disabled
```

where relevant.

---

# 86. Preview Grid

Recommended review board:

```text
ICON
16
20
24
32
48
MONO
BRAND
DARK
```

This makes family inconsistencies immediately visible.

---

# 87. Visual Regression

Store baseline screenshots for:

```text
all functional icons
all domain icons
all two-tone icons
small-size variants
dark-mode rendering
monochrome rendering
```

Changes to geometry should require intentional review.

---

# 88. Geometry Hash

Optional but strongly recommended.

Store a deterministic SVG geometry hash in build metadata.

Example:

```json
{
  "id": "uf-icon-resolver",
  "geometryHash": "sha256:..."
}
```

This allows detection of unintended path mutation.

---

# 89. Generated File Notice

Generated derivatives SHOULD include a build comment where format permits:

```text
Generated from canonical Unfict icon source.
Do not edit directly.
```

Manual editing must happen in:

```text
svg/
```

not:

```text
dist/
```

---

# PART V — STATE AND THEME BEHAVIOR

# 90. State Matrix

A typical functional icon should behave as:

| State | Geometry | Foreground | Accent |
|---|---|---|---|
| Default | unchanged | inherited | n/a |
| Hover | unchanged | parent hover token | n/a |
| Focus | unchanged | inherited | n/a |
| Active | unchanged | parent active token | n/a |
| Selected | unchanged | selected foreground | n/a |
| Disabled | unchanged | disabled token | n/a |

---

# 91. Domain Two-Tone Matrix

| State | Primary | Accent |
|---|---|---|
| Brand Light | Ink | Blue |
| Brand Dark | Light foreground | Blue |
| Mono Light | Ink | Ink |
| Mono Dark | White | White |
| Muted | Muted foreground | governed Blue or currentColor |
| Disabled | Disabled foreground | currentColor |

---

# 92. Semantic Status Matrix

Status color belongs to the consuming interface.

| State | Icon |
|---|---|
| Info | current semantic info token |
| Warning | current semantic warning token |
| Success | current semantic success token |
| Error | current semantic error token |

Geometry remains constant.

---

# 93. Geometry-State Pairs

These require different SVG identities because meaning changes:

```text
View / Hide
Pin / Unpin
Locked / Unlocked
Connected / Disconnected
Expand / Collapse
Arrow Right / Arrow Left
```

Do not simulate them by color alone.

---

# 94. Visual-State Pairs

These normally do not require alternate SVGs:

```text
default / hover
default / active
default / selected
default / disabled
light / dark
normal / destructive
normal / warning
normal / success
```

---

# PART VI — CONSUMER RULES

# 95. Correct Icon Selection Comes First

Before choosing:

```text
tone
size
color
```

the developer or designer must select the correct semantic icon.

A styling system cannot repair semantic misuse.

---

# 96. Do Not Substitute Adjacent Concepts

Examples:

```text
Barcode
≠ GTIN

QR Code
≠ Digital Link

Share
≠ Delegation

Locked
≠ Authority

Success
≠ Outcome

Validation
≠ Evidence

History
≠ Provenance

File
≠ Resource

API
≠ Interface

Time
≠ Expiry
```

---

# 97. No Internal Styling by Consumers

Consumers may set:

```text
color
--uf-icon-accent
size
tone
```

where permitted.

Consumers SHALL NOT address:

```text
path:nth-child(...)
internal path class
internal polygon
internal mask
```

to alter semantic structure.

---

# 98. No Arbitrary Accent Override

Although technically possible:

```css
--uf-icon-accent: hotpink;
```

product code SHALL NOT arbitrarily recolor governed accent channels.

Allowed accent overrides must come from governed tokens or documented presentation modes.

---

# 99. Brand Blue Discipline

Unfict Blue:

```text
#1965EC
```

is the canonical accent.

Do not invent:

```text
lighter blue
darker blue
cyan variant
electric blue
hover blue
```

inside icon logic unless the product token system governs those values.

---

# 100. CSS Mask Restriction

CSS masks MAY be used for monochrome icons.

Example:

```css
.uf-icon-mask {
  background: currentColor;
  mask: var(--icon-url) center / contain no-repeat;
}
```

Do not use a single mask for icons requiring independent primary/accent channels.

---

# 101. `<img>` Restriction

Use `<img>` only where contextual SVG styling is unnecessary.

Good:

```text
static documentation export
downloadable fixed SVG
email asset
third-party static environment
```

Not preferred:

```text
dynamic product toolbar
theme-aware domain icon
status icon
interactive button
```

---

# 102. Sprite Restriction

Sprite implementations must be tested for:

```text
currentColor inheritance
CSS custom property inheritance
cross-document behavior
browser compatibility
CSP restrictions
```

If accent variables do not behave reliably, generated inline components should be preferred.

---

# PART VII — QUALITY GATES

# 103. Production Acceptance Gate

An icon cannot enter the governed runtime library until it passes:

### Semantic Gate

Correct meaning and boundaries.

### Geometry Gate

24-grid integrity and optical quality.

### Monochrome Gate

Meaning survives removal of Blue.

### Small-Size Gate

16–20px behavior acceptable.

### Theme Gate

Light/Dark behavior acceptable.

### Accessibility Gate

Runtime use can be made accessible.

### Metadata Gate

Manifest record complete.

### Build Gate

SVG passes automated lint.

---

# 104. Functional Icon Acceptance

Ask:

```text
Is it conventionally recognizable?
Does it work entirely through currentColor?
Does branding remain restrained?
Does it survive at 16px?
```

All must pass.

---

# 105. Domain Icon Acceptance

Ask:

```text
Does geometry express the governed semantic distinction?
Does monochrome still work?
Is Blue subordinate rather than essential?
Does it remain visibly Unfict without resembling the logo?
```

All must pass.

---

# 106. Two-Tone Acceptance

Additional questions:

```text
Does accent identify a genuine semantic role?
Is accent mass restrained?
Does --uf-icon-accent: currentColor still work?
Does the Blue accent remain legible on dark surfaces?
```

---

# 107. Brand Asset Acceptance

Canonical Brand assets are reviewed separately.

Runtime icon rules do not authorize alteration of Brand geometry.

---

# PART VIII — REFERENCE IMPLEMENTATION

# 108. Framework-Neutral Pseudocode

```text
function UfIcon(props):
    record = manifest.resolve(props.name)

    assert record.semanticStatus == governed

    tone = props.tone ?? record.defaultTone

    if tone not in record.allowedTones:
        tone = record.defaultTone
        warn in development

    size = props.size ?? 24

    source = record.source

    if size == 16
       and record.smallOptimized
       and record.variants.small.16 exists:
        source = record.variants.small.16

    accessibility =
        resolveAccessibility(
            decorative = props.decorative,
            label = props.label,
            mode = record.accessibilityMode
        )

    render SVG:
        source
        size
        tone
        accessibility
        className
```

---

# 109. React-Like Reference

Illustrative only:

```tsx
type UfIconProps = {
  name: UfIconName;
  size?: UfIconSize;
  tone?: UfIconTone;
  decorative?: boolean;
  label?: string;
  className?: string;
};

export function UfIcon({
  name,
  size = 24,
  tone,
  decorative = true,
  label,
  className
}: UfIconProps) {
  const icon = registry[name];

  const resolvedTone =
    tone && icon.allowedTones.includes(tone)
      ? tone
      : icon.defaultTone;

  const accessibilityProps = decorative
    ? { "aria-hidden": true }
    : {
        role: "img",
        "aria-label": label
      };

  return (
    <svg
      {...accessibilityProps}
      className={[
        "uf-icon",
        `uf-icon--${name}`,
        className
      ]
        .filter(Boolean)
        .join(" ")}
      data-tone={resolvedTone}
      data-size={size}
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {/* generated canonical geometry */}
    </svg>
  );
}
```

The actual repository implementation may use generated components rather than injecting SVG paths dynamically.

---

# 110. Recommended Consumer Examples

## Navigation

```jsx
<NavItem>
  <UfIcon
    name="home"
    decorative
  />
  Home
</NavItem>
```

---

## Domain Navigation

```jsx
<NavItem>
  <UfIcon
    name="identifier"
    tone="brand"
    decorative
  />
  Identifiers
</NavItem>
```

---

## Icon-Only Action

```jsx
<IconButton
  aria-label="Copy GTIN"
>
  <UfIcon
    name="copy"
    decorative
  />
</IconButton>
```

---

## Error Status

```jsx
<Status status="error">
  <UfIcon
    name="error"
    tone="semantic"
    decorative
  />
  Request failed
</Status>
```

---

## Resolver Diagram

```jsx
<DiagramNode>
  <UfIcon
    name="resolver"
    size={40}
    tone="brand"
    decorative
  />
  <span>Resolver</span>
</DiagramNode>
```

---

## Monochrome Print Context

```jsx
<PrintDiagram className="mono">
  <UfIcon
    name="resolver"
    tone="mono"
  />
</PrintDiagram>
```

---

# PART IX — REPOSITORY CONTRACT

# 111. Recommended Package

Conceptually:

```text
@unfict/icons
```

Possible package contents:

```text
@unfict/icons
@unfict/icons/manifest
@unfict/icons/css
@unfict/icons/search
@unfict/icons/resolver
```

Exact packaging remains repository-native.

---

# 112. No Product Logic in the Icon Package

The icon library SHALL NOT contain business rules such as:

```text
if user is admin → Authority icon
if GTIN valid → Success icon
if credential expired → Error icon
```

The icon package renders semantics selected by the consuming product.

It does not determine them.

---

# 113. No Capability Authorization

Presence of:

```text
uf-icon-authority
uf-icon-dpp
uf-icon-delegation
uf-icon-credential
```

does not authorize:

- navigation exposure;
- product availability;
- marketing claims;
- UI capability;
- API surface.

The icon library remains a vocabulary.

---

# 114. Deprecation

When an icon is deprecated:

```json
{
  "semanticStatus": "deprecated"
}
```

The build SHOULD warn on new consumption.

Removal should require a governed migration.

---

# 115. Renaming

Do not casually rename IDs once released.

If terminology changes:

```text
old ID
→ deprecated alias
→ governed migration
→ new canonical ID
```

where necessary.

Avoid silently breaking downstream consumers.

---

# 116. Experimental Assets

Experimental icons belong outside published production exports unless explicitly enabled.

Recommended path:

```text
experiments/
```

or manifest status:

```text
experimental
```

Production builds should exclude them.

---

# PART X — FINAL CANONICAL RULES

# 117. Source-of-Truth Rule

> **The canonical SVG in the governed source directory is the geometric authority.**

Generated components, sprites, PNGs, previews, dark versions, and static exports are derivatives.

---

# 118. One-Geometry Rule

> **If meaning and geometry are unchanged, theme or visual state SHALL NOT create a new source SVG.**

---

# 119. Semantic-Difference Rule

> **If meaning changes, a separate governed icon may be required even when the visual difference appears small.**

Examples:

```text
Locked / Unlocked
View / Hide
Pin / Unpin
Connected / Disconnected
```

---

# 120. Color Rule

> **Foreground color should normally come from `currentColor`.**

> **Governed secondary identity accents should use `--uf-icon-accent`.**

> **Semantic status colors belong to UI design tokens.**

---

# 121. Blue Rule

> **Unfict Blue is a governed semantic/identity accent, not a generic decorative fill.**

---

# 122. Accessibility Rule

> **Generic SVG assets remain context-neutral. Accessibility semantics belong primarily to the consuming component.**

---

# 123. Runtime Rule

> **The `UfIcon` component is the preferred runtime gateway to the icon system.**

Applications SHOULD avoid directly reconstructing or restyling canonical path geometry.

---

# 124. Manifest Rule

> **Every production icon must have a machine-readable manifest record describing its permitted implementation behavior.**

---

# 125. Validation Rule

> **The icon library should be linted both visually and semantically.**

A technically valid SVG with incorrect semantic substitution is still a failed implementation.

---

# 126. Final Architecture

```text
                  SEMANTIC AUTHORITY
                         │
                         ▼
                 ICON SPECIFICATION
                         │
                         ▼
                 CANONICAL SVG
                    24 × 24
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        MANIFEST RECORD        SVG VALIDATION
              │                     │
              └──────────┬──────────┘
                         ▼
                   BUILD SYSTEM
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
    COMPONENT          SPRITE           EXPORT
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                      UfIcon
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
     currentColor    accent token     size/state
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                  CONSUMING CONTEXT
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
        LIGHT           DARK          SEMANTIC
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                    FINAL RENDER
```

---

# 127. Canonical Summary

The complete Unfict icon runtime doctrine can be reduced to seven statements:

1. **Every icon has one governed semantic meaning.**
2. **Every unchanged semantic geometry should have one canonical SVG source.**
3. **The canonical production coordinate system is normally 24 × 24.**
4. **`currentColor` controls ordinary foreground appearance.**
5. **`--uf-icon-accent` controls the governed secondary Unfict accent where permitted.**
6. **Theme, interaction, and status normally change styling—not geometry.**
7. **The manifest and `UfIcon` runtime component enforce those rules consistently.**

The result is a library capable of scaling across the full Unfict Collections A–J without producing separate Light, Dark, Color, Mono, Hover, Active, Selected, Disabled, Success, Warning, and Error SVG copies for each icon.

Instead:

> **One meaning. One governed geometry. One source of truth. Many valid contexts.**