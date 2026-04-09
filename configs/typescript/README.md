# @starfleet-technology/config-typescript

[![license](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey?style=flat-square)](https://github.com/starfleet-technology/lcars-webcomponents/blob/main/LICENSE)

> Shared TypeScript configurations for the LCARS monorepo.

## 🎯 Usage

Extend a configuration in your `tsconfig.json`:

```json
{
  "extends": "@starfleet-technology/config-typescript/base.json",
  "include": ["src/**/*"]
}
```

## 📂 Available configs

| File | Use for |
|------|---------|
| `base.json` | General TypeScript projects |
| `stencil-base.json` | Stencil base (extended by `stencil.json`) |
| `stencil.json` | Stencil web component packages |
| `react.json` | React projects with JSX |
| `vue.json` | Vue projects with SFC support |
| `vue-package.json` | Vue library packages |
| `node.json` | Node.js server-side projects |

---

*Part of the Starfleet Technology LCARS Design System* 🖖
