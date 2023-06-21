import { useState } from "react";
import { TbWorldUpload } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import Icons from "../icons";
import logo from "../../../../assets/patient.png";
import { Project } from "../../types/types";
import "../../styles.css";

const ItemProject: React.FC<Project> = ({
  title,
  gitHub,
  web,
  tools,
  image,
  back,
}) => {
  const [show, setShow] = useState(false);

  const onMouseOut = () => {
    setShow(false);
  };

  const onMouseOver = () => {
    setShow(true);
  };

  return (
    <div
      className="item-project"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img src={image || logo} alt={title} />
      <h1 className="itemTitle">{title}</h1>
      <div
        className="show-project"
        style={
          show
            ? { transform: "translateY(-101.5%)" }
            : { transform: "translateY(100%)" }
        }
      >
        <div className="content-icons-links">
          <a href={web} target="_blank">
            <TbWorldUpload className="icon-link" />
          </a>
          <a href={gitHub} target="_blank">
            <BsGithub className="icon-link" />
          </a>
          {back ? (
            <a href={back} target="_blank">
              <BsGithub className="icon-link active" />
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="content-icons">
        <Icons tools={tools} />
      </div>
    </div>
  );
};

export default ItemProject;
