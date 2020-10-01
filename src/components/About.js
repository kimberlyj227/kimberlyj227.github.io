import React from "react";
import "../styles/About.css";
import {Row, Col} from "react-bootstrap";
import {GiCottonFlower} from "react-icons/gi";
import SkillsCard from "./SkillsCard";
import resume from '../assets/kowens_resume.pdf';


const About = () => {


  return (
      <div id="about">
        <Row>
          <h2>ABOUT KIMBERLY</h2>
        </Row>
        <Row>
          <Col id="skills" >
            <SkillsCard/>
          </Col>
          <Col id="facts" >
            <p>I'm a full-stack developer well-versed in JavaScript, React.js, and back-end technologies. I have a background in education and project management. Known as a quick learner who stays calm and focused under pressure. I truly enjoy the challenge of coding; it allows me to creatively problem solve while creating interesting applications and projects.</p>
            <hr/>
            <h5>Fun Facts About Me:</h5>
            <p >
            Texas native who relocated to Seattle, now living outside of Boulder.
          </p>
          <GiCottonFlower className="icons"/>
          <p>
            I love the outdoors. Hiking, camping, running, or kayaking are my favorite things to do outside.
          </p>
          <GiCottonFlower className="icons"/>
          <p>
            I love learning new things + I will try (most) everything at least once.
          </p>
          <GiCottonFlower className="icons"/>
          <p>
            <a href="https://github.com/kimberlyj227" target="_blank" rel="noopener noreferrer"> 
              Github: kimberlyj227
            </a>
          </p>
          <GiCottonFlower className="icons"/>
          <p>
            <a href="https://www.linkedin.com/in/kimberly-owens27" target="_blank" rel="noopener noreferrer"> 
              Connect with me on LinkedIn
            </a>
          </p>
        
          <GiCottonFlower className="icons"/>
          <p>
            <a href={resume} target="_blank" rel="noopener noreferrer" >
                View my resume
            </a>
          </p>

          <GiCottonFlower className="icons"/>
          <p>
            <a href="#contact">
              Enough about me, your turn!
            </a>
          </p>
          </Col>
        </Row>
  
      </div>
  )
}

export default About;