# Hardware Baseline — CORSAIR XENEON EDGE

- **Work Package:** XEE-WP-003
- **Status:** Evidence collection active
- **Date started:** 2026-09-24
- **Authority:** Real-device observations supplied by the Human Maintainer
- **Public-safety rule:** No serial numbers or unnecessary unique identifiers

## 1. Evidence semantics

This document distinguishes:

| Class | Meaning |
|---|---|
| `MANUFACTURER` | Published manufacturer specification |
| `OBSERVED` | Directly observed on the real device/setup |
| `DERIVED` | Safe conclusion derived from observed evidence |
| `UNKNOWN` | Not yet verified |

```text
MANUFACTURER != OBSERVED
PHYSICALLY_CONNECTED != FUNCTIONALLY_VERIFIED
WP-003 != WINDOWS_VERIFICATION
WP-003 != ICUE_VERIFICATION
```

## 2. Manufacturer baseline

The project reference currently records the following manufacturer baseline:

| Item | Manufacturer baseline | Class |
|---|---|---|
| Product | CORSAIR XENEON EDGE | MANUFACTURER |
| Screen size | 14.5 inch | MANUFACTURER |
| Native resolution | 2560 × 720 | MANUFACTURER |
| Aspect ratio | 32:9 | MANUFACTURER |
| Refresh rate | 60 Hz | MANUFACTURER |
| Touch | 5-point capacitive | MANUFACTURER |
| Display input | HDMI / USB-C DisplayPort Alt Mode | MANUFACTURER |
| Orientation | horizontal / vertical | MANUFACTURER |
| iCUE | supported | MANUFACTURER |

These values are references only. WP-003 does not promote them to real-device observations unless the physical unit or setup supports a direct observation.

## 3. Real device identity

| Item | Observation | Class | Evidence |
|---|---|---|---|
| Product name | CORSAIR XENEON EDGE | OBSERVED | HW-EV-001 |
| Model / part number | not recorded during current inspection | UNKNOWN | — |
| Serial number | **DO NOT RECORD PUBLICLY** | — | private-only if ever needed |
| Physical colour/finish | not recorded during current inspection | UNKNOWN | — |
| Stand / mounting hardware | original CORSAIR stand | OBSERVED | HW-EV-001 |
| Current orientation | horizontal | OBSERVED | HW-EV-001 |

## 4. Actual physical connection topology

### 4.1 Power path

```text
USB-C dock
   │
   └── USB-C cable
          │
          ▼
   CORSAIR XENEON EDGE
```

| From | Cable / adapter | To | Class |
|---|---|---|---|
| USB-C dock | USB-C cable | XENEON EDGE | OBSERVED |

The dock is currently used as the power source/path for the XENEON EDGE. WP-003 does not infer additional USB data behaviour from this physical connection.

### 4.2 Display path

```text
Graphics card
   │
   └── DisplayPort output
          │
          └── DisplayPort-to-HDMI cable
                 │
                 ▼
          HDMI input on XENEON EDGE
```

| From | Cable / adapter | To | Class |
|---|---|---|---|
| Graphics card DisplayPort output | DisplayPort-to-HDMI cable | XENEON EDGE HDMI input | OBSERVED |

The display connection is direct between the graphics card and the XENEON EDGE. The USB-C dock is not in the observed display-signal path.

### 4.3 Touch / USB data path

```text
USB-C dock
   │
   └── USB-C cable
          │
          ▼
   CORSAIR XENEON EDGE
          │
          └── touch / USB data role: NOT YET VERIFIED
```

| From | Cable / adapter | To | Class |
|---|---|---|---|
| USB-C dock | USB-C cable | XENEON EDGE | OBSERVED |
| USB-C connection | possible touch / USB data transport | XENEON EDGE | UNKNOWN |

The Human Maintainer suspects that the same USB-C connection used for power also carries the touch/USB data path. This is **not yet verified** and is therefore not promoted to `OBSERVED` or `DERIVED`.

Functional touch/data verification belongs to XEE-WP-004.

### 4.4 Hub / dock / adapter chain

| Component | Role | In actual path? | Class |
|---|---|---:|---|
| USB-C dock | power path to XENEON EDGE; possible data path not yet verified | yes | OBSERVED |
| DisplayPort-to-HDMI cable | direct graphics-card-to-display signal conversion/connection | yes | OBSERVED |
| Additional display dock/hub | none reported | no | OBSERVED |

### 4.5 Unused / unknown physical connections

