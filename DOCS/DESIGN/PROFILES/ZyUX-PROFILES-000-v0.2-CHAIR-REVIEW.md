# ZyUX-PROFILES-000 — Archetype & Application Profile Program

**Canonical ID:** `ZyUX-PROFILES-000`  
**Version:** 0.2  
**Status:** DRAFT — CHAIR REVIEW / UX-EVIDENCE REVISION  
**Series:** `ZyUX` — Unfict Experience Architecture  
**Classification:** Profile Program / Composition Governance  
**Normative Level:** Downstream Program Doctrine — Subordinate to `ZyUX-000–006`  
**Active Master Brand:** **Unfict — Reality Sync**  
**Brand Lineage:** `Zyppi → Unfict`  
**Primary Authority:** `ZyUX-000 v1.0 — RATIFIED — FINAL`  
**Inherited Foundation:** `ZyUX-001` through `ZyUX-006`, all v1.0 Ratified  
**Applies To:** Archetype profiles · Application profiles · Journey definitions · UX acceptance vectors · role/job-specific composition · public, enterprise, developer, operator, compliance, auditor, agency, customer, and agent experience profiles  
**Does Not Authorize:** new constitutional semantics · new Identity law · new Authority law · new Trust law · new application implementation · new market expansion · new host semantics
**Revision Basis:** Claude UX stress test + Chair disposition, 19 September 2026
**Revision Intent:** Preserve the profile architecture while adding an explicit UX maturity ladder, visible-complexity budget, designer-facing output, earlier application-profile composition, evidence-gated profile ratification, and Public Observer priority for the current GS1 wedge.

---

# 0. Program Purpose

`ZyUX-000` permits downstream archetype/application profiles including:

- Developer;
- Organization Admin;
- Public Observer;
- Customer;
- Agency;
- Operator;
- Compliance;
- Auditor;
- Agent.

Those profiles now require a common program architecture before individual documents are produced.

The purpose of `ZyUX-PROFILES-000` is to ensure that a profile is never mistaken for:

- a new constitutional layer;
- a persona-marketing document;
- a role-based permission system;
- a duplicate UX constitution;
- a fixed organization hierarchy;
- a domain ontology;
- a host-specific semantic fork;
- a justification to build every conceivable user surface.

The governing principle is:

> **A profile composes ratified ZyUX law for a recurring Job. It does not create new universal ZyUX law.**

---

# 1. Profile Architecture

The profile layer sits below the ratified horizontal foundation.

```text
ZyUX-000 — Master Experience Doctrine
           │
           ├── ZyUX-001 — Entry / Account / Access
           ├── ZyUX-002 — Organization / Relationship / Delegation
           ├── ZyUX-003 — Context / Disclosure / Action State
           ├── ZyUX-004 — Explanation / Evidence / Trust / Receipt
           ├── ZyUX-005 — Host-Native Experience
           └── ZyUX-006 — Lifecycle / Recovery / History
                         │
                         ▼
              COMPOSITION PROFILE LAYER
                         │
          ┌──────────────┴──────────────┐
          │                             │
          ▼                             ▼
   Archetype Profiles            Application Profiles
   recurring actor/Job           recurring application Journey
          │                             │
          └──────────────┬──────────────┘
                         ▼
                  Actual Experience
                         │
             Human UI / Host / API / MCP
```

Profiles SHALL remain subordinate to `ZyUX-000–006`.

---

# 2. Profile Types

## 2.1 Archetype Profile

An Archetype Profile describes a recurring experience pattern defined primarily by:

- Job;
- relationship/capacity;
- Authority/Standing shape;
- information/proof needs;
- context-switching behavior;
- interface/host expectations;
- lifecycle characteristics.

Examples:

```text
Developer
Organization Admin
Public Observer
Customer
Agency
Operator
Compliance
Auditor
Agent
```

An archetype is **not** equivalent to a constitutional Role.

It is an experience composition.

A single Subject may occupy multiple archetypes at different times or simultaneously.

Example:

```text
Ahmed
├── Developer for Company A
├── Organization Admin for Company X
├── Customer in personal context
└── Public Observer when scanning anonymously
```

No new Subject is created by changing archetype.

---

## 2.2 Application Profile

An Application Profile describes how the ZyUX foundation and relevant archetypes compose around a governed application or recurring application Journey.

Potential future examples:

```text
GS1 Resolution
DPP
Warranty
Recall
Product Registration
Evidence Review
Shipment Release
```

An Application Profile SHALL NOT redefine the underlying Domain, Application, Capability, Evidence, Trust, Authority, Policy, Runtime, or Receipt semantics.

It answers:

> **How should this governed application be experienced by the Subjects who legitimately participate in it?**

---

## 2.3 Composite Profile

A Composite Profile MAY be created only where an archetype and application combination produces substantial, durable experience divergence that cannot be represented cleanly by referencing the two parent profiles.

Example candidate:

```text
DPP Compliance Reviewer
```

A Composite Profile is exceptional.

Default architecture is composition by reference:

```text
ZyUX-COMPLIANCE-001
+
ZyUX-APP-DPP-001
=
DPP compliance experience
```

not:

```text
new document for every persona × application combination
```

---

# 3. What Is Not a Profile by Default

The following SHALL NOT automatically receive separate profiles:

- enterprise;
- SMB;
- sole trader;
- department;
- branch;
- country;
- industry;
- host vendor;
- language;
- device size;
- pricing plan;
- job title;
- permission tier;
- marketing persona;
- account type.

These dimensions should ordinarily be represented as context applied to a profile.

Example:

```text
Organization Admin
× multinational organization
× SAP host
× Germany
× DPP application
```

should not automatically become:

```text
ZyUX-GERMAN-MULTINATIONAL-SAP-DPP-ADMIN-001
```

---

# 4. Profile Creation Gate

A new profile MAY be created only if at least one of the following materially diverges from existing profiles:

1. **Job** — the recurring task/outcome is materially different.
2. **Authority shape** — the way legitimate action is obtained/exercised materially differs.
3. **Disclosure need** — the information/proof legitimately visible is materially different.
4. **Cognitive model** — the Subject must understand fundamentally different concepts.
5. **Journey structure** — entry → work → result → lifecycle is materially different.
6. **Interface model** — Human UI, REST, SDK, MCP, public Resolution, or Host-Native surface materially changes the experience.
7. **Lifecycle model** — offboarding/recovery/history materially differs.
8. **Evidence/proof obligation** — the explanation or audit depth materially differs.

A profile SHALL NOT be created merely because:

```text
a stakeholder has a different title;
a host uses different labels;
a customer is larger;
a market is different;
a UI color/layout changes;
a permission set contains different values.
```

---

# 5. Universal Profile Inheritance

Every profile inherits, without restatement or modification:

```text
ZyUX-L01  Invisible Complexity
ZyUX-L02  Contextual Capability Disclosure
ZyUX-L03  Minimum Necessary Onboarding
ZyUX-L04  Object / Context First
ZyUX-L05  Progressive Explanation
ZyUX-L06  Scope-Bounded Visibility
ZyUX-L07  Bidirectional Scope Isolation
ZyUX-L08  Existing IAM Coexistence
ZyUX-L09  Subject Continuity; Authority Change
ZyUX-L10  No Deep Menu as Complexity Storage
ZyUX-L11  Host-Native Bias
ZyUX-L12  Surface Semantic Parity
ZyUX-L13  Frictionless Entry
ZyUX-L14  Federation Is Additive
ZyUX-L15  Universal Architecture, Narrow GTM
ZyUX-L16  Self-Execution Preservation
```

A profile SHALL NOT create `L17` or redefine any `Lxx` law.

If a profile needs a narrower rule, it MAY define a scoped specialization:

```text
ZyUX-DEVELOPER-S01
ZyUX-ORG-ADMIN-S01
...
```

A specialization SHALL:

- apply only to that profile;
- cite the inherited law(s) it projects;
- never weaken a master law;
- never create constitutional semantics.

---

# 6. Mandatory Horizontal Conformance

