import React from "react";
import {Row, Col} from "react-bootstrap";
import Social from "./Social";
import "../styles/Footer.css";
import logo from "../assets/logo.png"

const Footer = () => {

  return (

    <div id="footer">
      <Row>
        <Col >
          <img src={logo} alt="Kimberly Owens logo" className="footer-logo"/>
        </Col>
        <Col>
          <h4>Kimberly Owens || </h4>
        </Col>
        <Col >
          <Social/>
        </Col>
      </Row>
    </div>
  )
}

export default Footer;