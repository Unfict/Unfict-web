# STITCH-EXPORT-PROTOCOL-001
# Unfict Web — Google Stitch Design Evidence Export Protocol

**Version:** 1.0  
**Status:** ACTIVE — DESIGN EVIDENCE PROCEDURE  
**Applies To:** Home · GS1 Digital Link · About · FAQ · Developers · Insights · future Web pages designed in Google Stitch  
**Repository:** `Unfict/Unfict-web`

---

## 1. Purpose

Google Stitch is used for visual exploration and page composition where new visual design is required.

Jules cannot rely on access to the Stitch project itself.

Therefore any Stitch design that is intended to guide repository implementation SHALL be exported into `Unfict-web` as local evidence before visual-fidelity implementation begins.

The repository must remain self-contained enough for an implementation agent to understand:

- what was designed;
- which version was accepted;
- what the visual evidence proves;
- what the visual evidence does not prove.

---

## 2. Core Rule

> **Stitch is design evidence, not implementation architecture authority.**

Stitch output may establish visual intent.

Stitch-generated code does not automatically establish framework, dependency graph, CSS architecture, Tailwind use, component ownership, semantic HTML, accessibility, runtime behavior, public copy, API behavior, or structured data.

---

## 3. Required Page Directory

For each page that becomes implementation evidence, create:

```text
DOCS/DESIGN/PAGES/<PAGE>/
├── README.md
├── MANDATE.md
├── reference/
│   ├── desktop-1440.png
│   ├── mobile-390.png
│   └── SOURCE.md
└── stitch-export/
    └── REFERENCE_ONLY.md
```

Optional additions:

```text
reference/
├── tablet-768.png
├── desktop-1280.png
├── mobile-360.png
├── source-full.png
└── NOTES.md
```

Raw Stitch exports may be added under `stitch-export/` when useful.

---

## 4. Required Visual Evidence

Before a page is implemented for visual fidelity, preferred minimum evidence is:

```text
desktop: 1440 px reference
mobile:   390 px reference
```

Where the design meaningfully changes at tablet width, include:

```text
tablet:   768 px reference
```

Additional validation widths may later include:

```text
1280
360
320
```

A missing tablet screenshot does not necessarily block implementation if responsive behavior is otherwise governed.

A missing desktop/mobile baseline does block visual-fidelity implementation unless the Chair explicitly authorizes an alternative.

---

## 5. File Naming

Use stable descriptive names.

Preferred:

```text
desktop-1440.png
mobile-390.png
tablet-768.png
desktop-1280.png
mobile-360.png
source-full.png
```

Avoid ambiguous names such as `final.png`, `final-final.png`, `new2.png`, or generic screenshot names.

---

## 6. `SOURCE.md`

Every `reference/` directory SHALL contain `SOURCE.md`.

Use:

```markdown
# Design Source Record

Page:
Route:
Design source: Google Stitch
Stitch project:
Stitch screen / artifact:
Export date:
Exported by:
Desktop reference:
Mobile reference:
Tablet reference:
Current design status:
Chair disposition:
Governing mandate:
Supersedes:
Notes:
```

If a value is unknown, write:

```text
UNRESOLVED
```

Do not invent it.

---

## 7. `README.md`

Each page directory should explain:

- route;
- current design status;
- current authority status;
- whether visual evidence is sufficient for implementation;
- current governing mandate;
- known unresolved sections;
- whether the page is safe to use as a reusable-pattern source.

Recommended status block:

```text
VISUAL EVIDENCE:
COMPLETE / PARTIAL / MISSING

IMPLEMENTATION FROM DESIGN:
AUTHORIZED / BLOCKED / PARTIALLY AUTHORIZED

REUSABLE PATTERN EXTRACTION:
AUTHORIZED / REVIEW REQUIRED
```

---

## 8. `MANDATE.md`

`MANDATE.md` should contain or point to the current approved page-design mandate.

Do not silently rewrite an old mandate to match a new design.

If the design supersedes the mandate:

- issue a successor/revision;
- preserve lineage;
- state the supersession explicitly.

---

## 9. Raw Stitch Export

If Stitch provides generated code, copy it only when it provides useful design evidence.

Place it under:

