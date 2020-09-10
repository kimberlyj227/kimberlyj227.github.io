import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from "./Navbar";
import Image from 'react-bootstrap/Image';
import logo from "../assets/logo.png";
import "../styles/Jumbo.css";

const Jumbo = () => {

  return (
    <>
    <Jumbotron fluid>
      <div>
        <Image src={logo} alt="Kimberly Owens Logo" fluid id="logo"/>
      </div>
      <Nav/>
    </Jumbotron>
    </>
  )

}

export default Jumbo;