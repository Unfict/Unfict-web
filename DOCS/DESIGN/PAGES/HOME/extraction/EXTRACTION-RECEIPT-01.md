# UNFICT DESIGN EXTRACTION RECEIPT

## Identity
- Composition ID: `COMPOSITION-HOME-01`
- Evidence version: Homepage Stitch working evidence — 22 September 2026
- Mandate ID: `JULES-UNFICT-HOME-EVIDENCE-EXTRACTION-01`
- Date: 22 September 2026
- Starting HEAD: `8cb2de1` (supersedes preparation SHA `c5f2b973fa517fd992b8407c5bb86dd032283dbe`)
- Final Pushed HEAD: `PR #4 commit update` (pushed to branch `design/homepage-evidence-extraction-01`)
- Reviewer: Chair + Jules.google.com
- Status: FIRST CONSERVATIVE EXTRACTION COMPLETE & CORRECTIONS APPLIED — NOT VISUALLY FROZEN

## Evidence Paths & Visual Completeness
- Raw Stitch Export: `DOCS/DESIGN/PAGES/HOME/stitch-export/code.html`
- Stitch Design Context: `DOCS/DESIGN/PAGES/HOME/stitch-export/DESIGN.md`
- Reference Image: `DOCS/DESIGN/PAGES/HOME/reference/source-full.png` (`304 × 1600` preview)
- Visual Evidence Completeness: `PARTIAL` (Canonical direct 1440px desktop and 390px mobile baseline captures are not present in evidence; raw Stitch export is reference-only)

## Whole Composition Reading
- Page Job: Establish the active Unfict acquisition experience; make the continuity-through-change problem understandable at low public complexity, then provide legitimate paths into GS1 and developer depth.
- Primary action: `See how it works` in the Hero; final conversion action is `Request developer preview`.
- Secondary actions: `Explore GS1 Digital Link`, deeper role/resource paths, FAQ exploration.
- Visual peak: Reality-first dark Hero anchored by a real physical product, followed by a high-emphasis Reality-gap transition.
- Major rhythm: dark Reality Hero → problem/reality gap → continuity explanation → simple how-it-works → GS1 credibility → progressive depth → FAQ → quiet Brand signature/final CTA → Footer.
- Image role: documentary physical-product evidence / Reality anchor, not generic office decoration.
- Technical-depth role: progressively disclosed; acquisition first, GS1 later, developer depth later still.

## Existing Owners Reused / Matched
- `SHELL-WEB-PUBLIC-01` — Header/main/Footer shell Job.
- `GLOBAL-HEADER-01` — persistent Brand orientation, primary navigation and CTA.
- `GLOBAL-FOOTER-01` — persistent Brand closure, navigation/legal context.
- `NAV-WEB-PRIMARY-01` — primary Web navigation scope.
- `BUTTON-PRIMARY-01` — dominant primary action primitive.
- `TEXT-LINK-01` — secondary navigational/depth action primitive.
- `PATTERN-HERO-ACTION-01` — one dominant Hero action plus subordinate standards path.
- `SECTION-HERO-HUMAN-01` — Reality-first environmental/product image Hero evidence.
- `PATTERN-CONCEPT-FLOW-01` — ordered three-step conceptual explanation.
- `SECTION-CONCEPTUAL-MODEL-01` — bounded how-it-works section using concept flow.
- `PATTERN-DEPTH-PATHS-01` — deliberate paths for business, GS1, and developer depth.
- `PATTERN-FAQ-GROUP-01` / `SECTION-FAQ-SHORT-01` — short FAQ disclosure group.
- `PATTERN-BRAND-SIGNATURE-01` / `SECTION-BRAND-SIGNATURE-01` — quiet Reality Sync culmination.
- `PATTERN-FINAL-CTA-01` / `SECTION-FINAL-CTA-01` — final legitimate conversion action.

## Extracted Owners (6 Authorized Targets)

1. `BUTTON-PRIMARY-01` (`src/design-system/primitives/Button.astro`)
   - Layer: primitive
   - Status: Extracted & Implemented. Removed from `INTERFACE-PLACEHOLDERS.json`.
   - Contract: Dominant legitimate action primitive using Unfict Blue background, active square alignment marker, hover/focus states with governed Brand tokens, and IBM Plex Sans font.

2. `TEXT-LINK-01` (`src/design-system/primitives/TextLink.astro`)
   - Layer: primitive
   - Status: Extracted & Implemented. Removed from `INTERFACE-PLACEHOLDERS.json`.
   - Contract: Subordinate depth/navigational link primitive with text-underline-offset and hover color transition.

3. `NAV-WEB-PRIMARY-01` (`src/design-system/navigation/NavWebPrimary.astro`)
   - Layer: navigation
   - Status: Extracted & Implemented. Removed from `INTERFACE-PLACEHOLDERS.json`.
   - Contract: Primary desktop web navigation with current-page active state, CTA integration using `Button.astro`, and responsive CSS rules hiding desktop navigation on mobile viewports (<768px) to prevent capability leakage.

