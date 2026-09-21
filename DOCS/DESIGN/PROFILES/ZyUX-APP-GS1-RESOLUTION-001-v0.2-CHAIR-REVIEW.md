# ZyUX-APP-GS1-RESOLUTION-001 — GS1 Resolution Application Experience Profile

**Canonical ID:** `ZyUX-APP-GS1-RESOLUTION-001`  
**Version:** **0.2**  
**Status:** **DRAFT — CHAIR REVIEW / PUBLIC-OBSERVER COMPOSITION UPDATE**  
**Series:** `ZyUX` — Unfict Experience Architecture  
**Profile Type:** Application Profile  
**Active Master Brand:** **Unfict — Reality Sync**  
**Brand Lineage:** `Zyppi → Unfict`  
**Series Identifier Note:** `ZyUX` is retained as the canonical historical/technical identifier under `ZUSD-001`; it does not denote the active master brand.  
**Date:** 18 September 2026  
**Parent Program:** `ZyUX-PROFILES-000 v0.2`  
**Ratified Foundation:** `ZyUX-000–006 v1.0`  
**Current Archetype Dependencies:** `ZyUX-DEVELOPER-001 v0.3 — CHAIR REVIEW` · `ZyUX-PUBLIC-OBSERVER-001 v0.1 — CHAIR REVIEW`  
**Future Archetype Dependencies:** `ZyUX-ORG-ADMIN-001` · `ZyUX-AGENCY-001` · `ZyUX-AGENT-001`  
**Application / Wedge Authority:** Commerce Atlas Wedge (`CAW`) — current GS1 Digital Link Resolution capability  
**Interface Doctrine:** `ZYAPI v1.1` / operative public interface contract  
**Current Wire Contract:** `CAW-006` / generated OpenAPI contract for `GET /v1/resolve`  
**Coordinates With:** ZRM · Z-PROF · GS1 Digital Link standard/profile · Evidence · Trust · Policy · Authority · Standing · RI / Runtime · Receipts · ADDRESSING · ZRR · Security · Privacy  
**Implementation Authority:** NONE  
**Repository Mutation Authority:** NONE
**Validation State:** `DOCTRINE-COMPLETE / PROTOTYPE-READY — NOT YET USABILITY-VALIDATED`  

---

**Revision Basis:** Claude UX stress test + Chair disposition + initiation of `ZyUX-PUBLIC-OBSERVER-001`, 19 September 2026  
**Revision Intent:** Compose the first direct-human public GS1 experience, add explicit signature-experience opportunities, visible-complexity budget, and UX-evidence gate without changing CAW/GS1/API semantics.

---

# 0. Status / Authority / Non-Scope

`ZyUX-APP-GS1-RESOLUTION-001` is the first concrete **Application Profile** under the Unfict Experience Architecture.

It answers:

> **How should the currently governed GS1 Digital Link Resolution application be experienced by legitimate participants without changing what GS1, CAW, ZRM, Trust, Evidence, Policy, Runtime, ZRR, or the public API actually mean?**

This document is **not** the source of:

- GS1 Digital Link grammar;
- GTIN semantics;
- GS1 link-type semantics;
- Identity semantics;
- referent-resolution semantics;
- Evidence sufficiency;
- Trust semantics or Trust labels;
- Authority / Standing / Policy semantics;
- Runtime behavior;
- Receipt generation or evidentiary meaning;
- ADDRESSING namespace/family semantics;
- ZRR Resource Resolution semantics;
- public API wire schema;
- API authentication/security model;
- commercial pricing;
- GTM channel strategy;
- developer-acquisition economics.

Those remain with their governing authorities.

The current CAW wedge exposes exactly one public API capability:

```text
GET /v1/resolve?link={GS1 Digital Link}
```

which returns a **Verified Product Response**.

This profile consumes that governed capability and defines the experience around it.

> **Application experience may simplify the path. It SHALL NOT strengthen the answer.**

---

## 0.1 Brand Continuity

This is an **Unfict-era** document.

Historical and technical artifacts may still contain `Zyppi`, including package names, API examples, paths, receipts, repository identifiers, and prior specifications. `ZUSD-001` prohibits automatic technical renaming merely for cosmetic brand alignment.

Accordingly:

- public active-brand prose SHOULD use **Unfict**;
- canonical historical document titles SHALL remain historically accurate;
- technical identifiers SHALL remain unchanged unless separately migrated;
- brand migration SHALL NOT alter application semantics.

---

## 0.2 Application Profile Boundary

This profile composes:

```text
RATIFIED ZyUX FOUNDATION
        +
GS1 RESOLUTION APPLICATION
        +
PARTICIPATING ARCHETYPE
        +
CURRENT CONTEXT / DISCLOSURE / AUTHORITY
        +
AUTHORIZED INTERFACE / HOST
        =
ACTUAL GS1 RESOLUTION EXPERIENCE
```

Examples:

```text
Developer
× GS1 Resolution
× Sandbox
× REST
=
Developer quickstart experience
```

```text
Public Observer
× GS1 Resolution
× public disclosure scope
× mobile browser
=
public product-resolution experience
```

```text
Agent
× GS1 Resolution
× delegated principal scope
× MCP
=
agent-native GS1 resolution experience
```

The application does not create a new archetype.

The archetype does not create new GS1 semantics.

---

## 0.3 Current Source-of-Contract Rule

The current CAW material establishes that the generated OpenAPI specification / canonical contract source governs the public transport contract if prose diverges.

Therefore:

> **This Application Profile SHALL never be treated as the wire-contract source of truth.**

If this profile's examples conflict with the operative API contract, the operative contract governs and this profile must be corrected.

---

# 1. Application Definition

> **GS1 Resolution — An Unfict application through which an admitted GS1 Digital Link is resolved through the governed commerce/GS1 capability into a useful GS1-facing product result, its verification/Trust meaning, supporting Evidence references, and Receipt reference, without requiring the participant to understand Unfict's internal constitutional architecture.**

The current first public software expression is conceptually:

```text
GS1 DIGITAL LINK
        ↓
VALIDATE / NORMALIZE
        ↓
RESOLVE GOVERNED PRODUCT REFERENCE
        ↓
RETRIEVE REQUIRED BASIS
        ↓
GOVERNED EVALUATION
        ↓
VERIFIED PRODUCT RESPONSE
        ↓
EVIDENCE REFERENCES + RECEIPT REFERENCE
```

This is an **experience representation**, not a replacement Runtime specification.

---

# 2. Application Promise

The application should let a participant answer, at the appropriate depth:

```text
WHAT PRODUCT DID THIS LINK RESOLVE TO?
        ↓
WHAT DID UNFICT ESTABLISH ABOUT IT?
        ↓
WHAT DOES THAT RESULT NOT ESTABLISH?
        ↓
WHAT BASIS / EVIDENCE SUPPORTS IT?
        ↓
WHAT RECEIPT / EXECUTION REFERENCE EXISTS?
```

For a Developer, the application promise is:

> **Give Unfict a GS1 Digital Link. Receive a usable, bounded product-resolution answer with evidence and proof references—without learning Unfict's internal ontology first.**

For a public human participant, the same underlying application may later be projected as:

> **Scan or open a product link and receive the information you are legitimately allowed to see, with material limitations and proof available where useful.**

Exact public-observer UX awaits `ZyUX-PUBLIC-OBSERVER-001`.

---

# 3. Primary Application Jobs

This profile recognizes seven recurring Jobs.

