# UNFICT-ICONOGRAPHY-001

## Unfict Iconography & Motif System

### Version 1.0 — Ratified Production & Runtime Edition

**Canonical ID:** `UNFICT-ICONOGRAPHY-001`  
**Version:** **1.0**  
**Status:** **RATIFIED — FINAL**  
**Classification:** Foundation — Secondary Brand Construct / Design System  
**Normative Level:** Iconography Standard  
**Date:** 21 September 2026  
**Effective Date:** 21 September 2026  
**Locking Authority:** Chair  
**Supersedes:** `UNFICT-ICONOGRAPHY-001 v0.3` and prior drafts in full  
**Primary Brand Authority:** `BRAND-001 v3.0 — RATIFIED`  
**Canonical Inventory:** `UNFICT-ICONS-LIST v1.0 — RATIFIED`  
**Canonical Design Instruction:** `UNFICT Universal Icon Illustration Design Instruction v1.0 — RATIFIED`  
**Coordinates With:** `UNFICT-ICON-IMPLEMENTATION-GUIDE-001` · `UNFICT-ICON-RUNTIME-CONTRACT-001` · Collection A–J Function blocks · applicable product design-system and accessibility authorities  
**Applies To:** Public website · Unfict product UI · developer surfaces · diagrams · host-native surfaces · documentation · applications · design-system implementations · authorized marketing collateral  
**Nature:** Governs icon semantics, visual grammar, geometry, color discipline, family behavior, production readiness, and canonical source principles. Icon existence does not authorize product capability, market claim, navigation exposure, or interface availability.

---

# 0. Executive Rule

Unfict SHALL use a proprietary iconography and motif system derived from the visual behavior of the canonical Unfict mark.

The governing proposition is:

> **Minimum visual distraction. Maximum recognizable character.**

The mandatory priority order is:

> **SEMANTIC RECOGNITION → USABILITY → SYSTEM CONSISTENCY → UNFICT CHARACTER → DECORATIVE NOVELTY**

The production architecture is:

> **ONE SEMANTIC ICON → ONE GOVERNED GEOMETRY → MANY CONTEXTUAL APPEARANCES**

And the implementation doctrine is:

> **Geometry carries meaning. Context carries appearance. Tokens carry state. Metadata carries implementation policy. Components enforce correct consumption.**

---

# 1. Purpose

The Unfict icon system exists to provide:

- immediate interface recognition;
- semantic precision;
- continuity across website, product, developer and diagram surfaces;
- restrained proprietary character;
- a scalable vocabulary for technical and institutional environments;
- implementation consistency across Light, Dark, Mono, Brand, Disabled and semantic states;
- accessible and deterministic production assets.

The system is not a decorative illustration library.

The icon is a **symbol**.

---

# 2. Authority & Precedence

If authorities conflict, apply the following order:

```text
1. BRAND-001 v3.0
2. UNFICT-ICONOGRAPHY-001 v1.0
3. UNFICT-ICONS-LIST v1.0
4. Icon-specific Collection A–J Function block
5. Universal Icon Illustration Design Instruction v1.0
6. Ratified runtime / implementation contract where applicable
7. Product implementation convenience
```

Implementation convenience SHALL NOT override semantic correctness, canonical Brand assets, governed geometry, accessibility, or semantic boundaries.

---

# 3. Ratified System Scope

Version 1.0 contains **127 governed assets** across ten collections:

| Collection | Family | Count |
|---|---|---:|
| A | Brand Motifs | 6 |
| B | Functional UI | 27 |
| C | Domain & Concept | 24 |
| D | Navigation & Workspace | 10 |
| E | Content, Files & Communication | 11 |
| F | Developer, API & Data | 12 |
| G | GS1, Product Identity & Connected Product | 9 |
| H | Identity, Access & Governance Extensions | 10 |
| I | System, State & Temporal | 10 |
| J | Inspection, Visibility & Interaction | 8 |
| **Total** |  | **127** |

The ten collections are one system, not ten unrelated styles.

They are grouped by semantic role:

