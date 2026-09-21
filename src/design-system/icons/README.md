# Unfict Governed Icon Runtime Foundation

## Overview

This directory contains the production-capable Unfict icon runtime system for `Unfict/Unfict-web`.

The system governs **127 ratified semantic assets** across **10 collections (A–J)** as defined in `UNFICT-ICONS-LIST-v1.0-RATIFIED.md` and `UNFICT-ICON-RUNTIME-CONTRACT-001.md`.

```text
ratified semantic IDs
        ↓
canonical SVG source filenames
        ↓
manifest
        ↓
validation
        ↓
UfIcon runtime gateway
        ↓
design-system consumers
```

## Governing Replacement Invariant

> **Replacing a temporary placeholder SVG with its final approved SVG SHALL require no consuming-page or consuming-component code change.**

Placeholder SVGs are temporary implementation assets, machine-tracked via `PLACEHOLDERS.json` and embedded `<!-- UNFICT_PLACEHOLDER: <id> -->` comments. Replacing a placeholder involves overwriting the SVG content and removing its ID from `PLACEHOLDERS.json`.

## System Structure

```text
src/design-system/icons/
├── svg/
│   ├── motifs/        (Collection A — Brand Motifs)
│   ├── functional/    (Collection B — Functional UI)
│   ├── domain/        (Collection C — Domain & Concept)
│   ├── navigation/    (Collection D — Navigation & Workspace)
│   ├── content/       (Collection E — Content, Files & Communication)
│   ├── developer/     (Collection F — Developer, API & Data)
│   ├── gs1/           (Collection G — GS1 & Connected Product)
│   ├── governance/    (Collection H — Identity, Access & Governance)
│   ├── state/         (Collection I — System, State & Temporal)
│   └── interaction/   (Collection J — Inspection, Visibility & Interaction)
├── metadata/
│   ├── MANIFEST.json     (Canonical 127-asset runtime authority)
│   └── PLACEHOLDERS.json (Placeholder tracking overlay)
├── components/
│   └── UfIcon.astro   (Runtime component gateway)
├── styles/
│   └── icons.css      (Token-integrated CSS rules)
├── scripts/
│   ├── generate-icons.js           (Deterministic generator/scaffold)
│   ├── validate-icons.js           (Validation gate for CI)
│   └── check-release-placeholders.js (Release readiness check)
└── README.md
```

## Component Usage (`UfIcon.astro`)

Consumers use the short semantic runtime name:

```astro
---
import UfIcon from '../design-system/icons/components/UfIcon.astro';
---

<!-- Functional icon with default inherit tone -->
<UfIcon name="search" />

<!-- Two-tone domain icon with brand tone -->
<UfIcon name="resolver" size={24} tone="brand" />

<!-- Semantic status icon -->
<UfIcon name="warning" tone="semantic" />

<!-- Meaningful icon with accessibility label -->
<UfIcon name="copy" decorative={false} label="Copy GTIN URI" />
```

## Validation Commands

```bash
# Validate manifest integrity, exact asset count, SVG rules, color constraints, and placeholder alignment
pnpm run icons:validate

# Verify release readiness (fails if any placeholder remains)
pnpm run icons:check-release
```
