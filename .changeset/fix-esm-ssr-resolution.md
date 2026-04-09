---
"@starfleet-technology/lcars-react": patch
"@starfleet-technology/lcars-vue": patch
---

Fix ESM resolution failure in Node.js SSR environments.

In SSR frameworks (React Router v7, Next.js, etc.) Vite externalises `node_modules` and delegates module resolution to Node.js directly. Node.js ESM strict mode requires explicit `.js` extensions on all relative specifiers and does not perform automatic extension resolution.

The published `dist/index.js` entry points for both packages contained extension-less relative imports (e.g. `export * from './components/stencil-generated/components'`), which caused a hard crash at startup under SSR:

```
Cannot find module '…/@starfleet-technology/lcars-react/dist/components/stencil-generated/components'
imported from …/@starfleet-technology/lcars-react/dist/index.js
```

**Fixes applied:**
- All relative imports in source files now carry explicit `.js` extensions; `tsc` is configured with `rewriteRelativeImportExtensions: true` to preserve them in emitted output
- `"type": "module"` added to `@starfleet-technology/lcars-react`'s `package.json` so Node.js correctly interprets the `.js` output as ESM (it was already set on `lcars-vue`)
