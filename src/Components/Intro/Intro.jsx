import React from 'react';
import './Intro.scss';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Twitter from '../../img/twitter.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoj1 from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';


const Intro = () => {

  const transition = {duration:2, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white' : ''}}>TEAM</span>
          <span>Full Stack Programmers</span>
          <span>Full Stack developers, Fronnd, Backend and Database. We have experience in corporate projects with large digital scale.</span>
        </div>
        <button className='button i-button'>Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/IverSutizal/Proyecto-final">
            <img src={GitHub} alt="" />
          </a>
          <a href="https://www.linkedin.com/pulse/seguimiento-de-procesos-judiciales-iver-sutizal/?trackingId=tE1KHZJaq%2BGtipkuO5a97g%3D%3D">
            <img src={LinkedIn} alt="" />
          </a>

        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt=""/>
        <motion.img 
        initial={{left:'-36%'}}
        whileInView ={{left:'-24%'}}
        transition = {transition}
        src={Glassesimoj1} alt="" />
      <motion.div
        initial={{top:'-4%', left: '-15rem'}}
        whileInView={{left:'23rem'}}
        transition={transition}
        style={{
        left: '25rem',
        top: '3rem'
        }} className= 'floating-div'>
        <FloatingDiv imagen={Crown} text1={'Holberton'} text2={'School Perú'} />
      </motion.div>
      <motion.div 
        initial={{left:'9rem', top: '29rem'}}
        whileInView={{left:'1rem'}}
        transition={transition}
        style={{
        bottom:'8.6rem',
        left: '2rem'
      }} className= 'floating-div'>
      <FloatingDiv imagen={Thumbup} text1={'Programmer'} text2={'Full Stack'}/>
      </motion.div>
      {/* blur divs */}
      <div className="blur" style={{ 
        background:'rgb(238 210 255)'
        }}
      ></div>
      <div className="blur" style={{ 
        background:'rgb(193 245 255)',
        top: '30rem',
        width: '21rem',
        height: '11rem',
        left: '-7rem'
        }}
      ></div>
      </div>
    </div>
  )
}

export default Intro
