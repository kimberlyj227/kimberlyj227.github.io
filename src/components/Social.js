import React from "react";
import { FaGithub, FaLinkedin, FaRegFilePdf } from 'react-icons/fa';
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
        <a href="www.linkedin.com/in/kimberly-owens27" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon"/>
        </a>
      </span>
      <span>
          <FaRegFilePdf  className="icon"/>
      </span>

    </div>
  )
}

export default Social;