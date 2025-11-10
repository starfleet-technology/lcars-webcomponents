# LCARS HTML Demo

<!-- Demo application badges -->
[![build status](https://img.shields.io/github/actions/workflow/status/starfleet-technology/lcars-webcomponents/ci.yml?style=flat-square&label=build)](https://github.com/starfleet-technology/lcars-webcomponents/actions)
[![license](https://img.shields.io/github/license/starfleet-technology/lcars-webcomponents?style=flat-square&label=license&color=green)](../../LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

> Vanilla HTML/JavaScript demonstration of the LCARS Design System - Interactive showcase of authentic Star Trek interface components

## 🌟 Features

- **Pure HTML/CSS/JavaScript** - No framework dependencies required
- **CDN Integration** - Direct script inclusion from unpkg or jsDelivr
- **TypeScript Support** - Full type safety with Vite development server
- **Live Reload** - Hot module replacement during development
- **Component Showcase** - Interactive demonstration of LCARS components
- **Responsive Design** - Works on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm 8+

### Running Locally

```bash
# From the monorepo root
pnpm install

# Start the HTML demo
pnpm dev --filter="@starfleet-technology/demo-lcars-html"
```

The demo will be available at **http://localhost:5173**

### Production Build

```bash
# Build the demo application
pnpm build --filter="@starfleet-technology/demo-lcars-html"

# Preview the production build
pnpm preview --filter="@starfleet-technology/demo-lcars-html"
```

## 📋 What's Included

### LCARS Components Showcase

This demo demonstrates:

- **LcarsButton** - Interactive buttons with authentic LCARS styling
- **Custom Elements** - Direct HTML usage without framework bindings
- **Event Handling** - JavaScript event listeners and DOM manipulation
- **CSS Integration** - Custom styling alongside LCARS components

### Demo Sections

- **Basic Integration** - Simple component usage in HTML
- **CDN Usage** - Loading components from CDN without build tools
- **Interactive Examples** - Components responding to user interactions
- **Styling Examples** - Custom CSS alongside LCARS styling

### Code Examples

Each component demonstration includes:
- **Direct HTML usage** with custom elements
- **JavaScript integration** for event handling and dynamic content
- **CSS customization** examples
- **TypeScript definitions** for enhanced development experience

## 🛠️ Development

### Project Structure

```
demo-html/
├── src/
│   ├── main.ts          # Main application entry point
│   ├── style.css        # Custom demo styles
│   └── typescript.svg   # TypeScript logo asset
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
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

# Type checking (standalone)
pnpm type-check
```

### Customization

#### Adding New Components

To add new LCARS components to the demo:

1. **Import the component** (if using build tools):
   ```typescript
   import { defineCustomElements } from '@starfleet-technology/lcars/loader';
   defineCustomElements();
   ```

2. **Use in HTML**:
   ```html
   <lcars-button color="primary">New Button</lcars-button>
   ```

3. **Add event handlers**:
   ```javascript
   document.querySelector('lcars-button').addEventListener('click', (event) => {
     console.log('Button clicked!', event);
   });
   ```

#### CDN Integration (No Build Tools)

For using LCARS components without any build process:

```html
<!DOCTYPE html>
<html>
<head>
  <title>LCARS Demo</title>
</head>
<body>
  <!-- Load LCARS components from CDN -->
  <script type="module" src="https://unpkg.com/@starfleet-technology/lcars/dist/lcars/lcars.esm.js"></script>
  
  <!-- Use components directly -->
  <lcars-button color="primary">Engage</lcars-button>
  
  <script>
    // Wait for components to be defined
    customElements.whenDefined('lcars-button').then(() => {
      const button = document.querySelector('lcars-button');
      button.addEventListener('click', () => {
        alert('Warp drive engaged!');
      });
    });
  </script>
</body>
</html>
```

#### Custom Styling

```css
/* Override LCARS component styles */
lcars-button {
  --lcars-primary-color: #ff6600;
  --lcars-button-padding: 12px 24px;
}

/* Custom page styling */
.demo-container {
  background: #000;
  color: #ffcc99;
  font-family: 'LCARS', monospace;
}
```

## 🎨 LCARS Design Implementation

This demo showcases authentic LCARS design principles:

### Visual Elements
- **Color Palette**: Authentic LCARS orange (#FF9900), blue (#9999FF), and accent colors
- **Typography**: Monospace fonts mimicking Star Trek computer displays
- **Layout**: Angular geometric shapes and distinctive interface elements
- **Animation**: Subtle transitions and interactive feedback

### Interactive Features
- **Button Feedback**: Visual response to user interactions
- **Custom Elements**: Modern web standards implementation
- **Event Handling**: JavaScript event management
- **Responsive Design**: Adaptive layout for different screen sizes

## 📚 Documentation Links

- **[Complete Documentation](../../docs/index.md)** - Full documentation site
- **[LCARS Components](../../packages/lcars/README.md)** - Core component library
- **[API Reference](../../docs/reference/README.md)** - Detailed component APIs
- **[Installation Guide](../../packages/lcars/README.md#installation)** - Setup instructions

## 🔗 Related Demos

- **[React Demo](../demo-react/README.md)** - React application showcase
- **[Vue Demo](../demo-vue/README.md)** - Vue application showcase

## 🧪 Testing

### Manual Testing

1. **Component Rendering**: Verify all components display correctly
2. **Interactions**: Test button clicks and other interactive elements
3. **Responsive Design**: Check layout on different screen sizes
4. **Browser Compatibility**: Test in Chrome, Firefox, Safari, and Edge

### Browser Support

- **Chrome** 90+
- **Firefox** 90+
- **Safari** 14+
- **Edge** 90+

### Web Standards Used

- Custom Elements v1
- Shadow DOM v1
- ES Modules
- CSS Custom Properties

## 🚀 Deployment

### Static Hosting

```bash
# Build for production
pnpm build

# Deploy dist/ folder to your hosting service
# Works with Netlify, Vercel, GitHub Pages, etc.
```

### Example Deployment Commands

```bash
# Netlify
npx netlify deploy --prod --dir=dist

# Vercel
npx vercel --prod dist

# GitHub Pages (using gh-pages)
npx gh-pages -d dist
```

## 🐛 Troubleshooting

### Common Issues

#### Components Not Displaying

**Problem**: LCARS components appear as empty custom elements
**Solution**: 
```html
<!-- Ensure the component library is loaded -->
<script type="module" src="https://unpkg.com/@starfleet-technology/lcars/dist/lcars/lcars.esm.js"></script>

<!-- Or with defineCustomElements -->
<script>
import { defineCustomElements } from '@starfleet-technology/lcars/loader';
defineCustomElements();
</script>
```

#### TypeScript Errors in Development

**Problem**: TypeScript compiler errors for LCARS components
**Solution**: Add component types to your tsconfig.json:
```json
{
  "compilerOptions": {
    "types": ["@starfleet-technology/lcars"]
  }
}
```

#### CSS Styling Issues

**Problem**: Custom styles not applying to LCARS components
**Solution**: Use CSS custom properties:
```css
lcars-button {
  --lcars-primary-color: your-color;
}
```

#### Build Errors

**Problem**: Vite build fails with module resolution errors
**Solution**: Check that all dependencies are installed:
```bash
pnpm install
```

### Getting Help

- **Component Issues**: [LCARS Components GitHub Issues](https://github.com/starfleet-technology/lcars-webcomponents/issues)
- **Demo Problems**: Include browser console output and steps to reproduce
- **General Questions**: [GitHub Discussions](https://github.com/starfleet-technology/lcars-webcomponents/discussions)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

## 🖖 Acknowledgments

- **Star Trek** and **LCARS** are trademarks of CBS Studios Inc.
- Demo inspired by authentic LCARS interfaces from the Star Trek universe
- Built with vanilla HTML/JavaScript and the LCARS component library
- Powered by [Vite](https://vitejs.dev/) for development and build tooling

---

**Explore the Future of Interface Design** 🚀

*Experience authentic Star Trek LCARS interfaces in pure HTML and JavaScript*