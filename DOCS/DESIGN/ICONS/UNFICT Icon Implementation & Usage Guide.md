# UNFICT-ICON-IMPLEMENTATION-GUIDE-001

## Canonical SVG Architecture, Contextual Styling & Runtime Usage

**Version:** 0.1  
**Status:** DRAFT — IMPLEMENTATION HELPER / COMPANION SPECIFICATION  
**Date:** 17 September 2026  
**Authority Domain:** Brand · Product Experience · Frontend Implementation · Design System · Developer Experience  
**Applies To:** Public website · Unfict product UI · developer surfaces · host-native surfaces · documentation · diagrams · applications · design-system implementations  
**Coordinates With:** `UNFICT-ICONOGRAPHY-001` · Universal Illustration Design Instruction · Collections A–J · applicable Brand and ZyUX authorities  
**Nature:** Implementation helper. Does not redefine icon semantics, canonical geometry, Brand authority, product capability, or interface authorization.

---

# 0. Purpose

This document defines how governed Unfict icons should be stored, implemented, styled, themed, and rendered in production.

The governing implementation principle is:

> **ONE GOVERNED SVG GEOMETRY PER ICON. CONTEXT CONTROLS APPEARANCE.**

Unfict SHOULD NOT maintain separate geometric source files merely to represent:

- Light mode;
- Dark mode;
- monochrome mode;
- Unfict color mode;
- hover;
- active;
- selected;
- disabled;
- success;
- warning;
- error;
- destructive action.

Those differences should normally be produced by:

- `currentColor`;
- governed CSS variables;
- semantic design tokens;
- component properties;
- parent context;
- interaction state;
- accessible state.

The icon remains geometrically stable.

This implements the existing iconography principle that state should normally be expressed through color, container, text, focus treatment, or surrounding interface rather than by redrawing the glyph.

---

# 1. Relationship to the Iconography Specification

`UNFICT-ICONOGRAPHY-001` remains the authority for:

- icon semantics;
- master grid;
- visual grammar;
- stroke system;
- Unfict visual DNA;
- Blue usage;
- icon naming;
- semantic distinctions;
- accessibility principles;
- approved icon families;
- canonical asset treatment.

This implementation guide governs:

- how SVG files are authored for runtime styling;
- how one icon supports Light and Dark surfaces;
- how monochrome and governed two-tone rendering work;
- how CSS interacts with SVG geometry;
- how icons are consumed in components;
- how state and semantic color are applied;
- how preview/export variants are generated;
- how implementation avoids unnecessary duplicate files.

The two documents should therefore be understood as:

```text
UNFICT-ICONOGRAPHY-001
        │
        │ governs
        ▼
WHAT THE ICON IS
meaning
geometry
visual grammar
semantic boundary
family behavior

        +

UNFICT-ICON-IMPLEMENTATION-GUIDE-001
        │
        │ governs
        ▼
HOW THE ICON IS USED
SVG structure
CSS
themes
tokens
components
runtime behavior
```

---

# 2. Core Architecture

The canonical architecture is:

```text
                    GOVERNED ICON
                         │
                         ▼
              uf-icon-resolver.svg
                         │
          one canonical SVG geometry
                         │
             ┌───────────┼───────────┐
             │           │           │
             ▼           ▼           ▼
       Inline SVG     Component     Sprite
             │           │           │
             └───────────┼───────────┘
                         │
                         ▼
                 CSS / Design Tokens
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
      LIGHT             DARK          SEMANTIC STATE
   Ink + Blue       White + Blue    Contextual token
        │                │                │
        └────────────────┼────────────────┘
                         ▼
                 SAME GEOMETRY
```

The geometry is authoritative.

The appearance is contextual.

---

# 3. Canonical Source Rule

Every standard Unfict icon SHALL have one governed source SVG unless a genuinely different geometry is semantically required.

Example:

```text
uf-icon-search.svg
uf-icon-resolver.svg
uf-icon-dpp.svg
uf-icon-warning.svg
```

Do not create files such as:

```text
uf-icon-search-light.svg
uf-icon-search-dark.svg
uf-icon-search-white.svg
uf-icon-search-blue.svg

uf-icon-resolver-light.svg
uf-icon-resolver-dark.svg
uf-icon-resolver-color.svg
uf-icon-resolver-mono.svg

uf-icon-warning-red.svg
uf-icon-warning-yellow.svg
```

These are appearance variants, not new icons.

Appearance belongs primarily to the interface layer.

---

# 4. Geometry Is Independent of Display Resolution

The canonical production coordinate system remains:

```text
viewBox="0 0 24 24"
```

The Unfict iconography system establishes 24 × 24 as the master production frame, with approximately 20 × 20 preferred visible geometry and optical correction where required.

The master SVG is therefore not a “24-pixel image.”

It is a vector coordinate system.

The same SVG may be rendered at:

```text
16 × 16
20 × 20
24 × 24
32 × 32
40 × 40
48 × 48
64 × 64
128 × 128
256 × 256
512 × 512
1024 × 1024
```

without raster-resolution loss.

Therefore:

> **512 × 512 is a rendering size, not an SVG master size requirement.**

For standard Unfict icons, use:

```svg
viewBox="0 0 24 24"
```

and control rendered dimensions externally.

---

# 5. Recommended Package Structure

The production repository SHOULD use a structure comparable to:

