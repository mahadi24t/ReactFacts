import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

function HeaderComponent() {
  return(
    <header><img src="src/assets/react-logo.png" width="40px" alt="React logo" /></header>
  )
}

function SectionComponent1(){
  return(
    <main>
      <h1>Fun facts about React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 200K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}
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

function SectionComponent2() {
  return (
    <>
      <h1>Why I am excited for Learning React!</h1>
      <ol>
        <li>React Powers Real-World Web Apps</li>
        <li>Component-Based Thinking Mirrors Cognitive Modularity</li>
        <li>React Ecosystem = Toolbox for Everything</li>
        <li>React Makes Projects Globally Accessible</li>
        <li>React Develops Intuitive Problem Solving</li>
      </ol>
    </>
  )
}

function FooterComponent(){
  return(
    <footer><small>
      © 2025 developed by Mahadi Hasan. All rights reserved.
      </small></footer>
  )
}
