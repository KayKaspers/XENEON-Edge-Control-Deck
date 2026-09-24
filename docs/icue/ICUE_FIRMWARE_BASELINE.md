# iCUE and Firmware Baseline — CORSAIR XENEON EDGE

- **Work Package:** XEE-WP-005
- **Status:** Evidence collection active
- **Date started:** 2026-09-24
- **Authority:** Real installed iCUE/XENEON observations supplied by the Human Maintainer
- **Public-safety rule:** No serial numbers, unique device IDs or unnecessary account information

## 1. Evidence semantics

| Class | Meaning |
|---|---|
| `MANUFACTURER_REFERENCE` | current official CORSAIR documentation/release note |
| `ICUE_OBSERVED` | directly observed in the installed iCUE instance |
| `DEVICE_OBSERVED` | directly observed for the real XENEON EDGE device |
| `TESTED` | verified through a controlled practical test |
| `DERIVED` | safe conclusion from observed/tested facts |
| `UNKNOWN` | not yet verified |

```text
LATEST_PUBLIC_VERSION != INSTALLED_VERSION
DOCUMENTED_CAPABILITY != VERIFIED_LOCAL_CAPABILITY
UPDATE_AVAILABLE != UPDATE_AUTHORISED
DETECTED != CONFIGURED
```

## 2. Inherited verified baseline

XEE-WP-004 established:

- Windows Display 3;
- Extended desktop mode;
- 2560 × 720 active and signal resolution;
- 60 Hz;
- 100% scaling;
- Landscape orientation;
- corrected touch mapping to XENEON EDGE;
- practical five-point multi-touch;
- USB-C touch/data role established as `DERIVED`.

WP-005 does not reopen those conclusions unless iCUE/vendor behaviour materially contradicts them.

## 3. Current manufacturer references

| Item | Current public reference | Class |
|---|---|---|
| Latest iCUE release identified at kickoff | 5.51.42, published 2026-09-16 | MANUFACTURER_REFERENCE |
| XENEON EDGE Stream Deck widget minimum iCUE version | 5.48.58 or newer | MANUFACTURER_REFERENCE |
| XENEON EDGE version prerequisite for Stream Deck widget | 5.48.1 or newer | MANUFACTURER_REFERENCE |
| XENEON EDGE quick-start guide | iCUE device detection, device settings, widgets and desktop/monitor mode documented | MANUFACTURER_REFERENCE |

These values are references only.

## 4. Installed iCUE baseline

Record before applying updates.

| Item | Observation | Class | Evidence |
|---|---|---|---|
| iCUE installed | `TODO` | UNKNOWN | — |
| iCUE starts normally | `TODO` | UNKNOWN | — |
| Installed iCUE version | `TODO` | UNKNOWN | — |
| XENEON EDGE detected by iCUE | `TODO` | UNKNOWN | — |
| Public-safe device name shown by iCUE | `TODO` | UNKNOWN | — |

## 5. XENEON EDGE version / firmware baseline

Preserve the label exactly as iCUE presents it.

| Item | Observation | Class | Evidence |
|---|---|---|---|
| Version label shown by iCUE | `TODO` | UNKNOWN | — |
| Version value | `TODO` | UNKNOWN | — |
| Firmware/device update offered | `TODO` | UNKNOWN | — |

Do not commit serial numbers, hardware IDs or unique USB paths.

## 6. Update status

### iCUE software

| Item | Observation | Class |
|---|---|---|
| Update check performed | `TODO` | UNKNOWN |
| Update available | `TODO` | UNKNOWN |
| Offered/current version | `TODO` | UNKNOWN |
| Update applied during WP-005 | `NO — unless separately authorised` | UNKNOWN |

### XENEON EDGE device / firmware

| Item | Observation | Class |
|---|---|---|
| Update check performed | `TODO` | UNKNOWN |
| Update available | `TODO` | UNKNOWN |
| Offered version | `TODO` | UNKNOWN |
| Update applied during WP-005 | `NO — Human-Maintainer gate required` | UNKNOWN |

```text
CHECK FOR UPDATE != APPLY UPDATE
```

## 7. Observed XENEON EDGE settings in iCUE

Record only what is actually exposed in the installed version.

