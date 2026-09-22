# COMPOSITION-GS1-PILLAR-01 --- Design Evidence Package 01

**Composition:** `COMPOSITION-GS1-PILLAR-01`\
**Route:** `/gs1-digital-link`\
**Web Archetype:** `PAGE-ARCHETYPE-PILLAR`\
**Date:** 22 September 2026\
**Chair disposition:** **BODY COMPOSITION ACCEPTED FOR GOVERNED
EXTRACTION; STITCH HEADER/NAV/FOOTER REJECTED; USE HOMEPAGE-EXTRACTED
GLOBAL SHELL; NOT VISUALLY FROZEN.**

## 1. Purpose

This package freezes the supplied Google Stitch GS1 Digital Link
composition as design evidence and prepares the second governed Unfict
Web extraction cycle.

The Chair accepted the **GS1 page body composition** as the design
direction to extract.

The Stitch-generated Header, primary navigation, profile/avatar
treatment, and Footer are explicitly **not accepted**. The canonical
public shell is the one already extracted from `COMPOSITION-HOME-01`.

The effective visual composition for extraction is therefore:

``` text
GLOBAL-HEADER-01 / NAV-WEB-PRIMARY-01 from Homepage extraction
↓
accepted GS1 Pillar body evidence
↓
GLOBAL-FOOTER-01 from Homepage extraction
```

## 2. Current Repository Baseline

Observed `main` at package preparation:

`174c03646253470a93381e1e9c3cc3c9c0c0d9e2`

This is the merge commit of Homepage extraction PR `#4`.

Jules SHALL fetch current `main` at execution time and use the actual
HEAD if it has moved.

Homepage extraction established these working owners:

-   `BUTTON-PRIMARY-01`
-   `TEXT-LINK-01`
-   `NAV-WEB-PRIMARY-01`
-   `GLOBAL-HEADER-01`
-   `GLOBAL-FOOTER-01`
-   `SHELL-WEB-PUBLIC-01`

They are reused here. They are not redesigned from the Stitch GS1
export.

## 3. Evidence Included

-   `reference/source-full.png` --- supplied Stitch full-page preview,
    `326 × 1600`.
-   `stitch-export/code.html` --- raw Stitch HTML, reference only.
-   `stitch-export/DESIGN.md` --- raw Stitch-generated design context,
    reference only.
-   `SHELL-OVERRIDE.md` --- Chair-authorized shell correction.
-   `extraction/EXTRACTION-RECEIPT-01.md` --- pre-extraction
    evidence/classification receipt.
-   `../../STITCH/STITCH-UNFICT-GS1-PILLAR-01-v0.1.md` --- controlling
    page-specific Stitch mandate.

SHA-256:

``` text
source-full.png  f7c8d43fd2c71a4a22ecae1099a14f42a53d2690bed46999ace94b498ac30e7d
code.html        976cfec71065b30ff059a218dbc1c43f5d1c7d8ce95f6c2abf1acd732880029b
DESIGN.md        517ab8b29b6d375b740485c91733659c186b95363b308c8a051d071409bae5bf
Stitch mandate   342f5a632913d12baead56c38d8b6a0fd71a9533d9d4752b8f59d390273c657d
```

## 4. Evidence Completeness

**PARTIAL.**

The supplied screenshot is a narrow `326 × 1600` full-page preview. It
is useful direct visual evidence, but it is not the mandate's canonical
`1440px` desktop capture and is narrower than the requested `390px`
mobile master.

The raw HTML contains responsive intent, but generated responsive code
is not equivalent to direct visual evidence at the required breakpoints.

Therefore:

-   body design extraction is authorized;
-   responsive implementation may be reconstructed conservatively;
-   no claim of complete desktop/mobile visual validation is allowed;
-   `GLOBAL-MOBILE-NAV-01` remains separately governed;
-   public route replacement remains blocked unless separately
    authorized.

## 5. Whole Composition Reading

Accepted body sequence:

1.  Reality-first dark GS1 Hero.
2.  Lifecycle mismatch / product stays, destination changes.
3.  GS1 Digital Link plain-language standards separation.
4.  Five-step conceptual resolution model as the technical peak.
5.  Unfict operational role and explicit non-replacement boundaries.
6.  Progressive depth paths.
7.  Short GS1 FAQ.
8.  Quiet final preview CTA.

The body succeeds because it moves from relevance to moderate technical
explanation without becoming developer documentation.

## 6. Critical Authority Correction

The raw Stitch export is **not** implementation authority.

In particular, do not import:

-   Tailwind CDN or Tailwind-generated architecture;
-   Material Symbols;
-   remote Google-hosted assets as production dependencies;
-   the Stitch-generated Header or Footer;
-   the profile/avatar;
-   IBM Plex Serif;
-   Stitch's generated off-palette blues and neutral palette;
-   generated exact standards versions, SLAs, performance numbers, or
    roadmap claims;
-   generated system/capability semantics.

The active Brand authority requires IBM Plex Sans for
headings/body/navigation and states that there is no separate display
typeface. `#1965EC` is the canonical Unfict Blue.

## 7. Extraction Doctrine

This is the second Master Composition and therefore the first meaningful
cross-composition recurrence test.

Extraction SHALL ask:

``` text
What survived Home + GS1?
What is genuinely the same Job?
What is a legitimate variant?
What remains GS1-local?
What remains unresolved?
```

It SHALL NOT maximize the number of promoted owners.

## 8. Public Route Boundary

Do not replace or materially rewrite `src/pages/gs1-digital-link.astro`
in this extraction PR unless the Chair separately authorizes page
implementation.

This PR is evidence intake + design-system extraction + integrated
non-route reconstruction.

## 9. Status

``` text
BODY VISUAL DIRECTION: ACCEPTED FOR EXTRACTION
HEADER/NAV/FOOTER FROM STITCH: REJECTED
HOMEPAGE GLOBAL SHELL: REQUIRED
VISUAL FREEZE: NO
RESPONSIVE EVIDENCE: PARTIAL
PUBLIC ROUTE IMPLEMENTATION: NOT AUTHORIZED
USABILITY VALIDATION: NOT CLAIMED
```
