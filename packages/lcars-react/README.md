# LCARS React Components

<!-- Package badges -->
[![npm version](https://img.shields.io/npm/v/@starfleet-technology/lcars-react?style=flat-square&label=npm&color=orange)](https://www.npmjs.com/package/@starfleet-technology/lcars-react)
[![npm downloads](https://img.shields.io/npm/dm/@starfleet-technology/lcars-react?style=flat-square&label=downloads&color=blue)](https://www.npmjs.com/package/@starfleet-technology/lcars-react)
[![license](https://img.shields.io/npm/l/@starfleet-technology/lcars-react?style=flat-square&label=license&color=green)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square&label=build)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![React](https://img.shields.io/badge/React-18+-61dafb?style=flat-square&logo=react)](https://reactjs.org/)

> React bindings for Star Trek LCARS UI components - seamless integration of LCARS design system with React applications - Part of the Starfleet Technology LCARS Design System

## 🚀 Installation

### npm/yarn/pnpm

```bash
# npm
npm install @starfleet-technology/lcars-react

# yarn
yarn add @starfleet-technology/lcars-react

# pnpm
pnpm add @starfleet-technology/lcars-react
```

**Note**: This package requires `@starfleet-technology/lcars` as a peer dependency.

## 📚 Documentation

- **[Complete Documentation](../../docs/index.md)** - Full documentation site
- **[API Reference](../../docs/reference/README.md)** - Component API documentation
- **[React Integration Guide](../../docs/tutorials/react-integration.md)** - React-specific tutorials
- **[Stencil Guide](../../docs/explanation/stencil/README.md)** - Understanding the underlying technology

## 🎯 Usage

### Basic Setup

```tsx
import React from 'react';
import { LcarsButton } from '@starfleet-technology/lcars-react';

function App() {
  return (
    <div className="App">
      <LcarsButton color="primary">
        Engage
      </LcarsButton>
    </div>
  );
}

export default App;
```

### With TypeScript

```tsx
import React, { useState } from 'react';
import { LcarsButton } from '@starfleet-technology/lcars-react';
import type { LcarsButtonColor } from '@starfleet-technology/lcars-react';

interface StarfleetControlsProps {
  onEngageClick: () => void;
  alertStatus: 'normal' | 'alert';
}

export const StarfleetControls: React.FC<StarfleetControlsProps> = ({ 
  onEngageClick, 
  alertStatus 
}) => {
  const [systemStatus, setSystemStatus] = useState<'online' | 'offline'>('online');
  const buttonColor: LcarsButtonColor = alertStatus === 'alert' ? 'alert' : 'primary';

  return (
    <div>
      <LcarsButton 
        color={buttonColor}
        disabled={systemStatus === 'offline'}
        onClick={onEngageClick}
      >
        {alertStatus === 'alert' ? 'Red Alert' : 'Engage'}
      </LcarsButton>
      
      <LcarsButton 
        color="secondary"
        onClick={() => setSystemStatus(prev => prev === 'online' ? 'offline' : 'online')}
      >
        {systemStatus === 'online' ? 'Go Offline' : 'Come Online'}
      </LcarsButton>
    </div>
  );
};
```

### Event Handling

```tsx
import React, { useCallback } from 'react';
import { LcarsButton } from '@starfleet-technology/lcars-react';

export const EventExample: React.FC = () => {
  const handleClick = useCallback((event: React.MouseEvent<HTMLLcarsButtonElement>) => {
    console.log('Button clicked:', event.currentTarget);
    // Full access to native DOM event and element
  }, []);

  const handleEngageSequence = useCallback(async () => {
    console.log('Initiating warp sequence...');
    // Async operations work seamlessly
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Warp drive engaged!');
  }, []);

  return (
    <div>
      <LcarsButton 
        color="primary"
        onClick={handleClick}
      >
        Tactical Systems
      </LcarsButton>
      
      <LcarsButton 
        color="warning"
        onClick={handleEngageSequence}
      >
        Engage Warp Drive
      </LcarsButton>
    </div>
  );
};
```

## 🧩 Components

### Interactive Components
- **[LcarsButton](../../docs/reference/lcars-button.md)** - Distinctive LCARS-style buttons with React event handling

### Coming Soon
- **LcarsPanel** - Layout containers with React children support
- **LcarsDisplay** - Data displays with React state integration
- **LcarsIndicator** - Status components with React prop binding

## 🎨 LCARS Design Integration

### CSS Custom Properties

```tsx
import React from 'react';
import { LcarsButton } from '@starfleet-technology/lcars-react';
import './lcars-theme.css'; // Your custom LCARS theme

const ThemedComponent: React.FC = () => {
  return (
    <div style={{
      '--lcars-primary-color': '#ff6600',
      '--lcars-secondary-color': '#6699ff'
    } as React.CSSProperties}>
      <LcarsButton color="primary">
        Custom Themed Button
      </LcarsButton>
    </div>
  );
};
```

### Responsive Design

```tsx
import React from 'react';
import { LcarsButton } from '@starfleet-technology/lcars-react';

const ResponsiveControls: React.FC = () => {
  return (
    <div className="controls-container">
      {/* Small screens */}
      <div className="sm:hidden">
        <LcarsButton size="small" color="primary">
          Engage
        </LcarsButton>
      </div>
      
      {/* Large screens */}
      <div className="hidden sm:block">
        <LcarsButton size="large" color="primary">
          Engage Warp Drive
        </LcarsButton>
      </div>
    </div>
  );
};
```

## 📖 API Reference

### LcarsButton

React wrapper for the LCARS button component with full TypeScript support.

```tsx
interface LcarsButtonProps extends React.HTMLAttributes<HTMLLcarsButtonElement> {
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
  
  /**
   * Click event handler
   */
  onClick?: (event: React.MouseEvent<HTMLLcarsButtonElement>) => void;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
}
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | LcarsButtonColor | `'default'` | Button color variant |
| `size` | LcarsButtonSize | `'medium'` | Button size |
| `disabled` | boolean | `false` | Whether the button is disabled |
| `onClick` | MouseEventHandler | - | Click event handler |
| `children` | ReactNode | - | Button content |

For complete API documentation, see the [API Reference](../../docs/reference/README.md).

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm 8+
- React 18+

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

### Testing with React

```bash
# Run all tests
pnpm test

# Run tests for this package only
pnpm test --filter="@starfleet-technology/lcars-react"

# Start React demo
pnpm dev --filter="@starfleet-technology/demo-lcars-react"
```

### Integration Testing

```tsx
// Example test with React Testing Library
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LcarsButton } from '@starfleet-technology/lcars-react';

describe('LcarsButton', () => {
  test('handles click events', () => {
    const handleClick = jest.fn();
    
    render(
      <LcarsButton color="primary" onClick={handleClick}>
        Test Button
      </LcarsButton>
    );
    
    const button = screen.getByText('Test Button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🚀 Framework Compatibility

### React Versions

- **React 18+**: Full support with Concurrent Features
- **React 17**: Compatible with legacy mode
- **React 16.8+**: Hooks support available

### Build Tools

- **Vite**: Optimal performance and development experience
- **Create React App**: Full compatibility
- **Next.js**: SSR and SSG support
- **Webpack**: Custom configurations supported

### TypeScript Integration

```tsx
// Full type safety out of the box
import type { 
  LcarsButtonProps,
  LcarsButtonColor,
  LcarsButtonSize 
} from '@starfleet-technology/lcars-react';

const MyComponent: React.FC<{
  variant: LcarsButtonColor;
  size: LcarsButtonSize;
}> = ({ variant, size }) => {
  return (
    <LcarsButton color={variant} size={size}>
      Typed Button
    </LcarsButton>
  );
};
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

### React-Specific Guidelines

1. Follow React best practices and hooks patterns
2. Ensure TypeScript types are accurate and exported
3. Add React Testing Library tests for new components
4. Document React-specific usage patterns
5. Test with multiple React versions when possible

## 🐛 Issues & Support

- **Bug Reports**: [GitHub Issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)
- **React-Specific Questions**: Tag with `react` label
- **Feature Requests**: [GitHub Discussions](https://github.com/starfleet-technology/lcars-webcomponents/discussions)
- **Documentation**: [Complete Documentation](../../docs/index.md)

## 📦 Related Packages

- **[@starfleet-technology/lcars](../lcars/README.md)** - Core LCARS web components
- **[@starfleet-technology/lcars-vue](../lcars-vue/README.md)** - Vue bindings

## 🌟 Demo Applications

- **[React Demo](../../apps/demo-react/README.md)** - Complete React application showcase
- **[HTML Demo](../../apps/demo-html/README.md)** - Vanilla HTML/JavaScript implementation
- **[Vue Demo](../../apps/demo-vue/README.md)** - Vue application showcase

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🖖 Acknowledgments

- **Star Trek** and **LCARS** are trademarks of CBS Studios Inc.
- Inspired by the original LCARS design from Star Trek: The Next Generation
- Built with [Stencil](https://stenciljs.com/) for maximum React compatibility
- React bindings generated using Stencil's official React output target
- Thanks to all [contributors](https://github.com/starfleet-technology/lcars-webcomponents/contributors) who help maintain this project

---

**Live long and prosper** 🖖

*Created with ❤️ by the Starfleet Technology team*