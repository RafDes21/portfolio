import "./styles.css";

import ItemProject from "./ItemProject";
import { PROJECTS } from "../../db";

const Projects = () => {
  const Content = PROJECTS.map((item) => (
    <ItemProject
      key={item.title}
      title={item.title}
      git={item.gitHub}
      web={item.web}
      image={item.image}
      tools={item.tools}
    />
  ));

  return <div className="projects">{Content}</div>;
};

export default Projects;