| Setting / surface | Present? | Observed value / note | Class |
|---|---|---|---|
| Device/screen settings | `TODO` | `TODO` | UNKNOWN |
| Automatic rotation | `TODO` | `TODO` | UNKNOWN |
| Brightness | `TODO` | `TODO` | UNKNOWN |
| Backlight | `TODO` | `TODO` | UNKNOWN |
| Contrast | `TODO` | `TODO` | UNKNOWN |
| Colour controls | `TODO` | `TODO` | UNKNOWN |
| Device personalisation | `TODO` | `TODO` | UNKNOWN |
| iCUE widget/screen mode | `TODO` | `TODO` | UNKNOWN |
| Desktop/monitor mode | `TODO` | `TODO` | UNKNOWN |
| Display-mode switching control | `TODO` | `TODO` | UNKNOWN |
| Display-mode switching shortcut | `TODO` | `TODO` | UNKNOWN |

## 8. Widget capability inventory

Do not configure the final Base Control Deck here.

| Capability | Present? | Note | Class |
|---|---|---|---|
| Widget creation | `TODO` | `TODO` | UNKNOWN |
| Multiple widget pages | `TODO` | `TODO` | UNKNOWN |
| Widget personalisation | `TODO` | `TODO` | UNKNOWN |
| Sensor/status widgets | `TODO` | `TODO` | UNKNOWN |
| Touchpad widget | `TODO` | `TODO` | UNKNOWN |
| Virtual keyboard widget | `TODO` | `TODO` | UNKNOWN |
| Calendar/clock widgets | `TODO` | `TODO` | UNKNOWN |
| Custom/uploadable widgets | `TODO` | `TODO` | UNKNOWN |
| Stream Deck widget | `TODO` | `TODO` | UNKNOWN |

If the installed version contains additional relevant first-party XENEON widgets, add them as observed items rather than assuming a fixed catalogue.

## 9. Persistence and operating behaviour

| Test | Result | Class |
|---|---|---|
| Device settings persist when iCUE main window is closed | `TODO` | UNKNOWN |
| Desktop/monitor mode can be entered | `TODO` | UNKNOWN |
| iCUE widget mode can be restored | `TODO` | UNKNOWN |
| Relevant background iCUE process requirement observed | `TODO` | UNKNOWN |

Do not terminate services or alter startup behaviour merely to prove persistence.

## 10. Deferred to later Work Packages

| Topic | Owner | State |
|---|---|---|
| Base reusable control deck | XEE-WP-006 | DEFERRED |
| Navigation/deck architecture | XEE-WP-007 | DEFERRED |
| Discord actions | XEE-WP-008 | DEFERRED |
| OBS actions | XEE-WP-009 | DEFERRED |
| Star Citizen actions | XEE-WP-010..014 | DEFERRED |
| Telemetry implementation | XEE-WP-015 | DEFERRED |
| Final backup/export/recovery workflow | XEE-WP-017 | DEFERRED |

## 11. Evidence index

| Evidence ID | Type | Public status | Description |
|---|---|---|---|
| W5-EV-001 | Installed iCUE version and startup state | `TODO` | `TODO` |
| W5-EV-002 | XENEON EDGE detection and public-safe device name | `TODO` | `TODO` |
| W5-EV-003 | XENEON EDGE firmware/device version | `TODO` | `TODO` |
| W5-EV-004 | Software/device update status | `TODO` | `TODO` |
| W5-EV-005 | Device-settings capability inventory | `TODO` | `TODO` |
| W5-EV-006 | Widget/screen capability inventory | `TODO` | `TODO` |
| W5-EV-007 | Desktop/Widget mode behaviour | `TODO` | `TODO` |

Allowed public-status values are `PUBLIC`, `SANITISED SUMMARY` or `PRIVATE-ONLY`.

## 12. Completion checklist

- [ ] installed iCUE version recorded
- [ ] iCUE startup state recorded
- [ ] XENEON EDGE detection recorded
- [ ] public-safe iCUE device name recorded
- [ ] XENEON EDGE firmware/device version recorded or explicitly unavailable
- [ ] iCUE update availability checked
- [ ] XENEON EDGE firmware/device update availability checked
- [ ] update-authorisation boundary preserved
- [ ] XENEON-specific device settings inventoried
- [ ] widget/screen capability surfaces inventoried
- [ ] Desktop/monitor and iCUE-widget modes recorded where exposed
- [ ] manufacturer references separated from installed observations
- [ ] application bindings deferred
- [ ] Base Control Deck deferred
- [ ] public repository safety preserved
