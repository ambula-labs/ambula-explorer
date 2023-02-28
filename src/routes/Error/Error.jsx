import { useState } from 'react'
import lightVector from '@/assets/lightVector.svg';
import { useRouteError } from "react-router-dom";
import { useGLTF } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import Navbar from '../../components/Navbar/Navbar';
import Error404 from '../../components/Models/Error404';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom";
import { faArrowRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import './Error.scss'

function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="Error">
            <Navbar/>
            {/* <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
            <Canvas flat
            camera={ {
                fov: 30,
                near: 1,
                far: 20,
                position: [ 12,5, 8 ]
            } }
            className='errorModel'>
                <Error404/>
            </Canvas>

            <motion.button 
            className='homeButton'
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink to="/" >
                HOME PAGE
            </NavLink>
          </motion.button>
          <img src={lightVector} className="light" alt="Light vector" />
        </div>
    )
}

export default Error
