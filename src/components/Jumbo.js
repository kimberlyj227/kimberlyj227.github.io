import React from "react";
import Menu from "./Menu";
import { Jumbotron, Image, Row, Col } from "react-bootstrap"
import logo from "../assets/logo.png";
import "../styles/Jumbo.css";
import Type from "./Typewriter";

const Jumbo = () => {

  return (
    <Jumbotron fluid>
       
        <Row className="headings">
          <Col>
            <Type/>
          </Col>
          {/* <Image src={logo} alt="Kimberly Owens Logo" fluid id="logo"/> */}
        </Row>
        <Row className="headings">
          <Col>
            <h2 >KIMBERLY OWENS</h2>
            <h4>web developer</h4>
          </Col>
        </Row>
        <Row id="about">
          <Col md={{span: 4, offset: 8}} sm={12}>
            <h3>ABOUT</h3>
            <p>I believe that anything is possible when it comes to web development and design. Having a strong foundation in code and constantly expanding my knowledge, I am passionate about creating beautiful, useful, and user-friendly applications.</p>
          </Col>

        </Row>
        
        
       
      
    </Jumbotron>
  )

}

export default Jumbo;