```text
A  Brand identity motifs
B  Universal functional UI
C  Core Unfict domain semantics
D  Navigation and workspace
E  Content, files and communication
F  Developer, API and data
G  GS1 and connected-product specialization
H  Identity, access and governance extensions
I  System state and temporal
J  Inspection, visibility and interaction
```

Exact IDs are governed by `UNFICT-ICONS-LIST v1.0`.

---

# 4. Canonical Brand Asset Immutability

The canonical Unfict mark is an identity asset, not a generic UI glyph.

The canonical mark SHALL NOT be:

- redrawn from memory;
- traced from a raster image;
- approximately reconstructed;
- rotated;
- stretched;
- recolored arbitrarily;
- merged;
- geometrically normalized;
- used as clip-art inside every icon.

Derived icons inherit **behavior**, not literal logo pieces.

Family lineage should come from:

- separation;
- controlled aperture behavior;
- directional tension;
- curvature;
- terminal construction;
- negative space;
- dominant/secondary mass hierarchy;
- controlled asymmetry.

---

# 5. Recognizable Before Distinctive

Universal interface functions SHALL preserve recognized metaphors.

For familiar actions such as Search, Close, Copy, Download, Settings, View, Pin and Calendar:

> **use the minimum Unfict customization necessary.**

For domain-specific concepts such as Resolver, Identifier, Authority, Delegation, GTIN, DPP and Provenance:

> **stronger proprietary geometry is permitted where semantics justify it.**

Never make an icon harder to understand merely to prove that it is custom.

---

# 6. Unfict Visual DNA

## 6.1 Controlled Separation

Distinct forms may remain visually related without being fused.

Use separation to express:

- source / destination;
- before / after;
- subject / object;
- input / output;
- relationship;
- bounded transfer;
- continuity across difference.

Avoid arbitrary floating fragments.

## 6.2 Unfict Aperture

Where semantically useful:

```text
continuous form
→ deliberate interruption
→ controlled negative space
→ related continuation
```

The aperture is structural, not decorative.

## 6.3 Directional Tension

When direction is semantically relevant, prefer the Unfict directional family around:

```text
36° ± 4°
```

Do not mechanically rotate every icon to this angle.

## 6.4 Soft Aerodynamic Geometry

Use:

- substantial but restrained mass;
- smooth curves;
- controlled rounded ends;
- softened directional terminals;
- clean straight structures where useful;
- deliberate asymmetry.

Avoid inflated, cute or cartoon-like geometry.

## 6.5 Controlled Negative Space

Negative space SHALL be designed deliberately.

Reject:

- micro-gaps;
- trapped slivers;
- collapsing apertures;
- accidental interior voids.

## 6.6 Controlled Asymmetry

Where appropriate, prefer:

```text
one dominant primary structure
+
one restrained secondary structure
```

rather than decorative bilateral symmetry.

---

# 7. Signature Restraint

For familiar functional icons:

> **No more than one obvious Unfict signature treatment.**

For domain/concept icons:

> **No more than two obvious signature treatments unless the asset is a Brand Motif.**

Permitted signature treatments include:

- directional diagonal;
- Unfict terminal;
- controlled aperture;
- designed negative-space break;
- restrained two-part relation;
- small governed Blue anchor.

Branding features SHALL NOT be added merely because space exists.

---

# 8. Canonical Geometry

Standard production frame:

```text
24 × 24
```

