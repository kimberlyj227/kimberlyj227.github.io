import React from "react";
import "../styles/Navbar.css";


const Nav = () => {
  return (
    <div>
      <h4 
        className="nav"> 
        <a href="#about" className="link"> ABOUT </a>   ||    
        <a href="#portfolio" className="link"> PORTFOLIO </a>   ||    
        <a href="#contact" className="link"> CONTACT </a>
      </h4>
      
    </div>
  )
}

export default Nav;