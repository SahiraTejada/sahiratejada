import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from "../img/logo.svg";
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/nav-icon2.svg";
import navIcon3 from "../img/nav-icon3.svg";
import {FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
import {GrLinkedinOption} from 'react-icons/gr';
const Footer = () => {
   var year = new Date().getFullYear();
  return (
    <footer className='footer'>
        {/*
        <Container>
            <Row className='align-item-center'>
                <Col sm={6}>
                    <img src={logo} alt='Logo'/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <p>Embracing the Journey.</p>
                    <div className='social-icon '>
                        <FaGithub size={45} color='#fff' className="social"/>
                        <div className='social-circle social '><GrLinkedinOption size={25}/></div>
                        <div className='social-circle social '><SiGmail size={25}/></div>
                        <a href='#'><img scr={navIcon1} alt='nav'/></a>
                        <a href='#'><img scr={navIcon2} alt='nav'/></a>
                        <a href='#'><img scr={navIcon3} alt='nav'/></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserverd</p>
                </Col>
            </Row>
        </Container>*/ }
         <p className='slogan'>Embracing the Journey.</p>
                    <div className='social-icon '>
                        <FaGithub size={47} color='#fff' className="social"/>
                        <div className='social-circle social ' style={{marginRight:'15px'}}><GrLinkedinOption size={25}/></div>
                        <div className='social-circle social '><SiGmail size={25}/></div>
                    </div>
                    <div className='container-details'>
                    <p className='details'>Sahiratejada@gmail.com</p>
                    <p className='details'>CopyRight {year}. All Rights Reserverd</p>
                    </div>
    </footer>
  )
}

export default Footer