```text
/unfict-iconography/
├── README.md
│
├── svg/
│   ├── motifs/
│   │   ├── uf-motif-mark.svg
│   │   ├── uf-motif-a.svg
│   │   ├── uf-motif-b.svg
│   │   └── ...
│   │
│   ├── functional/
│   │   ├── uf-icon-search.svg
│   │   ├── uf-icon-close.svg
│   │   ├── uf-icon-copy.svg
│   │   └── ...
│   │
│   ├── domain/
│   ├── navigation/
│   ├── content/
│   ├── developer/
│   ├── gs1/
│   ├── governance/
│   ├── state/
│   └── interaction/
│
├── css/
│   ├── unfict-icon-tokens.css
│   └── unfict-icons.css
│
├── metadata/
│   └── MANIFEST.json
│
├── components/
│   └── generated/
│
├── sprite/
│   └── unfict-icons.svg
│
└── preview/
    ├── light/
    ├── dark/
    ├── monochrome/
    ├── color/
    ├── 16/
    ├── 20/
    ├── 24/
    └── accessibility/
```

The `/preview/` directory contains rendered demonstrations.

It is not the source of truth.

---

# 6. Three Implementation Classes

For runtime color behavior, every governed Unfict asset should belong to one of three implementation classes.

---

## 6.1 Class 1 — Monochrome Functional Icon

Examples:

- Search;
- Close;
- Menu;
- Copy;
- Plus;
- Delete;
- Upload;
- Calendar;
- View;
- Pin;
- Drag.

These icons should normally contain:

```text
one color channel
```

That channel is:

```css
currentColor
```

Example:

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

The icon inherits the CSS `color` property.

This conforms directly to the functional-icon doctrine.

---

## 6.2 Class 2 — Governed Two-Tone Domain Icon

Examples may include:

- Identifier;
- Digital Link;
- Resolver;
- Persistent;
- Interface;
- Relationship;
- Authority;
- API;
- Webhook;
- GTIN;
- DPP.

These may contain:

```text
PRIMARY
+
ACCENT
```

The primary channel follows `currentColor`.

The accent channel is governed separately.

Recommended pattern:

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
  />

  <path
    d="..."
    fill="var(--uf-icon-accent, #1965EC)"
  />
</svg>
```

The fallback:

```text
#1965EC
```

is canonical Unfict Blue.

The CSS custom property permits contextual override.

Collection C explicitly permits restrained Blue accents while requiring complete monochrome viability.

---

## 6.3 Class 3 — Canonical Brand Asset

Examples:

- `uf-motif-mark`;
- other specifically governed canonical Brand assets.

These are not ordinary context-sensitive UI glyphs.

The canonical mark SHALL NOT automatically inherit arbitrary contextual colors.

The Brand authority governs its approved appearance.

The mark is canonical and immutable.

Therefore:

> **Do not treat `uf-motif-mark` as merely another `currentColor` icon.**

---

# 7. The `currentColor` Principle

`currentColor` refers to the computed CSS `color` value of the SVG or its surrounding element.

Example:

```html
<button class="action">
  <svg class="uf-icon">...</svg>
  Continue
</button>
```

```css
.action {
  color: #0A0D14;
}
```

If the icon uses:

```svg
stroke="currentColor"
```

it becomes:

```text
Deep Ink
```

without requiring an icon-specific color rule.

Change:

```css
.action {
  color: #ffffff;
}
```

and the same SVG becomes white.

No second SVG is necessary.

---

# 8. Recommended Base CSS

A minimal shared implementation may begin with:

```css
.uf-icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;

  flex: 0 0 auto;

  color: inherit;
  vertical-align: middle;

  --uf-icon-accent: #1965EC;
}
```

The icon can now inherit typography/interface foreground color naturally.

---

# 9. Canonical Unfict Icon Tokens

The implementation SHOULD consume the product design system rather than hard-code arbitrary runtime colors.

Illustrative token layer:

```css
:root {
  --uf-ink: #0A0D14;
  --uf-slate: #596273;
  --uf-blue: #1965EC;

  --uf-icon-fg: var(--uf-ink);
  --uf-icon-accent: var(--uf-blue);
}
```

Where available, semantic product tokens should supersede literal values.

Example:

```css
:root {
  --uf-icon-default: var(--color-foreground-primary);
  --uf-icon-muted: var(--color-foreground-secondary);
  --uf-icon-brand: var(--brand-unfict-blue);

  --uf-icon-success: var(--color-status-success);
  --uf-icon-warning: var(--color-status-warning);
  --uf-icon-error: var(--color-status-error);
  --uf-icon-disabled: var(--color-foreground-disabled);
}
```

The iconography specification explicitly states that disabled and semantic status colors should come from the governing UI system rather than inventing new icon-specific palettes.

---

# 10. Standard Display Modes

The implementation SHOULD expose a small number of governed rendering modes.

Recommended vocabulary:

```text
inherit
mono
brand
muted
semantic
disabled
```

Avoid unnecessary variant proliferation.

---

# 10.1 `inherit`

The glyph inherits the surrounding text/interface color.

```css
.uf-icon--inherit {
  color: inherit;
}
```

Typical use:

- buttons;
- menu items;
- links;
- labels;
- toolbar controls.

---

# 10.2 `mono`

All icon geometry collapses to one foreground color.

```css
.uf-icon--mono {
  --uf-icon-accent: currentColor;
}
```

A two-tone Resolver therefore becomes fully monochrome without requiring a second SVG.

Example:

```text
Primary = Ink
Accent  = Ink
```

or:

```text
Primary = White
Accent  = White
```

depending on context.

---

# 10.3 `brand`

Primary geometry follows foreground context.

The governed Unfict-owned accent remains Blue.

```css
.uf-icon--brand {
  --uf-icon-accent: var(--uf-blue);
}
```

Example on a light surface:

```text
Primary = Deep Ink
Accent  = Unfict Blue
```

Example on a dark surface:

```text
Primary = White
Accent  = Unfict Blue
```

This mode is appropriate only for icons whose semantic specification allows a Blue accent.

---

# 10.4 `muted`

Used for secondary UI hierarchy.

```css
.uf-icon--muted {
  color: var(--uf-icon-muted);
}
```

If the icon should remain two-tone:

```css
.uf-icon--muted.uf-icon--brand {
  color: var(--uf-icon-muted);
  --uf-icon-accent: var(--uf-blue);
}
```

---

# 10.5 `semantic`

Used when the surrounding interface state has explicit semantic status.

Examples:

```css
.status-success {
  color: var(--uf-icon-success);
}

