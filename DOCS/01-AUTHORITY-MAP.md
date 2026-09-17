# 01-AUTHORITY-MAP
# Unfict Web — Authority, Status & Evidence Map

**Version:** 1.0  
**Status:** ACTIVE — Repository Authority Navigation  
**Repository:** `Unfict/Unfict-web`  
**Purpose:** Prevent authority inversion, stale-source use, silent semantic drift, and agent invention

---

## 1. Governing Principle

Authority in this repository is both:

1. **status-sensitive**; and
2. **domain-sensitive**.

A document with stronger status does not gain authority outside its subject domain.

A visual design cannot rewrite public claims. A content document cannot redefine logo geometry. A code export cannot redefine ZyUX semantics. A draft containing the word `SHALL` does not become ratified merely because it is written normatively.

---

## 2. General Resolution Order

When multiple sources address the same decision, use this order unless a more specific current mandate explicitly states otherwise:

```text
1. Current Chair-issued task mandate
2. Ratified/active governance and succession instruments
3. Ratified authority for the relevant domain
4. Current Web-specific projection or approved successor overlay
5. Approved secondary governance / registry owner
6. Candidate reusable pattern where the mandate permits candidate use
7. Current page-specific design mandate
8. Current local visual reference
9. Legacy visual reference used only for inherited structure
10. Raw Stitch-generated code/export
11. Framework convention
12. Agent preference
```

This order does not authorize one domain to overwrite another.

---

## 3. Current Governance Authorities

### Brand succession

**Path**

`DOCS/AUTHORITY/GOVERNANCE/ZYPPI-UNFICT-SUCCESSION-DECLARATION-001.md`

**Role**

Establishes:

```text
Active master brand: Unfict
Legacy master brand: Zyppi
Platform continuity: preserved
```

Use it to interpret legacy Zyppi references prospectively. Do not use it to rewrite historical records.

### Web repository identity

**Path**

`DOCS/AUTHORITY/GOVERNANCE/UNFICT-WEB-REPOSITORY-RENAME-DECISION-001-v1.0.md`

**Role**

Establishes the canonical Web repository identity:

```text
Unfict/Unfict-web
```

It does not authorize unrelated package, API, governance-series, or platform-repository renames.

---

## 4. Brand Authority

### Active Brand standard

**Path**

`DOCS/AUTHORITY/BRAND/ACTIVE/BRAND-001-v3.0-RATIFIED.md`

**Status**

`RATIFIED — FINAL`

**Owns**

- master-brand identity;
- logo/mark use;
- visual identity;
- canonical brand expression;
- palette;
- typography;
- institutional visual character;
- active Unfict brand presentation.

### Active identity assets

**Path**

`DOCS/AUTHORITY/BRAND/ACTIVE/UNFICT/`

These assets are the active Unfict identity sources.

Do not reconstruct the logo or wordmark from text, fonts, screenshots, or approximate geometry.

### Legacy Brand

**Path**

`DOCS/AUTHORITY/BRAND/LEGACY/`

Legacy sources preserve historical Zyppi identity evidence. They are not current public Brand authority.

---

## 5. Iconography Authority

**Paths**

- `DOCS/AUTHORITY/BRAND/ICONOGRAPHY/README.md`
- `DOCS/AUTHORITY/BRAND/ICONOGRAPHY/UNFICT-ICONOGRAPHY-001-v0_3.md`
- `DOCS/AUTHORITY/BRAND/ICONOGRAPHY/UNFICT-ICONS-LIST.md`

**Current status**

The iconography construct is currently draft/proposed.

Therefore:

```text
design exploration: allowed where explicitly requested
semantic inventory development: allowed
production implementation: requires explicit authority
```

The inventory may contain both `Defined` and `Proposed` entries.

`Defined` means defined by the current draft system; it does not automatically mean ratified production use.

---

## 6. Public Content Authority

**Path**

`DOCS/AUTHORITY/CONTENT/ZYPPI-WEB-PRELAUNCH-001-v0.2.md`

**Role**

Inherited pre-launch public-content source.

It owns public wording and claim boundaries to the extent established by its status and later governance.

Because it predates brand succession:

- preserve substantive meaning;
- migrate active brand references to Unfict for new public output;
- do not publish obsolete Zyppi master-brand identity as current;
- do not strengthen claims during brand migration.

A future explicit Unfict content successor should replace this source for active page production.

---

## 7. ZyUX Authority

### Web projection

**Path**

`DOCS/AUTHORITY/ZYUX/WEB/ZYPPI-WEB-ZYUX-PROJECTION-001-v0.2.md`

Use this first for Web-specific experience decisions.

### Core doctrine

**Path**

`DOCS/AUTHORITY/ZYUX/CORE/`

The repository contains ratified core ZyUX foundations.

Use core doctrine to interpret the Web projection, not to expand the Web product/public surface without authorization.

If a Web projection and core doctrine appear inconsistent:

> record the exact conflict and escalate.

Do not silently synthesize new doctrine.

---

## 8. Design-System Authority

### Design-system construct

**Path**

