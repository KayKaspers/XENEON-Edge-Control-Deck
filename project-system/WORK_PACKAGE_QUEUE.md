# Work Package Queue — XENEON Edge Control Deck

- **Authority:** Human Maintainer
- **Planning / Review:** Nova
- **Baseline:** NDF v1.1.0
- **Last updated:** 2026-09-25

## Status semantics

| Status | Meaning |
|---|---|
| `ACTIVE` | Explicitly authorised and currently being executed |
| `READY` | Defined enough to authorise, but not yet authorised |
| `PLANNED` | Roadmap item; not authorised |
| `BLOCKED` | Cannot proceed until a named condition is resolved |
| `REVIEW` | Execution complete; awaiting evaluation/acceptance |
| `COMPLETE` | Human-Maintainer accepted and integrated |

```text
PLANNED != AUTHORIZED
EXECUTED != ACCEPTED
NOVA_REVIEW != HUMAN_ACCEPTANCE
```

## Queue

| ID | Title | Priority | Status | Depends on |
|---|---|---:|---|---|
| XEE-WP-001 | Project Bootstrap | P0 | COMPLETE | — |
| XEE-WP-002 | CDS Consumer Integration and XENEON Product Profile | P0 | COMPLETE | XEE-WP-001 |
| XEE-WP-002A | Project Identity — Logo, Banner & Repository Branding | P1 | COMPLETE | XEE-WP-002 |
| XEE-WP-003 | Hardware Baseline | P0 | COMPLETE | XEE-WP-001 |
| XEE-WP-004 | Windows Display and Touch Baseline | P0 | COMPLETE | XEE-WP-003 |
| XEE-WP-005 | iCUE and Firmware Baseline | P0 | COMPLETE | XEE-WP-003 |
| XEE-WP-006 | Base Control Deck | P0 | COMPLETE | XEE-WP-002, XEE-WP-004, XEE-WP-005 |
| XEE-WP-007 | Navigation and Deck Architecture | P0 | COMPLETE | XEE-WP-006 |
| XEE-WP-008 | Discord Integration | P2 | PLANNED | XEE-WP-007 |
| XEE-WP-009 | OBS Studio Integration | P1 | PLANNED | XEE-WP-007 |
| XEE-WP-010 | Star Citizen Flight | P0 | COMPLETE | XEE-WP-007 |
| XEE-WP-011 | Star Citizen Combat | P1 | PLANNED | XEE-WP-010 |
| XEE-WP-012 | Star Citizen Mining | P1 | PLANNED | XEE-WP-010 |
| XEE-WP-013 | Star Citizen Salvage | P1 | PLANNED | XEE-WP-010 |
| XEE-WP-014 | Star Citizen Industrial / Cargo | P2 | PLANNED | XEE-WP-010 |
| XEE-WP-015 | Telemetry and System Status | P2 | PLANNED | XEE-WP-007 |
| XEE-WP-016 | CDS Visual and UX Review | P1 | PLANNED | XEE-WP-008..015 as applicable |
| XEE-WP-017 | Backup, Export and Recovery | P0 | PLANNED | XEE-WP-005, implemented profiles |
| XEE-WP-018 | Full System Verification | P0 | PLANNED | XEE-WP-016, XEE-WP-017 |
| XEE-WP-019 | Documentation and v1.0 Preparation | P0 | PLANNED | XEE-WP-018 |

## Current Work Package

WP-006, WP-007 and WP-010 are COMPLETE. v0.4.1 ATC is accepted and integrated
with the documented Smart Profiles operating condition. No WP is currently active.
WP-007 completion commit: 9f3c9cdd5bcbdd89de05071a687780247aa10482.

WP-006 v0.2.0: official validation/package and maintainer presentation,
interaction, edge-touch and iCUE foreground-window continuity checks passed.
Low-light: PASS - maintainer explicitly confirmed v0.2.0 under usual dim lighting.
Implementation integrated and remote-verified at b77acfa7863e0d0a03bf6ca50ebe279300a114bc.
Human-Maintainer final acceptance was granted on 2026-09-25. WP-007 was subsequently authorized for navigation architecture.

Completed integration commits:

- XEE-WP-006 implementation/evidence: `b77acfa7863e0d0a03bf6ca50ebe279300a114bc`

- XEE-WP-001: `89959f95aa179ed1e73094a08392dc671871f27d`
- XEE-WP-002: `986ef1bc9719143469632c51e0bb25c4ff8a0020`
- XEE-WP-002A: `6f896f8c358cc2073541e274acc49d54cdd7da88`
- README branding/integration follow-up: `fe76e225541b23889b4ef3ebbdd076d5c0e10a1f`
- XEE-WP-003 kickoff: `1f68837016c5fe2c4643f08c0f16677c236feaed`
- XEE-WP-003 evidence: `0bef15a592b79bf632bd34225b20f9caddfaeee2`
- XEE-WP-004 kickoff: `fb34cf6269c3a11671db90da13c3c199d4f04391`
- XEE-WP-004 evidence: `e93c41c82b033fb9ee37bd88cf3297ae9577ddbc`
- XEE-WP-005 kickoff: `82e8d56ec0530991dee8eeea70daf87723a2b199`
- XEE-WP-005 evidence: `039e208240f0de99c91779725bb3887d504d6eb1`

The completed WP-007 contract is stored at:

`project-system/work-packages/XEE-WP-007.md`

The completed WP-006 contract is stored at:

`project-system/work-packages/XEE-WP-006.md`

## Queue rules

- Only one primary Work Package is executed at a time unless the Human Maintainer explicitly authorises parallel work.
- A roadmap entry is not authority to execute.
- Scope expansion requires a new or replaced Work Package.
- Physical device changes are performed by the Human Maintainer.
- AI roles do not stage, commit, push, tag or release.
- Public-repository safety applies to every Work Package.
- Branding is governed by the approved XEE-WP-002A baseline and must not imply official CORSAIR affiliation.

Integration verified: `3eb0b44dcfa3e4f3044bb092d03d670d4889f28e` on local main and GitHub main.
WP-010 was subsequently authorized explicitly; other planned WPs remain inactive.

WP-010 integration verified on local and remote main: `c5a97083e91afa03cb3fe6002f69e910ff72695e`.
