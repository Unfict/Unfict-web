# ZyUX-DEVELOPER-001 — Developer Experience Profile

**Canonical ID:** `ZyUX-DEVELOPER-001`  
**Version:** 0.3  
**Status:** DRAFT — CHAIR REVIEW / PROFILE-PROGRAM v0.2 ALIGNED  
**Series:** `ZyUX` — Unfict Experience Architecture  
**Profile Type:** Archetype Profile  
**Classification:** Downstream Experience Composition Profile  
**Normative Level:** Profile Specialization — Subordinate to `ZyUX-000–006`  
**Active Master Brand:** **Unfict — Reality Sync**  
**Brand Lineage:** `Zyppi → Unfict`  
**Program Authority:** `ZyUX-PROFILES-000 v0.2`  
**Primary Experience Authority:** `ZyUX-000 v1.0 — RATIFIED — FINAL`  
**Inherited Foundation:** `ZyUX-001` through `ZyUX-006`, all v1.0 Ratified  
**Coordinates With:** ZYAPI v1.0 · ZYAPI v1.1 Host-Native & Expansion Doctrine · API/SDK Blueprint · applicable OpenAPI/API contracts · SDK contracts · MCP/tool contracts · Runtime · Evidence · Trust · Authority · Standing · Policy · Receipt · Security · Host-Native doctrine  
**Applies To:** Public developer documentation · API onboarding · sandbox · OpenAPI · SDKs · MCP/tool discovery · developer console · credentials · environments · request/response comprehension · errors · debugging · proof inspection · production activation · integration lifecycle · agency/multi-client developer contexts  
**Does Not Authorize:** new constitutional semantics · new API endpoints · new SDK methods · new MCP tools · new authentication scheme · new pricing · new production environment · new developer plan · new host integration · new Identity semantics · new Authority semantics · new Trust semantics
**Validation State:** `DOCTRINE-COMPLETE / PROTOTYPE-READY — NOT YET USABILITY-VALIDATED`  

**Revision Basis:** Qwen GTM/adoption attack + UX stress test + Claude UX review + Chair dispositions, 18–19 September 2026  
**Revision Intent:** Preserve the v0.2 Developer architecture while aligning it to `ZyUX-PROFILES-000 v0.2` maturity/evidence rules. No substantive capability or GTM ownership is added.

---

# 0. Status / Authority / Non-Scope

`ZyUX-DEVELOPER-001` composes the ratified Unfict Experience Architecture for a recurring developer Job.

It answers:

> **How should a developer discover, understand, test, integrate, operate, debug, and prove an Unfict capability without needing to understand Unfict's internal constitutional machinery?**

It does not define what a capability means.

It does not define the API transport contract.

It does not create authorization.

It does not decide Trust.

It does not define Receipt semantics.

It does not make every developer an Organization Admin, Operator, Auditor, or Agent.

The governing composition is:

```text
RATIFIED ZyUX-000–006
        +
GOVERNED CAPABILITY / API CONTRACT
        +
DEVELOPER JOB
        +
CURRENT SUBJECT / ORGANIZATION / CLIENT CONTEXT
        +
AUTHORIZED INTERFACE
        =
DEVELOPER EXPERIENCE
```

Where this profile conflicts with `ZyUX-000–006`, the ratified foundation governs.

Where this profile conflicts with an operative API/SDK/MCP contract, the operative contract governs the technical surface while the ratified ZyUX foundation continues to govern experience semantics.

Strategic drafts such as ZYAPI v1.1 and the API/SDK Blueprint are supporting design sources, not automatic implementation authority.

## 0.1 Developer Experience vs Developer Growth

This profile governs the **experience conditions that make legitimate developer adoption possible**. It does not own the commercial acquisition engine.

It MAY govern experience questions such as:

- can a developer understand a public capability before login?
- can they reach useful value without learning internal architecture?
- can they preserve context through authentication?
- can they understand what failed and what to do next?
- can they move from sandbox success into the correct organizational handoff?
- can they inspect proof without unnecessary workflow displacement?

It SHALL NOT own:

- SEO/content strategy;
- paid acquisition;
- CAC targets;
- partner commissions;
- pricing/packaging;
- revenue thresholds;
- channel strategy;
- launch campaigns;
- exact product-market positioning of a particular Application.

Those belong to Product / Marketing / Economic authorities.

> **Developer adoption requires both a strong experience and a distribution engine. This profile owns only the experience side of that equation.**

## 0.2 Application Binding Requirement

The Developer archetype may be ratified independently of any one Application.

A **market-facing production developer release**, however, SHALL bind this archetype to at least:

```text
1 governed Application Profile
+
1 operative capability/interface contract
+
1 sandbox/test access model
+
1 production activation path
+
1 public error/recovery contract
+
1 proof/Receipt inspection surface where the capability supports proof
```

The archetype answers **how a Developer should experience Unfict**.

The Application Profile answers **what the Developer is actually building now**.

---


## 0.3 Profile-Program UX Evidence Boundary

This profile is sufficiently complete to prototype, but its usability is not proven by doctrine.

It inherits the `ZyUX-PROFILES-000 v0.2` maturity ladder and complexity-budget discipline.

For Developer surfaces, the current default visible context budget remains:

```text
Environment
Organization / Client
Acting capacity (only when consequential)
```

Other request, credential, Receipt, Host, and contract context should remain inspectable rather than permanently displayed unless it becomes decision-relevant.

The next validation burden is empirical: a representative critical journey must be prototyped and observed before this profile can become a Ratification Candidate.

---

# 1. Profile Definition

> **Developer — A human or software-building Subject who discovers, integrates, tests, operates, debugs, or maintains an Unfict capability through developer-facing interfaces.**

The Developer archetype is defined by the Job, not by:

- job title;
- seniority;
- company size;
- programming language;
- whether the Subject is internal or external;
- whether the Subject works alone or for an organization;
- whether the Subject is using REST, SDK, MCP, CLI, or a Host-Native integration surface;
- whether AI coding assistance is involved.

A developer may simultaneously be:

```text
Developer
+
Organization Admin
+
Agency participant
+
Operator
```

but each archetype remains a distinct experience composition.

The profile SHALL NOT imply one account per archetype.

---

# 2. Primary Jobs

The Developer profile recognizes seven primary recurring Jobs.

## Job D1 — Discover Capability

Determine:

- what Unfict can legitimately do;
- what problem the capability solves;
- which interface exposes it;
- what semantic context the caller must provide;
- whether the capability is appropriate for the intended application.

The developer should not need to understand internal constitutional package names merely to determine whether a useful capability exists.

---

## Job D2 — Understand the Contract

Determine:

- required input;
- required semantic context;
- response meaning;
- uncertainty boundaries;
- errors;
- authentication/authorization requirements;
- Receipt/proof availability;
- versioning expectations.

The contract should teach the developer what the capability means without requiring inference from examples alone.

---

## Job D3 — Reach First Useful Result

Move from discovery to a successful, meaningful invocation with minimum legitimate friction.

The first result should demonstrate the actual value of the capability rather than merely prove network connectivity.

A first-value experience SHOULD help the developer understand, without requiring constitutional vocabulary:

```text
what was recognized / addressed
what relevant context was evaluated
what governed result occurred
what material limitation remains
where deeper proof can be inspected
```

The exact content is Application-specific and belongs to the applicable Application Profile and interface contract.

Where a sandbox exists, it should support this Job without implying production Authority.

---

## Job D4 — Integrate Safely

Embed the governed capability into an application, workflow, host, or service while preserving:

