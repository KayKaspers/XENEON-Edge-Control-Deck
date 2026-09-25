const state = {
  deckTitle: "BASE CONTROL DECK",
  accentColor: "#FFD600",
  backgroundColor: "#0B0B0B",
  actionCount: 0,
  toggleOn: false,
  status: "UNKNOWN",
  selection: "A"
};

const statusOrder = ["UNKNOWN", "READY", "ATTENTION"];
const selectionOrder = ["A", "B", "C"];

function applySettings(settings = {}) {
  if (settings && typeof settings === "object") {
    if (typeof settings.deckTitle === "string") state.deckTitle = settings.deckTitle;
    if (typeof settings.accentColor === "string") state.accentColor = settings.accentColor;
    if (typeof settings.backgroundColor === "string") state.backgroundColor = settings.backgroundColor;
  }

  document.documentElement.style.setProperty("--accent", state.accentColor);
  document.documentElement.style.setProperty("--dark", state.backgroundColor);

  const title = document.getElementById("deck-title");
  if (title) title.textContent = state.deckTitle;
}

function announce(message) {
  const output = document.getElementById("feedback-message");
  if (output) output.textContent = message;
}

function renderToggle() {
  const button = document.getElementById("toggle-control");
  const label = document.getElementById("toggle-state");
  if (!button || !label) return;

  button.setAttribute("aria-pressed", state.toggleOn ? "true" : "false");
  label.textContent = state.toggleOn ? "ON" : "OFF";
}

function renderStatus() {
  const button = document.getElementById("status-control");
  const label = document.getElementById("status-label");
  if (!button || !label) return;

  button.classList.remove("state-ready", "state-attention", "state-unknown");
  button.classList.add("state-" + state.status.toLowerCase());
  label.textContent = state.status;
  button.setAttribute("aria-label", "Demo status " + state.status + ". Tap to cycle.");
}

function renderSelection() {
  const button = document.getElementById("selection-control");
  const value = document.getElementById("selection-value");
  if (!button || !value) return;

  value.textContent = state.selection;
  button.setAttribute("aria-label", "Local selection " + state.selection + ". Tap to cycle.");
}

function nextValue(values, current) {
  const index = values.indexOf(current);
  return values[(index + 1) % values.length];
}

function bindInteractions() {
  const action = document.getElementById("action-control");
  const toggle = document.getElementById("toggle-control");
  const status = document.getElementById("status-control");
  const selection = document.getElementById("selection-control");

  if (action) {
    action.addEventListener("click", () => {
      state.actionCount += 1;
      const actionState = document.getElementById("action-state");
      if (actionState) actionState.textContent = "SENT " + state.actionCount;
      announce("Local action sent; no external state confirmed.");
    });
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      state.toggleOn = !state.toggleOn;
      renderToggle();
      announce("Local toggle: " + (state.toggleOn ? "ON." : "OFF."));
    });
  }

  if (status) {
    status.addEventListener("click", () => {
      state.status = nextValue(statusOrder, state.status);
      renderStatus();
      announce("Demo status: " + state.status + ".");
    });
  }

  if (selection) {
    selection.addEventListener("click", () => {
      state.selection = nextValue(selectionOrder, state.selection);
      renderSelection();
      announce("Local selection: " + state.selection + ".");
    });
  }
}

applySettings();
renderToggle();
renderStatus();
renderSelection();
bindInteractions();
