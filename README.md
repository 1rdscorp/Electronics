# Electronics Bench

Interactive electronics labs in one static website. Open `index.html` in a browser. No build step or server is needed.

## Structure

```
index.html          site shell: top nav, home page with a card per lab, lab viewer
labs/labs.js        lab registry: the list of pages on the site
labs/*.html         the labs, each a self-contained page
labs/_template.html starter file for a new lab
```

Each lab loads in its own frame, so labs can't break each other's styles or scripts. A lab stays loaded when you switch away, so your settings are still there when you come back. Every lab has its own address (`index.html#/op-amp`, `index.html#/bjt`) and still works when opened on its own.

## Adding a lab

1. Put the lab's HTML file in `labs/`, e.g. `labs/rc-filter.html`. To start from scratch, copy `labs/_template.html`.
2. Add an entry to `labs/labs.js`:

```js
{
  id: "rc-filter",                 // URL slug: index.html#/rc-filter
  title: "RC Filter Lab",
  short: "RC",                     // optional, nav label on phones
  file: "labs/rc-filter.html",
  summary: "Sweep the frequency and watch the corner appear.",
  topics: ["Low-pass", "High-pass"], // optional tags on the home card
  accent: "#b49dff"                // optional color for the card and nav tab
}
```

The nav bar and home page update automatically.

## Hosting

The site is plain static files, so any static host works (GitHub Pages, Netlify, or a shared folder).