| Port / path | State | Note |
|---|---|---|
| Unused physical connections | none reported by Human Maintainer | No unused connection currently identified |
| Touch / USB data role of USB-C path | UNKNOWN | physical USB-C connection exists; functional data role not yet verified |

## 5. Physical installation

| Item | Observation | Class |
|---|---|---|
| Orientation | horizontal | OBSERVED |
| Position | below the main monitor | OBSERVED |
| Stand / mount | original CORSAIR stand | OBSERVED |
| Cable routing relevant to reproducibility | USB-C cable to dock; DisplayPort-to-HDMI cable directly to graphics card | OBSERVED |
| Direct PC connection or intermediate device | display path direct to graphics card; USB-C path uses dock | OBSERVED |

## 6. Supplied and actually used accessories

Do not assume that an included accessory is part of the real setup.

| Accessory / cable | Supplied | Actually used | Observation |
|---|---:|---:|---|
| USB-C cable | yes | yes | used between USB-C dock and XENEON EDGE |
| DisplayPort-to-HDMI cable | yes | yes | used directly between graphics card and XENEON EDGE |
| Other supplied accessories | not recorded during current inspection | unknown | UNKNOWN |

## 7. Real-device observations

Record only physical observations here.

| ID | Observation | Class | Evidence reference |
|---|---|---|---|
| HW-OBS-001 | Device is identified as CORSAIR XENEON EDGE | OBSERVED | HW-EV-001 |
| HW-OBS-002 | Device is installed horizontally | OBSERVED | HW-EV-001 |
| HW-OBS-003 | Device uses the original stand and is positioned below the main monitor | OBSERVED | HW-EV-001 |
| HW-OBS-004 | USB-C cable connects the XENEON EDGE to a USB-C dock used for the power path | OBSERVED | HW-EV-001 |
| HW-OBS-005 | Display path is graphics card DisplayPort directly to XENEON EDGE HDMI via a DisplayPort-to-HDMI cable | OBSERVED | HW-EV-001 |
| HW-OBS-006 | No additional hub/dock is present in the observed display path | OBSERVED | HW-EV-001 |
| HW-OBS-007 | Human Maintainer reports no unused physical connection in the current setup | OBSERVED | HW-EV-001 |
| HW-OBS-008 | Touch/USB data transport over the USB-C connection is suspected but not yet verified | UNKNOWN | HW-EV-001 |

## 8. Unknowns / deferred verification

The following belong to later Work Packages unless they can be answered purely by physical inspection:

| Question | Owner | State |
|---|---|---|
| Does Windows enumerate the device correctly? | XEE-WP-004 | DEFERRED |
| Is 2560 × 720 active in Windows? | XEE-WP-004 | DEFERRED |
| Is 60 Hz active? | XEE-WP-004 | DEFERRED |
| Does the USB-C connection actually carry touch/USB data? | XEE-WP-004 | DEFERRED |
| Does touch map to the correct display? | XEE-WP-004 | DEFERRED |
| How many simultaneous touch points work in practice? | XEE-WP-004 | DEFERRED |
| Does iCUE detect the unit? | XEE-WP-005 | DEFERRED |
| What firmware version is installed? | XEE-WP-005 | DEFERRED |
| Which iCUE actions/widgets are supported? | XEE-WP-005 | DEFERRED |

## 9. Evidence index

| Evidence ID | Type | Public status | Description |
|---|---|---|---|
| HW-EV-001 | Human-Maintainer written inspection | SANITISED SUMMARY | Public-safe written description of device identity, orientation, mounting, physical cable paths and currently unknown touch/data role. No serial number or unique identifier recorded. |

## 10. WP-003 completion checklist

- [x] public-safe device identity recorded
- [x] power path documented
- [x] display path documented
- [x] touch/data path documented or explicitly unresolved
- [x] hub/dock/adapter chain documented
- [x] orientation and mounting documented
- [x] used accessories/cables documented
- [x] observed vs manufacturer facts separated
- [x] evidence classified for public safety
- [x] Windows questions deferred to WP-004
- [x] iCUE/firmware questions deferred to WP-005
- [x] no serial number or unique device identifier committed

## 11. Current WP-003 assessment

The physical hardware baseline is sufficiently documented for Nova review.

The only unresolved connection-level question is whether the observed USB-C path also carries touch/USB data. That question is intentionally deferred to XEE-WP-004 because it requires functional operating-system verification rather than physical inspection.

```text
PHYSICAL HARDWARE BASELINE = DOCUMENTED
TOUCH / USB DATA ROLE = NOT YET VERIFIED
WP-004 REQUIRED FOR FUNCTIONAL VERIFICATION
```
