# Project Manifest — XENEON Edge Control Deck

- **Artifact:** Canonical NDF Project Manifest
- **Status:** Active
- **Created:** 2026-09-24
- **Authority:** Human Maintainer
- **Format basis:** NDF `PROJECT_MANIFEST_SPEC.md`

## Project identity

XENEON Edge Control Deck is a public, documentation-first hardware/software integration project for building a reproducible interactive control surface around the CORSAIR XENEON EDGE.

## Canonical project data

```yaml
name: "XENEON Edge Control Deck"
slug: "xeneon-edge-control-deck"
owner: "KayKaspers"
architecture_lead: "Nova"
implementation_assistant: "Human Maintainer with Nova guidance"
repository: "KayKaspers/XENEON-Edge-Control-Deck"
status: "active"
ndf_level: 2

project_type: "hardware-software-integration"
primary_language: "markdown"
secondary_languages: []

deployment:
  docker: false
  self_hosted: false
  cloud: false
  local_windows: true
  physical_device: true

quality_targets:
  documentation: "required"
  tests: "scope-dependent"
  security: "required"
  public_repository_hygiene: "required"
  ci: "open decision"
  release_process: "required before first formal release"

ndf:
  project_brain: true
  work_package_workflow: true
  quality_gates: "planned"
  health_score: false
  compliance_check: false

design:
  authority: "Core Design System"
  consumption_model: "CDS consumer"
  target_state_assumption: true
  formal_conformance_claim: false
```

## Field notes

### NDF level

The project starts at **NDF Level 2**:

- basic NDF project artifacts are present;
- standards and Work Package workflow are active;
- project-wide automated Quality Gates are not yet evidenced;
- no Health Score is claimed.

A higher NDF level must be promoted only with evidence.

### Implementation assistant

Claude is not required for the current work. During this phase, the Human Maintainer performs local implementation directly with Nova planning and review support.

### Design authority

Core Design System is consumed as the project's design/UX authority under the explicit **target-state assumption** recorded in the project profile.

This does not constitute a formal CDS adoption or conformance claim.

## Authority

Changes to project identity, repository status, NDF level, design authority, formal conformance claims or release state require Human-Maintainer approval.
