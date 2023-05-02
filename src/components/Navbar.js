import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../img/Slogo.png';
import gmail from '../img/GMAIL.svg';
import  Linkedin  from '../img/LINKEDLN.png';
import github from '../img/GITHUB.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="logo">
            <div>
              <img src={logo} alt="Logo"/>
            </div>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
          <div className="card">
            <span>Let's Connect</span>
            <a className="social-link" 
            href="mailto:sahiratejada@gmail.com?subject = Feedback&body = Message">
              <img src={gmail} alt="Gmail"/>
            </a>
            <a className="social-link" 
            href="https://www.linkedin.com/in/sahira-tejada-704158222/" target="_blank" rel="noreferrer">
              <img src={Linkedin } alt="Linkedin"/>
            </a>
            <a className="social-link" href="https://github.com/SahiraTejada" target="_blank" rel="noreferrer">
              <img src={github} alt="Github"/>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Router>
  )
}

