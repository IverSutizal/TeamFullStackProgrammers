import React from 'react';
import './Works.scss'
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import Fiver from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Works = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white' : ''}}>Learned technologies</span>
          <span>HOLBERTON SCHOOL PERÚ</span>
          <span>The good thing about being in Holberton is that we can study at our rhythm, it allows us to learn many technical skills such as non -techniques.
During this time we managed to carry out many projects and thus allowed us to continue growing professionally.</span>
        </div>
        <button className='button i-button'>Hire Me</button>
        <div className="blur" style={{
          backgroundColor:'#abf1ff94',
          top: '25rem',
          left: '-5rem'
        }}
        ></div>
      </div>
      <div className="i-right">
        <motion.div 
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px'}}
          transition={{duration: 4.5, type: 'spring'}}
          className='w-background'>
          <div className="blue" style={{
            backgroundColor:'#1986dd',
            left: '22.2rem',
            top: '-4rem'
          }}
          ></div>
          <div className="yellow" style={{
            backgroundColor: '#F5C32C',
            left: '22.2rem',
            top: '6rem'
          }}
          ></div>
          <div className="withe"></div>
          <div className='img-conteiner amazon' style={{
            top:'8rem',
            left: '17.5rem',
          }}>
            <div className='img-withe '>
              <img src={Amazon} alt="" />
            </div>
          </div>
          <div className='img-conteiner upword' style={{
            top: '-4rem',
            left: '8rem',
            transform: 'scale(0.1)',
          }}>
            <div className='img-withe'>
              <img src={Upwork} alt="" />
            </div>
          </div>
          <div className='img-conteiner shopify' style={{
            top: '8rem',
            left: '12rem',
            transform: 'scale(0.14)',
          }}>
            <div className='img-withe'>
              <img src={Shopify} alt="" />
            </div>
          </div>  
          <div className='img-conteiner facebbok' style={{
            top: '20rem',
            left: '-9rem',
            transform: 'scale(0.1)'
          }}>
            <div className='img-withe'>
              <img src={Facebook} alt="" />
            </div>
          </div>
          <div className='img-conteiner fiver' style={{
            top: '8rem',
            left: '-31rem',
            transform: 'scale(0.1)',
          }}>
            <div className='img-withe'>
              <img src={Fiver} alt="" />
            </div>
          </div>
          <div className='blur-s' style={{
            backgroundColor: '#c0c0c0',
            top: '4rem',
            left: '4rem'
          }}
          ></div>
        </motion.div>
      </div>
    </div>
  )
}

export default Works
