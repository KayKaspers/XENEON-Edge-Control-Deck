# Project Profile — XENEON Edge Control Deck

## Kurzbeschreibung / Summary

**DE:** XENEON Edge Control Deck ist ein öffentliches, NDF-gesteuertes und CDS-orientiertes Projekt zur reproduzierbaren Nutzung des CORSAIR XENEON EDGE als interaktives Control Deck.

**EN:** XENEON Edge Control Deck is a public, NDF-governed and CDS-oriented project for reproducibly using the CORSAIR XENEON EDGE as an interactive control deck.

## Problem

The XENEON EDGE is flexible enough to become more than a secondary display, but ad-hoc configuration creates several problems:

- application actions become difficult to reproduce;
- visual layouts diverge over time;
- iCUE capabilities and limitations can be confused with product design;
- secrets may leak through public screenshots or exports;
- Star Citizen, OBS and Discord integrations can become mixed into one unmaintainable layout;
- recovery after reinstallation or profile loss becomes difficult.

## Goal / Ziel

Create a documented, modular and reusable control-deck implementation with clear boundaries between:

```text
Hardware
  ↓
Windows
  ↓
iCUE / platform capabilities
  ↓
XENEON interaction architecture
  ↓
Application integrations
```

## Primary use cases

1. Star Citizen control surfaces
2. OBS Studio streaming and recording controls
3. Discord communication controls
4. system telemetry and status
5. local automation where justified
6. reproducible backup and recovery

## Target audience / Zielgruppe

Primary:

- owner and Human Maintainer of the project
- XENEON EDGE users with similar use cases

Secondary:

- Star Citizen players
- streamers using OBS Studio
- users interested in documented touch-control workflows

## Governance

### Development

The project uses the **Nova Development Framework (NDF)** as its development-governance baseline.

NDF governs:

- Work Packages
- scope
- acceptance criteria
- review
- evidence
- Human-Maintainer gates

### Design

The project uses the **Core Design System (CDS)** as its design/UX authority.

For project planning and implementation, CDS is treated as fully operational in its target state.

This assumption is explicitly **not** a formal CDS conformance claim.

## Roles

### Human Maintainer

Final authority for:

- scope authorisation
- normative acceptance
- local device changes
- staging
- commit
- push
- tags
- releases

### Nova

Responsible for:

- planning
- Work Package specification
- architecture support
- review
- evaluation against acceptance criteria
- documentation support

### Implementation

During the current phase, implementation is performed by the Human Maintainer with Nova guidance.

No independent AI implementation agent is required.

## Public repository policy

The repository is intentionally public.

Public-safe documentation is a design constraint from the beginning.

No secrets, credentials, private account data or unreviewed configuration exports are permitted.

See `SECURITY.md`.

## Technical baseline

Target device:

- CORSAIR XENEON EDGE 14.5-inch LCD touchscreen
- 2560 × 720 native resolution
- 32:9 aspect ratio
- 60 Hz
- 5-point capacitive touch
- HDMI and USB-C DisplayPort Alt Mode
- CORSAIR iCUE support

Baseline source: manufacturer reference recorded in `REFERENCES.md`.

## Architecture direction

The project separates:

- physical device
- operating system
- vendor integration
- reusable control-deck components and patterns
- application-specific consumer extensions
- evidence and recovery

Application-specific behaviour must not redefine CDS core semantics.

## Branding

The project identity baseline was visually approved by the Human Maintainer during **XEE-WP-002A**.

Brand direction:

- technical;
- functional;
- premium;
- community-friendly;
- dark, high-contrast and restrained;
- independent from official CORSAIR branding.

Baseline palette:

- `#0B0B0B` — XENEON Dark
- `#1A1A1A` — Surface
- `#2A2F36` — Slate
- `#FFFFFF` — White
- `#FFD600` — Accent Yellow

Typography direction:

- Exo 2 — display / branding
- Inter — UI / documentation

Image rule:

- use the real XENEON Edge product image when rights/provenance permit;
- do not AI-regenerate substitute hardware for official project branding;
- omit the product image rather than invent a replacement.

The project mark remains an independent geometric X/edge identity and must not incorporate the CORSAIR logo.

## Known risks

| Risk | Current treatment |
|---|---|
| iCUE capability differs from assumptions | Verify on the real device before designing around a feature |
| Public screenshots expose sensitive data | Sanitisation required before commit |
| Project becomes one oversized control layout | Domain/deck separation |
| CDS is used beyond its real repository maturity | Explicit target-state assumption; no false conformance claim |
| Star Citizen bindings change between game versions | Version-bound documentation and later verification |
| Raw config exports contain hidden secrets | Review before publication |
| Branding looks official or vendor-owned | Independent identity; no vendor logo in project mark |

## Non-goals

- replacing iCUE
- creating a competing design system
- making the Core ecosystem a runtime dependency
- automatically upstreaming consumer-specific work into CDS
- claiming formal product/vendor affiliation
- publishing secrets for reproducibility

## Current phase

**Star Citizen Flight integration**

Latest completed Work Package: **XEE-WP-010 - COMPLETE**

## Next milestone

WP-006 is COMPLETE at `ab71849edfa1209c807969b4668d2f6462c6701d`.
WP-007 integration verified; M4 base deck and navigation criteria satisfied.
Next: maintainer selects and authorizes further scope. Smart Profiles requires
the Stream Deck editor minimized/closed; no unconditional focus guard.

Integration verified: `3eb0b44dcfa3e4f3044bb092d03d670d4889f28e` on local main and GitHub main.
WP-010 subsequently authorized explicitly on 2026-09-25.

WP-010 integration verified on local and remote main: `c5a97083e91afa03cb3fe6002f69e910ff72695e`.
