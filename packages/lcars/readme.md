# @starfleet-technology/lcars

[![npm version](https://img.shields.io/npm/v/@starfleet-technology/lcars?style=flat-square)](https://www.npmjs.com/package/@starfleet-technology/lcars)
[![npm downloads](https://img.shields.io/npm/dm/@starfleet-technology/lcars?style=flat-square)](https://www.npmjs.com/package/@starfleet-technology/lcars)
[![license](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey?style=flat-square)](https://github.com/starfleet-technology/lcars-webcomponents/blob/main/LICENSE)
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square)](https://github.com/starfleet-technology/lcars-webcomponents/actions)

> Authentic Star Trek LCARS interface components built with [Stencil](https://stenciljs.com/). Framework-agnostic — use directly in any HTML page or with the React/Vue binding packages.

*Fan project. Not affiliated with Paramount/CBS. "Star Trek" and "LCARS" are trademarks of their respective owners.*

---

## 🚀 Installation

```bash
pnpm add @starfleet-technology/lcars
# or: npm install @starfleet-technology/lcars
```

---

## 🎯 Usage

### Vanilla HTML / Web Components

```ts
import { defineCustomElements } from '@starfleet-technology/lcars/loader';
defineCustomElements();
```

```html
<lcars-button color="primary">Engage</lcars-button>
```

### CDN (no build tools)

```html
<script type="module" src="https://unpkg.com/@starfleet-technology/lcars/dist/lcars/lcars.esm.js"></script>

<lcars-button color="primary">Engage</lcars-button>
```

### React / Vue

Use the dedicated binding packages for idiomatic framework integration:

- [`@starfleet-technology/lcars-react`](https://www.npmjs.com/package/@starfleet-technology/lcars-react)
- [`@starfleet-technology/lcars-vue`](https://www.npmjs.com/package/@starfleet-technology/lcars-vue)

### SSR environments

Register custom elements only in the browser:

```ts
if (typeof window !== 'undefined') {
  defineCustomElements();
}
```

---

## 🧩 Components

### `lcars-button`

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `string` | `'default'` | Color variant (e.g. `'primary'`, `'alert'`) |

```html
<lcars-button color="primary">Engage</lcars-button>
<lcars-button color="alert">Red Alert</lcars-button>
<lcars-button>Default</lcars-button>
```

---

## ⚙️ Requirements

- Node.js ≥ 20
- Browsers: Chrome/Edge (last 2), Firefox (last 2), Safari ≥ 16

---

## 🔗 Source & Issues

- **Repository**: [github.com/starfleet-technology/lcars-webcomponents](https://github.com/starfleet-technology/lcars-webcomponents)
- **Issues**: [github.com/starfleet-technology/lcars-webcomponents/issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)

---

*Part of the Starfleet Technology LCARS Design System* 🖖

*Created with ❤️ by the Starfleet Technology team*