- semantic parity;
- scope;
- provenance;
- Trust meaning;
- error meaning;
- authorization boundaries;
- Receipt meaning;
- retry/idempotency safety where applicable.

---

## Job D5 — Move to Production

Establish the legitimate organizational, credential, environment, security, commercial, and operational context needed for production use.

Production activation is not assumed to be the same as signup, sandbox access, or successful testing.

The developer experience SHOULD avoid a surprise **friction cliff**. Before a production gate is encountered, the developer should be able to understand:

- what production value/state becomes available;
- which prerequisites are already satisfied;
- which prerequisites remain;
- which prerequisite the developer can satisfy directly;
- which prerequisite requires an Organization Admin, Security owner, commercial owner, or other authorized Subject;
- how to initiate that governed handoff without rebuilding the integration context.

The exact commercial/security gate is externally owned. The continuity of the handoff is a Developer UX concern.

---

## Job D6 — Debug and Recover

Understand:

- what failed;
- at which stage;
- whether failure is transport, authentication, authorization, input, Evidence, Trust, Policy, host, or execution related;
- what may be retried;
- what requires remediation;
- what must not be inferred.

A developer should not need support merely to distinguish fundamentally different failure classes when the system already knows the distinction.

---

## Job D7 — Inspect Proof and Operate Over Time

Retrieve or follow legitimate proof, Receipt, provenance, status, version, or historical information necessary to:

- explain an integration result;
- reconcile incidents;
- validate semantic behavior;
- maintain compatibility;
- rotate credentials;
- respond to deprecation;
- hand over ownership of the integration;
- offboard safely.

---

# 3. Subject / Relationship / Capacity Model

Developer is an experience archetype, not a constitutional Role.

A developer may act in several legitimate capacities.

Examples:

```text
Personal developer
Organization developer
Contract developer
Agency developer
System integrator
Platform engineer
Application maintainer
```

These labels do not create Authority.

The experience must derive current capability from the actual governed context.

Conceptually:

```text
SUBJECT
+
RELATIONSHIP / CAPACITY
+
CURRENT ORGANIZATION OR CLIENT SCOPE
+
STANDING
+
APPLICABLE AUTHORITY
+
LAWFUL AGENCY / DELEGATION BASIS WHERE REQUIRED
+
POLICY
+
INTERFACE / ENVIRONMENT
=
LEGITIMATE DEVELOPER EXPERIENCE
```

## 3.1 Self-Executing Developer

A developer acting under their own valid Authority does not require synthetic self-delegation.

This inherits `ZyUX-L16` and `ZyUX-002-S06`.

## 3.2 Organization Developer

Being an employee or organization member does not itself grant production API Authority.

The UX may show the organization context.

The authorization layer must still determine what the Subject may legitimately do.

## 3.3 Agency / Multi-Client Developer

A developer acting for multiple clients must have explicit current client scope.

```text
Developer
├── Client A
├── Client B
└── Client C
```

Client context SHALL NOT collapse merely because the same developer Subject uses one account.

This is a major cross-dependency with `ZyUX-AGENCY-001`.

## 3.4 Developer Using an AI Coding Assistant

The human remains a Developer archetype.

The AI assistant does not automatically become the same Subject, acquire the developer's Authority, or gain hidden access merely because it is used during implementation.

Where an autonomous agent itself invokes Unfict, the `ZyUX-AGENT-001` profile applies in addition to this Developer profile.

---

# 4. Entry Conditions

Developer entry is intentionally progressive.

## 4.1 Public Discovery

Public developer material should ordinarily be available without authentication where disclosure permits.

Potential public surfaces include:

- conceptual overview;
- API reference;
- SDK installation instructions;
- capability descriptions;
- public schemas;
- error documentation;
- runnable examples that do not expose protected credentials;
- changelog;
- status information.

No account should be required merely to learn what a public capability does.

## 4.2 Sandbox Entry

Authentication may be required when the developer needs:

- a sandbox credential;
- persistent test resources;
- environment-specific state;
- saved requests;
- usage visibility;
- client-specific test configuration.

The experience should ask only for information required for that legitimate purpose.

## 4.3 Production Entry

Production entry may require a materially stronger context than sandbox entry.

Potential requirements may include, where governed:

- organization relationship;
- production credential;
- environment selection;
- verified administrative action;
- delegated capability;
- security configuration;
- source/host connection;
- commercial activation.

This profile does not define which gates are required.

It requires the UX to distinguish them.

## 4.4 Preserve Developer Intent

A developer arriving through:

```text
API reference
SDK method
error documentation
Receipt link
sandbox example
host integration guide
MCP tool documentation
```

should return to the initiating Job after any required authentication or organization selection.

Do not force:

```text
deep link
→ sign in
→ generic dashboard
→ rediscover documentation
```

This inherits `ZyUX-001-S11` and `ZyUX-003-S06`.

---

# 5. Context Anchors

Developer context must be explicit wherever ambiguity could alter meaning, scope, or consequence.

The ordinary context model may include:

```text
Current Subject
Current organization / client
Environment
Application / capability
Interface
Credential / credential scope
Target constituent / reference
Request / operation
Receipt / proof reference
Host, where applicable
```

Not every interaction requires every anchor.

> **Internal Explicitness ≠ External Cognitive Burden.**

Unfict may need rich context underneath. The developer should continuously see only the context needed to avoid a meaningful mistake or make the current decision.

## 5.0 Progressive Context Disclosure

The ordinary developer surface SHOULD distinguish:

### Active Context
Context whose misunderstanding could immediately change scope or consequence. Typical examples:

```text
Environment
Organization / Client
Acting capacity / project or application context where material
```

A compact persistent context header MAY represent these anchors. Exact UI form is not mandated.

### Passive / Inspectable Context
Context that should remain available without occupying the primary work surface continuously. Examples:

```text
credential / scope
target constituent / reference
request metadata
Receipt/proof reference
host state
version/provenance detail
```

These may appear in an inspector, request details panel, CLI output, or equivalent deep surface.

The UX SHOULD promote a passive anchor into active visibility when:

- the developer is about to perform a consequential action;
- a mismatch or conflict involves that anchor;
- an error cannot be understood without it;
- the developer explicitly requests deeper inspection.

## 5.1 Environment

The developer should be able to distinguish at least conceptually between:

```text
Documentation / example
Sandbox / test
Production
```

where those environments exist.

A consequential production action should never look indistinguishable from a sandbox action where that ambiguity could cause harm.

## 5.2 Organization / Client Context

Current organization or client scope should be obvious before actions involving:

- credentials;
- production activation;
- secrets;
- source connections;
- usage administration;
- Host-Native writes;
- client-specific configuration.

## 5.3 Capability Context

The developer should understand:

```text
What Job is this capability for?
What semantic context does it require?
What does a successful result establish?
What does it not establish?
```

## 5.4 Interface Context

REST, SDK, MCP, and Host-Native projections may differ in syntax.

They must not become different semantic systems.

This inherits `ZyUX-L12`, `ZyUX-003-S16`, and `ZyUX-005-S02`.

---

# 6. Information Needs

The Developer profile requires a different default information density from a Public Observer or Customer.

The ordinary developer needs access to six layers of information.

## 6.1 Capability Layer

```text
What can I do?
```

The capability description should be Job-oriented and domain/application-native where authorized.

## 6.2 Contract Layer

```text
What input is required?
What output is returned?
What context is mandatory?
```

Schemas and examples should reinforce one another.

## 6.3 Semantic Boundary Layer

```text
What exactly does this field/result mean?
What must I not infer?
```

A developer-facing field named `verified`, `trusted`, `authorized`, or similar must not be semantically stronger than its governing source.

## 6.4 Error / Recovery Layer

```text
What failed?
Why?
Can I retry?
What is the next legitimate action?
Where can I inspect more?
```

Transport failure, service failure, authorization denial, Evidence insufficiency, Trust uncertainty, and object state should not collapse into one generic error experience.

The developer-facing projection SHOULD translate internal constitutional distinctions into task-oriented language. Internal owner vocabulary MAY remain available in advanced detail, but the developer SHALL NOT need to understand terms such as `epistemic state`, `Standing`, or internal Policy machinery merely to recover from an ordinary integration failure.

## 6.5 Proof Layer

```text
Where is the Receipt / Evidence / provenance reference?
How do I inspect it if authorized?
```

## 6.6 Operational Layer

```text
Which environment?
Which version?
Which credential?
What changed?
Is the service healthy?
Is this behavior deprecated?
```

Operational information should help the developer distinguish integration problems from constitutional result semantics.

---

# 7. Disclosure & Action-State Matrix

The following matrix is representative and non-authorizing.

| Item / Capability | Disclosure State | Current Action State | Ordinary Developer Explanation | Deeper Proof / Detail |
|---|---|---|---|---|
| Public API capability description | Disclosable | Informational | Job + contract summary | Reference/spec |
| Public error documentation | Disclosable | Informational | Cause + recovery | Error contract |
| Sandbox invocation | Disclosable | Available where sandbox access exists | Input/output + sandbox state | Test Receipt/provenance where supported |
| Production capability known but not activated | Disclosable where policy permits | Requestable / Escalatable or Unavailable | Activation requirement | Authority/commercial/security basis where disclosable |
| Production credential creation | Disclosable to eligible Subjects | Available / Requestable / Unavailable by scope | Required organization/environment | Audit/credential metadata |
| Credential secret after creation | Potentially non-disclosable after one-time reveal | N/A | Secret handling guidance | None if secret is intentionally unrecoverable |
| Client A credentials while acting in Client B | Non-disclosable | N/A | None | None |
| Capability blocked by missing configuration | Disclosable | Blocked-by-state | Missing configuration | Configuration requirement |
| Capability denied by Authority/Policy | Disclosable only where allowed | Unavailable / Requestable if lawful path exists | Scoped reason | Authority/Policy basis where permitted |
| Receipt reference | Disclosable according to result/scope | Informational | What the Receipt records | Authorized proof surface |
| Internal implementation topology | Usually non-disclosable / unnecessary | N/A | None unless operationally relevant | Internal only |

The matrix SHALL NOT become an authorization table.

---

# 8. Navigation / Work Surface

The Developer experience should be organized around Jobs rather than a module inventory.

A useful conceptual surface architecture is:

```text
DISCOVER
→ capability overview
→ quickstart

BUILD
→ API reference
→ SDK / MCP
→ examples
→ sandbox

UNDERSTAND
→ semantics
→ errors
→ Trust / Evidence / Receipt guidance

OPERATE
→ environments
→ credentials
→ usage / health where authorized
→ changelog / deprecations
→ receipts / troubleshooting where authorized
```

These are information architecture concepts, not required menu labels.

## 8.1 Documentation

Documentation should make it easy to move among:

- concept;
- task guide;
- reference;
- working example;
- error explanation;
- proof semantics.

## 8.2 Quickstart

A quickstart should optimize for first legitimate useful value.

It should not teach every internal layer before the first call.

For any Application actually released to developers, the quickstart SHOULD provide, where the operative contract supports them:

```text
1 representative input
1 runnable invocation
1 meaningful success result
1 representative failure/recovery case
1 material semantic limitation
1 proof / Receipt reference example where applicable
1 clear next step toward continued integration
```

The quickstart is an Application binding of this archetype. The exact capability, endpoint, payload, and proof schema are not created by this profile.

## 8.3 Sandbox

Where a sandbox exists, it should support realistic integration work rather than functioning only as a decorative demo.

Useful capabilities may include:

- stable representative data;
- deterministic examples where the underlying capability guarantees determinism;
- documented failure cases;
- safe replay where supported;
- CI-suitable test behavior where security policy permits.

These are product targets, not constitutional guarantees created by this profile.

The sandbox access model MAY be accountless, lightweight-authenticated, organization-bound, or another governed model. Whatever model is chosen SHOULD minimize friction until the developer requests persistence, custom resources, consequential state, protected data, organization scope, or another legitimate reason for stronger authentication/relationship context.

The implementation authority SHALL document that threshold explicitly rather than allowing signup friction to emerge accidentally.

## 8.4 Developer Console

A console may provide:

- request construction;
- request/response inspection;
- generated snippets;
- environment selection;
- credential administration;
- Receipt links;
- history;
- usage diagnostics.

The console should not become a second semantic implementation of the API.

## 8.5 Production Readiness & Governed Handoff

Where production requires prerequisites beyond the Developer's current Authority, the developer surface SHOULD expose a readiness view equivalent in meaning to:

```text
READY
MISSING
REQUIRES OTHER AUTHORIZED SUBJECT
BLOCKED / NOT YET ELIGIBLE
```

The developer should not have to discover missing prerequisites by repeatedly failing production calls.

Where an Organization Admin or other authorized Subject must act, the developer SHOULD be able to initiate a governed handoff that preserves:

- the organization/client;
- the Application/integration;
- the requested production capability;
- the prerequisite requiring approval/configuration;
- enough non-sensitive evidence of sandbox readiness to make the decision intelligible.

The handoff MAY be implemented through a deep link, request workflow, task, notification, approval artifact, or another governed mechanism. This profile does not mandate the transport.

## 8.6 Minimum Viable Developer Experience Binding

A first production developer release SHOULD NOT be declared experience-complete merely because an API endpoint exists.

At minimum, the released Application should bind this profile to:

1. a public capability explanation;
2. a runnable quickstart;
3. a sandbox/test path;
4. one meaningful first-value result;
5. one actionable error/recovery example;
6. a documented production activation path;
7. a developer-safe proof/Receipt inspection path where supported;
8. a current operational/security reference for credentials and environment handling.

Distribution channels, pricing, acquisition campaigns, and commercial targets remain outside ZyUX.

---

# 9. Explanation / Evidence / Trust / Receipt Depth

The Developer profile ordinarily requires deeper semantic explanation than a consumer-facing profile.

The default stack is:

```text
STRUCTURED ANSWER
↓
SEMANTIC MEANING
↓
MATERIAL LIMITATION / UNCERTAINTY
↓
RECOVERY OR NEXT STEP
↓
BASIS / PROVENANCE REFERENCES
↓
RECEIPT / DEEP PROOF WHERE AUTHORIZED
```

## 9.1 Developer Response Comprehension

A developer should be able to determine from the contract/documentation:

- what the response establishes;
- which fields are observation, Evidence, Trust, policy, decision, or execution projections where relevant;
- whether a result is current, historical, cached, or degraded where material;
- whether a Receipt records decision, execution, or another governed process;
- what must not be inferred.

## 9.2 Trust

Trust labels and semantics are imported from the governing Trust authority.

SDK helpers, documentation, examples, and generated types must not invent stronger synonyms such as:

```text
authentic
safe
genuine
approved
compliant
```

unless the governed capability actually establishes that precise conclusion.

## 9.3 Evidence

Evidence references should remain distinguishable from Evidence verification or Trust.

