import React from "react";
import { Row, Col} from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import resume from '../assets/kowens_resume.pdf';


import "../styles/Connect.css";

const Connect = () => {

  return (
    <div id="connect">
      <Row>
        <Col>
          <h4>CONNECT WITH ME</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>LINKED IN | GITHUB | EMAIL ME | VIEW MY RESUME</p>
        </Col>
      </Row>
      <Row id="hexies">
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>

            <a href="https://www.linkedin.com/in/kimberly-owens27" target="_blank" rel="noopener noreferrer">
              <FaLinkedin x="22%" y="20%" className="symbols"/>
            </a>
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
              <a href="https://github.com/kimberlyj227" target="_blank" rel="noopener noreferrer">
                <FaGithub x="22%" y="20%" className="symbols"/>
              </a>
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
              <a href="mailto: kimberly.j.owens@gmail.com">
                <FaEnvelope x="22%" y="20%" className="symbols"/>
              </a>
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <a href={resume} target="_blank" rel="noopener noreferrer"  >

              <FaFilePdf x="22%" y="20%" className="symbols"/>
            </a>
          </svg>
        </Col>
      </Row>

    </div>
  )

}

export default Connect;