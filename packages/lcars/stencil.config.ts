import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'lcars',
  outputTargets: [
    // Generate standard distribution files
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    // Generate distribution for custom elements
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    // Generate README.md files for components
    {
      type: 'docs-readme',
    },
    // Generate a www directory (for demo purposes)
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    // React output target
    reactOutputTarget({
      outDir: '../lcars-react/src/components/stencil-generated/',
    }),
    // Vue output target
     vueOutputTarget({
      componentCorePackage: '@starfleet-technology/lcars',
      proxiesFile: '../lcars-vue/src/components.ts',
    }),
  ],
  testing: {
    browserHeadless: "shell",
  },
};
