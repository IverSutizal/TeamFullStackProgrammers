import React from 'react';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState} from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log ('You clicked submit')

    emailjs.sendForm('service_7h62m29', 'template_prvjc1d', form.current, 'f4U_Wr8VnobciVsYl')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact' id='Contact'>
      <div className="c-left">
        <span style={{color: darkMode? 'white' : ''}}>Get in Touch</span>
        <span>Contact me</span>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user_name' className='user' placeholder='Name' />
            <input type="email" name='user_email' className='user' placeholder='Email' />
            <textarea name='message' className='user' placeholder='Message'></textarea>
            <button type='submit' className='button'>Send</button>
            <span>{done && 'Thanks for contactin me!'}</span>
            <div 
            className='blur c-blur' style={{
              background:'var(--purple)'
            }}
            ></div>
        </form>
      </div>
    </div>
  )
}

export default Contact
