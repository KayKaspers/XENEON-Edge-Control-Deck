# Flight integration - WP-010

Current status: v0.4.1 ATC accepted with Smart Profiles operating condition;
Git integration pending. Earlier sections record discovery history.

The existing native widget implements navigation only. Browser KeyboardEvents
are not an OS-level input transport. A documented native integration or a reviewed
local command bridge is required for actual Star Citizen actions.

Candidate to investigate first: official CORSAIR/Elgato Stream Deck integration.
An official standalone Stream Deck widget exists; this does NOT yet prove that
our custom Flight route can dispatch those actions or preserve its own layout.
Do not replace the accepted navigation with a separate widget without review.

Inputs requested from maintainer: four initial actions, installed game version
and channel, standard/custom keybindings, installed Stream Deck availability.
Use the user's actual bindings rather than remembered defaults. If needed, RSI
documents profile export; exporting or modifying the game is not done here.

Sources checked 2026-09-25:
- https://www.corsair.com/uk/en/explorer/gamer/monitors/how-to-use-stream-deck-widget-on-corsair-xeneon-edge/
- https://support.robertsspaceindustries.com/hc/en-us/articles/360000183328-Create-export-and-import-custom-profiles

Required command semantics: distinct unavailable, ready, request pending,
transport accepted and failed states. No game-state confirmation without an
actual feedback source. No command queue replay on reconnect, no press-repeat,
and bounded key release if the chosen transport uses key-down/key-up.
Focus behavior, disconnected behavior and duplicate prevention must be tested.

## Confirmed environment and first action

Maintainer reports Star Citizen 4.10.1, standard keybindings and installed
Elgato Stream Deck. Game channel and keyboard layout not yet recorded.
First confirmed action: request landing / takeoff clearance (ATC). Other three
proposed Flight controls are not confirmed and remain deferred.
RSI documents Left Alt + N as the default ATC shortcut; exact installed-game
behavior still requires a manual test. Do not substitute AltGr.
https://support.robertsspaceindustries.com/hc/en-us/articles/360020925254-How-to-Land-Your-Ship

## Documented transport found

Official Stream Deck Data Provider supports HTML widgets via manifest dependency
widgetbuilder.streamdeck:StreamDeck:1.0 and window.plugins.Streamdeck.
connectStreamDeck(iCUE.widgetId, iCUE.streamDeckDeviceId, columns, rows) creates
a virtual device; sendKeyPress(widgetId, buttonIndex, pressed) dispatches a
virtual button press/release, NOT a raw keyboard scancode. The user assigns the
actual hotkey in Stream Deck to that virtual button. Slot 0 is proposed for ATC.
Connection alone does not prove an action is assigned or the game received it.

Source: https://docs.elgato.com/icue/widgets/references/plugins/stream-deck/
Reference: https://github.com/Corsair-Labs/icue-widget-builder/blob/main/skills/icue-widget-builder/docs/plugins/stream-deck.md

Next: build a native transport candidate with explicit connection status, manual
connect/retry, normalized widget IDs and paired press/release. Prove delivery
first with a harmless Stream Deck action, then the ATC hotkey with game focused.
Provider docs do not establish a foreground-process guard; actual focus behavior
and a reliable protection strategy remain open before game-input acceptance.
No custom HTTP bridge or separate keyboard injector is currently needed by the
documented route. Compatibility with the installed iCUE remains to be tested.

Maintainer confirmed Left Alt + N in-game. Native 0.4.0 transport candidate
now lives in widgets/xee-flight-deck; setup and limitations in its README.

Final accepted setup: see FOCUS_VERIFICATION.md. Stream Deck editor must be
minimized/closed. ATC profile bound to StarCitizen.exe; empty default profile.
Maintainer confirmed restart, no replay, low-light and ATC game operation.