Every profile SHALL explicitly map itself to `ZyUX-001–006`.

## 6.1 Entry / Access — `ZyUX-001`

The profile must answer:

- Can the Subject begin anonymously?
- When is authentication actually required?
- What access context is used?
- Is enterprise SSO appropriate?
- What happens after invitation/deep-link/scan?
- How is initiating intent preserved?

---

## 6.2 Relationship / Authority — `ZyUX-002`

The profile must answer:

- In what relationship/capacity is the Subject acting?
- Is the Subject self-executing or acting through lawful agency/delegation?
- What organizational scope matters?
- Is the Subject internal or external?
- What re-delegation/admin concerns exist?

A profile SHALL NOT treat role/title/relationship as Authority.

---

## 6.3 Context / Disclosure / Action — `ZyUX-003`

The profile must define:

### Disclosure state

```text
NON-DISCLOSABLE
DISCLOSABLE
```

### Current action state, where disclosed

```text
AVAILABLE
REQUESTABLE / ESCALATABLE
BLOCKED-BY-STATE
UNAVAILABLE / INFORMATIONAL
```

The profile SHALL NOT collapse disclosure into invocation availability.

---

## 6.4 Explanation / Proof — `ZyUX-004`

The profile must establish its ordinary explanation depth:

```text
Action / Answer
→ Reason
→ Basis
→ Proof
```

It must identify:

- what the Subject usually needs first;
- what uncertainty must be visible;
- what deeper Evidence/Receipt access may legitimately exist;
- what must remain hidden.

---

## 6.5 Host-Native — `ZyUX-005`

The profile must answer:

- Does the Job normally happen inside another system?
- Should Unfict embed there?
- Which host context may be reused?
- What may not be inferred from host context?
- When should the user escape to a deeper Unfict surface?

---

## 6.6 Lifecycle — `ZyUX-006`

The profile must answer:

- How does the relationship begin?
- How does it end?
- What happens to future capability?
- What historical attribution remains?
- What recovery or succession conditions matter?

---

# 7. Canonical Profile Document Template

Every profile SHOULD use the following structure unless a documented reason requires deviation.

```text
0. Status / Authority / Non-Scope
1. Profile Definition
2. Primary Jobs
3. Subject / Relationship / Capacity Model
4. Entry Conditions
5. Context Anchors
6. Information Needs
7. Disclosure & Action-State Matrix
8. Navigation / Work Surface
9. Explanation / Evidence / Trust / Receipt Depth
10. Host-Native Model
11. Lifecycle / Offboarding / Historical Model
12. Primary Journeys
13. Failure / Uncertainty / Recovery States
14. Accessibility / Localization
15. Security / Privacy Review Points
16. Telemetry / Success Measures
17. Acceptance Invariants
18. Canonical UX Test Vectors
19. Drift Prohibitions
20. Open Questions
21. Cross-Profile Dependencies
22. Ratification / Review Gate
```

---

# 8. Profile Definition Requirements

Every profile must begin with a one-sentence definition of the recurring experience pattern.

Example:

> **Developer — A human or software-building Subject integrating, testing, operating, or debugging an Unfict capability through developer-facing interfaces.**

A definition SHALL describe the Job pattern.

It SHALL NOT define the Subject by demographics, company size, seniority, or marketing persona.

---

# 9. Primary Jobs

Each profile should identify no more than approximately 3–7 primary recurring Jobs unless evidence proves the archetype genuinely requires more.

Example Developer Jobs:

```text
Discover capability
Understand contract
Get first successful result
Integrate safely
Move to production
Debug failure
Inspect proof
Operate integration over time
```

Secondary Jobs may be documented but should not dilute the profile.

---

# 10. Journey Architecture

Every profile should represent journeys as state transitions rather than screen inventories.

Preferred:

```text
TRIGGER
↓
ENTRY CONTEXT
↓
FIRST USEFUL VALUE
↓
REPEATED USE
↓
CONSEQUENTIAL ACTION / RESULT
↓
PROOF / FOLLOW-UP
↓
LIFECYCLE CHANGE
```

