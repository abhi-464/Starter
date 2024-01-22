import { FC, useState } from 'react';
import words from "./wordList.json";

import './style.css';
import { HangmanDrawing } from './Components/HangmanDrawing';
import { HangmanWordGuess } from './Components/HangmanWordGuess';
import { Keyboard } from './Components/Keyboard';

export const App: FC = () => {

  const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)]);
  const [guessedWord, setguessedWord] = useState<string[]>([]);

  return (
    <div 
    style={{
      maxWidth : "800px",
      display: 'flex',
      flexDirection: "column",
      gap: "2rem",
      margin:"0 auto",
      alignItems: "center"
    }}
    >
      <div style={{textAlign: "center"}}>
        <h1>Hello Hangman !</h1>
        <HangmanDrawing/>
        <HangmanWordGuess />
        <Keyboard />
      </div>
     
    </div>
  );
};