.status-warning {
  color: var(--uf-icon-warning);
}

.status-error {
  color: var(--uf-icon-error);
}
```

The geometry remains unchanged.

---

# 10.6 `disabled`

```css
.uf-icon--disabled {
  color: var(--uf-icon-disabled);
  --uf-icon-accent: currentColor;
}
```

Disabled treatment should normally flatten unnecessary accent distinction.

---

# 11. Light Surface Behavior

The preferred default on normal light surfaces is:

### Functional icon

```text
Deep Ink
```

or inherited foreground.

### Domain icon

Where governed:

```text
Primary = Deep Ink
Accent  = Unfict Blue
```

Example:

```css
.surface-light {
  color: var(--uf-ink);
}
```

The surrounding surface should not require a Light-specific SVG.

---

# 12. Dark Surface Behavior

On an authorized dark surface:

### Functional icon

```text
appropriate light foreground
```

Usually:

```text
white or governed high-contrast foreground token
```

### Domain icon

Where Blue is semantically authorized:

```text
Primary = light foreground
Accent  = Unfict Blue
```

Example:

```css
.surface-dark {
  color: var(--color-foreground-on-dark);
}

.surface-dark .uf-icon {
  --uf-icon-accent: var(--uf-blue);
}
```

The existing iconography specification states that dark surfaces should use appropriate foreground treatment while retaining Blue only where contrast and Brand governance permit it.

---

# 13. Automatic Theme Switching

A theme container can control all icons beneath it.

Example:

```css
[data-theme="light"] {
  --uf-icon-default: #0A0D14;
}

[data-theme="dark"] {
  --uf-icon-default: #ffffff;
}
```

```css
.uf-icon {
  color: var(--uf-icon-default);
}
```

The icon file remains identical.

This architecture also works with:

```css
@media (prefers-color-scheme: dark)
```

where system-controlled theme behavior is appropriate.

Application-level theme state should normally take precedence over operating-system preference if the product provides an explicit user theme selection.

---

# 14. Contextual Placement

Because icons inherit foreground context, placement may determine their appearance.

Example:

```html
<nav class="sidebar">
  <a class="nav-item">
    [icon]
    Resources
  </a>
</nav>
```

```css
.nav-item {
  color: var(--color-foreground-secondary);
}

.nav-item:hover {
  color: var(--color-foreground-primary);
}

.nav-item[aria-current="page"] {
  color: var(--uf-blue);
}
```

The glyph requires no modification.

---

# 15. Semantic State Color Must Not Be Embedded in the Asset

This is especially important for:

- Warning;
- Success;
- Error;
- Delete;
- Unavailable;
- Processing;
- Locked;
- Unlocked.

For example:

`uf-icon-error.svg` SHOULD NOT permanently contain red.

`uf-icon-success.svg` SHOULD NOT permanently contain green.

`uf-icon-warning.svg` SHOULD NOT permanently contain orange or yellow.

The iconography specification explicitly requires these symbols to work without color.

Use:

```css
.alert-error {
  color: var(--color-status-error);
}
```

rather than:

```svg
stroke="#ff0000"
```

inside the asset.

---

# 16. Delete Is Not Inherently Red

The Delete icon represents:

```text
destructive removal
```

but its file does not represent:

```text
the red color
```

Therefore:

```html
<button class="toolbar-action">
  [delete icon]
</button>
```

may render neutrally.

While:

```html
<button class="danger-action">
  [delete icon]
  Delete resource
</button>
```

inherits the governed destructive color.

The context carries the action state.

---

# 17. Blue Is Not a Generic Active Color

Unfict Blue is not decorative wallpaper.

The existing system defines it as:

- identity signal;
- active semantic anchor;
- Unfict-owned element;
- restrained focal point.

The Universal Illustration Design Instruction requires color to confirm identity rather than manufacture it.

Therefore:

Do not automatically make every selected icon Blue.

A product state may use Blue if the governing design system defines that behavior, but this is different from embedding Blue permanently into every icon.

---

# 18. Two-Tone Domain Icon Rule

Two-tone implementation exists only when the semantic icon design genuinely contains two visual roles.

Example:

```text
Resolver

PRIMARY
infrastructure geometry

ACCENT
governed resolution point
```

The accent should correspond to a meaningful structural role.

It should not be:

```text
“some random blue part so the icon looks branded”
```

This preserves the Blue mass discipline established for domain icons.

---

# 19. Recommended SVG Structure — Outline Functional Icon

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="..." />
</svg>
```

Use when the entire glyph has one optical stroke language.

---

# 20. Recommended SVG Structure — Filled Functional Icon

Where filled geometry is semantically/design-wise justified:

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="currentColor"
>
  <path d="..." />
</svg>
```

---

# 21. Recommended SVG Structure — Hybrid Domain Icon

```svg
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
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

The exact structure depends on governed geometry.

Do not force every domain icon into the same implementation pattern if its design requires a different combination of fills and strokes.

---

# 22. Do Not Use `<img>` for Theme-Sensitive Icons

Avoid relying on:

```html
<img src="/icons/uf-icon-resolver.svg" alt="">
```

when the icon must inherit CSS color dynamically.

An SVG loaded as an external image is isolated from the surrounding document CSS.

Therefore surrounding properties such as:

```css
color:
--uf-icon-accent:
```

will not behave like they do with an inline SVG.

`<img>` is acceptable when:

