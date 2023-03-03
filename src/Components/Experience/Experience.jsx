import React from 'react';
import Archievement from '../Archievement/Archievement';
import './Experience.scss'

const Experience = () => {
  return (
    <div className='experience' id='Experience'>
      <Archievement add={'9+'} text={'months'} text1={'Projects'} />
      <Archievement add={'3+'} text={'quarter'} text1={'Study'} />
      <Archievement add={'6+'} text={'week'} text1={'Experience'} />
    </div>
  )
}

export default Experience
