# 🖖 LCARS Web Components

[![npm (core)](https://img.shields.io/npm/v/@starfleet-technology/lcars)](https://www.npmjs.com/package/@starfleet-technology/lcars)
[![CI](https://github.com/starfleet-technology/lcars-webcomponents/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/starfleet-technology/lcars-webcomponents/actions/workflows/ci.yml)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](./LICENSE)
[![Stencil](https://img.shields.io/badge/Stencil-000?style=flat&logo=stencil&logoColor=white)](https://stenciljs.com/)



Authentic Star Trek LCARS interface components, built with **Stencil** Web Components. Framework-agnostic with first-class **React** and **Vue** bindings.

> *Fan project. Not affiliated with Paramount/CBS. "Star Trek", "LCARS", and related marks are trademarks of their owners.*

---

## 🚀 Quickstart

### Vanilla / Web Components

```bash
pnpm add @starfleet-technology/lcars
```

```ts
import { defineCustomElements } from '@starfleet-technology/lcars/loader';
defineCustomElements();
```

```html
<lcars-button color="primary">Engage</lcars-button>
```

Using a framework? See the dedicated React and Vue binding packages for idiomatic integration:

<details>
<summary><strong>React</strong></summary>

```bash
pnpm add @starfleet-technology/lcars-react
```

```tsx
import { LcarsButton } from '@starfleet-technology/lcars-react';

export default function App() {
  return <LcarsButton color="primary">Engage</LcarsButton>;
}
```

</details>

<details>
<summary><strong>Vue</strong></summary>

```bash
pnpm add @starfleet-technology/lcars-vue
```

```vue
<template>
  <LcarsButton color="primary">Engage</LcarsButton>
</template>

<script setup>
import { LcarsButton } from '@starfleet-technology/lcars-vue';
</script>
```

</details>

---

## 🏗️ Monorepo Layout

| Path | Description |
|------|-------------|
| `packages/lcars` | Core Web Components ([`@starfleet-technology/lcars`](https://www.npmjs.com/package/@starfleet-technology/lcars)) |
| `packages/lcars-react` | React bindings ([`@starfleet-technology/lcars-react`](https://www.npmjs.com/package/@starfleet-technology/lcars-react)) |
| `packages/lcars-vue` | Vue bindings ([`@starfleet-technology/lcars-vue`](https://www.npmjs.com/package/@starfleet-technology/lcars-vue)) |
| `apps/demo-html` | Vanilla HTML demo app |
| `apps/demo-react` | React demo app |
| `apps/demo-vue` | Vue demo app |
| `configs/` | Shared ESLint, TypeScript, Vite, Playwright configs |
| `tools/task-management` | Internal task utilities |

---

## 🧰 Development

**Requirements:** Node.js ≥ 20, pnpm 10

```bash
pnpm install
pnpm build      # build all packages
pnpm dev        # start all demo apps
pnpm test       # run tests
pnpm lint       # run ESLint
```

---

## ✨ Roadmap

- More input components (text, select, etc.)
- Navigation components (tabs, breadcrumbs)
- Layout components (panel, elbow, grid)
- Design token system
- Theming & dark mode support

---

## ⚖️ License & Trademarks

Licensed under **CC BY-NC-SA 4.0** — see [LICENSE](./LICENSE).

Fan project, not affiliated with Paramount/CBS. "Star Trek", "LCARS", and related names are trademarks of their respective owners.

---

<div align="center"><em>🖖 Live long and prosper</em></div>

