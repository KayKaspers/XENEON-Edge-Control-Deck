# WP-010 focus verification

Status: configuration physically tested and accepted with editor-open limitation.

Official source: https://help.elgato.com/hc/en-us/articles/360053419071-Elgato-Stream-Deck-Smart-Profiles
Smart Profiles follow the focused application, but automatic switching is disabled
while the Stream Deck editor is open. Compatibility with this widget's virtual
device must be tested; do not infer it from physical Stream Deck behavior.

Configuration (maintainer):
1. Select the Flight widget's virtual device. Preserve its working ATC profile.
2. Associate that ATC profile with the actual StarCitizen.exe game executable,
   not the RSI launcher. Do not guess the installation path.
3. Create an empty profile for the same virtual device. Leave its only key empty,
   do not associate it with an application, and make it the default profile.
4. Minimize/close the Stream Deck editor; leave the background app running.
5. With a harmless text editor foreground, explicitly enable the widget key and
   tap once. Verify no shortcut/action occurs; blank default key must be active.
6. Foreground Star Citizen, tap once: ATC should work. Alt-Tab away and test again.
7. Verify restart behavior. Reopening the Stream Deck editor disables automatic
   switching; do not claim protection in that state. Do not perform rapid focus
   switching tests against valuable work or unsaved data.

The widget cannot read the assigned action or active Stream Deck profile. Thus its
transport status and manual enable do not prove which action slot 0 will execute.
Do not display automatic GAME ACTIVE or INPUT BLOCKED claims from icon updates.

Maintainer explicitly accepted the scope adjustment: Smart Profiles operational
protection with the editor minimized/closed replaces the unconditional guard.
A future Windows foreground guard would require a separate reviewed action;
GetForegroundWindow plus SendInput also has a check-to-dispatch race and cannot
provide an absolute atomic target guarantee. Do not promise one.
References:
- https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getforegroundwindow
- https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-sendinput

Rollback: reselect the previously working ATC profile. This restores unguarded
manual operation; it is not a safe default-profile configuration.

Maintainer result: PASS for the configured Smart Profiles test. Editor-open exception remains; unconditional protection is not claimed.
