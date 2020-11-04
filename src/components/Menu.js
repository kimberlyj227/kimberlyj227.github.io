import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../styles/Navbar.css";
import logo from "../assets/kowenslogoyellow.png";
import resume from '../assets/k_owens_resume.pdf';



const Menu = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">
        <Image src={logo} alt="Kimberly Owens Logo" fluid id="logo"/>
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto justify-content-end">
          <Nav.Link href="#examples">PORTFOLIO</Nav.Link>
          <Nav.Link href="#connect">CONNECT WITH ME</Nav.Link>
          <Nav.Link href={resume} target="_blank" rel="noopener noreferrer">RESUME</Nav.Link>
          <Nav.Link href="mailto: kimberly.j.owens@gmail.com">EMAIL</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>

    // <nav>
    //   <h4 
    //     className="nav"> 
    //     <a href="#about" className="link"> ABOUT </a>   ||    
    //     <a href="#portfolio" className="link"> PORTFOLIO </a>   ||    
    //     <a href="mailto: kimberly.j.owens@gmail.com" className="link"> EMAIL </a>
    //   </h4>
    // </nav>
  )
}

export default Menu;