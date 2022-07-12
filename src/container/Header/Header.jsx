import React from 'react'
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">

            <div style={{ marginLeft: 10 }}>
              <p className='p-text' style={{fontSize: '20px'}}>Hello, I am</p>
              <h1 className='head-text' style={{letterSpacing: '0.2rem'}}>RAHAT KABIR</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex" >
            <p className='p-text' ><span>W</span>eb Developer</p>
            <p className='p-text' ><span>R</span>eact Developer</p>
            <p className='p-text' ><span>M</span>ERN Stack Developer</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-pic" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt="profile_circle"
          className ="overlay_circle"
        />
      </motion.div>
      
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.node, images.react, images.python].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        
      </motion.div>
    </div>
    
  )
}

export default AppWrap(Header, 'home');