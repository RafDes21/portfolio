import { TOOLS } from "../../db";
import "./styles.css";

interface Props {
  tools: number[];
}

const Icons: React.FC<Props> = ({ tools }) => {
  if (!tools) {
    return <h1>Loading</h1>;
  }

  const icons = tools.map((id) => {
    const tool = TOOLS.find((item) => item.id === id);
    return <img key={id} src={tool?.logo} alt={tool?.name} />;
  });

  return <div className="icon">{icons}</div>;
};

export default Icons;
