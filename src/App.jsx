import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './Header'
import SectionComponent1 from './Comp1'
import SectionComponent2 from './comp2'
import FooterComponent from './footer'


function App() {
  const [count, setCount] = useState(0)

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import { createRoot } from 'react-dom/client'

const root = createRoot(document.querySelector("#root"))

root.render(
  <>
    <MainPage />
  </>
) 




function MainPage() {
  return (
    <>
    <HeaderComponent/>
    <SectionComponent1/>
    <SectionComponent2/>
    <FooterComponent/>
    </>
  )
}



