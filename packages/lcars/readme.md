# LCARS Web Components

<!-- Package badges -->
[![npm version](https://img.shields.io/npm/v/@starfleet-technology/lcars?style=flat-square&label=npm&color=orange)](https://www.npmjs.com/package/@starfleet-technology/lcars)
[![npm downloads](https://img.shields.io/npm/dm/@starfleet-technology/lcars?style=flat-square&label=downloads&color=blue)](https://www.npmjs.com/package/@starfleet-technology/lcars)
[![license](https://img.shields.io/npm/l/@starfleet-technology/lcars?style=flat-square&label=license&color=green)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square&label=build)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![Stencil](https://img.shields.io/badge/Stencil-4.0+-purple?style=flat-square&logo=stencil)](https://stenciljs.com/)
[![Web Components](https://img.shields.io/badge/Web%20Components-Custom%20Elements-orange?style=flat-square&logo=w3c)](https://www.webcomponents.org/)
[![LCARS Design](https://img.shields.io/badge/LCARS-Authentic-gold?style=flat-square&logo=startrek)](https://memory-alpha.fandom.com/wiki/LCARS)

> Authentic Star Trek LCARS (Library Computer Access/Retrieval System) UI components built with Stencil for universal web framework compatibility - Part of the Starfleet Technology LCARS Design System

## 🚀 Installation

### npm/yarn/pnpm

```bash
# npm
npm install @starfleet-technology/lcars

# yarn
yarn add @starfleet-technology/lcars

# pnpm
pnpm add @starfleet-technology/lcars
```

### CDN

```html
<!-- Latest version -->
<script type="module" src="https://unpkg.com/@starfleet-technology/lcars/dist/lcars/lcars.esm.js"></script>

<!-- Specific version -->
<script type="module" src="https://unpkg.com/@starfleet-technology/lcars@0.0.2/dist/lcars/lcars.esm.js"></script>
```

## 📚 Documentation

- **[Complete Documentation](../../docs/index.md)** - Full documentation site
- **[API Reference](../../docs/reference/README.md)** - Component API documentation
- **[Tutorials](../../docs/tutorials/README.md)** - Step-by-step guides
- **[Stencil Guide](../../docs/explanation/stencil/README.md)** - Stencil-specific documentation

## 🎯 Usage

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="https://unpkg.com/@starfleet-technology/lcars/dist/lcars/lcars.esm.js"></script>
</head>
<body>
  <!-- Use LCARS components directly in HTML -->
  <lcars-button color="primary">Engage</lcars-button>
</body>
</html>
```

### Framework Integration

#### React

```tsx
import { LcarsButton } from '@starfleet-technology/lcars/react';

export function App() {
  return (
    <div>
      <LcarsButton color="primary" onClick={() => console.log('Engage!')}>
        Engage
      </LcarsButton>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div>
    <lcars-button color="primary" @click="handleClick">
      Engage
    </lcars-button>
  </div>
</template>

<script setup>
import { LcarsButton } from '@starfleet-technology/lcars/vue';

const handleClick = () => {
  console.log('Engage!');
};
</script>
```

#### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '@starfleet-technology/lcars/loader';

// Define custom elements for Angular
defineCustomElements();

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // ... other module configuration
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<lcars-button color="primary" (click)="handleClick()">
  Engage
</lcars-button>
```

## 🧩 Components

### Interactive Components
- **[LcarsButton](../../docs/reference/lcars-button.md)** - Distinctive LCARS-style buttons with various colors and sizes

### Layout Components
_(Coming Soon)_
- **LcarsPanel** - Geometric panel containers with LCARS styling
- **LcarsGrid** - LCARS-themed grid layout system
- **LcarsFrame** - Outer frame containers with authentic border styling

### Display Components
_(Coming Soon)_
- **LcarsDisplay** - Data readout displays with scrolling text
- **LcarsIndicator** - Status lights and indicators
- **LcarsProgressBar** - Progress indicators with LCARS styling

### Navigation Components
_(Coming Soon)_
- **LcarsTab** - Tab navigation with LCARS design
- **LcarsMenu** - Menu systems matching LCARS interfaces

## 🎨 LCARS Design System

This package implements the authentic **Library Computer Access/Retrieval System (LCARS)** design language from Star Trek: The Next Generation and beyond.

### Design Principles

- **Functionality First**: Clean, efficient interfaces that prioritize usability
- **Distinctive Typography**: Custom fonts and text treatments
- **Color Coding**: Consistent color usage for status and categorization
- **Geometric Shapes**: Angular elements and distinctive button styles
- **Audio Feedback**: Optional sound effects for enhanced immersion

### Theming

```css
/* Custom CSS properties for theming */
:root {
  --lcars-primary-color: #ff9900;
  --lcars-secondary-color: #9999ff;
  --lcars-background-color: #000000;
  --lcars-text-color: #ffcc99;
}
```

## 📖 API Reference

### LcarsButton

The primary interactive component for LCARS interfaces.

```tsx
interface LcarsButtonProps {
  /**
   * Color variant for the button
   */
  color?: 'default' | 'primary' | 'secondary' | 'alert' | 'warning';
  
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large';
  
  /**
   * Whether the button is disabled
   */
  disabled?: boolean;
}
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | string | `'default'` | Button color variant (default, primary, secondary, alert, warning) |
| `size` | string | `'medium'` | Button size (small, medium, large) |
| `disabled` | boolean | `false` | Whether the button is disabled |

#### Usage

```html
<!-- Basic button -->
<lcars-button>Default Button</lcars-button>

<!-- Primary button -->
<lcars-button color="primary">Engage</lcars-button>

<!-- Alert button -->
<lcars-button color="alert">Red Alert</lcars-button>

<!-- Large disabled button -->
<lcars-button size="large" disabled>Offline</lcars-button>
```

For complete API documentation, see the [API Reference](../../docs/reference/README.md).

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Setup

```bash
# Clone the monorepo
git clone https://github.com/starfleet-technology/lcars-webcomponents.git
cd lcars-webcomponents

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start development mode
pnpm dev
```

### Testing

```bash
# Run all tests
pnpm test

# Run tests for this package only
pnpm test --filter="@starfleet-technology/lcars"

# Run with coverage
pnpm test:coverage
```

### Building

```bash
# Build this package
pnpm build --filter="@starfleet-technology/lcars"

# Build with analysis
pnpm build:analyze
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

### Quick Start

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass (`pnpm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to your branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 🐛 Issues & Support

- **Bug Reports**: [GitHub Issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/starfleet-technology/lcars-webcomponents/discussions)
- **Documentation**: [Complete Documentation](../../docs/index.md)

## 📦 Related Packages

- **[@starfleet-technology/lcars-react](../lcars-react/README.md)** - React bindings
- **[@starfleet-technology/lcars-vue](../lcars-vue/README.md)** - Vue bindings

## 🌟 Demo Applications

- **[HTML Demo](../../apps/demo-html/README.md)** - Vanilla HTML/JavaScript implementation
- **[React Demo](../../apps/demo-react/README.md)** - React application showcase
- **[Vue Demo](../../apps/demo-vue/README.md)** - Vue application showcase

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🖖 Acknowledgments

- **Star Trek** and **LCARS** are trademarks of CBS Studios Inc.
- Inspired by the original LCARS design from Star Trek: The Next Generation
- Built with [Stencil](https://stenciljs.com/) for maximum compatibility and performance
- Thanks to all [contributors](https://github.com/starfleet-technology/lcars-webcomponents/contributors) who help maintain this project

---

**Live long and prosper** 🖖

*Created with ❤️ by the Starfleet Technology team*