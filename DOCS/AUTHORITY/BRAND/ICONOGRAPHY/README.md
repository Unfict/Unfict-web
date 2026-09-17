# Unfict Iconography — Repository Readme

**Directory:** `DOCS/AUTHORITY/BRAND/ICONOGRAPHY/`  
**Version:** 1.0  
**Status:** ACTIVE NAVIGATION NOTE — does not change the status of the iconography documents  
**Primary Brand Authority:** `BRAND-001 v3.0`

---

## 1. Purpose

This directory contains the developing Unfict proprietary iconography and motif system.

The current foundation is intended to establish a recognizable Unfict visual language derived from the canonical Unfict mark while keeping interface semantics familiar and low-distraction.

The presence of an icon, motif, name, ID, or semantic description in this directory does **not** by itself authorize:

- product capability;
- navigation exposure;
- public claims;
- implementation;
- API availability;
- UI availability;
- a new semantic concept.

---

## 2. Current Files

### `UNFICT-ICONOGRAPHY-001-v0_3.md`

Current declared status:

> **DRAFT — PROPOSED SECONDARY BRAND CONSTRUCT / FOR COUNCIL REVIEW**

It is a developing secondary Brand construct.

It may guide exploration and system development. It is not blanket production implementation authority.

### `UNFICT-ICONS-LIST.md`

Master inventory of icon/motif Jobs and IDs.

The inventory distinguishes entries such as:

```text
Defined
Proposed
```

Interpret these carefully.

`Defined` means the item is defined in the current developing iconography system.

It does **not** automatically mean:

```text
RATIFIED
APPROVED FOR PRODUCTION
CAPABILITY AVAILABLE
PUBLICLY EXPOSED
```

`Proposed` means a candidate extension of the library.

---

## 3. Canonical Naming

Preserve established IDs.

Examples:

```text
uf-icon-*
uf-motif-*
```

Do not rename existing semantic IDs casually.

Do not create near-duplicate IDs for an existing Job.

Before proposing a new icon:

1. search the master inventory;
2. search the iconography document;
3. determine whether the semantic Job already has an owner;
4. extend only when the Job is genuinely distinct.

---

## 4. Semantic Rule

Every icon must communicate one primary Job.

Do not create icons whose meaning changes unpredictably by context.

Common interface actions should remain conventionally understandable.

Distinctive Unfict styling may specialize visual character, but must not destroy immediate recognition.

---

## 5. Capability Neutrality

Icon existence is capability-neutral.

For example, an icon representing upload, verification, evidence, policy, routing, or identity does not prove that the corresponding product capability is implemented, public, available in the current release, exposed in navigation, or available through the API.

Product capability authority lives elsewhere.

---

## 6. Brand Relationship

The iconography is subordinate to:

`DOCS/AUTHORITY/BRAND/ACTIVE/BRAND-001-v3.0-RATIFIED.md`

The iconography SHALL NOT:

- redefine the Unfict mark;
- alter canonical Brand colors without Brand authority;
- introduce an incompatible visual language;
- substitute generic third-party iconography for canonical Unfict domain semantics without explicit approval.

---

## 7. Production Rule

Until the iconography system is explicitly promoted or ratified:

```text
Design exploration:        ALLOWED when assigned
Inventory development:     ALLOWED
Prompt/spec development:   ALLOWED
Prototype use:              ALLOWED when clearly marked
Production implementation: REQUIRES EXPLICIT AUTHORITY
```

A current task mandate may authorize a bounded subset without ratifying the whole library.

---

## 8. Master Variant Strategy

The intended asset strategy may include variants such as:

```text
/COLOR/LIGHT/   ← master development source where designated
/COLOR/DARK/
/MONO/LIGHT/
/MONO/DARK/
```

Variant generation must preserve semantic geometry.

Do not independently redraw or reinterpret each variant if one canonical geometry is intended to generate the others.

---

## 9. Asset Quality

When icon assets are later committed:

- preserve vector master files;
- use stable IDs/file names;
- avoid raster-only canonical sources;
- document viewBox and intended master canvas;
- preserve geometry across color/theme variants;
- keep decorative motifs separate from functional UI icons;
- maintain accessible usage guidance where needed.

Asset specifications belong in the iconography system or a later ratified asset specification.

---

## 10. Jules / Coding-Agent Rule

Jules SHALL NOT interpret this directory as permission to implement the entire icon library.

For any implementation task:

1. determine whether the assigned interface actually requires an icon;
2. determine whether the relevant icon entry exists;
3. determine its status;
4. determine whether production use is authorized;
5. use the governed owner if authorized;
6. otherwise report the missing authority.

Do not substitute a third-party icon library merely because a governed Unfict icon is not yet production-ready, unless the task explicitly authorizes a temporary functional fallback.

---

## 11. Design-Agent Rule

A design agent may use the iconography documents to generate visual candidates only within the assigned scope.

It must preserve:

- exact semantic Job;
- established ID;
- recognizable conventional meaning;
- Brand DNA;
- distinction between motif and functional icon;
- distinction between Defined and Proposed inventory entries.

Generated visual output remains candidate evidence until accepted.

---

## 12. Promotion Rule

A future iconography promotion should explicitly state:

- promoted version;
- ratified/approved scope;
- canonical master asset location;
- allowed variants;
- implementation readiness;
- accessibility/use rules;
- deprecated/replaced entries if any.

Do not infer promotion from file age, completeness, or visual quality.

---

## 13. Current Doctrine

> **Minimum visual distraction. Maximum recognizable character.**

And:

> **An icon may represent a concept without authorizing the capability represented by that concept.**

---

**End of Iconography README v1.0**
