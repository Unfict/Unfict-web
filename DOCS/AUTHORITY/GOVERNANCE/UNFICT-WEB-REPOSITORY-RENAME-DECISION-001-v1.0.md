# UNFICT-WEB-REPOSITORY-RENAME-DECISION-001
# Repository Technical Identifier Migration — `zyppi-web` → `unfict-web`

**Version:** 1.0  
**Status:** ACTIVE — CHAIR DECISION  
**Date:** 17 September 2026  
**Applies To:** Unfict pre-launch website repository and all active Web bootstrap documents  
**Current Repository:** `ZYPPI-me/zyppi-web`  
**New Repository:** `ZYPPI-me/unfict-web`  
**Active Public Brand:** Unfict  
**Legacy Master Brand:** Zyppi  

---

## 1. Decision

Because the public Web repository is still empty and has no implementation, package, deployment, CI, release, or consumer compatibility burden, the repository SHALL be renamed immediately:

```text
ZYPPI-me/zyppi-web
→
ZYPPI-me/unfict-web
```

This is an authorized exception to the general “no automatic technical rename” rule because the migration cost is effectively zero at this stage and the new repository is intended to become the canonical public Web implementation for the successor master brand.

---

## 2. Rationale

Renaming now avoids introducing a permanent legacy technical identifier into a new, not-yet-initialized Web codebase.

The rename:

- aligns the canonical Web repository with the active master brand;
- avoids future migration cost;
- reduces confusion for contributors and AI agents;
- avoids embedding `zyppi-web` into CI, Cloudflare, local clones, documentation, badges, deployment metadata, and future package names;
- preserves continuity because GitHub repository rename redirects the previous repository location.

---

## 3. Scope

This decision authorizes only the Web repository rename.

It does NOT automatically authorize renaming:

- the GitHub organization `ZYPPI-me`;
- the main platform repository;
- existing `@zyppi/*` package scopes;
- historical governance IDs;
- ZyUX document-series IDs;
- existing API paths;
- environment-variable namespaces;
- previously issued historical artifacts.

Those remain subject to separate migration decisions.

---

## 4. New Canonical Repository Identity

From the moment GitHub completes the rename, all active Web documents and mandates SHALL use:

```text
Repository:
ZYPPI-me/unfict-web

HTTPS:
https://github.com/ZYPPI-me/unfict-web

Clone:
https://github.com/ZYPPI-me/unfict-web.git
```

Historical documents may retain the former repository path where it accurately records past state.

---

## 5. Legacy Repository Name

The previous repository identifier:

```text
ZYPPI-me/zyppi-web
```

becomes a legacy redirect location only.

Do NOT create a new repository later at the old `zyppi-web` path while relying on GitHub’s automatic redirect, because reuse of the old repository name can break that redirect.

---

## 6. Git Remote Rule

Any local clone created before the rename SHOULD update its remote:

```bash
git remote set-url origin https://github.com/ZYPPI-me/unfict-web.git
```

Because the repository is currently empty, this is expected to have little or no practical migration cost.

---

## 7. Documentation Rule

All active pre-bootstrap artifacts SHALL be revised before issue so they refer to:

```text
ZYPPI-me/unfict-web
```

Documents already superseded or archived SHALL NOT be rewritten merely to erase historical provenance.

---

## 8. Cloudflare Rule

When Cloudflare Workers Builds is later connected, it SHALL connect to:

```text
ZYPPI-me/unfict-web
```

not the legacy repository redirect.

Production domain planning remains:

```text
unfict.com
```

---

## 9. Jules Rule

All new Jules mandates for the public website SHALL state:

```text
Repository: ZYPPI-me/unfict-web
```

Jules SHALL treat `zyppi-web` references in archived/pre-succession artifacts as historical only.

---

## 10. Completion Condition

This decision is operationally complete when:

- GitHub repository name is `unfict-web`;
- active bootstrap mandate references `ZYPPI-me/unfict-web`;
- active Toolchain Baseline references `ZYPPI-me/unfict-web`;
- future DOCS corpus uses `unfict-web`;
- Cloudflare has not yet been connected to the obsolete repository identity.

---

**End of `UNFICT-WEB-REPOSITORY-RENAME-DECISION-001 v1.0`**