- the exported appearance is already final;
- contextual recoloring is unnecessary;
- the SVG is being used more like a static image asset.

It is not the preferred runtime mechanism for dynamic Unfict icons.

---

# 23. Preferred Runtime Implementation

Recommended priority:

```text
1. Generated icon component
2. Inline SVG
3. Controlled SVG sprite
4. CSS mask for strictly monochrome use
5. <img> for static/fixed appearance only
```

---

# 24. Component-Based Implementation

A component system is the preferred production architecture for Unfict applications.

Illustrative API:

```jsx
<UfIcon
  name="resolver"
  size={24}
  tone="brand"
/>
```

Other examples:

```jsx
<UfIcon name="search" />
```

```jsx
<UfIcon
  name="delete"
  tone="inherit"
/>
```

```jsx
<UfIcon
  name="warning"
  tone="semantic"
/>
```

```jsx
<UfIcon
  name="identifier"
  tone="mono"
/>
```

The exact framework syntax is repository-specific.

This specification governs behavior, not a specific frontend framework.

---

# 25. Recommended Component Properties

A minimal component interface may expose:

```text
name
size
tone
className
aria-label / accessible title behavior
```

Example conceptual schema:

```text
name:
  governed icon ID/name

size:
  16
  20
  24
  32
  40
  48

tone:
  inherit
  mono
  brand
  muted
  semantic
  disabled
```

Do not expose dozens of visual variants without real product need.

---

# 26. Geometry State vs Visual State

This distinction is mandatory.

## Visual state

Examples:

```text
hover
active
selected
disabled
focused
warning
error
success
dark mode
light mode
```

Usually:

> **same geometry**

Change:

- color;
- accent;
- container;
- background;
- opacity where governed;
- focus ring.

---

## Geometry state

Examples where a different icon really represents a different meaning:

```text
View / Hide
Locked / Unlocked
Pin / Unpin
Expand / Collapse
Connected / Disconnected
```

These are not merely color states.

They represent semantically different glyph states and therefore legitimately have separate governed IDs.

The Collection J specification explicitly defines Pin/Unpin and View/Hide as related but distinct geometry.

Collection I similarly defines Locked/Unlocked and Connected/Disconnected as paired semantic assets.

---

# 27. CSS Mask Usage

CSS masks may be useful for simple external monochrome icons.

Example:

```css
.uf-mask-icon {
  width: 24px;
  height: 24px;

  background-color: currentColor;

  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;

  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: contain;
}
```

Example icon assignment:

```css
.uf-mask-icon--search {
  -webkit-mask-image: url("/icons/uf-icon-search.svg");
  mask-image: url("/icons/uf-icon-search.svg");
}
```

This works well when:

```text
the icon is strictly one color.
```

It is not the preferred implementation for governed two-tone domain icons because a single mask produces one visible color channel.

Therefore:

```text
Functional monochrome icon
→ mask MAY be appropriate

Two-tone Resolver / Identifier / DPP
→ use inline/component SVG
```

---

# 28. SVG Sprite Usage

A sprite may contain:

```svg
<symbol id="uf-icon-search" viewBox="0 0 24 24">
  ...
</symbol>
```

then be consumed through:

```html
<svg class="uf-icon">
  <use href="#uf-icon-search"></use>
</svg>
```

or through a generated sprite resource.

Advantages:

- central asset cache;
- reduced repeated markup;
- consistent IDs;
- efficient large-library distribution.

However, the implementation must verify:

- `currentColor`;
- CSS custom-property inheritance;
- external sprite behavior;
- build environment;
- target browser behavior.

For maximum styling reliability, applications may generate inline components from the same canonical SVG source.

---

# 29. One Source, Multiple Outputs

A build pipeline may transform:

```text
svg/functional/uf-icon-search.svg
```

into:

```text
React component
Vue component
Web Component
SVG symbol
standalone SVG export
documentation preview
PNG preview
Figma import source
```

This does not create multiple authorities.

They are generated derivatives.

The canonical source remains:

```text
uf-icon-search.svg
```

---

# 30. Small-Size Variants

The one-geometry rule does not prohibit small-size optimized geometry where optical testing proves it necessary.

The governing iconography document explicitly allows small-size optimization at 16 px and 20 px.

Therefore an icon MAY have:

```text
uf-icon-resolver.svg
uf-icon-resolver-16.svg
```

if and only if:

- simplification is genuinely required;
- critical gaps collapse at small sizes;
- optical correction cannot be solved through rendering alone;
- the variant preserves the same semantic concept;
- the variant is governed.

Do not create size variants mechanically for every icon.

---

# 31. Allowed Filename Variants

Where genuinely required, the existing system permits suffixes such as:

```text
-16
-20
-24
-active
-filled
-outline
```

But their use should remain exceptional and semantic.

Do not create:

```text
-final
-final2
-dark
-light
-white
-new
-v4-real
```

Appearance does not belong in filenames unless a separate exported artifact is specifically required.

---

# 32. Preview Variants Are Not Source Variants

For design review, Unfict MAY generate:

```text
preview/light/uf-icon-resolver.png
preview/dark/uf-icon-resolver.png
preview/mono/uf-icon-resolver.png
preview/color/uf-icon-resolver.png
```

These are useful.

They are not independent icon sources.

The distinction should remain explicit:

```text
SOURCE
one SVG

PREVIEWS
many rendered contexts
```

---

# 33. Monochrome Validation

Every functional and domain icon SHALL pass a monochrome test.

For two-tone icons:

```css
.icon-test-mono {
  color: #000;
  --uf-icon-accent: currentColor;
}
```

The icon must remain semantically coherent.

If the meaning disappears when Blue is removed:

> the geometry is insufficient and should be revised.

This requirement comes directly from the iconography doctrine.

---

