# XEE-WP-005 — iCUE and Firmware Baseline

**SESSION:** SAME_SESSION_RECOMMENDED
**STATUS:** COMPLETE
**Prompt profile:** Lean (B1)
**Type:** vendor-software / firmware / evidence
**Date:** 2026-09-24

## 1. Goal

Establish a truthful, version-specific baseline of CORSAIR iCUE and the XENEON EDGE vendor integration on the real system before the project designs the reusable control deck.

The Work Package records:

- the installed iCUE version;
- whether iCUE detects the real XENEON EDGE;
- the public-safe device name shown by iCUE;
- the firmware/device version exposed by iCUE;
- update availability;
- the XENEON-specific settings, modes and widget surfaces actually available;
- practical vendor limitations relevant to XEE-WP-006 and later integrations.

No update is silently applied merely because one is available.

## 2. Preconditions

- XEE-WP-003 complete
- XEE-WP-004 complete and Human-Maintainer accepted
- real XENEON EDGE connected in the documented physical topology
- Windows display/touch baseline functioning
- CORSAIR iCUE installed or installable by the Human Maintainer
- public-repository safety rules active

## 3. Scope

Create and maintain:

- `docs/icue/ICUE_FIRMWARE_BASELINE.md`
- `evidence/XEE-WP-005/README.md`
- `project-system/work-packages/XEE-WP-005.md`

Reconcile:

- `README.md`
- `project-brain/PROJECT_BRAIN.md`
- `project-system/PROJECT_PROFILE.md`
- `project-system/REFERENCES.md`
- `project-system/WORK_PACKAGE_QUEUE.md`
- `project-system/work-packages/XEE-WP-004.md`

`ROADMAP.md` remains unchanged at kickoff because M3 is not achieved until XEE-WP-005 itself is complete.

## 4. Required verification

### 4.1 Installed iCUE baseline

Before applying any update, record:

- installed iCUE version;
- whether iCUE starts normally;
- whether the XENEON EDGE appears in iCUE;
- the public-safe name displayed for the device.

Do not infer the installed version from the current CORSAIR download page.

### 4.2 XENEON EDGE device / firmware version

Record the version information exposed by iCUE for the XENEON EDGE.

If iCUE uses a label other than `Firmware`, preserve the label actually shown instead of normalising it.

Do not publish serial numbers, unique device IDs or unnecessary USB identifiers.

### 4.3 Update availability

Use iCUE's normal update interface to check:

- iCUE software update availability;
- XENEON EDGE device/firmware update availability.

Checking is allowed.

Applying a firmware/device update requires a separate Human-Maintainer decision after the pre-update version and update offer are recorded.

```text
UPDATE_AVAILABLE != UPDATE_AUTHORISED
CHECKED != APPLIED
```

### 4.4 Vendor capability inventory

Record only capabilities actually exposed by the installed real-device integration, including where available:

- device/screen settings;
- automatic rotation;
- brightness/backlight/contrast or colour controls;
- screen/widget mode;
- desktop/monitor mode;
- widget creation and widget pages;
- device personalisation;
- display-mode switching;
- available first-party widget categories;
- XENEON-specific keyboard shortcut controls;
- persistence behaviour relevant to operation without the foreground iCUE window.

Do not claim every capability from CORSAIR documentation is locally available until it is observed.

### 4.5 Widget/version reference

Current manufacturer references at kickoff include:

- iCUE `5.51.42` as the latest public release identified on 2026-09-24;
- Stream Deck widget guidance requiring iCUE `5.48.58` or newer and an XENEON EDGE version `5.48.1` or newer for that specific integration.

These values are comparison references, not target-state assumptions.

## 5. Boundary to later Work Packages

### XEE-WP-006 owns

- the first reusable base control deck;
- project-specific deck layout;
- CDS component use on the actual control surface;
- reusable navigation/control composition.

### XEE-WP-007 and application WPs own

- deck/page architecture beyond the vendor capability baseline;
- Star Citizen actions;
- OBS actions;
- Discord actions;
- telemetry integrations;
- project-specific application bindings.

### XEE-WP-017 owns

- final backup/export/recovery workflow.

WP-005 may record what export/profile mechanisms exist, but does not build the complete recovery solution.

## 6. Acceptance criteria

