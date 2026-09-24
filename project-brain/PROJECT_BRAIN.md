# Project Brain — XENEON Edge Control Deck

- **Purpose:** Compact current project context
- **Status:** Hardware-baseline execution
- **Date:** 2026-09-24
- **Authority:** Descriptive project memory; does not replace Human-Maintainer decisions

## Project status

XENEON Edge Control Deck is a newly created public GitHub project.

The physical CORSAIR XENEON EDGE is available for hands-on implementation.

Current active Work Package:

**XEE-WP-003 — Hardware Baseline**

## Project objective

Build a reproducible, documented and extensible XENEON EDGE control surface for:

- Star Citizen
- OBS Studio
- Discord
- system telemetry
- local automation where justified

## Governance state

### NDF

Nova Development Framework is the development-governance baseline.

Bootstrap reference: NDF `v1.1.0`.

Current NDF level declared in the manifest: **Level 2**.

### CDS

Core Design System is the design/UX authority.

Project assumption:

> CDS target state is treated as fully operational for this project's planning and implementation.

Boundary:

> This assumption is not a formal CDS adoption/conformance claim.

## Roles

### Human Maintainer

Kay is the final authority.

Only the Human Maintainer:

- accepts normative project changes;
- stages;
- commits;
- pushes;
- tags;
- releases;
- performs physical-device configuration.

### Nova

Nova:

- plans Work Packages;
- supports architecture;
- drafts documentation;
- reviews evidence;
- evaluates results.

Claude is not required during the current phase.

## Current architectural model

```text
NDF ── development governance ─┐
                              ├─> XENEON Edge Control Deck
CDS ── design / UX authority ─┘
                                      │
                                      ├─ Star Citizen
                                      ├─ OBS Studio
                                      ├─ Discord
                                      └─ Telemetry / Automation
```

## Key decisions

1. Repository is intentionally **public**.
2. Human Maintainer keeps exclusive Git publication authority.
3. NDF and CDS remain external authorities; neither becomes a runtime dependency.
4. XENEON is a **CDS consumer**.
5. Application-specific behaviour stays a **Consumer Extension** unless separately accepted elsewhere.
6. CDS is treated as fully operational in target-state planning, without claiming formal current conformance.
7. XEE-WP-002 established the CDS consumer/Product Profile contract.
8. The XEE-WP-002A visual identity was approved by the Human Maintainer.
9. Branding uses a dark technical baseline with white and restrained `#FFD600` accent.
10. Exo 2 is the display/brand direction; Inter is the UI/documentation direction.
11. Real XENEON Edge imagery may be used when provenance/rights permit; AI-regenerated substitute hardware is not used for official project branding.
12. CORSAIR branding is not embedded into the independent project mark in a way that implies official affiliation.
13. No future directory is created merely to make the repository look complete.

## Hardware facts currently evidenced

Manufacturer baseline:

- CORSAIR XENEON EDGE
- 14.5-inch touchscreen
- 2560 × 720 native resolution
- 32:9
- 60 Hz
- 5-point touch
- HDMI / USB-C DP Alt Mode
- iCUE-enabled
- horizontal and vertical use supported

Everything beyond the published baseline remains to be verified on the actual device.

## Public-repository risks

Primary risk:

Sensitive data may enter the repository through screenshots, logs or exported configuration.

Control:

- sanitise before commit;
- prefer cropped evidence;
- inspect exports;
- never publish stream keys, tokens, webhooks or credentials.

## Open decisions

- project license
- CI / automated public quality checks
- exact iCUE capabilities and limitations
- profile/export format and backup strategy
- automation technology, if any
- versioning/release policy before v1.0

## Near-term sequence

1. Reconcile XEE-WP-002A to COMPLETE and activate XEE-WP-003.
2. Record the real device identity and physical installation without publishing serial numbers or other unnecessary identifiers.
3. Document actual power, display and touch/data cabling as separate physical paths.
4. Record physical orientation, mounting and cable topology.
5. Capture sanitised evidence where useful.
6. Complete XEE-WP-003 before moving operating-system verification to XEE-WP-004 and iCUE/firmware verification to XEE-WP-005.

## Completed Work Packages

### XEE-WP-001 — Project Bootstrap

- Human-Maintainer integration commit: `89959f95aa179ed1e73094a08392dc671871f27d`
- Nova review: `GO WITH NOTES`
- Note: content and acceptance criteria passed; status reconciliation is integrated with XEE-WP-002 kickoff.

### XEE-WP-002 — CDS Consumer Integration and XENEON Product Profile

- Human-Maintainer integration commit: `986ef1bc9719143469632c51e0bb25c4ff8a0020`
- Nova review: `GO WITH NOTES`
- Acceptance: CDS consumer boundary, Product Profile, component mapping, pattern mapping and Consumer Extensions established.
- Notes reconciled by XEE-WP-002A: Project Brain status label and obsolete Product Profile open decision.

### XEE-WP-002A — Project Identity, Logo, Banner & Repository Branding

- Human-Maintainer integration commit: `6f896f8c358cc2073541e274acc49d54cdd7da88`
- README product/integration follow-up: `fe76e225541b23889b4ef3ebbdd076d5c0e10a1f`
- Nova review: `GO WITH NOTES`
- Human-Maintainer visual approval: granted
- Acceptance: public identity, banner, social-preview source, logo system, brand guide and repository presentation integrated.
- Remaining note: GitHub Social Preview must be configured in repository settings separately from the committed image file.

## Lessons learned

### Bootstrap

The NDF `NEW_PROJECT_FLOW.md` still references `project-manifest.yaml`, while the current NDF manifest specification and adapter conventions identify `PROJECT_MANIFEST.md` as canonical.

This project follows the current canonical specification rather than the stale path reference.

## Update rule

Update Project Brain only when material project state changes. Do not duplicate full historical detail that already exists in Git history, completed Work Packages or release notes.
