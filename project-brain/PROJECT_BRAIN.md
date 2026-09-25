# Project Brain — XENEON Edge Control Deck

- **Purpose:** Compact current project context
- **Status:** Navigation and Deck Architecture
- **Date:** 2026-09-25
- **Authority:** Descriptive project memory; does not replace Human-Maintainer decisions

## Project status

XENEON Edge Control Deck is a newly created public GitHub project.

The physical CORSAIR XENEON EDGE is available for hands-on implementation.

Latest completed Work Package:

**XEE-WP-007 — Navigation and Deck Architecture — COMPLETE**

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

The physical, Windows/touch and iCUE/device baselines are now verified on the actual device; interaction implementation remains subject to Work-Package-specific validation.

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
- WP-007 maintainer Git integration after v0.3.1 XL physical acceptance
- profile/export format and backup strategy
- automation technology, if any
- versioning/release policy before v1.0

## Near-term sequence

1. Preserve accepted v0.2.0 as rollback baseline.
2. Await explicit authorization before starting a subsequent Work Package.

## Completed Work Packages

### XEE-WP-006 - Base Control Deck

- Accepted implementation: v0.2.0 at `b77acfa7863e0d0a03bf6ca50ebe279300a114bc`.
- Completion: `ab71849edfa1209c807969b4668d2f6462c6701d`, accepted 2026-09-25.
- Physical L 1689x697; full-card controls, readability, low-light and foreground-window continuity accepted.
- Preserve PHYSICAL READABILITY > PREVIEW DENSITY and TOUCH SURFACE > MICRO CONTROL.


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

### XEE-WP-003 — Hardware Baseline

- Kickoff commit: `1f68837016c5fe2c4643f08c0f16677c236feaed`
- Physical-evidence commit: `0bef15a592b79bf632bd34225b20f9caddfaeee2`
- Nova review: `PASS`
- Acceptance: real device identity, orientation, stand, physical power path, direct display path, dock/adapter chain and evidence classification documented.
- Deferred by design: functional USB-C touch/data verification belongs to XEE-WP-004.

### XEE-WP-004 — Windows Display and Touch Baseline

- Kickoff commit: `fb34cf6269c3a11671db90da13c3c199d4f04391`
- Evidence commit: `e93c41c82b033fb9ee37bd88cf3297ae9577ddbc`
- Nova review: `PASS`
- Human-Maintainer acceptance: granted on 2026-09-24
- Acceptance: Windows display enumeration, 2560×720 active mode, 60 Hz, 100% scaling, landscape orientation, corrected touch mapping and practical five-point multi-touch are documented.
- USB-C touch/data role: established as `DERIVED` from working touch, observed two-cable topology and CORSAIR manufacturer documentation.
- Deferred by design: iCUE detection, installed iCUE version, firmware/device version, updates and vendor-specific controls belong to XEE-WP-005.

### XEE-WP-005 - iCUE and Firmware Baseline

- Kickoff commit: `82e8d56ec0530991dee8eeea70daf87723a2b199`
- Evidence commit: `039e208240f0de99c91779725bb3887d504d6eb1`
- Nova review: `PASS`
- Human-Maintainer acceptance: granted on 2026-09-24
- Installed iCUE baseline: 5.51.42.
- XENEON device version: `LCD-Touchscreen, v. 5.51.1`.
- Update checks: no iCUE or XENEON update reported available; no update applied.
- Vendor capability baseline: XENEON settings, multiple widget pages, custom `.icuewidget` import, Stream Deck widget and Desktop/iCUE-Widgets switching verified.
- Runtime observation: widgets and touch continue when the iCUE foreground window is closed; exact background service/process requirements remain uninspected.
- Public evidence: sanitised summaries only; raw screenshots remain private.


## Lessons learned

### Bootstrap

The NDF `NEW_PROJECT_FLOW.md` still references `project-manifest.yaml`, while the current NDF manifest specification and adapter conventions identify `PROJECT_MANIFEST.md` as canonical.

This project follows the current canonical specification rather than the stale path reference.

## Update rule

Update Project Brain only when material project state changes. Do not duplicate full historical detail that already exists in Git history, completed Work Packages or release notes.

## Latest device acceptance

2026-09-25: maintainer confirmed v0.3.1 XL Home/Back, both pages, edge touches,
readability, low-light comfort and operation with the iCUE foreground window
closed. Screenshot shows full-width SC layout. WP-007 is COMPLETE following verified maintainer integration.
No AI staging, commit or push was performed.

Integration verified: `3eb0b44dcfa3e4f3044bb092d03d670d4889f28e` on local main and GitHub main.
No subsequent Work Package is authorized by this completion.
