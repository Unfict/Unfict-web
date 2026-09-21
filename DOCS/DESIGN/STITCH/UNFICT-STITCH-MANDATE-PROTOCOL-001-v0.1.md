# UNFICT-STITCH-MANDATE-PROTOCOL-001

## Google Stitch Mandate, Iteration, Acceptance & Handoff Protocol

**Canonical ID:** `UNFICT-STITCH-MANDATE-PROTOCOL-001`  
**Version:** `0.1`  
**Status:** `DRAFT — CREATIVE AGENT OPERATING PROTOCOL / FOR CHAIR REVIEW`  
**Date:** 21 September 2026  
**Issued For:** Founder / Chair · Unfict  
**Primary Tool:** Google Stitch  
**Persistent Context:** `UNFICT-STITCH-DESIGN-CONTEXT-001 v0.1`  
**Governing Web System:** `UNFICT-WEB-INTERFACE-SYSTEM-001 v0.1`  
**Extraction Protocol:** `UNFICT-WEB-DESIGN-EXTRACTION-PROTOCOL-001 v0.1`  
**Registry:** `UNFICT-WEB-INTERFACE-REGISTRY-001 v0.1`

---

# 0. Purpose

This protocol governs how Unfict issues design mandates to Google Stitch and converts successful Stitch output into controlled visual evidence.

Its purpose is to maximize:

- visual quality;
- multi-page family consistency;
- prompt reliability;
- preservation of Brand and ZyUX constraints;
- creative freedom where visual decisions remain unresolved;
- traceable design evidence for later extraction and implementation.

It also prevents:

- overlong prompts;
- all-at-once site generation;
- context drift;
- component-first visual fragmentation;
- accidental content invention;
- visual drift across independent screens;
- engineering placeholders becoming creative precedent;
- Stitch-generated HTML becoming production architecture without review.

---

# 1. Operating Model

Stitch is treated as a:

> **Whole-Composition Creative Agent**

It is not the final production implementation authority.

Canonical flow:

```text
AUTHORITIES
Brand + ZyUX + Content + Context
        ↓
PAGE-SPECIFIC STITCH MANDATE
        ↓
COMPLETE COMPOSITION
        ↓
SURGICAL ITERATION
        ↓
CHAIR ACCEPTANCE
        ↓
DESIGN EVIDENCE PACKAGE
        ↓
EXTRACTION
        ↓
JULES IMPLEMENTATION
```

---

# 2. Governing Creative Doctrine

> **Design the complete experience first. Extract reusable owners afterward.**

Do not ask Stitch to invent the Unfict component library in isolation before complete-page evidence exists.

Creative discovery flows:

```text
COMPOSITION
→ SECTION
→ PATTERN
→ COMPONENT
→ PRIMITIVE
→ FOUNDATION NORMALIZATION
```

Production implementation later composes in the opposite direction.

---

# 3. Mandate Types

Use four distinct mandate types.

## Type A — Master Composition Mandate

Creates a new complete page.

Examples:

```text
STITCH-UNFICT-HOME-01
STITCH-UNFICT-GS1-01
STITCH-UNFICT-ABOUT-01
STITCH-UNFICT-FAQ-01
STITCH-UNFICT-ARTICLE-01
```

## Type B — Surgical Revision Mandate

Changes one meaningful aspect of an existing composition.

Example:

```text
STITCH-UNFICT-HOME-01-R03
```

## Type C — Responsive Proof Mandate

Produces or corrects mobile/tablet adaptation of an already accepted desktop composition.

## Type D — Cross-Composition Consistency Pass

Applies only locked family-level rules across multiple selected screens.

It SHALL NOT flatten intentional differences between page archetypes.

---

# 4. One Page at a Time

Do not ask Stitch to design the entire site in one prompt.

Recommended sequence:

```text
1. Home
2. GS1 Digital Link pillar
3. About
4. FAQ
5. Article
```

Complete and accept each page before relying on it as a visual parent.

A later page may be designed while an earlier page is technically being implemented, but visual acceptance order should remain clear.

---

# 5. Why Homepage Comes First

The Homepage establishes the broad visual parent:

```text
brand atmosphere
header/footer character
image relationship
page rhythm
Blue restraint
primary action hierarchy
section transition behavior
```

It should be fully corrected before it becomes reference material for later pages.

