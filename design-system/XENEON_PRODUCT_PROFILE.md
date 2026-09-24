# XENEON Product Profile

- **Project:** XENEON Edge Control Deck
- **Work Package:** XEE-WP-002
- **Status:** Project-local target-state Product Profile
- **Formal CDS approval:** Not claimed
- **Pinned CDS revision:** `d8b5857e1eda2066e61fda47b694afbc466aa6d8`

## Purpose

The XENEON Product Profile translates shared CDS concepts into the constraints of the CORSAIR XENEON EDGE without redefining shared meaning.

## Target channel

Primary channel:

**Interactive secondary touchscreen control surface**

Target hardware baseline:

- 14.5-inch display
- 2560 × 720 native resolution
- 32:9 aspect ratio
- 60 Hz
- capacitive 5-point touch
- landscape use as primary control-deck orientation
- vertical orientation remains technically possible but is not the primary profile baseline

## Profile principles

1. **Touch first:** actions must be operable without requiring mouse precision.
2. **Glanceable:** status and control state should be understandable during gameplay or streaming.
3. **Low interruption:** the deck should minimize attention shifts away from the main display.
4. **Semantic consistency:** the same state means the same thing across decks.
5. **No colour-only meaning:** state is communicated using at least one additional carrier such as text, icon, shape or explicit state label.
6. **Local-first:** core interaction should not require a cloud runtime.
7. **Reversible navigation:** users must be able to return to a known base state.
8. **No hidden destructive action:** irreversible or disruptive actions require explicit treatment.
9. **Evidence before confidence:** unverified device behaviour stays labelled unverified.
10. **Application separation:** Star Citizen, OBS and Discord remain distinct consumer domains.

## Geometry and density

The 32:9 format encourages horizontal grouping.

Preferred information architecture:

```text
GLOBAL / NAVIGATION
        │
        ├── PRIMARY ACTION REGION
        ├── CONTEXT / STATUS REGION
        └── SECONDARY ACTION REGION
```

Exact grid values, spacing values and touch-target dimensions are intentionally deferred until real-device validation.

Reason:

A paper value is not accepted as a device usability fact without practical touch testing.

## Interaction model

### Primary actions

High-frequency controls that should be reachable quickly and have obvious state feedback.

### Secondary actions

Lower-frequency controls that may be grouped behind a dedicated deck or context.

### Toggles

A toggle must make the current state perceivable.

The user must not have to infer state only from colour.

### Momentary actions

Momentary actions must distinguish "action sent" from "state confirmed" where the application cannot provide state feedback.

```text
ACTION SENT != STATE CONFIRMED
```

### Dangerous or disruptive actions

Examples may later include:

- stop stream;
- exit/close;
- destructive local automation;
- actions with major gameplay consequences.

They require a deliberate pattern appropriate to the actual risk.

## Navigation model

Target top-level deck families:

```text
HOME
├── STAR CITIZEN
├── OBS
├── DISCORD
└── SYSTEM
```

Star Citizen sub-decks:

```text
STAR CITIZEN
├── FLIGHT
├── COMBAT
├── MINING
├── SALVAGE
├── INDUSTRIAL / CARGO
└── SYSTEM / UTILITY
```

Navigation should preserve:

- clear current location;
- reliable Home/Back path;
- stable placement of global navigation where technically feasible;
- no ambiguous unlabeled icon-only navigation for critical paths.

## Status semantics

The profile preserves the CDS truthfulness invariants:

```text
UNKNOWN != HEALTHY
STALE != CURRENT
UNVERIFIED != VERIFIED
```

Consumer-specific states may be added, but they must not collapse these distinctions.

## Feedback model

Where supported, actions should provide:

- immediate local interaction feedback;
- state feedback when the target application exposes state;
- an explicit unknown/unconfirmed state when it does not.

A local button animation alone is not evidence that the target application changed state.

## Low-light / gaming use

The deck is expected to be used in low-light environments.

The final visual treatment must therefore consider:

- glare;
- excessive brightness;
- contrast;
- visual distraction;
- high-salience warnings;
- readable text at normal seated distance.

Concrete colours and brightness values belong to later design/real-device work, not this contract.

## Accessibility constraints

The Product Profile must not weaken CDS accessibility obligations.

At minimum for this project:

- no colour-only meaning;
- readable labels for important actions;
- visible focus/selection where relevant to the implementation;
- touch targets validated on the actual device;
- dangerous actions must be distinguishable from routine actions;
- status feedback must not depend on visual nuance alone where another carrier is practical.

## Product-specific values

No visual token values, palette, font family, logo or icon language are chosen in XEE-WP-002.

Those choices belong to **XEE-WP-002A** and later visual implementation WPs.

## Validation requirements

Before this profile is treated as practically validated, evidence must cover:

- real-device touch reachability;
- readability;
- navigation comprehension;
- accidental activation risk;
- low-light behaviour;
- state feedback;
- at least one implemented consumer deck.

## Formal claim boundary

This profile is project-local and target-state-oriented.

It is not represented as:

- an officially approved CDS Product Profile;
- a CDS Candidate artifact;
- a Stable CDS artifact;
- a formal CDS conformance record.