A count of Evidence items must not be presented as a count of verified truths.

## 9.4 Receipt

A Receipt reference should help the developer understand that Unfict can expose accountable process/proof where the capability supports it.

It must not be marketed or documented as magical proof that every physical-world claim occurred.

This inherits `ZyUX-004-S08`.

## 9.5 Local Proof Before Forced Context Switching

Common debugging/proof questions SHOULD be answerable in the developer's current surface where practical.

A developer should be able to inspect at least the locally appropriate summary of:

```text
request / correlation reference
result
material limitation / uncertainty
Receipt/proof reference
next inspection path
```

without being forced into a separate console merely because deeper proof exists.

Where the developer opens a deeper Unfict proof surface, the transition SHOULD preserve the initiating request/Receipt context. The exact CLI command, SDK helper, IDE integration, or authentication transport remains implementation-owned.

---

# 10. Host-Native Model

For Developers, “Host-Native” has two forms.

## 10.1 Developer-Environment Native

The Job may occur in:

- IDE;
- terminal;
- CI/CD;
- application code;
- SDK;
- API client;
- MCP-capable development environment.

Unfict should meet the developer in those environments where doing so materially reduces workflow displacement.

Developer-facing tools SHOULD respect the host environment's established interaction conventions where this does not weaken Unfict identity, accessibility, security, or semantic meaning. This includes reasonable light/dark presentation parity in IDEs, terminals, consoles, and embedded developer surfaces where the host supports it.

Brand identity remains governed by `BRAND-001 v3.0`; Host-Native presentation is adaptation, not brand redefinition.

## 10.2 Customer-System Integration

The developer may be integrating Unfict into:

- ERP;
- PIM;
- PLM;
- WMS;
- commerce platform;
- custom application;
- agent environment.

Host context may supply legitimate input.

It does not grant Authority or become canonical truth.

## 10.3 Escape to Deeper Unfict Surface

A developer may leave the host/editor to access:

- detailed proof;
- organization management;
- credential administration;
- source mapping;
- security configuration;
- audit history.

The transition should preserve the initiating context where possible.

A deeper surface SHOULD land on the exact object/request/Receipt/admin prerequisite that caused the transition rather than a generic dashboard. Authentication SHOULD preserve that deep intent.

---

# 11. Lifecycle / Offboarding / Historical Model

Developer participation changes over time.

## 11.1 Relationship Start

A Subject may begin as:

```text
anonymous documentation reader
→ sandbox developer
→ organization developer
→ production integrator
```

No new Subject is created by moving through these states.

## 11.2 Credential Rotation

Credential rotation should be treated as ordinary access lifecycle.

It must not rewrite Subject attribution or unrelated relationships.

## 11.3 Organization Departure

When a developer leaves Company A:

- Company A credentials/access may be revoked;
- future Company A production capability may end;
- historical integration actions remain attributable as governed;
- unrelated personal or Company B contexts remain unaffected.

## 11.4 Handover

An integration should not depend on one individual's permanent access.

Where an organization legitimately owns/operates the integration, offboarding should support governed transfer of operational responsibility without transferring the departing Subject's personal identity or unrelated access.

## 11.5 Agency Client End

Ending Client A access must not affect Client B or Client C.

## 11.6 Deprecated Capability / Version

Technical version lifecycle should be visible enough for developers to migrate safely.

The exact compatibility/deprecation policy belongs to the operative interface authority, not this profile.

## 11.7 Historical Debugging

Where supported and authorized, developers may need to inspect:

```text
request at time T
contract/version at time T
result at time T
Receipt/proof at time T
```

Current API behavior must not be silently substituted for historical behavior during reconstruction.

---

# 12. Primary Journeys

## Journey 1 — Public Discovery → First Useful Sandbox Result

```text
Search / link / recommendation
↓
Public capability page
↓
Understand Job in domain language
↓
Copy runnable example
↓
Authenticate only if sandbox requires it
↓
Receive sandbox credential / context
↓
Invoke real governed sandbox capability
↓
See structured answer + first-value explanation
(target/context/result/limitation)
↓
Inspect Receipt/proof reference where supported
↓
Next legitimate integration step
```

Success means the developer understands both **how to call** the capability and **what the result means**.

---

## Journey 2 — API Reference → SDK Integration

```text
Open API operation
↓
See exact request / response contract
↓
Choose SDK
↓
Install
↓
Equivalent typed operation discovered naturally
↓
Invoke
↓
Receive semantically equivalent result
```

The SDK may improve ergonomics.

It must not strengthen or reinterpret semantics.

---

## Journey 3 — Sandbox → Production

```text
Working sandbox integration
↓
Production readiness view
↓
Current organization / client explicit
↓
Satisfied vs missing prerequisites explained
↓
Developer completes prerequisites within own Authority
↓
If another authorized Subject is required:
initiate governed handoff with integration context preserved
↓
Admin / owner action completes externally governed gate
↓
Return to same production activation context
↓
Create / receive production credential under operative security contract
↓
Production environment visibly distinct
↓
First production invocation
↓
Receipt / operational references available where supported
```

No silent promotion from sandbox to production.

The UX SHOULD preserve momentum by making the production gate intelligible before it becomes a blocking surprise.
---

## Journey 4 — Error → Recovery

```text
Invocation fails
↓
Structured failure received
↓
Developer-facing translation explains what failed
↓
Underlying failure class remains inspectable
↓
Next legitimate action presented where one exists
↓
Retry only if legitimate
↓
Resolved or escalated
```

Example distinctions:

```text
bad input
≠ authentication failure
≠ authorization denial
≠ Evidence unavailable
≠ Trust uncertain
≠ policy hold
≠ host write failure
≠ service outage
```

---

## Journey 5 — Result → Explanation / Proof

```text
Developer receives result
↓
Needs to explain it to application/team/customer
↓
Reads semantic meaning
↓
Inspects local proof summary in current surface where practical
↓
Inspects material Evidence/provenance if authorized
↓
Follows deep Receipt reference only when needed
↓
Context is preserved
↓
Understands what process the Receipt proves
```

---

## Journey 6 — Agency Developer Switches Client

```text
Developer working for Client A
↓
Switches to Client B
↓
Client B context becomes explicit
↓
Client A secrets/resources disappear
↓
Developer performs Client B work
↓
Historical Client A actions remain attributable but inaccessible unless current scope permits
```

---

## Journey 7 — Developer Leaves Organization

```text
Company relationship ends
↓
Production credentials / organization access revoked
↓
Active sessions constrained as governed
↓
Historical actions retained
↓
Developer retains unrelated contexts
↓
Organization retains integration continuity through other authorized Subjects
```

---

## Journey 8 — REST / SDK / MCP Parity Check

```text
Same governed capability
+
Equivalent legitimate semantic context
↓
REST
SDK
MCP
↓
Different syntax permitted
↓
Same governed meaning
same Trust semantics
same authorization
same failure semantics
same Receipt discipline
```

---

# 13. Failure / Uncertainty / Recovery States

Developer-facing failures should preserve layer boundaries.

## 13.1 Input / Contract Failure

Examples:

- malformed input;
- missing required semantic context;
- unsupported version;
- invalid enum/shape.

The developer needs precise correction guidance.

## 13.2 Authentication Failure

Examples:

- missing credential;
- invalid credential;
- expired credential;
- revoked credential.

This must not be described as an Authority denial if authentication itself failed.

## 13.3 Authorization / Scope Failure

The Subject is known, but the requested operation is not permitted in the current scope.

Explanation remains disclosure-bounded.

