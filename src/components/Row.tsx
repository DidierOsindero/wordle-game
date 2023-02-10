import { MarkedGuess } from "../utils/types";

interface RowProps {
  evaluatedGuess: MarkedGuess;
}

export const Row = ({ evaluatedGuess }: RowProps): JSX.Element => {
  if (evaluatedGuess) {
    return (
      <div className="ctn-row">
        <div>{evaluatedGuess[0].value}</div>
        <div>{evaluatedGuess[1].value}</div>
        <div>{evaluatedGuess[2].value}</div>
        <div>{evaluatedGuess[3].value}</div>
        <div>{evaluatedGuess[4].value}</div>
      </div>
    );
  } else {
    return (
      <div className="ctn-row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
};
