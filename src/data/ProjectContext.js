import React from "react";

const ProjectContext = React.createContext({
  name: "",
  github: "",
  deployed: "",
  img: "",
  desc: "",
  handleBtnClick: () => {}
});

export default ProjectContext;