# Roadmap — XENEON Edge Control Deck

**Status:** Initial controlled roadmap
**Date:** 2026-09-24
**Governance:** Nova Development Framework (NDF)
**Design authority:** Core Design System (CDS)

## Purpose / Zweck

**DE:** Diese Roadmap beschreibt die geplante Entwicklung des XENEON Edge Control Deck. Sie ist eine Planungsgrundlage, keine automatische Autorisierung. Ein geplantes Work Package wird erst durch eine ausdrückliche Human-Maintainer-Entscheidung aktiv.

**EN:** This roadmap describes the planned development of the XENEON Edge Control Deck. It is a planning baseline, not automatic authorisation. A planned Work Package becomes active only through an explicit Human-Maintainer decision.

```text
PLANNED != AUTHORIZED
READY != RELEASED
```

## Development sequence / Entwicklungsfolge

### Phase 1 — Foundation

| WP | Title | Purpose |
|---|---|---|
| XEE-WP-001 | Project Bootstrap | Establish public repository structure, NDF baseline, roadmap, manifest, profile, references and Project Brain |
| XEE-WP-002 | CDS Consumer Integration and XENEON Product Profile | Define the CDS consumer boundary and XENEON-specific design contract |
| XEE-WP-002A | Project Identity — Logo, Banner & Repository Branding | Create CDS-aligned project identity and NDF-style repository presentation |

### Phase 2 — Hardware and platform baseline

| WP | Title | Purpose |
|---|---|---|
| XEE-WP-003 | Hardware Baseline | Record physical setup, connectivity and verified device capabilities |
| XEE-WP-004 | Windows Display and Touch Baseline | Establish reproducible Windows display and touch configuration |
| XEE-WP-005 | iCUE and Firmware Baseline | Record iCUE version, firmware state, available widgets and practical limitations |

### Phase 3 — Base interaction architecture

| WP | Title | Purpose |
|---|---|---|
| XEE-WP-006 | Base Control Deck | Build the first CDS-based reusable control surface |
| XEE-WP-007 | Navigation and Deck Architecture | Define page/deck hierarchy, navigation patterns and interaction rules |

### Phase 4 — Application integrations

| WP | Title | Purpose |
|---|---|---|
| XEE-WP-008 | Discord Integration | Communication controls and supported feedback |
| XEE-WP-009 | OBS Studio Integration | Streaming and recording controls |
| XEE-WP-010 | Star Citizen Flight | Core flight controls |
| XEE-WP-011 | Star Citizen Combat | Combat-oriented controls |
| XEE-WP-012 | Star Citizen Mining | Mining-oriented controls |
| XEE-WP-013 | Star Citizen Salvage | Salvage-oriented controls |
| XEE-WP-014 | Star Citizen Industrial / Cargo | Industrial, cargo and utility controls |

### Phase 5 — Observability, quality and resilience

| WP | Title | Purpose |
|---|---|---|
| XEE-WP-015 | Telemetry and System Status | System information and status surfaces |
| XEE-WP-016 | CDS Visual and UX Review | Review design consistency, touch usability and accessibility assumptions |
| XEE-WP-017 | Backup, Export and Recovery | Create documented recovery and portability path |
| XEE-WP-018 | Full System Verification | End-to-end practical verification |

### Phase 6 — First release preparation

| WP | Title | Purpose |
|---|---|---|
| XEE-WP-019 | Documentation and v1.0 Preparation | Reconcile documentation, known limitations, release evidence and licensing decision |

## Milestones

### M1 — Governed project — ACHIEVED
Achieved at Human-Maintainer integration commit `89959f95aa179ed1e73094a08392dc671871f27d`.

### M2 — Designed consumer — ACHIEVED

XEE-WP-002 is complete at Human-Maintainer integration commit `986ef1bc9719143469632c51e0bb25c4ff8a0020`.

XEE-WP-002A branding was integrated at `6f896f8c358cc2073541e274acc49d54cdd7da88` and received Nova review `GO WITH NOTES`. The README product/integration follow-up was integrated at `fe76e225541b23889b4ef3ebbdd076d5c0e10a1f`.

The project now has an explicit CDS consumer model and an integrated public identity.

### M3 — Verified device baseline — ACHIEVED
Achieved after the real-device hardware, Windows/touch and iCUE/device baselines were documented and accepted.

XEE-WP-005 evidence was integrated at Human-Maintainer commit `039e208240f0de99c91779725bb3887d504d6eb1` and received Nova review `PASS`. Human-Maintainer acceptance was granted on 2026-09-24.

### M4 — Functional control deck
Exit when the reusable base deck and navigation model work on-device.

### M5 — Primary integrations
Exit when Discord, OBS and the initial Star Citizen decks have practical verification.

### M6 — Recoverable and reviewable
Exit when backup/recovery, CDS review and system verification are complete.

### M7 — v1.0 candidate
Exit only after documentation reconciliation, licensing decision and Human-Maintainer release decision.

## Roadmap rules

- Work Packages remain small and reviewable.
- Physical device behaviour is verified on the real XENEON EDGE; assumptions are not promoted to facts.
- Star Citizen-, OBS- and Discord-specific logic stays consumer-local unless separately accepted into another authority.
- CDS target-state usage is a project assumption, not a formal conformance claim.
- No secret or personal data may enter the public repository.
- AI roles do not stage, commit, push, tag or release.
- New scope is added explicitly, never silently absorbed into an active Work Package.
