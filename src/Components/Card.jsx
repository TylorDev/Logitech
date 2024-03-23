import { Button } from ".";
import "./Card.scss";

function Card({ className, title, subtitle, content, name }) {
  return (
    <div className={`card-content ${className}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{content}</p>

      {name && <Button name={name}></Button>}
    </div>
  );
}

export default Card;
