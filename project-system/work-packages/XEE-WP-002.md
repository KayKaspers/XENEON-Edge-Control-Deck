# XEE-WP-002 — CDS Consumer Integration and XENEON Product Profile

**SESSION:** SAME_SESSION_RECOMMENDED
**STATUS:** COMPLETE
**Prompt profile:** Lean (B1)
**Type:** docs-only / design-contract
**Date:** 2026-09-24

## 1. Goal

Define the XENEON Edge Control Deck as a governed CDS consumer and establish a project-local target-state Product Profile before visual branding or application-specific implementation.

## 2. Scope

Create:

- `design-system/CDS_INTEGRATION.md`
- `design-system/XENEON_PRODUCT_PROFILE.md`
- `design-system/COMPONENT_MAPPING.md`
- `design-system/PATTERN_MAPPING.md`
- `design-system/CONSUMER_EXTENSIONS.md`
- `project-system/work-packages/XEE-WP-002.md`

Reconcile status in:

- `README.md`
- `ROADMAP.md`
- `project-system/PROJECT_PROFILE.md`
- `project-system/WORK_PACKAGE_QUEUE.md`
- `project-brain/PROJECT_BRAIN.md`
- `project-system/work-packages/XEE-WP-001.md`

## 3. Pinned references

### CDS

Revision:

`d8b5857e1eda2066e61fda47b694afbc466aa6d8`

Relevant sources:

- Design System Architecture
- Product Profile and Extension Model
- Consumer Contract and Reconciliation Model
- Artifact Distribution and Channel Model
- Adaptive Layout and Responsive Foundation
- Accessibility and Inclusive Design Policy
- Visual Foundation Brand and Product Profile Boundary

### NDF

Release baseline: `v1.1.0`

Repository revision observed at WP preparation:

`b7bebb8a9b1b51756e83fdbf51d83eeb7d70929e`

## 4. Project assumption

The CDS target state is treated as fully operational for project planning and implementation.

This assumption does not create formal CDS conformance, adoption, maturity or approval.

## 5. Required design boundaries

- XENEON is a CDS consumer.
- XENEON-specific implementation remains consumer-owned.
- Star Citizen, OBS, Discord and telemetry remain Consumer Extensions.
- Product Profile constraints must not redefine shared semantics.
- Accessibility obligations must not be weakened.
- Status truthfulness must be preserved.
- NDF and CDS remain non-runtime dependencies.
- Technical platform limitations are documented rather than silently converted into design rules.

## 6. Acceptance criteria

- [ ] XEE-WP-001 is reconciled to `COMPLETE`.
- [ ] XEE-WP-002 is the sole active Work Package.
- [ ] CDS revision is pinned.
- [ ] XENEON is explicitly classified as a CDS consumer.
- [ ] Product Profile boundary is documented.
- [ ] Consumer Extensions are explicitly separated from CDS Core concepts.
- [ ] Component mapping is semantic rather than application-specific.
- [ ] Pattern mapping keeps domain patterns above the shared foundation.
- [ ] Accessibility and truthful-status obligations are explicit.
- [ ] No visual palette, logo or brand system is prematurely selected.
- [ ] No formal CDS conformance/adoption claim is made.
- [ ] No application bindings or physical-device configuration are performed.
- [ ] Public-repository safety boundary remains intact.

## 7. Non-goals

- no logo or banner creation
- no colour palette
- no font selection
- no icon family selection
- no iCUE implementation
- no Windows configuration
- no Star Citizen bindings
- no OBS binding implementation
- no Discord binding implementation
- no CDS repository modification
- no formal CDS Product Profile approval claim

## Authority

Human Maintainer retains normative acceptance and all Git publication authority.

Nova plans, drafts and reviews.

## Allowed operations

- create/edit the declared documentation files
- inspect public NDF/CDS references
- reconcile WP status documentation

## Forbidden operations

- commit
- push
- tag
- release
- modify NDF/CDS repositories
- configure the physical XENEON device
- add secrets or private data
- claim formal CDS conformance

## STOP conditions

Stop and escalate if:

- the work requires changing CDS semantics;
- a formal Product Profile approval is required;
- application implementation is necessary;
- the project would need a mandatory CDS runtime;
- a public artifact contains sensitive data.

## Expected Human-Maintainer commit

`docs(design): establish CDS consumer integration and XENEON product profile`

## Completion record

- **Human-Maintainer integration commit:** `986ef1bc9719143469632c51e0bb25c4ff8a0020`
- **Nova review:** `GO WITH NOTES`
- **Acceptance criteria:** satisfied
- **Notes:** Project Brain still used the bootstrap status label and retained the now-resolved Product Profile contents as an open decision. Both are reconciled by XEE-WP-002A.
- **Release effect:** none
