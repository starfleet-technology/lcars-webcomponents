# Playwright Configuration

[![npm version](https://img.shields.io/npm/v/@starfleet-technology/config-playwright?style=flat-square&label=npm&color=orange)](https://www.npmjs.com/package/@starfleet-technology/config-playwright)
[![license](https://img.shields.io/github/license/starfleet-technology/lcars-webcomponents?style=flat-square&label=license&color=green)](../../LICENSE)
[![Playwright](https://img.shields.io/badge/Playwright-1.40+-2d8659?style=flat-square&logo=playwright)](https://playwright.dev/)

> Shared Playwright configuration for Starfleet Technology LCARS project - consistent E2E testing setup across all packages

## Installation

```bash
# npm
npm install --save-dev @starfleet-technology/config-playwright

# yarn
yarn add --dev @starfleet-technology/config-playwright

# pnpm
pnpm add -D @starfleet-technology/config-playwright
```

## Usage

Create a `playwright.config.ts` in your project:

```typescript
import { defineConfig } from '@playwright/test';
import baseConfig from '@starfleet-technology/config-playwright';

export default defineConfig(baseConfig);
```

## Features

- **Multi-Browser Testing** - Chrome, Firefox, Safari, and Edge support
- **Component Testing** - Test individual LCARS components in isolation
- **Visual Regression** - Screenshot comparison for UI consistency
- **Mobile Testing** - Responsive design validation
- **Accessibility Testing** - ARIA and keyboard navigation checks
- **Performance Testing** - Core Web Vitals measurement

## Configuration

The base configuration includes:

- Cross-browser test execution
- Retry policies for flaky tests
- Screenshot and video capture on failures
- Accessibility testing utilities
- Custom LCARS-specific test helpers

## Running Tests

```bash
# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run specific browser
npx playwright test --project=chromium
```

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.

---

*Part of the Starfleet Technology LCARS Design System* 🖖