## Job G1 — Understand What GS1 Resolution Does

The participant needs to understand, before deep onboarding:

- what input is accepted;
- what kind of answer is returned;
- what verification / Trust language means at a high level;
- what Evidence and Receipt references are for;
- what the application does **not** prove;
- whether it fits their Job.

The first explanation SHALL use GS1 / commerce language before internal constitutional vocabulary.

---

## Job G2 — Resolve a Valid GS1 Digital Link

The participant supplies a governed GS1 Digital Link and receives the current result through an authorized interface.

For the current wedge, the first successful API result includes the contract-defined fields for:

- product;
- brand;
- manufacturer;
- verification status;
- Trust status;
- Evidence references;
- Receipt reference.

The Application Profile does not add required response fields to the wire contract.

---

## Job G3 — Understand the Result Correctly

A successful `200` is not sufficient UX.

The participant should be able to distinguish:

```text
resolved product information
≠
verification state
≠
Trust state
≠
Evidence availability
≠
Receipt meaning
≠
authorization to take some later action
```

The application SHALL prevent stronger inference than the governed result supports.

---

## Job G4 — Recover From a Failed Resolution

The participant needs to know:

```text
What failed?
Where did it fail?
What does that failure mean?
Can I retry?
What should I change?
What can I inspect?
```

The experience SHALL translate the operative error contract into actionable GS1/developer language without collapsing distinct failure classes.

---

## Job G5 — Inspect Basis / Proof

Where the underlying capability exposes Evidence references or a Receipt reference, the participant should be able to inspect the amount of proof appropriate to their current scope and Job.

The application SHALL NOT fabricate an Evidence detail view or Receipt retrieval capability that does not exist in the operative product/interface.

---

## Job G6 — Integrate the Same Capability Through an Authorized Surface

Where REST, SDK, MCP, console, Host-Native, or another authorized surface represents this same capability, the surfaces may differ ergonomically but SHALL preserve the same application meaning.

---

## Job G7 — Move From Evaluation to Repeated Production Use

The participant needs a legible path from:

```text
understand
→ sample
→ sandbox/evaluation
→ integration
→ production readiness
→ production invocation
→ operational debugging
→ version lifecycle
```

This profile defines the experience shape.

Security, commercial, account, and production authorization contracts remain externally owned.

---

# 4. Current Governed Capability Binding

## 4.1 Current Capability

The current wedge capability is:

> **Resolve a GS1 Digital Link to a Verified Product Response.**

Current REST expression:

```http
GET /v1/resolve?link={url-encoded GS1 Digital Link}
X-Api-Key: <wedge developer key>
```

The API-key mechanism is explicitly a **minimal wedge gate**, not the final Security model.

This distinction SHALL remain visible in developer documentation.

---

## 4.2 Current Success Contract

The current CAW response shape is:

```json
{
  "product": {
    "gtin": "string",
    "name": "string"
  },
  "brand": {
    "id": "string",
    "name": "string"
  },
  "manufacturer": {
    "id": "string",
    "name": "string"
  },
  "verificationStatus": "verified | unverified | rejected",
  "trustStatus": "definite | probable | possible | uncertain | speculative",
  "evidenceLinks": [],
  "receiptReference": "string"
}
```

This is a **GS1 / commerce-facing projection**.

It SHALL NOT be presented as the full canonical Reality model.

Internal ACV structures, raw policy evaluation structures, Runtime internals, and other internal constitutional machinery SHALL remain absent unless a separately authorized diagnostic/proof surface legitimately exposes them.

---

## 4.3 Current Failure Contract

The current wedge defines these public error codes:

| HTTP | Code | Contract meaning |
|---:|---|---|
| 400 | `INVALID_DIGITAL_LINK` | Link failed parsing / normalization |
| 404 | `IDENTITY_NOT_FOUND` | Link parsed but no known Identity/referent was resolved under the current contract |
| 409 | `VERIFICATION_FAILED` | Evidence or Policy evaluation failed |
| 422 | `EVIDENCE_UNAVAILABLE` | Required Evidence could not be retrieved |
| 500 | `RUNTIME_ERROR` | Unexpected Runtime failure; Execution ID/reference required for traceability |

The error codes are owned by the operative API/engineering contract.

This profile owns only their **experience projection**.

---

# 5. First-Value Definition

For this Application Profile, the **First Useful Result** is no longer abstract.

A Developer reaches first value when they successfully submit a valid, governed sample GS1 Digital Link and receive a meaningful Verified Product Response that they can correctly interpret.

The first-value experience should make four things immediately legible:

```text
1. INPUT UNDERSTOOD
   The GS1 Digital Link was accepted / interpreted.

2. PRODUCT RESOLVED
   The useful product-facing result is visible.

3. VERIFICATION / TRUST MEANING
   The developer can see what Unfict established and the material boundary.

4. BASIS / PROOF REFERENCE
   Evidence reference(s) and Receipt reference are discoverable where returned.
```

A mere:

```text
HTTP 200
```

is not sufficient to prove a successful Developer UX.

---

## 5.1 First-Value Visual Pattern

A console or interactive quickstart MAY render a compact execution/result trace such as:

```text
GS1 Digital Link accepted
        ↓
Product resolved
        ↓
Verification / Trust evaluated
        ↓
Result returned
        ↓
Evidence / Receipt references available
```

This trace is explanatory UX.

It is not a replacement Runtime pipeline and SHALL NOT imply that every internal determination occurred as one mandatory linear constitutional sequence.

---

# 6. Participating Archetypes

## 6.1 Developer — Primary Current Archetype

The Developer is the most mature archetype for this v0.1 Application Profile.

Composition:

```text
ZyUX-DEVELOPER-001
+
ZyUX-APP-GS1-RESOLUTION-001
+
operative API/SDK/MCP contract
=
GS1 developer experience
```

The Developer needs:

- public explanation;
- request example;
- response example;
- quickstart;
- sandbox/evaluation path;
- error recovery;
- Evidence / Receipt references;
- interface parity;
- production-readiness path;
- operational debugging.

---

## 6.2 Public Observer — Active Current-Wedge Composition

`ZyUX-PUBLIC-OBSERVER-001 v0.1` supplies the direct-human/public archetype for this Application Profile.

The composition is:

```text
ZyUX-PUBLIC-OBSERVER-001
+
ZyUX-APP-GS1-RESOLUTION-001
+
public disclosure scope
+
scan / link / public Resolution entry
=
public GS1 product-resolution experience
```

This Application Profile owns GS1-specific journey composition only.

The Public Observer profile owns the recurring public-experience rules such as:

- accountless public entry where authentication is unnecessary;
- direct-to-answer navigation;
- progressive explanation/proof;
- public uncertainty language;
- scan-to-authenticated transition without context loss;
- no inferred customer/owner relationship from observation alone;
- visible-complexity budget for a direct public surface.

Neither document creates GS1 semantics, disclosure authority, or customer relationship.

---

## 6.3 Organization Admin — Production Handoff

Org Admin does not become a Developer merely because production approval/configuration is required.

If production activation needs organization action, the Developer journey SHOULD hand off:

```text
working integration context
+
requested production capability
+
required admin decision
+
material security/commercial prerequisite
```

without forcing the Admin to reconstruct the developer's work.

Detailed Admin experience belongs to `ZyUX-ORG-ADMIN-001`.

---

## 6.4 Agent — Same Capability, Different Surface

Where MCP or another agent interface exposes GS1 Resolution, the Agent receives the same governed application meaning.

