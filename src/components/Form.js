import PropTypes from "prop-types";

function Form({
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
}) {
  return (
    <form>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          data-testid="name-input"
          value={cardName}
          onChange={onInputChange}
        />
      </label>
      <br />
      <label>
        Descrição:
        <textarea
          name="description"
          data-testid="description-input"
          value={cardDescription}
          onChange={onInputChange}
        />
      </label>
      <br />

      <label>
        Atributo 1:
        <input
          type="number"
          name="attr1"
          data-testid="attr1-input"
          value={cardAttr1}
          onChange={onInputChange}
        />
      </label>
      <br />

      <label>
        Atributo 2:
        <input
          type="number"
          name="attr2"
          data-testid="attr2-input"
          value={cardAttr2}
          onChange={onInputChange}
        />
      </label>
      <br />

      <label>
        Atributo 3:
        <input
          type="number"
          name="attr3"
          data-testid="attr3-input"
          value={cardAttr3}
          onChange={onInputChange}
        />
      </label>
      <br />

      <label>
        Caminho da Imagem:
        <input
          type="text"
          name="imagePath"
          data-testid="image-input"
          value={cardImage}
          onChange={onInputChange}
        />
      </label>
      <br />

      <label>
        Raridade:
        <select
          data-testid="rare-input"
          value={cardRare}
          onChange={onInputChange}
          name="rare-input"
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
      </label>
      <br />

      <label>
        Trunfo?:
        <input
          type="checkbox"
          name="trunfo"
          data-testid="trunfo-input"
          checked={cardTrunfo}
          onChange={onInputChange}
        />
      </label>
      <br />

      <button
        type="button"
        data-testid="save-button"
        name="save-button"
        disabled={isSaveButtonDisabled}
        onClick={onSaveButtonClick}
      >
        Salvar
      </button>
      <br />
    </form>
  );
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

export default Form;
