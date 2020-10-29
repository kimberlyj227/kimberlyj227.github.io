import React from "react";
import "../styles/Navbar.css";


const Nav = () => {
  return (
    <nav>
      <h4 
        className="nav"> 
        <a href="#about" className="link"> ABOUT </a>   ||    
        <a href="#portfolio" className="link"> PORTFOLIO </a>   ||    
        <a href="mailto: kimberly.j.owens@gmail.com" className="link"> EMAIL </a>
      </h4>
    </nav>
  )
}

export default Nav;