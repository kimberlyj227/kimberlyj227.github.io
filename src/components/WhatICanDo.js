import React from "react";
import { Row, Col} from "react-bootstrap";
import { FaHtml5, FaReact, FaCss3, FaNodeJs, FaGit, FaServer } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import "../styles/What.css";

const What = () => {
  return (
    <div id="what">
      <Row>
        <Col>
          <h4>WHAT I CAN DO</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>JAVASCRIPT | REACT | NODE.JS | MONGO DB | mySQL | HTML | CSS | EXPRESS</p>
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
              
                <DiJavascript1 x="20%" y="15%" className="symbols" />
             
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <FaReact x="20%" y="15%" className="symbols" />
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <FaNodeJs x="20%" y="15%" className="symbols" />
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <DiMongodb x="20%" y="15%" className="symbols" />
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <GrMysql x="20%" y="15%" className="symbols" />
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <FaHtml5 x="20%" y="15%" className="symbols" />
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <FaCss3 x="20%" y="15%" className="symbols" />
          </svg>
        </Col>
        <Col>
          <svg className="hexagon"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="139px" height="119px">
            <path fillRule="evenodd"  fill="rgb(215, 157, 31)"
            d="M104.250,0.000 L139.000,59.500 L104.250,119.000 L34.750,119.000 L0.000,59.500 L34.750,0.000 L104.250,0.000 Z"/>
            <FaServer x="20%" y="15%" className="symbols" />
          </svg>
        </Col>
      </Row>
    </div>
    
  )
}

export default What;