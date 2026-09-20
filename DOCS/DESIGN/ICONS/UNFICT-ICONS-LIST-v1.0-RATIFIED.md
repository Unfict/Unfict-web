# UNFICT-ICONS-LIST

## Master Icon Inventory & Semantic Registry

**Canonical ID:** `UNFICT-ICONS-LIST`  
**Version:** **1.0**  
**Status:** **RATIFIED — FINAL**  
**Classification:** Secondary Brand Construct · Design-System Registry  
**Normative Level:** Canonical Inventory / ID Registry  
**Date:** 21 September 2026  
**Effective Date:** 21 September 2026  
**Locking Authority:** Chair  
**Supersedes:** `UNFICT-ICONS-LIST` prior drafts and provisional inventories in full  
**Governing Brand Authority:** `BRAND-001 v3.0 — RATIFIED`  
**Governing Iconography Authority:** `UNFICT-ICONOGRAPHY-001 v1.0 — RATIFIED`  
**Coordinates With:** `UNFICT Universal Icon Illustration Design Instruction v1.0` · `UNFICT-ICON-IMPLEMENTATION-GUIDE-001` · `UNFICT-ICON-RUNTIME-CONTRACT-001` · Collection A–J Function blocks  
**Canonical Production Inventory:** **127 governed assets**  
**Nature:** This registry defines icon identity and vocabulary. Icon existence does not authorize product capability, navigation exposure, market claim, permission, or interface availability.

---

# 0. Ratification Statement

This document establishes the **canonical v1.0 Unfict icon inventory**.

Every row below is governed for identity, naming, collection placement, and semantic job.

The canonical runtime key is the `uf-icon-*` or `uf-motif-*` ID. Collection codes such as `B19` are human registry coordinates and MAY change only through a ratified inventory revision; product code SHOULD resolve icons by canonical ID/name rather than by collection ordinal.

The governing inventory principle is:

> **One semantic icon. One canonical ID. One governed geometry.**

---

# 1. v1.0 Reconciliation Decisions

Version 1.0 resolves the provisional inventory into one implementation baseline.

1. **Collections A–J are all part of the ratified master system.**
2. **Collection B is fixed at 27 assets.** It consolidates the earlier 23-icon functional set with the later Arrow Up, Arrow Down, User, and Notifications additions.
3. **Collection B numbering is reset and canonicalized in this document.** Existing canonical IDs remain stable.
4. **`uf-icon-notifications` and `uf-icon-notification` are distinct:**
   - `uf-icon-notifications` = UI destination/control for the notifications center or collection.
   - `uf-icon-notification` = an individual notification/event artifact within content/communication contexts.
5. **`uf-icon-user` and `uf-icon-subject` are distinct:**
   - `User` = generic UI/account participant.
   - `Subject` = governed Unfict domain identity concept.
6. All D–J entries previously marked **Proposed** are now **Governed** under this v1.0 ratification.
7. The exact per-icon Function blocks already produced for Collections A–J are incorporated by reference as the detailed semantic profiles for these IDs, subject to this registry and `UNFICT-ICONOGRAPHY-001 v1.0`.

---

# 2. Collection Summary

| Collection | Family | Count |
|---|---|---:|
| A | Brand Motifs | 6 |
| B | Functional UI | 27 |
| C | Domain & Concept | 24 |
| D | Navigation & Workspace | 10 |
| E | Content, Files & Communication | 11 |
| F | Developer, API & Data | 12 |
| G | GS1, Product Identity & Connected Product | 9 |
| H | Identity, Access & Governance Extensions | 10 |
| I | System, State & Temporal | 10 |
| J | Inspection, Visibility & Interaction | 8 |
| **Total** |  | **127** |

---

# 3. Canonical Inventory


## Collection A — Brand Motifs

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| A01 | Canonical Mark | `uf-motif-mark` | Canonical Unfict brand mark; official identity anchor, favicon and app-icon source. |
| A02 | Motif A | `uf-motif-a` | Leading/upper directional brand accent expressing emergence, initiation and forward movement. |
| A03 | Motif B | `uf-motif-b` | Trailing/lower directional brand accent expressing destination, continuation and counterbalance. |
| A04 | Paired Direction | `uf-motif-paired-direction` | Two distinct states or forms in one continuous directional relationship. |
| A05 | Route Accent | `uf-motif-route-accent` | Restrained branded path expressing directed continuity and progression. |
| A06 | Quiet Corner | `uf-motif-quiet-corner` | Partial Unfict-derived form entering or leaving a field as a quiet environmental brand accent. |


