# ZyUX-PUBLIC-OBSERVER-001 — Public Observer Experience Profile

**Canonical ID:** `ZyUX-PUBLIC-OBSERVER-001`  
**Version:** 0.1  
**Status:** DRAFT — CHAIR REVIEW / PROTOTYPE-READY TARGET  
**Series:** `ZyUX` — Unfict Experience Architecture  
**Profile Type:** Archetype Profile  
**Classification:** Downstream Experience Composition Profile  
**Normative Level:** Profile Specialization — Subordinate to `ZyUX-000–006`  
**Active Master Brand:** **Unfict — Reality Sync**  
**Brand Lineage:** `Zyppi → Unfict`  
**Date:** 19 September 2026  
**Program Authority:** `ZyUX-PROFILES-000 v0.2`  
**Primary Experience Authority:** `ZyUX-000 v1.0 — RATIFIED — FINAL`  
**Inherited Foundation:** `ZyUX-001` through `ZyUX-006`, all v1.0 Ratified  
**Current Application Composition:** `ZyUX-APP-GS1-RESOLUTION-001 v0.2`  
**Coordinates With:** ADDRESSING · ZRR · applicable Application/Profile authority · Evidence · Trust · Privacy · Security · Authority · Standing · Policy · Receipt · Host-Native doctrine  
**Applies To:** public scan · public link/deep link · public Resolution result · accountless information · public explanation/proof · public error/recovery · transition into authenticated/customer/support Jobs  
**Does Not Authorize:** new public disclosure · new customer relationship · new ownership claim · new account · new consent · new Trust semantics · new Evidence semantics · new GS1 semantics · new public tracking model · new marketing claims  
**Validation State:** `DRAFT / PROTOTYPE-READY TARGET — NOT YET USABILITY-VALIDATED`  
**Revision Basis:** Claude UX stress test + Chair disposition, 19 September 2026  

---

# 0. Status / Authority / Non-Scope

`ZyUX-PUBLIC-OBSERVER-001` composes the ratified Unfict Experience Architecture for a person who encounters legitimately public information without first entering an organizational, customer, administrative, or developer relationship.

It answers:

> **How should a person who scans, opens, follows, or otherwise encounters a public Unfict reference receive the useful answer immediately, understand its limits, and know the next legitimate step without unnecessary authentication or platform navigation?**

The Public Observer archetype does **not** mean:

- anonymous access to everything;
- permission to inspect protected Evidence;
- customer status;
- ownership;
- verified identity;
- consent to tracking;
- Authority;
- Standing;
- entitlement;
- organization membership;
- a durable account relationship.

The governing composition is:

```text
RATIFIED ZyUX-000–006
        +
GOVERNED APPLICATION / PUBLIC RESOLUTION RESULT
        +
PUBLIC DISCLOSURE SCOPE
        +
CURRENT ENTRY CONTEXT
        +
PUBLIC INTERFACE / HOST
        =
PUBLIC OBSERVER EXPERIENCE
```

Where this profile conflicts with `ZyUX-000–006`, the ratified foundation governs.

Where this profile conflicts with the operative Application/Resolution contract, the operative semantic/technical authority governs that contract while ZyUX continues to govern experience composition.

---

## 0.1 Why This Profile Exists

A large portion of Unfict's potential human experience begins **before** the person has an account, relationship, role, or intention to become a customer.

Examples include:

- scanning a product code;
- opening a public persistent reference;
- following a public deep link;
- checking a public product/passport/resource result;
- viewing a public verification or status statement;
- arriving from a search result or shared link.

The experience therefore cannot assume:

```text
login
organization
role
existing relationship
technical knowledge
Unfict vocabulary
```

The Public Observer profile exists to keep this entry direct and useful without weakening disclosure, privacy, Trust, Evidence, or action boundaries.

---

## 0.2 Public Observer Is Not a Permanent Persona

A Subject may be a Public Observer for one interaction and something else immediately afterward.

Example:

```text
Aly scans product anonymously
        ↓
Public Observer
        ↓
chooses "Register product"
        ↓
authentication / eligibility check
        ↓
Customer relationship may or may not be established
```

Changing archetype does not create a new Subject.

The Public Observer label itself creates no Authority or relationship.

---

## 0.3 Current Proving Application

The first concrete Application composition is:

```text
ZyUX-PUBLIC-OBSERVER-001
+
ZyUX-APP-GS1-RESOLUTION-001
=
public GS1 scan / product-resolution experience
```

This profile remains application-agnostic. GS1-specific product fields, verification states, errors, and capability semantics remain owned by the GS1 Application/CAW/contract authorities.

---

# 1. Profile Definition

> **Public Observer — A human Subject, potentially unauthenticated and potentially unidentified to Unfict, whose current Job is to receive legitimately public information or explanation from a public Unfict-enabled reference without first entering a stronger relationship.**

The Public Observer archetype is defined by the current Job, not by:

- demographic segment;
- customer status;
- account status;
- device;
- country;
- whether the Subject arrived through QR, NFC, browser, search, message, or another public entry mechanism;
- whether the Subject later authenticates;
- whether the observed constituent is a product, place, service, document, device, or another Reality constituent.

A Public Observer may be:

```text
shopper
technician-before-authentication
consumer
citizen
visitor
recipient of a shared link
prospective customer
journalist
researcher
partner employee acting outside authenticated scope
```

