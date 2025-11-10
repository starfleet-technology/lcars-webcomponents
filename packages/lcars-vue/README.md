# LCARS Vue Components

<!-- Package badges -->
[![npm version](https://img.shields.io/npm/v/@starfleet-technology/lcars-vue?style=flat-square&label=npm&color=orange)](https://www.npmjs.com/package/@starfleet-technology/lcars-vue)
[![npm downloads](https://img.shields.io/npm/dm/@starfleet-technology/lcars-vue?style=flat-square&label=downloads&color=blue)](https://www.npmjs.com/package/@starfleet-technology/lcars-vue)
[![license](https://img.shields.io/npm/l/@starfleet-technology/lcars-vue?style=flat-square&label=license&color=green)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square&label=build)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![Vue](https://img.shields.io/badge/Vue-3+-4fc08d?style=flat-square&logo=vue.js)](https://vuejs.org/)

> Vue bindings for Star Trek LCARS UI components - seamless integration of LCARS design system with Vue.js applications - Part of the Starfleet Technology LCARS Design System

## 🚀 Installation

### npm/yarn/pnpm

```bash
# npm
npm install @starfleet-technology/lcars-vue

# yarn
yarn add @starfleet-technology/lcars-vue

# pnpm
pnpm add @starfleet-technology/lcars-vue
```

**Note**: This package requires `@starfleet-technology/lcars` as a peer dependency.

## 📚 Documentation

- **[Complete Documentation](../../docs/index.md)** - Full documentation site
- **[API Reference](../../docs/reference/README.md)** - Component API documentation
- **[Vue Integration Guide](../../docs/tutorials/vue-integration.md)** - Vue-specific tutorials
- **[Stencil Guide](../../docs/explanation/stencil/README.md)** - Understanding the underlying technology

## 🎯 Usage

### Basic Setup

```vue
<template>
  <div class="app">
    <lcars-button color="primary">
      Engage
    </lcars-button>
  </div>
</template>

<script setup>
import { LcarsButton } from '@starfleet-technology/lcars-vue';
</script>
```

### With Composition API and TypeScript

```vue
<template>
  <div class="starfleet-controls">
    <lcars-button 
      :color="buttonColor"
      :disabled="systemStatus === 'offline'"
      @click="handleEngageClick"
    >
      {{ alertStatus === 'alert' ? 'Red Alert' : 'Engage' }}
    </lcars-button>
    
    <lcars-button 
      color="secondary"
      @click="toggleSystemStatus"
    >
      {{ systemStatus === 'online' ? 'Go Offline' : 'Come Online' }}
    </lcars-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { LcarsButton } from '@starfleet-technology/lcars-vue';
import type { LcarsButtonColor } from '@starfleet-technology/lcars-vue';

interface Props {
  alertStatus: 'normal' | 'alert';
}

interface Emits {
  engageClick: [];
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const systemStatus = ref<'online' | 'offline'>('online');

const buttonColor = computed((): LcarsButtonColor => 
  props.alertStatus === 'alert' ? 'alert' : 'primary'
);

const handleEngageClick = () => {
  emit('engageClick');
};

const toggleSystemStatus = () => {
  systemStatus.value = systemStatus.value === 'online' ? 'offline' : 'online';
};
</script>
```

### Event Handling

```vue
<template>
  <div class="event-example">
    <lcars-button 
      color="primary"
      @click="handleClick"
    >
      Tactical Systems
    </lcars-button>
    
    <lcars-button 
      color="warning"
      @click="handleEngageSequence"
    >
      Engage Warp Drive
    </lcars-button>
  </div>
</template>

<script setup>
import { LcarsButton } from '@starfleet-technology/lcars-vue';

const handleClick = (event) => {
  console.log('Button clicked:', event.target);
  // Full access to native DOM event and element
};

const handleEngageSequence = async () => {
  console.log('Initiating warp sequence...');
  // Async operations work seamlessly
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Warp drive engaged!');
};
</script>
```

### Reactivity and State Management

```vue
<template>
  <div class="command-center">
    <lcars-button 
      v-for="system in starshipSystems"
      :key="system.id"
      :color="system.status === 'online' ? 'primary' : 'alert'"
      @click="toggleSystem(system.id)"
    >
      {{ system.name }}: {{ system.status }}
    </lcars-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { LcarsButton } from '@starfleet-technology/lcars-vue';

const starshipSystems = reactive([
  { id: 1, name: 'Warp Core', status: 'online' },
  { id: 2, name: 'Shields', status: 'online' },
  { id: 3, name: 'Weapons', status: 'offline' },
  { id: 4, name: 'Life Support', status: 'online' }
]);

const toggleSystem = (systemId) => {
  const system = starshipSystems.find(s => s.id === systemId);
  if (system) {
    system.status = system.status === 'online' ? 'offline' : 'online';
  }
};
</script>
```

## 🧩 Components

### Interactive Components
- **[LcarsButton](../../docs/reference/lcars-button.md)** - Distinctive LCARS-style buttons with Vue event handling

### Coming Soon
- **LcarsPanel** - Layout containers with Vue slot support
- **LcarsDisplay** - Data displays with Vue reactivity
- **LcarsIndicator** - Status components with Vue prop binding

## 🎨 LCARS Design Integration

### CSS Custom Properties with Vue

```vue
<template>
  <div 
    class="themed-component"
    :style="themeVariables"
  >
    <lcars-button color="primary">
      Custom Themed Button
    </lcars-button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { LcarsButton } from '@starfleet-technology/lcars-vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'classic'
  }
});

const themeVariables = computed(() => ({
  '--lcars-primary-color': props.theme === 'classic' ? '#ff9900' : '#ff6600',
  '--lcars-secondary-color': props.theme === 'classic' ? '#9999ff' : '#6699ff'
}));
</script>
```

### Responsive Design

```vue
<template>
  <div class="responsive-controls">
    <!-- Small screens -->
    <div class="sm:hidden">
      <lcars-button size="small" color="primary">
        Engage
      </lcars-button>
    </div>
    
    <!-- Large screens -->
    <div class="hidden sm:block">
      <lcars-button size="large" color="primary">
        Engage Warp Drive
      </lcars-button>
    </div>
  </div>
</template>

<script setup>
import { LcarsButton } from '@starfleet-technology/lcars-vue';
</script>
```

## 📖 API Reference

### LcarsButton

Vue wrapper for the LCARS button component with full TypeScript support.

```typescript
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

interface LcarsButtonEmits {
  /**
   * Emitted when button is clicked
   */
  click: [event: MouseEvent];
}
```

#### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | LcarsButtonColor | `'default'` | Button color variant |
| `size` | LcarsButtonSize | `'medium'` | Button size |
| `disabled` | boolean | `false` | Whether the button is disabled |

#### Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | MouseEvent | Emitted when button is clicked |

For complete API documentation, see the [API Reference](../../docs/reference/README.md).

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- pnpm 8+
- Vue 3+

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

### Testing with Vue

```bash
# Run all tests
pnpm test

# Run tests for this package only
pnpm test --filter="@starfleet-technology/lcars-vue"

# Start Vue demo
pnpm dev --filter="@starfleet-technology/demo-lcars-vue"
```

### Integration Testing

```javascript
// Example test with Vue Test Utils
import { mount } from '@vue/test-utils';
import { LcarsButton } from '@starfleet-technology/lcars-vue';

describe('LcarsButton', () => {
  test('handles click events', async () => {
    const wrapper = mount(LcarsButton, {
      props: { color: 'primary' },
      slots: { default: 'Test Button' }
    });
    
    await wrapper.trigger('click');
    
    expect(wrapper.emitted()).toHaveProperty('click');
    expect(wrapper.emitted().click).toHaveLength(1);
  });
});
```

## 🚀 Framework Compatibility

### Vue Versions

- **Vue 3**: Full support with Composition API and `<script setup>`
- **Vue 2.7**: Compatible with Composition API backport
- **Nuxt 3**: SSR and SSG support

### Build Tools

- **Vite**: Optimal performance and development experience
- **Vue CLI**: Full compatibility
- **Nuxt**: SSR and SSG support  
- **Webpack**: Custom configurations supported

### TypeScript Integration

```vue
<script setup lang="ts">
// Full type safety out of the box
import type { 
  LcarsButtonColor,
  LcarsButtonSize 
} from '@starfleet-technology/lcars-vue';

interface Props {
  variant: LcarsButtonColor;
  size: LcarsButtonSize;
}

const props = defineProps<Props>();
</script>

<template>
  <lcars-button :color="props.variant" :size="props.size">
    Typed Button
  </lcars-button>
</template>
```

### Plugin Registration

```javascript
// main.js - Global registration
import { createApp } from 'vue';
import App from './App.vue';
import { LcarsVuePlugin } from '@starfleet-technology/lcars-vue';

const app = createApp(App);
app.use(LcarsVuePlugin);
app.mount('#app');
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../../CONTRIBUTING.md) for details.

### Vue-Specific Guidelines

1. Follow Vue 3 Composition API best practices
2. Ensure TypeScript types are accurate and exported
3. Add Vue Test Utils tests for new components
4. Document Vue-specific usage patterns
5. Test with both Options API and Composition API when applicable

## 🐛 Issues & Support

- **Bug Reports**: [GitHub Issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)
- **Vue-Specific Questions**: Tag with `vue` label
- **Feature Requests**: [GitHub Discussions](https://github.com/starfleet-technology/lcars-webcomponents/discussions)
- **Documentation**: [Complete Documentation](../../docs/index.md)

## 📦 Related Packages

- **[@starfleet-technology/lcars](../lcars/README.md)** - Core LCARS web components
- **[@starfleet-technology/lcars-react](../lcars-react/README.md)** - React bindings

## 🌟 Demo Applications

- **[Vue Demo](../../apps/demo-vue/README.md)** - Complete Vue application showcase
- **[HTML Demo](../../apps/demo-html/README.md)** - Vanilla HTML/JavaScript implementation
- **[React Demo](../../apps/demo-react/README.md)** - React application showcase

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🖖 Acknowledgments

- **Star Trek** and **LCARS** are trademarks of CBS Studios Inc.
- Inspired by the original LCARS design from Star Trek: The Next Generation
- Built with [Stencil](https://stenciljs.com/) for maximum Vue compatibility
- Vue bindings generated using Stencil's official Vue output target
- Thanks to all [contributors](https://github.com/starfleet-technology/lcars-webcomponents/contributors) who help maintain this project

---

**Live long and prosper** 🖖

*Created with ❤️ by the Starfleet Technology team*