Avoid:

```text
Dashboard
→ Menu
→ Settings
→ Reports
```

unless those surfaces are genuinely required by the Job.

---

# 11. Disclosure / Action Matrix

Each profile SHALL contain a representative matrix such as:

| Item / Capability | Disclosure | Action State | Ordinary Explanation | Deeper Proof |
|---|---|---|---|---|
| Capability A | Disclosable | Available | Reason | Receipt |
| Capability B | Disclosable | Requestable | Why request needed | Authority basis where allowed |
| Capability C | Disclosable | Blocked-by-state | Missing Evidence | Evidence detail |
| Capability D | Non-disclosable | N/A | None | None |

The matrix is illustrative unless tied to a governed application.

It SHALL NOT become an authorization source.

---

# 12. Explanation Depth by Profile

Profiles should define the **default explanation depth**, not different epistemic semantics.

Illustrative defaults:

```text
Public Observer → Answer + material limitation
Customer        → Answer + Reason + next legitimate action
Operator        → Action + Reason + remediation
Developer       → Structured result + semantic boundary + errors + proof references
Org Admin       → Current scope + reason + Authority/delegation basis where legitimate
Compliance      → Reason + Basis + Evidence + Policy/Authority context
Auditor         → Full authorized reconstructibility
Agent           → Machine-readable result + limitations + lawful next capability
```

The underlying Evidence/Trust/Receipt meaning SHALL remain identical.

---

# 13. Profile Interaction Model

Profiles are composable.

A Subject may transition between them without account recreation.

Example:

```text
Public Observer
→ authenticates
→ Customer
→ later acts as Organization Admin
```

or:

```text
Developer
→ acts for Agency
→ switches client scope
→ enters Operator-like troubleshooting Job
```

The experience should communicate current capacity where ambiguity would affect consequential action.

---

# 14. Archetype vs Constitutional Role

This distinction is mandatory.

```text
ARCHETYPE
= recurring UX / Job composition

ROLE
= governed organizational / authority construct where applicable
```

Therefore:

```text
Compliance archetype
≠ Compliance Officer Role

Organization Admin archetype
≠ universal Admin Authority

Auditor archetype
≠ automatic audit entitlement

Agent archetype
≠ autonomous Authority
```

The profile describes the experience once the lawful context is established.

---

# 15. Archetype vs Account

A profile SHALL NOT imply one account per archetype.

```text
one Subject
→ many contexts
→ many archetypes
```

No account recreation is required merely because the Subject's Job changes.

---

# 16. Archetype vs Host

A host does not define an archetype.

Example:

```text
Operator in SAP
Operator in WMS
Operator in standalone Unfict
```

should ordinarily remain one Operator profile with Host-Native projections.

Create a separate host-specific profile only if the Job, authority, proof, or lifecycle materially diverges—not merely because SAP and WMS use different UI components.

---

# 17. Archetype vs Domain

A domain does not automatically define an archetype.

Example:

```text
Compliance in Commerce
Compliance in DPP
Compliance in Healthcare
```

should inherit the same Compliance archetype unless the regulated Job itself materially diverges.

Domain/application-specific differences belong in Application Profiles.

---

# 18. Initial Archetype Portfolio

The authorized initial candidate portfolio is:

## A. Developer — `ZyUX-DEVELOPER-001`

**Core Job:** discover, integrate, test, operate, and prove Unfict capabilities.

**Primary surfaces:** REST · SDK · OpenAPI · MCP · docs · sandbox · developer console.

**Strongest inherited doctrines:** `000`, `001`, `003`, `004`, `005`.

**Why early:** closest to current public capability/API horizon and necessary precursor for Agent experience.

---

## B. Organization Admin — `ZyUX-ORG-ADMIN-001`

**Core Job:** establish and govern organizational participation without becoming a universal super-user.

**Primary surfaces:** organization creation · invitations · SSO · source connections · delegation · scope · recovery · audit.

**Strongest inherited doctrines:** `001`, `002`, `003`, `005`, `006`.

---

