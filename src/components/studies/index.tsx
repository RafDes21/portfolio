import React from "react";
import { StudiesProps } from "../../types/types";
import studies from "../../assets/studies.jpg";
import "./styles.css"

const Studies: React.FC<StudiesProps> = ({ children }) => {
  return (
    <div className="studies">
      <div className="studies__contentOne">
        <img src={studies} />
      </div>
      <div className="studies__contentTwo">{children}</div>
    </div>
  );
};

export default Studies;
