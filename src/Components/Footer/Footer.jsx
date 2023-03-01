import React from 'react';
import './Footer.scss';
import Wave from '../../img/wave.png';
import {UilGithub} from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilTwitter } from '@iconscout/react-unicons'


const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="footer-img" style={{
        wigth:'100%'
      }}/>
    <div className='f-icons'>
    <div>
      <a href="https://github.com/Alexis-Campomanes" style={{
        paddingRight:'0.5rem'
      }}><UilGithub color = 'white' size = '3rem' /></a>
      <a href="https://www.linkedin.com/in/alexiscampomanes/" style={{
        paddingRight:'0.5rem'
      }}><UilLinkedin color = 'white' size = '3rem' /></a>
      <a href=""><UilTwitter color = 'white' size = '3rem' /></a>
    </div>
    <div>
      <span style={{
        color:'white',
        fontSize:'10pt'
      }}>©2022 - From | All right reserved</span>
    </div>
    </div>
    </div>
  )
}

export default Footer
