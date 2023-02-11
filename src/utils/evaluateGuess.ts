import { MarkedGuess } from "./types";

//================MAIN FUNCTION===============

export function evaluateGuess(
  guess: string,
  hiddenTarget: string
): MarkedGuess {
  let markedGuess: MarkedGuess = [
    { value: guess[0], status: "not included" },
    { value: guess[1], status: "not included" },
    { value: guess[2], status: "not included" },
    { value: guess[3], status: "not included" },
    { value: guess[4], status: "not included" },
  ];
  findMatches(markedGuess, hiddenTarget);
  if (guess === hiddenTarget) {
    return markedGuess;
  }
  findIncluded(markedGuess, hiddenTarget);
  return markedGuess;
}

//================HELPER FUNCTIONS===============

function findMatches(markedGuess: MarkedGuess, hiddenTarget: string): void {
  for (let charIdx in markedGuess) {
    if (markedGuess[charIdx].value === hiddenTarget[charIdx]) {
      markedGuess[charIdx].status = "matched";
    }
  }
}

function findIncluded(markedGuess: MarkedGuess, hiddenTarget: string): void {
  const refHiddenTarget: string[] = [...hiddenTarget.split("")];

  for (let charIdx in markedGuess) {
    if (markedGuess[charIdx].status === "matched") {
      refHiddenTarget[charIdx] = "";
    }
  }

  for (let charIdx in markedGuess) {
    if (
      markedGuess[charIdx].status !== "matched" &&
      refHiddenTarget.includes(markedGuess[charIdx].value)
    ) {
      markedGuess[charIdx].status = "included";
      refHiddenTarget[refHiddenTarget.indexOf(markedGuess[charIdx].value)] = "";
    }
  }
}
