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
        <span style={{color: darkMode? 'white' : ''}}>Our impressive</span>
        <span>Proyect</span>
        <span>During all this time, the team focused on applying its skills and attitudes in each part of the project. Together we managed to carry out the GBS Corporation project "Monitoring of judicial processes". 
        <br/> 
       
        </span>

        <div className="blur" style={{
          background:'#abf1ff94',
        }}
        ></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
        initial = {{left: '34rem'}}
        whileInView = {{left:'16rem'}}
        transition = {transition}
        className='cards-conteiner' style={{
          left:'16.5rem'
        }}>
          <Card 
            emoji = {HeartEmoji}
            heading = {'IVER SUTIZAL'}
            detail = {'Software Engineer, Audiovisual Producer, Data Analyst, Marketing, Design'}
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
            heading = {'JULIAN ZEA'}
            detail = {'Software Engineer, Audiovisual content generator, video editor, video game creator'}
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
            heading = {'CARLOS CANTORAL'}
            detail = {'Software Engineer, Audiovisual content generator, social communicator, collector'}
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
