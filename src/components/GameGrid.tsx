import { evaluateGuess } from "../utils/evaluateGuess";
import { MarkedGuess } from "../utils/types";
import { Row } from "./Row";

interface GameGridProps {
  previousGuessesEvaluated: MarkedGuess[];
  currentGuess: string;
  turn: number;
}

export const GameGrid = ({
  currentGuess,
  previousGuessesEvaluated,
  turn,
}: GameGridProps): JSX.Element => {
  return (
    <div className="ctn-game-grid">
      {previousGuessesEvaluated.map((evaluatedGuess, i) => {
        return <Row evaluatedGuess={evaluatedGuess} key={i} />;
      })}
    </div>
  );
};
