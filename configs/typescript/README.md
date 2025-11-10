# TypeScript Configuration

[![npm version](https://img.shields.io/npm/v/@starfleet-technology/config-typescript?style=flat-square&label=npm&color=orange)](https://www.npmjs.com/package/@starfleet-technology/config-typescript)
[![license](https://img.shields.io/npm/l/@starfleet-technology/config-typescript?style=flat-square&label=license&color=green)](../../LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

> Shared TypeScript configuration for Starfleet Technology LCARS project - consistent TypeScript settings across all packages

## Installation

```bash
# npm
npm install --save-dev @starfleet-technology/config-typescript

# yarn
yarn add --dev @starfleet-technology/config-typescript

# pnpm
pnpm add -D @starfleet-technology/config-typescript
```

## Usage

### Base Configuration

Extend the base configuration in your `tsconfig.json`:

```json
{
  "extends": "@starfleet-technology/config-typescript/base.json",
  "compilerOptions": {
    "outDir": "./dist"
  },
  "include": ["src/**/*"]
}
```

### Framework-Specific Configurations

#### Stencil Projects

```json
{
  "extends": "@starfleet-technology/config-typescript/stencil.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

#### React Projects

```json
{
  "extends": "@starfleet-technology/config-typescript/react.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

#### Vue Projects

```json
{
  "extends": "@starfleet-technology/config-typescript/vue.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

#### Node.js Projects

```json
{
  "extends": "@starfleet-technology/config-typescript/node.json",
  "compilerOptions": {
    "outDir": "./dist"
  }
}
```

## Available Configurations

- `base.json` - Base TypeScript configuration with strict settings
- `stencil.json` - Stencil-specific configuration for web components
- `react.json` - React-specific configuration with JSX support
- `vue.json` - Vue-specific configuration with SFC support
- `node.json` - Node.js-specific configuration for server-side code

## Features

- **Strict Type Checking** - Maximum type safety
- **Modern JavaScript** - ES2022+ target support
- **Module Resolution** - Node16 resolution for compatibility
- **Path Mapping** - Consistent import path strategies
- **Framework Support** - Optimized for React, Vue, and Stencil
- **Build Optimization** - Efficient compilation settings

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.

---

*Part of the Starfleet Technology LCARS Design System* 🖖