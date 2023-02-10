import { MarkedGuess } from "../utils/types";

interface RowProps {
  evaluatedGuess: MarkedGuess;
}

export const Row = ({ evaluatedGuess }: RowProps): JSX.Element => {
  return <div className="ctn-row">Row</div>;
};
