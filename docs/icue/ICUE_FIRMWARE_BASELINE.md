# iCUE and Firmware Baseline — CORSAIR XENEON EDGE

- **Work Package:** XEE-WP-005
- **Status:** Evidence collection complete; ready for Nova review
- **Date started:** 2026-09-24
- **Authority:** Real installed iCUE/XENEON observations and practical tests supplied by the Human Maintainer
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
WIDGET_VISIBLE != WIDGET_VALIDATED
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

These values are comparison references only.

## 4. Installed iCUE baseline

| Item | Observation | Class | Evidence |
|---|---|---|---|
| iCUE installed | yes | ICUE_OBSERVED | W5-EV-001 |
| iCUE starts normally | yes | TESTED | W5-EV-001 |
| Installed iCUE version | 5.51.42 | ICUE_OBSERVED | W5-EV-001 |
| Start with system setting | enabled | ICUE_OBSERVED | W5-EV-001 |
| XENEON EDGE detected by iCUE | yes | ICUE_OBSERVED | W5-EV-002 |
| Public-safe device name shown by iCUE | `XENEON EDGE` / update surface `XENON EDGE` | ICUE_OBSERVED | W5-EV-002 |

The installed iCUE version matches the manufacturer release reference recorded at kickoff.

## 5. XENEON EDGE version / firmware baseline

iCUE exposes the XENEON device version on the Software Updates surface as:

```text
LCD-Touchscreen, v. 5.51.1
```

| Item | Observation | Class | Evidence |
|---|---|---|---|
| Version label shown by iCUE | `LCD-Touchscreen` | DEVICE_OBSERVED | W5-EV-003 |
| Version value | 5.51.1 | DEVICE_OBSERVED | W5-EV-003 |
| Firmware/device update offered | no | DEVICE_OBSERVED | W5-EV-004 |

A preliminary verbal reading of `5.55.1` was explicitly rechecked by the Human Maintainer. The confirmed direct observation used by this baseline is `5.51.1`.

## 6. Update status

### iCUE software

| Item | Observation | Class |
|---|---|---|
| Update check performed | yes | TESTED |
| Update available | no | ICUE_OBSERVED |
| Installed/current version | 5.51.42 | ICUE_OBSERVED |
| Automatic download setting | enabled | ICUE_OBSERVED |
| Update applied during WP-005 | no | TESTED |

### XENEON EDGE device / firmware

| Item | Observation | Class |
|---|---|---|
| Update check performed | yes | TESTED |
| Update available | no | DEVICE_OBSERVED |
| Current device version | 5.51.1 | DEVICE_OBSERVED |
| Update applied during WP-005 | no | TESTED |

The Software Updates surface displayed a `Jetzt neu starten` control. No software or device update offer was reported by the Human Maintainer, the control was not activated, and its presence is not interpreted as evidence of an available XENEON update.

```text
CHECK FOR UPDATE != APPLY UPDATE
UPDATE AVAILABLE != UPDATE AUTHORISED
```

## 7. Observed XENEON EDGE settings in iCUE

Only settings directly visible in the installed version are recorded.

| Setting / surface | Present? | Observed value / note | Class |
|---|---|---|---|
| Device/screen settings | yes | XENEON-specific device settings surface present | ICUE_OBSERVED |
| Automatic rotation | yes | enabled | ICUE_OBSERVED |
| Brightness | yes | slider present; numeric value not exposed | ICUE_OBSERVED |
| Backlight | yes | separate slider present; numeric value not exposed | ICUE_OBSERVED |
| Contrast | yes | slider present; numeric value not exposed | ICUE_OBSERVED |
| Colour controls | yes | RGB controls; observed values R 151 / G 127 / B 139 | ICUE_OBSERVED |
| Restore default colour settings | yes | control present | ICUE_OBSERVED |
| Product manual control | yes | control present | ICUE_OBSERVED |
| Device personalisation | yes | page personalisation surface present | ICUE_OBSERVED |
| Theme per page | yes | configurable | ICUE_OBSERVED |
| Device background | yes | configurable | ICUE_OBSERVED |
| Widget text colour | yes | configurable | ICUE_OBSERVED |
| Widget accent colour | yes | configurable | ICUE_OBSERVED |
| Widget background | yes | configurable | ICUE_OBSERVED |
| Widget transparency | yes | configurable | ICUE_OBSERVED |
| iCUE widget/screen mode | yes | `iCUE-Widgets` mode present | ICUE_OBSERVED |
| Desktop/monitor mode | yes | `Desktop` mode present | ICUE_OBSERVED |
| Display-mode switching control | yes | mode can be switched in Screen Setup | ICUE_OBSERVED |
| Display-mode switching shortcut | yes | assignable shortcut exposed | ICUE_OBSERVED |
| Previous display/page shortcut | yes | assignable shortcut exposed | ICUE_OBSERVED |
| Next display/page shortcut | yes | assignable shortcut exposed | ICUE_OBSERVED |
| Cursor access blocking | yes | toggle present | ICUE_OBSERVED |

The device-settings surface states that these settings are automatically applied and are not linked to profiles.

## 8. Widget capability inventory

The installed XENEON integration exposes a dedicated widget editor, multiple pages and page/widget personalisation.

| Capability | Present? | Note | Class |
|---|---|---|---|
| Widget creation | yes | add-widget control present | ICUE_OBSERVED |
| Multiple widget pages | yes | multiple pages plus add-page control visible | ICUE_OBSERVED |
| Widget personalisation | yes | per-widget personalisation surface present | ICUE_OBSERVED |
| Sensor/status widgets | yes | sensor diagram, two-sensor and sensor-list surfaces visible | ICUE_OBSERVED |
| Touchpad / virtual-input widget | present as a truncated virtual-input label | exact full label not expanded from screenshot | ICUE_OBSERVED |
| Virtual keyboard widget | yes | virtual keyboard label visible in truncated form | ICUE_OBSERVED |
| Calendar/clock widgets | yes | calendar and clock/chronograph-type widgets visible | ICUE_OBSERVED |
| Custom/uploadable widgets | yes | `.icuewidget` import supported | ICUE_OBSERVED |
| Elgato Marketplace path | yes | import dialog links to Elgato Marketplace | ICUE_OBSERVED |
| Stream Deck widget | yes | visible in widget catalogue | ICUE_OBSERVED |
| Weather widget | yes | observed and configurable | ICUE_OBSERVED |
| Web URL widget | yes | visible in widget catalogue | ICUE_OBSERVED |
| iFrame widget | yes | visible in widget catalogue | ICUE_OBSERVED |
| Twitch Chat widget | yes | visible in widget catalogue | ICUE_OBSERVED |
| Application launch widget | yes | visible in widget catalogue | ICUE_OBSERVED |
| Media widgets | yes | volume/media/image-video categories visible | ICUE_OBSERVED |
| SimHub widget | yes | visible in widget catalogue | ICUE_OBSERVED |
| FPS widget | yes | visible in widget catalogue | ICUE_OBSERVED |

Additional catalogue labels were visible but truncated. This baseline does not expand truncated names without direct confirmation.

### Custom widget import

The installed version exposes a `Widget importieren` dialog that:

- accepts `.icuewidget` files;
- provides a local file-picker/drop target;
- links to widget creation guidance;
- links to Elgato Marketplace;
- warns that widgets should only be imported from trusted sources.

This establishes a supported custom-widget extension surface without claiming that any third-party widget has been installed or validated.

## 9. Persistence and operating behaviour

The Human Maintainer performed a practical foreground-window and display-mode test.

| Test | Result | Class |
|---|---|---|
| XENEON widgets remain visible after closing the iCUE main window | yes | TESTED |
| XENEON widgets continue functioning after closing the iCUE main window | yes | TESTED |
| XENEON touch continues functioning after closing the iCUE main window | yes | TESTED |
| Desktop/monitor mode can be entered | yes | TESTED |
| iCUE widget mode can be restored | yes | TESTED |
| Pages/widgets remain after returning to iCUE widget mode | yes | TESTED |
| Foreground iCUE window required for widget operation | no | DERIVED |
| Exact background process/service requirement | not directly inspected | UNKNOWN |

No iCUE service was terminated and no startup behaviour was altered during this test.

## 10. Additional iCUE surfaces observed

These are general iCUE capabilities observed during WP-005 and are not promoted into XENEON project functionality merely because they exist.

