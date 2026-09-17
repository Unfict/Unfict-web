# 00-START-HERE
# Unfict Web — Agent Entry Point

**Version:** 1.0  
**Status:** ACTIVE — Repository Navigation Authority  
**Repository:** `Unfict/Unfict-web`  
**Canonical Public Domain Target:** `unfict.com`  
**Active Master Brand:** **Unfict**  
**Legacy Master Brand:** **Zyppi**  
**Applies To:** Jules · coding agents · design agents · human contributors · reviewers

---

## 1. Purpose

This file is the mandatory starting point for any agent or contributor working in `Unfict/Unfict-web`.

The repository contains a mixture of:

- ratified Unfict authorities;
- inherited Zyppi-era authorities;
- draft design-system material;
- proposed iconography;
- engineering bootstrap material;
- future design evidence.

Presence in the repository does **not** mean every document has equal status or implementation authority.

Before acting, determine:

1. what task you were explicitly assigned;
2. which authority domain governs that task;
3. the status of every source you intend to use;
4. whether the required design/content evidence actually exists;
5. whether the task permits repository mutation.

---

## 2. Canonical Repository Identity

```text
Organization: Unfict
Repository:   Unfict-web
Remote:       https://github.com/Unfict/Unfict-web.git
Branch:       main
Public domain target: unfict.com
```

The current public master brand is:

> **Unfict — Reality Sync**

Zyppi is the legacy master brand.

The platform remains one continuous system. Brand succession does not by itself change product semantics, architecture, governance lineage, or established technical identifiers.

---

## 3. Mandatory Read Order

For a new task, read in this order.

### Always read first

1. `DOCS/00-START-HERE.md`
2. `DOCS/01-AUTHORITY-MAP.md`
3. the **current task mandate** supplied by the Chair or located under the relevant `DOCS/ENGINEERING/` task path

### Then read current governance

4. `DOCS/AUTHORITY/GOVERNANCE/ZYPPI-UNFICT-SUCCESSION-DECLARATION-001.md`
5. `DOCS/AUTHORITY/GOVERNANCE/UNFICT-WEB-REPOSITORY-RENAME-DECISION-001-v1.0.md`

### Then read only the authorities relevant to the task

#### Brand / visual identity

- `DOCS/AUTHORITY/BRAND/ACTIVE/BRAND-001-v3.0-RATIFIED.md`
- approved active Unfict assets under `DOCS/AUTHORITY/BRAND/ACTIVE/UNFICT/`

#### Public Web content

- `DOCS/AUTHORITY/CONTENT/ZYPPI-WEB-PRELAUNCH-001-v0.2.md`

This remains an inherited pre-succession content source. Preserve its substantive meaning, but active public brand references must be migrated to **Unfict** rather than published as Zyppi.

#### Web experience

- `DOCS/AUTHORITY/ZYUX/WEB/ZYPPI-WEB-ZYUX-PROJECTION-001-v0.2.md`

#### Core experience doctrine

- ratified documents under `DOCS/AUTHORITY/ZYUX/CORE/`

Use the Web projection first for Web work. Do not expand the public Web surface merely because a deeper ZyUX document discusses a broader concept.

#### Design system

- `DOCS/AUTHORITY/DESIGN-SYSTEM/ZYPPI-DESIGN-SYSTEM-001-v0.1.md`
- `DOCS/AUTHORITY/DESIGN-SYSTEM/ZYPPI-DESIGN-SYSTEM-REGISTRY-001-v0.1.md`

These are inherited draft/proposed design-governance sources. Their existence does not automatically authorize every pattern for production.

#### Iconography

- `DOCS/AUTHORITY/BRAND/ICONOGRAPHY/README.md`
- `DOCS/AUTHORITY/BRAND/ICONOGRAPHY/UNFICT-ICONOGRAPHY-001-v0_3.md`
- `DOCS/AUTHORITY/BRAND/ICONOGRAPHY/UNFICT-ICONS-LIST.md`

Read the local README first. The current iconography system is a **draft/proposed** foundation, not blanket production authority.

#### Engineering bootstrap

- `DOCS/ENGINEERING/UNFICT-WEB-TOOLCHAIN-BASELINE-001-v0.3.md`
- `DOCS/ENGINEERING/BOOTSTRAP/UNFICT-WEB-BOOTSTRAP-REC-01-v1.3.md`

---

## 4. Status Means Authority

Treat status literally.

### `RATIFIED`, `FINAL`, `ACTIVE`

May govern implementation within its defined authority domain.

### `APPROVED`

May be used according to the scope of the approval.

### `CANDIDATE`

May be composed or evaluated where explicitly allowed, but is not automatically production authority.

### `PROPOSED`, `DRAFT`

