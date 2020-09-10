import React, {useState} from "react";
import {Jumbotron, Image} from "react-bootstrap";
import "../styles/Landing.css";
import logo from "../assets/logo.png";
import {GoChevronLeft, GoChevronDown, GoChevronRight} from "react-icons/go";
import Social from "./Social";
import ReactTooltip from "react-tooltip";
import PageContext from "../data/PageContext";




const Landing = () => {
  const [pageInit, setPageInit] = useState({
    about: false,
    portfolio: false,
    contact: false
  })

  const handleAbout = () => {
    setPageInit({...pageInit, about: true})
  }

  return (
    <>
    <Jumbotron fluid>
      <div>
        <Image src={logo} alt="Kimberly Owens Logo" fluid id="logo"/>
      </div>

      <Social/>
      <PageContext.Provider value={pageInit}>
          <a data-for="custom-color-no-arrow" data-tip="Contact Me" href="#contact" >
            <GoChevronLeft  className="arrows" id="left"   /> 
          </a>

          <a data-for="custom-color-no-arrow" data-tip="About Me" href="#about" onClick={handleAbout}>

            <GoChevronDown className="arrows" id="down" />
          </a>  

          <a data-for="custom-color-no-arrow" data-tip="View My Portfolio" href="#portfolio">
          <GoChevronRight className="arrows" id="right" /> 
          </a>

      </PageContext.Provider>

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