```text
stitch-export/
```

Never put raw Stitch code directly into production `src/`.

The directory must contain `REFERENCE_ONLY.md` with a warning equivalent to:

> Raw Stitch output is visual/composition evidence only. It is not framework, dependency, CSS, semantic, accessibility, content, or component-ownership authority.

---

## 10. What Jules May Extract

From an accepted Stitch page, Jules may extract evidence for:

- layout geometry;
- spacing relationships;
- typography hierarchy where consistent with Brand;
- image placement;
- section order;
- component relationships;
- responsive behavior;
- visual rhythm;
- recurring visual Jobs;
- candidate reusable patterns.

Extraction does not automatically authorize implementation of a new reusable pattern.

---

## 11. What Jules May Not Infer

Jules SHALL NOT infer from Stitch:

- that Tailwind is required;
- that React is required;
- that every generated component should exist;
- that generated component boundaries are correct;
- that generated text is approved;
- that hidden/placeholder UI is a real capability;
- that a visual control has backend support;
- that a generated interaction is accessible;
- that an icon is approved;
- that a mockup color overrides Brand tokens.

---

## 12. Reusable Pattern Extraction

When two or more accepted pages reveal the same visual Job:

1. identify the recurring Job;
2. search the design-system registry;
3. map to an existing owner if one exists;
4. if no owner exists, record `PATTERN-GAP`;
5. obtain design-system authority before creating a new reusable owner;
6. implement pages through the shared owner.

Do not copy/paste page-local structures merely because Stitch rendered them separately.

---

## 13. Brand Migration

All new Stitch work should use the active Unfict identity.

Legacy Zyppi-era page designs may still be preserved as historical/structural evidence, but they SHALL NOT become final Unfict visual-regression baselines without explicit migration/approval.

Active visual references should use:

- approved Unfict mark/wordmark;
- current Brand v3.0;
- current Unfict naming;
- current public-domain direction;
- current copy authority.

---

## 14. Public Copy

If Stitch changes or generates text:

> treat generated wording as non-authoritative unless separately approved.

The repository's public-content authority governs wording and claims.

Design adapts to authoritative content.

Do not shorten or strengthen a claim merely to improve visual fit.

---

## 15. Accessibility

A visual reference cannot override accessibility.

Implementation must still satisfy current accessibility requirements, including where applicable:

- semantic structure;
- keyboard access;
- focus;
- readable contrast;
- disclosure semantics;
- reduced motion;
- form labels;
- error states;
- alternative text.

If visual fidelity conflicts with accessibility:

> record the conflict for disposition.

---

## 16. Asset Extraction

If a Stitch design uses images or generated visual assets:

- preserve original source when available;
- record whether an asset is final, placeholder, licensed, generated, or temporary;
- do not publish unknown-license imagery;
- do not reconstruct canonical Unfict logo assets from a screenshot;
- use canonical repository Brand assets for production identity.

---

## 17. Versioning

Do not overwrite evidence silently.

When a new accepted design materially replaces an older one, preserve the earlier evidence through Git history or an explicit archived/versioned reference structure.

The page README must identify which version is current.

---

## 18. Current Repository State

At the time this protocol is issued:

> No active Unfict page visual baselines are required for the bootstrap architecture reconnaissance.

This is intentional.

The earlier Zyppi-era pages are expected to be regenerated later under the Unfict identity.

Therefore:

```text
Technical bootstrap reconnaissance: ALLOWED
Page visual implementation:         DEFERRED
Final visual-regression baselines:   DEFERRED
```

---

## 19. Completion Check for a Page Export

Before considering a page evidence package ready:

```text
[ ] Page README exists
[ ] Governing mandate is identified
[ ] SOURCE.md exists
[ ] Desktop 1440 reference exists
[ ] Mobile 390 reference exists
[ ] Tablet evidence included if materially different
[ ] Active Unfict Brand identity is used
[ ] Raw Stitch code, if present, is under stitch-export/
[ ] REFERENCE_ONLY.md exists if raw export exists
[ ] No generated copy is silently treated as authoritative
[ ] Reusable-pattern candidates are identified but not self-ratified
```

---

**End of `STITCH-EXPORT-PROTOCOL-001 v1.0`**
