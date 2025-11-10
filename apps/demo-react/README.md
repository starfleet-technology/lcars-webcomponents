# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

# LCARS React Demo

<!-- Demo application badges -->
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square&label=build)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![license](https://img.shields.io/github/license/starfleet-technology/lcars-webcomponents?style=flat-square&label=license&color=green)](../../LICENSE)
[![React](https://img.shields.io/badge/React-19+-blue?style=flat-square&logo=react)](https://reactjs.org/)

> Modern React application showcasing the LCARS Design System - Built with React 19, TypeScript, and Vite

## 🌟 Features

- **React 19** - Latest React with concurrent features and improved DX
- **TypeScript Integration** - Full type safety with LCARS component types
- **Stencil React Bindings** - Optimized React wrappers for LCARS components
- **Vite Development** - Fast development with HMR and instant server start
- **Modern Patterns** - React hooks, context, and functional components
- **Responsive Design** - Mobile-first LCARS interface implementation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Running Locally

```bash
# From the monorepo root
pnpm install

# Start the React demo
pnpm dev --filter="@starfleet-technology/demo-lcars-react"
```

The demo will be available at **http://localhost:5174**

### Production Build

```bash
# Build the React demo
pnpm build --filter="@starfleet-technology/demo-lcars-react"

# Preview the production build
pnpm preview --filter="@starfleet-technology/demo-lcars-react"
```

## 📋 What's Included

### React Integration Examples

This demo demonstrates:

- **Component Integration** - LCARS components as React components
- **Event Handling** - React event patterns with LCARS components
- **State Management** - React state integration with LCARS interactions
- **TypeScript Patterns** - Type-safe component usage and event handling
- **React Hooks** - Custom hooks for LCARS component interactions
- **Context Integration** - Sharing LCARS state across component tree

### Demo Features

- **Interactive Dashboard** - React-powered LCARS interface
- **Form Integration** - React forms with LCARS form components
- **Navigation** - React Router integration with LCARS navigation
- **State Persistence** - Local storage integration with React state
- **Component Showcase** - All LCARS components with React examples

### Code Examples

Each section includes:
- **React component patterns** with LCARS integration
- **TypeScript interfaces** for component props and events
- **Custom hooks** for LCARS-specific functionality
- **Performance optimization** techniques for smooth interactions

## 🛠️ Development

### Project Structure

```
demo-react/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # React entry point
│   ├── index.css        # Global styles
│   ├── vite-env.d.ts    # Vite type definitions
│   └── assets/          # Static assets
├── public/              # Public assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # App-specific TypeScript config
├── tsconfig.node.json   # Node-specific TypeScript config
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies and scripts
```

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Production build
pnpm build

# Preview production build  
pnpm preview

# Linting
pnpm lint

# Type checking
pnpm type-check
```

### React Integration Patterns

#### Component Usage

```tsx
import React, { useState } from 'react';
import { LcarsButton } from '@starfleet-technology/lcars-react';

export function InteractiveExample() {
  const [count, setCount] = useState(0);

  const handleButtonClick = (event: CustomEvent) => {
    console.log('Button clicked:', event.detail);
    setCount(prev => prev + 1);
  };

  return (
    <div className="demo-section">
      <h2>Interactive LCARS Button</h2>
      <LcarsButton 
        color="primary"
        onLcarsClick={handleButtonClick}
      >
        Clicked {count} times
      </LcarsButton>
    </div>
  );
}
```

#### Custom Hooks for LCARS

```tsx
import { useEffect, useRef } from 'react';
import type { LcarsButton } from '@starfleet-technology/lcars';

export function useLcarsButton() {
  const buttonRef = useRef<LcarsButton>(null);

  const setButtonState = (disabled: boolean) => {
    if (buttonRef.current) {
      buttonRef.current.disabled = disabled;
    }
  };

  return { buttonRef, setButtonState };
}
```

#### Context Integration

```tsx
import React, { createContext, useContext, useReducer } from 'react';

interface LcarsState {
  theme: 'standard' | 'darkMode';
  soundEnabled: boolean;
}

const LcarsContext = createContext<LcarsState | null>(null);

export function LcarsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(lcarsReducer, initialState);
  
  return (
    <LcarsContext.Provider value={state}>
      {children}
    </LcarsContext.Provider>
  );
}

export function useLcarsContext() {
  const context = useContext(LcarsContext);
  if (!context) {
    throw new Error('useLcarsContext must be used within LcarsProvider');
  }
  return context;
}
```

### TypeScript Integration

#### Component Props Typing

```tsx
import type { LcarsButtonProps } from '@starfleet-technology/lcars-react';

interface CustomButtonProps extends Partial<LcarsButtonProps> {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  onClick?: (event: CustomEvent) => void;
}

export function CustomButton({ 
  label, 
  variant = 'primary',
  onClick,
  ...lcarsProps 
}: CustomButtonProps) {
  return (
    <LcarsButton 
      color={variant}
      onLcarsClick={onClick}
      {...lcarsProps}
    >
      {label}
    </LcarsButton>
  );
}
```

#### Event Type Safety

```tsx
import type { LcarsClickEvent } from '@starfleet-technology/lcars-react';

export function EventExample() {
  const handleClick = (event: LcarsClickEvent<HTMLLcarsButtonElement>) => {
    // TypeScript knows the event structure
    console.log('Event detail:', event.detail);
    console.log('Target element:', event.target);
  };

  return (
    <LcarsButton onLcarsClick={handleClick}>
      Type-safe Event Handling
    </LcarsButton>
  );
}
```

## 🎨 Styling and Theming

### CSS-in-JS Integration

```tsx
import styled from 'styled-components';
import { LcarsButton } from '@starfleet-technology/lcars-react';

const StyledLcarsButton = styled(LcarsButton)`
  --lcars-primary-color: #ff6600;
  --lcars-button-border-radius: 8px;
  
  margin: 16px 8px;
  
  &[data-variant="hero"] {
    --lcars-button-padding: 20px 40px;
    --lcars-button-font-size: 18px;
  }
`;

export function ThemedButton() {
  return (
    <StyledLcarsButton color="primary" data-variant="hero">
      Engage Warp Drive
    </StyledLcarsButton>
  );
}
```

### CSS Modules

```tsx
// Button.module.css
.lcarsWrapper {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--lcars-background-primary);
}

.heroButton {
  --lcars-primary-color: #ffaa00;
  font-size: 1.2em;
}
```

```tsx
import styles from './Button.module.css';
import { LcarsButton } from '@starfleet-technology/lcars-react';

export function ModuleStyledButton() {
  return (
    <div className={styles.lcarsWrapper}>
      <LcarsButton className={styles.heroButton} color="primary">
        Module Styled Button
      </LcarsButton>
    </div>
  );
}
```

## 🔄 State Management

### React Query Integration

```tsx
import { useQuery } from '@tanstack/react-query';
import { LcarsButton } from '@starfleet-technology/lcars-react';

export function DataFetchExample() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['starship-status'],
    queryFn: () => fetchStarshipStatus(),
  });

  return (
    <div>
      <LcarsButton 
        color="primary" 
        disabled={isLoading}
        onLcarsClick={() => refetch()}
      >
        {isLoading ? 'Scanning...' : 'Refresh Status'}
      </LcarsButton>
      
      {data && (
        <div className="status-display">
          Status: {data.status}
        </div>
      )}
    </div>
  );
}
```

### Zustand Integration

```tsx
import { create } from 'zustand';
import { LcarsButton } from '@starfleet-technology/lcars-react';

