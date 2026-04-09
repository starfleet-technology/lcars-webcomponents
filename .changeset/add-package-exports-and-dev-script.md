---
"@starfleet-technology/lcars-react": patch
"@starfleet-technology/lcars-vue": patch
---

Add `exports` field and `dev` script to React and Vue binding packages.

**`exports` field:**  
Both packages now declare a modern `exports` map in `package.json`. Bundlers and Node.js will use the explicit `import` and `types` conditions instead of falling back to the legacy `main`/`types` fields. This is required for correct subpath resolution and aligns the binding packages with the already-correct `@starfleet-technology/lcars` core package.

**`dev` script (`lcars-vue`):**  
`@starfleet-technology/lcars-vue` was missing a `dev` script, causing `turbo run dev` to fail for the entire workspace. The script `tsc -p . --outDir ./dist --watch` has been added, matching the existing pattern in `@starfleet-technology/lcars-react`.
