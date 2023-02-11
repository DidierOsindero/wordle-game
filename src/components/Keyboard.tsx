import { letters } from "../data/letters";
import { statusToColour } from "../utils/statusToColour";
import { IUsedLetters } from "../utils/types";

interface KeyboardProps {
  usedLetters: IUsedLetters;
  handleKeyUp: (key: string) => void;
}
export const Keyboard = ({
  usedLetters,
  handleKeyUp,
}: KeyboardProps): JSX.Element => {
  return (
    <div className="ctn-keyboard">
      {letters.map((letter) => {
        return (
          <div
            className={`letter ${
              usedLetters[letter] && statusToColour(usedLetters[letter])
            }`}
            key={letter}
            onClick={() => handleKeyUp(letter)}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};
