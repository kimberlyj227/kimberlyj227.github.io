import React from "react";
import {Card, CardDeck} from "react-bootstrap";
import {FaGithub, FaLaptopCode} from "react-icons/fa";
import {GrDeploy} from "react-icons/gr";
import "../styles/Card.css";


const PortfolioCard = ({name, github, deployed, id, img, desc}) => {
  return (
    <CardDeck>
      <Card >
        <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/${img}.png`}  />
      <hr/>

      <Card.Body>

        <Card.Title>{name}</Card.Title>

        <Card.Text>
          {desc}
        </Card.Text>
      </Card.Body>

        
      <Card.Footer>

        <Card.Link 
          href={github}> 
            <FaGithub/> Github Repo
        </Card.Link>
        <br/>
        <Card.Link 
          href={deployed}> 
            <FaLaptopCode/> Deployed App
        </Card.Link>
      </Card.Footer>
    </Card>
  </CardDeck>
  )
}

export default PortfolioCard;