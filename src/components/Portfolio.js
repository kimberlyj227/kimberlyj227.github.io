import React from "react";
import {Col, Row} from "react-bootstrap";
import "../styles/Portfolio.css";
import projects from "../data/portfolio.json";
import PortfolioCard from "./Card";



const Portfolio = () => {

  return (
    <div id="portfolio">
      <Row>
        <h2>PROJECTS I'VE WORKED ON</h2>
      </Row>
     
        <Row>
          {projects.map(({name, github, deployed, img, id, desc}) => (
            <Col key={id} className="cards">
              <PortfolioCard 
                name={name}
                github={github}
                deployed={deployed}
                img={img}
                desc={desc}
              />
    
            </Col>
          ))}

        </Row>

    </div>
  )
}

export default Portfolio;

