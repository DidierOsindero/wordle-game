import { useEffect, useState } from "react";
import { targetWords } from "../data/targetWords";
import { useWordle } from "../hooks/useWordle";
import { GameGrid } from "./GameGrid";

export const Wordle = (): JSX.Element => {
  const randomIndex = Math.floor(Math.random() * targetWords.length);
  const targetWordState = useState<string>(targetWords[randomIndex].word);
  const targetWord = targetWordState[0];

  console.log(targetWord);

  const { currentGuess, previousGuessesEvaluated, turn, handleKeyUp } =
    useWordle(targetWord);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div className="ctn-main-content">
      WORDLE GAME
      <GameGrid
        currentGuess={currentGuess}
        previousGuessesEvaluated={previousGuessesEvaluated}
        turn={turn}
      />
    </div>
  );
};
