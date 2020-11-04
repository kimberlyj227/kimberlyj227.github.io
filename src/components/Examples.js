import React, {useState, useEffect} from "react";
import {Col, Row, Image, Button} from "react-bootstrap";
import "../styles/Examples.css";
import data from "../data/portfolio.json";
import ProjectModal from "./ProjectModal";



const Examples = () => {
  const [projects, setProjects] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState({
    name: "",
    img: "",
    desc: "",
    github: "",
    deployed: ""
  })

  useEffect(() => {
    setProjects(data);
  }, [])


  const changeBackground = (e) => {
    return (
      e.target.style.background = '#e9e9e9'
    )
  }

  const modalClick = (e) => {
    setModalShow(true);
    console.log(e.target.getAttribute("data-name"))
    setSelected({
      name:e.target.getAttribute("data-name"),
      desc:e.target.getAttribute("data-desc"),
      img:e.target.getAttribute("data-img"),
      github:e.target.getAttribute("data-github"),
      deployed:e.target.getAttribute("data-deployed"),
    })
  }
  

  return (
    <div id="examples" >
      <Row>
      <Col>
          <h4>RECENT WORK</h4>
        </Col>
      </Row>
      <Row id="projects" >
        {projects.map(project => (
          <Col key={project.id} className="container ">
            <Image 
              alt={project.name}
              src={`${process.env.PUBLIC_URL}/img/${project.img}.png`}
            />
            
            <div className="overlay">
              <div className="text">
                
                <Button 
                  className="button"
                  onClick={(e) => modalClick(e)}
                  data-name={project.name}
                  data-desc={project.desc}
                  data-github={project.github}
                  data-deployed={project.deployed}
                  data-img={project.img}
                  variant="outline-light"
                  
                >
                  {project.name}
                </Button>
                <ProjectModal 
                  show={modalShow}
                  project={selected}
                  onHide={() => setModalShow(false)}
                />
               
              </div>
            </div>
          </Col>
          
        ))}

      </Row>
      <Row className="text-center mt-5">
        <Col >
          <Button variant="light" href="https://github.com/kimberlyj227">
            View my Github Profile
          </Button>
        </Col>
      </Row>

    </div>
  )

}

export default Examples;