# XEE-WP-006 — Base Control Deck

**SESSION:** SAME_SESSION_RECOMMENDED
**STATUS:** ACTIVE
**Prompt profile:** Standard (B2)
**Type:** implementation / interaction / CDS consumer
**Date:** 2026-09-24

## 1. Goal

Build and practically verify the first reusable, CDS-informed control surface for the real CORSAIR XENEON EDGE.

XEE-WP-006 converts the verified hardware, Windows and iCUE baselines into a working project-owned base deck without implementing Star Citizen, OBS Studio, Discord or final navigation architecture.

The preferred implementation path is a project-owned custom iCUE widget because the verified iCUE baseline supports imported `.icuewidget` packages and the official CORSAIR widget model allows HTML, CSS and JavaScript.

## 2. Preconditions

- XEE-WP-002 complete
- XEE-WP-004 complete and Human-Maintainer accepted
- XEE-WP-005 complete and Human-Maintainer accepted
- M3 — Verified device baseline achieved
- real XENEON EDGE connected and usable
- Windows display/touch baseline functioning
- iCUE 5.51.42 baseline functioning
- XENEON device version 5.51.1 recorded
- public-repository safety rules active

## 3. Authority and design boundary

NDF owns development governance.

CDS remains design/UX authority under the existing project target-state assumption.

The project-local XENEON Product Profile governs device/channel expression.

XEE-WP-006 owns only the first reusable base surface.

```text
CDS SEMANTICS
    ↓
XENEON PRODUCT PROFILE
    ↓
BASE CONTROL DECK
    ↓
LATER CONSUMER EXTENSIONS
```

XEE-WP-006 must not redefine CDS semantics merely because the iCUE widget runtime has implementation constraints.

## 4. Implementation direction

### Preferred runtime

Primary implementation path:

**project-owned custom iCUE widget**

Official manufacturer documentation establishes that custom widgets:

- use HTML, CSS and JavaScript;
- run in a Chromium-based QtWebEngine environment;
- require at minimum `index.html` and `manifest.json`;
- can be validated and packaged with CORSAIR's WidgetBuilder CLI;
- are imported into iCUE as `.icuewidget` packages.

The source is expected to live under:

```text
widgets/xee-base-deck/
```

The exact source files are created during execution, not during kickoff.

### Target widget size

Preferred first-device target:

**XENEON EDGE horizontal Extra Large widget surface**

Manufacturer reference documents horizontal XENEON widget sizes up to approximately `2536 × 696`.

This is a manufacturer/runtime reference, not yet a project usability conclusion.

The actual rendered size must be verified on the real device.

## 5. Base-deck composition

The first base deck should implement a reusable single-surface composition rather than the final application hierarchy.

Target zones:

```text
┌─────────────────────────────────────────────────────────────┐
│ IDENTITY / CONTEXT / STATUS                                 │
├───────────────────────┬─────────────────────────────────────┤
│ PRIMARY CONTROLS      │ STATUS / STATE / SECONDARY REGION   │
│                       │                                     │
└───────────────────────┴─────────────────────────────────────┘
```

The composition may evolve during real-device testing.

WP-007 owns final page/deck hierarchy and global navigation architecture.

## 6. Required reusable semantics

The base deck must practically exercise at least these shared concepts:

### Action control

A clearly labelled touch action that produces visible local interaction feedback.

The WP-006 prototype action remains local/demo-only unless a harmless project-local test action is separately justified.

```text
LOCAL FEEDBACK != EXTERNAL ACTION CONFIRMED
```

### Stateful / toggle control

A control that demonstrates a perceivable state using more than colour alone.

The state must be labelled in text and/or shape/icon.

### Status indicator

At least these states must be representable:

- known/ready;
- warning/attention;
- unknown/unverified.

```text
UNKNOWN != HEALTHY
UNVERIFIED != VERIFIED
```

### Selection control

A simple selection/segmented interaction that visibly identifies the current local selection.

It must not imply application state.

## 7. Visual baseline

Use the Human-Maintainer-approved project identity as the initial visual baseline:

- XENEON Dark `#0B0B0B`
- Surface `#1A1A1A`
- Slate `#2A2F36`
- White `#FFFFFF`
- Accent Yellow `#FFD600`

Typography direction:

- Inter for UI text when available;
- system-safe fallback such as Segoe UI / sans-serif;
- Exo 2 may be used for restrained display/identity text when locally available.

Do not commit or redistribute font files.

No CORSAIR sail logo is added to the independent project UI.

## 8. Touch-target validation

XEE-WP-002 intentionally deferred exact touch-target dimensions until real-device testing.

WP-006 therefore introduces a **candidate**, not an authority claim:

- candidate minimum primary touch dimension: `96 px`;
- larger primary controls are preferred where layout allows;
- spacing must reduce accidental neighbouring activation.

The candidate is accepted only if practical real-device testing supports it.

If testing shows that 96 px is too small or unnecessarily large, record and use the validated project-local value.

```text
CANDIDATE SIZE != VALIDATED SIZE
```

## 9. Accessibility and truthful-state requirements

The implementation must preserve:

- no colour-only meaning;
- readable labels for important controls;
- visible current selection/state;
- distinguishable warning/unknown state;
- meaningful pressed/focus feedback;
- no hidden destructive action;
- no false external-state confirmation;
- sufficient readability at normal seated distance.

