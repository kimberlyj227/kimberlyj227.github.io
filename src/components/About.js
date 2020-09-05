import React from "react";
import "../styles/About.css";
import {Row, Col, ListGroup, ListGroupItem} from "react-bootstrap";
import { FaHtml5, FaReact, FaCss3, FaNodeJs, FaRegComments } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMongodb, DiJavascript1 } from "react-icons/di";
import {GiCottonFlower} from "react-icons/gi";

const About = () => {
  return (
    <div id="about">
      <Row>
        <h2>ABOUT KIMBERLY</h2>
      </Row>
      <Row>
        <Col>
          <h5>What I Can Do:</h5>
          <ListGroup>
            <ListGroupItem> <DiJavascript1/> JavaScript</ListGroupItem>
            <ListGroupItem> <FaReact/> React</ListGroupItem>
            <ListGroupItem> <FaHtml5/> HTML</ListGroupItem>
            <ListGroupItem> <FaCss3/> CSS</ListGroupItem>
            <ListGroupItem> <GrMysql/> mySQL</ListGroupItem>
            <ListGroupItem> <DiMongodb/> Mongo</ListGroupItem>
            <ListGroupItem> <FaNodeJs/> Node.js</ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
          <h5>Fun Facts About Me:</h5>
          <p >
          Texas native who relocated to Seattle, now living outside of Boulder.
        </p>
        <GiCottonFlower/>
        <p>
          I love the outdoors. Hiking, camping, running, or kayaking are my favorite things to do outside.
        </p>
        <GiCottonFlower/>
        <p>
          I love learning new things + I will try (most) everything at least once.
        </p>
        <GiCottonFlower/>
        <p>Enough about me, your turn!</p>
        </Col>
      </Row>

    </div>
  )
}

export default About;