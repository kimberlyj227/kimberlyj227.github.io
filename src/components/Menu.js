import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";


const Menu = () => {
  return (
    <Navbar  expand="lg">
      <Navbar.Brand href="#home">
        <Image src={logo} alt="Kimberly Owens Logo" fluid id="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">PORTFOLIO</Nav.Link>
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