Canonical SVG root:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
>
```

Preferred visible geometry:

```text
approximately 20 × 20
```

Typical nominal inset:

```text
approximately 2 units
```

Optical overshoot:

```text
up to approximately 0.5 unit where required
```

Optical consistency wins over mechanical centering.

---

# 9. Stroke & Mass Language

Functional outline icons SHOULD default toward:

```text
stroke: approximately 2 units at 24-grid
line cap: round
line join: round
```

Filled or hybrid construction may be used where semantically justified.

Avoid:

- hairlines;
- cartoon-heavy strokes;
- arbitrary fill/outline mixing;
- tiny detail;
- unstable intersections.

At 24 units, prefer one primary silhouette and no more than roughly 2–3 interior ideas.

---

# 10. Small-Size Survival

The governed system SHALL support:

```text
16
20
24
32
40
48
```

with 64+ permitted for editorial/explanatory use.

The canonical 24-grid does not imply that mechanical scaling is always sufficient.

A small-size optimized source MAY exist when:

- aperture gaps collapse;
- details become illegible;
- terminal collisions occur;
- optical centering fails;
- negative space becomes unstable.

A small-size variant must preserve the same meaning, dominant silhouette, relationship and color policy.

---

# 11. Color System

Canonical colors:

```text
Deep Ink   #0A0D14
Slate      #596273
Unfict Blue #1965EC
```

The geometry SHALL work without color.

Functional icons default to monochrome and SHOULD use:

```text
currentColor
```

Governed two-tone domain icons MAY expose:

```text
PRIMARY = currentColor
ACCENT  = var(--uf-icon-accent, #1965EC)
```

For ordinary two-tone domain icons, Blue should generally remain a minority of visible mass:

```text
approximately 10–30% where appropriate
```

Blue is:

- an identity signal;
- a semantic anchor;
- an Unfict-owned structural role;
- a restrained focal point.

Blue is not wallpaper.

---

# 12. Semantic Status Color

Core SVG assets SHALL NOT permanently encode:

- red for Error;
- green for Success;
- yellow/orange for Warning;
- destructive red for Delete.

Status color belongs to the consuming design-system tokens.

The geometry must remain understandable in monochrome.

---

# 13. Runtime Implementation Classes

Every governed asset belongs to one of three production classes.

## Class 1 — Monochrome Functional

Typical collections:

```text
B
D
E
most of I
most of J
universal controls in F
```

Primary channel:

```text
currentColor
```

CSS masking MAY be used as a distribution adapter when the icon is strictly one-color.

## Class 2 — Governed Two-Tone Domain

Typical examples:

```text
Identifier
Resolver
Interface
API
Webhook
GTIN
DPP
Authentication
Permission
Provenance
```

Channels:

```text
currentColor
+
--uf-icon-accent
```

A single CSS mask is not the preferred implementation because it exposes only one visible color channel.

## Class 3 — Canonical Brand Asset

Examples:

```text
uf-motif-mark
```

Brand assets are color-governed separately and SHALL NOT automatically inherit arbitrary UI color.

---

# 14. One-Geometry Rule

If meaning and geometry are unchanged, theme or visual state SHALL NOT create a new source SVG.

Do not manually maintain:

```text
-search-light.svg
-search-dark.svg
-search-white.svg
-resolver-blue.svg
-resolver-mono.svg
```

Instead, use:

- `currentColor`;
- `--uf-icon-accent`;
- semantic design tokens;
- parent context;
- component state.

A change in **appearance** does not create a new icon.

A change in **meaning** may.

---

# 15. Geometry States vs Visual States

Separate governed geometries are valid where meaning changes:

```text
View / Hide
Pin / Unpin
Locked / Unlocked
Connected / Disconnected
Expand / Collapse
Arrow Right / Arrow Left
```

The following normally retain geometry:

```text
default / hover
default / selected
light / dark
normal / destructive
normal / success
normal / warning
enabled / disabled
```

These are presentation states.

---

# 16. Collection Behavior

## A — Brand Motifs

Maximum proprietary character.

Canonical Mark is immutable.

Motifs may be expressive and cropped but are not functional controls.

## B — Functional UI

Recognition first.

Monochrome by default.

No unnecessary Blue.

## C — Domain & Concept

Primary field for proprietary Unfict expression.

Strong semantic boundaries and monochrome viability are mandatory.

## D — Navigation & Workspace

Familiar workspace-control metaphors with restrained Unfict treatment.

## E — Content, Files & Communication

Ordinary content and communication actions rendered with precision rather than branding-for-branding's-sake.

## F — Developer, API & Data

Technical precision. Stronger proprietary behavior is concentrated in relationship concepts such as API, Webhook and Schema.

## G — GS1 & Connected Product

Concrete domain specialization subordinate to Collection C.

Visible carriers SHALL NOT substitute for underlying identity concepts.

## H — Identity, Access & Governance

Governance expressed through relationships and boundaries, not shields, locks, crowns or power symbolism.

## I — System, State & Temporal

State icons describe **what is happening now**, not why it is happening or what the user is entitled to do.

## J — Inspection, Visibility & Interaction

Immediate workspace interaction recognition with minimal customization.

---

# 17. Critical Semantic Boundaries

The system SHALL preserve at least these distinctions:

```text
Identifier ≠ Authentication
Digital Link ≠ QR Code
Resolver ≠ Router / Refresh
Validation ≠ Trust
Evidence ≠ Verification
Authority ≠ Ownership / Lock
Delegation ≠ Share
Capability ≠ Permission
Standing ≠ Role / Success
Outcome ≠ Success
Receipt ≠ Certification
Trade Item ≠ Product
GTIN ≠ Barcode
DPP ≠ Digital Link
Authentication ≠ Authority
Permission ≠ Authority
Scope ≠ Context
Claim ≠ Evidence
Revocation ≠ Delete
Expiry ≠ Time
Connected ≠ Relationship
Focus ≠ Scope
Pin ≠ Bookmark / Persistent
Resize ≠ Expand
```

Styling cannot repair incorrect semantic selection.

---

# 18. Originality

Final geometry SHALL be original.

Universal conventions may be studied for familiarity, but production icons SHALL NOT be:

- recolored Lucide;
- recolored Material Symbols;
- recolored Heroicons;
- recolored Phosphor;
- recolored Font Awesome;
- a stock SVG with a Blue fragment attached;
- traced third-party geometry represented as proprietary.

The objective is:

> **familiar semantics, original geometry.**

---

# 19. Vector Production Contract

Production SVGs SHALL:

- use a governed `viewBox`, normally `0 0 24 24`;
- contain vector geometry only;
- contain no embedded raster;
- contain no gradients;
- contain no text nodes;
- avoid filters, shadows, glow and 3D effects;
- avoid unnecessary masks/clip paths;
- avoid editor metadata and hidden layers;
- use deterministic path ordering;
- avoid unstable transforms where practical;
- expose no more than two public color channels;
- use `currentColor` for normal foreground where appropriate;
- use `var(--uf-icon-accent, #1965EC)` only when a governed accent exists.

Product code SHALL NOT mutate internal path geometry.

---

# 20. Manifest Requirement

Every production icon SHALL have a machine-readable manifest record.

Minimum policy fields:

```text
id
name
family
collection
source
viewBox
colorChannels
defaultTone
allowedTones
blueAccentAllowed
semanticColorAllowed
monochromeSafe
smallOptimized
sizes
accessibilityMode
brandLocked
semanticStatus
```

Production entries SHALL normally be:

```text
semanticStatus = governed
monochromeSafe = true
```

The manifest is implementation governance expressed as data.

---

# 21. Runtime Gateway

The preferred runtime gateway is the governed icon component, conceptually:

```jsx
<UfIcon
  name="resolver"
  size=24
  tone="brand"
  decorative
/>
```

Recommended priority:

```text
1. generated component
2. inline SVG
3. controlled SVG sprite
4. CSS mask for strictly monochrome icons
5. <img> for static/fixed appearance only
```

The component should:

- resolve the governed ID;
- validate tones;
- resolve small-size variants;
- apply dimensions;
- expose contextual foreground/accent;
- apply accessibility behavior;
- prevent arbitrary internal path styling.

---

# 22. Accessibility

Decorative icons SHOULD be hidden from the accessibility tree.

Icon-only controls MUST have an accessible action name owned by the control.

Meaningful static icons require an accessible text equivalent when meaning is not otherwise present.

Unfamiliar domain concepts SHOULD normally appear as:

```text
icon + visible text label
```

Status SHALL NOT rely on color alone.

Animated icons SHALL respect reduced-motion preferences.

---

# 23. Diagram Language

Icons identify semantic nouns.

Lines express relationships.

Text explains meaning.

Default diagrams should use:

- direct connectors;
- minimal bends;
- restrained Border Gray / Slate;
- Unfict Blue only for current path, active resolution or Unfict-owned semantic anchor;
- icon + short label;
- plain neutral fields.

Avoid decorative node webs, glowing routes, particle effects and 3D diagram nodes.

---

# 24. AI / Human Authoring Contract

Any author generating or extending the set SHALL ingest:

1. `BRAND-001 v3.0`;
2. `UNFICT-ICONOGRAPHY-001 v1.0`;
3. `UNFICT-ICONS-LIST v1.0`;
4. `UNFICT Universal Icon Illustration Design Instruction v1.0`;
5. the relevant icon-specific Collection A–J Function block;
6. canonical Unfict mark and logo vectors;
7. current design-system tokens where applicable.

The author SHALL NOT redefine semantic meaning or invent capability authorization.

---

# 25. Quality Gates

Every icon must pass:

### Semantic
Correct meaning; no stronger adjacent claim.

### Recognition
As recognizable as its category reasonably permits.

### Unfict Character
Family lineage present in geometry, not color alone.

### Restraint
No unnecessary custom treatment.

### Originality
Original geometry.

### Small Size
16–20 px survival.

### Monochrome
Meaning survives removal of Blue.

### Theme
Light and dark viability.

### Accessibility
Can be consumed accessibly.

### Metadata
Manifest record is complete.

### Production
SVG passes deterministic lint and build validation.

Failure of any mandatory gate blocks production publication.

---

# 26. Anti-Patterns

Reject:

- stock icon packs recolored Blue;
- logo fragments pasted into generic symbols;
- cute pictograms or mascots;
- emoji-like geometry;
- 3D / glass / neon / gradient icons;
- arbitrary futuristic abstraction;
- shields for Trust;
- padlocks for Authority;
- crowns for Ownership;
- checkmarks for Evidence;
- chains for Receipt;
- QR Code as Digital Link;
- barcode as product identity;
- icon-only unfamiliar navigation;
- state variants maintained as duplicate source SVGs.

---

# 27. Package Structure

Recommended source-of-truth layout:

```text
/unfict-iconography/
├── README.md
├── svg/
│   ├── motifs/
│   ├── functional/
│   ├── domain/
│   ├── navigation/
│   ├── content/
│   ├── developer/
│   ├── gs1/
│   ├── governance/
│   ├── state/
│   └── interaction/
├── metadata/
│   └── MANIFEST.json
├── css/
├── components/
│   └── generated/
├── sprite/
│   └── unfict-icons.svg
└── preview/
```

Generated components, sprites, fixed-color SVGs, PNGs and preview boards are derivatives.

The canonical source directory is the geometric authority.

---

# 28. Expansion & Change Control

New icons require:

1. semantic definition;
2. exact `does_not_mean`;
3. collection assignment;
4. proof that no existing icon serves the same job;
5. 24-grid geometry;
6. minimum-size test;
7. monochrome test;
8. runtime-color policy;
9. manifest entry;
10. semantic and visual review.

Do not draw first and define later.

Do not silently alias adjacent concepts.

---

# 29. v1.0 Ratification Decisions

Version 1.0 ratifies the system for implementation and supersedes the v0.3 pilot-stage posture.

Specifically:

- the full A–J vocabulary is now governed;
- the canonical inventory is fixed at 127 assets;
- the earlier “do not generate the full set before pilot approval” rule is retired for this established family;
- future additions that introduce a new visual grammar MAY require a focused pilot;
- the 24-grid, monochrome requirement, Blue discipline and semantic precision rules remain;
- the one-geometry runtime architecture is now normative;
- `currentColor`, governed accent channels, manifest policy and runtime-component consumption are formally integrated into the iconography standard.

---

# 30. Closing Doctrine

> **The logo establishes identity. The icon system extends its character.**

> **Recognizable first. Proprietary second. Decorative never.**

> **Use the smallest amount of Unfict character necessary to make the system recognizably ours.**

> **Do not strengthen semantics visually.**

> **Do not make every interface element Blue.**

> **Do not paste the logo into every icon.**

> **One coherent visual grammar is stronger than fifty clever symbols.**

> **One meaning. One governed geometry. One source of truth. Many valid contexts.**

---

**End of `UNFICT-ICONOGRAPHY-001 v1.0 — RATIFIED`**
