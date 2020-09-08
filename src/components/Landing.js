import React from "react";
import {Jumbotron, Image} from "react-bootstrap";
import "../styles/Landing.css";
import logo from "../assets/logo.png";
import {GoChevronLeft, GoChevronDown, GoChevronRight} from "react-icons/go";
import Social from "./Social";
import ReactTooltip from "react-tooltip";




const Landing = () => {

  return (
    <>
    <Jumbotron fluid>
      <div>
        <Image src={logo} alt="Kimberly Owens Logo" fluid id="logo"/>
      </div>

      <Social/>

        <a data-for="custom-color-no-arrow" data-tip="Contact Me" href="#contact">
          <GoChevronLeft  className="arrows" id="left" /> 
        </a>

        <a data-for="custom-color-no-arrow" data-tip="About Me" href="#about">

          <GoChevronDown className="arrows" id="down" />
        </a>  

        <a data-for="custom-color-no-arrow" data-tip="View My Portfolio" href="#portfolio">
         <GoChevronRight className="arrows" id="right" /> 
        </a>

        <ReactTooltip id="custom-color-no-arrow" effect="float"
        className="extraClass"
        place="top"
        textColor="white"
        backgroundColor="#E17065"
        />
  
     
    </Jumbotron>
    </>
  )
}

export default Landing;