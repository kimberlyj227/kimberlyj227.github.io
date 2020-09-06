import React from "react";
import {Card, ListGroupItem, ListGroup} from "react-bootstrap";
import { FaHtml5, FaReact, FaCss3, FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiMongodb, DiJavascript1 } from "react-icons/di";


const SkillsCard = () => {
  return (
    <Card id ="skills-card">
        <Card.Header>What I Can Do: </Card.Header>
        <Card.Body>
          
            <ListGroup>
              <ListGroupItem> <DiJavascript1/> JavaScript</ListGroupItem>
              <ListGroupItem> <FaReact/> React</ListGroupItem>
              <ListGroupItem> <FaHtml5/> HTML</ListGroupItem>
              <ListGroupItem> <FaCss3/> CSS</ListGroupItem>
              <ListGroupItem> <GrMysql/> mySQL</ListGroupItem>
              <ListGroupItem> <DiMongodb/> Mongo</ListGroupItem>
              <ListGroupItem> <FaNodeJs/> Node.js</ListGroupItem>
          </ListGroup>
       
        </Card.Body>
      </Card>
  )

}

export default SkillsCard;