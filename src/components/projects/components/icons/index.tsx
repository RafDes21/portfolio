import { TOOLS } from "../../../../db";
import { Tools } from "../../types/types";
import "../../styles.css";

const Icons: React.FC<Tools> = ({ tools }) => {
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
