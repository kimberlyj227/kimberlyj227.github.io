import React from "react";
import "../styles/Footer.css";
import logo from "../assets/kowenslogoyellow.png";
import { Image, Row, Col } from "react-bootstrap";


const Footer = () => {

  return (

    <div id="footer">
      <Row>
        <Col>
          <Image src={logo} alt="Kimberly Owens Logo" fluid id="logo" />
        </Col>

        <Col>
            Kimberly Owens | 2020
          
        </Col>
        
      </Row>
      
      
       
    </div>
  )
}

export default Footer;