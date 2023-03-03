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
      <a href="https://github.com/IverSutizal/Proyecto-final" style={{
        paddingRight:'0.5rem'
      }}><UilGithub color = 'white' size = '3rem' /></a>
      <a href="https://www.linkedin.com/pulse/seguimiento-de-procesos-judiciales-iver-sutizal/?trackingId=tE1KHZJaq%2BGtipkuO5a97g%3D%3D" style={{
        paddingRight:'0.5rem'
      }}><UilLinkedin color = 'white' size = '3rem' /></a>
      <a href=""><UilTwitter color = 'white' size = '3rem' /></a>
    </div>
    <div>
      <span style={{
        color:'white',
        fontSize:'10pt'
      }}>©2023 - From | All right reserved</span>
    </div>
    </div>
    </div>
  )
}

export default Footer
