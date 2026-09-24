# XEE-WP-004 — Windows Display and Touch Baseline

**SESSION:** SAME_SESSION_RECOMMENDED
**STATUS:** ACTIVE
**Prompt profile:** Lean (B1)
**Type:** windows / display / touch / evidence
**Date:** 2026-09-24

## 1. Goal

Establish a truthful Windows-level baseline for the real CORSAIR XENEON EDGE: display enumeration, active resolution, refresh rate, orientation, placement and touch behaviour.

The Work Package must also resolve whether the existing USB-C physical path documented in XEE-WP-003 actually carries the touch/USB data function.

## 2. Preconditions

- XEE-WP-003 complete
- physical XENEON EDGE remains connected in the documented baseline topology
- Windows is available on the implementation PC
- public-repository safety rules active

## 3. Scope

Create and maintain:

- `docs/windows/WINDOWS_DISPLAY_TOUCH_BASELINE.md`
- `evidence/XEE-WP-004/README.md`
- `project-system/work-packages/XEE-WP-004.md`

Reconcile:

- `README.md`
- `ROADMAP.md`
- `project-brain/PROJECT_BRAIN.md`
- `project-system/PROJECT_PROFILE.md`
- `project-system/WORK_PACKAGE_QUEUE.md`
- `project-system/work-packages/XEE-WP-003.md`

## 4. Required verification

### Windows display enumeration

Verify:

- that Windows detects the XENEON EDGE as a display;
- the visible display name/identifier where public-safe;
- whether it operates as extended, duplicated or disconnected;
- its relative position in Windows display layout.

Do not publish unique PnP instance paths or other unnecessary machine-specific identifiers.

### Active display mode

Verify rather than assume:

- active resolution;
- active refresh rate;
- Windows display orientation;
- scaling setting if relevant to usability.

Manufacturer values remain reference facts until Windows confirms the active mode.

### Touch / USB data

Verify:

- whether touch input is operational;
- whether the existing USB-C cable/path is required for touch;
- whether removing/disabling that path removes touch while preserving the HDMI display path, if the Human Maintainer judges such a reversible test safe;
- whether touch maps to the XENEON EDGE rather than another display.

Do not perform destructive driver or registry changes.

### Multi-touch

Verify practical multi-touch support with a simple, reversible Windows-compatible test.

The Work Package does not need to prove every manufacturer-advertised gesture; it needs to establish truthful practical behaviour.

## 5. Boundary to later Work Packages

### XEE-WP-005 owns

- iCUE detection;
- iCUE version;
- firmware version;
- firmware updates;
- vendor-specific device controls;
- vendor widgets/features.

### Application Work Packages own

- Star Citizen;
- OBS Studio;
- Discord;
- telemetry/control integrations.

## 6. Acceptance criteria

- [ ] XEE-WP-003 is reconciled to `COMPLETE`.
- [ ] XEE-WP-004 is the sole active Work Package.
- [ ] Windows display detection is recorded.
- [ ] Active resolution is verified.
- [ ] Active refresh rate is verified.
- [ ] Windows display orientation is verified.
- [ ] Windows display-layout position is recorded.
- [ ] Scaling is recorded if exposed/relevant.
- [ ] Touch functionality is verified as working or not working.
- [ ] Touch is mapped to the correct physical display or the mapping problem is explicitly documented.
- [ ] The USB-C touch/data role is verified or explicitly unresolved after safe testing.
- [ ] Practical multi-touch behaviour is recorded.
- [ ] Manufacturer facts remain separated from Windows-observed facts.
- [ ] No iCUE or firmware conclusions are promoted into WP-004.
- [ ] No application bindings are performed.
- [ ] Public-repository safety remains intact.

## 7. Non-goals

- no firmware update
- no iCUE configuration
- no driver replacement unless separately authorised
- no registry modification
- no Star Citizen configuration
- no OBS configuration
- no Discord configuration
- no telemetry implementation
- no performance benchmarking

## 8. Evidence model

| Class | Meaning |
|---|---|
| `MANUFACTURER` | vendor-published reference |
| `WINDOWS_OBSERVED` | directly observed in Windows |
| `TESTED` | behaviour verified through a controlled reversible test |
| `DERIVED` | safe conclusion from observed/tested facts |
| `UNKNOWN` | not yet verified |

```text
MANUFACTURER != WINDOWS_OBSERVED
DISPLAY_PRESENT != TOUCH_MAPPED
USB_CONNECTED != USB_DATA_VERIFIED
TOUCH_EVENT != CORRECT_DISPLAY_MAPPING
```

## 9. STOP conditions

Stop and escalate if:

- verification would require registry modification;
- verification would require driver replacement/removal;
- display loss cannot be safely reversed;
- touch testing begins affecting another device unexpectedly;
- evidence contains unique machine/device identifiers intended for public commit;
- verification requires iCUE or firmware modification;
- scope expands into application integration.

## 10. Human-Maintainer gate

The Human Maintainer performs Windows changes and physical cable tests.

Nova:

- provides the verification sequence;
- interprets public-safe evidence supplied by the Human Maintainer;
- keeps observation, test result and inference separate;
- reviews the completed Windows/touch baseline.

Expected kickoff commit:

`docs(windows): start XENEON display and touch baseline`

Completion commit will be defined after Windows evidence has been collected and reviewed.
