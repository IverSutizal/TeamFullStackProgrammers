import React from 'react';
import './Archievement.scss';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Archievement = ({add, text, text1}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='a-conteiner' style={{color: darkMode? 'white' : ''}}>
      <div className='circle' style={{background: darkMode? 'black' : ''}}>
        <span>{add}</span>
      </div>
      <span style={{color: darkMode? 'white' : ''}}>{text}</span>
      <span>{text1}</span>
    </div>
    )
}

export default Archievement