Input for exploration, review, or future promotion. Do not silently convert draft language such as `SHALL` into production authority.

### `EXPERIMENTAL`

Exploration only unless a current task mandate explicitly authorizes its use.

### `LEGACY`, `SUPERSEDED`, `ARCHIVE`

Historical/provenance evidence. Do not use as current authority unless a current document explicitly inherits a specific rule from it.

---

## 5. Domain Ownership

Do not use one document to override another outside its domain.

```text
Governance / succession
    → identity continuity, authority lineage, migration rules

Brand
    → logo, mark, color, typography, visual identity

Content authority
    → public wording, public claims, availability language

ZyUX
    → experience doctrine, interaction principles, progressive disclosure

Design System
    → reusable implementation ownership, patterns, sections, shells

Page design evidence
    → page-specific composition and visual intent

Engineering
    → repository architecture, toolchain, tests, build, deployment
```

If two sources appear to conflict across domains, do not invent a compromise. Record the conflict and escalate it.

---

## 6. Current Web Design State

There are currently **no active Unfict page visual baselines** committed under `DOCS/DESIGN/PAGES/`.

This is intentional. Earlier Zyppi-era page explorations will be regenerated later under the Unfict identity.

Therefore:

```text
Bootstrap architecture reconnaissance: ALLOWED
Design-system technical foundation:    ALLOWED when separately mandated
Final page visual implementation:       NOT YET AUTHORIZED
Visual-regression baseline freeze:      NOT YET AUTHORIZED
```

Read `DOCS/DESIGN/README.md` before any design-led implementation.

---

## 7. Stitch Rule

Google Stitch is a design-exploration source, not code authority.

When future Stitch pages are exported, follow:

`DOCS/DESIGN/STITCH-EXPORT-PROTOCOL-001.md`

Raw Stitch code is:

> **REFERENCE ONLY**

It does not determine framework, dependencies, CSS architecture, component ownership, accessibility semantics, public copy, structured data, or runtime behavior.

---

## 8. Single Visual Pattern Owner

For recurring interface Jobs:

> **one recurring visual Job → one governed implementation owner**

Before creating a new visual pattern:

1. search the design-system registry;
2. reuse an applicable approved owner;
3. use an approved variant if available;
4. if none applies, record `PATTERN-GAP`;
5. stop visual invention until the gap is resolved.

Do not solve a missing pattern with page-local CSS invention.

---

## 9. Iconography Rule

The iconography directory is intentionally present as a foundation.

Current state:

```text
UNFICT-ICONOGRAPHY-001 v0.3
Status: DRAFT — PROPOSED SECONDARY BRAND CONSTRUCT

UNFICT-ICONS-LIST
Contains both Defined and Proposed entries
```

The existence of an icon does not prove product capability, authorize navigation exposure, authorize implementation, or convert a proposed semantic concept into a public feature.

---

## 10. Historical Zyppi Material

Do not mass-rewrite historical Zyppi documents.

Historical names remain valid provenance, including `ZyUX-*`, `ZYPPI-WEB-PRELAUNCH-*`, `ZYPPI-WEB-ZYUX-PROJECTION-*`, and `ZYPPI-DESIGN-SYSTEM-*`.

A future Unfict successor document may supersede one of these explicitly. Until then, preserve historical titles and use the current succession authority to interpret active public identity.

---

## 11. Repository Mutation Rule

Before modifying the repository, confirm that the current task explicitly authorizes mutation.

A reconnaissance mandate may authorize:

```text
read
inspect
analyze
report
```

while prohibiting:

```text
create
modify
install
commit
open PR
configure Cloudflare
change DNS
```

Do not infer implementation permission from access permission.

---

## 12. Evidence Language

When reporting findings, distinguish:

```text
FACT            directly established by repository evidence
INFERENCE       reasoned interpretation of facts
RECOMMENDATION  proposed future action
UNRESOLVED      requires authority or missing evidence
```

Do not present a recommendation as existing repository truth.

---

## 13. Stop Conditions

Stop and report rather than invent when:

- active Brand authority is missing;
- required public copy is absent or conflicting;
- a design-system owner does not exist;
- a required pattern is only proposed but implementation requires approval;
- visual page evidence is missing for a visual-fidelity task;
- two authorities conflict;
- a mandate requires an unavailable source;
- a requested capability is not evidenced as available.

---

## 14. Current Immediate Task

Until superseded, the next engineering phase is the read-only bootstrap reconnaissance defined by:

`DOCS/ENGINEERING/BOOTSTRAP/UNFICT-WEB-BOOTSTRAP-REC-01-v1.3.md`

Do not initialize the application before the reconnaissance is reviewed and a separate implementation mandate is issued.

---

**End of `00-START-HERE v1.0`**