# 34. Dark-Mode Validation

Every production icon should be evaluated on:

```text
light neutral field
dark authorized field
```

Check:

- stroke visibility;
- Blue contrast;
- negative-space survival;
- internal separation;
- accent balance;
- optical mass.

The dark version is a test context.

It is not normally a separate SVG.

---

# 35. Status Validation

For status icons:

```text
Info
Warning
Success
Error
Pending
Processing
Unavailable
```

test in:

```text
monochrome
governed semantic color
high contrast
disabled context
```

The symbol itself must remain understandable without semantic hue.

---

# 36. Accessibility — Decorative Icons

If the icon merely repeats visible textual meaning:

```html
<button>
  [search icon]
  Search
</button>
```

the icon should normally be hidden from the accessibility tree.

Illustrative implementation:

```html
<svg aria-hidden="true">
  ...
</svg>
```

This avoids duplicate announcements.

---

# 37. Accessibility — Icon-Only Buttons

An icon-only interactive control MUST have an accessible name.

Example:

```html
<button aria-label="Copy Digital Link URI">
  [copy icon]
</button>
```

Prefer:

```text
Copy Digital Link URI
```

over merely:

```text
Copy
```

when contextual precision is available.

This is consistent with the accessibility behavior defined by the iconography specification.

---

# 38. Accessibility — Informational Icons

If an icon conveys information that is not otherwise expressed in nearby text, provide an accessible text equivalent.

Do not rely on:

- color alone;
- visual icon alone;
- tooltip alone.

---

# 39. Icon + Text Rule

For unfamiliar Unfict domain concepts:

```text
icon + explicit text label
```

should remain the normal pattern on first or primary use.

Examples:

```text
[Resolver icon] Resolver

[Authority icon] Authority

[Digital Product Passport icon] Digital Product Passport
```

Do not assume users have learned proprietary icon semantics merely because the glyph exists.

---

# 40. Tooltip Rule

Tooltips may clarify an icon.

They should not compensate for insufficient navigation labeling.

For unfamiliar domain navigation:

```text
icon + label
```

is preferred over:

```text
icon only + tooltip
```

---

# 41. Size API

Recommended component sizes:

```text
16 — dense / compact
20 — compact default
24 — standard
32 — prominent control
40 — concept marker
48 — feature / explanatory
```

For larger editorial use:

```text
64+
```

may render the same governed vector if detail remains appropriate.

---

# 42. Do Not Arbitrarily Change Stroke Width at Runtime

An icon authored around a 2-unit stroke on the 24-grid should normally scale proportionally with its SVG.

Do not override:

```css
stroke-width:
```

per placement unless an explicitly governed implementation requires it.

Stroke weight is part of icon geometry and family consistency.

Color is contextual.

Stroke architecture generally is not.

---

# 43. Do Not Stretch Icons

Maintain aspect ratio.

Correct:

```css
width: 24px;
height: 24px;
```

Incorrect:

```css
width: 32px;
height: 18px;
```

unless the asset itself has a deliberately non-square governed canvas.

Standard Unfict icons use a square frame.

---

# 44. Do Not Rotate Icons for Convenience

Do not turn:

```text
Arrow Right
```

into:

```text
Arrow Left
```

at runtime merely by rotating the component unless the component system has explicitly governed that behavior.

The iconography system requires optical rather than merely mechanical correction for directional counterparts.

Therefore:

```text
uf-icon-arrow-right
uf-icon-arrow-left
```

remain distinct governed icons.

---

# 45. Do Not Flip Domain Icons

A domain icon's geometry may contain:

- direction;
- hierarchy;
- semantic asymmetry;
- source/destination meaning.

Therefore CSS such as:

```css
transform: scaleX(-1);
```

should not be used casually.

Mirroring may change meaning.

---

# 46. Do Not Modify Path Geometry in Product Code

Application code should not independently:

- move paths;
- delete parts;
- add decorative shapes;
- alter aperture widths;
- recolor individual unnamed paths arbitrarily;
- fuse elements;
- convert outline to fill.

Geometry belongs to the governed icon asset.

If a new semantic form is required:

> create or govern a proper icon variant.

---

# 47. Hover Behavior

Hover should normally change interface treatment rather than geometry.

Examples:

```css
.icon-button:hover {
  color: var(--color-foreground-primary);
}
```

or:

```css
.icon-button:hover {
  background: var(--color-surface-hover);
}
```

The icon does not need a “hover SVG.”

---

# 48. Focus Behavior

Focus belongs primarily to the control/container.

Example:

```css
.icon-button:focus-visible {
  outline: var(--focus-ring);
}
```

Do not use a new icon drawing to indicate keyboard focus.

---

# 49. Selected State

Selected state may use:

- foreground color;
- Blue where governed;
- background;
- border;
- indicator;
- text weight.

Example:

```css
.nav-item[aria-current="page"] {
  color: var(--uf-blue);
}
```

The icon geometry remains unchanged.

---

# 50. Active Domain Accent

Where a domain icon already contains a governed accent, active state should not automatically increase its Blue mass dramatically.

For example:

```text
Resolver default:
Ink + Blue resolution point

Resolver selected:
same icon + selected container
```

is usually preferable to:

```text
entire Resolver suddenly solid Blue
```

unless the product system explicitly defines that treatment.

This preserves Blue restraint.

---

# 51. Semantic Context Must Control Meaning

The same generic icon can participate in different contexts without changing its semantic definition.

Example:

```text
Trash icon + “Delete resource”
```

means destructive resource deletion.

It should not be reused as:

```text
Revoke credential
```

because Revocation is a different governed semantic concept.

Collection H explicitly distinguishes Revocation from Delete.

Styling cannot correct semantic misuse.

Correct icon selection comes first.

---

# 52. Domain Specialization Must Remain Distinct

