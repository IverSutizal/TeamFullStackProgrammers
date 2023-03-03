import React from 'react';
import './card.scss';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Card = ({emoji, heading, detail}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span style={{color: darkMode? 'white' : ''}}>{heading}</span>
      <span>{detail}</span>
      <button className='b-card'>Software Engineer</button>

    </div>
  )
}

export default Card
