# GS1 Pillar Shell Override

**Authority:** Chair instruction, 22 September 2026\
**Applies to:** `COMPOSITION-GS1-PILLAR-01`

## Decision

The Stitch-generated GS1 page Header, primary navigation, profile/avatar
treatment, and Footer are rejected as composition evidence for reusable
global shell ownership.

Use the global shell extracted from the Homepage instead.

Required runtime owners:

``` text
SHELL-WEB-PUBLIC-01
├── GLOBAL-HEADER-01
│   └── NAV-WEB-PRIMARY-01
└── GLOBAL-FOOTER-01
```

For the GS1 route, the canonical primary navigation active state is:

``` text
activeHref="/gs1-digital-link"
```

## Explicitly Reject From Stitch Header

Do not extract or reproduce:

-   the typeset `UNFICT` replacement for the proprietary wordmark;
-   the square substitute mark;
-   the profile/avatar image;
-   the changed Header CTA treatment;
-   the Stitch-specific active-nav underline implementation if it
    conflicts with `NAV-WEB-PRIMARY-01`;
-   any separate Header component or variant created solely for this
    page.

## Explicitly Reject From Stitch Footer

Do not extract or reproduce:

-   `Architecture` navigation invented by Stitch;
-   `Resolution Protocol`;
-   `Identity Continuity`;
-   `Edge Node Topology`;
-   `Standards Alignment`;
-   `SDKs & Spec Repo`;
-   `GS1 Global Conformance`;
-   `EU DPP Framework`;
-   `Security & Encryption`;
-   `Authoritative Root Registry`;
-   `ROOT LEDGER SYNC ACTIVE`;
-   `Protocol: GS1 Digital Link v1.2`;
-   `< 28ms Global SLA`;
-   any other invented route, status, standard, security, performance,
    or governance claim.

The current `GLOBAL-FOOTER-01` groups and links remain authoritative
unless separately amended.

## Extraction Interpretation

The source screenshot is not reconstructed literally at its top and
bottom.

The governed reconstruction target is:

``` text
Homepage-extracted Header/Nav
+
accepted GS1 body
+
Homepage-extracted Footer
```

This override is deliberate and must be documented in the extraction
receipt as an authorized evidence correction, not treated as a visual
mismatch.
