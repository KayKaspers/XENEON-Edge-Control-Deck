# Windows Display and Touch Baseline — CORSAIR XENEON EDGE

- **Work Package:** XEE-WP-004
- **Status:** Evidence collection complete; ready for Nova review
- **Date started:** 2026-09-24
- **Authority:** Windows observations and reversible tests supplied by the Human Maintainer
- **Public-safety rule:** No unique PnP instance IDs or unnecessary machine identifiers

## 1. Evidence semantics

| Class | Meaning |
|---|---|
| `MANUFACTURER` | vendor-published reference |
| `WINDOWS_OBSERVED` | directly observed in Windows |
| `TESTED` | verified through a controlled practical test |
| `DERIVED` | safe conclusion from observed/tested facts and documented topology |
| `UNKNOWN` | not yet verified |

```text
MANUFACTURER != WINDOWS_OBSERVED
DISPLAY_PRESENT != TOUCH_MAPPED
USB_CONNECTED != USB_DATA_VERIFIED
TOUCH_EVENT != CORRECT_DISPLAY_MAPPING
```

## 2. Physical baseline inherited from XEE-WP-003

```text
DISPLAY:
GPU DisplayPort
  -> supplied DisplayPort-to-HDMI cable
  -> XENEON EDGE HDMI

POWER / DATA:
USB-C dock
  -> USB-C cable
  -> XENEON EDGE
```

XEE-WP-003 established the physical topology. XEE-WP-004 verifies its Windows-visible behaviour.

## 3. Windows display enumeration

| Item | Observation | Class | Evidence |
|---|---|---|---|
| Display detected by Windows | yes | WINDOWS_OBSERVED | W4-EV-001 |
| Windows display number | 3 | WINDOWS_OBSERVED | W4-EV-001 |
| Public-safe display name | `XENON EDGE` | WINDOWS_OBSERVED | W4-EV-001 |
| Display mode | Extended | WINDOWS_OBSERVED | W4-EV-001 |
| Relative position in Windows layout | below Display 1 | WINDOWS_OBSERVED | W4-EV-001 |

The Windows-visible name is recorded exactly as observed by the Human Maintainer and is not normalised to the product branding.

## 4. Active display mode

| Item | Windows value | Class | Evidence |
|---|---|---|---|
| Resolution | 2560 × 720 | WINDOWS_OBSERVED | W4-EV-001 |
| Active signal resolution | 2560 × 720 | WINDOWS_OBSERVED | W4-EV-001 |
| Refresh rate | 60 Hz | WINDOWS_OBSERVED | W4-EV-001 |
| Orientation | Landscape | WINDOWS_OBSERVED | W4-EV-001 |
| Scale | 100% | WINDOWS_OBSERVED | W4-EV-001 |

These values match the manufacturer reference, but their status here is based on Windows observation rather than the manufacturer specification.

## 5. Touch baseline

### Initial observation

| Test | Result | Class | Evidence |
|---|---|---|---|
| Single-touch responds | yes | TESTED | W4-EV-001 |
| Touch initially affected correct physical display | no | TESTED | W4-EV-001 |
| Initial incorrect target | main monitor | TESTED | W4-EV-001 |

Touch functionality was therefore present before remapping, but the Windows touch-to-display association was initially incorrect.

### Touch mapping correction

The Human Maintainer completed Windows touchscreen identification by advancing through the displayed targets until the identification prompt appeared on the XENEON EDGE and then touching that display.

| Test | Result | Class | Evidence |
|---|---|---|---|
| Windows touchscreen identification completed | yes | TESTED | W4-EV-002 |
| Touch mapped to XENEON EDGE after setup | yes | TESTED | W4-EV-002 |
| Touch mapping issue | resolved | DERIVED | W4-EV-002 |

The procedure matches CORSAIR's published XENEON EDGE setup guidance.

## 6. USB-C touch/data role

### Observed topology

```text
VIDEO:
GPU DisplayPort
  -> DisplayPort-to-HDMI
  -> XENEON EDGE HDMI

POWER / USB DATA:
USB-C dock
  -> USB-C
  -> XENEON EDGE
```

### Manufacturer cross-check

