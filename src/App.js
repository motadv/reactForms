import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";

import { useState } from "react";

function App() {
  const cardInitialValues = {
    cardName: "",
    cardDescription: "",
    cardAttr1: "",
    cardAttr2: "",
    cardAttr3: "",
    cardImage: "",
    cardRare: "",
    cardTrunfo: false,
  };
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cardAttr1, setCardAttr1] = useState("");
  const [cardAttr2, setCardAttr2] = useState("");
  const [cardAttr3, setCardAttr3] = useState("");
  const [cardImage, setCardImage] = useState("");
  const [cardRare, setCardRare] = useState("");
  const [cardTrunfo, setCardTrunfo] = useState(false);

  function onInputChange(ev) {
    const { name, value } = ev.target;
  }

  return (
    <div>
      <Form onInputChange={onInputChange} />
      <Card />
    </div>
  );
}

export default App;
