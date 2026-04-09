# @starfleet-technology/lcars-vue

[![npm version](https://img.shields.io/npm/v/@starfleet-technology/lcars-vue?style=flat-square)](https://www.npmjs.com/package/@starfleet-technology/lcars-vue)
[![npm downloads](https://img.shields.io/npm/dm/@starfleet-technology/lcars-vue?style=flat-square)](https://www.npmjs.com/package/@starfleet-technology/lcars-vue)
[![license](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey?style=flat-square)](https://github.com/starfleet-technology/lcars-webcomponents/blob/main/LICENSE)
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![Vue](https://img.shields.io/badge/Vue-3+-4fc08d?style=flat-square&logo=vue.js)](https://vuejs.org/)

> Vue 3 bindings for [`@starfleet-technology/lcars`](https://www.npmjs.com/package/@starfleet-technology/lcars) — auto-generated Stencil output targets that give you idiomatic Vue components backed by Web Components.

*Fan project. Not affiliated with Paramount/CBS. "Star Trek" and "LCARS" are trademarks of their respective owners.*

---

## 🚀 Installation

```bash
pnpm add @starfleet-technology/lcars-vue
# or: npm install @starfleet-technology/lcars-vue
```

`@starfleet-technology/lcars` is listed as a dependency and is installed automatically.

---

## 🎯 Usage

### Component import

```vue
<template>
  <LcarsButton color="primary">Engage</LcarsButton>
</template>

<script setup>
import { LcarsButton } from '@starfleet-technology/lcars-vue';
</script>
```

### Plugin (global registration)

```ts
import { createApp } from 'vue';
import App from './App.vue';
import { ComponentLibrary } from '@starfleet-technology/lcars-vue';

createApp(App).use(ComponentLibrary).mount('#app');
```

After installing the plugin, all LCARS components are globally available and custom elements are auto-registered.

---

## 🧩 Components

| Component | Description |
|-----------|-------------|
| `LcarsButton` | LCARS-styled button. Accepts a `color` string prop (e.g. `'primary'`, `'alert'`). |

---

## ⚙️ Requirements

- Vue 3+
- Node.js ≥ 20

---

## 🔗 Source & Issues

- **Repository**: [github.com/starfleet-technology/lcars-webcomponents](https://github.com/starfleet-technology/lcars-webcomponents)
- **Issues**: [github.com/starfleet-technology/lcars-webcomponents/issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)

---

*Part of the Starfleet Technology LCARS Design System* 🖖
