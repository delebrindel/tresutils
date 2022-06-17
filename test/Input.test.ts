import { ValidateEmail } from "../src";
import { INPUTS } from "./Constants";

describe("Input", () => {
  // Validate Email
  it(`Validate Email - Should return true for '${INPUTS.VALID_EMAIL}'.`, () => {
    expect(ValidateEmail(INPUTS.VALID_EMAIL)).toBeTruthy();
  });
  it(`Validate Email - Should return false for '${INPUTS.INVALID_EMAIL}'.`, () => {
    expect(ValidateEmail(INPUTS.INVALID_EMAIL)).toBeFalsy();
  });
});