The Agent surface SHALL NOT infer a GTIN, product, Trust conclusion, or authorization that the human/REST capability would reject.

Full autonomous Agent experience belongs to `ZyUX-AGENT-001`.

---

## 6.5 Agency / Integrator

An Agency Developer may repeat the GS1 Resolution implementation across multiple client contexts.

This profile requires:

- preserved application semantics;
- explicit client context;
- zero cross-client leakage;
- reusable knowledge without reusable client Authority/secrets;
- clean client handoff.

The broader relationship model belongs to `ZyUX-AGENCY-001`.

---

# 7. Entry Conditions

## 7.1 Public Understanding — No Account Required

A prospective developer SHOULD be able to understand the application before authentication.

At minimum, the public application/developer surface should expose:

1. what GS1 Resolution does;
2. the accepted input concept;
3. one representative request;
4. one representative successful response;
5. one representative failure;
6. the meaning/boundary of verification, Trust, Evidence, and Receipt references;
7. the path to run a governed sample/evaluation request.

The exact site architecture is not prescribed.

---

## 7.2 Public Example vs Governed Sandbox Invocation

Current CAW requires a wedge developer API key for actual API invocation.

Therefore an accountless/public surface MAY provide:

- static examples;
- replayed sample responses;
- non-stateful demonstrations;
- documentation walkthroughs;

without pretending that an unauthenticated request is the actual governed API if it is not.

A real sandbox/API call SHALL obey the operative access contract.

---

## 7.3 Sandbox / Evaluation Entry

The current Application Profile requires the sandbox/evaluation path to be:

- clearly non-production;
- quick to enter;
- seeded with at least one valid GS1 Digital Link example;
- deterministic where underlying capability supports determinism;
- explicit about any synthetic/sample Evidence;
- capable of demonstrating at least one failure path;
- capable of showing the returned Receipt reference where the contract returns one.

The exact credential issuance mechanism remains owned by Product/Security.

---

## 7.4 Production Entry

Production entry SHALL NOT be implied by sandbox success.

When production prerequisites exist, the Developer should know them **before** the first blocked production attempt where reasonably possible.

The readiness surface should distinguish categories such as:

```text
organization prerequisite
security / credential prerequisite
commercial prerequisite
application configuration prerequisite
operational prerequisite
```

without turning ZyUX into the owner of those requirements.

---

# 8. Context Anchors

The application needs only the context necessary for correct interpretation and operation.

## 8.1 Active Developer Context

For ordinary developer use, continuously visible context should ordinarily be limited to what materially affects action, for example:

```text
Environment
Organization / Client where applicable
Current Application / Capability
```

The exact UI may differ.

---

## 8.2 Inspectable Request Context

Request-specific details may include:

- interface;
- API version;
- request ID;
- credential/scopes where legitimately visible;
- supplied GS1 Digital Link;
- normalized form where contract exposes it;
- response status;
- Receipt reference;
- Evidence references;
- timing/correlation information.

These SHOULD remain inspectable without being permanently displayed as cognitive clutter.

---

## 8.3 Context Integrity

A context switch SHALL NOT silently carry:

- client secrets;
- production keys;
- prior client's requests;
- private logs;
- private Receipts;
- application-specific Authority;

into an unrelated context.

---

# 9. Information Architecture

The application-facing developer experience should answer progressively:

## Layer 1 — What Can I Do?

> Resolve a GS1 Digital Link.

## Layer 2 — How Do I Call It?

- input;
- interface;
- access requirement;
- example request.

## Layer 3 — What Comes Back?

- product;
- brand;
- manufacturer;
- verification state;
- Trust state;
- Evidence links;
- Receipt reference.

## Layer 4 — What Does It Mean?

- precise meaning of verification state;
- precise meaning of Trust state;
- what cannot be inferred;
- distinction between Evidence presence and verification;
- distinction between Receipt and physical-world truth.

## Layer 5 — What If It Fails?

- stable error code;
- developer explanation;
- retryability where owned by contract;
- next legitimate action;
- correlation / trace reference.

## Layer 6 — How Do I Prove / Debug It?

- request details;
- Evidence references;
- Receipt reference;
- deeper authorized proof path where implemented.

---

# 10. Disclosure & Action-State Matrix

This matrix is a ZyUX projection. It is not an authorization source.

| Item / capability | Disclosure | Current action state | Ordinary explanation | Deeper path |
|---|---|---|---|---|
| Public GS1 Resolution documentation | Disclosable | Available | What the application does | Reference docs |
| Representative request/response example | Disclosable | Available | How the contract behaves | Schema/reference |
| Governed sandbox resolution | Disclosable after applicable entry | Available or unavailable by access state | Run a sample request | Request inspector |
| Production resolution | Disclosable where legitimate | Available / Requestable / Unavailable | Why production is or is not available | Readiness / Admin handoff |
| Evidence references in returned response | Disclosable if response permits | Available | Supporting Evidence references | Evidence surface if authorized |
| Receipt reference | Disclosable if response permits | Available | Governed execution/proof reference | Receipt surface if implemented/authorized |
| Internal ACV / raw policy internals | Normally Non-disclosable | N/A | None | Authorized diagnostic/audit surface only if separately governed |
| Other clients' requests / Receipts | Non-disclosable | N/A | None | None |
| Capability administration | Disclosable only in proper Admin scope | Depends on Admin Authority | Admin Job, not Developer default | Org Admin profile |

---

# 11. Minimum Public Application Surface

A market-facing GS1 developer release SHOULD have a minimum public experience containing:

1. **Capability page** — one sentence explaining the Job.
2. **Input example** — a valid representative GS1 Digital Link.
3. **Request example** — current authorized interface syntax.
4. **Successful response example** — contract-faithful.
5. **Meaning explanation** — verification, Trust, Evidence, Receipt boundaries.
6. **Failure example** — at least one representative error with recovery guidance.
7. **Run/evaluate path** — sandbox or governed evaluation entry.

This is an experience requirement.

It does not prescribe SEO strategy, launch channel, partner marketing, CAC, or paid acquisition.

---

# 12. Quickstart Experience

The first quickstart should require the fewest steps consistent with the operative contract.

Conceptually:

```text
1. Understand the capability
2. Obtain/enter authorized sandbox access
3. Use provided GS1 Digital Link
4. Invoke /v1/resolve (or semantic-parity surface)
5. Receive Verified Product Response
6. Interpret verification + Trust correctly
7. Locate Evidence + Receipt references
8. Trigger one representative failure
9. Know the next production step
```

A quickstart SHALL NOT require the developer to first understand:

```text
ZRM internals
ACV internals
Runtime internals
raw Policy structures
constitutional package topology
```

unless their Job actually requires deeper debugging.

---

## 12.1 Strategic Time-to-First-Value Target

Existing strategic developer research proposes:

```text
first successful sandbox call < 5 minutes
```

This profile treats that as a **candidate Product target**, not ratified constitutional law.

Product may replace it with a better evidence-backed target without amending ZyUX.

---

# 13. First-Value Payoff

The first successful result should teach the Developer what makes Unfict useful.

The preferred presentation is not merely raw JSON.

Where a console or rich docs surface exists, present:

### Answer

```text
Resolved Product
GTIN / Name
Brand
Manufacturer
```

### Meaning

```text
Verification status
Trust status
```

### Basis

```text
Evidence reference(s)
```

### Proof

```text
Receipt reference
```

### Boundary