## C. Public Observer — `ZyUX-PUBLIC-OBSERVER-001`

**Core Job:** receive legitimate useful information from an Unfict-enabled constituent without unnecessary authentication.

**Primary surfaces:** scan · link · public Resolution · bounded explanation/proof.

**Strongest inherited doctrines:** `001`, `003`, `004`.

---

## D. Customer — `ZyUX-CUSTOMER-001`

**Core Job:** move from public observation into a governed relationship around an owned/used product, service, claim, warranty, support, transfer, or similar application.

**Strongest inherited doctrines:** `001`, `003`, `004`, `006`.

---

## E. Agency — `ZyUX-AGENCY-001`

**Core Job:** act across multiple client organizations while maintaining strict client isolation and attributable delegated scope.

**Strongest inherited doctrines:** `002`, `003`, `005`, `006`.

---

## F. Operator — `ZyUX-OPERATOR-001`

**Core Job:** perform repeated operational work quickly and safely inside a bounded current context.

**Primary concerns:** low cognitive load · action state · work queues · host-native execution · remediation.

**Strongest inherited doctrines:** `002`, `003`, `004`, `005`.

---

## G. Compliance — `ZyUX-COMPLIANCE-001`

**Core Job:** review governed Evidence, Policy, Trust, Authority/Standing context, exceptions, and remediation without receiving unrelated organizational control.

**Strongest inherited doctrines:** `002`, `003`, `004`, `006`.

---

## H. Auditor — `ZyUX-AUDITOR-001`

**Core Job:** reconstruct attributable historical decisions/executions through authorized proof without gaining operational capability by default.

**Strongest inherited doctrines:** `002`, `004`, `006`.

---

## I. Agent — `ZyUX-AGENT-001`

**Core Job:** discover and invoke governed capabilities through machine-readable interfaces under explicit principal/Authority/Standing constraints.

**Primary surfaces:** MCP · structured APIs · capability metadata · receipts · machine-readable errors.

**Strongest inherited doctrines:** `002`, `003`, `004`, `005`.

**Critical invariant:** tool discovery/authentication does not manufacture Authority.

---

# 19. Recommended Work Waves

The profiles SHALL NOT all be developed at equal depth simultaneously.

The program now distinguishes **current-wedge completion** from later platform expansion.

## Wave 1 — Current Wedge Experience

```text
ZyUX-DEVELOPER-001
ZyUX-PUBLIC-OBSERVER-001
ZyUX-ORG-ADMIN-001
ZyUX-AGENCY-001
```

Reason:

- Developer establishes the integration experience;
- Public Observer establishes the direct human/public experience of the current GS1 wedge;
- Org Admin supplies the governed production/admin counterpart;
- Agency is an early distribution/integration dependency for repeated multi-client implementations.

These profiles MAY be developed with the first governed Application Profile rather than waiting for all archetypes to be complete.

---

## Wave 2 — Relationship, Operations & Emerging Interfaces

```text
ZyUX-CUSTOMER-001
ZyUX-OPERATOR-001
ZyUX-AGENT-001
```

Customer and Operator should be grounded in real recurring product/host Jobs.

Agent remains strategically important but its dedicated archetype depth is **evidence-gated**. MCP/tool exposure MAY exist under operative interface/security contracts before a full Agent archetype is mature.

---

## Wave 3 — Governance / Assurance Experience

```text
ZyUX-COMPLIANCE-001
ZyUX-AUDITOR-001
```

These should be grounded in real Evidence/Policy/Receipt workflows rather than designed abstractly too early.

---

# 20. Current Profile Sequence

The first profile was:

```text
ZyUX-DEVELOPER-001
```

The first governed Application Profile is:

```text
ZyUX-APP-GS1-RESOLUTION-001
```

For the current GS1 wedge, the next required archetype is:

# `ZyUX-PUBLIC-OBSERVER-001`

because the public scan/link journey is the highest-volume direct-human expression of the wedge and the strongest immediate test of the Chair's experience goal:

> **clear, easy, direct, uncluttered, and immediately navigable without prior Unfict knowledge.**