---

# 6. Persistent Input Package

Every major Master Composition mandate SHALL provide:

```text
1. UNFICT-STITCH-DESIGN-CONTEXT-001
2. page-specific mandate
3. approved page content
4. approved logo/mark assets
5. selected accepted visual-parent screenshots
6. any page-specific diagrams/images/reference assets
```

Do not rely on Stitch remembering previous screens.

---

# 7. Visual Parent Package

For `COMPOSITION-HOME-01`:

```text
Brand assets
context
content
```

For `COMPOSITION-GS1-PILLAR-01`:

```text
all above
+ accepted Homepage desktop
+ accepted Homepage mobile
```

For About:

```text
+ selected accepted Home reference
+ selected accepted GS1 reference
```

For FAQ:

```text
+ selected Home
+ selected GS1
+ selected About
```

For Article:

```text
+ representative accepted family references
```

Do not attach every screenshot ever produced.

Select enough evidence to stabilize family resemblance without overwhelming the task.

---

# 8. Reference Priority

When references conflict, use this order:

```text
1. Ratified Brand
2. Active ZyUX / public content authority
3. Current Chair mandate
4. UNFICT-STITCH-DESIGN-CONTEXT
5. Accepted active Unfict Master Composition
6. Accepted active component reference
7. Legacy Zyppi design evidence
8. Stitch exploration
9. Engine placeholder
```

Engine placeholders are lowest-priority visual material.

---

# 9. Required Prompt Anatomy

Every Master Composition mandate SHALL contain:

```text
REFERENCE
CONTEXT
PAGE JOB
CONTENT & REQUIRED REGIONS
STYLE
LOCKED
CREATIVE FREEDOM
PLATFORM
OUTPUT
```

This extends the effective Stitch prompt shape:

```text
Context
Content & components
Style
Platform
```

without turning the prompt into a full engineering specification.

---

# 10. REFERENCE Block

State:

```text
what context document applies
what prior accepted screens are attached
what assets are authoritative
what legacy references are only secondary evidence
```

Example:

```text
REFERENCE:
Use UNFICT-STITCH-DESIGN-CONTEXT-001 as the persistent design context.
Use the attached accepted Homepage screenshots as the primary visual-family reference.
Use the supplied Unfict mark/wordmark artwork exactly.
Do not use interface-engine placeholders as visual references.
```

---

# 11. CONTEXT Block

State briefly:

```text
what Unfict is
who this page serves
what this page should feel like
```

Do not repeat the entire persistent context.

The context block should be page-specific.

---

# 12. PAGE JOB Block

One sentence.

Examples:

```text
Help a developer understand why persistent GS1 Digital Link resolution matters and give them a legitimate path to go deeper.

Help a first-time visitor understand what Unfict is and why Reality Sync matters.

Help a technically literate reader get a direct answer quickly and expand only when needed.
```

The Job is the central design criterion.

---

# 13. CONTENT & REQUIRED REGIONS Block

Specify:

- exact approved H1;
- exact support copy;
- primary CTA;
- secondary CTA if authorized;
- required sections;
- required diagrams;
- required FAQ categories;
- article content requirements;
- required footer/header behavior.

Use real UI vocabulary.

Do not say:

```text
add some features
make a cool section
show technology
```

Say:

```text
conceptual flow diagram
FAQ disclosure group
editorial intro
final CTA
documentary product image
```

---

# 14. Do Not Over-Specify the Visual Solution

Required regions define Jobs and content.

They should not predesign every pixel.

Wrong:

```text
Place exactly three cards in a 4/4/4 grid with 24px gaps,
then a gray band,
then another three cards...
```

unless that exact composition is already approved authority.

Better:

```text
Explain the three concepts clearly as one coherent region.
You may choose columns, an annotated flow, or another restrained institutional composition.
```

---

# 15. STYLE Block

Include only:

- Brand palette;
- font family;
- stable visual attitude;
- stable prohibitions;
- any page-specific density/imagery direction.

Do not repeat unresolved token values as if frozen.

---

# 16. LOCKED Block

Explicitly list what Stitch may not change.

Typical:

```text
brand identity
logo geometry
palette
font families
canonical copy
navigation scope
CTA semantics
product claims
accepted/frozen reusable owners
semantic boundaries
```

This block protects authority.

---

