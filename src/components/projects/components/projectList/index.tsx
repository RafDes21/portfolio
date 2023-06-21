import React from "react";
import ItemProject from "../itemProject";
import { Project } from "../../types/types";

interface Props {
  projects: Project[];
}

const ProjectList: React.FC<Props> = ({ projects }) => {
  const Content = projects.map((item, index) => (
    <ItemProject
      key={index}
      title={item.title}
      gitHub={item.gitHub}
      web={item.web}
      image={item.image}
      tools={item.tools}
      back={item.back}
    />
  ));

  return <>{Content}</>;
};

export default ProjectList;
