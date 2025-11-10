// packages/vue-library/lib/plugin.ts

import { Plugin } from 'vue';
import { defineCustomElements } from '@starfleet-technology/lcars/loader';

export const ComponentLibrary: Plugin = {
    async install() {
        defineCustomElements();
    },
};
