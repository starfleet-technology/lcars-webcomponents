# ESLint Configuration

[![npm version](https://img.shields.io/npm/v/@starfleet-technology/config-eslint?style=flat-square&label=npm&color=orange)](https://www.npmjs.com/package/@starfleet-technology/config-eslint)
[![license](https://img.shields.io/npm/l/@starfleet-technology/config-eslint?style=flat-square&label=license&color=green)](../../LICENSE)

> Shared ESLint configuration for Starfleet Technology LCARS project - consistent code quality and style across all packages

## Installation

```bash
# npm
npm install --save-dev @starfleet-technology/config-eslint

# yarn  
yarn add --dev @starfleet-technology/config-eslint

# pnpm
pnpm add -D @starfleet-technology/config-eslint
```

## Usage

Add to your `eslint.config.js`:

```javascript
import eslintConfig from '@starfleet-technology/config-eslint';

export default eslintConfig;
```

## Features

- **TypeScript support** - Full TypeScript linting rules
- **React support** - React-specific linting for JSX/TSX
- **Stencil support** - Web Components and Stencil patterns
- **Import sorting** - Consistent import organization
- **Code quality** - Best practices enforcement
- **LCARS standards** - Project-specific conventions

## Rules Included

- ESLint recommended rules
- TypeScript ESLint recommended rules  
- React hooks rules
- Import/export rules
- Accessibility rules
- Custom LCARS project rules

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.

---

*Part of the Starfleet Technology LCARS Design System* 🖖