These labels do not change the profile unless the Job/Authority/disclosure requirements materially diverge.

---

# 2. Primary Jobs

## Job O1 — Understand What I Encountered

The observer asks:

> **What is this?**

The first surface should make the primary referent/application answer obvious before secondary proof, controls, navigation, or Unfict architecture.

---

## Job O2 — Receive the Useful Public Answer

The observer asks:

> **What can I legitimately know about it right now?**

The answer may include publicly disclosable facts, application state, verification/result language, or resource options according to the governing Application and disclosure authority.

Public visibility does not mean universal visibility.

---

## Job O3 — Understand Confidence / Uncertainty Correctly

The observer asks:

> **How certain is this, and what should I not infer?**

The UX must preserve distinctions such as:

```text
UNKNOWN ≠ FALSE
UNAVAILABLE ≠ FALSE
UNVERIFIED ≠ VERIFIED
CONFLICTING ≠ RESOLVED
INFERRED ≠ OBSERVED
TRUST ≠ AUTHORIZATION
RECEIPT ≠ PHYSICAL TRUTH
```

The public surface should express those distinctions in ordinary language rather than internal constitutional vocabulary wherever possible.

---

## Job O4 — Take the Next Legitimate Public Action

The observer asks:

> **What can I do next?**

Possible application-specific examples may include:

- open a public resource;
- view instructions;
- contact support;
- inspect public proof;
- authenticate to continue a relationship-specific Job;
- request a governed action if such a path exists.

The Public Observer profile does not invent these actions.

It projects only what the governing Application/Authority/Policy legitimately exposes.

---

## Job O5 — Ask “Why?” Without Becoming an Auditor

The observer asks:

> **Why does Unfict say this?**

The answer should begin with a minimum-necessary public explanation and deepen only on request.

Ordinary public comprehension should not require an Evidence graph, policy tree, Receipt schema, or constitutional glossary.

---

## Job O6 — Recover When the Result Is Missing, Uncertain, or Unavailable

The observer asks:

> **What happened, and is there anything legitimate I can do?**

Failure states should preserve semantic distinctions while giving plain-language recovery where a real recovery path exists.

---

## Job O7 — Continue Into an Authenticated / Relationship Job

The observer asks:

> **I want to register, claim, support, manage, buy, repair, or otherwise continue. What now?**

Authentication or relationship establishment should preserve the originating public context.

Authentication SHALL NOT itself establish:

- ownership;
- eligibility;
- customer status;
- Authority;
- entitlement;
- standing.

Those remain separately governed.

---

# 3. Subject / Relationship / Capacity Model

## 3.1 Unauthenticated Does Not Mean Nonexistent

A public interaction may occur without Unfict knowing the observer's identity or maintaining a durable account relationship.

The Reality Subject exists independently of whether Unfict can identify/authenticate them.

The UX SHALL NOT imply:

```text
no account = no Subject
```

---

## 3.2 Observation Does Not Create Relationship

A scan/open/view SHALL NOT by itself create:

```text
Customer relationship
Ownership
Consent
Subscription
Organization membership
Warranty registration
Claim
Support entitlement
Authority
Standing
```

Where a later Job requires one of those relationships, it must be established through its own governed path.

---

## 3.3 Public Observer → Customer

A Public Observer may transition into `ZyUX-CUSTOMER-001` in a later workflow.

Conceptually:

```text
Public observation
      ↓
"Register / Claim / Support / Continue"
      ↓
Authentication if required
      ↓
Evidence / eligibility / relationship evaluation
      ↓
Customer relationship established OR not established
```

The public result remains the entry context, not proof of relationship.

---

## 3.4 Public Observer → Other Archetypes

The same person may transition into:

```text
Customer
Developer
Operator
Organization Admin
Compliance
Auditor
Agency
```

only where the Job and governed context actually change.

The UI should not ask the person to choose an abstract archetype label.

It should let the next legitimate Job determine the experience.

---

# 4. Entry Conditions

## 4.1 Direct Public Entry

The preferred public flow is:

```text
SCAN / OPEN / FOLLOW
        ↓
PUBLIC RESOLUTION / APPLICATION
        ↓
FIRST USEFUL ANSWER
```

not:

```text
SCAN
↓
Unfict homepage
↓
marketing navigation
↓
signup
↓
dashboard
↓
find product
↓
answer
```

A public persistent reference should preserve entry intent.

---

## 4.2 Accountless When Authentication Is Unnecessary

Inherited `ZyUX-001-S09` remains controlling:

> Public observation and other legitimate anonymous experiences should remain accountless until authentication is actually required.

Therefore a public answer SHALL NOT be gated by signup merely because Unfict offers accounts.

---

## 4.3 Authentication Trigger

Authentication may be introduced when the next Job legitimately requires it.

Examples may include:

- relationship-specific information;
- a consequential action;
- account-specific history;
- registration/claim/support workflow;
- protected proof;
- organization/customer scope.

The authentication prompt should explain **why** it is required in Job language.

---

## 4.4 Intent-Preserving Authentication

The system SHOULD preserve:

```text
observed constituent/reference
application
requested next Job
relevant public state
safe return destination
```

through authentication.

Failure pattern:

```text
scan product
→ choose support
→ sign in
→ generic dashboard
```

Preferred:

```text
scan product
→ choose support
→ sign in
→ return to this product's support continuation
```

---

## 4.5 Alternate Entry