- [x] XEE-WP-004 is reconciled to `COMPLETE`.
- [x] XEE-WP-005 is the sole active Work Package.
- [x] Installed iCUE version is recorded from the real system.
- [x] iCUE startup state is recorded.
- [x] XENEON EDGE detection in iCUE is recorded.
- [x] Public-safe device name shown by iCUE is recorded.
- [x] XENEON EDGE firmware/device version exposed by iCUE is recorded or explicitly unavailable.
- [x] iCUE software update availability is checked and recorded.
- [x] XENEON EDGE firmware/device update availability is checked and recorded.
- [x] No firmware/device update is applied without a Human-Maintainer update gate.
- [x] XENEON-specific settings actually exposed by iCUE are inventoried.
- [x] Widget/screen control surfaces actually exposed by iCUE are inventoried.
- [x] Desktop/monitor vs iCUE-widget mode behaviour is recorded where exposed.
- [x] Version-sensitive manufacturer references are separated from installed observations.
- [x] No Star Citizen, OBS or Discord bindings are implemented.
- [x] No project-specific Base Control Deck is built.
- [x] Public-repository safety remains intact.

## 7. Non-goals

- no Star Citizen bindings
- no OBS bindings
- no Discord bindings
- no final widget layout design
- no CDS visual implementation beyond observing vendor surfaces
- no final backup/recovery workflow
- no registry modification
- no unsupported firmware flashing
- no forced downgrade
- no hidden or undocumented update mechanism
- no publication of serial numbers or unique identifiers

## 8. Evidence model

| Class | Meaning |
|---|---|
| `MANUFACTURER_REFERENCE` | current official CORSAIR documentation/release note |
| `ICUE_OBSERVED` | directly observed in the installed iCUE instance |
| `DEVICE_OBSERVED` | directly observed for the real XENEON EDGE device |
| `TESTED` | behaviour verified through a controlled practical test |
| `DERIVED` | safe conclusion from observed/tested facts |
| `UNKNOWN` | not yet verified |

```text
LATEST_PUBLIC_VERSION != INSTALLED_VERSION
DOCUMENTED_CAPABILITY != VERIFIED_LOCAL_CAPABILITY
UPDATE_AVAILABLE != UPDATE_AUTHORISED
DETECTED != CONFIGURED
WIDGET_VISIBLE != WIDGET_VALIDATED
```

## 9. STOP conditions

Stop and escalate if:

- an update is offered and applying it would change firmware/device state;
- iCUE asks for an unexpected restart, recovery, reset or forced update;
- a firmware update reports an error or the device disappears;
- device detection requires driver removal/replacement;
- evidence exposes a serial number, unique device ID or private account information;
- verification requires application-specific bindings;
- scope expands into the Base Control Deck;
- vendor behaviour is uncertain and would require unsupported assumptions.

## 10. Human-Maintainer gates

The Human Maintainer:

- performs local iCUE interactions;
- approves any software installation/update;
- explicitly decides whether an offered firmware/device update may be applied;
- performs all Git publication actions.

Nova:

- provides the verification sequence;
- records public-safe evidence supplied by the Human Maintainer;
- distinguishes installed observations from manufacturer references;
- reviews the completed baseline.

Expected kickoff commit:

`docs(icue): start XENEON iCUE and firmware baseline`

The evidence/completion commit is defined after the real iCUE/device state is inspected.

## 11. Completion record

- **Kickoff commit:** `82e8d56ec0530991dee8eeea70daf87723a2b199`
- **Evidence commit:** `039e208240f0de99c91779725bb3887d504d6eb1`
- **Nova review:** `PASS`
- **Human-Maintainer acceptance:** granted on 2026-09-24
- **Installed iCUE:** 5.51.42
- **XENEON device version:** `LCD-Touchscreen, v. 5.51.1`
- **Update result:** no iCUE or XENEON update reported available; no update applied
- **Verified vendor surfaces:** XENEON settings, multiple widget pages, custom `.icuewidget` import, Stream Deck widget, Desktop/iCUE-Widgets switching
- **Persistence result:** widgets and touch remain operational after closing the iCUE foreground window
- **Public evidence:** `SANITISED SUMMARY`; raw screenshots remain `PRIVATE-ONLY`
- **Acceptance result:** all XEE-WP-005 acceptance criteria satisfied
- **Milestone effect:** enables M3 - Verified device baseline to be reconciled to `ACHIEVED`
- **Release effect:** none
