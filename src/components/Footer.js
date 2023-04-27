import React from 'react'
import {FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {GrLinkedinOption} from 'react-icons/gr';

const Footer = () => {
  var year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p className='slogan'>Embracing the Journey.</p>
      <div className='social-container'>
        <a href="https://github.com/SahiraTejada"  target="_blank" 
        rel="noreferrer">
          <FaGithub size={50} color='#fff' className="social"/></a>
        <div className='social-circle social ' style={{marginRight:'5px'}}>
          <a href="https://www.linkedin.com/in/sahira-tejada-704158222/"  
          target="_blank" 
          rel="noreferrer">
            <GrLinkedinOption size={25}/>
          </a>
        </div>
        <div className='social-circle social'>
          <a href='mailto:sahiratejada2@gmail.com?subject = Feedback&body = Message"'>
            <SiGmail size={25}/>
          </a>
        </div>
      </div>
      <div className='container-details'>
        <p className='details'>Sahiratejada@gmail.com</p>
        <p className='details'>CopyRight {year}. All Rights Reserverd</p>
      </div>
    </footer>
  )
}

export default Footer