CORSAIR documents that:

- the XENEON EDGE HDMI port is used for video display only;
- in the two-cable connection mode, HDMI-to-DisplayPort carries video;
- the USB-C connection provides power and data transfer;
- a charging-only USB-C connection disables touch functionality.

Official reference:

- https://www.corsair.com/de/de/explorer/gamer/monitors/corsair-xeneon-edge/

### Evidence conclusion

The Human Maintainer observed working touch while the video signal is supplied through the separate DisplayPort-to-HDMI path.

Therefore:

| Claim | Result | Class | Evidence |
|---|---|---|---|
| HDMI path carries display signal | yes | WINDOWS_OBSERVED / OBSERVED | W4-EV-001 / XEE-WP-003 |
| Touch input is operational | yes | TESTED | W4-EV-001 |
| USB-C connection provides the required touch/USB data path | yes | DERIVED | W4-EV-001 + W4-EV-003 |
| Destructive or power-loss cable isolation required | no | DERIVED | W4-EV-003 |

```text
HDMI = VIDEO
USB-C = POWER + DATA
WORKING TOUCH + SEPARATE HDMI VIDEO
    -> USB-C DATA ROLE ESTABLISHED
```

A USB-C disconnect test is intentionally not required because the same connection also supplies power, making simple removal an ambiguous functional test.

## 7. Multi-touch

The Human Maintainer tested simultaneous touch input in the baseline Windows configuration.

| Test | Observation | Class |
|---|---|---|
| Two simultaneous touch points | works | TESTED |
| Three simultaneous touch points | works | TESTED |
| Four simultaneous touch points | works | TESTED |
| Five simultaneous touch points | works | TESTED |
| Maximum practically observed | 5 simultaneous touch points | TESTED |

This practical result is consistent with the manufacturer-advertised five-point capacitive touch capability.

## 8. Deferred to XEE-WP-005

| Question | State |
|---|---|
| Does iCUE detect the device? | DEFERRED |
| Installed iCUE version | DEFERRED |
| Firmware version | DEFERRED |
| Firmware update status | DEFERRED |
| Vendor-specific widgets/functions | DEFERRED |

No iCUE or firmware conclusion is promoted into XEE-WP-004.

## 9. Evidence index

| Evidence ID | Type | Public status | Description |
|---|---|---|---|
| W4-EV-001 | Human-Maintainer Windows observation and touch test | SANITISED SUMMARY | Display 3, extended layout, 2560×720, 60 Hz, 100% scaling, landscape, initial touch mapping and practical 1–5 point touch observations. |
| W4-EV-002 | Human-Maintainer touch mapping correction | SANITISED SUMMARY | Windows touchscreen identification completed; XENEON EDGE assigned as the touch target. |
| W4-EV-003 | CORSAIR manufacturer documentation cross-check | PUBLIC | Official XENEON EDGE quick-start documentation defining HDMI as video-only and USB-C as power/data in the two-cable topology. |

## 10. Completion checklist

- [x] Windows display detection recorded
- [x] active resolution verified
- [x] active signal resolution verified
- [x] refresh rate verified
- [x] orientation verified
- [x] Windows layout position recorded
- [x] scaling recorded
- [x] single-touch behaviour verified
- [x] initial touch mapping problem documented
- [x] correct physical display mapping established
- [x] USB-C touch/data role established
- [x] practical multi-touch behaviour recorded through five points
- [x] Windows observations separated from manufacturer facts
- [x] iCUE/firmware deferred to WP-005
- [x] no unique machine/device identifiers committed

## 11. Current WP-004 assessment

The Windows display and touch baseline is sufficiently documented for Nova review.

```text
WINDOWS DISPLAY = VERIFIED
ACTIVE MODE = 2560 x 720 @ 60 Hz
WINDOWS SCALE = 100%
ORIENTATION = LANDSCAPE
DISPLAY MODE = EXTENDED
TOUCH = WORKING
TOUCH MAPPING = CORRECTED
MULTI-TOUCH = 5 POINTS PRACTICALLY OBSERVED
USB-C DATA ROLE = ESTABLISHED
ICUE / FIRMWARE = DEFERRED TO XEE-WP-005
```