A concise statement that the result means only what the governed status semantics establish.

This follows the ratified `ZyUX-004` explanation stack without creating new Trust meaning.

---


# 13A. Signature Experience Opportunities — NON-NORMATIVE

Correctness is the floor. This section identifies places where the current application can become distinctly memorable **without changing semantics or inventing certainty**.

## Signature Moment A — Instant Recognition

The first successful public/developer resolution should make the central answer obvious before the participant encounters architecture, raw provenance, or secondary controls.

Conceptually:

```text
WHAT IS THIS?
      ↓
WHAT COULD UNFICT ESTABLISH?
      ↓
WHAT COULD IT NOT ESTABLISH?
      ↓
WHAT CAN I DO NEXT?
```

The exact visual execution is product/design work.

## Signature Moment B — Proof Without Punishment

A participant who asks “Why?” should move smoothly from:

```text
Answer
→ Meaning
→ Basis
→ Proof
```

without being forced through an audit interface or a dump of internal constitutional structures.

The distinctive experience opportunity is unusual clarity, not spectacle.

These are design opportunities, not independent requirements or market claims.

---

# 13B. GS1 Experience Complexity Budget

This application inherits the profile-program complexity budget.

For the first public/developer result, the implementation SHOULD target:

```text
1 dominant answer
1 dominant next action where applicable
≤ 3 always-visible context anchors
secondary basis/proof on demand
internal diagnostics hidden by default
```

A richer debugging/admin surface MAY exceed this budget when the Job materially requires it, but public composition and first-value surfaces must not simply expose every available field because the backend has it.

---

# 14. Error & Recovery Experience

## 14.1 Rule

> **The wire error remains stable. The developer explanation becomes useful.**

Unfict developer surfaces SHALL NOT replace a precise contract error with vague language such as:

```text
Something went wrong.
```

Nor should they require constitutional fluency merely to recover.

---

## 14.2 Current Error Translation Table

| Contract error | Developer-facing meaning | Next legitimate action pattern |
|---|---|---|
| `INVALID_DIGITAL_LINK` | The supplied value could not be parsed/normalized as an accepted GS1 Digital Link. | Correct/replace the input; inspect accepted input format. |
| `IDENTITY_NOT_FOUND` | The link was understood, but the current system could not resolve the expected known product/referent under the operative contract. | Check identifier/registration/source context; do not invent a product match. |
| `VERIFICATION_FAILED` | Resolution reached governed verification/evaluation but the required verification outcome failed. | Inspect contract-provided reason/recovery guidance and available Evidence details. |
| `EVIDENCE_UNAVAILABLE` | Required Evidence could not be retrieved. | Follow contract-provided retry/recovery guidance; do not display `false` as a substitute for unavailable. |
| `RUNTIME_ERROR` | The application encountered an unexpected governed execution failure. | Surface execution/correlation reference and appropriate support/retry guidance. |

Exact retryability SHALL come from the operative contract/runtime behavior.

ZyUX SHALL NOT guess it.

---

## 14.3 No Raw Constitutional Error Burden

A user-facing surface should ordinarily avoid making messages such as:

```text
Epistemic state violation
POL failure
ACV mismatch
constitutional stage 7 error
```

the only explanation.

If such terms are useful in deeper diagnostics, provide them behind a plain-language summary and a legitimate next action.

---

# 15. Evidence / Trust / Receipt Experience

## 15.1 Verification

`verificationStatus` SHALL be interpreted according to its governing contract.

The UI/docs SHALL NOT equate:

```text
verified
```

with every possible claim such as:

```text
authentic
safe
compliant
authorized
not counterfeit
legal to sell
```

unless the governing capability explicitly establishes that conclusion.

---

## 15.2 Trust

`trustStatus` is not a decorative confidence badge.

The labels in the current contract SHALL be explained according to the operative Trust authority.

This Application Profile SHALL NOT redefine them.

---

## 15.3 Evidence

Evidence links/references are support for governed evaluation.

Evidence presence SHALL NOT be presented as proof that verification succeeded.

Missing Evidence SHALL NOT be converted into `false`.

---

## 15.4 Receipt

A `receiptReference` means the application returned a reference to the governed Receipt/execution record available under the operative architecture.

It SHALL NOT be described as universal physical-world proof.

Where a Receipt retrieval/inspection capability exists, common developer inspection SHOULD remain near the developer's current workflow where practical.

If only a reference exists today, the UX SHALL NOT pretend a full proof viewer already exists.

---

# 16. Local Proof / Request Inspection

A developer troubleshooting the application should not be forced to reconstruct context manually.

Where supported, an inspector should keep together:

```text
request
response
status/error
request/correlation ID
Evidence references
Receipt reference
interface/version
environment
organization/client context
```

A deeper surface MAY exist.

When the Developer follows a deeper link, the initiating request/Receipt context SHOULD be preserved.

Exact CLI commands, SDK helpers, or browser auto-auth mechanisms remain implementation decisions.

---

# 17. Interface / Host Model

## 17.1 REST / OpenAPI

REST/OpenAPI is the current canonical public transport expression for the wedge.

The application experience should make the single current capability obvious rather than presenting a large speculative resource tree.

---

## 17.2 SDK

Where an SDK exposes the capability, its naming may be more idiomatic/domain-native.

Conceptual future form:

```text
unfict.gs1.resolveTradeItem(...)
```

is an ergonomic projection only if authorized by the operative interface/application contract.

The SDK SHALL NOT silently turn a naked ambiguous string into GS1 semantic context where the underlying contract requires explicit Digital Link context.

---

## 17.3 MCP / Agent Surface

Where MCP exposes GS1 Resolution, the tool description should state:

- what input is required;
- what result means;
- Trust/verification boundaries;
- major failure semantics;
- Evidence / Receipt references;
- no implied action Authority.

MCP SHALL remain another interface to the same capability, not a different GS1 semantic system.

---

## 17.4 Interactive Console

An interactive console MAY provide the strongest first-value learning experience by showing:

```text
input
→ request
→ response
→ meaning
→ error/recovery
→ Evidence / Receipt references
```

It SHALL remain contract-faithful.

---

## 17.5 Environment-Native Presentation

Developer-facing GS1 Resolution surfaces SHOULD adapt to legitimate host conventions such as:

- IDE light/dark theme;
- terminal constraints;
- browser documentation layout;
- API client conventions;
- accessibility settings.

This does not authorize deviation from Unfict Brand standards or semantic signals.

---

# 18. Sandbox / Evaluation Model

## 18.1 Required Properties

Regardless of exact access mechanism, the GS1 sandbox/evaluation experience should provide:

- at least one deterministic valid sample;
- realistic GS1-shaped data;
- clear `SANDBOX` labeling;
- no production Authority implication;
- no accidental production secret reuse;
- one successful path;
- representative documented failure paths;
- Evidence/Receipt behavior consistent with the actual sandbox capability;
- stable examples suitable for documentation/CI where Product/Security authorize.

---

## 18.2 Synthetic Evidence Rule

Any fabricated sample Evidence SHALL be unmistakably synthetic.

The sandbox SHALL NOT visually imply that simulated Evidence is real production Evidence merely to make the demo impressive.

> **Simulate decisions where authorized. Never simulate Evidence as if it were real.**

---

## 18.3 Accountless Evaluation Boundary

A fully accountless live API call is **not** assumed by this profile because the current CAW endpoint requires a developer key.

Product may later authorize:

- public replay/demo;
- temporary evaluation credentials;
- lightweight signup;
- another governed entry model.

Whatever model is chosen must preserve `ZyUX-DEVELOPER-001` learn-before-login and low-friction first-value principles.

---

# 19. Production Readiness & Handoff

## 19.1 No Friction Cliff

Production constraints may legitimately be stronger than sandbox constraints.

The UX failure would be making them appear only as a surprise wall.

Before promotion where practical, show:

```text
READY
MISSING
REQUIRES ADMIN
REQUIRES SECURITY ACTION
REQUIRES COMMERCIAL ACTION
NOT YET AVAILABLE
```

without implying that every category always exists.

---

## 19.2 Preserve Working Integration

Production activation SHALL NOT force the Developer to recreate:

- application choice;
- sample request;
- integration metadata;
- environment selection;
- relevant technical configuration;

merely because a different archetype must authorize the next step.

---

## 19.3 Developer → Org Admin Handoff

Where the Developer lacks required administrative Authority, the system should support a governed handoff containing only legitimate context, such as:

```text
Application: GS1 Resolution
Environment requested: Production
Developer / requesting Subject
Organization
Integration readiness summary
Required Admin action
Material security/commercial prerequisite
```

The Admin decides under their own Authority.

The Developer archetype does not acquire Admin capability by requesting it.

---

# 20. Primary Journeys

## Journey 1 — Public Discovery → First Governed Sample

```text
Developer searches / receives link
        ↓
GS1 Resolution capability page
        ↓
Understands input + output
        ↓
Sees representative request / response
        ↓
Obtains authorized evaluation access
        ↓
Runs provided GS1 Digital Link
        ↓
Receives Verified Product Response
        ↓
Understands verification / Trust boundary
        ↓
Locates Evidence + Receipt references
```

Success criterion:

> Developer can explain what the application did and what it did not prove.

---

## Journey 2 — First Successful REST Call

```text
Authorized sandbox key
        ↓
GET /v1/resolve?link=...
        ↓
200 response
        ↓
Product / brand / manufacturer visible
        ↓
Verification / Trust understood
        ↓
Evidence / Receipt references inspectable
```

Failure mode prohibited:

> `200` is celebrated without teaching result meaning.

---

## Journey 3 — Invalid GS1 Digital Link

```text
Malformed / unsupported link
        ↓
INVALID_DIGITAL_LINK
        ↓
Plain-language explanation
        ↓
Accepted-input guidance
        ↓
Developer corrects request
```

No speculative product inference.

---

## Journey 4 — Link Understood, Product Not Resolved

```text
Valid link syntax
        ↓
No known product resolution
        ↓
IDENTITY_NOT_FOUND
        ↓
Explain difference from invalid link
        ↓
Developer checks registration/source/identifier
```

This distinction is important.

---

## Journey 5 — Evidence Unavailable

```text
GS1 input accepted
        ↓
resolution/evaluation requires Evidence
        ↓
Evidence unavailable
        ↓
EVIDENCE_UNAVAILABLE
        ↓
State remains unavailable, not false
        ↓
Contract-guided recovery / retry path
```

---

## Journey 6 — Verification Fails

```text
Product context resolved
        ↓
required verification/evaluation fails
        ↓
VERIFICATION_FAILED
        ↓
Developer sees scoped reason
        ↓
available Evidence / recovery guidance
```

No automatic statement of fraud/counterfeit unless the governed capability explicitly establishes it.

---

## Journey 7 — Result → Proof Inspection

```text
Successful response
        ↓
Developer opens result details
        ↓
Evidence references
        ↓
Receipt reference
        ↓
local inspector or deep link where supported
        ↓
exact request context preserved
```

---

## Journey 8 — Sandbox → Production Readiness

```text
Working sandbox integration
        ↓
Production requested
        ↓
Readiness state calculated from governing requirements
        ↓
Developer can satisfy own requirements
        +
Admin/Security/Commercial handoff where needed
        ↓
Production becomes available only when actually authorized
```

---

## Journey 9 — REST → SDK

```text
Known working REST example
        ↓
SDK example generated/provided
        ↓
same GS1 input meaning
        ↓
same governed result meaning
        ↓
same Trust / Evidence / Receipt semantics
```

---

## Journey 10 — REST / SDK / MCP Parity

For one fixed test vector:

```text
same GS1 Digital Link
same relevant context
same governed capability
```

all authorized surfaces should preserve:

- input meaning;
- result meaning;
- verification/Trust semantics;
- failure meaning;
- Evidence references;
- Receipt reference/meaning.

Syntax may differ.

---

## Journey 11 — Agency Developer Switches Client

```text
Client A GS1 integration
        ↓
switch to Client B
        ↓
Client A credentials / requests / Receipts disappear
        ↓
Client B context explicit
        ↓
GS1 application semantics remain the same
```

---

## Journey 12 — Version / Contract Change

```text
Developer uses /v1
        ↓
new additive field / compatible change
        ↓
existing integration continues
```

or for breaking change:

```text
new version / migration path
        ↓
clear deprecation communication
        ↓
old historical Receipt/request remains interpretable
```

Exact version/deprecation policy remains contract-owned.

---

# 21. Failure / Uncertainty / Recovery States

The application SHALL preserve at least these distinctions:

```text
INVALID INPUT
≠
NOT RESOLVED
≠
VERIFICATION FAILED
≠
EVIDENCE UNAVAILABLE
≠
UNAUTHORIZED / ACCESS BLOCKED
≠
POLICY / STATE BLOCKED
≠
RUNTIME / SERVICE FAILURE
```

The current public wedge does not expose every possible future category.

This profile SHALL NOT fabricate contract errors merely to complete the taxonomy.

Where a future contract adds a class, the UX should preserve rather than flatten its meaning.

---

# 22. Semantic Translation Guide

Internal constitutional precision must survive without becoming compulsory public vocabulary.

Illustrative translation pattern:

| Internal concern | Developer-facing expression |
|---|---|
| Runtime internal stage | Request processing stage only when useful for debugging |
| Evidence unavailable | Required verification material could not be retrieved |
| Authority / scope failure | Current credential/context is not permitted to perform this operation |
| Policy/state block | This operation is currently blocked by the applicable rule/state; explain legitimate next step |
| Receipt | Execution / proof reference, with precise explanation of what it establishes |
| ZRM/Identity internal relation | GS1/product-facing result unless deeper semantics are required |

Translation SHALL simplify vocabulary, not meaning.

---

# 23. Host-Native Model

GS1 Resolution may be encountered in:

- API documentation;
- SDK / IDE;
- CLI;
- agent tool surface;
- product information system;
- ERP / commerce integration;
- mobile/browser public resolution;
- packaging/label workflow.

Host-Native expression SHALL follow `ZyUX-005`:

```text
host context
≠
Authority
≠
GS1 semantic owner
≠
Trust owner
```

A host may pre-populate the current GS1 Digital Link or product context where legitimate.

Unfict SHALL still govern its own capability meaning and failure boundaries.

No specific ERP/PIM/commerce integration is authorized by this profile.

---

# 24. Public Observer Composition

The GS1 Resolution Application now composes directly with `ZyUX-PUBLIC-OBSERVER-001 v0.1`.

For a public scan/link:

```text
SCAN / OPEN PUBLIC REFERENCE
        ↓
ADDRESSING / ZRR / GS1 application path as governed
        ↓
PUBLICLY DISCLOSABLE GS1 RESOLUTION RESULT
        ↓
DIRECT ANSWER
        ↓
OPTIONAL MEANING / BASIS / PROOF
        ↓
PUBLIC NEXT ACTION, IF ANY
        ↓
AUTHENTICATED / CUSTOMER TRANSITION ONLY IF THE JOB REQUIRES IT
```

The following remain mandatory application invariants:

1. Public information does not require an account merely because Unfict can identify an account flow.
2. Non-disclosable data remains invisible.
3. Verification/Trust language does not overclaim.
4. Material uncertainty remains visible.
5. Public UI does not expose developer/internal diagnostics by default.
6. A public scan does not itself create Authority, ownership, customer status, consent, or a persistent account relationship.
7. Authentication after a public scan preserves the originating GS1/product context.
8. Authentication establishes access only; it does not itself establish eligibility for the requested relationship/action.
9. Public result composition follows the Public Observer visible-complexity budget.
10. Public proof remains minimum-necessary and disclosure-bounded.

---

# 25. Lifecycle / Historical Experience

## 25.1 Link and Product History

A later change to product data, Evidence, Trust basis, or source state SHALL NOT silently rewrite the meaning of a historical Receipt.

Historical inspection should use the historical basis according to `ZyUX-006` and Receipt/runtime authority.

---

## 25.2 Developer Offboarding

Developer departure ends future organization access as governed.

It SHALL NOT erase:

- historical requests;
- historical Receipts;
- attributed integration actions;
- organization-owned application history;

where retention permits.

---

## 25.3 API Version Lifecycle

A version change does not rewrite older application history.

Historical requests/Receipts should remain interpretable with their original contract/application version where the underlying system retains them.

---

## 25.4 GS1 / External Standard Evolution

A future GS1 standard/profile version may alter permitted syntax/semantics.

This Application Profile SHALL NOT silently reinterpret historical requests using a later standard version.

Version provenance belongs with the applicable standards/interface architecture.

---

# 26. Accessibility / Localization

## 26.1 Documentation

- code examples should remain selectable/copyable;
- semantic meaning SHALL NOT depend only on color;
- error states should be announced/accessibly labeled;
- tables/examples should remain usable on narrow screens;
- developer tools should support keyboard operation where applicable.

## 26.2 Localization

Localization MAY translate explanatory prose.

It SHALL NOT alter:

- GTIN;
- API paths;
- error codes;
- enum values;
- Receipt IDs;
- Evidence reference identifiers;
- code/schema field names.

## 26.3 Trust / Verification Language

Localized labels must preserve the exact semantic strength of the operative status.

---

# 27. Security / Privacy Review Points

Before production release, Security/Privacy review should address at least:

- developer key issuance and storage;
- environment separation;
- key rotation/revocation;
- API abuse/rate limiting;
- logs containing GS1/product/customer-sensitive data;
- Evidence link disclosure;
- Receipt disclosure;
- request/correlation ID leakage;
- client/tenant isolation;
- public vs authenticated disclosure;
- generated code accidentally embedding secrets;
- SDK/CLI local secret handling;
- MCP/agent confused-deputy risk where applicable;
- host-forwarded context trust boundary;
- replay/diagnostic access;
- public product privacy implications.

This profile does not define Security controls.

It requires the experience to surface their consequences without ambiguity.

---

# 28. Telemetry / Success Measures

## 28.1 Discovery

Measure:

- capability-page → quickstart entry;
- request-example engagement;
- docs search exits;
- error-doc discovery.

## 28.2 First Value

Measure:

- time to first valid sandbox invocation;
- first-call success rate;
- first useful result rate;
- percentage who correctly identify verification/Trust meaning in validation testing;
- abandonment before first result.

## 28.3 Integration

Measure:

- quickstart completion;
- successful SDK reproduction of REST result;
- error-recovery completion;
- support contacts caused by ambiguous contract/semantics.

## 28.4 Production

Measure, when production activation exists:

- sandbox → production readiness start;
- readiness completion;
- Developer→Admin handoff completion;
- first production call;
- retained production integration.

## 28.5 Expansion Signals

Observe, without treating them as automatic commercial triggers:

- additional environments;
- additional applications;
- agency/client replication;
- demand for Evidence/Receipt inspection;
- demand for Agent/MCP use;
- demand for Host-Native integration.

Numeric thresholds belong to Product/Marketing release plans, not this profile.

---

# 29. Application Acceptance Invariants

### GS1-AX-01 — Application Does Not Own GS1 Semantics

The profile consumes GS1 semantics; it does not redefine them.

### GS1-AX-02 — Application Does Not Own Wire Contract

The operative OpenAPI/interface contract remains authoritative over request/response shape.

### GS1-AX-03 — First Value Is Concrete

A Developer can execute a governed sample GS1 resolution and interpret the result.

### GS1-AX-04 — Public Understanding Before Account

A Developer can understand the capability and view representative examples before authentication.

### GS1-AX-05 — Actual Invocation Obeys Access Contract

Public documentation/demo does not masquerade as an unauthenticated governed API call where the contract requires a key.

### GS1-AX-06 — Sandbox Is Explicitly Non-Production

A successful sandbox result grants no production Authority.

### GS1-AX-07 — Product Result ≠ Universal Truth

The GS1/commerce projection is not presented as the entire canonical Reality model.

### GS1-AX-08 — Verification ≠ Trust ≠ Authorization

These remain semantically distinct.

### GS1-AX-09 — Evidence Presence ≠ Verification

Evidence links do not themselves mean the product is verified.

### GS1-AX-10 — Receipt Meaning Is Scoped

Receipt/reference does not become physical-world proof beyond governing semantics.

### GS1-AX-11 — Unavailable ≠ False

Evidence unavailability remains unavailability.

### GS1-AX-12 — Invalid Input ≠ Not Resolved

Malformed Digital Link and valid-but-unresolved input remain different failures.

### GS1-AX-13 — Errors Are Actionable Without Losing Precision

Developer surfaces preserve stable contract errors while adding plain-language recovery.

### GS1-AX-14 — Interface Semantic Parity

REST/SDK/MCP/console projections of this capability preserve meaning.

### GS1-AX-15 — No Hidden GTIN Guessing

A surface SHALL NOT silently reinterpret arbitrary strings as GS1 identifiers where explicit Digital Link context is required.

### GS1-AX-16 — Production Gate Is Explainable

Production requirements are visible as readiness/handoff states where practical rather than surprise failure only.

### GS1-AX-17 — Handoff Preserves Integration Context

Developer→Admin handoff does not require re-creating the application's technical context.

### GS1-AX-18 — Multi-Client Isolation

Agency/client switching does not leak another client's credentials, requests, logs, Evidence, or Receipts.

### GS1-AX-19 — Historical Meaning Is Versioned

Later application/standard/API changes do not silently rewrite historical request/Receipt meaning.

### GS1-AX-20 — Application Does Not Authorize Product Expansion

This profile does not authorize DPP, Warranty, Recall, registration, or another application merely because GS1 Resolution exists.

### GS1-AX-21 — Public Observer Is Not Customer by Scan

Scanning/opening a public GS1 link does not create ownership/customer status or stronger disclosure.

### GS1-AX-22 — Host Context Is Not Authority

A host-supplied product/link context does not itself grant Authority or Trust.

### GS1-AX-23 — Internal Explicitness Does Not Become External Burden

Required semantic precision is absorbed by the product where possible rather than displayed as constitutional machinery.

### GS1-AX-24 — First Success Teaches Meaning