Where the Application supports it, public access should not depend exclusively on a camera or one carrier.

Possible alternate routes may include:

- open/shareable HTTPS link;
- manually entered public reference;
- accessible link from another host;
- standards-native discovery.

The Application/ADDRESSING/Carrier authorities own the actual mechanisms.

---

# 5. Public Observer Context Model

The Public Observer should experience very little visible context.

## 5.1 Active Context

The always-visible context should ordinarily be limited to what prevents misunderstanding now.

Potential anchors:

```text
1. What constituent/resource am I looking at?
2. What is the current public result/state?
3. Acting context only if it materially changes the answer
```

Public surfaces should not display organization, credential, tenant, policy, Evidence-source, Receipt, or internal Host context merely because it exists underneath.

---

## 5.2 Inspectable Context

Deeper context may be available through progressive disclosure where legitimate:

- source/provenance summary;
- verification basis;
- Evidence references;
- last updated / effective time;
- Receipt/proof reference;
- standards/profile version;
- current application context.

Inspectability does not imply public disclosure of every underlying record.

---

## 5.3 Public Observer Complexity Budget

For the direct public result, the default design budget is:

```text
1 dominant answer
1 dominant next action where a next action exists
≤ 3 always-visible context anchors
≤ 2 immediate secondary actions by default
proof / provenance / advanced detail on demand
no global product navigation unless the Job requires it
```

This is a profile-level usability discipline, not a new constitutional semantic rule.

Any materially denser public experience should be justified by the Application Job and tested with representative users.

---

# 6. Information Hierarchy

The Public Observer's default information hierarchy is:

```text
LEVEL 1 — ANSWER
What is this / what is the public result?

LEVEL 2 — MEANING
What does that result establish?

LEVEL 3 — NEXT
What can I legitimately do next?

LEVEL 4 — WHY
What public basis supports the result?

LEVEL 5 — PROOF
What deeper governed proof is publicly disclosable?
```

The screen SHALL NOT begin with:

- internal record IDs;
- package names;
- constitutional authorities;
- raw policy output;
- Evidence graph dumps;
- developer error codes;
- Receipt schema;
- tenant/admin controls.

---

# 7. Disclosure & Action-State Matrix

| Experience item | Disclosure expectation | Possible action state | Public UX rule |
|---|---|---|---|
| Primary public answer | Disclosable only where governing Application/Policy permits | Informational | Show first |
| Public verification/result state | Disclosable where permitted | Informational | Explain scope; do not overclaim |
| Public Evidence summary | Disclosable subset only | Informational / inspectable | Minimum necessary |
| Protected Evidence/source detail | Often non-disclosable | N/A | No leakage, counts, hints, or disabled control |
| Public proof/Receipt reference | If governing proof/disclosure permits | Available / informational | Explain what it proves |
| Customer-only action | Existence may or may not be disclosable | Requestable / unavailable | Authentication is not entitlement |
| Organization/admin capability | Normally non-disclosable in public context | N/A | Do not reveal admin surface |
| Support/contact path | Application-dependent | Available / requestable | Preserve observed context |
| Protected relationship data | Non-disclosable without governed context | N/A | Remain invisible |
| Public resource links | Application/family-dependent | Available | Do not turn link existence into endorsement beyond governing semantics |

The matrix is illustrative of composition states; the governing Application/Authority/Policy decides actual disclosure/action state.

---

# 8. Navigation / Work Surface

## 8.1 Direct-to-Answer

The Public Observer should ordinarily land on the answer, not a dashboard.

The public experience should feel like:

```text
I scanned/opened something
→ I know what I reached
→ I understand the useful public result
→ I know the next legitimate action
```

---

## 8.2 No Public Dashboard by Default

A Public Observer does not need:

- organization navigation;
- global Unfict sidebar;
- developer tools;
- admin menus;
- saved objects;
- account settings;
- broad capability catalog.

If the person authenticates into another recurring relationship, the corresponding archetype may legitimately expose a richer workspace.

---

## 8.3 One Dominant Action

Where a next action exists, the public surface SHOULD make the dominant action clear.

Secondary actions should not compete visually with the primary Job.

Where no action exists, the UX should not manufacture one merely to fill the interface.

---

## 8.4 Deep Explanation

`Why?`, `How was this determined?`, or equivalent explanation affordances may reveal deeper levels without displacing the primary result.

The observer should not have to leave the direct flow merely to understand a bounded public explanation where that explanation can safely fit.

---

# 9. Explanation / Evidence / Trust / Receipt Depth

## 9.1 Answer First

The Public Observer default is the shallowest legitimate explanation depth that still prevents material misunderstanding.

The first answer should not require constitutional literacy.

---

## 9.2 Verification Language

A `verified` or equivalent status must remain scoped to what the governing Application actually verified.

Do not silently translate it into:

```text
genuine
safe
authorized
approved
compliant
owned by you
```

unless that precise conclusion is governed and established.

---

## 9.3 Trust

If a Trust status is publicly shown, the UX should express its scope in plain language and preserve the authoritative value for deeper inspection where useful.

Trust SHALL NOT be presented as permission to act.

---

## 9.4 Evidence

Public Evidence presentation should move progressively:

```text
basis summary
→ material public Evidence reference(s)
→ deeper record only if disclosure permits
```

Evidence presence does not equal verification.

---

## 9.5 Receipt / Proof

