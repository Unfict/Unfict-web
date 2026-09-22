# UNFICT DESIGN EXTRACTION RECEIPT --- POST-EXTRACTION

## Identity

-   Composition ID: `COMPOSITION-GS1-PILLAR-01`
-   Route: `/gs1-digital-link`
-   Evidence version: GS1 Pillar Stitch working evidence --- 22 September 2026
-   Stitch mandate: `STITCH-UNFICT-GS1-PILLAR-01-v0.1`
-   Extraction mandate: `JULES-UNFICT-GS1-EVIDENCE-EXTRACTION-01`
-   Preparation baseline SHA: `174c03646253470a93381e1e9c3cc3c9c0c0d9e2`
-   Actual starting HEAD: `4b7a865050d4bd3fc6eabaaab3dd690420c57d9c`
-   Final Pushed HEAD: Handled per repository external reporting convention
-   Suggested PR branch: `design/gs1-evidence-extraction-01`
-   Suggested PR Title: `design: ingest GS1 pillar evidence and continue governed extraction`
-   Status: BODY ACCEPTED FOR EXTRACTION; GLOBAL SHELL OVERRIDDEN TO HOMEPAGE OWNERS; SECOND GOVERNED EXTRACTION COMPLETE (6/7 OWNERS EXTRACTED, 1 HELD)

## Evidence Paths

-   Raw Stitch export: `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/stitch-export/code.html`
-   Stitch design context: `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/stitch-export/DESIGN.md`
-   Reference image: `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/reference/source-full.png`
-   Shell override: `DOCS/DESIGN/PAGES/GS1-DIGITAL-LINK/SHELL-OVERRIDE.md`
-   Governing page mandate: `DOCS/DESIGN/STITCH/STITCH-UNFICT-GS1-PILLAR-01-v0.1.md`

## Evidence Completeness

`PARTIAL`

Direct source screenshot: `326 × 1600`.

Canonical 1440px desktop and 390px mobile direct captures are not present in source package.

## Chair Override

The Stitch Header/Nav/Footer are explicitly rejected.

Reconstruction uses:

``` text
GLOBAL-HEADER-01
NAV-WEB-PRIMARY-01
GLOBAL-FOOTER-01
SHELL-WEB-PUBLIC-01
```

from the Homepage extraction.

## Whole Composition Reading

Page Job:

> Explain the persistent product-link problem, introduce GS1 Digital Link at moderate complexity, show where resolution fits, bound Unfict's role, and offer legitimate deeper paths.

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

Reused without modification or page-specific forks:

-   `BUTTON-PRIMARY-01`
-   `TEXT-LINK-01`
-   `NAV-WEB-PRIMARY-01`
-   `GLOBAL-HEADER-01`
-   `GLOBAL-FOOTER-01`
-   `SHELL-WEB-PUBLIC-01`

## Evaluated & Extracted Candidates

6 of 7 candidate owners evaluated and successfully promoted to `CANDIDATE_EXTRACTED` / `IMPLEMENTED`:

1.  `PATTERN-HERO-ACTION-01` — Extracted primary button + optional secondary text link relationship supporting bounded light and dark surface themes with accessible secondary link styling.
2.  `SECTION-HERO-HUMAN-01` — Extracted dark reality-first hero section with bounded dark/light theme and required media (`imageSrc`, `imageAlt`) contract.
3.  `PATTERN-CONCEPT-FLOW-01` — Extracted ordered step sequence pattern (reconstructed across 3-step Home and 5-step GS1 flows).
4.  `SECTION-CONCEPTUAL-MODEL-01` — Extracted section-level wrapper with bounded `default`/`emphasis` visual variants.
5.  `PATTERN-FINAL-CTA-01` — Extracted concluding conversion pattern with primary button and optional secondary link.
6.  `SECTION-FINAL-CTA-01` — Extracted section wrapper for final CTA pattern.

## Held Candidates & Unresolved Recurrence

