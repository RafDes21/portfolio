import { useState } from "react";
import { TbWorldUpload } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import Icons from "./Icons";
import logo from "../../assets/patient.png";
import "./styles.css";

interface Project {
  title: string;
  git: string;
  web: string;
  image: string;
  back?: string;
  tools: number[];
}

const ItemProject: React.FC<Project> = ({
  title,
  git,
  web,
  tools,
  image,
  back,
}) => {
  const [show, setShow] = useState(false);

  const onChangeSetShow = () => {
    setShow(false);
  };

  const onChangeMOuse = () => {
    setShow(true);
  };

  return (
    <div
      className="item-project"
      onMouseOver={onChangeMOuse}
      onMouseOut={onChangeSetShow}
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
          <a href={git} target="_blank">
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
