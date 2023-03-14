import PropTypes from "prop-types";

function Card({
  cardName,
  cardDescription,
  cardAttr1,
  cardAttr2,
  cardAttr3,
  cardImage,
  cardRare,
  cardTrunfo,
}) {
  return (
    <div>
      <h2 data-testid="name-card">{cardName}</h2>
      <img src={cardImage} alt={cardName} data-testid="image-card"></img>
      <p data-testid="description-card">{cardDescription}</p>
      <p data-testid="attr1-card">{cardAttr1}</p>
      <p data-testid="attr2-card">{cardAttr2}</p>
      <p data-testid="attr3-card">{cardAttr3}</p>
      <p data-testid="rare-card"></p>
      {() => {
        if ({ cardTrunfo })
          return <p data-testid="trunfo-card">Super Trunfo</p>;
      }}
    </div>
  );
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;
