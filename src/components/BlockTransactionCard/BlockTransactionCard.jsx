import { useState } from 'react'
import AmbulaLogoShort from '@/assets/AmbulaLogoSmall.svg';
import './BlockTransactionCard.scss'

function BlockTransactionCard({type}) {
  return (
    <div className='blockTransactionCard'>
        <div className='blockTransactionCardBackground'>
            <div className='left'>
                <div className='type'>
                    {type === 'block' && 'Bk'}
                    {type === 'transaction' && 'Tx'}
                </div>
                <div className='infos'>
                    <div className='infosTitle'>
                        16518274
                    </div>
                    <div className='infosDate'>
                        12sec ago.
                    </div>
                </div>
            </div>
            {type === 'block' &&
                <div className='center'>
                    <div className='title'>
                        beaverbuild
                    </div>
                    <div className='infos'>
                        <span>97 txns</span> in 12 sec
                    </div>
                </div>
            } {type === 'transaction' &&
                <div className='center'>
                        <div className='from'>
                        From <span>0x612aaaa87967e...</span>
                        </div>
                        <div className='to'>
                        To <span>0xdac17f958d2ee...</span>
                        </div>
                </div>
            }
            <div className='right'>
                <img src={AmbulaLogoShort} alt='Ambula Logo Small'/>
                <span>0.324</span>
            </div>
        </div>
        <div className='blockTransactionCardBorder'></div>
    </div>
  )
}

export default BlockTransactionCard