## 10. Local-first and security constraints

The initial base widget must:

- function without an external cloud runtime;
- avoid remote scripts, remote stylesheets and CDNs;
- avoid credentials, tokens and webhooks;
- avoid account-specific data;
- avoid precise location data;
- avoid unnecessary system identifiers.

External network data is out of scope for the first base deck.

## 11. Required execution

### 11.1 Toolchain

Verify or install the official WidgetBuilder CLI under Human-Maintainer control.

Record:

- source of the tool;
- observed CLI version if exposed;
- successful scaffold/validation/package operations.

### 11.2 Source scaffold

Create a project-owned widget source with at least:

```text
widgets/xee-base-deck/
├── manifest.json
├── index.html
└── README.md
```

Additional local CSS, JavaScript and image assets may be added when justified.

### 11.3 Validation and package

The source must:

- pass the official widget validation step;
- package into an `.icuewidget` artifact;
- be importable by the installed iCUE version.

Generated distribution artifacts must be reviewed before public commit.

### 11.4 Real-device verification

Import the package into iCUE and verify on the physical XENEON EDGE:

- render success;
- correct aspect/fit;
- touch response;
- primary touch-target usability;
- accidental activation risk;
- readability;
- state distinction;
- low-light behaviour;
- operation after the iCUE foreground window is closed.

## 12. Boundary to XEE-WP-007

WP-006 may implement a **temporary single-page base shell**.

XEE-WP-007 owns:

- final Home hierarchy;
- Back/Home navigation rules;
- deck/page hierarchy;
- domain switching;
- persistent navigation placement;
- page transition rules;
- final deck naming architecture.

```text
BASE SURFACE != FINAL NAVIGATION ARCHITECTURE
```

## 13. Boundary to application Work Packages

XEE-WP-006 does not implement:

- Star Citizen actions;
- OBS actions;
- Discord actions;
- telemetry integrations;
- application-specific hotkeys;
- application state feedback.

Those remain Consumer Extensions owned by later Work Packages.

## 14. Evidence model

| Class | Meaning |
|---|---|
| `DESIGN_BASELINE` | project-approved design/profile rule |
| `MANUFACTURER_REFERENCE` | official CORSAIR/Elgato widget-runtime reference |
| `IMPLEMENTED` | exists in the local widget source/package |
| `VALIDATED` | passes tool/runtime validation |
| `TESTED` | behaviour practically verified on the real XENEON EDGE |
| `DERIVED` | safe conclusion from observed/tested facts |
| `UNKNOWN` | not yet verified |

```text
IMPLEMENTED != VALIDATED
VALIDATED != DEVICE_TESTED
LOCAL_FEEDBACK != EXTERNAL_STATE_CONFIRMED
BASE_SURFACE != FINAL_NAVIGATION_ARCHITECTURE
```

## 15. Acceptance criteria

- [ ] XEE-WP-005 is reconciled to `COMPLETE`.
- [ ] M3 — Verified device baseline is reconciled to `ACHIEVED`.
- [ ] XEE-WP-006 is the sole active Work Package.
- [ ] official custom-widget development references are recorded.
- [ ] WidgetBuilder CLI availability/toolchain is recorded.
- [ ] project-owned base-widget source is created.
- [ ] `manifest.json` and `index.html` exist.
- [ ] base widget has no mandatory external runtime/network dependency.
- [ ] base composition reflects the XENEON Product Profile.
- [ ] action-control semantics are implemented.
- [ ] stateful/toggle semantics are implemented.
- [ ] status semantics including unknown/unverified are implemented.
- [ ] selection semantics are implemented.
- [ ] no colour-only critical meaning is used.
- [ ] candidate touch-target sizing is practically tested and validated or adjusted.
- [ ] widget passes official validation.
- [ ] `.icuewidget` package is created.
- [ ] widget imports successfully into iCUE.
- [ ] widget renders successfully on the physical XENEON EDGE.
- [ ] touch interaction is practically verified.
- [ ] readability is practically verified.
- [ ] low-light behaviour is observed.
- [ ] foreground iCUE window is not required for the tested base surface.
- [ ] no application-specific binding is implemented.
- [ ] final navigation hierarchy is deferred to XEE-WP-007.
- [ ] public-repository safety remains intact.

## 16. STOP conditions

Stop and escalate if:

- official WidgetBuilder validation cannot be completed;
- packaging requires undocumented or unsupported modification;
- importing the widget destabilises iCUE or the XENEON EDGE;
- the widget requires credentials or secret-bearing configuration;
- the implementation unexpectedly requires a cloud runtime;
- touch targets cannot be made reliably usable within the target surface;
- the implementation requires application-specific bindings to demonstrate the base surface;
- a final navigation architecture is being designed inside WP-006;
- evidence contains sensitive local information.

## 17. Human-Maintainer gates

The Human Maintainer:

- installs/executes the official WidgetBuilder toolchain;
- imports the generated widget into iCUE;
- performs all physical-device tests;
- approves local changes;
- performs all Git publication actions.

Nova:

- defines the base-deck contract;
- prepares/reviews widget source and documentation;
- interprets public-safe device evidence;
- reviews completion against this Work Package.

Expected kickoff commit:

`feat(deck): start CDS-based XENEON base control deck`

The implementation/evidence commit is defined after the first real base widget has been built and tested.
