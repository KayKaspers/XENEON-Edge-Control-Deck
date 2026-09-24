# Project Brain — XENEON Edge Control Deck

- **Purpose:** Compact current project context
- **Status:** Bootstrap baseline
- **Date:** 2026-09-24
- **Authority:** Descriptive project memory; does not replace Human-Maintainer decisions

## Project status

XENEON Edge Control Deck is a newly created public GitHub project.

The physical CORSAIR XENEON EDGE is available for hands-on implementation.

Current active Work Package:

**XEE-WP-001 — Project Bootstrap**

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
7. Branding is deferred until after the CDS consumer/Product Profile contract.
8. Logo and banner will be created in **XEE-WP-002A**.
9. CORSAIR branding will not be embedded into the independent project mark in a way that implies official affiliation.
10. No future directory is created merely to make the repository look complete.

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
- exact CDS Product Profile contents
- final logo/mark/banner direction
- exact iCUE capabilities and limitations
- profile/export format and backup strategy
- automation technology, if any
- versioning/release policy before v1.0

## Near-term sequence

1. Complete XEE-WP-001.
2. Human Maintainer reviews, commits and pushes if accepted.
3. Nova reviews the committed GitHub state.
4. Execute XEE-WP-002 — CDS Consumer Integration and XENEON Product Profile.
5. Execute XEE-WP-002A — Project Identity, Logo, Banner & Repository Branding.
6. Begin real-device baseline with XEE-WP-003.

## Lessons learned

### Bootstrap

The NDF `NEW_PROJECT_FLOW.md` still references `project-manifest.yaml`, while the current NDF manifest specification and adapter conventions identify `PROJECT_MANIFEST.md` as canonical.

This project follows the current canonical specification rather than the stale path reference.

## Update rule

Update Project Brain only when material project state changes. Do not duplicate full historical detail that already exists in Git history, completed Work Packages or release notes.
