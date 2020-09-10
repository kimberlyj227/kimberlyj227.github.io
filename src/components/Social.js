import React from "react";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope } from 'react-icons/fa';
import resume from "../assets/kimberly.owens.resume.pdf";
import "../styles/Social.css";


function Social() {
  return (
    <div className="social">
      <span>
        <a href="https://github.com/kimberlyj227" target="_blank" rel="noopener noreferrer"> 
          <FaGithub className="icon"/>
        </a > 
      </span>
      <span>
        <a href="https://www.linkedin.com/in/kimberly-owens27" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon"/>
        </a>
      </span>
      <span>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <FaFilePdf  className="icon"/>
        </a>  
      </span>
      <span>
      <a href="mailto: kimberly.j.owens@gmail.com"  className="icon">
            <FaEnvelope />
          </a>
      </span>

    </div>
  )
}

export default Social;