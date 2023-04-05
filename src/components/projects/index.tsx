import { useState } from "react";
import { TbWorldUpload } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import "./styles.css";
import Icons from "./Icons";

const Projects = () => {
  const [show, setShow] = useState(false);

  const onChangeSetShow = () => {
    setShow(false);
  };

  const onChangeMOuse = () => {
    setShow(true);
  };

  return (
    <div className="projects">
      <div
        className="item1"
        onMouseOver={onChangeMOuse}
        onMouseOut={onChangeSetShow}
      >
        <img
          src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="example"
        />
        <div
          className="show-project"
          style={
            show
              ? { transform: "translateY(-101.5%)" }
              : { transform: "translateY(100%)" }
          }
        >
          <div className="content-icons-links">
            <a>
              <TbWorldUpload className="icon-link"/>
            </a>
            <a>
              <BsGithub className="icon-link"/>
            </a>
          </div>
        </div>
        <div className="content-icons">
          <Icons/>
        </div>
      </div>
      <div className="item2">
        <img
          src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="example"
        />
      </div>
      <div className="item3">
        <img
          src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="example"
        />
      </div>
    </div>
  );
};

export default Projects;
