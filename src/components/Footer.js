import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import logo from "../img/logo.svg";
import navIcon1 from "../img/nav-icon1.svg";
import navIcon2 from "../img/nav-icon2.svg";
import navIcon3 from "../img/nav-icon3.svg";
const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col sm={6}>
                    <img src={logo} alt='Logo'/>
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='#'><img scr={navIcon1} alt='nav'/></a>
                        <a href='#'><img scr={navIcon2} alt='nav'/></a>
                        <a href='#'><img scr={navIcon3} alt='nav'/></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserverd</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer