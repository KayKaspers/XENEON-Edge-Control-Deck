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

### M1 — Governed project
Exit when XEE-WP-001 is Human-Maintainer accepted and committed.

### M2 — Designed consumer
Exit when XEE-WP-002 and XEE-WP-002A are accepted and the project has an explicit CDS consumer model plus identity.

### M3 — Verified device baseline
Exit when hardware, Windows and iCUE behaviour are documented from the real device.

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
