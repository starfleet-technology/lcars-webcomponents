import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// src/main.js
import { ComponentLibrary } from '@starfleet-technology/lcars-vue';

createApp(App).use(ComponentLibrary).mount('#app')
