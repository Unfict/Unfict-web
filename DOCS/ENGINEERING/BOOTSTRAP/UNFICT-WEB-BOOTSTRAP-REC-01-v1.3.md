# UNFICT-WEB-BOOTSTRAP-REC-01
# Local-Only Repository & Technical Bootstrap Reconnaissance Mandate

**Version:** 1.3  
**Status:** READY FOR CHAIR ISSUE AFTER UNFICT AUTHORITY CORPUS UPDATE  
**Date:** 17 September 2026  
**Issued By:** Chair  
**Execution Agent:** Jules — AI Software Engineer  
**Repository:** `ZYPPI-me/unfict-web`  
**Repository URL:** `https://github.com/ZYPPI-me/unfict-web`  
**Active Public Brand:** **Unfict**  
**Legacy Master Brand:** **Zyppi**  
**Canonical Public Domain Target:** `unfict.com`  
**Authorized Repository Scope:** THIS REPOSITORY ONLY  
**Authorized Code Changes:** NONE  
**Authorized Dependency Installation:** NONE  
**Authorized Commits / PRs:** NONE  
**Authorized Deployment / Cloudflare Changes:** NONE  
**Historical Lineage:** Supersedes `UNFICT-WEB-BOOTSTRAP-REC-01 v1.2` for active issue.  

---

# 0. Objective

Conduct a complete read-only bootstrap reconnaissance using only `ZYPPI-me/unfict-web` and the local authority corpus under `/DOCS/`.

Return the evidence required for a separate bootstrap implementation mandate.

Do NOT initialize Astro, install packages, create source/config files, configure Cloudflare, modify DNS, or implement pages.

The required question is:

> **What is the smallest, strongest technical foundation for the Unfict pre-launch website that preserves the supplied platform engineering baseline while optimizing static-first delivery, SEO, AI retrieval, accessibility, maintainability, and governed design-system reuse?**

---

# 1. Mandatory Identity Interpretation

```text
ACTIVE MASTER BRAND:
Unfict

LEGACY MASTER BRAND:
Zyppi

WEB REPOSITORY:
ZYPPI-me/unfict-web

CANONICAL PUBLIC DOMAIN TARGET:
unfict.com

PLATFORM CONTINUITY:
one continuous platform
```

The governing succession instrument is:

`/DOCS/AUTHORITY/GOVERNANCE/ZYPPI-UNFICT-SUCCESSION-DECLARATION-001.md`

The repository rename authority is:

`/DOCS/AUTHORITY/GOVERNANCE/UNFICT-WEB-REPOSITORY-RENAME-DECISION-001.md`

The active Brand authority is:

`/DOCS/AUTHORITY/BRAND/ACTIVE/BRAND-001-v3.0.md`

If required active Brand inputs are absent:

- report the absence;
- do not invent their contents;
- architecture reconnaissance may continue;
- brand-final implementation remains blocked.

---

# 2. Historical Continuity

Do NOT mass-edit historical Zyppi-era documents.

Historical documents retain their authentic names and wording.

The current repository name `unfict-web` does NOT authorize renaming unrelated legacy technical identifiers.

---

# 3. Required Read Order

Read first:

1. `/DOCS/00-START-HERE.md`
2. `/DOCS/01-AUTHORITY-MAP.md`
3. `/DOCS/AUTHORITY/GOVERNANCE/ZYPPI-UNFICT-SUCCESSION-DECLARATION-001.md`
4. `/DOCS/AUTHORITY/GOVERNANCE/UNFICT-WEB-REPOSITORY-RENAME-DECISION-001.md`
5. `/DOCS/AUTHORITY/BRAND/ACTIVE/BRAND-001-v3.0.md`
6. `/DOCS/ENGINEERING/UNFICT-WEB-TOOLCHAIN-BASELINE-001-v0.3.md`
7. current design-system governance under `/DOCS/AUTHORITY/DESIGN-SYSTEM/`
8. `/DOCS/AUTHORITY/ZYUX/WEB/ZYPPI-WEB-ZYUX-PROJECTION-001-v0.2.md`
9. current public-content authority / Unfict migration overlay
10. `/DOCS/DESIGN/STITCH-EXPORT-PROTOCOL-001-v0.1.md`
11. page-specific evidence only when relevant.

Do not inspect another repository.

---

# 4. Engineering Baseline

Use the local Toolchain Baseline.

Unless local compatibility evidence establishes a material blocker:

```text
Node.js 20.19.0
pnpm 10.30.3
TypeScript 5.9 generation
Astro
static-first / SSG
minimal client JavaScript
React only when a real interactive island requires it
Vitest 4.1 generation
ESLint 9 generation
Prettier 3.9 generation
Cloudflare Workers + Static Assets
WCAG 2.2 AA direction
```

Do not select Tailwind merely because a Stitch export uses it.

---

# 5. Design-System Constraint

The implementation architecture must make these rules operational:

> **Pages consume the governed design system. Pages do not independently define it.**

> **One recurring visual Job → one governed implementation owner.**

> **Missing owner → PATTERN-GAP, not local visual invention.**

---

# 6. Legacy Visual Evidence

Existing Zyppi-era Homepage / GS1 / About / FAQ renders may be used as structural evidence for:

- hierarchy;
- layout;
- rhythm;
- geometry;
- section composition;
- responsive intent.

They are not final active-brand evidence where they display Zyppi identity.

Prefer updated Unfict renders before visual-regression baselines are frozen.

---

# 7. Framework Decision

Evaluate Astro against:

