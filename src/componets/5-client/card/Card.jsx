import "./card.css";

const Card = ({ imgSrc, body, name }) => {
  return (
    <div className="client__card">
      <img src={imgSrc} alt="client" />
      <p>{body}</p>
      <h4>{name}</h4>
    </div>
  );
};

export default Card;
