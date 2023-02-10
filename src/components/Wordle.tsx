import { useEffect, useState } from "react";
import { useWordle } from "../hooks/useWordle";
import { GameProgression } from "../utils/types";
import { GameGrid } from "./GameGrid";

export const Wordle = (): JSX.Element => {
  //-----------------------------------------------------STATES
  // Set initial game state as "introduction"

  const {
    currentGuess,
    previousGuessesEvaluated,
    turn,
    gameProgression,
    handleKeyUp,
  } = useWordle("apple");

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
      <p>Current Guess: {currentGuess}</p>
    </div>
  );
};