interface LcarsStore {
  alertLevel: number;
  setAlertLevel: (level: number) => void;
  resetAlert: () => void;
}

const useLcarsStore = create<LcarsStore>((set) => ({
  alertLevel: 1,
  setAlertLevel: (level) => set({ alertLevel: level }),
  resetAlert: () => set({ alertLevel: 1 }),
}));

export function AlertControls() {
  const { alertLevel, setAlertLevel, resetAlert } = useLcarsStore();
  
  return (
    <div>
      <div>Current Alert Level: {alertLevel}</div>
      
      <LcarsButton 
        color="danger" 
        onLcarsClick={() => setAlertLevel(5)}
      >
        Red Alert
      </LcarsButton>
      
      <LcarsButton 
        color="primary" 
        onLcarsClick={resetAlert}
      >
        All Clear
      </LcarsButton>
    </div>
  );
}
```

## 📚 Documentation Links

- **[Complete Documentation](../../docs/index.md)** - Full documentation site
- **[React Bindings](../../packages/lcars-react/README.md)** - React component library
- **[API Reference](../../docs/reference/README.md)** - Detailed component APIs
- **[Installation Guide](../../packages/lcars-react/README.md#installation)** - Setup instructions

## 🔗 Related Demos

- **[HTML Demo](../demo-html/README.md)** - Vanilla HTML/JavaScript showcase
- **[Vue Demo](../demo-vue/README.md)** - Vue application showcase

## 🧪 Testing

### Component Testing with React Testing Library

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LcarsButton } from '@starfleet-technology/lcars-react';

describe('LCARS Button Integration', () => {
  test('handles click events correctly', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();
    
    render(
      <LcarsButton onLcarsClick={handleClick}>
        Test Button
      </LcarsButton>
    );
    
    const button = screen.getByText('Test Button');
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  test('applies correct props', () => {
    render(
      <LcarsButton color="primary" disabled>
        Disabled Button
      </LcarsButton>
    );
    
    const button = screen.getByText('Disabled Button');
    expect(button).toHaveAttribute('color', 'primary');
    expect(button).toHaveAttribute('disabled');
  });
});
```

