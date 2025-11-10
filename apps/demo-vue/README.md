# LCARS Vue Demo

<!-- Demo application badges -->
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square&label=build)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![license](https://img.shields.io/github/license/starfleet-technology/lcars-webcomponents?style=flat-square&label=license&color=green)](../../LICENSE)
[![Vue](https://img.shields.io/badge/Vue-3+-green?style=flat-square&logo=vue.js)](https://vuejs.org/)

> Modern Vue 3 application showcasing the LCARS Design System - Built with Composition API, TypeScript, and Vite

## 🌟 Features

- **Vue 3.5+** - Latest Vue with Composition API and improved performance
- **TypeScript Integration** - Full type safety with LCARS component types
- **Stencil Vue Bindings** - Optimized Vue wrappers for LCARS components
- **Vite Development** - Lightning-fast development with HMR
- **Composition API** - Modern Vue patterns with `<script setup>` syntax
- **SFC Components** - Single File Components with LCARS integration

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Running Locally

```bash
# From the monorepo root
pnpm install

# Start the Vue demo
pnpm dev --filter="@starfleet-technology/demo-lcars-vue"
```

The demo will be available at **http://localhost:5175**

### Production Build

```bash
# Build the Vue demo
pnpm build --filter="@starfleet-technology/demo-lcars-vue"

# Preview the production build
pnpm preview --filter="@starfleet-technology/demo-lcars-vue"
```

## 📋 What's Included

### Vue Integration Examples

This demo demonstrates:

- **Component Integration** - LCARS components in Vue SFCs
- **Event Handling** - Vue event patterns with LCARS components
- **Reactivity System** - Vue 3 reactivity with LCARS interactions
- **TypeScript Patterns** - Type-safe component usage in Vue
- **Composables** - Custom composables for LCARS functionality
- **Plugin Integration** - LCARS plugin for global component registration

### Demo Features

- **Interactive Dashboard** - Vue-powered LCARS interface
- **Form Integration** - Vue forms with LCARS form components
- **Navigation** - Vue Router integration with LCARS navigation
- **State Management** - Pinia integration with LCARS state
- **Component Showcase** - All LCARS components with Vue examples

### Code Examples

Each section includes:
- **Vue SFC patterns** with LCARS integration
- **Composition API examples** with TypeScript
- **Custom composables** for LCARS-specific functionality
- **Performance optimization** techniques for Vue applications

## 🛠️ Development

### Project Structure

```
demo-vue/
├── src/
│   ├── App.vue          # Main application component
│   ├── main.ts          # Vue entry point
│   ├── style.css        # Global styles
│   ├── vite-env.d.ts    # Vite type definitions
│   ├── assets/          # Static assets
│   └── components/      # Vue components
│       └── HelloWorld.vue
├── public/              # Public assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.app.json    # App-specific TypeScript config
├── tsconfig.node.json   # Node-specific TypeScript config
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

# Type checking
pnpm type-check

# Build and type check
pnpm build-only
```

### Vue Integration Patterns

#### Component Usage with Composition API

```vue
<template>
  <div class="demo-section">
    <h2>Interactive LCARS Button</h2>
    <LcarsButton 
      :color="buttonColor"
      @lcarsClick="handleButtonClick"
    >
      Clicked {{ count }} times
    </LcarsButton>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { LcarsButton } from '@starfleet-technology/lcars-vue';

const count = ref(0);

const buttonColor = computed(() => 
  count.value > 5 ? 'danger' : 'primary'
);

const handleButtonClick = (event: CustomEvent) => {
  console.log('Button clicked:', event.detail);
  count.value++;
};
</script>
```

#### Custom Composables for LCARS

```ts
// composables/useLcarsButton.ts
import { ref, type Ref } from 'vue';
import type { LcarsButton } from '@starfleet-technology/lcars';

export function useLcarsButton() {
  const buttonRef: Ref<LcarsButton | null> = ref(null);

  const setButtonState = (disabled: boolean) => {
    if (buttonRef.value) {
      buttonRef.value.disabled = disabled;
    }
  };

  const triggerButtonAction = () => {
    if (buttonRef.value) {
      buttonRef.value.dispatchEvent(new CustomEvent('lcarsClick'));
    }
  };

  return { 
    buttonRef, 
    setButtonState, 
    triggerButtonAction 
  };
}
```

```vue
<template>
  <LcarsButton 
    ref="buttonRef"
    @lcarsClick="handleClick"
  >
    Composable Button
  </LcarsButton>
  
  <button @click="setButtonState(true)">
    Disable LCARS Button
  </button>
</template>

<script setup lang="ts">
import { useLcarsButton } from '@/composables/useLcarsButton';

const { buttonRef, setButtonState } = useLcarsButton();

const handleClick = () => {
  console.log('LCARS button clicked via composable!');
};
</script>
```

#### State Management Integration

```vue
<template>
  <div>
    <div>Current Alert Level: {{ alertStore.level }}</div>
    
    <LcarsButton 
      color="danger" 
      @lcarsClick="alertStore.setRedAlert"
    >
      Red Alert
    </LcarsButton>
    
    <LcarsButton 
      color="primary" 
      @lcarsClick="alertStore.clearAlert"
    >
      All Clear
    </LcarsButton>
  </div>
</template>

<script setup lang="ts">
import { LcarsButton } from '@starfleet-technology/lcars-vue';
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore();
</script>
```

### TypeScript Integration

#### Component Props with TypeScript

```vue
<template>
  <LcarsButton 
    :color="variant"
    :disabled="isLoading"
    @lcarsClick="handleClick"
  >
    {{ label }}
  </LcarsButton>
</template>

<script setup lang="ts">
import type { LcarsButtonProps } from '@starfleet-technology/lcars-vue';

interface Props extends Partial<LcarsButtonProps> {
  label: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  isLoading?: boolean;
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  isLoading: false,
});

const emit = defineEmits<{
  click: [event: CustomEvent];
}>();

const handleClick = (event: CustomEvent) => {
  emit('click', event);
};
</script>
```

#### Type-Safe Event Handling

```vue
<template>
  <LcarsButton @lcarsClick="handleTypedClick">
    Type-safe Event Handling
  </LcarsButton>
</template>

<script setup lang="ts">
import type { LcarsClickEvent } from '@starfleet-technology/lcars-vue';

const handleTypedClick = (event: LcarsClickEvent<HTMLLcarsButtonElement>) => {
  // TypeScript knows the event structure
  console.log('Event detail:', event.detail);
  console.log('Target element:', event.target);
};
</script>
```

## 🎨 Styling and Theming

### Scoped Styles

```vue
<template>
  <div class="lcars-wrapper">
    <LcarsButton class="hero-button" color="primary">
      Styled LCARS Button
    </LcarsButton>
  </div>
</template>

<style scoped>
.lcars-wrapper {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--lcars-background-primary);
}

.hero-button {
  --lcars-primary-color: #ffaa00;
  --lcars-button-padding: 20px 40px;
  font-size: 1.2em;
}
</style>
```

### CSS Modules

```vue
<template>
  <div :class="$style.wrapper">
    <LcarsButton :class="$style.heroButton" color="primary">
      Module Styled Button
    </LcarsButton>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: var(--lcars-background-primary);
}

.heroButton {
  --lcars-primary-color: #ff6600;
  font-size: 1.2em;
}
</style>
```

### Dynamic Styling

```vue
<template>
  <LcarsButton 
    :style="dynamicButtonStyle"
    color="primary"
  >
    Dynamic Styles
  </LcarsButton>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const isActive = ref(false);

const dynamicButtonStyle = computed(() => ({
  '--lcars-primary-color': isActive.value ? '#ff6600' : '#9999ff',
  '--lcars-button-scale': isActive.value ? '1.1' : '1.0',
  transition: 'all 0.3s ease',
}));
</script>
```

## 🔄 State Management

### Pinia Integration

```ts
// stores/lcars.ts
import { defineStore } from 'pinia';

export const useLcarsStore = defineStore('lcars', {
  state: () => ({
    alertLevel: 1,
    systemStatus: 'operational',
    activePanel: 'main',
  }),
  
  getters: {
    isRedAlert: (state) => state.alertLevel >= 5,
    statusColor: (state) => {
      if (state.systemStatus === 'critical') return 'danger';
      if (state.systemStatus === 'warning') return 'warning';
      return 'success';
    },
  },
  
  actions: {
    setAlertLevel(level: number) {
      this.alertLevel = level;
      if (level >= 5) {
        this.systemStatus = 'critical';
      }
    },
    
    clearAlert() {
      this.alertLevel = 1;
      this.systemStatus = 'operational';
    },
  },
});
```

```vue
<template>
  <div>
    <div>Alert Level: {{ lcarsStore.alertLevel }}</div>
    <div>Status: {{ lcarsStore.systemStatus }}</div>
    
    <LcarsButton 
      :color="lcarsStore.statusColor" 
      @lcarsClick="lcarsStore.setAlertLevel(5)"
    >
      Trigger Red Alert
    </LcarsButton>
  </div>
</template>

<script setup lang="ts">
import { useLcarsStore } from '@/stores/lcars';

const lcarsStore = useLcarsStore();
</script>
```

### Provide/Inject Pattern

```vue
<!-- App.vue -->
<template>
  <LcarsProvider>
    <RouterView />
  </LcarsProvider>
</template>

<script setup lang="ts">
import { provide, reactive } from 'vue';
import type { LcarsConfig } from '@/types/lcars';

const lcarsConfig = reactive<LcarsConfig>({
  theme: 'standard',
  soundEnabled: true,
  animationsEnabled: true,
});

provide('lcarsConfig', lcarsConfig);
</script>
```

```vue
<!-- Child component -->
<template>
  <LcarsButton 
    :color="config.theme === 'dark' ? 'secondary' : 'primary'"
  >
    Themed Button
  </LcarsButton>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { LcarsConfig } from '@/types/lcars';

const config = inject<LcarsConfig>('lcarsConfig')!;
</script>
```

## 📚 Documentation Links

- **[Complete Documentation](../../docs/index.md)** - Full documentation site
- **[Vue Bindings](../../packages/lcars-vue/README.md)** - Vue component library
- **[API Reference](../../docs/reference/README.md)** - Detailed component APIs
- **[Installation Guide](../../packages/lcars-vue/README.md#installation)** - Setup instructions

## 🔗 Related Demos

- **[HTML Demo](../demo-html/README.md)** - Vanilla HTML/JavaScript showcase
- **[React Demo](../demo-react/README.md)** - React application showcase

## 🧪 Testing

### Component Testing with Vue Test Utils

```ts
import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import { LcarsButton } from '@starfleet-technology/lcars-vue';

describe('LCARS Button Integration', () => {
  it('handles click events correctly', async () => {
    const handleClick = vi.fn();
    
    const wrapper = mount(LcarsButton, {
      props: {
        color: 'primary',
      },
      attrs: {
        onLcarsClick: handleClick,
      },
      slots: {
        default: 'Test Button',
      },
    });
    
    await wrapper.trigger('lcarsClick');
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('applies correct props', () => {
    const wrapper = mount(LcarsButton, {
      props: {
        color: 'primary',
        disabled: true,
      },
      slots: {
        default: 'Disabled Button',
      },
    });
    
    expect(wrapper.attributes('color')).toBe('primary');
    expect(wrapper.attributes('disabled')).toBeDefined();
  });
});
```

### End-to-End Testing

```ts
// cypress/e2e/lcars-vue-demo.cy.ts
describe('LCARS Vue Demo', () => {
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
  
  it('updates reactive state', () => {
    cy.get('[data-testid="alert-level"]').should('contain', '1');
    cy.get('[data-testid="red-alert-button"]').click();
    cy.get('[data-testid="alert-level"]').should('contain', '5');
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

#### Vue Component Not Rendering

**Problem**: LCARS components don't appear in Vue
**Solution**: Ensure proper import and component registration:
```ts
// Make sure you're importing from the Vue bindings
import { LcarsButton } from '@starfleet-technology/lcars-vue';

// Or register globally via plugin
import { ComponentLibrary } from '@starfleet-technology/lcars-vue';
app.use(ComponentLibrary);
```

#### TypeScript Errors in SFCs

**Problem**: Type errors with LCARS Vue components
**Solution**: Update your tsconfig.json:
```json
{
  "compilerOptions": {
    "types": [
      "@starfleet-technology/lcars-vue"
    ]
  }
}
```

#### Event Handling Issues

**Problem**: Custom events not firing in Vue
**Solution**: Use proper Vue event syntax:
```vue
<!-- Use Vue event syntax -->
<LcarsButton @lcarsClick="handleClick" />

<!-- Not DOM event listeners -->
<!-- <LcarsButton @click="handleClick" /> ❌ -->
```

#### Reactivity Problems

**Problem**: LCARS component props not reactive
**Solution**: Ensure proper reactivity with refs/reactive:
```vue
<script setup lang="ts">
import { ref } from 'vue';

// Use ref for reactive properties
const buttonColor = ref('primary');
const isDisabled = ref(false);
</script>

<template>
  <LcarsButton 
    :color="buttonColor" 
    :disabled="isDisabled"
  >
    Reactive Button
  </LcarsButton>
</template>
```

### Performance Tips

#### Optimize Bundle Size

```ts
// Import only what you need
import { LcarsButton } from '@starfleet-technology/lcars-vue';

// Not the entire library
// import * as Lcars from '@starfleet-technology/lcars-vue'; // ❌
```

#### Async Components

```vue
<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

const LcarsPanel = defineAsyncComponent(() => 
  import('@starfleet-technology/lcars-vue').then(module => ({
    default: module.LcarsPanel
  }))
);
</script>

<template>
  <Suspense>
    <LcarsPanel />
    <template #fallback>
      <div>Loading LCARS Panel...</div>
    </template>
  </Suspense>
</template>
```

### Getting Help

- **Vue Issues**: [GitHub Issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)
- **Component Problems**: Include Vue version and minimal reproduction
- **TypeScript Questions**: [GitHub Discussions](https://github.com/starfleet-technology/lcars-webcomponents/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🖖 Acknowledgments

- **Star Trek** and **LCARS** are trademarks of CBS Studios Inc.
- Built with [Vue 3](https://vuejs.org/) and the LCARS component library
- Powered by [Vite](https://vitejs.dev/) for optimal development experience
- Inspired by authentic LCARS interfaces from the Star Trek universe

---

**The Future is Built with Vue** 🖖

*Experience authentic Star Trek LCARS interfaces with modern Vue 3 patterns*
