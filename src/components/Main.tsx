import { useState } from 'react';
import axios from 'axios'; 

import './Main.css';

const placeholderDefinition = 'A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word\'s meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data.'

export default function Main() {
	const [word, setWord] = useState('dictionary');
	const [partOfSpeech, setPartOfSpeech] = useState('noun');
	const [definition, setDefinition] = useState(placeholderDefinition);
	const [userInput, setUserInput] = useState('');
  
  const dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;

	const getVal = (val: { target: { value: string } }) => {
		setUserInput(val.target.value);
	};

	const getDefinition = () => {
		axios
			.get(dictionaryAPI)
			.then((res) => {
				setWord(res.data[0].word);
				setPartOfSpeech(res.data[0].meanings[0].partOfSpeech);
				setDefinition(res.data[0].meanings[0].definitions[0].definition);
			})
			.catch((_error) => {
				alert('Error! Word not found.');
			});
	};

	const handleKeypress = (e: { charCode: number }) => {
		if (e.charCode === 13) {
			getDefinition();
		}
	};

	return (
		<div className="Main">
			<div className="search">
				<input
					onChange={getVal}
					onKeyPress={handleKeypress}
					placeholder="Search..."
				/>
				<button onClick={getDefinition} className="define">
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
