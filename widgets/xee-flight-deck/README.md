# XENEON Edge Flight Deck 0.4.1

WP-010 transport-test candidate, NOT game-accepted. Separate ID
com.kaykaspers.xee.flight; accepted navigation 0.3.1 and base 0.2.0 unchanged.
Import at horizontal XL. Flight connects a 1x1 virtual Stream Deck device.
Assign its only key (index 0) in Stream Deck. First use a harmless action, such
as opening Calculator, to verify one action per tap without game input.
Only after that test assign the standard System Hotkey action Left Alt + N.
The maintainer confirmed this binding in Star Citizen 4.10.1.

Open Home > Star Citizen > Flight. Connect if needed; allow any native Stream
Deck authorization prompt. Configure the correct virtual device, enable the
Flight key, then tap ATC. Enable is session-only and clears on navigation,
connection loss, hidden document and widget window blur. It is NOT a game-focus
guard. Keep the game foreground and verify touch does not steal keyboard focus.
No foreground process inspection is implemented. Do not claim game acceptance
until focus behavior has been tested. Stream Deck can execute ANY action the
user assigned to slot 0; widget cannot verify that mapping.

Each accepted click sends virtual key-down and key-up, with a one-second
duplicate guard. No automatic retries or queued commands. Synchronous provider
return is not delivery acknowledgement; UI reports only an event submitted.
No ATC clearance or ship state is inferred. All other domains remain placeholders.

Rollback: select the accepted Navigation Deck 0.3.1 again. No profiles are edited
by this package. Reused Lucide SVGs and LICENSE/provenance remain included.

0.4.1 uses the host uniqueId as in the installed first-party widget, with
iCUE.widgetId fallback. Initialization callback uses provider availability,
not a redundant window flag. Preview remains blocked with a distinct message.