The implementation layer must preserve distinctions such as:

```text
GTIN ≠ Barcode
QR Code ≠ Digital Link
DPP ≠ Resource
Trade Item ≠ Product
```

Collection G specifically protects these boundaries.

Do not reuse a visually convenient carrier icon simply because it can be recolored.

---

# 53. CSS Cannot Replace Semantic Governance

The one-SVG architecture does not mean:

```text
one shape can mean anything depending on color.
```

The architecture means:

```text
one semantic icon
+
one governed geometry
+
multiple contextual visual appearances
```

Not:

```text
one generic geometry
+
different colors
=
different meanings
```

Semantic distinctions remain structural.

---

# 54. Design-System API Recommendation

A mature Unfict implementation may expose an API conceptually similar to:

```jsx
<UfIcon
  name="resolver"
  size={24}
  tone="brand"
  decorative
/>
```

For an icon button:

```jsx
<IconButton
  label="Copy Digital Link URI"
  icon="copy"
/>
```

For a status:

```jsx
<Status
  kind="warning"
  icon="warning"
>
  Review required
</Status>
```

For domain navigation:

```jsx
<NavItem
  icon="identifier"
  label="Identifiers"
/>
```

The application API should make correct usage easy.

---

# 55. Suggested `UfIcon` Behavioral Contract

Conceptually:

```text
UfIcon
│
├── resolves governed icon by ID/name
├── selects small-size optimized source if required
├── applies requested rendered dimensions
├── inherits currentColor
├── exposes governed accent property
├── applies accessible behavior
└── never changes semantic geometry based only on theme
```

---

# 56. Recommended CSS API

Example:

```css
.uf-icon {
  color: inherit;
  --uf-icon-accent: var(--uf-blue);
}

.uf-icon[data-tone="mono"] {
  --uf-icon-accent: currentColor;
}

.uf-icon[data-tone="brand"] {
  --uf-icon-accent: var(--uf-blue);
}

.uf-icon[data-tone="muted"] {
  color: var(--uf-icon-muted);
}

.uf-icon[data-tone="disabled"] {
  color: var(--uf-icon-disabled);
  --uf-icon-accent: currentColor;
}
```

Status color should often remain on the parent component:

```css
.status[data-status="error"] {
  color: var(--color-status-error);
}
```

This allows the icon and accompanying text to communicate the same state coherently.

---

# 57. Recommended Light/Dark Pattern

```css
:root,
[data-theme="light"] {
  --uf-icon-primary: #0A0D14;
  --uf-icon-muted: #596273;
}

[data-theme="dark"] {
  --uf-icon-primary: #ffffff;
  --uf-icon-muted: var(--color-foreground-secondary-on-dark);
}

.uf-icon {
  color: var(--uf-icon-primary);
}
```

Then:

```css
.uf-icon--brand {
  --uf-icon-accent: #1965EC;
}
```

No source SVG changes.

---

# 58. Standalone SVG Export Behavior

Some Unfict SVGs may be downloaded or used outside the application component system.

For functional icons, `currentColor` may depend on how the consuming environment interprets the SVG.

For governed two-tone domain icons, the SVG may use:

```svg
var(--uf-icon-accent, #1965EC)
```

This allows:

- Blue fallback when rendered directly;
- contextual override when embedded inline.

If a distribution target does not support CSS custom-property behavior reliably, the export pipeline MAY produce a flattened derivative.

That flattened derivative is an export.

It is not a new canonical source.

---

# 59. Static Export Variants

Where a third-party environment requires fixed-color SVGs, the build/export process MAY generate:

```text
dist/static/light/
dist/static/dark/
dist/static/mono/
```

These are generated files.

They should carry a header or manifest relationship indicating that they derive from the canonical source.

Do not manually maintain them.

---

# 60. Raster Export

Where raster output is required:

```text
PNG
WebP
```

should be generated from the canonical SVG.

Common export sizes may include:

```text
16
20
24
32
48
64
128
256
512
1024
```

Again:

> raster sizes are outputs, not vector source dimensions.

---

# 61. Figma Relationship

Figma components should correspond to the same governed icon identity.

Recommended structure:

```text
Icon / Search
Icon / Resolver
Icon / DPP
```

Properties may include:

```text
Size
Tone
Style
```

But Figma should not create a separate manually maintained drawing for:

```text
Resolver / Light
Resolver / Dark
Resolver / Mono
Resolver / Blue
```

where color properties can express those states.

Geometry must remain synchronized with the canonical source.

---

# 62. Figma Suggested Properties

Where the design library supports them:

```text
Size:
16
20
24
32
40
48

Tone:
Default
Brand
Muted
Mono

Style:
Standard
Small-Optimized
```

Avoid variant explosion.

---

# 63. Icon Manifest

Every icon should be represented in `MANIFEST.json`.

Example:

```json
{
  "id": "uf-icon-resolver",
  "name": "Resolver",
  "family": "domain",
  "source": "svg/domain/uf-icon-resolver.svg",
  "viewBox": "0 0 24 24",
  "colorChannels": 2,
  "defaultTone": "brand",
  "blueAccentAllowed": true,
  "monochromeSafe": true,
  "smallOptimized": true,
  "sizes": [16, 20, 24, 32, 40, 48]
}
```

Functional icon:

```json
{
  "id": "uf-icon-search",
  "name": "Search",
  "family": "functional",
  "source": "svg/functional/uf-icon-search.svg",
  "viewBox": "0 0 24 24",
  "colorChannels": 1,
  "defaultTone": "inherit",
  "blueAccentAllowed": false,
  "monochromeSafe": true,
  "smallOptimized": false,
  "sizes": [16, 20, 24, 32, 48]
}
```

---

# 64. Recommended Manifest Color Fields

Useful fields may include:

