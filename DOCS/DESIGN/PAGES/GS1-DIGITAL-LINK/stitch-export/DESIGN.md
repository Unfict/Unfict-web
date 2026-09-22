---
name: Reality Sync
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#46464b'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#76777c'
  outline-variant: '#c6c6cb'
  surface-tint: '#5c5e67'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#191b23'
  on-primary-container: '#81838d'
  inverse-primary: '#c4c6d0'
  secondary: '#0053ce'
  on-secondary: '#ffffff'
  secondary-container: '#266cf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#131c2a'
  on-tertiary-container: '#7b8496'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e2ec'
  primary-fixed-dim: '#c4c6d0'
  on-primary-fixed: '#191b23'
  on-primary-fixed-variant: '#44474f'
  secondary-fixed: '#dae2ff'
  secondary-fixed-dim: '#b2c5ff'
  on-secondary-fixed: '#001848'
  on-secondary-fixed-variant: '#0040a2'
  tertiary-fixed: '#dae3f7'
  tertiary-fixed-dim: '#bec7da'
  on-tertiary-fixed: '#131c2a'
  on-tertiary-fixed-variant: '#3e4757'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display:
    fontFamily: IBM Plex Serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: IBM Plex Serif
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: IBM Plex Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: IBM Plex Serif
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: IBM Plex Serif
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  code-sm:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system establishes the visual and structural language for authoritative digital-physical synchronization, GS1 Digital Link resolution, and immutable object identity. The tone is institutional, rigorous, and documentary—balancing classical ledger authority with precise technical infrastructure. 

Stylistically, the system avoids transient consumer SaaS ornament. It synthesizes architectural structuralism with editorial authority: crisp 1px borders, deliberate surface division, unrounded razor-sharp geometry, and purposeful negative space. It evokes the permanence of an administrative registry or central bank infrastructure rather than an ephemeral software platform.

## Colors

The palette enforces a strict functional hierarchy designed to communicate veracity, permanence, and calm precision:

- **Deep Ink (`#0A0D14`)**: The primary anchor. Used for high-authority headlines, terminal points, primary buttons, and critical framing. Accounts for 10–25% visual weight alongside Slate.
- **Unfict Blue (`#1965EC`)**: The secondary operational accent. Reserved strictly for active states, link resolution targets, functional indicators, and essential interaction moments (strictly 2–8% total interface coverage).
- **Slate (`#596273`)**: The tertiary analytical tier. Deployed for secondary metadata, ledger keys, schema labels, and structural documentation.
- **Institutional Gray (`#F6F7F9`)**: The ground surface container. Works in concert with pure White (`#FFFFFF`) to establish tonal surface shifts, section compartmentalization, and table zebra-striping.
- **Border Gray (`#DDE1E7`)**: Structural hairline divider color (1px solid) utilized across all layout panels, component boundaries, and table frames.
- **Canvas White (`#FFFFFF`)**: Base canvas providing 70–85% overall composition space.

## Typography

Typography establishes an institutional cadence through the intentional juxtaposition of two typographic traditions:

- **Headlines (`IBM Plex Serif`)**: Evokes the permanence of classical records, state treaties, and institutional declarations. Titles must never be set in all-caps or given ornamental drop-caps. They remain sober, high-contrast, and deliberate.
- **Body & Labels (`IBM Plex Sans`)**: Provides systematic, unyielding clarity for interface copy, configuration parameters, and transactional records.
- **Code & URIs (`IBM Plex Mono`)**: Reserved for machine-readable strings, GTINs, GS1 Digital Link syntax, cryptographic checksums, and JSON schemas.

## Layout & Spacing

The spatial architecture is predicated on a strict 12-column grid system supported by hairline coordinate separators. Content conforms to an explicit tabular rhythm rather than floating loosely.

- **Canvas & Sections**: Page canvas transitions rely on explicit `1px solid #DDE1E7` boundary lines rather than floating margins. Sections shift cleanly between `#FFFFFF` and `#F6F7F9` to indicate scope and functional transitions.
- **Horizontal Rhythms**: Component gaps and structural margins follow the 4px baseline. Interior element padding remains compact and data-dense, while external section margins are expansive, conveying institutional authority.
- **Breakpoints**: 
  - `Mobile` (<768px): 4 columns, `margin-sm` (1rem), 0px rounded edge-to-edge containers.
  - `Tablet` (768px–1024px): 8 columns, `margin` (2rem), gutter: `gutter-sm`.
  - `Desktop` (>1024px): 12 columns, max bounded width of 1440px with `margin-lg` (4rem) centering outer frame.