# 17. CREATIVE FREEDOM Block

Explicitly state what Stitch should explore.

Typical:

```text
overall composition
scale
negative space
image placement
section pacing
asymmetry
technical diagram placement
content grouping
visual transition
```

This prevents the prompt from over-constraining Stitch into a mechanical template renderer.

---

# 18. PLATFORM Block

Minimum:

```text
Responsive Web page.
Desktop-first design proof around 1440px.
Also produce or validate a mobile adaptation around 390px.
Preserve viability at 360px and narrow widths.
This is not a native mobile app.
```

Page-specific mandates may add reading-width or dense-information requirements.

---

# 19. OUTPUT Block

For Master Composition work:

```text
Produce one complete coherent page.
Do not create a component board.
Do not invent unrelated pages.
Do not rewrite supplied copy.
Do not add speculative product capabilities.
```

Where relevant:

```text
Show desktop first.
Then provide mobile proof after the desktop direction is accepted.
```

---

# 20. Prompt Length Discipline

Do not attempt to encode the entire governance corpus into a single Stitch prompt.

The persistent context carries stable rules.

The page mandate should remain:

```text
specific
compact
high-signal
page-focused
```

If a prompt becomes very long, split:

```text
initial generation
+
short follow-up corrections
```

Do not rely on a 5,000+ character monolithic correction prompt to solve everything at once.

---

# 21. Initial Generation Strategy

For a new page:

1. provide context;
2. provide page mandate;
3. provide approved references;
4. request one strong complete composition;
5. review the whole page before local details.

If Stitch supports multiple directions without degrading quality, exploratory alternatives may be useful early.

Do not generate many directions simply to maximize choice.

---

# 22. Review Order

Review each generation in this order:

```text
1. Does the whole page solve the Job?
2. Does it belong to Unfict?
3. Does hierarchy work?
4. Does the page have coherent rhythm?
5. Is image/diagram behavior right?
6. Is action priority right?
7. Are individual details correct?
```

Do not begin with tiny icon spacing if the whole composition is wrong.

---

# 23. Surgical Revision Rule

> **One meaningful change per prompt.**

A surgical revision SHOULD identify:

```text
target element
desired change
what must stay unchanged
```

Example:

```text
Keep the entire page structure and all copy unchanged.
Modify only the relationship between the hero text and the documentary product image.
Make the image feel integrated into the page rather than placed inside a SaaS-style card.
Preserve the Header, CTA hierarchy, downstream sections, palette, and typography.
```

---

# 24. Prohibited Revision Language

Avoid:

```text
fix everything
make this better
make it more modern
make it premium
redesign the page
improve all spacing
```

These prompts invite uncontrolled regeneration.

---

# 25. Preserve Working States

Whenever a generation becomes materially better:

```text
capture a screenshot
record the screen/version
```

Do this before another revision.

Stitch iteration is not assumed to be perfectly reversible.

---

# 26. Revision ID Convention

Recommended:

```text
STITCH-UNFICT-HOME-01-R01
STITCH-UNFICT-HOME-01-R02
STITCH-UNFICT-HOME-01-R03
```

For responsive:

```text
STITCH-UNFICT-HOME-01-M01
```

For family consistency:

```text
STITCH-UNFICT-FAMILY-CONSISTENCY-01
```

The Stitch UI itself need not display these IDs if inconvenient, but the evidence package should.

---

# 27. Desktop Before Mobile

Default:

```text
accept desktop visual direction
→ produce mobile adaptation
→ reconcile any conflicts
```

Do not fully polish five desktop pages and postpone mobile until the end.

Each page should earn acceptance with responsive proof before final freeze.

---

# 28. Mobile Review

Check:

- heading wrap;
- action priority;
- section order;
- image crop;
- diagram readability;
- navigation behavior;
- disclosure usability;
- reading measure;
- touch density;
- overflow.

Do not accept mobile simply because everything is stacked.

---

# 29. Cross-Page Consistency Pass

After several pages exist, a multi-screen consistency pass may be used.

It may normalize only stable family-level rules such as:

```text
palette
font families
logo treatment
Header identity
Footer identity
approved radius doctrine
approved border language
```

It SHALL NOT normalize away:

```text
intentional page rhythm
archetype-specific density
image placement
technical-vs-editorial character
section order
page-specific asymmetry
```

