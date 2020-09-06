import React from "react";
import "../styles/About.css";
import {Row, Col} from "react-bootstrap";
import {GiCottonFlower} from "react-icons/gi";
import SkillsCard from "./SkillsCard";

const About = () => {
  return (
    <div id="about">
      <Row>
        <h2>ABOUT KIMBERLY</h2>
      </Row>
      <Row>
        <Col id="skills" md={4}>
          <SkillsCard/>
        </Col>
        <Col id="facts" md={8}>
          <p>I'm a full-stack developer with a background in education and project management. I am a quick learner who can stay calm and focused under pressure. I truly enjoy the challenge of coding; it allows me to creatively problem solve while creating interesting applications and projects.</p>
          <hr/>
          <h5>Fun Facts About Me:</h5>
          <p >
          Texas native who relocated to Seattle, now living outside of Boulder.
        </p>
        <GiCottonFlower class="icons"/>
        <p>
          I love the outdoors. Hiking, camping, running, or kayaking are my favorite things to do outside.
        </p>
        <GiCottonFlower class="icons"/>
        <p>
          I love learning new things + I will try (most) everything at least once.
        </p>
        <GiCottonFlower class="icons"/>
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