import React from 'react';
import './FloatingDiv.scss';


const FloatingDiv = ({imagen, text1, text2}) => {

  return (
    <div className='floatingdiv'>
      <img src={imagen} alt="" />
        <span>
          {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default FloatingDiv
