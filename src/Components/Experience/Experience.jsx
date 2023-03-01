import React from 'react';
import Archievement from '../Archievement/Archievement';
import './Experience.scss'

const Experience = () => {
  return (
    <div className='experience' id='Experience'>
      <Archievement add={'8+'} text={'years'} text1={'Experience'} />
      <Archievement add={'20+'} text={'completed'} text1={'Projects'} />
      <Archievement add={'5+'} text={'companies'} text1={'Work'} />
    </div>
  )
}

export default Experience
