import React from "react";
import "../styles/Gallery.css";
import data from "../data/portfolio.json";
import {Row} from "react-bootstrap";

const Gallery = () => {

  const projects = data;

  return (
    <div id="gallery">
      <Row>
        <h2>MY PROJECTS</h2>
      </Row>
      <div id="container" >
        {projects.map(({name, img, desc, github, deployed}) => (
          <div 
            className="item" 
            style = {{backgroundImage: `url(${process.env.PUBLIC_URL}/img/${img}.png)`}}
          >
            <a href={github}>Github</a>
            <a href={deployed}>Deployed Site</a>
            {/* <img src = {`${process.env.PUBLIC_URL}/img/${img}.png`} alt={name}/> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery;