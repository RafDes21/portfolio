import {Card} from "./components";
import { TOOLS } from "../../db";
import "./styles.css";

const Tools = () => {
  const Content = TOOLS.map((tool, index) => (
    <div className="content-card" key={index}>
      <Card name={tool.name} logo={tool.logo} />
    </div>
  ));

  return (
    <div className="container-cards">
      <div className="slider-cards">{Content}</div>
    </div>
  );
};

export default Tools;