A public Receipt/proof surface, where allowed, should answer:

```text
What process/result is being referenced?
When did it occur?
What public basis can I inspect?
What does this proof NOT establish?
```

A Receipt SHALL NOT be presented as omniscient proof that physical Reality occurred exactly as assumed.

---

## 9.6 Minimum-Necessary Public Explanation

Inherited `ZyUX-004-S13` remains controlling.

The observer's right to receive a public answer does not create a right to:

- private Evidence;
- organization internals;
- personal data;
- policy secrets;
- Authority chains;
- protected provenance;
- full Receipt payload.

---

# 10. Signature Experience Opportunities — NON-NORMATIVE

Correctness is the floor. This section identifies places where the Public Observer experience may become distinctly Unfict without inventing semantics.

## 10.1 Signature Moment — Immediate Orientation

Within the first view, the person should be able to answer:

```text
What did I reach?
What can Unfict actually tell me?
What is uncertain/unavailable?
What can I do next?
```

The memorable behavior is clarity under uncertainty.

---

## 10.2 Signature Moment — “Why?” Without Punishment

A single explanation affordance can progressively reveal:

```text
Answer
→ Meaning
→ Basis
→ Proof
```

without forcing the person into a technical/audit surface.

The distinctive quality should be that Unfict makes the boundary between **known, unknown, and unsupported** unusually easy to understand.

---

## 10.3 Signature Moment — Seamless Continuation

If the observer chooses a relationship-specific next Job, the product/context should survive authentication and handoff.

The person should feel that they continued the same Job—not that they entered an unrelated platform.

These opportunities are product/design hypotheses. They require prototype/usability evidence before they may be described as successful UX.

---

# 11. Host / Interface Model

Public Observer experiences may appear through:

- mobile browser;
- desktop browser;
- an external Host-Native surface;
- public Resolution endpoint rendered by an authorized interface;
- embedded webview;
- future authorized interfaces.

The Host may contribute legitimate entry context.

It does not become:

```text
Authority
Trust owner
Evidence owner
Application semantic owner
Identity owner
```

A constrained Host surface MAY link to a deeper Unfict explanation/proof view while preserving the exact observed context.

---

# 12. Primary Journeys

## Journey 1 — Scan / Open → Immediate Public Answer

```text
Observer scans / opens reference
        ↓
public request admitted/resolved as governed
        ↓
application returns publicly disclosable result
        ↓
primary answer shown immediately
        ↓
optional next action / Why?
```

Success means the observer does not need an account or platform tutorial merely to understand the public result.

---

## Journey 2 — Public Answer → Why?

```text
Answer visible
        ↓
Observer asks Why?
        ↓
meaning / public basis shown
        ↓
optional deeper proof if disclosable
```

The primary answer remains easy to recover/return to.

---

## Journey 3 — Public Answer → Authenticated Continuation

```text
public result
        ↓
observer chooses relationship-specific action
        ↓
why authentication is required is explained
        ↓
authentication
        ↓
original constituent/application context restored
        ↓
eligibility / relationship / action evaluated
```

Authentication success does not pre-decide the downstream outcome.

---

## Journey 4 — Invalid / Unsupported Public Reference

```text
reference cannot be validly admitted/interpreted
        ↓
plain-language error
        ↓
no invented referent
        ↓
legitimate correction/alternate entry if available
```

---

## Journey 5 — Valid Reference, No Current Public Result

```text
reference understood
        ↓
expected public result unresolved/unavailable
        ↓
state explained honestly
        ↓
no substitute product/result guessed
```

---

## Journey 6 — Evidence / Source Temporarily Unavailable

```text
public application reached
        ↓
required source/Evidence unavailable
        ↓
"unavailable" shown, not "false"
        ↓
retry / fallback only if governing Application provides one
```

---

## Journey 7 — Protected Information Exists but Is Not Public

The public surface must not reveal:

```text
"3 hidden records"
"administrator approval exists"
"private evidence available"
"sign in to see secret policy"
```

unless disclosure authority permits that existence information.

Non-disclosable remains non-disclosable.

---

## Journey 8 — Public Result Changes Over Time

```text
observer returns later
        ↓
current public result differs
        ↓
current state shown as current
        ↓
historical statement not silently rewritten
```

If the observer follows an old proof/reference, the UX should clearly distinguish historical basis from current state where disclosure permits.

---

## Journey 9 — Shared Link on Different Device

The public reference should preserve the same governed application meaning across legitimate devices/interfaces.

Device differences may change presentation, not semantics.

---

## Journey 10 — Scan → Support / Customer Transition

```text
public product/result
        ↓
Support / Register / Claim action disclosed
        ↓
authentication if required
        ↓
relationship/eligibility check
        ↓
Customer or support Job continues
```

No customer/owner relationship is inferred merely because the person scanned first.

---

# 13. Failure / Uncertainty / Recovery States

Public errors should be simple without collapsing meaning.

## 13.1 Invalid / Unsupported Reference

Preferred public meaning:

> **We couldn't use this reference.**

Where safe, explain how to retry or use an alternate route.

Do not guess a target.

---

## 13.2 Unresolved

Preferred public meaning:

> **We understood the reference, but couldn't find the expected current result.**

Do not present another result merely because it looks similar.

---

## 13.3 Unverified / Verification Failed

Preferred language must follow the Application authority.

Do not collapse into “fake,” “unsafe,” or “counterfeit” unless the governed operation actually establishes that conclusion.