```text
colorChannels
defaultTone
blueAccentAllowed
semanticColorAllowed
monochromeSafe
canonicalBrandColorLocked
```

This prevents runtime implementations from guessing.

---

# 65. Build-Time Validation

The icon package SHOULD automatically validate:

```text
valid SVG
correct viewBox
no embedded raster
no text
no unexpected hard-coded colors
no editor-specific junk where avoidable
deterministic path ordering
unique ID
manifest entry exists
```

For functional icons, validation should normally reject arbitrary hardcoded fill/stroke colors.

---

# 66. Hard-Coded Color Rules

Allowed:

```text
currentColor
var(--uf-icon-accent, #1965EC)
```

where governed.

Potentially allowed:

```text
#1965EC
```

for canonical Brand or fixed governed accent assets.

Normally reject:

```text
#FF0000
#00FF00
#FFA500
random gray values
arbitrary blue variants
```

inside core icon sources.

Semantic state color belongs to tokens.

---

# 67. Testing Matrix

Every production icon family should be evaluated against:

```text
Light / Default
Light / Mono
Light / Muted
Dark / Default
Dark / Mono
Dark / Brand
16 px
20 px
24 px
48 px
High contrast
Disabled
```

Status icons additionally:

```text
Semantic success
Semantic warning
Semantic error
```

Domain two-tone icons additionally:

```text
Accent enabled
Accent collapsed to currentColor
```

---

# 68. Visual Regression Tests

Where infrastructure permits, maintain screenshot tests for:

```text
complete icon sheet
light theme
dark theme
monochrome
16 px
24 px
two-tone domain
status examples
```

This catches accidental changes to:

- stroke weight;
- missing paths;
- color inheritance;
- accent behavior;
- path transforms;
- theme regression.

---

# 69. Semantic Regression Tests

Visual correctness is not sufficient.

The library should also verify that icon IDs retain their governed meanings.

Examples:

```text
uf-icon-digital-link
must not be replaced by QR icon

uf-icon-gtin
must not be replaced by barcode icon

uf-icon-authority
must not be replaced by lock or shield

uf-icon-revocation
must not reuse delete icon
```

These distinctions are part of Unfict’s icon system architecture, not optional design nuance.

---

# 70. Performance

For a large library, do not manually embed every icon in every page.

Appropriate methods include:

- tree-shaken generated components;
- SVG sprites;
- code-split icon modules;
- build-time extraction;
- framework-native asset optimization.

The optimization strategy must preserve:

- semantic IDs;
- vector fidelity;
- styling behavior;
- accessibility.

---

# 71. Avoid Giant Universal Icon Components

Do not ship all approximately 100 icons into every page bundle merely because a single component supports every name.

Where framework infrastructure allows:

> use static imports or build-time generation that supports tree shaking.

The API may remain conceptually unified while implementation remains efficient.

---

# 72. CSS Scope

Use icon-specific variables narrowly.

Recommended:

```text
--uf-icon-accent
```

Do not create dozens of variables such as:

```text
--uf-resolver-dot-blue
--uf-identifier-left-shape
--uf-dpp-document-line
```

Application code should not know internal drawing anatomy.

That would make geometry externally mutable.

---

# 73. Internal Path Classes

Avoid exposing internal semantic styling hooks such as:

```svg
class="resolver-node"
class="destination-path"
```

unless an approved animation or implementation genuinely requires them.

Prefer stable color channels rather than exposing every path to CSS.

---

# 74. Animation

Some icons may support subtle state animation.

Examples:

- Processing;
- loading relationship;
- controlled directional progression.

Animation should operate on a governed structure without redefining the icon.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

The icon must remain understandable without animation.

---

# 75. Do Not Animate Universal Icons Merely for Personality

Avoid decorative animation of:

- Search;
- Close;
- Menu;
- Delete;
- Settings;
- Info.

Movement should correspond to actual state or interaction.

---

# 76. Canonical Mark Exception

The canonical Unfict mark is governed differently from the icon family.

Do not:

```css
.uf-motif-mark {
  color: red;
}
```

or automatically inherit arbitrary text color.

The Brand authority controls:

- official Blue;
- approved monochrome treatment;
- approved dark-surface treatment;
- application as favicon/app icon;
- spacing and integrity.

The canonical mark is an identity asset, not a generic UI glyph.

---

# 77. Brand Motif Exception

Other Brand Motifs may have broader visual use than functional icons, but they remain governed Brand elements.

Do not assume:

```text
all motifs = currentColor
```

Their approved behavior should be defined individually.

---

# 78. What “One SVG Per Icon” Really Means

It means:

> **one canonical semantic geometry whenever geometry is unchanged.**

It does not mean:

- there can never be small-size optimization;
- paired states must share a file;
- canonical mark rules disappear;
- every domain icon must be monochrome;
- the same icon can represent different semantic concepts;
- every export must use the exact same physical file.

The principle prevents duplication caused only by presentation.

---

# 79. Correct Examples

### Search on light surface

```text
uf-icon-search.svg
+
currentColor = Ink
```

### Search on dark surface

```text
same uf-icon-search.svg
+
currentColor = White
```

### Delete inside neutral toolbar

```text
same uf-icon-delete.svg
+
currentColor = neutral foreground
```

### Delete inside destructive confirmation

```text
same uf-icon-delete.svg
+
currentColor = semantic destructive token
```

### Resolver in branded diagram

```text
same uf-icon-resolver.svg
+
Primary = Ink
Accent = Blue
```

### Resolver printed monochrome

```text
same uf-icon-resolver.svg
+
Primary = Black
Accent = currentColor
```

---

# 80. Incorrect Examples

Do not maintain:

```text
resolver-black.svg
resolver-white.svg
resolver-blue.svg
resolver-dark.svg
resolver-light.svg
```