1.  `PATTERN-DEPTH-PATHS-01` — **HELD**: Reverted to placeholder state. Its governed Registry Job specifies "Offer one or two legitimate deeper paths...", but accepted Homepage evidence contains three depth paths. Held pending semantic/Registry amendment for multi-path sets.
2.  `SECTION-PROBLEM-01` & `SECTION-PERSISTENCE-01` — Shared semantic territory, but GS1 lifecycle comparison visual structure remains composition-local.
3.  `FAQ-ITEM-01`, `PATTERN-FAQ-GROUP-01`, `SECTION-FAQ-SHORT-01` — Homepage uses interactive `<details>` disclosure; GS1 uses always-visible numbered direct answers. Defer variant contract to FAQ Master Composition.
4.  `PATTERN-BRAND-SIGNATURE-01` / `SECTION-BRAND-SIGNATURE-01` — GS1 has only a quiet final-CTA eyebrow.
5.  `PATTERN-INTEGRATION-REASSURANCE-01` / `SECTION-INTEGRATION-REASSURANCE-01` — Strong GS1 evidence, but lacks sufficient cross-composition recurrence with Homepage.
6.  layout/image foundations — second composition supports them, but direct canonical breakpoint evidence remains incomplete.

## Composition-Local Structures

-   GS1 Hero right-side Reality Sync Axis ledger.
-   Lifecycle mismatch comparison table.
-   Data Carrier vs Standard Link URI two-panel treatment.
-   Blue technical-peak section treatment.
-   Three-boundary role grid.
-   Standards-maintenance callout.

## Authority Corrections Applied

Neutralized/removed generated Stitch claims & restored historical provenance:
- Restored pre-existing historical `sources` and `sourceCompositions` entries across all Registry records.
- Corrected `visualEvidence` Registry fields to `REFERENCE_PAGE_ACCEPTED`.
- Neutralized all fixture copy in `harness-fixtures.ts`, replacing all capability, resolution, governance, and product assertions with purely structural design system copy.
- Enforced required imageSrc/imageAlt media contract on HumanRealityHero.

## Reconstruction Standard

Non-route Interface Harness (`src/design-system/dev/InterfaceHarness.astro`) proves integrated cross-composition relationships for both Homepage and GS1 Pillar compositions across extracted owners, using neutral fixture data.

Public route (`src/pages/gs1-digital-link.astro`) was preserved without modification.

## Registry & Placeholder Synchronization

-   `COMPOSITION-GS1-PILLAR-01` visual status set to `REFERENCE_PAGE_ACCEPTED`, visual evidence set to `REFERENCE_PAGE_ACCEPTED`.
-   The 6 extracted owners updated in `DOCS/DESIGN/WEB/UNFICT-WEB-INTERFACE-REGISTRY-001-v0.1.md` and `src/design-system/registry/interface-registry.ts` with `visualStatus: CANDIDATE_EXTRACTED` and `implementationStatus: IMPLEMENTED`.
-   6 implemented placeholders removed from `src/design-system/metadata/INTERFACE-PLACEHOLDERS.json`.
-   Placeholder count before: 45
-   Placeholder count after: 39 (39 remaining tracked interface placeholders)

## Validation Results

-   `pnpm run format:check` — PASSED
-   `pnpm run lint` — PASSED
-   `pnpm run typecheck` — PASSED
-   `pnpm run icons:validate` — PASSED (127 assets verified)
-   `pnpm run interface:validate` — PASSED (83 records verified)
-   `pnpm run test` — PASSED (38 vitest tests passed, including full-field Markdown/TS Registry parity assertion)
-   `pnpm run build` — PASSED (10 static pages built)
-   `pnpm run ci` — PASSED
-   `pnpm run interface:check-release` — Expected release check failure (39 remaining interface placeholders).
-   `pnpm run icons:check-release` — Expected release check failure (126 remaining tracked icon placeholders).

## Final Recommendation

The second governed extraction cycle successfully ingested GS1 Pillar evidence, validated 6 recurring owners against the Homepage visual language, held 1 candidate (`PATTERN-DEPTH-PATHS-01`) due to an explicit 3-path vs 2-path Job conflict, demonstrated integrated cross-composition relationships in the Interface Harness, and synchronized all static/runtime registry projections and placeholder overlays without modifying public routes.
