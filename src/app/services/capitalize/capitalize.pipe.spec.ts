import { CapitalizePipe } from "./capitalize.pipe";

describe("CapitalizePipe", () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it("should capitalize the first letter of a string", () => {
    expect(pipe.transform("hello")).toBe("Hello");
  });

  it("should handle empty string", () => {
    expect(pipe.transform("")).toBe("");
  });
});