After Public Observer, the preferred sequence is:

```text
ZyUX-ORG-ADMIN-001
        ↓
ZyUX-AGENCY-001
        ↓
ZyUX-CUSTOMER-001
        ↓
ZyUX-OPERATOR-001
        ↓
ZyUX-AGENT-001 (evidence-gated depth)
        ↓
ZyUX-COMPLIANCE-001
        ↓
ZyUX-AUDITOR-001
```

This ordering is a program priority, not a claim that later profiles are less constitutionally important.

---

# 21. Application Profile Program

Application Profiles SHOULD begin **as soon as** an application is sufficiently governed to support real journey definition. They SHOULD NOT wait for every archetype profile to exist first.

Current / early candidates:

```text
ZyUX-APP-GS1-RESOLUTION-001   — ACTIVE DRAFT / CURRENT WEDGE
ZyUX-APP-DPP-001              — later, when DPP application inputs are sufficiently governed
```

Later candidates may include:

```text
Warranty
Recall
Product Registration
Shipment Release
Evidence Submission
```

An application profile SHALL reference its constitutional/domain/application owner.

It SHALL NOT become the source of application semantics.

---

# 22. Relationship Between Archetype and Application Profiles

The final experience is composed.

Example:

```text
Public Observer
× GS1 Resolution
× public disclosure scope
× mobile browser
=
public product-resolution experience
```

Another:

```text
Compliance
× DPP
× Company A
× SAP host
× valid review Authority
=
DPP compliance-review experience
```

Another:

```text
Agent
× shipment-release capability
× Logistics Co principal
× explicit delegated scope
× MCP
=
agent-assisted shipment action
```

No one factor independently owns the experience.

---

# 23. Canonical Profile Output Set

A mature profile SHOULD eventually produce four coordinated outputs.

## 23.1 Doctrine Profile

The governed composition document.

Example:

```text
ZyUX-DEVELOPER-001
```

## 23.2 Designer Brief

A short implementation-facing extract that translates the doctrine into the minimum information a product/interaction designer needs beside the design file.

It SHOULD answer:

- who is this participant in this Job?
- what are they trying to accomplish now?
- what must they see immediately?
- what must remain hidden?
- what is the dominant action?
- what uncertainty must remain visible?
- what are the important states?
- what are the signature experience opportunities?
- what must the design never do?

The Designer Brief is **derived**, not independently normative.

## 23.3 Journey Map

A detailed state/journey artifact derived from the profile.

Example:

```text
ZyUX-DEVELOPER-JOURNEY-001
```

## 23.4 Acceptance / UX Test Vectors

Machine/human-verifiable scenarios proving implementation conforms.

Example:

```text
ZyUX-DEVELOPER-TEST-001
```

Do not create all four mechanically on Day 1.

The doctrine profile comes first. A Designer Brief SHOULD be produced when design work begins. Journey/test artifacts follow when implementation or prototype work is imminent.

---

# 23A. UX Maturity Ladder

A coherent specification is not evidence that the resulting experience is usable.

Every profile/application experience SHALL therefore declare its current validation state using this maturity ladder:

```text
DRAFT
  ↓
DOCTRINE-COMPLETE
  ↓
PROTOTYPE-READY
  ↓
USABILITY-TESTED
  ↓
CORRECTED
  ↓
RATIFICATION-CANDIDATE
  ↓
RATIFIED
```

Definitions:

- **DRAFT** — substantive doctrine still changing.
- **DOCTRINE-COMPLETE** — the composition is internally complete enough to prototype.
- **PROTOTYPE-READY** — critical journey states can be represented without inventing missing semantics.
- **USABILITY-TESTED** — representative participants outside the drafting process have exercised the critical journey(s).
- **CORRECTED** — observed friction/material misunderstanding has been incorporated or explicitly adjudicated.
- **RATIFICATION-CANDIDATE** — doctrine + evidence package is ready for formal review.
- **RATIFIED** — Chair/governance closure completed.

A profile SHALL NOT use words such as `validated`, `proven`, `top-tier`, or equivalent merely because its doctrine is coherent.

