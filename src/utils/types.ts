export type GameProgression =
  | "introduction"
  | "first guess"
  | "second guess"
  | "third guess"
  | "fourth guess"
  | "fifth guess"
  | "sixth guess"
  | "results";

export type MarkedGuess = [IChar, IChar, IChar, IChar, IChar];
export interface IChar {
  value: string;
  status: Status;
}
export type Status = "not included" | "matched" | "included";
