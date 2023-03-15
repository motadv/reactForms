import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <label htmlFor="cardName">Nome</label>
        <br />
        <input
          type="text"
          data-testid="name-input"
          name="cardName"
          value={cardName}
          onChange={onInputChange}
        />

        <br />

        <label htmlFor="cardDescription">Descrição</label>
        <br />
        <textarea
          data-testid="description-input"
          name="cardDescription"
          value={cardDescription}
          onChange={onInputChange}
        />

        <br />

        <label>
          Número 1
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            value={cardAttr1}
            onChange={onInputChange}
          />
        </label>

        <br />

        <label>
          Número 2
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            value={cardAttr2}
            onChange={onInputChange}
          />
        </label>

        <br />

        <label>
          Número 3
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            value={cardAttr3}
            onChange={onInputChange}
          />
        </label>

        <br />

        <label>
          Imagem
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            value={cardImage}
            onChange={onInputChange}
          />
        </label>

        <br />

        <label>
          Raridade
          <select
            data-testid="rare-input"
            name="cardRare"
            value={cardRare}
            onChange={onInputChange}
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        {hasTrunfo ? (
          <p>Você já tem um Super Trunfo em seu baralho</p>
        ) : (
          <label>
            Trunfo?
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={cardTrunfo}
              onChange={onInputChange}
            />
          </label>
        )}

        <br />

        <button
          type="submit"
          data-testid="save-button"
          disabled={isSaveButtonDisabled}
          onClick={onSaveButtonClick}
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