## Collection B — Functional UI

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| B01 | Menu | `uf-icon-menu` | Open primary, secondary or contextual navigation. |
| B02 | Close | `uf-icon-close` | Close or dismiss the current interface surface. |
| B03 | Search | `uf-icon-search` | Search content, values, identifiers, records, resources or documentation. |
| B04 | Chevron Right | `uf-icon-chevron-right` | Disclose a deeper hierarchy or move toward a nested level. |
| B05 | Chevron Down | `uf-icon-chevron-down` | Expand or reveal content below. |
| B06 | Arrow Right | `uf-icon-arrow-right` | Continue, proceed or navigate forward. |
| B07 | Arrow Left | `uf-icon-arrow-left` | Return, go back or navigate to the previous context. |
| B08 | Arrow Up | `uf-icon-arrow-up` | Move or navigate upward where the surrounding control defines vertical direction. |
| B09 | Arrow Down | `uf-icon-arrow-down` | Move or navigate downward where the surrounding control defines vertical direction. |
| B10 | Plus | `uf-icon-plus` | Add or create. |
| B11 | Minus | `uf-icon-minus` | Remove, decrease or collapse where context permits. |
| B12 | Edit | `uf-icon-edit` | Edit an existing object or value. |
| B13 | Delete | `uf-icon-delete` | Delete or destructively remove an object. |
| B14 | Copy | `uf-icon-copy` | Copy identifiers, URIs, code, values or content. |
| B15 | External Link | `uf-icon-external-link` | Open an external destination or context. |
| B16 | Settings | `uf-icon-settings` | Open configuration or preferences. |
| B17 | User | `uf-icon-user` | Represent a generic UI user/account participant; not the governed Subject concept. |
| B18 | Notifications | `uf-icon-notifications` | Open or identify the notifications center/collection as a UI destination. |
| B19 | Download | `uf-icon-download` | Download or export to the local environment. |
| B20 | Upload | `uf-icon-upload` | Upload or import from the local environment. |
| B21 | Refresh | `uf-icon-refresh` | Refresh, retry or reload the current state. |
| B22 | Filter | `uf-icon-filter` | Restrict the current collection by criteria. |
| B23 | Info | `uf-icon-info` | Provide informational or explanatory context. |
| B24 | Warning | `uf-icon-warning` | Communicate caution or an attention state without relying on color. |
| B25 | Success | `uf-icon-success` | Communicate successful completion or positive operational state. |
| B26 | Error | `uf-icon-error` | Communicate failure or a blocking operational condition. |
| B27 | More | `uf-icon-more` | Reveal additional contextual actions or overflow options. |


## Collection C — Domain & Concept

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| C01 | Product | `uf-icon-product` | Physical or digitally represented product/referent in a product context. |
| C02 | Identifier | `uf-icon-identifier` | Persistent identifying value or structured reference used to refer to something. |
| C03 | Digital Link | `uf-icon-digital-link` | Standardized web-resolvable identity expression, particularly GS1 Digital Link where authorized. |
| C04 | Resolver | `uf-icon-resolver` | Infrastructure determining an appropriate resource relationship from identity and request context. |
| C05 | Resource | `uf-icon-resource` | Resource available through a governed relationship. |
| C06 | Route | `uf-icon-route` | Controlled path between source/request and destination. |
| C07 | Persistent | `uf-icon-persistent` | Persistence of identity or reference despite surrounding change. |
| C08 | Validation | `uf-icon-validation` | Evaluation of an input or value against defined validation rules. |
| C09 | Qualifier | `uf-icon-qualifier` | Structured information narrowing or qualifying another identifier or request. |
| C10 | Context | `uf-icon-context` | Contextual frame relevant to interpretation. |
| C11 | Standard | `uf-icon-standard` | Standard or specification supporting interoperability. |
| C12 | Interface | `uf-icon-interface` | Authorized interface exposing an underlying capability. |
| C13 | Host | `uf-icon-host` | External environment in which an Unfict capability may surface. |
| C14 | Subject | `uf-icon-subject` | Persistent subject/person/entity actor identity in Unfict semantics. |
| C15 | Organization | `uf-icon-organization` | Organizational entity or operating context. |
| C16 | Relationship | `uf-icon-relationship` | Governed relationship between distinct entities. |
| C17 | Authority | `uf-icon-authority` | Bounded authority to act. |
| C18 | Delegation | `uf-icon-delegation` | Scoped transfer or grant of authority. |
| C19 | Capability | `uf-icon-capability` | Action or capability available within legitimate scope. |
| C20 | Evidence | `uf-icon-evidence` | Evidence or source material relevant to a claim or evaluation. |
| C21 | Standing | `uf-icon-standing` | Current operative standing/status in context. |
| C22 | Policy | `uf-icon-policy` | Governed policy or rule applied to evaluation. |
| C23 | Outcome | `uf-icon-outcome` | Result produced by an evaluation or action; not inherently success. |
| C24 | Receipt | `uf-icon-receipt` | Inspectable record of what occurred and what outcome resulted. |


