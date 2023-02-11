import { useState } from "react";
import { evaluateGuess } from "../utils/evaluateGuess";
import { IUsedLetters, MarkedGuess } from "../utils/types";
import { updateNewUsedLetters } from "../utils/updateUsedLetters";

export const useWordle = (targetWord: string) => {
  const [turn, setTurn] = useState<number>(0);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [previousGuessesEvaluated, setPreviousGuessesEvaluated] = useState<
    MarkedGuess[]
  >([...Array(6)]);
  const [previousGuesses, setPreviousGuesses] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [usedLetters, setUsedLetters] = useState<IUsedLetters>({});

  //Save Guess To previousGuesses and previousEvaluatedGuesses
  //find out if it is correct and update isCorrect
  //increase turn by 1
  const addNewGuess = (currentGuessEvaluated: MarkedGuess) => {
    if (currentGuess === targetWord) {
      setIsCorrect(true);
      setTimeout(() => setIsFinished(true), 1000);
    } else if (turn === 5) setTimeout(() => setIsFinished(true), 1000);
    setPreviousGuesses((prev) => [...prev, currentGuess]);
    setPreviousGuessesEvaluated((prev) => {
      const newEvalutedGuesses = [...prev];
      newEvalutedGuesses[turn] = currentGuessEvaluated;
      return newEvalutedGuesses;
    });
    setUsedLetters((prev) => {
      return updateNewUsedLetters(prev, currentGuessEvaluated);
    });
    setTurn((prev) => prev + 1);
  };

  //Handle keyup event
  const handleKeyUp = (key: string) => {
    if (isCorrect) return;

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

  const handlePlayAgain = () => {
    setIsCorrect(false);
    setIsFinished(false);
    setTurn(0);
    setPreviousGuesses([]);
    setPreviousGuessesEvaluated([...Array(6)]);
    setCurrentGuess("");
    setUsedLetters({});
  };

  return {
    currentGuess,
    previousGuessesEvaluated,
    turn,
    handleKeyUp,
    usedLetters,
    isCorrect,
    handlePlayAgain,
    isFinished,
  };
};
