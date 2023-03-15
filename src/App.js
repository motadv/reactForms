import React from "react";
import Form from "./components/Form";
import Card from "./components/Card";

class App extends React.Component {
  state = {
    cardName: "",
    cardDescription: "",
    cardAttr1: "",
    cardAttr2: "",
    cardAttr3: "",
    cardImage: "https://cdn-icons-png.flaticon.com/512/1178/1178882.png",
    cardRare: "normal",
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardList: [],
  };

  clearInput = () => {
    this.setState({
      cardName: "",
      cardDescription: "",
      cardAttr1: "0",
      cardAttr2: "0",
      cardAttr3: "0",
      cardImage: "https://cdn-icons-png.flaticon.com/512/1178/1178882.png",
      cardRare: "normal",
      cardTrunfo: false,
    });
  };

  onSaveCard = () => {
    const newCard = {
      cardName: this.state.cardName,
      cardDescription: this.state.cardDescription,
      cardAttr1: this.state.cardAttr1,
      cardAttr2: this.state.cardAttr2,
      cardAttr3: this.state.cardAttr3,
      cardImage: this.state.cardImage,
      cardRare: this.state.cardRare,
      cardTrunfo: this.state.cardTrunfo,
    };

    this.setState(
      {
        cardList: [...this.state.cardList, newCard],
        hasTrunfo: this.state.hasTrunfo ? true : newCard.cardTrunfo,
      },
      this.validateForm
    );

    this.clearInput();
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    // Se tipo for checkbox, value é checked, senão é value mesmo
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.validateForm();
  };

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attr1 = parseInt(cardAttr1);
    const attr2 = parseInt(cardAttr2);
    const attr3 = parseInt(cardAttr3);

    const containTextInfo =
      cardName && cardDescription && cardImage && cardRare;
    const isAttrOnLimit =
      attr1 + attr2 + attr3 <= 210 || attr1 <= 90 || attr2 <= 90 || attr3 <= 90;
    const isAttrsPositive = attr1 >= 0 && attr2 >= 0 && attr3 >= 0;
    const isFormValid = containTextInfo && isAttrOnLimit && isAttrsPositive;

    this.setState({
      isSaveButtonDisabled: !isFormValid,
    });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardList,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <button
          onClick={() => {
            console.log(...cardList);
          }}
        >
          Log Card List
        </button>
        <Form
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
          hasTrunfo={hasTrunfo}
          isSaveButtonDisabled={isSaveButtonDisabled}
          onInputChange={this.onInputChange}
          onSaveButtonClick={this.onSaveCard}
        />
        <Card
          cardName={cardName}
          cardDescription={cardDescription}
          cardAttr1={cardAttr1}
          cardAttr2={cardAttr2}
          cardAttr3={cardAttr3}
          cardImage={cardImage}
          cardRare={cardRare}
          cardTrunfo={cardTrunfo}
        />
        <div className="baralho">
          {cardList.map((cardObj) => (
            <Card
              cardName={cardObj.cardName}
              cardDescription={cardObj.cardDescription}
              cardAttr1={cardObj.cardAttr1}
              cardAttr2={cardObj.cardAttr2}
              cardAttr3={cardObj.cardAttr3}
              cardImage={cardObj.cardImage}
              cardRare={cardObj.cardRare}
              cardTrunfo={cardObj.cardTrunfo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
// push