---

## 13.4 Information / Evidence Unavailable

Preferred public meaning:

> **We can't retrieve the information needed to determine this right now.**

Do not replace unavailable with false.

---

## 13.5 Conflicting / Uncertain

Preferred public meaning:

> **The available information does not support one clear conclusion.**

Where public explanation is permitted, show the material uncertainty without dumping protected sources.

---

## 13.6 Service Failure

Service failure should remain distinct from product/reference failure.

Preferred meaning:

> **Unfict is temporarily unable to complete this request.**

Do not make the observed constituent look invalid merely because Unfict is unavailable.

---

## 13.7 Authentication Required

Preferred meaning:

> **Sign in to continue this action.**

Where important, clarify:

> **Signing in lets Unfict check your eligibility. It does not guarantee this action is available to you.**

---

# 14. Public Language Translation

Internal constitutional vocabulary should not leak into ordinary public copy unless the term is genuinely useful to the Job.

| Internal concern | Public-facing expression pattern |
|---|---|
| Subject | you / person / organization only where needed |
| Disclosure scope | what can be shown here |
| Evidence unavailable | information needed to check this is unavailable |
| Trust degradation | confidence is reduced / available information is limited, only if semantically correct |
| Policy blocked | this action is not currently available; explain reason only if disclosable |
| Standing | eligibility/current ability, if needed |
| Receipt | proof / execution record / receipt reference, according to application language |
| Referent resolution | what this reference points to / what it identifies, if exact semantics allow |

Translation SHALL preserve meaning rather than simplify it into a stronger claim.

---

# 15. Accessibility / Localization

## 15.1 Mobile-First Direct Use

The public scan/link surface SHOULD work well on small screens because scanning is a likely entry path for current applications.

This does not make mobile the only supported interface.

---

## 15.2 Accessibility

The public surface should support, as applicable:

- keyboard navigation;
- screen readers;
- scalable text;
- sufficient contrast;
- non-color-only status meaning;
- focus visibility;
- meaningful link/action labels;
- accessible error announcements;
- reduced-motion preferences where animation exists.

---

## 15.3 Localization

Public understanding should not depend on English-only constitutional terminology.

Application/domain terms may require governed translations.

Status meaning must survive localization.

---

## 15.4 Time / Freshness

Where a result's time basis matters, the UX should present understandable current/as-of language.

Do not make stale information look current.

---

# 16. Privacy / Security Review Points

Public Observer implementation requires explicit review of at least:

- whether scan/open telemetry is necessary and lawful;
- cross-site / third-party tracking behavior;
- IP/device fingerprinting;
- geolocation collection;
- referral data leakage;
- account enumeration through public-to-auth transitions;
- hidden-resource enumeration;
- public Evidence/provenance leakage;
- cache behavior across public/private transitions;
- deep-link tokens;
- sensitive query parameters;
- open redirects;
- malicious QR/reference replacement;
- origin/Host validation;
- link preview crawlers/bots;
- replay/stale public results;
- anti-phishing/impersonation presentation;
- authentication handoff integrity.

This profile identifies review surfaces. Security/Privacy authorities own the concrete controls.

---

# 17. Telemetry / Success Measures

Telemetry is evidence for product improvement, not permission to track everything.

Where lawful and appropriately minimized, useful Public Observer measures may include:

## 17.1 First Answer

- time from admitted entry to first useful answer;
- result render success;
- abandonment before answer;
- error before answer.

## 17.2 Comprehension

- use of `Why?` / proof expansion;
- backtracking caused by unclear status;
- repeated attempts after an error;
- misunderstanding observed in usability sessions.

## 17.3 Continuation

- public answer → legitimate next-action selection;
- authentication completion where required;
- context preserved after authentication;
- drop-off at unexpected gates.

## 17.4 Recovery

- retry success;
- invalid-reference correction success;
- support fallback usage;
- service-failure recovery.

Hard targets belong to Product/Marketing/Operations and may evolve without amending this profile.

---

# 18. Acceptance Invariants

### OBS-AX-01 — Public Answer Before Account

Legitimately public information does not require signup merely because accounts exist.

### OBS-AX-02 — Direct-to-Answer

A public reference leads to the relevant application answer rather than generic platform navigation where the answer is available.

### OBS-AX-03 — Observation Creates No Relationship

Scan/open/view does not create ownership, customer status, consent, Authority, or membership.

### OBS-AX-04 — Non-Disclosable Means Invisible

Protected capability/data existence does not leak through disabled controls, counts, hints, or search.

### OBS-AX-05 — Answer First, Proof on Demand

Ordinary users do not parse proof structures merely to receive the public answer.

### OBS-AX-06 — Uncertainty Survives Simplification

Unknown/unavailable/unverified/conflicting states are not collapsed into stronger certainty.

### OBS-AX-07 — Verification Is Scoped

Public verification language cannot imply authenticity/safety/compliance/authorization beyond what was established.

### OBS-AX-08 — Trust Is Not Permission

Trust/confidence language cannot silently authorize an action.

### OBS-AX-09 — Public Proof Is Minimum Necessary

Proof/explanation obeys public disclosure boundaries.

### OBS-AX-10 — Authentication Preserves Intent

A public-to-auth transition returns to the originating Job/context where legitimately possible.

### OBS-AX-11 — Authentication Is Not Eligibility