---

# 30. Family Consistency Prompt Shape

Use:

```text
Apply only the following locked Unfict family rules across the selected accepted screens:
[list exact stable rules]

Preserve every page's intentional composition, content hierarchy, image placement, section rhythm, and archetype-specific character.

Do not redesign the pages.
```

---

# 31. Do Not Use Theme Passes Prematurely

Do not run broad consistency passes on unresolved exploratory screens.

First:

```text
accept each page direction
```

then normalize locked cross-page rules.

Otherwise the consistency pass may spread a poor early decision across the family.

---

# 32. Context Drift Recovery

If Stitch drifts:

1. do not rewrite the entire page mandate immediately;
2. reattach `UNFICT-STITCH-DESIGN-CONTEXT-001`;
3. reattach the closest accepted family reference;
4. state the exact drift;
5. request one correction.

Example:

```text
The current screen drifted from the Unfict family by introducing large rounded SaaS cards and decorative shadows.
Keep the composition and copy unchanged.
Restore the Unfict surface language: open layout, restrained radius, 1px boundaries, no decorative shadows.
```

---

# 33. Partial Generation Recovery

If Stitch omits a requested region:

```text
Do not regenerate the entire page.

Keep all existing accepted regions unchanged.
Add only the missing [named region] in the specified location and style family.
```

---

# 34. Image Misinterpretation Recovery

If an uploaded reference is misread:

- simplify the reference set;
- label the intended role;
- restate whether it is authority or inspiration;
- avoid attaching ambiguous screenshots.

Do not assume Stitch understands why a screenshot was attached.

---

# 35. Brand Asset Rule

Approved Unfict mark and wordmark must be supplied as actual assets.

Do not ask Stitch to redraw or typeset them.

When mark and wordmark appear together, preserve appropriate separation so the mark does not visually read as an extra leading `u`.

---

# 36. Copy Integrity

Canonical content must be supplied directly.

Stitch SHALL NOT:

- rewrite approved copy;
- shorten claims;
- add unsupported qualifiers;
- invent customer names;
- invent statistics;
- invent integrations;
- invent testimonials;
- invent pricing.

If layout pressure exists, redesign the composition rather than silently rewriting authority-controlled text.

---

# 37. Public Capability Boundary

Stitch should only visualize capabilities explicitly present in the page content/mandate.

Do not infer future features from internal terms, icons, or Registry entries.

The Registry is not a marketing feature inventory.

---

# 38. Engine Placeholder Boundary

The parallel Interface Engine may expose placeholder runtime owners.

These may help explain structural Jobs to implementation agents.

They SHALL NOT define visual appearance for Stitch.

If engine evidence must be attached:

```text
label:
STRUCTURAL PLACEHOLDER — NOT VISUAL AUTHORITY
```

---

# 39. Legacy Zyppi Design References

Legacy Zyppi designs may be supplied for:

```text
composition seed
structural evidence
known successful interaction
historical visual continuity
```

They must be labeled:

```text
LEGACY REFERENCE — MIGRATE TO ACTIVE UNFICT BRAND
```

Stitch should not preserve legacy brand identity where it conflicts with Unfict.

---

# 40. Master Composition Acceptance Gate

A page is not accepted because the first generation looks attractive.

Review:

```text
PAGE JOB
BRAND
ZYUX
CONTENT
HIERARCHY
RHYTHM
RESPONSIVE
ACCESSIBILITY RISK
FAMILY CONTINUITY
```

Possible disposition:

```text
ACCEPTED FOR EXTRACTION
ACCEPTED WITH CONDITIONS
CONTINUE ITERATION
REJECT DIRECTION
```

---

# 41. Visual Acceptance vs Component Approval

An accepted page creates:

```text
REFERENCE_PAGE_ACCEPTED
```

evidence.

It does not automatically mean every element inside it becomes an approved reusable component.

The Extraction Protocol determines reusable ownership afterward.

---

# 42. Evidence Freeze Package

When a page is accepted, save:

```text
Composition ID
revision ID
date
desktop screenshot
mobile screenshot
optional tablet screenshot
Stitch screen/export identifier
approved content version
Brand version
page mandate version
known exceptions
known unresolved states
```

Optional:

```text
exported Figma frame
exported HTML/CSS
```

The screenshot is critical because generated code alone is not visual authority.