## Collection D — Navigation & Workspace

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| D01 | Home | `uf-icon-home` | Return to the primary home or root workspace surface. |
| D02 | Dashboard | `uf-icon-dashboard` | Open a consolidated overview surface with multiple relevant information regions. |
| D03 | Sidebar | `uf-icon-sidebar` | Represent or toggle the primary sidebar/navigation rail. |
| D04 | Panel | `uf-icon-panel` | Represent or open a secondary bounded workspace panel. |
| D05 | Grid View | `uf-icon-grid-view` | Display a collection as a card/grid arrangement. |
| D06 | List View | `uf-icon-list-view` | Display a collection as a linear list. |
| D07 | Table View | `uf-icon-table-view` | Display structured records as a table. |
| D08 | Sort | `uf-icon-sort` | Change ordering of a collection. |
| D09 | Expand | `uf-icon-expand` | Enlarge a region, viewer, object or panel. |
| D10 | Collapse | `uf-icon-collapse` | Return an expanded region to a smaller workspace state. |


## Collection E — Content, Files & Communication

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| E01 | File | `uf-icon-file` | Generic file or document artifact. |
| E02 | Folder | `uf-icon-folder` | Container grouping files, documents or related resources. |
| E03 | Documentation | `uf-icon-documentation` | Structured guides, manuals, reference documentation or instructional material. |
| E04 | Attachment | `uf-icon-attachment` | Supplementary content attached to another message, record or object. |
| E05 | Media | `uf-icon-media` | Image or visual-media asset. |
| E06 | Bookmark | `uf-icon-bookmark` | Saved item or location retained for convenient future reference. |
| E07 | Share | `uf-icon-share` | Share a reference, object or resource outward to another person, destination or context. |
| E08 | Print | `uf-icon-print` | Produce a printable physical representation. |
| E09 | Notification | `uf-icon-notification` | Represent an individual notification/event artifact or attention-worthy notification item. |
| E10 | Message | `uf-icon-message` | Conversational correspondence or a message channel. |
| E11 | Help | `uf-icon-help` | Open contextual assistance, support or explanation. |


## Collection F — Developer, API & Data

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| F01 | Code | `uf-icon-code` | Source code, code samples, implementation snippets or programming content. |
| F02 | Terminal | `uf-icon-terminal` | Command-line interface, shell or terminal environment. |
| F03 | API | `uf-icon-api` | API-specific programmatic interface for machine-to-machine access. |
| F04 | Webhook | `uf-icon-webhook` | Event-triggered callback or outbound integration mechanism. |
| F05 | Database | `uf-icon-database` | Persistent structured data store. |
| F06 | Schema | `uf-icon-schema` | Defined structure/model governing the shape and relationships of data. |
| F07 | JSON | `uf-icon-json` | JSON-formatted structured machine-readable data. |
| F08 | Log | `uf-icon-log` | Ordered operational or system event record. |
| F09 | History | `uf-icon-history` | Historical activity or earlier states/events. |
| F10 | Debug | `uf-icon-debug` | Diagnostic investigation used to identify implementation or execution problems. |
| F11 | Run | `uf-icon-run` | Start an executable operation, request, test or process. |
| F12 | Stop | `uf-icon-stop` | Stop or cancel an active execution or process. |


