import React, { useState } from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNav(true)
        }
        else {
            setNav(false);
        }
    }

    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? 'app__navbar-color' : 'app__navbar'}

        >
            <div className='app__navbar-logo'>

                <p style={{ color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.9)', fontSize: '24px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '0.2rem',border: '1px solid black', padding: '2px 7px' }}>Rahat Kabir</p>
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                    <li key={`link-${item}`} className="app__flex nav-text">
                        <div />
                        <a className={nav? 'linkStyle1' : 'linkStyle2'}  href={`#${item}`}>{item}</a>
                    </li>

                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [150, 0] }} //x = 300 means 300pixel
                            transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)} />
                            <ul>
                                {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                                    <li key={item} >
                                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                    </li>

                                ))}
                            </ul>
                        </motion.div>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar