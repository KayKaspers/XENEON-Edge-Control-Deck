# XEE-WP-007 - Navigation and Deck Architecture

**STATUS:** COMPLETE
**Date:** 2026-09-25
**Authority:** Human Maintainer explicitly started WP-007 in the current task.
**Baseline:** WP-006 COMPLETE at ab71849edfa1209c807969b4668d2f6462c6701d.

## Goal and scope

Define and verify a predictable Home, Back, domain and page hierarchy for the
physical XENEON XL slot (official 2536x696 content area; L fallback 1689x697), preserving the accepted physical readability
and touch-surface priorities. Runtime baseline is the accepted v0.2.0 widget.

Deliver a route contract, clickable local prototype, navigation tests, and a
later native widget candidate for physical validation. Architecture/prototype
work is authorized; application bindings remain owned by subsequent WPs.

## Contract

See docs/navigation/NAVIGATION_ARCHITECTURE.md. Existing Product Profile domain
families and Star Citizen subdecks are retained. Home/Back placement is stable;
all interactive targets have a 96px minimum on both axes. No gesture-only path,
icon-only essential navigation, browser history dependency or launch action.

## Deliverables and evidence

- [x] Initial route hierarchy and deterministic transition rules documented.
- [x] Local navigation-only prototype created outside the accepted widget.
- [x] Browser navigation, focus and geometry tests recorded.
- [x] Human Maintainer reviews navigation and naming proposal.
- [x] Native iCUE candidate created with version/manifest and rollback documented.
- [x] Official CLI validates and packages the native candidate.
- [x] Physical Home/Back, paging, readability, target reachability and low-light tested.
- [x] Closing the foreground iCUE window preserves navigation operation.
- [x] Evidence reconciled, review and Human-Maintainer acceptance recorded.

## Boundaries and completion

No Star Citizen hotkeys, OBS/Discord actions, telemetry, app launches or external
state claims. Placeholder routes say NOT CONNECTED. Navigation never dispatches
an application action. Domain-specific page contents remain deferred.
Do not modify CDS authority files or claim formal conformance.
Do not stage, commit, push, tag or release. Physical import/testing belongs to the
Human Maintainer. Browser prototype success is not physical acceptance.
M4 device criteria are satisfied by WP-006 and the confirmed WP-007 XL test;
integration is verified and M4 base deck/navigation criteria are satisfied.
WP-008 and later are not started by this work package.

## Maintainer acceptance - 2026-09-25

v0.3.1 XL accepted: supplied 2560x720 screenshot shows the full-width SC index
without apparent clipping. Maintainer explicitly answered "ja" to Home/Back,
both pages, edge touches, readability, dim-room comfort and continued operation
with the iCUE foreground window closed. This is maintainer-reported physical
evidence, separate from automated browser checks. No background-process claims.
Implementation and acceptance documentation were integrated by the maintainer.

Integration verified: `3eb0b44dcfa3e4f3044bb092d03d670d4889f28e` on local main and GitHub main.
No subsequent Work Package is authorized by this completion.