Do not use:

```text
barcode icon
```

and recolor it Blue to mean:

```text
GTIN
```

Do not use:

```text
QR icon
```

and recolor it Blue to mean:

```text
Digital Link
```

Do not use:

```text
lock icon
```

and recolor it Blue to mean:

```text
Authority
```

Color cannot repair incorrect semantics.

---

# 81. Recommended Authoring Checklist

Before adding a new source SVG:

### Semantic

- Is the icon ID governed?
- Does it represent the documented concept?
- Is it distinct from adjacent Unfict concepts?

### Geometry

- Does it use the 24 × 24 master frame?
- Is it optically centered?
- Does it survive at 16–20 px?
- Are gaps and terminals stable?

### Color

- Can it work in monochrome?
- Is `currentColor` used where appropriate?
- Is Blue permitted?
- Is Blue structurally meaningful?

### Implementation

- Does it require one or two color channels?
- Does it need a small-size optimized variant?
- Does it work inline?
- Does it work through the component system?

### Accessibility

- Can it be decorative?
- If interactive, can the parent provide an accessible name?
- Does the source avoid context-specific accessibility text?

---

# 82. Consumer Checklist

Before using an icon in a product surface:

1. Select the correct semantic icon.
2. Determine whether the icon is decorative or meaningful.
3. Select the appropriate rendered size.
4. Allow the surrounding context to set primary color.
5. Use Blue only where the icon specification permits it.
6. Use semantic status tokens rather than embedded color.
7. Pair unfamiliar domain icons with text.
8. Do not alter geometry.
9. Do not use color to change the icon's meaning.
10. Confirm sufficient contrast.

---

# 83. Recommended Default Decisions by Family

## Collection B — Functional UI

Default:

```text
currentColor
monochrome
```

Blue:

```text
normally none in source
```

---

## Collection C — Domain & Concept

Default:

```text
currentColor
+
optional governed Blue accent
```

Monochrome:

```text
always supported
```

---

## Collection D — Navigation & Workspace

Default:

```text
currentColor
```

Selected/navigation color:

```text
parent UI controls
```

---

## Collection E — Content, Files & Communication

Default:

```text
currentColor
```

No unnecessary Blue.

---

## Collection F — Developer, API & Data

Universal developer controls:

```text
currentColor
```

Stronger relational concepts such as API/Webhook/Schema:

```text
optional governed Blue accent
```

Collection F explicitly reserves stronger proprietary behavior for concepts whose relationship structure matters.

---

## Collection G — GS1 & Connected Product

Carrier icons such as:

```text
Barcode
QR Code
```

should generally remain monochrome.

Identity-specialization concepts such as:

```text
GTIN
DPP
Trade Item
```

may use Blue where their semantic specification permits it.

---

## Collection H — Identity, Access & Governance

Use Blue only as a restrained relational or governed-state anchor.

Do not use security cliché coloring to collapse:

```text
Authentication
Authority
Permission
Role
Credential
Standing
```

into one visual family.

---

## Collection I — System, State & Temporal

Default geometry must work without color.

Semantic runtime state may supply contextual hue.

Pending, Processing, Unavailable, Connected and related concepts must remain visually distinguishable through geometry.

---

## Collection J — Inspection, Visibility & Interaction

Default:

```text
currentColor
monochrome
```

Interaction state belongs primarily to the control/container.

---

# 84. Recommended Canonical Rule for Unfict

The implementation rule should be formally summarized as:

> **Every governed Unfict icon SHALL have one canonical semantic SVG geometry unless a distinct small-size or semantic geometry variant is explicitly required. Theme, interaction, semantic status, and placement SHALL normally be expressed through `currentColor`, governed CSS variables, design-system tokens, and surrounding component state rather than duplicate SVG source files.**

And:

> **A change in appearance does not create a new icon. A change in meaning may.**

---

# 85. Final Architecture

```text
                    UNFICT ICON SYSTEM
                            │
                            ▼
                    SEMANTIC RECORD
                            │
                            ▼
                  CANONICAL SVG GEOMETRY
                       24 × 24
                            │
           ┌────────────────┼────────────────┐
           │                │                │
           ▼                ▼                ▼
       COMPONENT          SPRITE          EXPORT
           │                │                │
           └────────────────┼────────────────┘
                            │
                            ▼
                    DESIGN TOKENS / CSS
                            │
          ┌─────────────────┼─────────────────┐
          │                 │                 │
          ▼                 ▼                 ▼
        LIGHT              DARK             MONO
      Ink/Blue         White/Blue       one foreground
          │                 │                 │
          └─────────────────┼─────────────────┘
                            │
                    SEMANTIC CONTEXT
                            │
           ┌────────────────┼────────────────┐
           ▼                ▼                ▼
        Normal            Status          Disabled
                         /active
                            │
                            ▼
                     FINAL RENDERING
```

The architecture produces:

```text
one semantic definition
one governed geometry
one source of truth
many valid contexts
```

instead of:

```text
one semantic definition
four or eight duplicate SVG files
manual synchronization
variant drift
```

---

# 86. Governing Principle

The final implementation principle is:

> **Geometry carries meaning.**

> **Context carries appearance.**

> **Tokens carry state.**

> **Color reinforces semantics but does not redefine them.**

> **One governed SVG should serve every context in which its geometry remains semantically unchanged.**

This allows the Unfict icon system to scale to the complete Collections A–J inventory without multiplying the library into hundreds of redundant Light, Dark, Color, Mono, Active, Hover, Disabled, Success, Warning and Error source files.

The result is a system that remains:

- semantically precise;
- visually coherent;
- technically maintainable;
- theme-aware;
- accessible;
- scalable;
- implementation-ready;
- faithful to the proprietary Unfict iconography architecture.