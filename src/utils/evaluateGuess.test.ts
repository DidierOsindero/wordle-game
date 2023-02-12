import { describe, expect, it } from "vitest";
import { evaluateGuess } from "./evaluateGuess";
describe("evaluateGuess checks which words in a string match/are included in a target string and returns an object with this information for each character.", () => {
  it("should return 'matched' for all matching values", () => {
    expect(evaluateGuess("hello", "hello")).toStrictEqual([
      { value: "h", status: "matched" },
      { value: "e", status: "matched" },
      { value: "l", status: "matched" },
      { value: "l", status: "matched" },
      { value: "o", status: "matched" },
    ]);
  });
  it("should return 'not included' for all values that are not included", () => {
    expect(evaluateGuess("abcde", "vwxyz")).toStrictEqual([
      { value: "a", status: "not included" },
      { value: "b", status: "not included" },
      { value: "c", status: "not included" },
      { value: "d", status: "not included" },
      { value: "e", status: "not included" },
    ]);
  });
  it("should return 'included' for all values that are included", () => {
    expect(evaluateGuess("abcde", "edbca")).toStrictEqual([
      { value: "a", status: "included" },
      { value: "b", status: "included" },
      { value: "c", status: "included" },
      { value: "d", status: "included" },
      { value: "e", status: "included" },
    ]);
  });

  it("should correctly evalute a guess that contains characters with different statuses", () => {
    expect(evaluateGuess("hello", "world")).toStrictEqual([
      { value: "h", status: "not included" },
      { value: "e", status: "not included" },
      { value: "l", status: "not included" },
      { value: "l", status: "matched" },
      { value: "o", status: "included" },
    ]);
  });

  it("should correctly handle repeated letters in guess", () => {
    expect(evaluateGuess("lulls", "level")).toStrictEqual([
      { value: "l", status: "matched" },
      { value: "u", status: "not included" },
      { value: "l", status: "included" },
      { value: "l", status: "not included" },
      { value: "s", status: "not included" },
    ]);
  });
});
