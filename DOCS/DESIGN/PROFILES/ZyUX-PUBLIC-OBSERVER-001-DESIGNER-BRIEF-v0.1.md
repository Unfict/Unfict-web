# ZyUX-PUBLIC-OBSERVER-001 — Designer Brief

**Derived From:** `ZyUX-PUBLIC-OBSERVER-001 v0.1`  
**Version:** 0.1  
**Status:** DESIGNER BRIEF — NON-NORMATIVE DERIVATIVE  
**Current Application:** `ZyUX-APP-GS1-RESOLUTION-001 v0.2`  
**Purpose:** Put the minimum Public Observer experience guidance beside the prototype/design file without requiring the designer to read the full doctrine during ordinary execution.

---

# 1. Who Is This Person?

A person who scanned/opened/followed a **public Unfict-enabled reference** and wants the useful answer now.

Assume they may have:

```text
no account
no prior Unfict knowledge
no organization context
no technical vocabulary
no intention to become a customer
```

Do not call them a `Public Observer` in the UI.

---

# 2. What Are They Trying to Do?

In order:

1. **What is this?**
2. **What can I know about it?**
3. **How certain is that?**
4. **What can I do next?**
5. **Why does Unfict say this?** — only if they ask.

---

# 3. What Must Be Visible Immediately?

The first view should make obvious:

```text
THE THING / RESULT
        +
THE IMPORTANT PUBLIC STATE
        +
ONE NEXT ACTION, IF ONE EXISTS
```

For GS1 Resolution, the Application Profile supplies the exact product/result fields.

---

# 4. Visible Complexity Budget

Default target:

```text
1 dominant answer
1 dominant next action
≤ 3 active context anchors
≤ 2 secondary immediate actions
proof / provenance / advanced detail collapsed
```

Do not turn the page into a product dashboard merely because more data exists.

---

# 5. What Must Stay Hidden by Default?

Do not default-display:

- organization/admin navigation;
- developer contract fields;
- raw policy output;
- internal Authority/Standing structures;
- Evidence graph dumps;
- Receipt schema;
- internal IDs with no user Job value;
- protected source counts;
- hidden capability hints;
- unrelated Unfict product navigation.

---

# 6. Core Interaction Pattern

```text
SCAN / OPEN
      ↓
ANSWER
      ↓
NEXT ACTION (if any)
      ↓
WHY?  → Meaning → Basis → Proof
```

The user should never need `Why?` to receive the answer itself.

---

# 7. Authentication Rule

Only ask for sign-in when the next Job legitimately requires it.

When sign-in is needed:

- explain why;
- preserve the exact product/reference/Job;
- return to that Job after authentication;
- do not imply authentication guarantees eligibility.

Bad:

```text
Scan → Sign in → Generic dashboard
```

Good:

```text
Scan → Register product → Sign in → Continue registering this product
```

---

# 8. Error Language

Never show raw constitutional jargon by default.

Keep these states distinct:

```text
invalid reference
unresolved
unverified / verification failed
information unavailable
conflicting / uncertain
service unavailable
```

Do not translate:

```text
unavailable → false
unverified → counterfeit
verified → safe / genuine / authorized
```

unless the application actually establishes the stronger conclusion.

---

# 9. Signature Experience Opportunities

## A. Immediate Orientation

The person should know within the first view:

- what they reached;
- what Unfict can actually say;
- what it cannot say;
- what they can do next.

## B. “Why?” Without Punishment

One explanation affordance should progressively reveal deeper basis/proof without dumping the user into an audit console.

## C. Seamless Continuation

If they move into Customer/Support/Register/Claim, it should feel like continuing the same Job.

---

# 10. Never Do This

- force signup to see legitimately public information;
- send a scan to the Unfict homepage instead of the result;
- infer ownership/customer status from a scan;
- reveal protected-data existence through disabled controls;
- use “verified” as a universal authenticity badge;
- make an outage look like product failure;
- show a general dashboard to an anonymous public visitor;
- lose product context during login;
- add cards/menus simply because backend fields exist;
- claim the UX is validated before usability evidence exists.

---

# 11. Prototype States Required

The first GS1 Public Observer prototype should include at least:

1. successful public resolution;
2. `Why?` / proof reveal;
3. invalid reference;
4. unresolved reference/product;
5. Evidence/information unavailable;
6. verification uncertainty/failure according to current contract;
7. service unavailable;
8. public → authenticated continuation;
9. protected/non-disclosable detail absent;
10. historical/stale result distinction if supported in prototype scope.

---

# 12. Validation Questions

Ask representative participants to complete the journey without coaching.

Observe whether they can answer:

- What did you just scan/open?
- What is Unfict telling you?
- How certain is that result?
- What is Unfict **not** claiming?
- What would you do next?
- Where would you look if you wanted to know why?
- If login appears, do you understand why?
- After login, do you still know what Job you were doing?

Do not ask whether they “like the design” as the primary evidence.

Test comprehension and flow.

---

**End of Public Observer Designer Brief v0.1**
