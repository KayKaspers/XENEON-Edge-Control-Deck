# XEE-WP-010 - Star Citizen Flight

**STATUS:** REVIEW - maintainer accepted; Git integration pending
**Authority:** Human Maintainer explicitly selected WP-010 on 2026-09-25.
**Baseline:** WP-007 COMPLETE at 9f3c9cdd5bcbdd89de05071a687780247aa10482.

## Scope

Implement an initial Flight deck within the accepted XL navigation architecture.
Retain Home/Back, local licensed icons, semantic layout tokens and >=96px touch
surfaces. The initial implemented action is landing/takeoff clearance (ATC), selected by
the maintainer. Other proposed Flight actions remain deferred.

Verified environment: Star Citizen 4.10.1, standard Left Alt + N, physically
confirmed. Channel and keyboard-layout metadata were not separately recorded;
acceptance is limited to the tested local configuration. Keep v0.3.1 as rollback.

## Acceptance

- [x] Work Package explicitly authorized; clean baseline inspected.
- [x] ATC action, game version and actual standard binding physically confirmed.
- [x] Command transport and dependencies verified with primary documentation.
- [x] Non-game transport test proves one tap / one discrete command.
- [x] Tested Smart Profiles limits ATC to the game in the accepted operating mode.
  Maintainer explicitly accepted the editor-open limitation; no unconditional
  per-dispatch foreground guard is claimed.
- [x] Flight route implemented with honest disconnected/error/sent feedback.
- [x] Maintainer confirmed ATC action and continued normal game operation.
- [x] XL navigation, readability, touch and low-light regression accepted.
- [x] Packaging, rollback, evidence and maintainer acceptance recorded.

## Boundaries

ACTION SENT != STATE CONFIRMED. Without game telemetry, do not display confirmed
gear/light/engine states. A local toggle or transport acknowledgement is not game
state. No combat, weapons, ejection, self-destruct, automated flight sequences,
process injection or anti-cheat bypass. No unsolicited software installation.
Do not modify the game bindings or launch/send commands before mappings and the
transport are established. AI does not stage, commit, push, tag or release.
WP-008/009/011 and later remain planned, not active.

## Scope refinement

First maintainer-selected action is landing/takeoff clearance (ATC). Begin with
this single action before expanding to other Flight controls. Environment:
Star Citizen 4.10.1, standard keybindings, Elgato Stream Deck installed.
Official HTML Stream Deck provider works on-device in v0.4.1. Maintainer
confirmed the Calculator test, then ATC via Left Alt + N and continued game
operation. Restart/reconnection, retained assignment, no replay, low-light, Home/Back
and foreground iCUE-window continuity were subsequently confirmed.
Automatic foreground-process protection is not implemented; successful game
operation does not prove that input to other applications is prevented.

## Final acceptance and operating condition

Maintainer explicitly chose option 1: conclude this single-action WP with the
Stream Deck editor minimized or closed. Smart Profiles maps the ATC profile to
StarCitizen.exe; an empty unbound profile is the default for the same virtual
device. Reopening the editor disables automatic switching. This replaces the
original unconditional focus-protection criterion, not evidence that it passed.

v0.4.1 accepted: connection, one-tap Calculator test, in-game ATC, continued game
operation, disconnect blocking, restart/mapping retention/no replay, Home/Back,
low-light and closed iCUE foreground window. Other Flight actions are deferred.
Git integration remains the sole completion step; AI does not publish.
