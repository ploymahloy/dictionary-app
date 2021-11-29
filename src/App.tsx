import { useState } from "react";
import axios from "axios";

import './App.css';

export default function App() {

  const [userInput, setUserInput]       = useState("");
  const [word, setWord]                 = useState("Dictionary App");
  const [partOfSpeech, setPartOfSpeech] = useState("powered by Dictionary API");
  const [definition, setDefinition]     = useState("Please search for a word to be defined above!");

  const getVal = (val: { target: { value: any; }; }) => {
    setUserInput(val.target.value);
  }

  const getDefinition = () => {
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`)
      .then((res) => {
        setWord(res.data[0].word);
        setPartOfSpeech(res.data[0].meanings[0].partOfSpeech);
        setDefinition(res.data[0].meanings[0].definitions[0].definition);
      })
      .catch((err) => {
        alert('Error! Word not found.');
      });
  };

  const handleKeypress = (e: { charCode: number; }) => {
    if (e.charCode === 13) {
      getDefinition();
    } 
  }

  return (
    <div className="App">
      <div className="search">
        <input
          onChange={getVal}
          onKeyPress={handleKeypress}
          placeholder="Search..."
        />
        <button 
          onClick={getDefinition}
          className="define"
        >
        Define
      </button>
      </div>
      <div className="display">
        <h1>{word}</h1>
        <p className="part-of-speech">{partOfSpeech}</p>
        <p className="definition">{definition}</p>
      </div>
    </div>
  );
}
