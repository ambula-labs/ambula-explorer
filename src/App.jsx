import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import './App.scss'
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <div id="detail">
        <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default App