## 13.4 Epistemic / Evidence State

Examples:

- Evidence unavailable;
- Evidence conflicting;
- upstream source unavailable;
- result uncertain.

These are not generic system failures.

## 13.5 Policy / State Block

The capability may be disclosed but blocked by current state or policy.

This should remain distinguishable from non-disclosure.

## 13.6 Execution / Host Failure

Example:

```text
Unfict decision recorded
external host write failed
```

Do not report host mutation as successful merely because the governed decision succeeded.

## 13.7 Service Failure

Infrastructure outage should not become a negative semantic conclusion.

## 13.8 Recovery

Recovery guidance should be specific enough to tell the developer whether to:

```text
fix input
reauthenticate
request access
supply Evidence
wait for state change
retry safely
inspect status
escalate to organization admin
contact support
```

where those paths legitimately exist.

## 13.9 Developer Error Translation

The underlying system may preserve precise constitutional failure classes. The public developer experience SHOULD translate them into ordinary task language without erasing the underlying distinction.

A useful developer-facing error representation should answer, where disclosure permits:

```text
stable machine-readable code
what failed
why it matters
retryability
next legitimate action
deeper reference / correlation ID
```

Illustrative translation:

| Underlying class | Developer-facing meaning | Example next action |
|---|---|---|
| Input / contract | Request is invalid or incomplete | Correct input |
| Authentication | Credential cannot establish access context | Reauthenticate / rotate as permitted |
| Authorization / scope | Current context cannot perform this operation | Switch legitimate scope / request access if lawful |
| Evidence / uncertainty | Unfict cannot establish the requested conclusion from available evidence | Inspect basis / retry source / provide evidence where permitted |
| Policy / state | Operation is currently blocked by a governed condition | Inspect condition / request exception only if such path exists |
| Host / execution | Unfict result and external-system effect diverged | Inspect host failure / retry only if safe |
| Service | Infrastructure unavailable | Retry/status path; do not reinterpret as domain result |

Exact public error codes and payload schemas belong to the operative interface contract.

---

# 14. Accessibility / Localization

Developer experience accessibility is not limited to visual UI.

## 14.1 Documentation Accessibility

Documentation should support:

- semantic heading structure;
- keyboard navigation;
- copyable code;
- non-color-dependent status;
- readable tables;
- accessible error explanations;
- machine-readable schemas.

## 14.2 Code Examples

Syntax highlighting must not be the only carrier of meaning.

## 14.3 Localization

Translated developer documentation must preserve:

- error semantics;
- Trust semantics;
- uncertainty;
- Authority/Standing distinctions;
- Receipt meaning.

Technical tokens, field names, and code must not be translated when doing so would break the contract.

## 14.4 Time / Date

Machine contracts should follow the operative technical standard.

Human-facing developer tooling should make time zone/valid-time distinctions understandable where material.

---

# 15. Security / Privacy Review Points

The Developer profile requires explicit review of:

- API credential leakage;
- one-time secret display;
- secret recovery vs rotation;
- sandbox/production confusion;
- client/tenant leakage;
- overly broad scopes;
- support impersonation;
- shared developer accounts;
- CI secrets;
- logs containing protected data;
- example payloads containing real sensitive information;
- deep links to Receipts/proof;
- MCP/tool credential exposure;
- agent/tool confused-deputy risk;
- Host-Native write escalation;
- credential reassignment;
- stale sessions;
- environment-specific source connections;
- webhook/signing-secret handling where applicable;
- generated code accidentally embedding secrets.

A developer convenience feature SHALL NOT bypass applicable security doctrine.

Before production developer release, the operative Security/interface authority SHOULD make the developer security contract discoverable enough to answer:

- which credential types exist;
- what each credential authenticates;
- scope model;
- secret display/recovery/rotation behavior;
- machine-to-machine behavior where applicable;
- webhook/signature rules where applicable;
- agent/tool credential constraints where applicable;
- session/revocation expectations;
- tenant/client isolation expectations;
- audit/correlation references available to the developer.

This profile requires discoverability and usability of that contract. It does not define the cryptographic/authentication protocol itself.

---

# 16. Telemetry / Success Measures

Metrics are product evidence, not constitutional truth.

This profile defines **what should be measured** to understand developer experience. Product/Marketing authorities define changing numeric targets, funnel thresholds, CAC economics, revenue goals, and release objectives without requiring a ZyUX amendment.

Recommended measures include:

## 16.1 Discovery

- capability-page → quickstart conversion;
- documentation search success;
- failed search/no-result rate;
- time to locate correct capability.

## 16.2 First Value

- time to first successful sandbox result;
- quickstart completion;
- first-call error rate;
- percentage reaching a semantically understood result, not merely HTTP 200.

## 16.3 Integration Quality

- SDK/API parity failures;
- schema misuse rate;
- ambiguous error support tickets;
- repeated authorization mistakes;
- retry/idempotency incidents;
- sandbox-to-production completion.

## 16.4 Ongoing Operation

- production activation success;
- credential rotation success;
- deprecation migration completion;
- Receipt/proof drill-down rate;
- developer-caused scope leakage incidents;
- mean time to recover from integration failure.

## 16.5 Expansion Signals

Where relevant, Product may measure experience transitions such as:

- individual developer → organization context;
- sandbox → production;
- one Application → additional authorized Applications;
- one developer → team handoff;
- one client → multi-client Agency workflow;
- API-only → additional authorized SDK/MCP/Host-Native surface;
- operational use → deeper proof/audit use.

These are **experience signals**, not automatic pricing or revenue rules.

## 16.6 Candidate Product Targets From Existing Strategic Drafts

The existing API/SDK Blueprint proposes targets such as:

```text
first successful sandbox call < 5 minutes
first production call < 1 day
SDK coverage = 100% of exposed API surface
0 breaking changes within a major version
deprecation notice target ≥ 12 months
```

These remain **strategic product targets**, not ratified ZyUX law, until separately adopted by the appropriate product/interface authority.

---

# 17. Acceptance Invariants

A conforming Developer experience should eventually prove the following.

### DEV-AX-01 — Public Understanding Does Not Require Account

A developer can understand a public capability before authenticating where disclosure permits.

### DEV-AX-02 — First Use Preserves Intent

Authentication or organization selection does not discard the initiating documentation/capability context.

### DEV-AX-03 — Sandbox Is Not Production Authority

Sandbox success never implies production authorization.

### DEV-AX-04 — Environment Is Legible

The developer can distinguish documentation/test/sandbox/production where those states exist.

### DEV-AX-05 — Relationship Does Not Grant Permission

Employment, membership, client association, or developer archetype does not by itself authorize production actions.

### DEV-AX-06 — Client Isolation Holds

A multi-client developer cannot discover Client A secrets/resources while acting in Client B scope.

### DEV-AX-07 — Interface Parity Holds

REST, SDK, MCP, and applicable Host-Native projections preserve the same governed result meaning.

### DEV-AX-08 — SDK Does Not Invent Semantics

Convenience wrappers cannot strengthen Trust, verification, authorization, or Receipt meaning.

### DEV-AX-09 — Error Classes Remain Distinct

Input, authn, authz, epistemic, policy/state, execution/host, and infrastructure failures are not collapsed when the underlying system distinguishes them.

### DEV-AX-10 — Uncertainty Survives Projection

Developer tooling does not convert uncertain/conflicting/unavailable states into definitive claims.

### DEV-AX-11 — Receipt Meaning Is Scoped

A developer cannot reasonably interpret a Receipt as universal proof of physical-world truth merely because the interface exposes it.

