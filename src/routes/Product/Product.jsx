import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import lightVector from '@/assets/lightVector.svg'
import AmbulaLogoShort from '@/assets/AmbulaLogoSmall.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import './Product.scss'

function Landing() {
  return (
    <div className="Product">
      <div className='cryptoHeader'>
        <div className='leftHeader'>
          <div className='titleHeader'>
            Cryptocurrency | Coin
          </div>
          <div className='informationHeader'>
            <div className='ambulaLogoSmall'><img src={AmbulaLogoShort} alt='Ambula Logo Small'/></div>
            <div className='informationContainer'>
              <div className='informationTitle'>
                Ambula
              </div>
              <div className='informationContent'>
                <span>$ 2,400.80</span>
                <div className='progress'>
                  <FontAwesomeIcon icon={faCaretUp} />                  
                  0,50%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='rightHeader'>
          <div className='pub'>
            ADVERTISING 
            INSERT
          </div>
        </div>
      </div>
      <img src={lightVector} className="light" alt="Light vector" />
    </div>
  )
}

export default Landing
