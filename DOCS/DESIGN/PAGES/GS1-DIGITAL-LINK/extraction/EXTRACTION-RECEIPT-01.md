# UNFICT DESIGN EXTRACTION RECEIPT --- PRE-EXTRACTION

## Identity

-   Composition ID: `COMPOSITION-GS1-PILLAR-01`
-   Route: `/gs1-digital-link`
-   Evidence version: GS1 Pillar Stitch working evidence --- 22
    September 2026
-   Stitch mandate: `STITCH-UNFICT-GS1-PILLAR-01-v0.1`
-   Extraction mandate: `JULES-UNFICT-GS1-EVIDENCE-EXTRACTION-01`
-   Preparation baseline: `main` =
    `174c03646253470a93381e1e9c3cc3c9c0c0d9e2`
-   Status: BODY ACCEPTED FOR EXTRACTION; GLOBAL SHELL OVERRIDDEN TO
    HOMEPAGE OWNERS; NOT VISUALLY FROZEN

## Evidence Paths

-   Raw Stitch export:
    `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/stitch-export/code.html`
-   Stitch design context:
    `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/stitch-export/DESIGN.md`
-   Reference image:
    `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/reference/source-full.png`
-   Shell override:
    `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/SHELL-OVERRIDE.md`
-   Governing page mandate:
    `DOCS/DESIGN/STITCH/STITCH-UNFICT-GS1-PILLAR-01-v0.1.md`

## Evidence Completeness

`PARTIAL`

Direct source screenshot: `326 × 1600`.

Canonical 1440px desktop and 390px mobile direct captures are not
present.

## Chair Override

The Stitch Header/Nav/Footer are not accepted.

Reconstruction SHALL use:

``` text
GLOBAL-HEADER-01
NAV-WEB-PRIMARY-01
GLOBAL-FOOTER-01
SHELL-WEB-PUBLIC-01
```

from the Homepage extraction.

This is an authorized evidence correction, not a reconstruction failure.

## Whole Composition Reading

Page Job:

> Explain the persistent product-link problem, introduce GS1 Digital
> Link at moderate complexity, show where resolution fits, bound
> Unfict's role, and offer legitimate deeper paths.

Major rhythm:

``` text
Reality-first GS1 Hero
→ lifecycle mismatch
→ standards separation
→ conceptual resolution model
→ Unfict role / boundaries
→ progressive depth
→ short FAQ
→ final preview CTA
```

Technical peak:

> Five-step conceptual flow from GS1 identifier to relevant resource.

## Existing Owners Reused

Mandatory:

-   `BUTTON-PRIMARY-01`
-   `TEXT-LINK-01`
-   `NAV-WEB-PRIMARY-01`
-   `GLOBAL-HEADER-01`
-   `GLOBAL-FOOTER-01`
-   `SHELL-WEB-PUBLIC-01`

## Authorized Extraction Candidates

Not a quota:

1.  `PATTERN-HERO-ACTION-01`
2.  `SECTION-HERO-HUMAN-01`
3.  `PATTERN-CONCEPT-FLOW-01`
4.  `SECTION-CONCEPTUAL-MODEL-01`
5.  `PATTERN-DEPTH-PATHS-01`
6.  `PATTERN-FINAL-CTA-01`
7.  `SECTION-FINAL-CTA-01`

Each candidate must pass cross-composition reconstruction against Home +
GS1 before placeholder removal or implementation-status promotion.

## Held / Unresolved Recurrence

-   `SECTION-PROBLEM-01` --- Job recurs, visual treatment differs
    materially.
-   `SECTION-PERSISTENCE-01` --- semantic territory recurs; section
    ownership remains ambiguous with Problem/continuity treatment.
-   `FAQ-ITEM-01` --- Home uses disclosure; GS1 evidence uses
    always-visible numbered direct answers.
-   `DISCLOSURE-TRIGGER-01` --- not required by the accepted GS1 visual
    form.
-   `PATTERN-FAQ-GROUP-01` --- semantic recurrence confirmed; visual
    variant normalization unresolved.
-   `SECTION-FAQ-SHORT-01` --- page-level recurrence exists; defer until
    FAQ pattern contract is resolved.
-   `PATTERN-BRAND-SIGNATURE-01` / `SECTION-BRAND-SIGNATURE-01` --- GS1
    has only a quiet final-CTA eyebrow, not enough evidence for a
    distinct recurring signature owner.
-   `PATTERN-INTEGRATION-REASSURANCE-01` /
    `SECTION-INTEGRATION-REASSURANCE-01` --- strong GS1 evidence but
    insufficient current cross-composition recurrence.
-   layout/image foundations --- second composition supports them, but
    direct canonical breakpoint evidence remains incomplete.

## Composition-Local Structures

-   GS1 Hero right-side Reality Sync Axis ledger.
-   Lifecycle mismatch comparison table.
-   Data Carrier vs Standard Link URI two-panel treatment.
-   Blue technical-peak treatment around the five-step flow.
-   Three-boundary role grid.
-   Standards-maintenance callout.

## Authority Corrections Required

Do not import:

-   Stitch Header/Footer;
-   IBM Plex Serif;
-   Tailwind;
-   Material Symbols;
-   arbitrary generated SVGs;
-   off-brand blues;
-   profile/avatar;
-   generated technical claims;
-   exact standards versions without authority;
-   performance/SLA claims;
-   invented routes or governance claims.

Use canonical Brand tokens and `UfIcon` where an icon is genuinely
required.

## Reconstruction Standard

The non-route Interface Harness should prove:

``` text
Homepage shell
+
GS1 Hero relationship
+
GS1 conceptual flow relationship
+
GS1 depth-path relationship
+
GS1 final-CTA relationship
```

without hardcoding the whole GS1 page and without modifying the public
route.

For every promoted owner, also demonstrate that its contract remains
capable of representing the accepted Homepage relationship that
justified recurrence.

## Registry Rules

-   `COMPOSITION-GS1-PILLAR-01` may move from `UNDESIGNED / NONE` to the
    evidence state justified by this package.
-   Do not mark it `APPROVED` or `FROZEN`.
-   For each successfully extracted owner, update `sourceCompositions`
    to include `COMPOSITION-GS1-PILLAR-01` where justified.
-   `CANDIDATE_EXTRACTED` is appropriate only after real
    implementation + reconstruction.
-   Do not promote held owners merely because they appear in the page.
-   Keep runtime/static registry projection synchronized.
-   Remove an owner from `INTERFACE-PLACEHOLDERS.json` only when it is
    genuinely implemented.

## Placeholder Baseline

Homepage extraction left `45` tracked interface placeholders.

Final count: **TO BE RECORDED BY JULES**.

No target placeholder count is mandated.

## Validation

Jules must record:

-   `pnpm run format:check`
-   `pnpm run lint`
-   `pnpm run typecheck`
-   `pnpm run icons:validate`
-   `pnpm run interface:validate`
-   `pnpm run test`
-   `pnpm run build`
-   `pnpm run ci`
-   `pnpm run interface:check-release` --- expected to fail while
    interface placeholders remain; record count.
-   `pnpm run icons:check-release` --- expected to fail while icon
    placeholders remain; record count.

## Final Recommendation

**PENDING JULES EXTRACTION AND RECONSTRUCTION.**

The accepted GS1 body is sufficient to begin the second governed
extraction cycle, with the Homepage shell explicitly retained.
