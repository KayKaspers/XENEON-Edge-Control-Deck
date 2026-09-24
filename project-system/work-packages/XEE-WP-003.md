# XEE-WP-003 — Hardware Baseline

**SESSION:** SAME_SESSION_RECOMMENDED
**STATUS:** ACTIVE
**Prompt profile:** Lean (B1)
**Type:** real-device / documentation / evidence
**Date:** 2026-09-24

## 1. Goal

Establish a truthful, sanitised and reproducible baseline of the real CORSAIR XENEON EDGE unit and its physical installation before operating-system, touch-mapping, iCUE or application configuration is treated as verified.

## 2. Preconditions

- XEE-WP-001 complete
- XEE-WP-002 complete
- XEE-WP-002A complete
- physical CORSAIR XENEON EDGE available to the Human Maintainer
- public-repository safety rules active

## 3. Scope

Create and maintain:

- `docs/hardware/HARDWARE_BASELINE.md`
- `evidence/XEE-WP-003/README.md`
- `project-system/work-packages/XEE-WP-003.md`

Reconcile:

- `README.md`
- `ROADMAP.md`
- `project-brain/PROJECT_BRAIN.md`
- `project-system/PROJECT_PROFILE.md`
- `project-system/WORK_PACKAGE_QUEUE.md`
- `project-system/work-packages/XEE-WP-002A.md`

## 4. Required observations

### Device identity

Record only public-safe identity data such as:

- product name;
- model / part number if visible and safe to publish;
- physical form factor;
- supplied/used stand or mounting method;
- orientation.

Do **not** publish serial numbers, unique hardware identifiers, MAC addresses, personal purchase/order information or QR codes that encode unique device data.

### Physical connection topology

Document the actual physical paths separately:

```text
Power path
Display path
Touch / USB data path
Optional / unused ports
```

Do not infer that one cable provides another function unless it is physically observed or later verified.

### Physical installation

Record:

- horizontal or vertical installation;
- desk/stand/mount arrangement;
- cable routing relevant to reproducibility;
- directly connected vs hub/dock/adapter path;
- adapters actually in use.

### Evidence

Evidence may include:

- sanitised photographs;
- written inspection notes;
- manufacturer reference cross-checks;
- diagrams derived from the observed cabling.

Evidence that contains personal environment details or unique device identifiers may remain private and be summarised rather than committed.

## 5. Boundary to later Work Packages

### XEE-WP-004 owns

- Windows display enumeration;
- active resolution;
- refresh-rate verification;
- Windows orientation settings;
- touch mapping;
- multi-touch behaviour;
- Windows device-instance behaviour.

### XEE-WP-005 owns

- iCUE detection;
- installed iCUE version;
- firmware version;
- firmware update behaviour;
- vendor-specific controls and limitations.

### Application Work Packages own

- Star Citizen bindings;
- OBS actions;
- Discord actions;
- telemetry integrations.

## 6. Acceptance criteria

- [ ] XEE-WP-002A is reconciled to `COMPLETE`.
- [ ] XEE-WP-003 is the sole active Work Package.
- [ ] Real-device product identity is recorded without publishing serial numbers or unnecessary unique identifiers.
- [ ] Manufacturer-declared facts are clearly separated from observed real-device facts.
- [ ] Actual power path is documented.
- [ ] Actual display path is documented.
- [ ] Actual touch/USB data path is documented or explicitly recorded as not yet established.
- [ ] Any hub, dock or adapter in the real path is documented.
- [ ] Physical orientation and mounting method are documented.
- [ ] Unused/unknown physical ports or paths are recorded as unknown/unused rather than inferred.
- [ ] Evidence classification is recorded: public, sanitised summary, or private-only.
- [ ] No Windows touch/display conclusions are promoted into WP-003.
- [ ] No iCUE/firmware conclusions are promoted into WP-003.
- [ ] No application bindings are performed.
- [ ] Public-repository safety remains intact.

## 7. Non-goals

- no Windows display configuration
- no Windows touch calibration or mapping
- no refresh-rate acceptance
- no firmware update
- no iCUE configuration
- no Star Citizen configuration
- no OBS configuration
- no Discord configuration
- no telemetry implementation
- no benchmark/performance testing
- no publication of serial numbers or unique identifiers

## 8. Evidence model

Each fact must be classified as one of:

| Class | Meaning |
|---|---|
| `MANUFACTURER` | Published manufacturer specification |
| `OBSERVED` | Directly observed on the real unit/setup |
| `DERIVED` | Safe conclusion derived from observed evidence |
| `UNKNOWN` | Not yet verified |

```text
MANUFACTURER != OBSERVED
OBSERVED != OS_VERIFIED
PHYSICALLY_CONNECTED != FUNCTIONALLY_VERIFIED
```

## 9. STOP conditions

Stop and escalate if:

- evidence contains a serial number or other unique identifier intended for public commit;
- verification requires changing Windows display/touch settings;
- verification requires iCUE or firmware modification;
- device behaviour is uncertain and would need inference;
- a physical action risks equipment damage;
- scope expands into application integration.

## 10. Human-Maintainer gate

The Human Maintainer performs all physical inspection and cabling actions.

Nova:

- provides the inspection sequence;
- records evidence supplied by the Human Maintainer;
- classifies facts;
- reviews the completed baseline.

Expected kickoff commit:

`docs(hardware): start XENEON hardware baseline`

Expected completion commit will be defined only after real-device evidence has been collected and reviewed.