---

# 23B. UX Complexity Budget

Composition may increase hidden context. It SHALL NOT proportionally increase visible interface complexity.

Every profile SHALL define and test a **visible complexity budget** appropriate to its Job.

The default product discipline is:

```text
ALWAYS-VISIBLE CONTEXT
≤ 3 decision-relevant context anchors

PRIMARY STATE
1 dominant answer / Job state

PRIMARY ACTION
1 dominant next action where an action exists

SECONDARY DEPTH
on demand

PROOF / GOVERNANCE / INTERNAL DETAIL
progressively disclosed
```

This is a profile-program design budget derived from ratified contextual/progressive-disclosure law; it is not a new Reality/Authority/Policy rule.

A profile MAY justify a different budget for a materially different Job, but the divergence must be explicit and usability-tested.

> **Internal contextual richness SHALL NOT become proportional external cognitive burden.**

---

# 24. Profile Acceptance Invariants

Every profile SHALL satisfy at least these invariants.

### PAX-01 — No New Universal Law

The profile does not redefine `ZyUX-L01–L16`.

### PAX-02 — Job Before Menu

The profile is organized around recurring Jobs, not a module inventory.

### PAX-03 — Role Is Not Authority

The archetype label itself never grants capability.

### PAX-04 — Relationship Is Not Permission

Relationship supplies context, not automatic access.

### PAX-05 — Disclosure ≠ Invocation

Visibility and actionability remain separate.

### PAX-06 — Scope Isolation

Unrelated context does not leak merely because the Subject occupies multiple profiles/relationships.

### PAX-07 — Subject Continuity

Switching profile does not create a new Subject/account by default.

### PAX-08 — Explanation Parity

The profile may choose default proof depth but cannot change Evidence/Trust/Receipt meaning.

### PAX-09 — Host Does Not Own Semantics

Host-native expression remains a projection of the same governed capability.

### PAX-10 — Lifecycle Integrity

Offboarding/profile exit ends future capability as governed without rewriting historical attribution.

### PAX-11 — Self-Execution Preserved

The profile does not manufacture delegation where the Subject lawfully acts under own Authority.

### PAX-12 — Agent/Human Parity of Meaning

Machine and human interfaces may differ in expression but not constitutional meaning.

### PAX-13 — Application Subordination

An application profile consumes application semantics; it does not invent them.

### PAX-14 — Narrow Product Scope

A profile does not authorize broader GTM/product expansion.

### PAX-15 — Testable Journey

The profile can be converted into concrete journey/test vectors without inventing missing semantics.

### PAX-16 — Complexity Budget

The profile defines a visible-complexity budget and proves that composition does not simply surface every internal context dimension.

### PAX-17 — Specification Is Not Validation

The profile declares its UX maturity state and does not claim usability evidence that has not been produced.

### PAX-18 — Designer Translation

When design work is imminent, the profile can be reduced to a short Designer Brief without changing its semantic boundaries.

---

# 25. Cross-Profile Consistency Tests

Before ratifying any profile, test at least:

```text
Same Subject, different archetype
Same archetype, different organization
Same archetype, different host
Same archetype, different application
Same application, different archetype
Current vs historical relationship
Available vs requestable vs blocked
Public vs authenticated transition
Human vs agent invocation
Self-execution vs delegated execution
```

The profile passes only if these variations preserve the ratified foundation.

---

# 26. Anti-Explosion Rules

The profile layer SHALL NOT become:

```text
one document per customer;
one document per role name;
one document per department;
one document per host vendor;
one document per plan;
one document per country;
one document per screen size;
one document per application × archetype pair;
one document per feature.
```

Before creating a profile, ask:

> **What enduring experience divergence cannot be represented by existing profile + context + application composition?**

If there is no strong answer, do not create the document.

---

# 27. Profile Ratification Gate

A profile is eligible for ratification only when:

