import { useState } from 'react'
import reactLogo from '@/assets/react.svg'
import lightVector from '@/assets/lightVector.svg'
import AmbulaLogoShort from '@/assets/AmbulaLogoSmall.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
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
      <div className='cryptoStats'>
        <div className='statsBarBackground'>
          <div className='statsContainer'>
            <div className='statsTitle'>
              Market cap
            </div>
            <div className='statsContent'>
              <span>$</span>
              275,580,894
            </div>
            <div className='statsProgress up'>
            <FontAwesomeIcon icon={faCaretUp} /> 0,50%
            </div>
          </div>
          <div className='statsContainer'>
            <div className='statsTitle'>
              Fully Diluted
            </div>
            <div className='statsContent'>
              <span>$</span>
              274,736,646
            </div>
            <div className='statsProgress down'>
            <FontAwesomeIcon icon={faCaretDown} /> 0,75%
            </div>
          </div>
          <div className='statsContainer'>
            <div className='statsTitle'>
              Volume
            </div>
            <div className='statsContent'>
              <span>$</span>
              23,274,917
            </div>
            <div className='statsProgress up'>
            
            </div>
          </div>
          <div className='statsContainer'>
            <div className='statsTitle'>
              Circulating supply
            </div>
            <div className='statsContent'>
              116,275,400
              <span>AMB</span>
            </div>
            <div className='statsProgress amb'>
              116,275,400
            </div>
          </div>
        </div>
        <div className='statsBar'></div>
        <div className='statsBottom'>
          <div className='statsOrder'>
            <div className='orderTitle'>
              Create Order 
              <span><FontAwesomeIcon icon={faCircleInfo} /> How it works</span>
            </div>
            <div className='hr'>&nbsp;</div>
          </div>
          <div className='statsChart'>
            <div className='statsChartBackground'></div>
            <div className='statsChartBorder'></div>
          </div>
        </div>
      </div>
      <img src={lightVector} className="light" alt="Light vector" />
    </div>
  )
}

export default Landing
