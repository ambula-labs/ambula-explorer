import { useState } from 'react'
import { NavLink } from "react-router-dom";
import AmbulaLogoLarge from '@/assets/AmbulaLogoLarge.svg';
import UK from '@/assets/UK.png';
import { motion } from "framer-motion";
import './Navbar.scss';

function Navbar() {

  return (
    <div className="Navbar">
      <img src={AmbulaLogoLarge} className="ambulaLogo" alt="Ambula Logo Large" />
      <div className='rightContainer'>
        <NavLink to="/" className={({ isActive }) => isActive ? 'activeRoute' : undefined}>
          App
        </NavLink>
        <NavLink to="/product" className={({ isActive }) => isActive ? 'activeRoute' : undefined}>
          Product
        </NavLink>
        <NavLink to="/build" className={({ isActive }) => isActive ? 'activeRoute' : undefined}>
          Build
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'activeRoute' : undefined}>
          About
        </NavLink>
        <motion.div className='enterApp'   
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => e.preventDefault()}
        >
          <NavLink to="/" className={({ isActive }) => isActive ? 'activeRoute' : undefined}>
            Enter App
          </NavLink>
        </motion.div>
        <div className='languageSelector'>
          <img src={UK} className="languageImage" alt="Language Image"/> EN
        </div>
      </div>
    </div>
  )
}

export default Navbar