```text
/
 /gs1-digital-link
 /about
 /faq
 /developers
 /insights
 /insights/*
 /early-access
 /privacy
 /terms
 404
```

Return:

```text
ASTRO:
GO
GO WITH CONDITIONS
NO-GO
```

Compare only the minimum credible alternatives necessary to validate the decision.

---

# 8. Rendering Classification

Classify every launch route:

```text
STATIC REQUIRED
STATIC PREFERRED
DYNAMIC JUSTIFIED
```

Default:

> public content is static unless dynamic behavior earns its complexity.

---

# 9. Cloudflare Boundary

Evaluate:

> **Cloudflare Workers + Static Assets**

for:

- static deployment;
- Astro integration;
- preview deployment;
- `unfict.com` custom-domain readiness;
- redirects;
- headers;
- environment separation;
- future lightweight Early Access endpoint.

Do NOT configure Cloudflare or DNS.

---

# 10. Domain / Redirect Readiness

Architecture must support future:

```text
unfict.com
```

and mapped legacy redirects.

Do not assume every legacy URL maps to `/`.

Recommend the technical redirect-map owner without creating it.

---

# 11. Styling & Tokens

Recommend ownership for:

- Unfict colors;
- typography;
- spacing;
- content widths;
- grid;
- borders;
- radius;
- focus;
- motion;
- breakpoints.

Preserve succession-confirmed values.

Use **Unfict Blue** for `#1965EC`.

Do not invent unresolved BRAND-001 v3.0 values.

---

# 12. Repository Architecture

Propose, but do not create, paths for:

- routes;
- shells;
- design-system foundations;
- primitives;
- components;
- patterns;
- sections;
- content;
- active assets;
- legacy assets;
- SEO;
- structured data;
- tests;
- Cloudflare config;
- redirect mapping;
- public files.

---

# 13. Content / SEO / AI Retrieval

Recommend architecture for:

- typed FAQ;
- Insights/articles;
- metadata;
- `unfict.com` canonical URLs;
- Open Graph;
- Unfict Organization JSON-LD;
- Article structured data;
- sitemap;
- robots;
- stable anchors;
- crawlable links;
- static semantic HTML;
- future bot policy.

Do not write final public marketing copy in this reconnaissance.

---

# 14. Accessibility

Recommend architecture/tooling for WCAG 2.2 AA:

- keyboard;
- focus;
- disclosures;
- forms;
- reduced motion;
- image alt;
- contrast;
- automated/manual checks.

---

# 15. Testing Architecture

Return a matrix for:

```text
UNIT
COMPONENT
CONTENT/SCHEMA
ACCESSIBILITY
VISUAL
E2E
BUILD
SEO/STATIC OUTPUT
REDIRECTS
```

Include candidate tool, bootstrap requirement, design-system-freeze requirement, launch requirement, and proof objective.

---

# 16. Visual Regression

Reference widths:

```text
mandatory: 1440, 390
validation: 1280, 768, 360
minimum usability: 320
```

Do not freeze Zyppi-branded screenshots as final production brand baselines.

---

# 17. Images & Fonts

Recommend:

- responsive image strategy;
- Human Reality handling;
- hero priority;
- CLS prevention;
- modern formats;
- active Unfict assets;
- legacy Zyppi archive;
- IBM Plex Sans / Mono Web delivery.

Do not download fonts.

---

# 18. Dependency Discipline

Classify as:

```text
BOOTSTRAP REQUIRED
DEFER UNTIL NEEDED
AVOID
```

for Astro, React, Tailwind, Vitest, Playwright, accessibility tooling, sitemap tooling, Cloudflare tooling/adapter, MDX, Storybook/component preview, and icon library.

---

# 19. Early Access Boundary

Recommend the smallest future architecture for:

- static form;
- validation;
- Worker POST endpoint if justified;
- abuse boundary;
- storage/provider decision point;
- privacy/consent;
- success/error states.

Do not choose a permanent provider without separate authority.

---

# 20. Required Return

Return one report through Jules' task response.

Do NOT write files.

The report must include:

- Executive Result
- Brand Succession Readiness
- Repository Identity (`ZYPPI-me/unfict-web`)
- Local Repository Evidence
- Architecture Decision Matrix
- Route Rendering Matrix
- Proposed Repository Tree
- Design-System Architecture
- SEO / Entity / Redirect Architecture
- Testing / Quality Gates
- Risks
- Bootstrap Implementation Inputs

Clearly label:

```text
FACT
INFERENCE
RECOMMENDATION
UNRESOLVED
```

---

# 21. Prohibited Actions

Do NOT:

- modify files;
- install dependencies;
- initialize Astro;
- create branches;
- commit;
- open PRs;
- configure Cloudflare;
- change DNS;
- rename any repository;
- rename package scopes;
- rewrite historical documents;
- rewrite public copy;
- invent Brand rules/assets;
- infer missing page appearance.

---

# 22. Completion Gate

PASS only if:

- local-only scope respected;
- `ZYPPI-me/unfict-web` recognized as current Web repository;
- succession correctly interpreted;
- Astro assessed;
- route rendering classified;
- Workers + Static Assets assessed;
- `unfict.com` readiness addressed;
- design-system architecture addressed;
- SEO/entity/redirect architecture addressed;
- test/accessibility/visual-regression architecture addressed;
- missing active Brand inputs identified without invention;
- repository remains untouched.

STOP after return.

---

**End of `UNFICT-WEB-BOOTSTRAP-REC-01 v1.3`**