### DEV-AX-12 — Credentials Are Bounded

Credential creation/rotation/revocation affects only legitimate access scope and does not rewrite Subject history.

### DEV-AX-13 — Production Context Is Explicit

Consequential production administration or execution does not silently occur in a context that appeared to be sandbox/test.

### DEV-AX-14 — Host Context Is Non-Sovereign

A connected ERP/PIM/WMS/commerce system cannot create Unfict Authority or semantic truth merely by supplying a field.

### DEV-AX-15 — Offboarding Preserves History

Organization access can end without deleting historical attributable developer actions.

### DEV-AX-16 — Developer Profile Is Not an Admin Role

A developer does not automatically receive organization administration capability.

### DEV-AX-17 — Documentation Cannot Override Contract

Examples/prose cannot silently redefine the operative API/SDK/MCP contract.

### DEV-AX-18 — Capability Discovery Does Not Grant Invocation

Knowing a capability exists does not imply the developer may invoke it.

### DEV-AX-19 — Internal Explicitness Does Not Become Constant Cognitive Load

Context required for correctness remains available, but the primary surface exposes only what is materially relevant to the current decision.

### DEV-AX-20 — Production Gate Is Explainable Before Failure

A working sandbox integration can determine the legitimate prerequisites for production without learning them only through repeated failed production attempts.

### DEV-AX-21 — Governed Handoff Preserves Integration Context

When production activation requires another authorized Subject, the handoff preserves the Application/integration and requested prerequisite rather than sending both parties to a generic administrative surface.

### DEV-AX-22 — Public Errors Are Actionable Without Constitutional Fluency

A developer can understand the practical failure and next legitimate action without first learning Unfict's internal constitutional vocabulary, while the underlying semantic distinction remains inspectable.

### DEV-AX-23 — Common Proof Inspection Does Not Require Unnecessary Context Switching

Where technically and legally possible, common request/result/proof debugging information is inspectable in the developer's current surface; deeper transitions preserve exact context.

### DEV-AX-24 — First Value Demonstrates Capability Meaning

The first successful integration result demonstrates useful Application meaning and a material boundary/limitation rather than only transport success.

---

# 18. Canonical UX Test Vectors

The following vectors should be prototyped and tested.

1. Anonymous developer lands on capability documentation.
2. Developer understands capability without account.
3. Developer copies first runnable example.
4. Sandbox authentication preserves the original quickstart.
5. First sandbox request succeeds.
6. First sandbox request fails with malformed input.
7. Developer deliberately tests an authorization error.
8. Developer deliberately tests an upstream-unavailable state.
9. Developer understands `unknown`/`unavailable` is not `false`.
10. Developer follows a Receipt reference.
11. Developer compares REST and TypeScript SDK result meaning.
12. Developer compares REST and MCP result meaning.
13. Developer attempts an SDK helper that could overstate Trust; test rejects semantic strengthening.
14. Developer moves from sandbox to production.
15. Production activation requires organization selection.
16. Developer belongs to two organizations and chooses correct scope.
17. Agency developer switches Client A → Client B.
18. Client A secret is non-disclosable in Client B context.
19. Production credential is created with appropriate scope.
20. Credential is rotated without deleting historical attribution.
21. Credential is revoked mid-session.
22. Developer opens old Receipt after credential rotation.
23. Developer loses Company A relationship but retains personal/Company B contexts.
24. Organization integration remains operable through another authorized Subject.
25. Host adapter provides context that conflicts with Unfict Evidence; conflict remains visible.
26. Host write fails after Unfict decision succeeds.
27. Service outage is not shown as Trust failure.
28. Deprecated operation points to migration guidance.
29. Historical request is reconstructed under its historical version/context.
30. Developer arrives from error docs after authentication and returns to same error page.
31. Search for hidden organization capability leaks no existence signal.
32. Disclosable capability is blocked-by-state and shown as such.
33. Disclosable production capability is requestable where a lawful request path exists.
34. Capability is disclosable but unavailable with no request path.
35. Developer uses AI coding assistant but assistant receives no hidden production credential.
36. Autonomous agent invokes capability under separate Agent profile constraints.
37. Developer uses Host-Native extension and deep-links to proof without losing object context.
38. Mobile developer docs remain usable without losing semantic warnings.
39. Localized docs preserve Trust/error meaning.
40. API documentation example is tested against the current contract and does not drift.
41. Primary surface shows only active decision-relevant context; deeper anchors remain inspectable.
42. A passive context anchor becomes prominent when an impending action would be dangerous under the wrong scope.
43. Developer reaches production-readiness view before first production failure.
44. Missing Org Admin prerequisite can be handed off without losing Application/integration context.
45. Admin completion returns developer to the same production activation state.
46. Developer-facing Evidence/Policy/AuthZ failure is understandable without raw constitutional jargon.
47. Error exposes a next legitimate action without exposing a path the Subject is not allowed to know exists.
48. Developer inspects a Receipt/proof summary from CLI/SDK/IDE/console surface where supported before opening deeper proof.
49. Deep proof transition preserves exact Receipt/request context through authentication.
50. First sandbox success presents useful Application meaning, material limitation, and proof reference rather than only `200 OK`.
51. Developer tooling follows host light/dark presentation conventions without weakening Unfict identity/accessibility semantics.
52. Developer archetype + first Application Profile produce a concrete quickstart without adding Application-specific semantics back into this archetype.

---

# 19. Drift Prohibitions

`ZyUX-DEVELOPER-001` SHALL NOT drift into:

- Developer = constitutional Role;
- developer account = Subject;
- API key = Authority;
- capability discovery = permission;
- sandbox access = production authorization;
- SDK helper = new semantic owner;
- MCP = stronger or weaker meaning;
- OpenAPI = constitutional ontology;
- API namespace = Domain ontology;
- one developer = one organization;
- one organization = one developer account;
- one client context leaking into another;
- developer console = universal admin console;
- Receipt = physical truth;
- Trust score = safety/compliance/authenticity unless governed;
- host field = canonical truth;
- generic `500` where a governed distinct failure is known;
- hidden internal architecture dumped onto every developer;
- documentation prose overriding the operative contract;
- code sample creating an undocumented capability;
- generated SDK inventing new behavior;
- technical convenience bypassing Authority, Standing, Policy, Evidence, Trust, Security, or Receipt law;
- compulsory understanding of Unfict constitutional internals before first legitimate value;
- raw constitutional jargon used as the only developer-facing recovery explanation;
- production prerequisites discoverable only through failed production attempts;
- every context anchor displayed continuously merely because the system tracks it;
- developer-to-admin handoff that discards the integration/request context;
- forced browser/console context switch for every common proof/debug question;
- archetype profile absorbing SEO, CAC, pricing, partner economics, or channel strategy;
- archetype profile inventing the first Application/capability instead of consuming an Application Profile and operative contract;
- automatic technical rename from Zyppi identifiers to Unfict merely for branding.

---

# 20. External Implementation Dependencies / Decisions

These decisions must be made by the proper Product, Application, Security, Interface, Marketing, or operational authority. They do **not** prevent the Developer archetype from being coherent; they determine how it is instantiated in a particular release.

## 20.1 First Application Binding

The first market-facing implementation must identify:

- the exact Application Profile;
- the first public capability;
- the operative request/response contract;
- the first-value result;
- its material limitation/boundary.

The likely current candidate is the GS1 Resolution wedge, but this profile does not ratify that choice.

## 20.2 First Surface Set

