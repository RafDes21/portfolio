import { PROJECTS } from "../../db";
import { ProjectList } from "./components";
import "./styles.css";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectList projects={PROJECTS} />
    </div>
  );
};

export default Projects;