## Collection G — GS1, Product Identity & Connected Product

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| G01 | Trade Item | `uf-icon-trade-item` | Trade item within a GS1 or product-identity context. |
| G02 | GTIN | `uf-icon-gtin` | Global Trade Item Number in a product-identity context. |
| G03 | Barcode | `uf-icon-barcode` | Linear barcode symbology or barcode-scanning target. |
| G04 | QR Code | `uf-icon-qr-code` | QR Code specifically as a two-dimensional data carrier. |
| G05 | Serial | `uf-icon-serial` | Serial-level qualification identifying one specific instance. |
| G06 | Batch / Lot | `uf-icon-batch-lot` | Batch or lot qualifier grouping multiple produced items under shared production context. |
| G07 | Location | `uf-icon-location` | Physical or business location context participating in structured identity. |
| G08 | Party | `uf-icon-party` | Business or organizational party participating in a standards-based relationship. |
| G09 | Digital Product Passport | `uf-icon-dpp` | Digital Product Passport context associating persistent product identity with structured digital information. |


## Collection H — Identity, Access & Governance Extensions

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| H01 | Authentication | `uf-icon-authentication` | Process of establishing or confirming authentication in an access context. |
| H02 | Credential | `uf-icon-credential` | Structured credential associated with, presented by or issued to a subject/context. |
| H03 | Role | `uf-icon-role` | Named contextual role or functional classification assigned within a system or organization. |
| H04 | Permission | `uf-icon-permission` | Specific allowed action within defined scope. |
| H05 | Scope | `uf-icon-scope` | Explicit boundary within which a rule, authority, permission, action or evaluation applies. |
| H06 | Claim | `uf-icon-claim` | Assertion that may be evaluated, supported, challenged or related to evidence. |
| H07 | Provenance | `uf-icon-provenance` | Origin and lineage of information, evidence, records or objects. |
| H08 | Issuer | `uf-icon-issuer` | Entity responsible for issuing a credential, record, assertion or governed artifact. |
| H09 | Revocation | `uf-icon-revocation` | Formal withdrawal of a previously operative grant, credential, permission or standing. |
| H10 | Expiry | `uf-icon-expiry` | Time-bound cessation of validity, permission, credential effect or operative standing. |


## Collection I — System, State & Temporal

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| I01 | Pending | `uf-icon-pending` | Awaiting completion, response or resolution; unresolved but not failed. |
| I02 | Processing | `uf-icon-processing` | Operation actively being processed. |
| I03 | Unavailable | `uf-icon-unavailable` | Resource, function, connection or object currently unavailable. |
| I04 | Connected | `uf-icon-connected` | Active connection currently exists between relevant endpoints or systems. |
| I05 | Disconnected | `uf-icon-disconnected` | Expected or relevant connection is not currently established. |
| I06 | Calendar | `uf-icon-calendar` | Calendar date, date selection or date metadata. |
| I07 | Time | `uf-icon-time` | Time, timestamp or clock-time context. |
| I08 | Recent | `uf-icon-recent` | Items or events that occurred or changed recently. |
| I09 | Locked | `uf-icon-locked` | Literal locked state preventing access, editing or interaction in current UI context. |
| I10 | Unlocked | `uf-icon-unlocked` | Literal lock restriction is not engaged. |


## Collection J — Inspection, Visibility & Interaction

| Code | Name | Canonical ID | Semantic Job |
|---|---|---|---|
| J01 | View | `uf-icon-view` | Show or reveal content, an object or a representation. |
| J02 | Hide | `uf-icon-hide` | Conceal a currently visible representation from the interface. |
| J03 | Inspect | `uf-icon-inspect` | Examine detailed technical or object-level information. |
| J04 | Focus | `uf-icon-focus` | Direct attention or selection toward a specific target region or object. |
| J05 | Pin | `uf-icon-pin` | Keep an item persistently positioned or readily accessible within the current interface. |
| J06 | Unpin | `uf-icon-unpin` | Remove a UI pin while leaving the underlying item intact. |
| J07 | Drag | `uf-icon-drag` | Indicate that an item can be dragged or manually reordered. |
| J08 | Resize | `uf-icon-resize` | Change dimensions of a panel, region, window or object. |

---

# 4. Cross-Family Semantic Boundaries