The first-success experience exposes enough Answer/Meaning/Basis/Proof/Boundary structure to show why the result is governed rather than merely a redirect response.

---

# 30. Canonical UX Test Vectors

The following are acceptance vectors, not implementation scripts.

## Entry / First Value

1. Anonymous developer reads the GS1 Resolution capability page without an account.
2. Developer sees a valid GS1 Digital Link example.
3. Developer sees the current request shape without learning Runtime internals.
4. Developer sees a representative successful response.
5. Developer understands that verificationStatus and trustStatus are not synonyms.
6. Developer knows Evidence links and Receipt reference exist where returned.
7. Developer enters the governed sandbox/evaluation path.
8. Developer runs the provided valid GS1 Digital Link successfully.
9. First result explains product + verification/Trust + Evidence/Receipt structure.
10. First result does not imply authenticity/safety/compliance beyond the governed contract.

## Input / Errors

11. Malformed input returns `INVALID_DIGITAL_LINK`.
12. Error explains expected input without exposing internal parser detail as the only guidance.
13. Valid link with no known resolution returns `IDENTITY_NOT_FOUND` rather than `INVALID_DIGITAL_LINK`.
14. `IDENTITY_NOT_FOUND` does not fabricate a likely product.
15. Missing Evidence returns `EVIDENCE_UNAVAILABLE`, not `verificationStatus=false` invented by UX.
16. Verification failure remains distinct from Evidence unavailable.
17. Runtime failure exposes correlation/execution reference where contract provides it.
18. Service failure is not presented as negative product Evidence.
19. Error translation preserves the stable machine code.
20. Developer can identify a next legitimate action for each documented error class.

## Disclosure / Proof

21. Public docs do not expose another tenant/client's requests.
22. Evidence links appear only where returned and disclosure permits.
23. Receipt reference appears without being described as universal physical proof.
24. Deep proof path preserves originating request/Receipt context.
25. If no Receipt viewer exists, UI does not fabricate one.
26. Internal ACV/raw Policy structures remain hidden by default.
27. Material uncertainty is visible at an appropriate depth.
28. Trust explanation uses the operative Trust meaning.

## Interface Parity

29. Same fixed GS1 test vector through REST and SDK preserves result meaning.
30. Same fixed test vector through MCP, where available, preserves result meaning.
31. SDK may use idiomatic naming without changing input semantics.
32. MCP description does not weaken Trust/verification boundary.
33. Console renders contract-faithful request/response.
34. One interface failure classification does not contradict another for the same underlying result.

## Environment / Production

35. Sandbox environment is unmistakable.
36. Sandbox credential cannot silently become production credential.
37. Production prerequisites are inspectable before promotion where practical.
38. Developer lacking Admin Authority can initiate a governed handoff rather than receiving only a dead end.
39. Org Admin receives application/integration context necessary for decision.
40. Admin approval does not automatically grant unrelated Developer privileges.
41. Production success does not change semantics of the same capability.
42. Production failure identifies environment/context clearly.

## Multi-Client / Agency

43. Client A credential is not visible in Client B context.
44. Client A request history is not visible in Client B context.
45. Client A Receipt is not discoverable in Client B without separate legitimate scope.
46. Switching client leaves GS1 application semantics unchanged.
47. Reusable code/template may carry forward without carrying secrets/Authority.
48. Client handoff preserves governed historical attribution.

## Lifecycle / Versioning

49. Revoked developer key stops future invocation without erasing historical request records where retained.
50. Developer leaving organization loses future organization access while historical attribution remains.
51. API version shown with request/result where needed for interpretation.
52. Historical Receipt remains tied to the historical contract/application semantics.
53. Later GS1 profile/version does not silently reinterpret old request provenance.
54. Deprecated surface points to migration guidance before removal according to operative version policy.

## Public Observer Boundary

55. Public scan does not automatically create an account.
56. Public scan does not create ownership/customer status.
57. Public product experience shows only public disclosure.
58. Public authentication preserves originating product context.
59. Public UI does not expose developer-only diagnostic data.
60. Public uncertainty is not hidden merely to make the product page look definitive.

---

# 31. Drift Prohibitions

`ZyUX-APP-GS1-RESOLUTION-001` SHALL NOT become:

- a new GS1 standard;
- a replacement for GS1 Digital Link semantics;
- a general product-information CMS;
- a product registration application;
- a warranty application;
- a recall application;
- a DPP application;
- a counterfeit detector by implication;
- an authentication system;
- an authorization system;
- a Trust authority;
- an Evidence authority;
- a Runtime specification;
- a new API contract;
- a pricing plan;
- a developer acquisition / SEO / content strategy;
- a host-specific product;
- a new universal Identity model;
- a broad GTM authorization for all commerce use cases.

---

# 32. External Implementation Dependencies / Open Decisions

These are not ZyUX-owned but must be resolved for a production-quality application release.

## 32.1 Operative API Contract Version

Confirm the exact OpenAPI contract that governs launch.

## 32.2 Sandbox Credential Issuance

Choose the actual developer-key/evaluation access process.

## 32.3 Production Security Contract

Define final production credential/scoping/rotation/revocation model.

## 32.4 Production Activation

Define actual Org Admin, Security, Commercial, and operational prerequisites.

## 32.5 Receipt Inspection Surface

Confirm whether launch exposes:

- only `receiptReference`;
- retrieval endpoint;
- interactive viewer;
- replay/explain capability;
- export/verification function.

ZyUX will adapt to what truly exists.

## 32.6 Evidence Inspection Surface

Confirm what `evidenceLinks` resolve to, under what scope, and with what disclosure rules.

## 32.7 Trust Label Authority

Confirm the operative authority/definitions for the current `trustStatus` labels before public explanatory copy is frozen.

## 32.8 Public Observer / M11 Experience

Define the first human public product-resolution UI jointly with `ZyUX-PUBLIC-OBSERVER-001`.

## 32.9 SDK / MCP Launch Surface

Confirm which non-REST interfaces actually ship in the first release.

## 32.10 Support / Status Surface

Confirm what operational support, incident/status, and escalation surfaces exist at launch.

---

# 33. Cross-Profile Dependencies

## 33.1 `ZyUX-DEVELOPER-001`

Primary current archetype.

Owns:

- developer entry;
- context handling;
- first-value principles;
- production readiness UX;
- developer error translation;
- proof-near-work principle;
- developer lifecycle.

This Application Profile supplies the **GS1-specific Job/input/result/error/proof composition**.

---

## 33.2 `ZyUX-ORG-ADMIN-001`

Required before a mature production activation journey can be fully governed.

Owns organization-level approval/configuration Jobs.

---

## 33.3 `ZyUX-PUBLIC-OBSERVER-001`

Required before the public M11 human experience can be finalized.

This application supplies the GS1/product context.

Public Observer supplies the human/public journey.

---

## 33.4 `ZyUX-AGENCY-001`

Required to deepen integrator/partner multi-client delivery and handoff.

---

## 33.5 `ZyUX-AGENT-001`

Required only when autonomous invocation/discovery becomes a real product surface needing archetype-specific treatment.

MCP semantic parity can be tested earlier under interface/security authority.

---

# 34. Application Profile Specializations

These rules are scoped to the GS1 Resolution Application.

## ZyUX-APP-GS1-S01 — GS1 Language First

> The application SHALL lead with governed GS1/commerce language rather than internal constitutional vocabulary where that language faithfully represents the capability.