4. `GLOBAL-HEADER-01` (`src/design-system/components/GlobalHeader.astro`)
   - Layer: component
   - Status: Extracted & Implemented. Removed from `INTERFACE-PLACEHOLDERS.json`.
   - Contract: Global header with sticky positioning, Unfict motif mark via `UfIcon`, vertical rule, canonical vector wordmark via `UfWordmark.astro`, `REALITY SYNC` sub-tag in IBM Plex Sans (BRAND-001 §8.4), and `NavWebPrimary`.

5. `GLOBAL-FOOTER-01` (`src/design-system/components/GlobalFooter.astro`)
   - Layer: component
   - Status: Extracted & Implemented. Removed from `INTERFACE-PLACEHOLDERS.json`.
   - Contract: Institutional footer with brand signature using `UfWordmark.astro`, product/company/legal navigation groups, optional description prop, and copyright notice. Non-authoritative status node and hardcoded description copy removed.

6. `SHELL-WEB-PUBLIC-01` (`src/design-system/shells/PublicWebShell.astro`)
   - Layer: shell
   - Status: Extracted & Implemented. Removed from `INTERFACE-PLACEHOLDERS.json`.
   - Contract: Public Web framing with accessible skip-to-content link, sticky `GlobalHeader`, main content region (`#main-content`), and `GlobalFooter`.

## Owners Intentionally Held at Existing Governed State (14)

- `GLOBAL-MOBILE-NAV-01` (Tracked Placeholder)
- `PATTERN-HERO-ACTION-01` (Tracked Placeholder)
- `SECTION-HERO-HUMAN-01` (Tracked Placeholder)
- `PATTERN-CONCEPT-FLOW-01` (Tracked Placeholder)
- `SECTION-CONCEPTUAL-MODEL-01` (Tracked Placeholder)
- `PATTERN-DEPTH-PATHS-01` (Tracked Placeholder)
- `PATTERN-FAQ-GROUP-01` (Tracked Placeholder)
- `SECTION-FAQ-SHORT-01` (Deferred / Not Implemented)
- `PATTERN-BRAND-SIGNATURE-01` (Tracked Placeholder)
- `SECTION-BRAND-SIGNATURE-01` (Tracked Placeholder)
- `PATTERN-FINAL-CTA-01` (Tracked Placeholder)
- `SECTION-FINAL-CTA-01` (Tracked Placeholder)
- `SECTION-PROBLEM-01` (Deferred / Not Implemented)
- `SECTION-PERSISTENCE-01` (Deferred / Not Implemented)

All 14 held owners remain at their existing governed state. Deferred owners were NOT inserted into `INTERFACE-PLACEHOLDERS.json`.

## Composition-Local Structures
- Hero right-side destination ledger / lifecycle panel: kept composition-local observation.
- Reality-gap three-panel narrative treatment: kept composition-local observation.
- Day 1 / Day 180 / Year 2+ persistence sequence: kept composition-local observation.
- Sync-axis / blue square registration marker: recorded as visual grammar / foundation candidate observation.

## Pattern Gaps
- None declared; all observed Jobs matched existing Registry records.

## Placeholder Metadata Counts
- Initial tracked placeholders count: 51
- Extracted placeholders removed: 6
- Remaining tracked placeholders count: 45

## Reconstruction
- Environment: Integrated Non-route Interface Harness (`src/design-system/dev/InterfaceHarness.astro`) and Vitest harness tests.
- Result: Extracted owners demonstrate integrated shell framing, header orientation, primary navigation, main content relationships, and footer closure without hard-coding promotional claims or modifying `src/pages/index.astro`.

## Unresolved Items & Evidence Limitations
- Canonical 1440px desktop and 390px mobile visual baseline captures remain absent from evidence package (source-full.png is a 304x1600 preview).
- Mobile navigation drawer remains held at `GLOBAL-MOBILE-NAV-01` pending canonical mobile evidence.
- Public page content and route replacement (`src/pages/index.astro`) remain blocked pending content truth and responsive evidence ratification.

## Validation Gates & Release Check
- `pnpm run format:check`: PASS
- `pnpm run lint`: PASS
- `pnpm run typecheck`: PASS
- `pnpm run icons:validate`: PASS
- `pnpm run interface:validate`: PASS
- `pnpm run test`: PASS
- `pnpm run build`: PASS
- `pnpm run ci`: PASS
- `pnpm run interface:check-release`: Expected failure reporting exactly 45 remaining interface placeholders.
- `pnpm run icons:check-release`: Expected failure reporting remaining icon placeholders.

## Final Recommendation
- **EXTRACTION CORRECTIONS COMPLETE**
- PR #4 updated and ready for Chair review.
