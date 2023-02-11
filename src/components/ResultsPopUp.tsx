interface ResultsPopUpProps {
  isCorrect: boolean;
  targetWord: string;
  turn: number;
  handlePlayAgain: () => void;
}

export const ResultsPopUp = ({
  isCorrect,
  targetWord,
  turn,
  handlePlayAgain,
}: ResultsPopUpProps): JSX.Element => {
  return (
    <div className="modal">
      <div className="inner-modal">
        {isCorrect && (
          <p>
            Well done! You got the word in{" "}
            {turn === 1 ? `${turn} turn` : `${turn} turns`}.
          </p>
        )}

        {!isCorrect && (
          <p>Better luck next time! The word was '{targetWord}'.</p>
        )}

        <button onClick={handlePlayAgain} className="play-again-btn">
          Play Again
        </button>
      </div>
    </div>
  );
};