`DOCS/AUTHORITY/DESIGN-SYSTEM/ZYPPI-DESIGN-SYSTEM-001-v0.1.md`

### Registry

**Path**

`DOCS/AUTHORITY/DESIGN-SYSTEM/ZYPPI-DESIGN-SYSTEM-REGISTRY-001-v0.1.md`

These are inherited Zyppi-era design-system drafts. Treat their status literally.

A reusable owner may be:

```text
EXPERIMENTAL
PROPOSED
CANDIDATE
APPROVED
DEPRECATED
RETIRED
```

Implementation authority depends on status plus the current task mandate.

### Single Visual Pattern Owner

Every recurring interface Job should have one governed implementation owner.

A new route does not justify duplicating a visual pattern.

### Pattern Gap

If no applicable governed owner exists:

```text
PATTERN-GAP
```

Then stop design invention until the gap is resolved.

---

## 9. Engineering Authority

### Cross-repository toolchain baseline

**Path**

`DOCS/ENGINEERING/UNFICT-WEB-TOOLCHAIN-BASELINE-001-v0.3.md`

This is the local engineering-alignment source for the Web repository.

Jules does not need access to the main platform repository during Web bootstrap work.

### Current bootstrap reconnaissance mandate

**Path**

`DOCS/ENGINEERING/BOOTSTRAP/UNFICT-WEB-BOOTSTRAP-REC-01-v1.3.md`

This mandate governs the current reconnaissance phase.

Its explicit mutation prohibitions override general repository write capability.

---

## 10. Design Evidence Authority

Current state:

> No active Unfict page visual baseline is committed yet.

Future page evidence should live under:

```text
DOCS/DESIGN/PAGES/<PAGE>/
```

Expected evidence:

```text
README.md
MANDATE.md
reference/
    desktop-1440.png
    mobile-390.png
    SOURCE.md
stitch-export/
    REFERENCE_ONLY.md
```

Use `DOCS/DESIGN/STITCH-EXPORT-PROTOCOL-001.md`.

### Visual reference can establish

- composition;
- geometry;
- hierarchy;
- spacing intent;
- image placement;
- responsive intent.

### Visual reference cannot override

- public copy authority;
- Brand rules;
- ZyUX;
- design-system ownership;
- accessibility requirements;
- capability availability;
- repository engineering architecture.

---

## 11. Stitch Authority

Google Stitch is a visual exploration/composition tool.

Raw Stitch output is never self-authorizing implementation architecture.

Stitch output may inform layout, section composition, proportions, visual rhythm, and responsive direction.

Stitch output SHALL NOT independently determine:

- Astro vs another framework;
- React use;
- Tailwind use;
- dependency selection;
- semantic HTML;
- accessibility behavior;
- component ownership;
- public claims;
- structured data;
- production asset paths.

---

## 12. Status Interpretation Table

| Status | Meaning for implementation |
|---|---|
| `RATIFIED / FINAL / ACTIVE` | Governing authority within its domain |
| `APPROVED` | Authorized within the approval scope |
| `CANDIDATE` | Reviewable/reusable only where current mandate permits |
| `PROPOSED` | Not production authority |
| `DRAFT` | Development/review source only |
| `EXPERIMENTAL` | Exploration only |
| `DEPRECATED` | Do not use for new work unless explicitly required |
| `RETIRED` | Historical only |
| `LEGACY` | Historical/provenance source |
| `SUPERSEDED` | Replaced by a newer authority |

---

## 13. Conflict Rules

### Copy vs visual design

Public-content authority wins on wording and claims. Adapt the visual design to truthful copy.

### Brand vs page mockup

Ratified Brand authority wins on identity. A mockup containing obsolete Zyppi identity remains structural evidence only.

### ZyUX vs implementation convenience

ZyUX wins on experience semantics. Implementation convenience is not authority.

### Registry vs page-local design

Applicable approved design-system owner wins. Do not duplicate an owner locally.

### Accessibility vs visual fidelity

Accessibility requirements are mandatory. If exact visual replication would create an accessibility failure, record the conflict and implement only after disposition.

### Historical source vs active successor

Active successor governs prospectively. Historical source remains unchanged for provenance.

---

## 14. Missing Authority Rule

Missing evidence does not create freedom to invent.

If the assigned task requires missing visual evidence, an unresolved pattern, absent active copy, unratified iconography, unknown product capability, or unavailable deployment authority, report the gap and stop that portion of work.

---

## 15. Agent Decision Procedure

Before implementing a decision:

```text
1. Identify the Job.
2. Identify the governing domain.
3. Find the highest-status applicable authority.
4. Check for a more specific Web/page authority.
5. Check the design-system registry for an existing owner.
6. Check whether the task mandate authorizes implementation.
7. If evidence is insufficient, stop and report.
8. Implement only the authorized minimum.
```

---

## 16. Current Phase

The repository is currently in:

> **Pre-bootstrap authority and reconnaissance phase**

The next engineering task is read-only bootstrap reconnaissance.

The absence of page visual baselines does not block architecture reconnaissance. It does block visual-fidelity page implementation.

---

**End of `01-AUTHORITY-MAP v1.0`**
