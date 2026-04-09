# @starfleet-technology/lcars-react

[![npm version](https://img.shields.io/npm/v/@starfleet-technology/lcars-react?style=flat-square)](https://www.npmjs.com/package/@starfleet-technology/lcars-react)
[![npm downloads](https://img.shields.io/npm/dm/@starfleet-technology/lcars-react?style=flat-square)](https://www.npmjs.com/package/@starfleet-technology/lcars-react)
[![license](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey?style=flat-square)](https://github.com/starfleet-technology/lcars-webcomponents/blob/main/LICENSE)
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![React](https://img.shields.io/badge/React-19+-61dafb?style=flat-square&logo=react)](https://react.dev/)

> React bindings for [`@starfleet-technology/lcars`](https://www.npmjs.com/package/@starfleet-technology/lcars) — auto-generated Stencil output targets that give you idiomatic React components backed by Web Components.

*Fan project. Not affiliated with Paramount/CBS. "Star Trek" and "LCARS" are trademarks of their respective owners.*

---

## 🚀 Installation

```bash
pnpm add @starfleet-technology/lcars-react
# or: npm install @starfleet-technology/lcars-react
```

`@starfleet-technology/lcars` is listed as a dependency and is installed automatically.

---

## 🎯 Usage

```tsx
import { LcarsButton } from '@starfleet-technology/lcars-react';

export default function App() {
  return <LcarsButton color="primary">Engage</LcarsButton>;
}
```

Components are auto-registered — no `defineCustomElements()` call is needed.

---

## 🧩 Components

| Component | Description |
|-----------|-------------|
| `LcarsButton` | LCARS-styled button. Accepts a `color` string prop (e.g. `'primary'`, `'alert'`). |

---

## ⚙️ Requirements

- React 19+
- Node.js ≥ 20

---

## 🔗 Source & Issues

- **Repository**: [github.com/starfleet-technology/lcars-webcomponents](https://github.com/starfleet-technology/lcars-webcomponents)
- **Issues**: [github.com/starfleet-technology/lcars-webcomponents/issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)

---

*Part of the Starfleet Technology LCARS Design System* 🖖
