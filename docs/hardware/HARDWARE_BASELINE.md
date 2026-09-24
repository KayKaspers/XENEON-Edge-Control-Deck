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
| Product name | `TODO` | UNKNOWN | — |
| Model / part number | `TODO` | UNKNOWN | — |
| Serial number | **DO NOT RECORD PUBLICLY** | — | private-only if ever needed |
| Physical colour/finish | `TODO` | UNKNOWN | — |
| Stand / mounting hardware | `TODO` | UNKNOWN | — |
| Current orientation | `TODO` | UNKNOWN | — |

## 4. Actual physical connection topology

### 4.1 Power path

```text
TODO
```

| From | Cable / adapter | To | Class |
|---|---|---|---|
| `TODO` | `TODO` | XENEON EDGE | UNKNOWN |

### 4.2 Display path

```text
TODO
```

| From | Cable / adapter | To | Class |
|---|---|---|---|
| `TODO` | `TODO` | XENEON EDGE | UNKNOWN |

### 4.3 Touch / USB data path

```text
TODO
```

| From | Cable / adapter | To | Class |
|---|---|---|---|
| `TODO` | `TODO` | XENEON EDGE | UNKNOWN |

If the data path has not yet been established, record `NOT YET ESTABLISHED` rather than inferring it.

### 4.4 Hub / dock / adapter chain

| Component | Role | In actual path? | Class |
|---|---|---:|---|
| `TODO` | `TODO` | `TODO` | UNKNOWN |

### 4.5 Unused / unknown physical connections

| Port / path | State | Note |
|---|---|---|
| `TODO` | UNKNOWN | `TODO` |

## 5. Physical installation

| Item | Observation | Class |
|---|---|---|
| Orientation | `TODO` | UNKNOWN |
| Position | `TODO` | UNKNOWN |
| Stand / mount | `TODO` | UNKNOWN |
| Cable routing relevant to reproducibility | `TODO` | UNKNOWN |
| Direct PC connection or intermediate device | `TODO` | UNKNOWN |

## 6. Supplied and actually used accessories

Do not assume that an included accessory is part of the real setup.

| Accessory / cable | Supplied | Actually used | Observation |
|---|---:|---:|---|
| `TODO` | `TODO` | `TODO` | `TODO` |

## 7. Real-device observations

Record only physical observations here.

| ID | Observation | Class | Evidence reference |
|---|---|---|---|
| HW-OBS-001 | `TODO` | UNKNOWN | — |

## 8. Unknowns / deferred verification

The following belong to later Work Packages unless they can be answered purely by physical inspection:

| Question | Owner | State |
|---|---|---|
| Does Windows enumerate the device correctly? | XEE-WP-004 | DEFERRED |
| Is 2560 × 720 active in Windows? | XEE-WP-004 | DEFERRED |
| Is 60 Hz active? | XEE-WP-004 | DEFERRED |
| Does touch map to the correct display? | XEE-WP-004 | DEFERRED |
| How many simultaneous touch points work in practice? | XEE-WP-004 | DEFERRED |
| Does iCUE detect the unit? | XEE-WP-005 | DEFERRED |
| What firmware version is installed? | XEE-WP-005 | DEFERRED |
| Which iCUE actions/widgets are supported? | XEE-WP-005 | DEFERRED |

## 9. Evidence index

| Evidence ID | Type | Public status | Description |
|---|---|---|---|
| `TODO` | `TODO` | `PUBLIC / SANITISED SUMMARY / PRIVATE-ONLY` | `TODO` |

## 10. WP-003 completion checklist

- [ ] public-safe device identity recorded
- [ ] power path documented
- [ ] display path documented
- [ ] touch/data path documented or explicitly unresolved
- [ ] hub/dock/adapter chain documented
- [ ] orientation and mounting documented
- [ ] used accessories/cables documented
- [ ] observed vs manufacturer facts separated
- [ ] evidence classified for public safety
- [ ] Windows questions deferred to WP-004
- [ ] iCUE/firmware questions deferred to WP-005
- [ ] no serial number or unique device identifier committed
