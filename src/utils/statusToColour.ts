export const statusToColour = (
  status: "not included" | "matched" | "included"
): "green" | "yellow" | "grey" => {
  switch (status) {
    case "not included":
      return "grey";
    case "included":
      return "yellow";
    case "matched":
      return "green";
  }
};
