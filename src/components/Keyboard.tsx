import { letters } from "../data/letters";
import { statusToColour } from "../utils/statusToColour";
import { IUsedLetters } from "../utils/types";

interface KeyboardProps {
  usedLetters: IUsedLetters;
}
export const Keyboard = ({ usedLetters }: KeyboardProps): JSX.Element => {
  return (
    <div className="ctn-keyboard">
      {letters.map((letter) => {
        return (
          <div
            className={`letter ${
              usedLetters[letter] && statusToColour(usedLetters[letter])
            }`}
            key={letter}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};
