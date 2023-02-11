import { targetWords } from "../data/targetWords";

export const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * targetWords.length);
  return targetWords[randomIndex].word;
};
