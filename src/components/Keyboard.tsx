import { letters } from "../data/letters";
export const Keyboard = (): JSX.Element => {
  return (
    <div className="ctn-keyboard">
      {letters.map((letter) => {
        return (
          <div className="letter" key={letter}>
            {letter}
          </div>
        );
      })}
    </div>
  );
};
