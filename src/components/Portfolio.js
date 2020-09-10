import React, {useState, useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import "../styles/Portfolio.css";
import data from "../data/portfolio.json";
import PortfolioCard from "./Card";
import ProjectContext from "../data/ProjectContext";
import CardBtn from "./CardBtn";



const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {
    loadProjects();
  }, [])

  const loadProjects = () => {
    setProjects(data);
    setProject(data[0]);
  }

  const nextProject = (projectIndex) => {
    if (projectIndex >= projects.length) {
      projectIndex = 0 
    }
    setProjectIndex(projectIndex);
    setProject(projects[projectIndex]);
  }

  const previousProject = (projectIndex) => {
    if (projectIndex < 0 ) {
      projectIndex = projects.length - 1;
    }

    setProjectIndex(projectIndex);
    setProject(projects[projectIndex]);
  }

  const handleBtnClick = e => {
    const btnName = e.target.getAttribute("data-value");
    if (btnName === "next") {
      const newProjectIndex = projectIndex + 1;
      nextProject(newProjectIndex);
    } else {
      const newProjectIndex = projectIndex - 1;
      previousProject(newProjectIndex); 
    }
  }

  return (
    <div id="portfolio">
      <Row>
        <h2>MY PROJECTS</h2>
      </Row>
     
        <ProjectContext.Provider value={{project, projects, handleBtnClick}}>
          <Row>
              
              <Col className="cardCol">
                  <PortfolioCard className="cards"/>
              </Col>
  
          </Row>

          <Row>
            <Col id="next-back">
              <CardBtn
                style={{ opacity: 1 }}
                data-value="back"
              />
              <CardBtn
                style={{ opacity: 1 }}
                data-value="next"
              />
            </Col>
          </Row>
        </ProjectContext.Provider>

    </div>
  )
}

export default Portfolio;

