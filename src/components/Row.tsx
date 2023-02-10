import { statusToColour } from "../utils/statusToColour";
import { MarkedGuess } from "../utils/types";

interface RowProps {
  evaluatedGuess: MarkedGuess;
}

export const Row = ({ evaluatedGuess }: RowProps): JSX.Element => {
  if (evaluatedGuess) {
    return (
      <div className="row">
        <div
          style={{ backgroundColor: statusToColour(evaluatedGuess[0].status) }}
        >
          {evaluatedGuess[0].value}
        </div>
        <div
          style={{ backgroundColor: statusToColour(evaluatedGuess[1].status) }}
        >
          {evaluatedGuess[1].value}
        </div>
        <div
          style={{ backgroundColor: statusToColour(evaluatedGuess[2].status) }}
        >
          {evaluatedGuess[2].value}
        </div>
        <div
          style={{ backgroundColor: statusToColour(evaluatedGuess[3].status) }}
        >
          {evaluatedGuess[3].value}
        </div>
        <div
          style={{ backgroundColor: statusToColour(evaluatedGuess[4].status) }}
        >
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
