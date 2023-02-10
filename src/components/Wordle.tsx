import { useState } from "react";
import { useWordle } from "../hooks/useWordle";
import { GameProgression } from "../utils/types";
import { GameGrid } from "./GameGrid";

export const Wordle = (): JSX.Element => {
  //-----------------------------------------------------STATES
  // Set initial game state as "introduction"

  const { currentGuess, previousGuessesEvaluated, turn, gameProgression } =
    useWordle();

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
