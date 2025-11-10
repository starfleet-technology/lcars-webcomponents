import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { LcarsButton } from '@starfleet-technology/lcars-react';

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>LCARS React Demo</h1>
      
     
      <p className="read-the-docs">
        Click on the button to learn more
      </p>
      <LcarsButton>LCARS Button</LcarsButton>
    </>
  )
}

export default App
