/*
 * Lab registry — the only file you need to edit to add a page to the site.
 *
 * To add a lab:
 *   1. Drop a self-contained HTML file into this folder (labs/).
 *      labs/_template.html is a starting point if you are building one from scratch.
 *   2. Add an entry to the list below. Order here is the order in the nav and on the home page.
 *
 * Fields:
 *   id       short, unique, URL-safe slug. The lab's address becomes index.html#/<id>
 *   title    name shown in the nav and on the home card
 *   file     path to the HTML file, relative to index.html
 *   summary  one or two sentences for the home card
 *   topics   (optional) short tags shown on the home card
 *   accent   (optional) a CSS color for the card and the active nav tab
 *   short    (optional) a shorter name for the nav bar on narrow screens
 *   keepAlive (optional) labs stay loaded in the background after you leave them, so their
 *            settings survive. Set to false for heavy labs (3D, sound) so they are unloaded
 *            on leave and stop using the GPU and speakers.
 */
window.LABS = [
  {
    id: "op-amp",
    title: "Op-Amp Bench Lab",
    short: "Op-Amp",
    file: "labs/op-amp-bench.html",
    summary: "Rewire an op-amp between open loop, inverting, non-inverting and follower circuits, turn the knobs and watch the scope.",
    topics: ["Open loop", "Inverting", "Non-inverting", "Follower", "Feedback"],
    accent: "#ffb648"
  },
  {
    id: "bjt",
    title: "Transistor Lab",
    short: "BJT",
    file: "labs/bjt-amplifier.html",
    summary: "An NPN BJT amplifier workbench: common emitter, base and collector, with load lines, a triggered scope and the formulas filled in with your numbers.",
    topics: ["Common emitter", "Common base", "Common collector", "Biasing"],
    accent: "#22d3ee"
  },
  {
    id: "battery-box",
    title: "E-Boat Battery Box",
    short: "Battery",
    file: "labs/eboat-battery-box.html",
    summary: "An interactive 3D build model of a 14S10P pack of 140 × 21700 cells. Orbit, explode and X-ray it, then watch current flow through busbars, fuses and the BMS in a live charge and discharge simulation.",
    topics: ["3D model", "14S10P", "21700 cells", "BMS", "Busbars"],
    accent: "#56e0c8",
    keepAlive: false
  },
  {
    id: "atom",
    title: "Atom Explorer",
    short: "Atom",
    file: "labs/atom-explorer.html",
    summary: "Take an atom apart in 3D: add protons, neutrons and electrons, switch between Bohr shells and orbital clouds, zoom in to quarks, then bond atoms into molecules.",
    topics: ["Periodic table", "Isotopes", "Ions", "Orbitals", "Molecules"],
    accent: "#a98bff",
    keepAlive: false
  }
];