Login success does not automatically grant the requested action/relationship.

### OBS-AX-12 — One Dominant Job

The public surface does not become a general Unfict dashboard by default.

### OBS-AX-13 — Complexity Budget

The direct public result obeys the defined visible-complexity budget unless an application-specific exception is justified and tested.

### OBS-AX-14 — Host Does Not Change Meaning

Browser, mobile, embedded host, or other interface presentation cannot create separate application semantics.

### OBS-AX-15 — Failure Class Integrity

Invalid, unresolved, unverified, unavailable, conflicting, and service-failure states remain distinguishable.

### OBS-AX-16 — Service Failure Does Not Invalidate Reality

Unfict outage cannot be presented as proof that the observed constituent/reference is false.

### OBS-AX-17 — Historical State Is Not Current State

Later public changes do not rewrite historical proof/result meaning.

### OBS-AX-18 — Public Observer Is Not Customer

A Customer relationship begins only when separately governed conditions establish it.

### OBS-AX-19 — No Identity Invention

The profile does not decide constitutional Identity semantics merely because a public reference exists.

### OBS-AX-20 — Public Language Absorbs Internal Complexity

Ordinary public copy does not require knowledge of Unfict's constitutional package structure.

### OBS-AX-21 — Next Action Is Legitimate

The interface does not manufacture a CTA where no governed action/request path exists.

### OBS-AX-22 — Public Entry Is Carrier-Neutral at Experience Level

Different carriers/entry mechanisms may vary in acquisition but converge on the same governed application meaning where they represent the same public application request.

### OBS-AX-23 — Privacy Is Not Payment for Observation

Receiving legitimately public information does not by itself justify unrelated profiling or cross-context disclosure.

### OBS-AX-24 — Specification Is Not Validation

This profile cannot claim usability success before critical journeys are prototyped and observed with representative participants.

---

# 19. Canonical UX Test Vectors

## Entry / First Value

1. Anonymous person scans a valid public GS1 Digital Link.
2. Public result appears without signup where the information is legitimately public.
3. Person opens the same public reference as an HTTPS link instead of scanning.
4. Entry does not redirect to a generic Unfict homepage before the answer.
5. Primary referent/result is understandable without Unfict terminology.
6. Public surface remains usable on a small mobile screen.
7. Screen reader reaches the primary answer before secondary proof controls.
8. JavaScript/UI failure does not silently transform the semantic result into another state where a fallback exists.

## Context / Complexity

9. Public result shows no developer/admin navigation.
10. No more than three active context anchors are continuously visible by default.
11. Primary next action is visually dominant when one exists.
12. Proof/Evidence detail is collapsed until requested.
13. Adding more backend metadata does not automatically add more visible cards/fields.
14. Embedded host preserves the same answer meaning.

## Disclosure

15. Protected Evidence exists but public surface does not reveal its count/existence where non-disclosable.
16. Public answer does not expose organization-only data.
17. Admin capability does not appear disabled on the public page; it remains absent.
18. Relationship-only capability existence is disclosed only where governing policy permits.
19. Public proof summary excludes protected personal data.

## Meaning / Epistemics

20. `unavailable` is not displayed as `false`.
21. `unverified` is not displayed as `counterfeit` without governing support.
22. `verified` status includes enough scope to avoid universal authenticity inference.
23. conflicting information is not silently collapsed to one answer.
24. service outage is not displayed as product failure.
25. Trust/confidence status is not shown as permission to act.
26. Receipt/proof does not claim physical occurrence beyond its governed meaning.

## Error / Recovery

27. Invalid reference receives correction guidance where possible.
28. Valid but unresolved reference does not guess a similar product.
29. Evidence unavailable offers retry only where retry is legitimate.
30. Service unavailable preserves reference context for retry.
31. Unsupported reference family fails without semantic guessing.
32. Error copy avoids raw constitutional jargon by default.

## Public → Authenticated Transition

33. Observer selects a relationship-specific action.
34. UI explains why sign-in is needed.
35. After login, the same constituent/application context is restored.
36. Login does not automatically grant the requested action.
37. Ineligible user receives an honest state rather than generic access denial where disclosure permits explanation.
38. Canceling sign-in returns safely to the public result.
39. Authentication failure does not erase the public answer.
40. Account creation does not silently subscribe the user to unrelated communication.

## Customer Boundary

41. Scanning a product does not create Customer status.
42. Scanning does not establish ownership.
43. Registration flow establishes relationship only after governed requirements are met.
44. Failed relationship establishment leaves the public result accessible if still legitimate.
45. Customer-only history does not leak to a new Public Observer.

## History / Freshness

46. Current result updated after prior Receipt; historical Receipt remains historically scoped.
47. Stale cached public state is not presented as current when invalidated.
48. Old shared link still resolves according to current Addressing/Resolution governance rather than silently reassigned to unrelated Reality.
49. Retired/unavailable public reference is explained without reassigning meaning.

## Privacy / Security

50. Malicious forwarding/referral context cannot select another tenant/namespace.
51. Public page cannot enumerate hidden clients/organizations.
52. Deep-link auth return cannot be used as open redirect.
53. Link-preview bot does not perform a consequential action merely by fetching the public URL.
54. QR copying does not itself become proof of physical authenticity.
55. Public analytics do not become Authority/identity evidence.

## GS1 Composition

