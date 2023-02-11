import { IUsedLetters, MarkedGuess } from "./types";

export const updateNewUsedLetters = (
  currentUsedLetters: IUsedLetters,
  evaluatedGuess: MarkedGuess
): IUsedLetters => {
  const prevUsedLetters: IUsedLetters = { ...currentUsedLetters };

  for (let key in evaluatedGuess) {
    const currentCharValue = evaluatedGuess[key].value;
    const currentCharStatus = evaluatedGuess[key].status;
    const previousCharStatus = prevUsedLetters[currentCharValue];

    if (
      previousCharStatus === undefined ||
      previousCharStatus === "not included" ||
      (previousCharStatus === "included" && currentCharStatus === "matched")
    ) {
      prevUsedLetters[currentCharValue] = currentCharStatus;
    }
  }

  return prevUsedLetters;
};
