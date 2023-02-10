import { useState } from "react";
import { GameProgression, MarkedGuess } from "../utils/types";

export const useWordle = () => {
  const [turn, setTurn] = useState<number>(0);
  const [gameProgression, setGameProgression] =
    useState<GameProgression>("introduction");
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [previousGuessesEvaluated, setPreviousGuessesEvaluated] = useState<
    MarkedGuess[]
  >([...Array(6)]);
  const [previousGuesses, setPreviousGuesses] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  return { currentGuess, previousGuessesEvaluated, turn, gameProgression };
};
