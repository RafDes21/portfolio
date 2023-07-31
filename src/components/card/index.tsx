import { CardProps } from "../../types/types";
import "./styles.css"

const Card: React.FC<CardProps> = ({
  img,
  title,
  description,
  period,
  state,
}) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={title} />
      </div>
      <div className="card__description">
        <h4 className="card__description-title">{title}</h4>
        <p className="card__description-detail">{description}</p>
        <div className="card__description-periodState">
          <span>{period}</span>
          <span>{state?"true":"false"}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
