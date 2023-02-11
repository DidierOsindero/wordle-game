import { useEffect, useState } from "react";
import { targetWords } from "../data/targetWords";
import { useWordle } from "../hooks/useWordle";
import { GameGrid } from "./GameGrid";
import { Keyboard } from "./Keyboard";
import { ResultsPopUp } from "./ResultsPopUp";

export const Wordle = (): JSX.Element => {
  const randomIndex = Math.floor(Math.random() * targetWords.length);
  const targetWordState = useState<string>(targetWords[randomIndex].word);
  const targetWord = targetWordState[0];

  console.log(targetWord);

  const {
    currentGuess,
    previousGuessesEvaluated,
    turn,
    handleKeyUp,
    usedLetters,
    isCorrect,
    handlePlayAgain,
    isFinished,
  } = useWordle(targetWord);

  useEffect(() => {
    //create a parent function so event.key can be passed into handelKeyUp directly
    function listener(e: KeyboardEvent) {
      handleKeyUp(e.key);
    }
    window.addEventListener("keyup", listener);

    return () => window.removeEventListener("keyup", listener);
  }, [handleKeyUp]);

  return (
    <div className="ctn-main-content">
      WORDLE GAME
      <GameGrid
        currentGuess={currentGuess}
        previousGuessesEvaluated={previousGuessesEvaluated}
        turn={turn}
      />
      <Keyboard usedLetters={usedLetters} handleKeyUp={handleKeyUp} />
      {isFinished && (
        <ResultsPopUp
          turn={turn}
          targetWord={targetWord}
          isCorrect={isCorrect}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};
