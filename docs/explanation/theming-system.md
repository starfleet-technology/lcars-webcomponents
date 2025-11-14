# LCARS Theming System

## Context & Background

One of the biggest challenges in creating a design system is balancing consistency with flexibility. LCARS components need to maintain their authentic Star Trek identity while allowing organizations to adapt them for diverse use cases and brand requirements.

Our theming system is built on CSS Custom Properties (CSS Variables) and follows a design token architecture that provides controlled customization points without compromising the integrity of the LCARS design language.

## Design Token Philosophy

### Hierarchical Token Structure

**Approach**: Theming values are organized in a hierarchical system that separates semantic meaning from implementation details:

```css
/* Global Design Tokens */
:root {
  /* Base Palette */
  --lcars-orange-500: #ff9900;
  --lcars-blue-500: #9999ff;
  --lcars-red-500: #cc6666;
  
  /* Semantic Tokens */
  --lcars-primary-color: var(--lcars-orange-500);
  --lcars-secondary-color: var(--lcars-blue-500);
  --lcars-alert-color: var(--lcars-red-500);
  
  /* Component Tokens */
  --lcars-button-primary-bg: var(--lcars-primary-color);
  --lcars-button-primary-text: #000000;
}
```

**Benefits**:
- **Semantic Clarity**: Token names describe purpose, not appearance
- **Flexible Mapping**: Same semantic token can map to different colors in different themes
- **Maintainable Updates**: Changes cascade through the hierarchy automatically
- **Override Flexibility**: Different levels can be customized independently

### Design Token Categories

**Base Tokens**: Raw values that form the foundation
```css
--lcars-orange-100: #fff4e6;
--lcars-orange-200: #ffe0b3;
--lcars-orange-300: #ffcc80;
--lcars-orange-400: #ffb84d;
--lcars-orange-500: #ff9900;  /* Primary LCARS orange */
--lcars-orange-600: #e68a00;
--lcars-orange-700: #cc7700;
```

**Semantic Tokens**: Purpose-driven mappings
```css
--lcars-primary-color: var(--lcars-orange-500);
--lcars-background-color: #000000;
--lcars-text-color: #ffcc99;
--lcars-surface-color: #332211;
```

**Component Tokens**: Component-specific values
```css
--lcars-button-bg: var(--lcars-primary-color);
--lcars-button-text: var(--lcars-background-color);
--lcars-button-border: transparent;
--lcars-button-hover-bg: var(--lcars-orange-400);
```

## CSS Custom Properties Strategy

### Encapsulation with Customization

**Challenge**: Shadow DOM encapsulation prevents external styles from affecting components, but theming requires external control.

**Solution**: CSS Custom Properties pierce the Shadow DOM boundary while maintaining encapsulation:

```css
/* Component internal styles (encapsulated) */
:host {
  /* Accept external customization */
  --button-bg: var(--lcars-button-bg, var(--lcars-primary-color));
  --button-text: var(--lcars-button-text, #000000);
}

.button {
  /* Use customizable values with fallbacks */
  background: var(--button-bg);
  color: var(--button-text);
  /* Other styles remain encapsulated */
  border-radius: 0;
  font-family: 'LCARS Monospace', monospace;
}
```

**Benefits**:
- **Controlled Customization**: Only intended properties can be modified
- **Fallback Safety**: Components work even without theme customization
- **Performance**: No runtime style recalculation or JavaScript intervention
- **Standards Compliance**: Uses native CSS functionality

### Theming Interface Design

**Principle**: Provide powerful customization without exposing implementation details:

```css
/* Public theming API */
lcars-button {
  --lcars-button-primary-bg: #00ff00;     /* ✅ Semantic, safe to customize */
  --lcars-button-primary-text: #000000;   /* ✅ Semantic, safe to customize */
}

/* Internal implementation (not exposed) */
lcars-button {
  --internal-animation-duration: 0.2s;    /* ❌ Implementation detail */
  --internal-shadow-calculation: 2px;     /* ❌ Could break layout */
}
```

## Theme Architecture

### Default LCARS Theme

**Base Configuration**: Authentic Star Trek LCARS colors and proportions:

```css
:root {
  /* Classic LCARS Palette */
  --lcars-primary-color: #ff9900;      /* Classic LCARS orange */
  --lcars-secondary-color: #9999ff;    /* LCARS blue */
  --lcars-background-color: #000000;   /* Deep space black */
  --lcars-text-color: #ffcc99;         /* Warm text */
  --lcars-surface-color: #2a1810;      /* Dark surface */
  
  /* Status Colors */
  --lcars-success-color: #99cc99;      /* Green for success */
  --lcars-warning-color: #ffcc66;      /* Yellow for caution */
  --lcars-error-color: #cc6666;        /* Red for alerts */
  --lcars-info-color: #66ccff;         /* Cyan for information */
  
  /* Interactive States */
  --lcars-hover-opacity: 0.8;
  --lcars-active-opacity: 0.6;
  --lcars-disabled-opacity: 0.3;
}
```

### Custom Theme Creation

**Approach**: Override semantic tokens to create new themes while maintaining LCARS identity:

```css
/* Enterprise-D Bridge Theme */
.theme-enterprise-d {
  --lcars-primary-color: #ff6600;      /* Slightly redder orange */
  --lcars-secondary-color: #6666ff;    /* Deeper blue */
  --lcars-background-color: #0a0a0a;   /* Slightly lighter black */
}

/* Voyager Theme */  
.theme-voyager {
  --lcars-primary-color: #cc9900;      /* More golden orange */
  --lcars-secondary-color: #9999cc;    /* Muted blue */
  --lcars-accent-color: #cc99ff;       /* Purple accent */
}

/* Deep Space Nine Theme */
.theme-ds9 {
  --lcars-primary-color: #ff9966;      /* Warmer orange */
  --lcars-secondary-color: #6699cc;    /* Cooler blue */
  --lcars-surface-color: #1a1510;      /* Darker surfaces */
}
```

### Brand Integration Strategy

**Philosophy**: Allow brand integration without losing LCARS identity:

```css
/* Corporate Brand Integration */
.brand-starfleet-academy {
  --lcars-primary-color: #003d6b;      /* Starfleet blue */
  --lcars-secondary-color: #ffc72c;    /* Academy gold */
  --lcars-accent-color: #dc143c;       /* Command red */
  
  /* Maintain LCARS characteristics */
  /* Geometric shapes, typography, and proportions unchanged */
}
```

**Boundaries**: What can be customized vs. what remains consistent:

**Customizable**:
- Color palette (with contrast requirements)
- Spacing scale (within proportional limits)
- Animation timing and easing
- Optional sound effects

**Protected**:
- Geometric proportions and corner radii
- Typography hierarchy and font choices
- Component behavior and interaction patterns
- Accessibility features and keyboard navigation

## Implementation Patterns

### Component-Level Theming

**Pattern**: Each component accepts theme customization through well-defined interfaces:

```tsx
@Component({
  tag: 'lcars-button',
  styleUrl: 'lcars-button.css',
  shadow: true
})
export class LcarsButton {
  render() {
    return (
      <Host>
        <button class="button">
          <slot />
        </button>
      </Host>
    );
  }
}
```

```css
/* lcars-button.css */
:host {
  /* Theme interface */
  --button-bg: var(--lcars-button-bg, var(--lcars-primary-color));
  --button-text: var(--lcars-button-text, var(--lcars-background-color));
  --button-border: var(--lcars-button-border, transparent);
  
  /* Internal styling */
  display: inline-block;
}

.button {
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--button-border);
  
  /* Protected LCARS characteristics */
  border-radius: 0;
  font-family: var(--lcars-font-mono);
  text-transform: uppercase;
  padding: 0.5rem 1rem;
}
```

### Dynamic Theme Switching

**Implementation**: Runtime theme changes without page reload:

```javascript
// Theme switching utility
class LcarsThemeManager {
  static setTheme(themeName) {
    // Remove existing theme classes
    document.body.classList.remove(...this.getThemeClasses());
    
    // Apply new theme
    if (themeName !== 'default') {
      document.body.classList.add(`theme-${themeName}`);
    }
    
    // Persist choice
    localStorage.setItem('lcars-theme', themeName);
  }
  
  static getThemeClasses() {
    return Array.from(document.body.classList)
      .filter(cls => cls.startsWith('theme-'));
  }
}

// Usage
LcarsThemeManager.setTheme('enterprise-d');
```

### Responsive Theming

**Approach**: Themes can adapt to different screen sizes and contexts:

```css
/* Base theme values */
:root {
  --lcars-button-padding: 0.5rem 1rem;
  --lcars-text-size: 1rem;
}

/* Mobile adaptations */
@media (max-width: 768px) {
  :root {
    --lcars-button-padding: 0.75rem 1.25rem;  /* Larger touch targets */
    --lcars-text-size: 1.125rem;              /* Improved readability */
  }
}

/* High contrast adaptations */
@media (prefers-contrast: high) {
  :root {
    --lcars-primary-color: #ffaa00;           /* Higher contrast orange */
    --lcars-text-color: #ffffff;              /* Pure white text */
  }
}
```