### End-to-End Testing

```tsx
// cypress/e2e/lcars-demo.cy.ts
describe('LCARS React Demo', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('renders LCARS components correctly', () => {
    cy.get('lcars-button').should('be.visible');
    cy.get('lcars-button').should('contain.text', 'Engage');
  });
  
  it('handles user interactions', () => {
    cy.get('lcars-button').click();
    cy.get('[data-testid="click-counter"]').should('contain', '1');
  });
});
```

## 🚀 Deployment

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Netlify Deployment

```bash
# Build for production
pnpm build

# Deploy to Netlify
npx netlify deploy --prod --dir=dist
```

### Docker Deployment

```dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🐛 Troubleshooting

### Common Issues

#### React Component Not Rendering

**Problem**: LCARS components don't appear in React
**Solution**: Ensure proper import and component registration:
```tsx
// Make sure you're importing from the React bindings
import { LcarsButton } from '@starfleet-technology/lcars-react';

// Not from the core package
// import { LcarsButton } from '@starfleet-technology/lcars'; // ❌
```

#### TypeScript Errors

**Problem**: Type errors with LCARS React components
**Solution**: Update your tsconfig.json:
```json
{
  "compilerOptions": {
    "types": [
      "@starfleet-technology/lcars-react"
    ]
  }
}
```

#### Event Handling Issues

**Problem**: Custom events not firing in React
**Solution**: Use the proper React event props:
```tsx
// Use React-specific event props
<LcarsButton onLcarsClick={handleClick} />

// Not DOM event listeners
// <LcarsButton onClick={handleClick} /> // ❌
```

#### Styling Problems

**Problem**: CSS custom properties not applying
**Solution**: Ensure proper CSS cascade:
```css
/* Apply to the React component wrapper */
.lcars-button-wrapper lcars-button {
  --lcars-primary-color: #ff6600;
}
```

### Performance Tips

#### Optimize Bundle Size

```tsx
// Import only what you need
import { LcarsButton } from '@starfleet-technology/lcars-react';

// Not the entire library
// import * as Lcars from '@starfleet-technology/lcars-react'; // ❌
```

#### Lazy Loading

```tsx
import { lazy, Suspense } from 'react';

const LcarsPanel = lazy(() => 
  import('@starfleet-technology/lcars-react').then(module => ({
    default: module.LcarsPanel
  }))
);

export function LazyExample() {
  return (
    <Suspense fallback={<div>Loading LCARS Panel...</div>}>
      <LcarsPanel />
    </Suspense>
  );
}
```

### Getting Help

- **React Issues**: [GitHub Issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)
- **Component Problems**: Include React version and minimal reproduction
- **TypeScript Questions**: [GitHub Discussions](https://github.com/starfleet-technology/lcars-webcomponents/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🖖 Acknowledgments

- **Star Trek** and **LCARS** are trademarks of CBS Studios Inc.
- Built with [React](https://reactjs.org/) and the LCARS component library
- Powered by [Vite](https://vitejs.dev/) for optimal development experience
- Inspired by authentic LCARS interfaces from the Star Trek universe

---

**The Future is Built with React** ⚛️

*Experience authentic Star Trek LCARS interfaces with modern React patterns*

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
