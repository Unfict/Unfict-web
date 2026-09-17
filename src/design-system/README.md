# Unfict Web Design System Architecture

## Core Invariants

> **Pages consume the governed design system. Pages do not independently define it.**

> **One recurring visual Job → one governed implementation owner.**

> **Missing owner → PATTERN-GAP, not local visual invention.**

## Intended Layering Structure

```text
Foundations (Tokens: colors, typography, spacing)
  ↓
Primitives (Atomic UI: buttons, links, inputs)
  ↓
Components (UI Units: FAQ item, article metadata)
  ↓
Patterns (Job Compositions: Hero action, depth paths)
  ↓
Sections (Page Sections: Conceptual model, FAQ category)
  ↓
Shells (Layout Shells: Public layout, article layout)
  ↓
Archetypes (Page archetypes: Acquisition, Pillar, Entity)
  ↓
Page Compositions
```
