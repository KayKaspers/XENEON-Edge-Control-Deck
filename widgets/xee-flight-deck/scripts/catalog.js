'use strict';
// Slot numbers are a public mapping contract. A send never proves game state.
window.FlightCatalog = {
  columns: 8, rows: 8,
  modes: { scm: 1, nav: 17 },
  pages: [
    { id: 'launch', title: 'START & LANDUNG', short: 'START / LANDUNG', icon: 'plane-landing', actions: [
      { id: 'send', slot: 0, title: 'LANDE-/STARTERLAUBNIS', hint: 'Flugkontrolle anfordern', icon: 'radio-tower', kind: 'ANFORDERN' },
      { id: 'ready', slot: 4, title: 'FLIGHT READY', hint: 'Schiff startbereit machen', icon: 'circle-power', kind: 'AKTIVIEREN' },
      { id: 'gear', slot: 2, title: 'FAHRWERK', hint: 'Ein- oder ausfahren', icon: 'plane-landing', kind: 'UMSCHALTEN' },
      { id: 'vtol', slot: 5, title: 'VTOL', hint: 'Schubausrichtung wechseln', icon: 'arrow-up-from-line', kind: 'UMSCHALTEN' }
    ] },
    { id: 'handling', title: 'FLUGSTEUERUNG', short: 'FLUGSTEUERUNG', icon: 'gauge', actions: [
      { id: 'cruise', slot: 6, title: 'CRUISE CONTROL', hint: 'Tempomat umschalten', icon: 'gauge', kind: 'UMSCHALTEN' },
      { id: 'coupled', slot: 7, title: 'COUPLED / DECOUPLED', hint: 'Flugunterstützung wechseln', icon: 'link-2', kind: 'UMSCHALTEN' },
      { id: 'limiter', slot: 8, title: 'SPEED LIMITER', hint: 'Geschwindigkeitslimit umschalten', icon: 'settings-2', kind: 'UMSCHALTEN' },
      { id: 'esp', slot: 9, title: 'ESP', hint: 'Steuerhilfe umschalten', icon: 'focus', kind: 'UMSCHALTEN' }
    ] },
    { id: 'avionics', title: 'AVIONIK', short: 'AVIONIK', icon: 'radar', actions: [
      { id: 'map', slot: 10, title: 'STARMAP', hint: 'Sternenkarte öffnen', icon: 'map', kind: 'ÖFFNEN' },
      { id: 'scan', slot: 11, title: 'SCAN MODE', hint: 'Scanner-Modus wechseln', icon: 'radar', kind: 'UMSCHALTEN' },
      { id: 'ping', slot: 12, title: 'PING', hint: 'Einzelnen Scanimpuls senden', icon: 'scan-line', kind: 'SENDEN' },
      { id: 'quantum', slot: 13, title: 'QUANTUM TRAVEL', hint: 'Vorbereiteten Sprung anfordern', icon: 'orbit', kind: 'ANFORDERN' }
    ] },
    { id: 'systems', title: 'SCHIFFSSYSTEME', short: 'SYSTEME', icon: 'settings-2', actions: [
      { id: 'lights', slot: 3, title: 'SCHIFFSLICHT', hint: 'Außenbeleuchtung umschalten', icon: 'lightbulb', kind: 'UMSCHALTEN' },
      { id: 'doors', slot: 14, title: 'TÜREN', hint: 'Öffnen oder schließen', icon: 'door-open', kind: 'UMSCHALTEN' },
      { id: 'locks', slot: 15, title: 'VERRIEGELUNG', hint: 'Schiff verriegeln oder entriegeln', icon: 'lock-keyhole', kind: 'UMSCHALTEN' },
      { id: 'engines', slot: 16, title: 'TRIEBWERKE', hint: 'Antriebe ein- oder ausschalten', icon: 'power', kind: 'UMSCHALTEN' }
    ] }
  ]
};

