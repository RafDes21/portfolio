import { FiFileText } from "react-icons/fi";
import { MdOutlineComputer } from "react-icons/md";
import "./styles.css";

export const Animation = () => {
  return (
    <div className="animation">
      <div className="animation-box">
        <div className="animation-box__computer">
          <MdOutlineComputer className="computer" />
          <p>FRONT END</p>
        </div>
        <div className="animation-box__computer">
          <MdOutlineComputer className="computer" />
          <p>BACK END</p>
        </div>
        <span className="animation-api">
          <FiFileText />
          <span>API</span>
        </span>
      </div>
    </div>
  );
};