---

# 43. Canonical Viewport Evidence

Preferred evidence set:

```text
1440 desktop
1280 secondary desktop proof where useful
768 tablet proof where behavior changes materially
390 mobile
360 mobile
320 viability check
```

Do not require every page to have a separate designed screenshot for every width if responsive behavior is already clear.

The implementation/extraction stage may validate intermediate widths.

---

# 44. Export to Figma

Use Figma export where useful for:

- layer inspection;
- spacing measurement;
- vector extraction;
- designer handoff;
- reference preservation.

Figma export does not elevate a design's authority.

Only Chair/authorized acceptance does.

---

# 45. Generated HTML/CSS

Stitch-generated code may be used as:

```text
design evidence
layout clue
measurement clue
responsive clue
```

It is not automatically:

```text
production code
semantic authority
accessibility authority
component architecture
```

Jules should rebuild repository-native implementation.

---

# 46. Stitch → Extraction Handoff

The accepted evidence package SHALL be passed to:

```text
UNFICT-WEB-DESIGN-EXTRACTION-PROTOCOL-001
```

Extraction then determines:

```text
reuse existing owner
approved variant
new owner
composition-local structure
reject/redesign
```

Do not perform component extraction informally inside Stitch unless specifically requested for analysis.

---

# 47. Stitch → Jules Handoff

Jules should receive local repository evidence:

```text
accepted screenshots
page content
page mandate
extraction receipt
owner contracts
responsive references
asset references
```

Do not assume Jules can access the live Stitch project.

External Stitch links alone are insufficient.

---

# 48. No Direct Stitch-to-Production Contract

Prohibited:

```text
Stitch generates HTML
→ paste directly into src/pages
→ ship
```

Required:

```text
Stitch
→ acceptance
→ extraction
→ repository-native implementation
→ tests
→ visual equivalence
```

---

# 49. Prompt Template — Master Composition

```text
# STITCH-UNFICT-[PAGE]-01

## REFERENCE
Use UNFICT-STITCH-DESIGN-CONTEXT-001.
Use the attached accepted Unfict composition screenshots as family references.
Use the supplied Unfict brand assets exactly.
Do not use engine placeholders as visual references.

## CONTEXT
[What this page is and who it serves.]
[3–5 page-specific visual/emotional adjectives.]

## PAGE JOB
[One sentence.]

## CONTENT & REQUIRED REGIONS
[Exact approved content and named required regions.]

## STYLE
Follow the persistent Unfict context.
[Add only page-specific density, image, or diagram direction.]

## LOCKED
Do not alter:
- Brand identity
- supplied copy
- authorized navigation
- CTA semantics
- product claims
- frozen visual owners

## CREATIVE FREEDOM
Explore:
- overall composition
- hierarchy
- whitespace
- scale
- image placement
- rhythm
- section transitions
- diagram placement

Do not mechanically copy another page's layout.

## PLATFORM
Responsive Web page.
Desktop proof around 1440px.
Mobile proof around 390px.
Maintain narrow-mobile viability.

## OUTPUT
Produce one complete coherent page.
Do not create a component board.
Do not invent unrelated pages or product capabilities.
```

---

# 50. Prompt Template — Surgical Revision

```text
Keep the current composition, all approved copy, palette, typography family, navigation, and unaffected sections unchanged.

Modify only:
[exact target]

Desired correction:
[exact result]

Preserve:
[list relationships that must not move]

Do not:
[list likely unwanted regeneration]
```

---

# 51. Prompt Template — Mobile Adaptation

```text
Create the mobile adaptation of this accepted desktop composition.

Preserve:
- Page Job
- exact copy
- primary action hierarchy
- Unfict visual family
- essential diagram meaning
- image intent

Adapt:
- column count
- content order only where necessary
- spacing density
- image crop
- navigation behavior
- diagram layout

Target approximately 390px wide and keep the design viable at 360px.

Do not simply stack every desktop block without considering hierarchy.
```

---

# 52. Prompt Template — Cross-Page Consistency

```text
Apply only these locked Unfict family rules to all selected accepted screens:

[exact palette]
[IBM Plex families]
[logo treatment]
[approved Header/Footer identity]
[approved border/radius doctrine]

Preserve each page's:
- composition
- section rhythm
- content hierarchy
- image placement
- archetype-specific density
- technical/editorial character

Do not redesign or homogenize the pages.
```