56. GS1 public result uses application-native product language.
57. Developer-only contract fields are not the default public presentation.
58. `IDENTITY_NOT_FOUND` or equivalent current wedge failure is translated into public Job language without inventing a product.
59. verification/Evidence/Receipt fields preserve application semantics at public depth.
60. Public Observer and Developer receive different expression depth while the underlying GS1 result meaning remains consistent.

---

# 20. Drift Prohibitions

The Public Observer profile SHALL NOT drift into:

- a marketing homepage doctrine;
- public entitlement to all Evidence;
- automatic Customer creation;
- automatic ownership claim;
- identity-resolution authority;
- a consent framework;
- a personalization/surveillance justification;
- a public CMS;
- a generic product catalog;
- a loyalty program;
- a review/rating system;
- a broad consumer social layer;
- a wallet by default;
- a notification/subscription system by default;
- a universal product-authenticity promise;
- a requirement that every public surface expose Receipts;
- one UI per application/customer/host.

---

# 21. External Implementation Dependencies / Decisions

This archetype intentionally does not decide:

## 21.1 First Public Application Contract

The current proving binding is GS1 Resolution, governed externally.

## 21.2 Public Result Visual Design

Exact card/layout/component system belongs to Product/Design + BRAND-001.

## 21.3 Public Tracking / Analytics Model

Privacy/Security/Product must define what is collected, retained, and why.

## 21.4 Accountless Technical Mechanism

The profile requires accountless public information where auth is unnecessary. It does not dictate CDN/session/token/edge implementation.

## 21.5 Public Proof Surface

The exact Receipt/Evidence fields and retrieval mechanism remain owner-defined.

## 21.6 Customer Transition

The actual registration/claim/warranty/support relationship semantics belong to their Application/Authority owners and future `ZyUX-CUSTOMER-001` composition.

## 21.7 Localization Coverage

Product/market priorities determine languages; semantic translation must remain governed.

## 21.8 Hard UX Targets

Time-to-answer, conversion, bounce, and usability thresholds are Product/Marketing targets informed by evidence, not ratified constants here.

---

# 22. Cross-Profile Dependencies

## 22.1 GS1 Resolution Application

`ZyUX-APP-GS1-RESOLUTION-001 v0.2` is the first concrete Application composition.

It supplies:

- accepted GS1 input/application context;
- product/result semantics;
- application-specific errors;
- verification/Trust/Evidence/Receipt projection;
- GS1-specific next actions where governed.

---

## 22.2 Customer

`ZyUX-CUSTOMER-001` will own recurring relationship experience after customer/owner/user status is legitimately established.

Public Observer does not preempt it.

---

## 22.3 Organization Admin

Org Admin may own organization-controlled product/public configuration, production activation, or source administration where such capabilities exist.

Public Observer cannot see/administer them merely because they affect the public result.

---

## 22.4 Agency

Agency may configure/publicly deploy experiences for clients under delegated scope.

Public Observer sees only the resulting governed public projection, not the agency/client control plane.

---

## 22.5 Operator / Compliance / Auditor

Operational, compliance, and audit views may inspect deeper state.

Their richer access SHALL NOT leak into the public surface.

---

# 23. Scoped Public Observer Specializations

## ZyUX-PUBLIC-OBSERVER-S01 — Public Means Accountless Where Authentication Is Unnecessary

> **Legitimately public information SHALL NOT be gated by signup merely because Unfict has accounts.**

## ZyUX-PUBLIC-OBSERVER-S02 — Direct Entry Preserves the Job

> **A public scan/link SHOULD land on the relevant application answer rather than generic platform navigation where the answer is available.**

## ZyUX-PUBLIC-OBSERVER-S03 — Observation Does Not Create Relationship

> **Scanning, opening, or viewing a public reference SHALL NOT by itself create customer status, ownership, consent, Authority, Standing, or organization membership.**

## ZyUX-PUBLIC-OBSERVER-S04 — Public Disclosure Is Still Governed

> **Public context SHALL reveal only what governing disclosure permits; non-disclosable data/capability existence remains absent.**

## ZyUX-PUBLIC-OBSERVER-S05 — Answer Before Architecture

> **The public surface SHALL present the useful application answer before internal Unfict architecture, proof structure, or governance detail.**

## ZyUX-PUBLIC-OBSERVER-S06 — Uncertainty Must Survive Simplification

> **Public language SHALL NOT convert unknown, unavailable, unverified, conflicting, inferred, or scoped findings into stronger certainty.**

## ZyUX-PUBLIC-OBSERVER-S07 — Verification Is Scoped

> **A public verification/result label SHALL communicate only the conclusion established by its governing operation.**

## ZyUX-PUBLIC-OBSERVER-S08 — Public Proof Is Progressive

> **Public explanation SHOULD deepen from answer to meaning to basis to proof only as requested and legitimately disclosable.**

## ZyUX-PUBLIC-OBSERVER-S09 — Authentication Preserves Context

> **When authentication is required to continue, the originating public Job/context SHOULD be preserved through the transition.**

## ZyUX-PUBLIC-OBSERVER-S10 — Authentication Does Not Predetermine Eligibility

> **Authentication success SHALL NOT be presented as proof that a requested relationship/action is authorized or available.**

## ZyUX-PUBLIC-OBSERVER-S11 — One Dominant Public Job

> **A direct public surface SHOULD prioritize one current Job rather than expose a general Unfict dashboard/menu by default.**

