import { useState } from "react";
import { evaluateGuess } from "../utils/evaluateGuess";
import { GameProgression, MarkedGuess } from "../utils/types";

export const useWordle = (targetWord: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [gameProgression, setGameProgression] =
    useState<GameProgression>("introduction");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [previousGuessesEvaluated, setPreviousGuessesEvaluated] = useState<
    MarkedGuess[]
  >([]);
  const [previousGuesses, setPreviousGuesses] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  //Evaluate Guess
  //evaluateGuess();

  //Save Guess To previousGuesses and previousEvaluatedGuesses
  //find out if it is correct and update isCorrect
  //increase turn by 1
  const addNewGuess = (currentGuessEvaluated: MarkedGuess) => {
    if (currentGuess === targetWord) {
      setIsCorrect(true);
    }
    setPreviousGuesses((prev) => [...prev, currentGuess]);
    setPreviousGuessesEvaluated((prev) => [...prev, currentGuessEvaluated]);
    setTurn((prev) => prev + 1);
  };

  //Handle keyup event
  const handleKeyUp = ({ key }: KeyboardEvent) => {
    const alphabet = /^[a-z]$/i;
    const isLessThanSixChars = currentGuess.length < 5;
    const isFiveChars = currentGuess.length === 5;
    const isInPreviousGuesses = previousGuesses.includes(currentGuess);

    if (alphabet.test(key) && isLessThanSixChars) {
      setCurrentGuess((prev) => prev + key);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    }

    if (key === "Enter") {
      if (isInPreviousGuesses) {
        alert("You aready guessed this word");
        return;
      }

      if (!isFiveChars) {
        alert("Your word must be five characters longs");
        return;
      }
      const currentGuessEvaluated = evaluateGuess(currentGuess, targetWord);
      addNewGuess(currentGuessEvaluated);
      setCurrentGuess("");
    }
  };

  console.log("turn:", turn);
  console.log("is correct:", isCorrect);
  console.log("previous guesses:", previousGuesses);
  console.log("previous evaluatedguesses:", previousGuessesEvaluated);

  return {
    currentGuess,
    previousGuessesEvaluated,
    turn,
    gameProgression,
    handleKeyUp,
  };
};
