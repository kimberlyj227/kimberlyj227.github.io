import React, { useContext } from "react";
import ProjectContext from "../../data/ProjectContext";
import "./style.css";

function CardBtn(props) {
  const { handleBtnClick } = useContext(ProjectContext);
  return (
    <button onClick={handleBtnClick} className={`card-btn ${props["data-value"]}`} {...props} />
  
    
  );
}

export default CardBtn;
