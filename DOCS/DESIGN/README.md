# Unfict Web Design Evidence

**Directory:** `DOCS/DESIGN/`  
**Version:** 1.0  
**Status:** ACTIVE NAVIGATION NOTE  
**Repository:** `Unfict/Unfict-web`

---

## 1. Current State

There are currently:

> **No active Unfict page visual baselines committed for implementation.**

This is intentional.

Earlier Zyppi-era Homepage, GS1 Digital Link, About, and FAQ explorations are not being treated as final Unfict visual references.

The pages are expected to be regenerated later under the active Unfict identity.

---

## 2. What Is Allowed Now

```text
Bootstrap architecture reconnaissance:       ALLOWED
Repository architecture planning:            ALLOWED
Toolchain planning:                          ALLOWED
Content architecture planning:               ALLOWED
SEO / structured-data planning:              ALLOWED
Accessibility architecture planning:         ALLOWED
Design-system technical architecture:        ALLOWED when mandated
Brand-token extraction from ratified Brand:  ALLOWED when mandated
```

---

## 3. What Is Not Yet Authorized

```text
Final page visual implementation:          NOT YET AUTHORIZED
Visual-fidelity page coding:               NOT YET AUTHORIZED
Final page screenshot baselines:           NOT YET AUTHORIZED
Global page-pattern promotion from mockups: NOT YET AUTHORIZED
```

Absence of current page screenshots is not a bootstrap blocker.

It is a visual-implementation blocker.

---

## 4. Future Page Evidence Location

When the Unfict pages are regenerated, use:

```text
DOCS/DESIGN/PAGES/
├── HOME/
├── GS1-DIGITAL-LINK/
├── ABOUT/
├── FAQ/
├── DEVELOPERS/
├── INSIGHTS/
└── ...
```

Each implementation-ready page should follow:

`DOCS/DESIGN/STITCH-EXPORT-PROTOCOL-001.md`

---

## 5. Expected Page Evidence

Minimum preferred evidence:

```text
<PAGE>/
├── README.md
├── MANDATE.md
├── reference/
│   ├── desktop-1440.png
│   ├── mobile-390.png
│   └── SOURCE.md
└── stitch-export/
    └── REFERENCE_ONLY.md
```

`stitch-export/` is optional if no raw code/export is needed.

---

## 6. Authority Rule

Page design evidence sits below:

- current task mandate;
- succession governance;
- ratified Brand;
- public-content authority;
- applicable ZyUX;
- approved design-system ownership.

A page screenshot cannot override those authorities.

---

## 7. Stitch Rule

Google Stitch is used for visual exploration and page design where new visual invention is needed.

Stitch-generated code is not production architecture authority.

See:

`DOCS/DESIGN/STITCH-EXPORT-PROTOCOL-001.md`

---

## 8. Reuse Rule

Pages should not become isolated design systems.

The intended model is:

```text
Foundations
    ↓
Primitives
    ↓
Components
    ↓
Patterns
    ↓
Sections
    ↓
Shells
    ↓
Page Archetypes
    ↓
Page Compositions
```

When an accepted page reveals a recurring Job, map it to an existing governed owner.

If no owner exists:

> `PATTERN-GAP`

Do not create a page-local permanent substitute.

---

## 9. Legacy Zyppi Designs

If legacy Zyppi page renders are later committed for comparison, they must be clearly labeled:

```text
LEGACY STRUCTURAL REFERENCE
NOT ACTIVE UNFICT BRAND BASELINE
```

They may help explain layout lineage, section intent, previous hierarchy, and historical visual decisions.

They must not silently become active Unfict production evidence.

---

## 10. Iconography

The developing Unfict iconography system lives under:

`DOCS/AUTHORITY/BRAND/ICONOGRAPHY/`

Its current draft status must be respected.

A future page may visually use candidate icons during design exploration, but production implementation requires the applicable authority.

---

## 11. Active Brand Assets

Canonical Unfict identity assets are stored under the active Brand authority area.

Production implementation should reference/copy from governed assets as specified by the eventual implementation architecture.

Do not redraw the Unfict identity from screenshots.

---

## 12. Current Next Step

The current next Web engineering step is:

> **read-only bootstrap reconnaissance**

defined by:

`DOCS/ENGINEERING/BOOTSTRAP/UNFICT-WEB-BOOTSTRAP-REC-01-v1.3.md`

Page regeneration with Stitch can occur later, after the technical/design-system foundation is clearer.

---

## 13. Design Evidence Doctrine

> **A screenshot proves appearance, not semantics.**

> **Generated code proves one possible construction, not the governed construction.**

> **A recurring Job should have one reusable owner.**

> **Missing design evidence is a gap to record, not freedom to invent.**

---

**End of `DOCS/DESIGN/README v1.0`**
