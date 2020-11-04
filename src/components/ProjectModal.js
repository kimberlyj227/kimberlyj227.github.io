import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const ProjectModal = ({project, show, onHide}) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image 
              alt={project.name}
              src={`${process.env.PUBLIC_URL}/img/${project.img}.png`}
              style={{width: "auto", height: "400px", margin: "0 50px"}}
              
              
            />
        <p>
          {project.desc}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={onHide}>Close</Button>
        {project.github && (
          <Button variant="outline-dark" href={project.github} target="_blank">Github Repo</Button>
        )}
        <Button variant="outline-dark" href={project.deployed} target="_blank">Deployed Site</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal;
