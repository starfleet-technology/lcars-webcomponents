import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { defineCustomElements } from '@starfleet-technology/lcars/loader';

defineCustomElements();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>LCARS HTML Demo</h1>
    
    <p class="read-the-docs">
      Click on the button to learn more
    </p>
    <lcars-button>LCARS Button</lcars-button>
  </div>
  
`