## ZyUX-PUBLIC-OBSERVER-S12 — Public Complexity Is Bounded

> **Underlying contextual richness SHALL NOT be surfaced proportionally; the public result SHOULD remain within its defined visible-complexity budget unless the Application Job requires and usability evidence supports greater depth.**

## ZyUX-PUBLIC-OBSERVER-S13 — Service Failure Is Not Reality Failure

> **Unfict service/source unavailability SHALL NOT be presented as evidence that the observed Reality constituent/reference is false.**

## ZyUX-PUBLIC-OBSERVER-S14 — Public Error Translation Preserves Meaning

> **Public errors SHOULD use ordinary Job language while preserving the semantic distinction of the governing failure.**

## ZyUX-PUBLIC-OBSERVER-S15 — Host/Carrier Does Not Own Meaning

> **The public interface or carrier MAY shape acquisition/presentation but SHALL NOT redefine the governed Application result.**

## ZyUX-PUBLIC-OBSERVER-S16 — Historical Result Is Not Silently Rewritten

> **Current public state MAY change; historical proof/result meaning SHALL remain attributable to its historical basis.**

## ZyUX-PUBLIC-OBSERVER-S17 — Privacy Is Independent of Public Availability

> **The fact that information is publicly disclosable SHALL NOT by itself authorize unrelated profiling, cross-context identity inference, or broader data collection.**

## ZyUX-PUBLIC-OBSERVER-S18 — UX Validation Requires Use

> **Doctrinal coherence SHALL NOT be presented as proof of usability; the critical public journey must be prototyped and observed before Ratification Candidate status.**

---

# 24. Ratification / Review Gate

Before `ZyUX-PUBLIC-OBSERVER-001` may become a Ratification Candidate, review SHALL prove:

- [ ] `ZyUX-000–006 v1.0` conformance;
- [ ] `ZyUX-PROFILES-000 v0.2` creation/complexity/maturity rules satisfied;
- [ ] Public Observer is not treated as a constitutional Role;
- [ ] public observation creates no relationship/Authority/ownership/consent by implication;
- [ ] accountless public information remains accountless where authentication is unnecessary;
- [ ] disclosure vs action state remains separate;
- [ ] non-disclosable data/capability existence cannot leak;
- [ ] Answer → Meaning → Basis → Proof depth remains progressive;
- [ ] verification/Trust/Evidence/Receipt semantics remain imported;
- [ ] public language does not strengthen epistemic claims;
- [ ] public error states preserve material distinctions;
- [ ] public-to-auth transition preserves context;
- [ ] authentication is not treated as eligibility;
- [ ] Customer boundary remains clean;
- [ ] Host/carrier does not redefine semantics;
- [ ] lifecycle/history distinction is preserved;
- [ ] privacy/security review points have identified concrete owners;
- [ ] visible-complexity budget is represented in a prototype;
- [ ] `ZyUX-APP-GS1-RESOLUTION-001` public composition is reconciled;
- [ ] Public Observer Designer Brief exists;
- [ ] at least one critical public scan/link journey has reached `USABILITY-TESTED`;
- [ ] observed material friction/misunderstanding is incorporated or explicitly adjudicated;
- [ ] canonical UX test vectors can map to prototype/implementation tests without inventing missing semantics.

---

# 25. Recommended Validation Package

Before ratification, produce:

```text
ZyUX-PUBLIC-OBSERVER-001
        │
        ├── Doctrine Profile
        ├── Designer Brief
        ├── GS1 Public-Observer Journey Map
        ├── Public scan/link clickable prototype
        ├── Public Result / Error / Proof Matrix
        ├── Accessibility pass
        └── Representative first-value usability test
```

The profile should not be ratified merely because the prose is coherent.

---

# 26. Closing Doctrine

> **The public observer should not have to learn Unfict before Unfict answers the public question.**

> **Scan or open. See the answer. Understand its limits. Go deeper only if needed.**

> **Public does not mean everything. It means legitimately disclosable without stronger relationship.**

> **Observation does not create ownership, customer status, Authority, consent, or identity proof.**

> **Unknown is not false. Unavailable is not false. Unverified is not counterfeit.**

> **The best public surface is usually not a dashboard. It is the answer to the Job that brought the person there.**

> **When a person chooses to continue into a relationship, preserve the Job; do not make them start over inside the platform.**

> **The signature Unfict public experience should be clarity about what is known, what is not known, why, and what can legitimately happen next.**

---

# 27. Status & Next Step

`ZyUX-PUBLIC-OBSERVER-001 v0.1` is intended to reach **DOCTRINE-COMPLETE / PROTOTYPE-READY** after Chair/adversarial review.

Immediate next work:

1. reconcile with `ZyUX-APP-GS1-RESOLUTION-001 v0.2`;
2. create the first GS1 public scan/link result prototype;
3. test direct answer, uncertainty comprehension, proof reveal, and authenticated continuation with representative people outside the drafting process;
4. patch material friction into both the archetype and application profile;
5. then proceed to `ZyUX-ORG-ADMIN-001` as the production/admin counterpart;
6. bring `ZyUX-AGENCY-001` forward before broad additional application proliferation.

No claim of “top-tier,” “unforgettable,” or “validated” UX is authorized until observable usability evidence exists.

---

**End of `ZyUX-PUBLIC-OBSERVER-001 v0.1 — DRAFT FOR CHAIR REVIEW`**
