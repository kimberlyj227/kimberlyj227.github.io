import React, {useContext} from "react";
import {Card, CardDeck} from "react-bootstrap";
import {FaGithub, FaLaptopCode} from "react-icons/fa";
import "../styles/Card.css";
import ProjectContext from "../data/ProjectContext";


const PortfolioCard = () => {
  const {project} = useContext(ProjectContext);

  return (
    <CardDeck className="portfolio-card">
      <Card >
        <Card.Img className="cardImg" variant="top" src={`${process.env.PUBLIC_URL}/img/${project.img}.png`}  />
      <hr/>

      <Card.Body>

        <Card.Title>{project.name}</Card.Title>

        <Card.Text>
          {project.desc}
        </Card.Text>

      </Card.Body>

      <Card.Footer>
        <Card.Link 
          href={project.github}> 
            <FaGithub/> Github Repo
        </Card.Link>
        <br/>

        <Card.Link 
          href={project.deployed}> 
            <FaLaptopCode/> Deployed App
        </Card.Link>
        
      </Card.Footer>
    </Card>
  </CardDeck>
  )
}

export default PortfolioCard;