## Elevation & Depth

This design system completely rejects decorative elevation. There are zero drop shadows, zero ambient multi-point light casts, zero glassmorphism blurs, and zero floating card metaphors.

Depth and hierarchy are conveyed exclusively through:
1. **Hairline Structural Framing**: Bounding boxes set in `1px solid #DDE1E7`.
2. **Surface Shifts**: Layering base panels (`#FFFFFF`) against secondary structural bands or nested inspection bays (`#F6F7F9`).
3. **High-Contrast Value Hierarchy**: Foreground data blocks in `#0A0D14` set against `#F6F7F9` backgrounds create foreground separation without dimensional skewing.
4. **Active/Modal States**: Modals and popovers do not use diffuse drop shadows; they are delineated by a `1px solid #0A0D14` perimeter border and an opaque backdrop overlay of `#0A0D14` at 40% opacity.

## Shapes

The geometric doctrine is strictly unrounded (`0px`). 

Every component, container, input field, status badge, code snippet box, and button terminates in hard 90-degree corners. This uncompromising rectilinear silhouette underscores the mechanical precision of cryptographic ledgers, technical blueprints, and physical registry plates. Rounded pills, circular chip capsules, and soft card corners are forbidden.

## Components

### Buttons
- **Primary**: Solid Deep Ink (`#0A0D14`) fill, Canvas White (`#FFFFFF`) text, 0px border radius, 0px shadow. Hover state shifts background to Slate (`#596273`). Active state triggers an internal 1px inset boundary.
- **Secondary (Operational)**: Unfict Blue (`#1965EC`) fill, Canvas White (`#FFFFFF`) text, 0px border radius. Used strictly for sync operations, GS1 link resolutions, and primary commit actions.
- **Outline / Ledger Action**: Transparent fill, 1px solid `#DDE1E7` border, Deep Ink (`#0A0D14`) text. Hover introduces `#F6F7F9` fill and a `#0A0D14` border.

### Chips & Status Tags
- **Structure**: Rectilinear (`0px` border radius), 1px solid `#DDE1E7`, height 24px, uppercase `label-md` tracking.
- **Resolved / Sync Active**: Background `#FFFFFF`, 1px solid `#1965EC`, text `#1965EC` with a leading 6x6 square indicator.
- **Neutral / Draft**: Background `#F6F7F9`, 1px solid `#DDE1E7`, text `#596273`.

### Input Fields & Data Selectors
- **Input Ground**: `#FFFFFF` background with a mandatory `1px solid #DDE1E7` boundary. Sharp 90-degree corners.
- **Typographic Scale**: Text rendered in `IBM Plex Sans` 14px (`body-md`) with labels positioned above the field in `IBM Plex Sans` 12px (`label-md`) uppercase Slate (`#596273`).
- **Focus State**: 1px solid `#0A0D14` border (or `#1965EC` in GS1 link configurations). No glowing halos or outer rings.

### Checkboxes & Radio Buttons
- **Shape**: Checkboxes are square (`0px` radius); radio buttons are flat unadorned square selectors with an inner solid square indicator when active.
- **Borders**: 1px solid `#596273` in resting state; 1px solid `#0A0D14` with solid `#0A0D14` center when checked.

### Cards & Institutional Ledger Panels
- **Anatomy**: Bounded on all four sides by `1px solid #DDE1E7`. Card headers are partitioned from bodies using a horizontal `1px solid #DDE1E7` line.
- **Background**: Panel body uses `#FFFFFF`; optional utility headers or summary footers utilize `#F6F7F9`.

### Data Tables & Resolution Records
- **Row Architecture**: Strict tabular layout. Table headers are set in `#F6F7F9` with a bottom border of `1px solid #0A0D14`.
- **Data Rows**: Divided by `1px solid #DDE1E7`. Hover state fills row with `#F6F7F9`. Code/GTIN values are pinned to `IBM Plex Mono` with strict numeric alignment.