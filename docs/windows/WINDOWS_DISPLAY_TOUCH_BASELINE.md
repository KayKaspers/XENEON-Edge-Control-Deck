# Windows Display and Touch Baseline — CORSAIR XENEON EDGE

- **Work Package:** XEE-WP-004
- **Status:** Evidence collection active
- **Date started:** 2026-09-24
- **Authority:** Windows observations and reversible tests supplied by the Human Maintainer
- **Public-safety rule:** No unique PnP instance IDs or unnecessary machine identifiers

## 1. Evidence semantics

| Class | Meaning |
|---|---|
| `MANUFACTURER` | vendor-published reference |
| `WINDOWS_OBSERVED` | directly observed in Windows |
| `TESTED` | verified through a controlled reversible test |
| `DERIVED` | safe conclusion from observed/tested facts |
| `UNKNOWN` | not yet verified |

```text
MANUFACTURER != WINDOWS_OBSERVED
DISPLAY_PRESENT != TOUCH_MAPPED
USB_CONNECTED != USB_DATA_VERIFIED
```

## 2. Physical baseline inherited from XEE-WP-003

```text
DISPLAY:
GPU DisplayPort
  -> DisplayPort-to-HDMI cable
  -> XENEON EDGE HDMI

POWER / POSSIBLE DATA:
USB-C dock
  -> USB-C cable
  -> XENEON EDGE
```

Physical evidence established in XEE-WP-003 does not by itself prove the functional Windows role of either connection.

## 3. Windows display enumeration

| Item | Observation | Class | Evidence |
|---|---|---|---|
| Display detected by Windows | `TODO` | UNKNOWN | — |
| Public-safe display name | `TODO` | UNKNOWN | — |
| Display mode | `TODO: EXTEND / DUPLICATE / OTHER` | UNKNOWN | — |
| Relative position in Windows layout | `TODO` | UNKNOWN | — |

## 4. Active display mode

| Item | Windows value | Class | Evidence |
|---|---|---|---|
| Resolution | `TODO` | UNKNOWN | — |
| Refresh rate | `TODO` | UNKNOWN | — |
| Orientation | `TODO` | UNKNOWN | — |
| Scale | `TODO` | UNKNOWN | — |

Reference values from the manufacturer must not be copied into this table as Windows observations without verification.

## 5. Touch baseline

| Test | Result | Class | Evidence |
|---|---|---|---|
| Single-touch responds | `TODO` | UNKNOWN | — |
| Touch affects XENEON EDGE | `TODO` | UNKNOWN | — |
| Touch incorrectly maps to another display | `TODO` | UNKNOWN | — |
| Touch remains available with current USB-C path connected | `TODO` | UNKNOWN | — |

## 6. USB-C touch/data role

### Baseline state

```text
USB-C dock -> USB-C -> XENEON EDGE
```

### Controlled test

If safe and authorised by the Human Maintainer:

1. keep the HDMI display path connected;
2. establish that touch works in the baseline state;
3. disconnect only the USB-C path;
4. observe whether display remains and whether touch stops;
5. reconnect USB-C;
6. verify restoration.

| Step | Observation | Class |
|---|---|---|
| HDMI display remains with USB-C disconnected | `TODO` | UNKNOWN |
| Touch stops with USB-C disconnected | `TODO` | UNKNOWN |
| Touch returns after USB-C reconnect | `TODO` | UNKNOWN |
| Conclusion: USB-C carries touch/data role | `TODO` | UNKNOWN |

Do not run this test if the Human Maintainer considers power loss or reconnection unsafe for the setup. Record `NOT TESTED` instead.

## 7. Multi-touch

| Test | Observation | Class |
|---|---|---|
| Two simultaneous touch points | `TODO` | UNKNOWN |
| More than two practical touch points | `TODO` | UNKNOWN |
| Maximum practically observed | `TODO` | UNKNOWN |

This is a practical baseline, not a certification test.

## 8. Deferred to XEE-WP-005

| Question | State |
|---|---|
| Does iCUE detect the device? | DEFERRED |
| Installed iCUE version | DEFERRED |
| Firmware version | DEFERRED |
| Firmware update status | DEFERRED |
| Vendor-specific widgets/functions | DEFERRED |

## 9. Evidence index

| Evidence ID | Type | Public status | Description |
|---|---|---|---|
| `TODO` | `TODO` | `PUBLIC / SANITISED SUMMARY / PRIVATE-ONLY` | `TODO` |

## 10. Completion checklist

- [ ] Windows display detection recorded
- [ ] active resolution verified
- [ ] refresh rate verified
- [ ] orientation verified
- [ ] Windows layout position recorded
- [ ] scaling recorded if relevant
- [ ] single-touch behaviour verified
- [ ] correct physical display mapping verified
- [ ] USB-C touch/data role verified or explicitly unresolved
- [ ] practical multi-touch behaviour recorded
- [ ] Windows observations separated from manufacturer facts
- [ ] iCUE/firmware deferred to WP-005
- [ ] no unique machine/device identifiers committed