| Surface | Observation | Class |
|---|---|---|
| Dashboard | present with hardware/sensor widgets | ICUE_OBSERVED |
| Sensor logging | present with selectable motherboard/CPU/GPU sensors | ICUE_OBSERVED |
| iCUE SDK | enabled | ICUE_OBSERVED |
| Game SDK | enabled | ICUE_OBSERVED |
| Third-party plugins | plugin surface visible | ICUE_OBSERVED |
| Integrations | Philips Hue, Nanoleaf, Govee and NVIDIA Broadcast surfaces visible | ICUE_OBSERVED |

```text
GENERAL_ICUE_CAPABILITY != XENEON_IMPLEMENTED_CAPABILITY
SDK_ENABLED != APPLICATION_INTEGRATION_IMPLEMENTED
PLUGIN_VISIBLE != PLUGIN_INSTALLED
```

## 11. Deferred to later Work Packages

| Topic | Owner | State |
|---|---|---|
| Base reusable control deck | XEE-WP-006 | DEFERRED |
| Navigation/deck architecture | XEE-WP-007 | DEFERRED |
| Discord actions | XEE-WP-008 | DEFERRED |
| OBS actions | XEE-WP-009 | DEFERRED |
| Star Citizen actions | XEE-WP-010..014 | DEFERRED |
| Telemetry implementation | XEE-WP-015 | DEFERRED |
| Final backup/export/recovery workflow | XEE-WP-017 | DEFERRED |

## 12. Evidence index

| Evidence ID | Type | Public status | Description |
|---|---|---|---|
| W5-EV-001 | Installed iCUE version and startup state | SANITISED SUMMARY | iCUE starts normally; installed version 5.51.42; start-with-system setting observed enabled. |
| W5-EV-002 | XENEON EDGE detection and public-safe device name | SANITISED SUMMARY | Real XENEON device detected by iCUE; public-safe XENEON name recorded. |
| W5-EV-003 | XENEON EDGE device version | SANITISED SUMMARY | iCUE Software Updates surface shows `LCD-Touchscreen, v. 5.51.1`. |
| W5-EV-004 | Software/device update status | SANITISED SUMMARY | iCUE and XENEON update checks performed; no update reported available; no update applied. |
| W5-EV-005 | Device-settings capability inventory | SANITISED SUMMARY | Rotation, brightness, backlight, contrast, RGB, page styling and display-mode controls observed. |
| W5-EV-006 | Widget/screen capability inventory | SANITISED SUMMARY | Multi-page widget editor, sensor/media/web/Stream Deck/custom-widget surfaces and `.icuewidget` import observed. |
| W5-EV-007 | Desktop/Widget mode behaviour | SANITISED SUMMARY | Widgets and touch continue after foreground window closes; Desktop and iCUE-Widgets modes switch bidirectionally and preserve pages/widgets. |

Raw screenshots supplied during verification remain `PRIVATE-ONLY` because they contain local location, system/hardware and user-path information not required for the public repository.

## 13. Completion checklist

- [x] installed iCUE version recorded
- [x] iCUE startup state recorded
- [x] XENEON EDGE detection recorded
- [x] public-safe iCUE device name recorded
- [x] XENEON EDGE firmware/device version recorded or explicitly unavailable
- [x] iCUE update availability checked
- [x] XENEON EDGE firmware/device update availability checked
- [x] update-authorisation boundary preserved
- [x] XENEON-specific device settings inventoried
- [x] widget/screen capability surfaces inventoried
- [x] Desktop/monitor and iCUE-widget modes recorded where exposed
- [x] manufacturer references separated from installed observations
- [x] application bindings deferred
- [x] Base Control Deck deferred
- [x] public repository safety preserved

## 14. Current WP-005 assessment

The iCUE and firmware/device baseline is sufficiently documented for Nova review.

```text
ICUE = 5.51.42
ICUE STARTUP = NORMAL
XENEON DETECTED = YES
XENEON DEVICE VERSION = 5.51.1
ICUE UPDATE AVAILABLE = NO
XENEON UPDATE AVAILABLE = NO
UPDATE APPLIED = NO
ICUE WIDGET MODE = VERIFIED
DESKTOP MODE = VERIFIED
MULTIPLE WIDGET PAGES = PRESENT
CUSTOM .ICUEWIDGET IMPORT = PRESENT
STREAM DECK WIDGET = PRESENT
FOREGROUND ICUE WINDOW REQUIRED = NO
APPLICATION BINDINGS = DEFERRED
BASE CONTROL DECK = DEFERRED
```