- its recurring Job is clearly defined;
- the creation gate in §4 is satisfied;
- `ZyUX-001–006` conformance is explicit;
- no constitutional semantic owner is duplicated;
- the disclosure/action-state model is complete;
- entry and lifecycle are addressed;
- default explanation/proof depth is defined;
- host behavior is addressed where relevant;
- acceptance invariants/test vectors exist;
- cross-profile conflicts have been checked;
- unresolved application semantics are explicitly deferred;
- examples cannot be mistaken for Authority or Policy;
- the profile has a real product/implementation reason to exist;
- its visible-complexity budget has been prototyped;
- at least one critical journey has reached `USABILITY-TESTED`;
- observed material misunderstanding/friction has been incorporated or explicitly adjudicated;
- a Designer Brief exists where a human-facing interface is being designed.

---

# 28. Program Backlog

| Priority | Canonical ID | Profile | Wave | Current State |
|---:|---|---|---|---|
| 1 | `ZyUX-DEVELOPER-001` | Developer | 1 | v0.3 aligned — prototype-ready |
| 2 | `ZyUX-APP-GS1-RESOLUTION-001` | GS1 Resolution Application | App | v0.2 composition update |
| 3 | `ZyUX-PUBLIC-OBSERVER-001` | Public Observer | 1 | **CURRENT — INITIATE** |
| 4 | `ZyUX-ORG-ADMIN-001` | Organization Admin | 1 | Planned |
| 5 | `ZyUX-AGENCY-001` | Agency | 1 | Planned — early dependency |
| 6 | `ZyUX-CUSTOMER-001` | Customer | 2 | Planned |
| 7 | `ZyUX-OPERATOR-001` | Operator | 2 | Planned |
| 8 | `ZyUX-AGENT-001` | Agent | 2 | Planned — evidence-gated depth |
| 9 | `ZyUX-COMPLIANCE-001` | Compliance | 3 | Planned |
| 10 | `ZyUX-AUDITOR-001` | Auditor | 3 | Planned |

Application profiles are now included in the active program sequence once sufficiently governed; they do not need to wait for completion of every archetype.

---

# 29. Program Success Criteria

The profile program succeeds when:

- a new product team can identify the correct archetype without inventing one;
- one Subject can move across profiles without account fragmentation;
- product teams can derive journeys without rewriting ZyUX law;
- Developer, Host, Agent, and Human surfaces preserve semantic parity;
- Organization Admin does not become hidden super-admin;
- Public Observer remains useful without unnecessary signup;
- Customer experience can grow from public observation into governed relationship;
- Agency multi-client isolation is explicit;
- Operator UX remains fast without hiding material uncertainty;
- Compliance sees required basis without receiving unrelated administration;
- Auditor reconstructs history without operational power;
- Agent discovery never manufactures Authority;
- application teams consume profiles instead of creating new UX constitutions.

---

# 30. Immediate Next Step

The current sequence is:

```text
ZyUX-DEVELOPER-001 v0.3
        +
ZyUX-APP-GS1-RESOLUTION-001 v0.2
        ↓
ZyUX-PUBLIC-OBSERVER-001 v0.1
        ↓
GS1 Developer + Public Observer prototype(s)
        ↓
representative usability test
        ↓
correct profiles from observed friction
        ↓
ZyUX-ORG-ADMIN-001
```

The purpose of the next cycle is not more doctrine for its own sake.

It is to establish the first complete direct-human current-wedge experience and then move from specification to observable UX evidence.

---

# 31. Closing Doctrine

> **Profiles compose experience law. They do not create constitutional law.**

> **A profile is defined by a recurring Job and governed context—not by a marketing persona or role label.**

> **One Subject may occupy many profiles without becoming many users.**

> **Disclosure, actionability, Authority, Standing, and relationship remain distinct in every profile.**

> **Application profiles describe how a governed application is experienced; they do not own the application semantics.**

> **Host differences should be projections, not semantic forks.**

> **Create a new profile only when the experience materially diverges.**

> **The profile layer should make Unfict easier to use without making its constitutional depth easier to violate.**

---

**End of `ZyUX-PROFILES-000 v0.1 — DRAFT FOR CHAIR REVIEW`**
