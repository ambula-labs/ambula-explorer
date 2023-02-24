import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.scss'
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  )
}

export default App