Product/interface authority must choose which of REST, SDKs, MCP, interactive console, CLI, or other surfaces ship together. Semantic parity requirements apply only to surfaces that actually represent the same capability.

## 20.3 Sandbox Access Model

Product/Security must choose the authentication/persistence boundary for the initial sandbox and document when stronger identity, organization, or credential context becomes necessary.

## 20.4 Production Security Contract

Security/interface authorities must define the operative credential model, scope model, rotation/revocation, machine-to-machine behavior, agent constraints, signing/webhook rules where applicable, and audit/correlation behavior.

## 20.5 Production Activation / Commercial Gate

Product/Org Admin/Commercial authorities must define which prerequisites exist and who can satisfy them. Developer UX must expose them through the readiness/handoff model in this profile.

## 20.6 Public Error Contract

The operative interface authority must define stable machine-readable errors, retryability, and correlation behavior for the first Application. Developer UX supplies the translation/recovery requirements, not the wire schema.

## 20.7 Minimum Proof Surface

The first Application/interface authority must state what proof actually exists and can be inspected:

- Receipt/reference;
- provenance;
- evidence references;
- historical/replay support;
- export/verification behavior.

ZyUX does not invent proof the capability does not produce.

## 20.8 Support / Operational Surface

Product must define status/support/escalation surfaces appropriate to launch maturity. A community forum is not assumed.

## 20.9 Developer Adoption Targets

Product/Marketing may set targets such as time-to-first-value, quickstart completion, sandbox→production conversion, retention, or developer-originated expansion. Numeric targets remain outside this profile.

## 20.10 Agent Timing

MCP/agent parity may be tested early where authorized. A full `ZyUX-AGENT-001` implementation should remain evidence-gated and should not delay proof of the core human Developer/Application experience unless the current wedge materially depends on agent use.
---

# 21. Cross-Profile Dependencies

## 21.1 Organization Admin

`ZyUX-ORG-ADMIN-001` should own experience for:

- organization bootstrap;
- enterprise SSO configuration;
- production credential policy;
- organization-wide source connections;
- delegation administration;
- administrative recovery.

Developer should deep-link into those Jobs rather than absorbing them.

## 21.2 Agency

`ZyUX-AGENCY-001` should own:

- multi-client relationship model;
- client switching;
- agency-level delegated scope;
- cross-client isolation;
- client onboarding/handoff patterns;
- partner implementation continuity.

Developer specializes how development work occurs inside that relationship.

Because integrators, GS1/DPP specialists, implementation partners, and agencies may become an important distribution multiplier, Agency is an **early profile dependency** rather than merely a distant administrative edge case.

## 21.3 Agent

`ZyUX-AGENT-001` should own autonomous software participation:

- machine-readable capability discovery;
- principal/delegation constraints;
- agent-specific error/recovery semantics;
- tool invocation.

Developer owns building/integrating that surface.

MCP/tooling may be exposed earlier under operative interface/security contracts without requiring a full Agent archetype implementation. Agent-specific product investment remains evidence-gated.

## 21.4 Operator

`ZyUX-OPERATOR-001` should own repeated operational execution once the integration exists.

Developer owns building/debugging the integration, not ordinary frontline use.

## 21.5 Auditor / Compliance

Developer may inspect proof for integration/debugging.

That does not grant the deeper organizational Evidence/Policy/Audit entitlement of Compliance or Auditor archetypes.

## 21.6 Application Profiles

Application profiles such as GS1 Resolution or DPP define application-specific developer journeys by composition:

```text
ZyUX-DEVELOPER-001
+
ZyUX-APP-<APPLICATION>-001
+
OPERATIVE INTERFACE CONTRACT
=
concrete application-specific developer experience
```

For a market-facing developer release, at least one Application Profile SHOULD exist early enough to define the actual first-value journey.

Do not fork Developer into one archetype per application.

---

# 22. Ratification / Review Gate

Before `ZyUX-DEVELOPER-001` can be proposed for ratification, review must prove:

- [ ] no new constitutional semantics are introduced;
- [ ] no account/API-key/relationship is treated as Authority;
- [ ] Subject continuity follows `ZyUX-001`;
- [ ] organization/client scope follows `ZyUX-002`;
- [ ] disclosure and invocation remain separate under `ZyUX-003`;
- [ ] Trust/Evidence/Receipt explanation follows `ZyUX-004`;
- [ ] Host-Native behavior follows `ZyUX-005`;
- [ ] credential/offboarding/history follows `ZyUX-006`;
- [ ] REST/SDK/MCP semantic parity is preserved;
- [ ] the profile does not prescribe API endpoints not separately authorized;
- [ ] strategic API/SDK Blueprint targets remain non-normative unless separately adopted;
- [ ] current Unfict brand is used while historical/technical Zyppi identifiers remain protected by `ZUSD-001`;
- [ ] the 52 canonical UX vectors can be mapped to testable product behavior;
- [ ] progressive context disclosure prevents explicit-context doctrine from becoming permanent UI clutter;
- [ ] production-readiness/handoff preserves sandbox integration momentum without bypassing Authority;
- [ ] developer-facing errors are actionable without requiring constitutional fluency;
- [ ] common proof/debug inspection minimizes unnecessary surface switching;
- [ ] first-value experience proves useful Application meaning rather than only transport success;
- [ ] environment-native presentation can adapt to developer tooling without redefining the Unfict brand;
- [ ] archetype remains separate from acquisition channels, pricing, CAC, and commercial GTM doctrine;
- [ ] first production release is bound to at least one Application Profile + operative interface/security/proof contract;
- [ ] Developer / Org Admin / Agency / Agent boundaries are clean;
- [ ] no hidden master developer/admin role appears;
- [ ] no documentation or SDK helper strengthens governed meaning.

Recommended review sequence:

```text
Chair review
↓
ZyUX foundation conformance review
↓
ZYAPI / operative-contract reconciliation
↓
Security / credential review
↓
Developer usability prototype
↓
Canonical journey testing
↓
Ratification candidate revision
```

---

# 23. Scoped Developer Profile Specializations

These specializations apply only to the Developer archetype and derive from the ratified ZyUX foundation.

## ZyUX-DEVELOPER-S01 — Learn Before Login

**Derives from:** `ZyUX-L03`, `ZyUX-L13`, `ZyUX-001-S09`

> **Publicly disclosable developer capability information SHOULD be understandable before authentication. Authentication SHALL be introduced only when a legitimate access, persistence, security, or organization requirement begins.**

---

## ZyUX-DEVELOPER-S02 — First Useful Result Before Architecture Tutorial

**Derives from:** `ZyUX-L01`, `ZyUX-L05`

> **The developer SHOULD be able to reach the first legitimate useful result without first learning Unfict's internal constitutional architecture. Deeper meaning and proof SHALL remain progressively inspectable.**

---

## ZyUX-DEVELOPER-S03 — Contract Teaches Meaning

**Derives from:** `ZyUX-L05`, `ZyUX-004-S02`, `ZyUX-L12`

> **Developer-facing schemas, field names, examples, SDK types, tool descriptions, and errors SHALL preserve the governed semantic boundary of the capability and SHALL NOT rely on undocumented inference to establish meaning.**

---

## ZyUX-DEVELOPER-S04 — Sandbox Is Explicitly Non-Production

**Derives from:** `ZyUX-L02`, `ZyUX-003-S04`, `ZyUX-006-S02`

> **A sandbox/test experience SHALL remain visibly distinct from production wherever confusing the two could create consequential action. Sandbox success SHALL NOT imply production Authority, Standing, commercial activation, or source connectivity.**

