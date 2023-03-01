import AmbulaLogoShort from '@/assets/AmbulaLogoSmall.svg';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './BlockList.scss'

function BlockList({type}) {
    const [tmpBlockList, setTmpBlockList] = useState([])
    const [blockList, setBlockList] = useState([]);
    let keys = [];

    //Fonction permettant de retourner un tableau unique d'élement
    function uniq(a) {
      var seen = {};
      return a.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
    }


    //Ajout d'un block dans la liste des derniers Blocks
    const addBlock = (block) => {
      setTmpBlockList((prevBlocks) => {
        let tmpArray = [...prevBlocks, block];
        //Lorsqu'on a plus de 7 blocs dans la liste on enlève les blocs en trop en FIFO
        if(tmpArray.length > 7){
          tmpArray = tmpArray.slice(tmpArray.length - 7);
        }
        //On appelle la fonction uniq, car la methode subscribeNewHeads peut renvoyer un block plusieurs fois
        return uniq(tmpArray);
      });
    }

    async function getBlockList() {
        
      // Se connecter au nœud Substrate
      const wsProvider = new WsProvider('wss://rpc.polkadot.io'); // REMOTE MODE
      // const wsProvider = new WsProvider('ws://127.0.0.1:9944'); // LOCAL MODE
      
      const api = await ApiPromise.create({ provider: wsProvider });

      // Souscription aux nouveau Header
      const hu = await api.rpc.chain.subscribeNewHeads((block) => {
        //Ajout d'un nouveau block
        addBlock(block);
      }
      );
    }
    
    //On appelle la fonction une fois au démarage afin de recevoir les derniers blocs
    useEffect(() => {
      getBlockList();
    }, []);

    //On passe par une variable temporaire afin d'éviter les mutations liées à l'asynchronisme de la récupération des Headers
    useEffect(() => {
      setBlockList(uniq(tmpBlockList));
    }, [tmpBlockList]);

  //Animation utilisée pour nos Cards présentes dans la liste des derniers blocks
  const animations = {
    initial: { scale: 0, opacity: 0},
    animate: { scale: 1, opacity: 1},
    exit: { scale: 0, opacity: 0}
  }

  return (
    <div className="BlockList">
        <AnimatePresence >
        {blockList.map((block) => {
          //On s'assure que la key n'existe pas afin de ne pas avoir de problème d'affichage
            let key = block.number.toNumber();
            while(keys.includes(key)){
              key++;
            }
            keys.push(key);
            return <motion.div {...animations} key={key} className='BlockCard' layout>
                <div className='BlockCardBackground'>
                    <div className='left'>
                        <div className='type'>
                            {type === 'block' && 'Bk'}
                            {type === 'transaction' && 'Tx'}
                        </div>
                        <div className='infos'>
                            <div className='infosTitle'>
                              {block.number.toNumber()}
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
                <div className='BlockCardBorder'></div>
            </motion.div>
        })}
        </AnimatePresence>
    </div>
  )
}

export default BlockList