# References — XENEON Edge Control Deck

- **Purpose:** External and internal authority map
- **Last reviewed:** 2026-09-24

## Reference classes

This project distinguishes:

1. **governance authority**
2. **design authority**
3. **manufacturer / platform facts**
4. **application documentation**
5. **community evidence**

A community source may be useful evidence but does not override manufacturer facts, project governance or Human-Maintainer authority.

## Governance

### Nova Development Framework (NDF)

Repository:

https://github.com/KayKaspers/Nova-Development-Framework

Project baseline at bootstrap:

- release: `v1.1.0`
- role in this project: development governance
- relevant areas:
  - Work Package Standard
  - Project Manifest Specification
  - Project Adapter Conventions
  - Nova role
  - Git/Human-Maintainer authority
  - security-first / public repository practices

Important principle:

```text
AI CREATES / PREPARES
HUMANS APPROVE / PUBLISH
```

## Design and UX

### Core Design System (CDS)

Repository:

https://github.com/KayKaspers/Core-Design-System

Role in this project:

- design and UX authority
- foundation/component/pattern model
- Product Profile and Consumer Extension boundary
- channel and evidence model
- accessibility constraints

### Project-specific CDS assumption

For implementation planning, the CDS target state is treated as fully operational.

This assumption:

- enables the XENEON Product Profile to be designed now;
- does not modify CDS itself;
- does not create a formal CDS conformance/adoption claim.

## Target hardware

### CORSAIR XENEON EDGE

Official manufacturer product page:

https://www.corsair.com/eu/de/p/monitors/cc-9011306-ww/xen

Manufacturer baseline recorded at project bootstrap:

- screen size: 14.5 inch
- native resolution: 2560 × 720
- aspect ratio: 32:9
- refresh rate: 60 Hz
- touch: 5-point
- inputs: HDMI and USB-C DisplayPort Alt Mode
- orientation: horizontal and vertical
- iCUE-enabled

Hardware behaviour discovered during this project must be distinguished from published manufacturer specification.

## Vendor software

### CORSAIR iCUE

Primary source:

Official CORSAIR documentation and the installed application itself.

Version-specific capabilities will be recorded during XEE-WP-005.

No capability is considered implemented merely because it appears in marketing material.

## Application consumers

### Star Citizen

Publisher / developer: Cloud Imperium Games / Roberts Space Industries.

Project treatment:

- game-specific controls are Consumer Extensions;
- bindings are version-sensitive;
- practical verification is required;
- community information may support discovery but does not replace in-game verification.

### OBS Studio

Project treatment:

- application-specific control integration;
- supported official interfaces and documented shortcuts preferred;
- streaming credentials must never enter the repository.

### Discord

Project treatment:

- application-specific communication integration;
- credentials/tokens/webhooks are prohibited from the repository;
- supported local shortcuts/interfaces are preferred over credential-bearing automation.

## Reference rules

- Current external behaviour is verified when material to an implementation decision.
- Version-sensitive facts receive a date/version where practical.
- Unknown behaviour is recorded as unknown rather than inferred.
- Community findings are attributed as community evidence.
- Screenshots and local evidence are sanitised before publication.
- A reference supports a fact; it does not create project authority.
