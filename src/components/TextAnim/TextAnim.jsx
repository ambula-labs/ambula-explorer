import { useEffect } from 'react';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './TextAnim.scss'

function TextAnim({text}) {    
    const ctrls = useAnimation();
    
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: false,
    });
    
    useEffect(() => {
      if (inView) {
        ctrls.start("visible");
      }
      if (!inView) {
        ctrls.start("hidden");
      }
    }, [ctrls, inView]);
  
    const wordAnimation = {
      hidden: {},
      visible: {},
    };
    
    const characterAnimation = {
      hidden: {
        opacity: 0,
        y: `0.25em`,
      },
      visible: {
        opacity: 1,
        y: `0em`,
        transition: {
          duration: 1,
          ease: [0.2, 0.65, 0.3, 0.9],
        },
      },
    };

    return (
        <div className='textAnim'>
            {text.split(" ").map((word, index) => {
                return (
                <motion.span
                    className='word'
                    ref={ref}
                    aria-hidden="true"
                    key={index}
                    initial="hidden"
                    animate={ctrls}
                    variants={wordAnimation}
                    transition={{
                    delayChildren: index * 0.25,
                    staggerChildren: 0.05,
                    }}
                >
                    {word.split("").map((character, index) => {
                    return (
                        <motion.span
                        className='character'
                        aria-hidden="true"
                        key={index}
                        variants={characterAnimation}
                        >
                        {character}
                        </motion.span>
                    );
                    })}
                </motion.span>
                );
            })}
        </div>
    )
}

export default TextAnim