The following boundaries are normative and must survive design, implementation, documentation, and code:

- `User` ≠ `Subject`
- `Notifications` ≠ `Notification`
- `Info` ≠ `Help`
- `Share` ≠ `Delegation`
- `File` ≠ `Resource`
- `Documentation` ≠ `Standard`
- `Attachment` ≠ `Relationship`
- `Bookmark` ≠ `Persistent`
- `Print` ≠ `Download`
- `Code` ≠ `Terminal`
- `API` ≠ `Interface`
- `API` ≠ `Webhook`
- `Database` ≠ `Schema`
- `JSON` ≠ `Schema`
- `Log` ≠ `History`
- `History` ≠ `Recent`
- `Refresh` ≠ `Processing`
- `Trade Item` ≠ `Product`
- `GTIN` ≠ `Identifier`
- `GTIN` ≠ `Barcode`
- `QR Code` ≠ `Digital Link`
- `Serial` ≠ `Batch / Lot`
- `Party` ≠ `Organization`
- `DPP` ≠ `Digital Link`
- `Authentication` ≠ `Authority`
- `Credential` ≠ `Subject`
- `Role` ≠ `Authority`
- `Permission` ≠ `Authority`
- `Scope` ≠ `Context`
- `Claim` ≠ `Evidence`
- `Provenance` ≠ `Verification`
- `Issuer` ≠ `Authority`
- `Revocation` ≠ `Delete`
- `Revocation` ≠ `Expiry`
- `Unavailable` ≠ `Error`
- `Connected` ≠ `Relationship`
- `Disconnected` ≠ `Revocation`
- `Locked` ≠ `Authority`
- `Unlocked` ≠ `Permission`
- `View` ≠ `Inspect`
- `Inspect` ≠ `Search`
- `Focus` ≠ `Scope`
- `Pin` ≠ `Bookmark`
- `Pin` ≠ `Persistent`
- `Resize` ≠ `Expand`

Color, placement, or styling must never be used to collapse these distinctions.

---

# 5. Canonical Naming & File Rules

Canonical IDs use lowercase kebab-case:

```text
uf-icon-<semantic-name>
uf-motif-<motif-name>
```

Canonical source filenames SHALL match the ID:

```text
uf-icon-search.svg
uf-icon-resolver.svg
uf-motif-mark.svg
```

Runtime consumers SHOULD use semantic names generated from the manifest:

```text
search
resolver
dpp
```

The manifest maps those names to canonical IDs.

Do not create parallel source filenames such as:

```text
-search-dark.svg
-search-white.svg
-resolver-blue.svg
-resolver-final2.svg
```

Appearance is contextual unless geometry or meaning genuinely changes.

---

# 6. Registry Status & Manifest Relationship

Every asset in this v1.0 inventory SHALL have a `MANIFEST.json` record before entering the production package.

The manifest SHALL record, at minimum:

```text
id
name
family
collection
source
viewBox
colorChannels
defaultTone
allowedTones
blueAccentAllowed
semanticColorAllowed
monochromeSafe
smallOptimized
sizes
accessibilityMode
brandLocked
semanticStatus
```

For this ratified inventory:

```text
semanticStatus = governed
```

unless a later ratified amendment explicitly deprecates or replaces an entry.

---

# 7. Addition, Deprecation & Rename Control

A new icon may be added only when an existing governed icon cannot perform the same semantic job without ambiguity.

A request for a new icon must define:

- semantic name;
- proposed ID;
- collection;
- exact meaning;
- `does_not_mean`;
- primary uses;
- avoid uses;
- reason an existing icon cannot serve the job;
- runtime color class;
- minimum size;
- semantic relationships to existing icons.

Renaming a released ID requires a governed migration. Silent renames are prohibited.

Deprecation SHALL be recorded in the manifest and should preserve a migration path for downstream consumers.

---

# 8. Ratified Baseline

This v1.0 registry is the **implementation baseline** for the first production Unfict icon package.

The implementation target is therefore:

```text
127 governed semantic assets
10 collections
1 canonical ID per semantic asset
1 canonical source geometry per unchanged meaning
manifest-driven runtime behavior
```

> **A change in appearance does not create a new icon. A change in meaning may.**

---

**End of `UNFICT-ICONS-LIST v1.0 — RATIFIED`**
