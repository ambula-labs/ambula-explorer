import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import lightVector from '@/assets/lightVector.svg'
import './Product.scss'

function Landing() {
  return (
    <div className="Product">
      Product
      <img src={lightVector} className="light" alt="Light vector" />
    </div>
  )
}

export default Landing