## Advanced Customization Features

### Programmatic Theme Generation

**Capability**: Generate themes from brand colors while maintaining LCARS aesthetics:

```javascript
class LcarsThemeGenerator {
  static generateTheme(brandColor, options = {}) {
    const baseHue = this.extractHue(brandColor);
    const palette = this.generatePalette(baseHue, options.saturation || 0.8);
    
    return {
      '--lcars-primary-color': palette.primary,
      '--lcars-secondary-color': palette.secondary,
      '--lcars-accent-color': palette.accent,
      '--lcars-surface-color': palette.surface,
      // Maintain LCARS contrast ratios
      '--lcars-text-color': this.ensureContrast(palette.text, palette.surface)
    };
  }
}
```

### Animation Theme Support

**Feature**: Customizable animation preferences:

```css
/* Animation theming */
:root {
  --lcars-animation-duration: 0.2s;
  --lcars-animation-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --lcars-hover-transition: all var(--lcars-animation-duration) var(--lcars-animation-easing);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  :root {
    --lcars-animation-duration: 0.01s;  /* Nearly instant */
    --lcars-hover-transition: none;      /* Remove transitions */
  }
}

/* High performance mode */
.theme-performance {
  --lcars-animation-duration: 0s;       /* No animations */
  --lcars-hover-transition: none;       /* No transitions */
}
```

## Performance Considerations

### CSS Custom Property Efficiency

**Advantage**: CSS Custom Properties are highly performant:
- **No JavaScript Runtime**: Changes are handled by browser's CSS engine
- **Efficient Inheritance**: Values cascade naturally through DOM tree
- **Optimal Repainting**: Browser can optimize style recalculation
- **Memory Efficient**: No JavaScript objects or event listeners required

### Theme Loading Strategy

**Approach**: Progressive theme loading to minimize initial bundle size:

```javascript
// Lazy load additional themes
async function loadTheme(themeName) {
  if (!themeName || themeName === 'default') return;
  
  try {
    // Dynamic import for theme-specific CSS
    await import(`./themes/${themeName}.css`);
    document.body.classList.add(`theme-${themeName}`);
  } catch (error) {
    console.warn(`Theme ${themeName} not available, using default`);
  }
}
```

## Future Extensibility

### Design Token Standards Alignment

**Strategy**: Align with emerging design token standards:
- **Design Tokens Community Group**: Track W3C standardization efforts
- **Token Format Compatibility**: Support for .json token formats
- **Build Tool Integration**: Integration with token transformation tools
- **Cross-Platform Tokens**: Tokens that work for web, mobile, and desktop

### Advanced Theming Features

**Roadmap Considerations**:
- **Color Scheme Detection**: Automatic light/dark mode support
- **System Theme Integration**: Respect OS-level theme preferences
- **Component State Theming**: Different themes for loading, error, success states
- **Contextual Theming**: Themes that adapt based on component usage context

## Best Practices for Theme Creators

### Maintaining LCARS Identity

**Guidelines**:
1. **Preserve Geometric Language**: Keep angular shapes and distinctive proportions
2. **Maintain Contrast Ratios**: Ensure accessibility standards are met
3. **Respect Typography Hierarchy**: Don't override font families or text treatments
4. **Test Across Components**: Ensure theme works with all LCARS components
5. **Consider Context**: Think about how theme will work in different applications

### Theme Validation

**Approach**: Automated testing for theme compliance:

```javascript
// Theme validation utility
class LcarsThemeValidator {
  static validateTheme(themeCSS) {
    const tests = [
      this.testContrastRatios(themeCSS),
      this.testColorAccessibility(themeCSS),
      this.testResponsiveValues(themeCSS),
      this.testComponentCompatibility(themeCSS)
    ];
    
    return {
      valid: tests.every(test => test.passed),
      issues: tests.filter(test => !test.passed)
    };
  }
}
```

The LCARS theming system provides the flexibility organizations need while preserving the authentic LCARS experience that makes these components distinctive. Through careful architecture and thoughtful constraints, we enable creativity while maintaining consistency.

## Related Topics

- [Design Philosophy](./design-philosophy.md) - How theming supports our core design principles
- [Performance Considerations](./performance-considerations.md) - How theming choices impact performance
- [Architecture Overview](./architecture-overview.md) - How theming fits into the overall system design
- [Browser Compatibility](./browser-compatibility.md) - CSS Custom Property support across browsers