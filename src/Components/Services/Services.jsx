import React from 'react';
import './Services.scss';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {

  const transition = {duration:1, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='services' id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style={{color: darkMode? 'white' : ''}}>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis 
        <br/> 
        alias optio iusto voluptatem ratione illo nihil, iste eum temporibus id.
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur" style={{
          background:'#abf1ff94',
        }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
        initial = {{left: '34rem'}}
        whileInView = {{left:'23rem'}}
        transition = {transition}
        className='cards-conteiner' style={{
          left:'16.5rem'
        }}>
          <Card 
            emoji = {HeartEmoji}
            heading = {'Design'}
            detail = {'Figma, Sketch, Photoshop, Adobe ilustrator, Adobe xd'}
          />
        </motion.div>
        <motion.div 
          initial ={{left:'-30rem'}}
          whileInView = {{left: '-21rem'}}
          transition = {transition}
          className="cards-glasses" style={{
          top: '18rem',
          left: '-23rem'
        }}>
          <Card 
            emoji = {Glasses}
            heading = {'Developer'}
            detail = {'Html, Css, JavaScript, React, NodeJs, Express'}
          />
        </motion.div>
        <motion.div 
          initial={{left:'16rem'}}
          whileInView={{left:'-18rem'}}
          transition={transition}
          className="cards-humble" style={{
          top:'28.3rem',
          left: '-20rem'
        }}>
          <Card 
            emoji={Humble}
            heading = {'UI/UX'}
            detail = {'Lorem ipsum durmy text are usually use in section where we need some rando text'}
          />
        </motion.div>
        <div className="blur-cards" style={{
          background: '#edd0ff'
        }}
        ></div>
      </div>
    </div>
  )
}

export default Services
