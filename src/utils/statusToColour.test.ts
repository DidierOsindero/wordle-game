import { statusToColour } from "./statusToColour";
import { expect, it, describe } from "vitest";

describe("statusToColour", () => {
  it("given 'included' it outputs yellow", () => {
    expect(statusToColour("included")).toBe("yellow");
  });

  it("given 'not included' it outputs grey", () => {
    expect(statusToColour("not included")).toBe("grey");
  });

  it("given 'matched' it outputs green", () => {
    expect(statusToColour("matched")).toBe("green");
  });
});
