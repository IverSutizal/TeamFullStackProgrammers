import React from 'react';
import './Portafolio.scss';
import img1 from '../../img/Screenshot_1.jpg';
import img2 from '../../img/Screenshot_5.jpg';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portafolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portafolio' id='Portfolio'>
      <span style={{color: darkMode? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>
      <div className="p-img">
        <a href="https://gym-app-react.netlify.app/"><img src={img2} alt="Portfolio_img_1" /></a>
        <a href="https://ecommerce-astro.netlify.app/"><img src={img1} alt="Portfolio_img_2" /></a>
      </div>
    </div>
  )
}

export default Portafolio
