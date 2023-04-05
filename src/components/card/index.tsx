import React from "react";
import "./styles.css";

type Props = {
  logo: string;
  name: string;
};

const Card: React.FC<Props> = ({ logo, name }) => {
  return (
    <div className="cards">
      <img src={logo} alt={name} />
      <span>{name}</span>
    </div>
  );
};

export default Card;