// Each action has one permanent virtual slot, independent of the visible set.
// No Stream Deck profile switching or reuse of a slot for a different command.
(() => {
  const catalog = window.FlightCatalog;
  const shared = Object.fromEntries(catalog.pages.flatMap(page => page.actions).map(action => [action.id, action]));
  const action = (id, slot, title, hint, icon, kind = 'ANFORDERN') => ({ id, slot, title, hint, icon, kind });
  const page = (id, title, short, icon, actions) => ({ id, title, short, icon, actions });
  const scm = action('scm', 1, 'SCM ANFORDERN', 'Arbeitsmodus im Schiff wählen', 'settings-2');
  const miningMode = action('mining-mode', 32, 'MINING MODE', 'Bergbau-Modus wählen', 'pickaxe');
  const miningLaser = action('mining-laser', 33, 'MINING LASER', 'Am besetzten Mining-Arbeitsplatz', 'zap', 'UMSCHALTEN');
  const salvageMode = action('salvage-mode', 40, 'SALVAGE MODE', 'Bergungsmodus wählen', 'recycle');
  const sets = {
    'sc.flight': { title: 'FLIGHT', pages: catalog.pages, transition: { title: 'COMBAT', mode: 'scm', route: 'sc.combat' } },
    'sc.combat': { title: 'COMBAT', pages: [
      page('targets', 'ZIELWAHL', 'ZIELWAHL', 'crosshair', [
        action('target-reticle', 20, 'ZIEL IM FADENKREUZ', 'Anvisiertes Ziel aufschalten', 'crosshair'),
        action('target-hostile', 21, 'FEINDLICHES ZIEL', 'Nächstes feindliches Ziel wählen', 'target'),
        action('target-attacker', 22, 'ANGREIFER', 'Angreifer als Ziel wählen', 'radar'),
        action('target-clear', 23, 'ZIEL LÖSEN', 'Zielaufschaltung aufheben', 'focus')
      ]),
      page('weapons', 'WAFFENMODI', 'WAFFENMODI', 'swords', [
        action('guns-mode', 24, 'GUNS MODE', 'Geschützmodus wählen', 'swords'),
        action('missile-mode', 25, 'MISSILE MODE', 'Raketenmodus wählen', 'rocket'),
        action('gimbal', 26, 'GIMBAL MODE', 'Zielhilfen-Modus wechseln', 'focus', 'UMSCHALTEN'),
        action('pip', 27, 'PIP LEAD / LAG', 'Zielindikator wechseln', 'arrow-left-right', 'UMSCHALTEN')
      ]),
      page('defense', 'ABWEHR & RAKETEN', 'ABWEHR / RAKETEN', 'shield', [
        action('decoys', 28, 'DECOYS', 'Einen Täuschkörper-Burst auslösen', 'shield'),
        action('noise', 29, 'NOISE', 'Eine Störwolke auslösen', 'shield-off'),
        action('missile-type', 30, 'RAKETENTYP', 'Nächsten Raketentyp auswählen', 'rocket', 'WECHSELN'),
        action('missile-count', 31, 'SALVENGRÖSSE', 'Anzahl der Raketen erhöhen', 'layers', 'ERHÖHEN')
      ]),
      page('handling', 'FLUGLAGE', 'FLUGLAGE', 'plane', [shared.gear, shared.lights, shared.coupled, shared.esp])
    ] },
    'sc.mining': { title: 'MINING', pages: [
      page('operation', 'BERGBAU', 'BERGBAU', 'pickaxe', [
        scm, miningMode, miningLaser,
        action('mining-process', 34, 'FRACTURE / EXTRACT', 'Laser-Arbeitsmodus wechseln', 'arrow-left-right', 'UMSCHALTEN')
      ]),
      page('power', 'LASERSTEUERUNG', 'LASERSTEUERUNG', 'gauge', [
        action('mining-power-up', 35, 'LASERLEISTUNG +', 'Um einen Schritt erhöhen', 'plus', 'ERHÖHEN'),
        action('mining-power-down', 36, 'LASERLEISTUNG −', 'Um einen Schritt verringern', 'minus', 'VERRINGERN'),
        miningLaser, shared.scan
      ]),
      page('modules', 'MINING-MODULE', 'MODULE', 'layers', [
        action('mining-module-1', 37, 'MODUL 1', 'Nur bei aktivem, passendem Modul', 'layers'),
        action('mining-module-2', 38, 'MODUL 2', 'Nur bei aktivem, passendem Modul', 'layers'),
        action('mining-module-3', 39, 'MODUL 3', 'Nur bei aktivem, passendem Modul', 'layers'),
        miningMode
      ]),
      page('travel', 'ANFLUG & SUCHE', 'ANFLUG / SUCHE', 'plane', [shared.send, shared.gear, shared.ping, shared.map])
    ] },
    'sc.salvage': { title: 'SALVAGE', pages: [
      page('operation', 'BERGUNG', 'BERGUNG', 'recycle', [
        scm, salvageMode,
        action('salvage-beam', 41, 'SALVAGE BEAM', 'Bergungsstrahl ein- oder ausschalten', 'zap', 'UMSCHALTEN'),
        action('salvage-tool', 42, 'BERGUNGSWERKZEUG', 'Werkzeug-Modus wechseln', 'settings-2', 'WECHSELN')
      ]),
      page('beams', 'STRAHLSTEUERUNG', 'STRAHLSTEUERUNG', 'move-horizontal', [
        action('beam-wider', 43, 'STRAHLABSTAND +', 'Abstand um einen Schritt erhöhen', 'plus', 'ERHÖHEN'),
        action('beam-narrower', 44, 'STRAHLABSTAND −', 'Abstand um einen Schritt verringern', 'minus', 'VERRINGERN'),
        action('salvage-left', 45, 'LINKES WERKZEUG', 'Nur bei wechselbaren Köpfen', 'chevrons-left', 'WECHSELN'),
        action('salvage-right', 46, 'RECHTES WERKZEUG', 'Nur bei wechselbaren Köpfen', 'chevrons-right', 'WECHSELN')
      ]),
      page('structure', 'STRUKTURBERGUNG', 'STRUKTURBERGUNG', 'recycle', [
        action('salvage-fracture', 47, 'FRACTURE', 'Nur mit passendem Strukturwerkzeug', 'boxes'),
        action('salvage-disintegrate', 48, 'DISINTEGRATE', 'Nur mit passendem Strukturwerkzeug', 'recycle'),
        shared.ping, shared.scan
      ]),
      page('travel', 'ANFLUG & SCHIFF', 'ANFLUG / SCHIFF', 'plane', [shared.send, shared.gear, shared.lights, shared.coupled])
    ] },
    'sc.cargo': { title: 'CARGO', pages: [
      page('loading', 'LADEN & ZUGANG', 'LADEN / ZUGANG', 'boxes', [
        shared.doors, shared.locks,
        action('tractor-view', 49, 'TRAKTORANSICHT', 'Nur bei nutzbarem Ferntraktor', 'magnet', 'ÖFFNEN'),
        action('tractor-grab', 50, 'FRACHT GREIFEN', 'Am bedienten Traktorwerkzeug', 'hand', 'UMSCHALTEN')
      ]),
      page('tractor', 'TRAKTORSTEUERUNG', 'TRAKTOR', 'magnet', [
        action('tractor-nearer', 51, 'FRACHT NÄHER', 'Abstand um einen Schritt verringern', 'chevrons-left', 'VERRINGERN'),
        action('tractor-farther', 52, 'FRACHT WEITER', 'Abstand um einen Schritt erhöhen', 'chevrons-right', 'ERHÖHEN'),
        action('tractor-left', 53, 'NACH LINKS DREHEN', 'Fracht schrittweise drehen', 'rotate-ccw', 'DREHEN'),
        action('tractor-right', 54, 'NACH RECHTS DREHEN', 'Fracht schrittweise drehen', 'rotate-cw', 'DREHEN')
      ]),
      page('delivery', 'ANFLUG & LIEFERUNG', 'ANFLUG / LIEFERUNG', 'plane-landing', [shared.send, shared.gear, shared.lights, shared.map]),
      page('ship', 'HULL & SCHIFF', 'HULL / SCHIFF', 'settings-2', [
        action('cargo-spindle', 55, 'FRACHTSPINDEL', 'HULL A / B: ein- oder ausfahren', 'arrow-left-right', 'UMSCHALTEN'),
        shared.ready, shared.engines, shared.locks
      ])
    ] },
    'sc.utility': { title: 'SHIP UTILITY', pages: [
      page('access', 'ZUGANG & KOMMUNIKATION', 'ZUGANG', 'door-open', [shared.doors, shared.locks, shared.lights, shared.send]),
      page('drive', 'ANTRIEB & FAHRWERK', 'ANTRIEB', 'power', [shared.ready, shared.engines, shared.gear, shared.vtol]),
      page('avionics', 'AVIONIK', 'AVIONIK', 'radar', [shared.map, shared.scan, shared.ping, shared.quantum]),
      page('assists', 'FLUGASSISTENZ', 'ASSISTENZ', 'gauge', [shared.cruise, shared.coupled, shared.limiter, shared.esp])
    ] }
  };
  for (const set of Object.values(sets)) {
    if (!set.transition) set.transition = { title: 'FLIGHT', mode: 'nav', route: 'sc.flight' };
  }
  catalog.sets = sets;
})();
