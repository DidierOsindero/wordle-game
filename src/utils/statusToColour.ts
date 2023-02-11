import { Status } from "./types";

export const statusToColour = (status: Status): "green" | "yellow" | "grey" => {
  switch (status) {
    case "not included":
      return "grey";
    case "included":
      return "yellow";
    case "matched":
      return "green";
  }
};
