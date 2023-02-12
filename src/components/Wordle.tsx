import { useEffect, useState } from "react";
import { targetWords } from "../data/targetWords";
import { useWordle } from "../hooks/useWordle";
import { getRandomWord } from "../utils/getRandomWord";
import { GameGrid } from "./GameGrid";
import { Keyboard } from "./Keyboard";
import { ResultsPopUp } from "./ResultsPopUp";

export const Wordle = (): JSX.Element => {
  const [targetWord, setTargetWord] = useState<string | null>(null);

  useEffect(() => {
    const randomWord = getRandomWord();
    setTargetWord(randomWord);
  }, [setTargetWord]);

  const {
    currentGuess,
    previousGuessesEvaluated,
    turn,
    handleKeyUp,
    usedLetters,
    isCorrect,
    handlePlayAgain,
    isFinished,
  } = useWordle(targetWord, setTargetWord);

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
      <h1>Wordle</h1>
      <GameGrid
        currentGuess={currentGuess}
        previousGuessesEvaluated={previousGuessesEvaluated}
        turn={turn}
      />
      <Keyboard usedLetters={usedLetters} handleKeyUp={handleKeyUp} />
      {isFinished && (
        <ResultsPopUp
          turn={turn}
          targetWord={targetWord as string}
          isCorrect={isCorrect}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
};
