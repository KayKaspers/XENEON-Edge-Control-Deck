# XEE-WP-011 - Star Citizen set batch and Master Mode boundary

**STATUS:** ACTIVE - sole primary package for the joint candidate/test.
**Authority:** The maintainer requested full Flight preparation, retained the
0.7.1 cockpit design, then explicitly requested the other sets and supplied the
Mining/Salvage/Cargo fleet. This replaces the narrower 0.7.x scope.
**Baseline:** WP-010 COMPLETE at 8bc3d1e94346104a946933420065ebc09f9fa0c6.

## Current scope - 0.8.0

One widget contains Flight, Combat, Mining, Salvage, Cargo and Ship Utility:
24 pages, four large controls each, 54 distinct command slots including NAV/SCM.
WP-012/013/014 record the Mining/Salvage/Cargo slices of this same candidate.
They do not create independent devices or conflicting profiles. Ship Utility
reuses existing Flight assignments. Other application domains remain unchanged.

Keep the 0.7.1 cockpit CSS and native provider; add original licensed Lucide
icons. All 16 Flight controls retain their slot meanings. Virtual device grows
from 5x4 to 8x8; row/column migration and native capacity require physical review.
Slots 1/17 mean direct SET SCM / SET NAV, not the retired B toggle.

Fleet supplied by maintainer: Golem, Prospector, MOLE; Salvation, Vulture, MOTH;
Ironclad, HULL A and B. Conditional tools and workplace requirements are recorded
in docs/flight/STAR_CITIZEN_SETS.md. No ship detection or live status is inferred.

## Acceptance

- [x] Six sets / 24 pages implemented using the retained cockpit presentation.
- [x] Separate SCM/NAV requests coupled only to explicit destination buttons.
- [x] Permanent slot table including shared actions and HULL spindle request.
- [x] Automated exact slot pairs, no automatic sends/replay and failure handling.
- [x] XL 2536x696, L 1689x697 and full panel 2560x720 geometry tested.
- [x] All visible controls >=96px; licensed icons load and match recorded hashes.
- [x] Resize callback reentrancy, resize failure and disconnect tested in mocks.
- [x] Representative new-set renders at XL/L visually reviewed.
- [ ] Native 8x8 device capacity and existing-profile migration accepted.
- [ ] Installed game bindings and ship/workplace applicability reviewed together.
- [ ] All applicable functions and direct modes accepted in one joint game session.
- [ ] Physical readability, low light and Smart Profiles regression accepted.
- [ ] Package, rollback, evidence and maintainer integration accepted.

CLI validation/package evidence is recorded in evidence/XEE-WP-011/README.md.
Only historical ATC acceptance is carried forward; new controls are candidates.

## Boundaries

ACTION SENT != MODE CONFIRMED. No game-state inference, OS key injection,
background input queue, repeat loop or profile auto-installation. Telemetry
research answers the maintainer's question but does not activate WP-015.
Smart Profiles condition from WP-010 remains accepted.
PHYSICAL READABILITY > PREVIEW DENSITY. TOUCH SURFACE > MICRO CONTROL.
AI does not stage, commit, push, tag or release.
