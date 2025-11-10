# Vite Configuration

[![npm version](https://img.shields.io/npm/v/@starfleet-technology/config-vite?style=flat-square&label=npm&color=orange)](https://www.npmjs.com/package/@starfleet-technology/config-vite)
[![license](https://img.shields.io/github/license/starfleet-technology/lcars-webcomponents?style=flat-square&label=license&color=green)](../../LICENSE)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)

> Shared Vite configuration for Starfleet Technology LCARS project - consistent build tooling across all demo applications

## Installation

```bash
# npm
npm install --save-dev @starfleet-technology/config-vite

# yarn
yarn add --dev @starfleet-technology/config-vite

# pnpm
pnpm add -D @starfleet-technology/config-vite
```

## Usage

### React Applications

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { reactConfig } from '@starfleet-technology/config-vite';

export default defineConfig({
  ...reactConfig,
  // Additional project-specific config
});
```

### Vue Applications

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { vueConfig } from '@starfleet-technology/config-vite';

export default defineConfig({
  ...vueConfig,
  // Additional project-specific config
});
```

### Vanilla JavaScript

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { baseConfig } from '@starfleet-technology/config-vite';

export default defineConfig({
  ...baseConfig,
  // Additional project-specific config
});
```

## Features

- **Framework Support** - Optimized configs for React, Vue, and vanilla JS
- **TypeScript Integration** - Full TypeScript support out of the box
- **CSS Processing** - PostCSS and CSS modules support
- **Asset Optimization** - Image and font optimization
- **Development Server** - Hot reload and fast refresh
- **Production Build** - Optimized bundles with code splitting

## Available Configurations

- `baseConfig` - Base Vite configuration for all projects
- `reactConfig` - React-specific configuration with Fast Refresh
- `vueConfig` - Vue-specific configuration with SFC support
- `libraryConfig` - Library build configuration for packages

## Development Features

- Hot Module Replacement (HMR)
- Fast Refresh for React/Vue
- TypeScript type checking
- ESLint integration
- CSS preprocessing
- Asset bundling

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.

---

*Part of the Starfleet Technology LCARS Design System* 🖖