import { statusToColour } from "../utils/statusToColour";
import { MarkedGuess } from "../utils/types";

interface RowProps {
  evaluatedGuess: MarkedGuess;
  currentGuess: string;
  turn: number;
  rowNumber: number;
}

export const Row = ({
  evaluatedGuess,
  currentGuess,
  turn,
  rowNumber,
}: RowProps): JSX.Element => {
  if (rowNumber === turn) {
    return (
      <div className="row">
        <div className={currentGuess[0] && "filled"}>{currentGuess[0]}</div>
        <div className={currentGuess[1] && "filled"}>{currentGuess[1]}</div>
        <div className={currentGuess[2] && "filled"}>{currentGuess[2]}</div>
        <div className={currentGuess[3] && "filled"}>{currentGuess[3]}</div>
        <div className={currentGuess[4] && "filled"}>{currentGuess[4]}</div>
      </div>
    );
  } else if (evaluatedGuess) {
    return (
      <div className="row">
        <div className={statusToColour(evaluatedGuess[0].status)}>
          {evaluatedGuess[0].value}
        </div>
        <div className={statusToColour(evaluatedGuess[1].status)}>
          {evaluatedGuess[1].value}
        </div>
        <div className={statusToColour(evaluatedGuess[2].status)}>
          {evaluatedGuess[2].value}
        </div>
        <div className={statusToColour(evaluatedGuess[3].status)}>
          {evaluatedGuess[3].value}
        </div>
        <div className={statusToColour(evaluatedGuess[4].status)}>
          {evaluatedGuess[4].value}
        </div>
      </div>
    );
  } else {
    return (
      <div className="row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
};
