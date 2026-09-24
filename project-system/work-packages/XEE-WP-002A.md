# XEE-WP-002A — Project Identity, Logo, Banner & Repository Branding

**SESSION:** SAME_SESSION_RECOMMENDED
**STATUS:** COMPLETE
**Prompt profile:** Lean (B1)
**Type:** branding / docs / repository-assets
**Date:** 2026-09-24

## 1. Goal

Establish and integrate the public project identity for XENEON Edge Control Deck after the CDS consumer and Product Profile boundary is defined.

## 2. Preconditions

- XEE-WP-001 complete
- XEE-WP-002 integrated at commit `986ef1bc9719143469632c51e0bb25c4ff8a0020`
- XEE-WP-002 Nova review: `GO WITH NOTES`
- Human Maintainer visually approved the WP-002A branding direction
- Real XENEON Edge imagery is preferred over AI-generated substitute hardware

## 3. Scope

Create:

- `branding/README.md`
- `branding/BRAND_GUIDE.md`
- `branding/ASSET_MANIFEST.md`
- `branding/SOURCE_PROVENANCE.md`
- `branding/assets/png/xee-banner.png`
- `branding/assets/png/xee-social-preview.png`
- `branding/assets/png/xee-logo-system.png`
- `project-system/work-packages/XEE-WP-002A.md`

Update:

- `README.md`
- `ROADMAP.md`
- `project-brain/PROJECT_BRAIN.md`
- `project-system/PROJECT_PROFILE.md`
- `project-system/WORK_PACKAGE_QUEUE.md`
- `project-system/work-packages/XEE-WP-002.md`

## 4. Approved identity baseline

### Principles

- technical
- functional
- premium
- community-friendly

### Palette

- `#0B0B0B`
- `#1A1A1A`
- `#2A2F36`
- `#FFFFFF`
- `#FFD600`

### Typography direction

- Exo 2 — display / brand
- Inter — UI / documentation

### Image policy

- real XENEON Edge image preferred;
- AI-generated substitute XENEON hardware prohibited for official project branding;
- omit hardware imagery when a suitable real source cannot be used.

## 5. Acceptance criteria

- [ ] XEE-WP-002 is reconciled to `COMPLETE`.
- [ ] XEE-WP-002A is the only active Work Package.
- [ ] README uses the approved wide banner.
- [ ] Banner file is `1600 × 400`.
- [ ] Social-preview source file is `1280 × 640`.
- [ ] Logo/mark system source board is present.
- [ ] Brand Guide documents palette, typography, identity principles and image policy.
- [ ] Public repository does not contain Canva edit URLs or access tokens.
- [ ] Project mark does not use the CORSAIR logo.
- [ ] Branding does not imply official CORSAIR affiliation.
- [ ] AI-generated substitute hardware is not used in official project branding.
- [ ] No formal CDS-conformance claim is made.
- [ ] Public-repository safety remains intact.
- [ ] Human Maintainer retains Git publication authority.

## 6. Non-goals

- no physical XENEON configuration
- no iCUE configuration
- no Windows setup
- no application bindings
- no redesign of CDS
- no official vendor affiliation claim
- no requirement to publish the raw product-image source
- no release/tag

## 7. Evidence

Approved Canva source design IDs are recorded in:

`branding/SOURCE_PROVENANCE.md`

The visual approval was granted by the Human Maintainer before repository integration.

## 8. STOP conditions

Stop if:

- an exported asset does not correspond to the approved source design;
- the device has been replaced with generated substitute hardware;
- sensitive/private Canva links would be committed;
- the branding implies official vendor ownership;
- repository scope expands beyond project identity integration.

## 9. Human-Maintainer gate

The Human Maintainer:

1. exports the approved PNG assets;
2. runs the repository apply/pre-commit check;
3. reviews the staged state;
4. commits and pushes only after acceptance.

Expected commit message:

`docs(brand): establish XENEON project identity and repository branding`

## 10. Completion record

- **Human-Maintainer integration commit:** `6f896f8c358cc2073541e274acc49d54cdd7da88`
- **README product/integration follow-up:** `fe76e225541b23889b4ef3ebbdd076d5c0e10a1f`
- **Nova review:** `GO WITH NOTES`
- **Human-Maintainer acceptance:** granted
- **Acceptance result:** project identity, repository branding and public landing-page presentation integrated
- **Note carried forward:** configure `xee-social-preview.png` as the GitHub repository Social Preview through repository settings
- **Release effect:** none