## ZyUX-APP-GS1-S02 — Digital Link Context Is Explicit

> The application SHALL NOT silently interpret arbitrary ambiguous strings as GS1 Digital Links or GTINs merely for ergonomic convenience.

## ZyUX-APP-GS1-S03 — First Useful Result Is a Governed Resolution

> First value requires a meaningful GS1 product-resolution result, not merely successful transport.

## ZyUX-APP-GS1-S04 — Result Meaning Is Layered

> The application SHALL distinguish product answer, verification, Trust, Evidence, Receipt, and limitation/boundary.

## ZyUX-APP-GS1-S05 — Wire Contract Is External Authority

> The Application Profile SHALL project the operative API/SDK/MCP contract and SHALL NOT independently add or redefine contract semantics.

## ZyUX-APP-GS1-S06 — Error Code Stays Stable; Explanation Becomes Useful

> Developer-facing surfaces MAY translate a stable contract error into clearer Job language but SHALL NOT hide or change its machine meaning.

## ZyUX-APP-GS1-S07 — Invalid ≠ Unresolved ≠ Unverified ≠ Unavailable

> These states SHALL remain distinguishable wherever the underlying contract distinguishes them.

## ZyUX-APP-GS1-S08 — Sandbox Never Implies Production

> Sandbox success SHALL NOT grant or imply production access, Authority, commercial activation, or operational readiness.

## ZyUX-APP-GS1-S09 — Production Readiness Is Explainable

> Known production prerequisites SHOULD be visible as readiness/handoff states before surprise failure where practical.

## ZyUX-APP-GS1-S10 — Proof Remains Near the Job

> Common Evidence/Receipt inspection SHOULD remain near the current request/work surface where technically and legally practical.

## ZyUX-APP-GS1-S11 — Interface Parity

> REST, SDK, MCP, console, and Host-Native projections of the same GS1 Resolution capability SHALL preserve the same governed meaning.

## ZyUX-APP-GS1-S12 — Public Scan Does Not Create Relationship

> Opening/scanning a public GS1 reference SHALL NOT by itself create customer, ownership, account, Standing, or Authority state.

## ZyUX-APP-GS1-S13 — Host Context Is Non-Sovereign

> Host-supplied GS1/product context is input and SHALL NOT establish Trust, Authority, or canonical truth by itself.

## ZyUX-APP-GS1-S14 — Historical Resolution Is Not Rewritten

> Later API, application, source, or GS1 standard changes SHALL NOT silently rewrite the historical meaning of a retained request/Receipt.

## ZyUX-APP-GS1-S15 — Application Scope Remains Narrow

> GS1 Resolution SHALL NOT silently expand into DPP, Warranty, Recall, Registration, or another application without its own governed capability/application decision.

## ZyUX-APP-GS1-S16 — Internal Explicitness Is Absorbed

> The application SHALL preserve required semantic context underneath without forcing ordinary developers/public observers to navigate internal Unfict constitutional structure.

---

# 35. Ratification / Review Gate

Before this Application Profile may be proposed for ratification, review SHALL prove:

- [ ] `ZyUX-000–006 v1.0` conformance;
- [ ] `ZyUX-PROFILES-000` Application Profile creation gate satisfied;
- [ ] current CAW/GS1 application owner is explicit;
- [ ] operative API/OpenAPI contract is explicit;
- [ ] no GS1 semantics are invented;
- [ ] no Identity semantics are invented;
- [ ] verification/Trust/Evidence/Receipt meanings remain imported;
- [ ] current error contract is faithfully projected;
- [ ] invalid/unresolved/unverified/unavailable distinctions survive;
- [ ] first useful result is concrete and testable;
- [ ] public understanding does not require account;
- [ ] actual API invocation follows actual access contract;
- [ ] sandbox/production distinction is clear;
- [ ] production handoff does not manufacture Admin Authority;
- [ ] proof/Receipt surface does not overclaim what exists;
- [ ] REST/SDK/MCP parity can be tested for any surfaces that ship;
- [ ] Public Observer composition is reconciled with `ZyUX-PUBLIC-OBSERVER-001 v0.1`;
- [ ] Agency/client isolation is preserved;
- [ ] historical/version semantics are preserved;
- [ ] no broader commerce/DPP/warranty/recall product authorization is implied;
- [ ] Security/Privacy owners have reviewed production-facing consequences;
- [ ] at least the 60 canonical UX vectors can be executed or mapped to implementation tests without inventing missing semantics.
- [ ] Developer critical journey has reached `USABILITY-TESTED` or unresolved evidence gap is explicitly accepted by Chair;
- [ ] Public Observer critical journey has reached `USABILITY-TESTED` or unresolved evidence gap is explicitly accepted by Chair;
- [ ] visible-complexity budget has been tested on the public result surface.

---

# 36. Recommended Validation Package

Before ratification, produce:

```text
ZyUX-APP-GS1-RESOLUTION-001
        │
        ├── Doctrine Profile
        ├── Developer Journey Map
        ├── Public-Observer Journey Map
        ├── Public scan/link clickable prototype
        ├── Request / Result / Error UX Test Matrix
        ├── REST / SDK / MCP Semantic-Parity Matrix
        ├── Sandbox → Production Handoff Prototype
        ├── Developer First-Value Usability Test
        └── Public-Observer First-Value Usability Test
```

The profile should not be ratified merely because the prose is coherent.

The application experience should be demonstrably usable.

---

# 37. Closing Doctrine

> **The first Unfict developer application should be understandable in one sentence and useful in one successful call.**

> **Give Unfict a GS1 Digital Link. Receive a bounded product-resolution answer with verification, Trust, Evidence, and proof references according to the governed contract.**

> **The developer should learn GS1 Resolution before learning Unfict's internal constitution.**

> **A successful response is not enough. The participant must understand what the response means and what it does not mean.**

> **Invalid input, unresolved product, failed verification, unavailable Evidence, and service failure are different states. Preserve them.**

> **A sandbox proves integration behavior. It does not grant production Authority.**

> **Production readiness should be explainable before it becomes a wall.**

> **REST, SDK, MCP, console, and Host-Native surfaces may differ in ergonomics. They must not become different GS1 semantic systems.**

> **Evidence and Receipts should be near the Job, but they must never be made to prove more than their governing authority establishes.**

> **A public scan does not create a customer, owner, or authorized actor.**

> **GS1 Resolution is one application. It is not permission to multiply products.**

> **Canonical underneath. GS1-native on top. Explicit in between.**

---

# 38. Status & Next Step

`ZyUX-APP-GS1-RESOLUTION-001 v0.2` is now **DOCTRINE-COMPLETE / PROTOTYPE-READY**, not usability-validated.

Its current archetype composition is:

```text
ZyUX-DEVELOPER-001 v0.3
+
ZyUX-PUBLIC-OBSERVER-001 v0.1
```

The next required work is empirical:

1. reconcile against the current CAW/OpenAPI contract;
2. create the Developer quickstart/first-value prototype;
3. create the Public Observer scan/link/result prototype;
4. run representative usability observations;
5. patch material friction/misunderstanding into the profiles;
6. then draft `ZyUX-ORG-ADMIN-001` as the production/admin counterpart;
7. draft `ZyUX-AGENCY-001` early enough to test repeated client implementation and handoff.

No ratification claim should be made merely from doctrinal completeness.

---

**End of `ZyUX-APP-GS1-RESOLUTION-001 v0.2 — DRAFT FOR CHAIR REVIEW`**
