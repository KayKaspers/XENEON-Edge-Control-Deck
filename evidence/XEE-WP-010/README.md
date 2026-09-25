# WP-010 evidence

Status REVIEW: v0.4.1 single-action ATC accepted by the maintainer with the
Smart Profiles operating condition; Git integration pending. Baseline:
9f3c9cdd5bcbdd89de05071a687780247aa10482.
Earlier sections below record historical discovery and candidate results.

## Maintainer environment and transport research

Maintainer confirmed 4.10.1, standard bindings, Stream Deck installed and
landing/takeoff clearance as the initial Flight action. Official RSI default
Left Alt + N identified; manual 4.10.1 in-game verification pending.
Official HTML Stream Deck provider found: virtual keys can be dispatched from
custom widget controls. Documentation evidence only; runtime not yet tested.
No game commands sent and no installed Stream Deck profiles changed.

## Native transport test candidate 0.4.0

Maintainer confirmed Left Alt + N works in installed Star Citizen 4.10.1.
Separate widget xee-flight-deck preserves accepted xee-navigation-deck bytes.
Official CLI 0.4.47 validate/package PASS. Mock-provider tests at XL 2536x696
and L 1689x697 PASS: paired events, foreign-signal filtering, normalized IDs,
empty device ID, explicit enable, double-tap guard, disarm on navigation/blur,
disconnection and send exception, missing plugin, geometry and no JS errors.
Reproducible test: tests/wp010/transport.cjs (Playwright; XEE_PLAYWRIGHT and
XEE_CHROME optional paths; output defaults to a temporary folder).
Physical transport, profile assignment, focus safety and game action remain
PENDING. No automatic foreground-process guard is implemented. Test first with
a harmless Stream Deck action. No claim of ATC clearance or confirmed delivery.

## 0.4.0 device failure and 0.4.1 correction

Maintainer screenshot showed PLUGIN NICHT BEREIT before connection. Installed
CORSAIR first-party Stream Deck widget uses injected uniqueId, not the required
iCUE.widgetId assumed by our 0.4.0 guard. Corrected to uniqueId with fallback;
plugin callback checks provider presence rather than redundant window flag.
Errors now distinguish missing host, preview, missing identity and missing plugin.
Mock now matches installed host shape and asserts exact connect call.
Physical connection retest remains pending; no installed vendor files changed.

## v0.4.1 physical functional results

Maintainer confirmed connection and virtual device visibility ("Ja"), opening
Calculator from the assigned virtual key ("ja"), then ATC via Left Alt + N
and subsequent game operation ("funktioniert"). This is maintainer-reported
evidence, not independently observed telemetry. Version: Star Citizen 4.10.1
with standard binding. Package SHA256:
571E99A3788995DF78E2B620E9D8FFEF858E8D4F98B0503A0CFD69B955852E0F

No automatic foreground-process guard is present. Normal game operation is
confirmed; preventing input in another active application is not established.
Stream Deck restart, retained assignment, no replay, low-light and foreground
iCUE-window continuity remain pending. No new widget/package changes made.

## Restart and physical regression

Maintainer answered "Funktionier alles" to the grouped test: full Stream Deck
exit blocks ATC, restart/connect retains mapping with no automatic action,
explicit enable permits another ATC request, low-light/Home/Back and closed
iCUE foreground window remain usable. These are reported PASS for v0.4.1.

Focus research: official Smart Profiles switches by focused application but
is disabled while the Stream Deck editor is open. It is a candidate operational
mitigation, not an unconditional per-dispatch foreground guard. FPS current
process data has not been established as an authoritative keyboard-focus signal.
No new helper installed, no profile modifications or game commands executed.

## Smart Profiles physical test

Maintainer confirmed "Funktioniert" after configuring the Flight virtual device
with a StarCitizen.exe-bound ATC profile and an empty default profile. ATC works
with the game foreground; the same tap in another application does nothing in
the tested configuration. This is maintainer-reported evidence.

The documented editor-open exception still applies. The strict focus-protection
criterion is not marked passed. Maintainer disposition of this limitation is
pending: accept the tested operating condition or implement a separate guard.

## Final maintainer disposition

Maintainer chose option 1 explicitly: accept the tested operating condition
(Stream Deck editor minimized/closed; game-bound ATC profile plus empty default).
The original unconditional foreground-protection criterion is replaced with this
bounded requirement. No separate helper or unconditional focus guard is claimed.
All reported device tests passed; source/package unchanged by acceptance.
Review outcome: accepted for maintainer Git integration.