---

## ZyUX-DEVELOPER-S05 — Interface Ergonomics May Vary; Semantics May Not

**Derives from:** `ZyUX-L12`, `ZyUX-003-S16`, `ZyUX-005-S02`

> **REST, SDK, MCP, and applicable Host-Native developer surfaces MAY use interface-native syntax and ergonomics, but SHALL preserve the same governed capability meaning, authorization boundary, Trust semantics, failure semantics, and Receipt discipline.**

---

## ZyUX-DEVELOPER-S06 — Developer Context Is Explicit Before Consequence

**Derives from:** `ZyUX-L04`, `ZyUX-003-S07`, `ZyUX-003-S08`

> **Before consequential production action or administration, the current environment, organization/client scope, and acting capacity SHALL be understandable where ambiguity could change consequence.**

---

## ZyUX-DEVELOPER-S07 — Errors Preserve Layer Boundaries

**Derives from:** `ZyUX-001-S16`, `ZyUX-004-S02`, `ZyUX-005-S13`

> **Developer-facing failure experience SHALL preserve material distinctions among contract/input, authentication, authorization/scope, epistemic/Evidence, policy/state, execution/host, and infrastructure failure whenever the underlying governed system distinguishes them.**

---

## ZyUX-DEVELOPER-S08 — Capability Discovery Is Not Invocation Authority

**Derives from:** `ZyUX-L02`, `ZyUX-003-S02`, `ZyUX-003-S04`

> **Documentation, autocomplete, OpenAPI discovery, MCP/tool discovery, or capability metadata SHALL NOT by themselves establish permission to invoke the capability.**

---

## ZyUX-DEVELOPER-S09 — SDK and Tooling Are Non-Sovereign

**Derives from:** `ZyUX-L12`, `ZyUX-005-S02`

> **An SDK, code generator, developer console, CLI, MCP schema, or Host Adapter SHALL NOT become an independent owner of business, epistemic, Trust, authorization, or Receipt semantics.**

---

## ZyUX-DEVELOPER-S10 — Multi-Client Scope Is Isolated

**Derives from:** `ZyUX-L06`, `ZyUX-L07`, `ZyUX-002-S13`

> **A developer acting across multiple organizations or clients SHALL receive only the data, credentials, capabilities, and proof legitimately available in the current client scope. One client relationship SHALL NOT make another discoverable.**

---

## ZyUX-DEVELOPER-S11 — Credential Lifecycle Does Not Rewrite Subject History

**Derives from:** `ZyUX-L09`, `ZyUX-001-S02`, `ZyUX-006-S01`

> **Credential creation, rotation, expiry, or revocation SHALL change legitimate access as governed without rewriting the Subject or historical attribution.**

---

## ZyUX-DEVELOPER-S12 — Proof Is Available at the Appropriate Depth

**Derives from:** `ZyUX-L05`, `ZyUX-004-S01`, `ZyUX-004-S08`, `ZyUX-004-S12`

> **A developer SHOULD be able to move from structured answer to semantic meaning, material limitation, recovery, provenance, and Receipt/proof where the capability supports it and disclosure permits.**

---

## ZyUX-DEVELOPER-S13 — Internal Explicitness Does Not Become External Cognitive Burden

**Derives from:** `ZyUX-L01`, `ZyUX-L04`, `ZyUX-003-S01`, `ZyUX-003-S07`

> **All context required for correctness SHALL remain explicit to the governed system, but the primary developer surface SHOULD continuously expose only the context materially relevant to the current Job or imminent consequence. Deeper anchors SHALL remain inspectable.**

---

## ZyUX-DEVELOPER-S14 — Production Readiness Is Explainable Before Promotion

**Derives from:** `ZyUX-L02`, `ZyUX-L05`, `ZyUX-003-S03`, `ZyUX-006-S02`

> **A developer moving from sandbox/test toward production SHOULD be able to understand satisfied, missing, externally owned, and blocked prerequisites before consequential production failure. No readiness indicator creates Authority or waives a required gate.**

---

## ZyUX-DEVELOPER-S15 — Cross-Archetype Handoff Preserves Job Context

**Derives from:** `ZyUX-L04`, `ZyUX-001-S11`, `ZyUX-003-S05`, `ZyUX-003-S06`

> **When a Developer Job requires an Organization Admin, Security owner, commercial owner, or other authorized Subject, the transition SHOULD preserve the initiating Application/integration and exact prerequisite rather than redirecting to a generic surface that requires rediscovery.**

---

## ZyUX-DEVELOPER-S16 — Developer Errors Translate Without Semantic Loss

**Derives from:** `ZyUX-L01`, `ZyUX-L05`, `ZyUX-004-S02`, `ZyUX-005-S13`

> **Developer-facing errors SHALL preserve material failure distinctions while expressing the immediate meaning, retryability, and next legitimate action in developer-understandable language. Internal constitutional vocabulary SHALL NOT be required merely to recover from an ordinary integration failure.**

---

## ZyUX-DEVELOPER-S17 — Common Proof Inspection Should Stay Near the Work

**Derives from:** `ZyUX-L11`, `ZyUX-L05`, `ZyUX-004-S01`, `ZyUX-005-S15`

> **Where technically and legally practical, common request/result/proof inspection SHOULD be available in the developer's current interface or environment. A transition to deeper proof SHALL preserve exact request/Receipt context.**

---

## ZyUX-DEVELOPER-S18 — First Value Must Demonstrate Application Meaning

**Derives from:** `ZyUX-L01`, `ZyUX-L05`, `ZyUX-L13`

> **The first successful developer journey SHOULD demonstrate useful Application meaning, material boundary, and legitimate next step—not merely transport success. The exact first capability remains owned by the applicable Application Profile and interface authority.**

---

# 24. Closing Doctrine

> **The developer should learn the capability before learning Unfict's internal architecture.**

> **The first success should be useful, not ceremonial.**

> **An SDK may feel native without becoming a new semantic system.**

> **A sandbox may be easy without pretending to be production.**

> **A developer credential may authenticate an access context according to the operative security contract. Possessing it does not manufacture Authority.**

> **Capability discovery teaches what exists. It does not grant the right to invoke it.**

> **Errors should reveal the layer that failed without leaking what the developer is not entitled to know.**

> **Internal explicitness must not become external cognitive burden.**

> **Production should be a governed transition, not a surprise wall.**

> **When another authorized Subject must act, preserve the developer's integration context through the handoff.**

> **Developers need structured answers, precise boundaries, predictable recovery, and proof—not constitutional jargon.**

> **A Developer archetype becomes concrete only when composed with an Application Profile and operative interface contract.**

> **One integration should remain maintainable when credentials rotate, people leave, clients change, and interfaces evolve.**

> **Canonical underneath. Native on top. Explicit in between.**

---

# 25. Status & Next Step

`ZyUX-DEVELOPER-001 v0.3` is **DOCTRINE-COMPLETE / PROTOTYPE-READY** but not yet usability-validated.

Current composition dependencies:

```text
ZyUX-PROFILES-000 v0.2
+
ZyUX-APP-GS1-RESOLUTION-001 v0.2
+
ZyUX-PUBLIC-OBSERVER-001 v0.1 (public counterpart)
```

The next Developer work product should be a concrete GS1 quickstart/proof prototype and representative usability observation, not another broad doctrine expansion.

Org Admin remains the next administrative dependency after the public GS1 experience is composed.

---

**End of `ZyUX-DEVELOPER-001 v0.3 — DRAFT FOR CHAIR REVIEW`**
