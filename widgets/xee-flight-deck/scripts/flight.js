'use strict';
window.Flight = (() => {
  const catalog = window.FlightCatalog;
  let provider = null, widgetId = '', connected = false, armed = false, bound = null;
  let root = null, deck = 'sc.flight', onRoute = null, lastTap = -Infinity;
  const activePages = {};
  let resizing = false, connectionEpoch = 0;
  let state = 'NICHT VERBUNDEN', detail = 'Stream Deck starten und verbinden.';
  const el = id => document.getElementById(id);
  const normalize = id => String(id || '').replace(/[{}]/g, '').toLowerCase();
  const own = id => widgetId && normalize(id) === normalize(widgetId);

  function image(name) {
    const img = document.createElement('img');
    img.src = 'assets/lucide/' + name + '.svg';
    img.alt = ''; img.setAttribute('aria-hidden', 'true');
    return img;
  }
  function text(tag, value, cls) {
    const node = document.createElement(tag); node.textContent = value;
    if (cls) node.className = cls;
    return node;
  }
  function paint() {
    if (!root) return;
    el('flight-state').textContent = state;
    el('flight-detail').textContent = detail;
    el('flight-arm').querySelector('strong').textContent = !connected ? 'VERBINDEN' : armed ? 'SPERREN' : 'FREIGEBEN';
    el('flight-arm').querySelector('span').textContent = !connected ? 'Stream Deck' : armed ? 'Tasten freigegeben' : 'Tasten gesperrt';
    el('flight-arm').classList.toggle('is-armed', connected && armed);
    el('flight-mode').disabled = !connected || !armed;
    for (const button of root.querySelectorAll('[data-flight-slot]')) button.disabled = !connected || !armed;
  }
  function off(message) {
    connectionEpoch++;
    connected = false; armed = false; state = message;
    detail = 'Keine weitere Aktion. Verbindung in Stream Deck prüfen.'; paint();
  }
  function connect() {
    connectionEpoch++;
    armed = false; connected = false;
    const host = window.iCUE;
    if (!host) { off('ICUE NOCH NICHT BEREIT'); return; }
    if (host.isPreview) { off('VORSCHAU / KEINE AKTION'); return; }
    const instanceId = typeof uniqueId !== 'undefined' ? uniqueId : host.widgetId;
    if (typeof instanceId !== 'string' || !instanceId.trim()) { off('WIDGET-KENNUNG FEHLT'); return; }
    if (!window.plugins || !window.plugins.Streamdeck) { off('STREAM-DECK-PLUGIN FEHLT'); return; }
    provider = window.plugins.Streamdeck; widgetId = instanceId;
    try {
      if (bound !== provider) {
        const source = provider;
        const live = id => source === provider && own(id);
        const ready = () => {
          if (connected || resizing) return;
          const epoch = connectionEpoch;
          resizing = true;
          try {
            if (typeof source.updateVirtualDeviceSize === 'function') source.updateVirtualDeviceSize(widgetId, catalog.columns, catalog.rows);
          } catch (_) { off('TASTENMATRIX NICHT BEREIT'); return; }
          finally { resizing = false; }
          // Resize may synchronously emit icons or a disconnect/auth signal.
          if (epoch !== connectionEpoch) return;
          connected = true; armed = false; state = 'VERBUNDEN';
          detail = 'Belegungen prüfen, dann Tasten freigeben.'; paint();
        };
        provider.virtualDeviceCreated.connect(id => { if (live(id)) ready(); });
        provider.buttonIconUpdated.connect((id, index) => {
          // Icons establish a connection, never prove an action assignment.
          if (live(id) && Number(index) >= 0 && Number(index) < catalog.columns * catalog.rows && !connected) ready();
        });
        provider.streamdeckUnreachable.connect(id => { if (live(id)) off('VERBINDUNG UNTERBROCHEN'); });
        provider.authenticationRequired.connect(id => { if (live(id)) off('FREIGABE IN STREAM DECK'); });
        provider.authenticationRejected.connect(id => { if (live(id)) off('VERBINDUNG ABGELEHNT'); });
        bound = provider;
      }
      state = 'VERBINDET'; detail = 'Auf Stream Deck warten. Tasten bleiben gesperrt.'; paint();
      provider.connectStreamDeck(widgetId, host.streamDeckDeviceId || '', catalog.columns, catalog.rows);
    } catch (_) { off('VERBINDUNGSFEHLER'); }
  }
  function sendSlot(index, label, event) {
    if (!event || !event.isTrusted || !root || !connected || !armed || document.hidden || performance.now() - lastTap < 1000) return false;
    lastTap = performance.now(); let failed = false;
    try { provider.sendKeyPress(widgetId, index, true); } catch (_) { failed = true; }
    finally { try { provider.sendKeyPress(widgetId, index, false); } catch (_) { failed = true; } }
    if (failed) { off('SENDEN FEHLGESCHLAGEN'); return false; }
    // Synchronous signals can invalidate the connection during the provider call.
    if (!connected || !armed || !root) return false;
    state = 'EREIGNIS GESENDET'; detail = label + ' angefordert. Spielstatus unbestätigt.'; paint();
    return true;
  }
  function noRepeat(event) { if (event.repeat && (event.key === 'Enter' || event.key === ' ')) event.preventDefault(); }

  function renderPage() {
    root.replaceChildren();
    const set = catalog.sets[deck];
    const activePage = activePages[deck] || set.pages[0].id;
    const page = set.pages.find(p => p.id === activePage) || set.pages[0];
    el('page').textContent = page.title + ' / ' + (set.pages.indexOf(page) + 1) + ' VON ' + set.pages.length;
    const rail = document.createElement('div'); rail.className = 'flight-pages'; rail.setAttribute('role', 'group'); rail.setAttribute('aria-label', set.title + '-Seiten');
    for (const [index, item] of set.pages.entries()) {
      const button = document.createElement('button'); button.type = 'button'; button.dataset.flightPage = item.id;
      button.className = 'flight-page'; button.setAttribute('aria-pressed', String(item.id === activePage));
      button.append(image(item.icon), text('span', String(index + 1).padStart(2, '0'), 'page-number'), text('strong', item.short));
      button.addEventListener('click', () => { activePages[deck] = item.id; renderPage(); root.querySelector('[data-flight-page="' + item.id + '"]').focus({ preventScroll: true }); });
      rail.append(button);
    }
    const grid = document.createElement('div'); grid.className = 'flight-grid';
    for (const action of page.actions) {
      const button = document.createElement('button'); button.type = 'button'; button.id = 'flight-' + action.id;
      button.dataset.flightSlot = String(action.slot); button.className = 'flight-action';
      button.dataset.control = action.kind === 'UMSCHALTEN' ? 'toggle' : 'command';
      const symbol = document.createElement('span'); symbol.className = 'action-symbol'; symbol.setAttribute('aria-hidden', 'true');
      symbol.append(image(action.icon));
      button.append(symbol, text('span', page.title, 'action-category'), text('strong', action.title), text('span', action.hint, 'action-hint'), text('span', action.kind + ' ↗', 'action-verb'));
      button.addEventListener('keydown', noRepeat);
      button.addEventListener('click', event => sendSlot(action.slot, action.title, event));
      grid.append(button);
    }
    root.append(rail, grid); paint();
  }
  function mount(container, nextDeck, navigate) {
    root = container; deck = nextDeck; onRoute = navigate;
    const transition = catalog.sets[deck].transition;
    el('flight-mode').querySelector('strong').textContent = transition.title;
    el('flight-mode').querySelector('span').textContent = transition.mode.toUpperCase() + ' anfordern';
    renderPage();
  }
  function disarm() { armed = false; paint(); }
  function leave(keepArmed = false) { if (!keepArmed) disarm(); root = null; onRoute = null; }
  el('flight-arm').addEventListener('keydown', noRepeat);
  el('flight-arm').addEventListener('click', event => { if (!event.isTrusted || !root) return; if (!connected) connect(); else { armed = !armed; paint(); } });
  el('flight-mode').addEventListener('keydown', noRepeat);
  el('flight-mode').addEventListener('click', event => {
    const transition = catalog.sets[deck].transition;
    if (sendSlot(catalog.modes[transition.mode], transition.mode.toUpperCase(), event) && onRoute) onRoute(transition.route);
  });
  window.pluginStreamdeckEvents = { onInitialized: connect };
  window.addEventListener('blur', disarm);
  document.addEventListener('visibilitychange', () => { if (document.hidden) disarm(); });
  if (typeof pluginStreamdeck_initialized !== 'undefined' && pluginStreamdeck_initialized) connect();
  return { mount, leave };
})();
