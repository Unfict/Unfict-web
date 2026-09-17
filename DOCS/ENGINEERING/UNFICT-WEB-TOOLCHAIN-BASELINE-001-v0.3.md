# UNFICT-WEB-TOOLCHAIN-BASELINE-001
# Cross-Repository Engineering Alignment Baseline

**Version:** 0.3  
**Status:** OPERATIVE INPUT FOR WEB BOOTSTRAP RECONNAISSANCE  
**Date:** 17 September 2026  
**Target Repository:** `ZYPPI-me/unfict-web`  
**Reference Repository Inspected Externally:** `aly-samy/zyppi.me`  
**Reference Branch:** `main`  
**Reference HEAD at Evidence Capture:** `42bf4864e5b73a77191ddeadfa97a0a751ad97d1`  
**Lineage:** Successor to `ZYPPI-WEB-TOOLCHAIN-BASELINE-001 v0.2`; technical evidence unchanged except target Web identity.

## Principle

> **Unified engineering ecosystem. Specialized Web architecture.**

The active Web repository is now:

```text
ZYPPI-me/unfict-web
```

The main platform repository remains a legacy-named technical source for cross-repository toolchain evidence.

## Verified Main Zyppi Toolchain

- Node.js: `20.19.0`
- pnpm: `10.30.3`
- TypeScript: `^5.9.3`
- Vitest: `^4.1.10`
- ESLint: `^9.39.5`
- Prettier: `^3.9.6`
- CI uses `.nvmrc`, Corepack, pnpm cache, `pnpm install --frozen-lockfile`, and quality gates.

Main platform TypeScript uses strict mode and ES2022. Its NodeNext/composite/declaration assumptions are platform-specific and SHALL NOT be copied where Astro/Web-native configuration is more appropriate.

## MUST ALIGN

```text
Node.js 20.19.0
pnpm 10.30.3
TypeScript 5.9 generation
strict TypeScript posture
Corepack-based pnpm workflow
frozen-lockfile CI
Prettier 3.9 generation
ESLint 9 generation
Vitest 4.1 generation
```

## SHOULD ALIGN

```text
format
format:check
lint
test
coverage
ci
```

and deterministic format/lint/type/test quality gates.

## WEB-SPECIFIC

```text
Astro
Astro-compatible TypeScript configuration
Cloudflare Workers + Static Assets
browser/E2E testing
visual regression
WCAG 2.2 AA validation
SEO/static-output validation
design-system validation
content/schema validation
responsive image pipeline
```

## DO NOT COPY AUTOMATICALLY

```text
NodeNext compiler assumptions
composite/declaration package-output requirements
PostgreSQL CI service
domain/runtime boundary scripts
main-monorepo workspace topology
platform dependency-graph governance
platform-only governance tests
```

## Bootstrap Bias

Unless local compatibility evidence establishes a material conflict:

```text
Node.js 20.19.0
pnpm 10.30.3
TypeScript 5.9.x
Astro
Vitest 4.1.x
ESLint 9.x
Prettier 3.9.x
Cloudflare Workers + Static Assets
```

React SHOULD be deferred until a real interactive island requires it.

Tailwind SHALL NOT be selected merely because Stitch export code uses it.

**End of `UNFICT-WEB-TOOLCHAIN-BASELINE-001 v0.3`**
