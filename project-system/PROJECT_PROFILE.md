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

Logo, banner and repository identity are deliberately deferred to **XEE-WP-002A**.

Branding must be:

- independent from official CORSAIR branding;
- recognizable as an independent community project;
- aligned with the CDS consumer model established by XEE-WP-002;
- suitable for public GitHub presentation.

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

**CDS Consumer Integration / Initial Development**

Active Work Package: **XEE-WP-002**

## Next milestone

Human-Maintainer acceptance of **XEE-WP-002 — CDS Consumer Integration and XENEON Product Profile**, followed by **XEE-WP-002A — Project Identity, Logo, Banner & Repository Branding**.
