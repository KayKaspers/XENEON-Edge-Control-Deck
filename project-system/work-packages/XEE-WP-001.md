# XEE-WP-001 — Project Bootstrap

**SESSION:** SAME_SESSION_RECOMMENDED
**STATUS:** COMPLETE
**Prompt profile:** Lean (B1)
**Type:** docs-only / project-bootstrap
**Date:** 2026-09-24

## 1. Goal / Ziel

Establish the smallest useful NDF-based project foundation for the public XENEON Edge Control Deck repository.

The bootstrap must make project identity, authority, roadmap, safety boundary, current context and Work Package tracking explicit without creating empty governance overhead.

## 2. Scope

Create or replace:

- `README.md`
- `ROADMAP.md`
- `SECURITY.md`
- `project-system/PROJECT_MANIFEST.md`
- `project-system/PROJECT_PROFILE.md`
- `project-system/WORK_PACKAGE_QUEUE.md`
- `project-system/REFERENCES.md`
- `project-system/work-packages/XEE-WP-001.md`
- `project-brain/PROJECT_BRAIN.md`

## 3. Relevant sources

- Nova Development Framework v1.1.0
- NDF Project Manifest Specification
- NDF Project Adapter Conventions
- NDF Work Package Standard
- Core Design System
- official CORSAIR XENEON EDGE manufacturer specification

## 4. Binding project-specific invariants

```text
AI DOES NOT COMMIT OR PUSH
PUBLIC != SAFE BY DEFAULT
PLANNED != AUTHORIZED
VERIFY != APPROVE
NOVA_REVIEW != HUMAN_ACCEPTANCE
```

The repository is intentionally public.

The CDS target-state assumption may be recorded but must not be presented as a formal CDS conformance claim.

## 5. Concrete task

1. Replace the placeholder README with the project overview.
2. Establish the canonical NDF Project Manifest.
3. Establish the Project Profile and Project Brain.
4. Establish the initial roadmap and Work Package queue.
5. Establish the reference map.
6. Add a public-repository security boundary.
7. Record the active Work Package itself.

## 6. Acceptance criteria

- [ ] README follows the information architecture of the NDF README without copying project-specific NDF prose.
- [ ] Project identity, purpose and primary use cases are explicit.
- [ ] `PROJECT_MANIFEST.md` contains all mandatory NDF manifest fields.
- [ ] NDF Level is not overstated.
- [ ] NDF is identified as development-governance authority.
- [ ] CDS is identified as design/UX authority under the target-state assumption.
- [ ] No formal CDS conformance claim is made.
- [ ] Repository is explicitly documented as public.
- [ ] Secret/screenshot/export safety rules are documented.
- [ ] Initial Work Package queue includes XEE-WP-002A for logo/banner/branding.
- [ ] Branding is not implemented before XEE-WP-002.
- [ ] No empty future directory tree is committed solely for appearance.
- [ ] No secrets, credentials or private configuration data are present.
- [ ] Human Maintainer remains the only Git publication authority.

## 7. Non-goals

- no hardware configuration
- no Windows configuration
- no iCUE configuration
- no logo/banner creation
- no CDS Product Profile implementation
- no Star Citizen bindings
- no OBS integration
- no Discord integration
- no release or tag
- no license decision

## Authority

Human Maintainer: Kay

Nova plans and reviews. The Human Maintainer executes local file integration and all Git publication actions.

## Allowed operations

- create/edit documentation files inside the declared scope
- inspect public references
- prepare local artifacts for Human-Maintainer review

## Forbidden operations

- commit
- push
- tag
- release
- change repository visibility
- publish secrets
- modify NDF or CDS repositories
- perform physical XENEON configuration under this WP

## STOP conditions

Stop and escalate if:

- a required project fact cannot be evidenced;
- a public artifact contains potentially sensitive data;
- implementation work is required to satisfy the bootstrap;
- scope would need to include NDF/CDS changes;
- a formal adoption/conformance claim would be required.

## Human-Maintainer gate

The Human Maintainer reviews the generated files and decides whether to integrate them.

Suggested commit message after acceptance:

`feat(project): initialize NDF and CDS project foundation`

## Completion report

On execution completion report:

1. files created/changed;
2. checks performed;
3. open decisions;
4. risks/notes;
5. recommended Nova review result.

## Completion record

- **Human-Maintainer integration commit:** `89959f95aa179ed1e73094a08392dc671871f27d`
- **Nova review:** `GO WITH NOTES`
- **Acceptance criteria:** satisfied
- **Note:** The integrated bootstrap still displayed XEE-WP-001 as `ACTIVE`; that administrative status drift is reconciled by XEE-WP-002 kickoff documentation.
- **Release effect:** none
