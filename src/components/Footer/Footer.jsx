import { useState } from 'react'
import { NavLink } from "react-router-dom";
import AmbulaLogoLarge from '@/assets/AmbulaLogoLarge.svg';
import Github from '@/assets/github.svg';
import Discord from '@/assets/discord.svg';
import Mail from '@/assets/telegram-alt.svg';
import Twitter from '@/assets/twitter.svg';
import Youtube from '@/assets/youtube.svg';
import { motion } from "framer-motion";
import './Footer.scss';

function Footer() {

  return (
    <div className="Footer">
        <div className='mailingContainer'>
            <div className='mailingTitle'>
                Mailing List
            </div>
            <div className='mailingDesc'>
                Follow the latest updates. Unsubscribe at any time. Privacy policy
            </div>
            <div className='inputContainer'>
                <input type="text" placeholder='Your email Here' />
                <motion.i 
                    className="fa-solid fa-arrow-right"
                    whileHover={{
                        scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                />
            </div>
        </div>
        <div className='bottomContainer'>
            <div className='leftContainer'>
                <img src={AmbulaLogoLarge} className="ambulaLogo" alt="Ambula Logo Large" />
                <div className='content'>
                    Ambula's objective is to carry out a research project implementing the 
                    consensus algorithm "Proof of Interaction". The main challenge related 
                    to this work will be to meet the technical challenges related to the implementation.
                </div>
                <div className='appLogoContainer'>
                    <img src={Github} className="appLogo github" alt="Github logo" />
                    <img src={Discord} className="appLogo" alt="Discord logo" />
                    <img src={Mail} className="appLogo" alt="Mail logo" />
                    <img src={Twitter} className="appLogo twitter" alt="Twitter logo" />
                    <img src={Youtube} className="appLogo youtube" alt="Youtube logo" />
                </div>
            </div>
    
            <div className='linkContainer'>
                <NavLink to="/" className='linkTitle'>
                    App
                </NavLink>
                <NavLink to="/">
                    Main app
                </NavLink>
                <NavLink to="/">
                    Wallet
                </NavLink>
            </div>
            <div className='linkContainer'>
                <NavLink to="/" className='linkTitle'>
                    Community
                </NavLink>
                <NavLink to="/">
                    Discord
                </NavLink>
                <NavLink to="/">
                    Twitter
                </NavLink>
                <NavLink to="/">
                    Mail
                </NavLink>
            </div>
            <div className='linkContainer'>
                <NavLink to="/" className='linkTitle'>
                    Learn
                </NavLink>
                <NavLink to="/">
                    Youtube
                </NavLink>
                <NavLink to="/">
                    Documentation
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Footer