---

# 53. Mandate Naming

Recommended:

```text
STITCH-UNFICT-HOME-01
STITCH-UNFICT-GS1-01
STITCH-UNFICT-ABOUT-01
STITCH-UNFICT-FAQ-01
STITCH-UNFICT-ARTICLE-01
```

Revision:

```text
-R01
-R02
```

Responsive:

```text
-M01
-T01
```

Acceptance receipts may use:

```text
UNFICT-STITCH-HOME-01-ACCEPTANCE-REC-01
```

---

# 54. Initial Homepage Mandate Strategy

The first Homepage mandate should prioritize:

```text
whole-page identity
brand atmosphere
Human Reality
primary public Job
GS1 relevance
single primary action
credible technical depth
```

Avoid overloading the initial prompt with every future Web pattern.

The Homepage is the visual parent, not the entire design system.

---

# 55. Initial GS1 Mandate Strategy

The GS1 mandate should explicitly say:

```text
This must clearly belong to the same Unfict institution as the accepted Homepage, but it must solve a deeper technical explanation Job.

Do not clone the Homepage section structure.
```

This is the first major test of true visual-system recurrence.

---

# 56. Initial About Mandate Strategy

The About mandate should introduce more editorial/institutional character without becoming:

```text
founder-story startup page
team-photo corporate template
mission-values card grid
```

It should feel like the same system under a different Job.

---

# 57. Initial FAQ Mandate Strategy

The FAQ mandate should prioritize:

```text
direct answers
calm density
legible disclosure hierarchy
category structure
minimal decorative interruption
```

Avoid turning every answer into a card.

---

# 58. Initial Article Mandate Strategy

The Article mandate should focus on:

```text
reading
technical clarity
editorial restraint
code/figure integration
long-form pacing
related reading
```

It should not inherit marketing-page density.

---

# 59. Failure Condition — Generic SaaS Drift

Reject or correct if Stitch introduces a dominant pattern of:

```text
rounded cards
floating dashboards
gradient blobs
testimonial carousels
logo walls
pricing-style CTA cards
dashboard mockups
generic startup illustrations
```

unless the page Job explicitly requires one of them.

---

# 60. Failure Condition — Visual Novelty Drift

Reject or correct if each page looks like a different design agency made it.

Variety in archetype is desired.

Loss of institutional identity is not.

---

# 61. Failure Condition — Over-Normalization

Reject or correct if a family consistency pass makes:

```text
FAQ
Article
About
GS1
Home
```

feel like the same landing-page template with different content.

Consistency is grammar.

It is not identical syntax.

---

# 62. Failure Condition — Prompt Obedience Over Quality

A page can follow every listed requirement and still be visually weak.

The review authority may reject it for:

```text
poor composition
weak hierarchy
generic rhythm
unconvincing imagery
lack of institutional identity
```

The mandate is not a checklist substitute for visual judgment.

---

# 63. Working Rule for New Visual Decisions

When Stitch introduces a promising new visual treatment:

```text
first occurrence
→ observation

second legitimate recurrence
→ extraction candidate

repeated validated use
→ strong reusable-owner evidence

explicit acceptance
→ approved owner
```

Do not prematurely freeze a first occurrence.

---

# 64. Canonical Operating Sequence

For each page:

```text
PREPARE
↓
ISSUE MASTER MANDATE
↓
GENERATE
↓
WHOLE-PAGE REVIEW
↓
SURGICAL REVISIONS
↓
DESKTOP DIRECTION ACCEPTED
↓
MOBILE PROOF
↓
FAMILY CONSISTENCY REVIEW
↓
CHAIR ACCEPTANCE
↓
FREEZE EVIDENCE
↓
EXTRACTION
↓
JULES IMPLEMENTATION
```

---

# 65. Final Canonical Rule

> **Prompt Stitch enough to understand the Job, Brand, content, and boundaries — but leave enough room for it to design.**

> **Correct one meaningful thing at a time.**

> **Carry accepted visual parents forward deliberately.**

> **Freeze successful complete compositions before extracting reusable parts.**

> **Treat Stitch output as design evidence, not production authority.**

---

**End of `UNFICT-STITCH-MANDATE-PROTOCOL-001 v0.1`**
