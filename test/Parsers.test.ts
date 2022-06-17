import { ParseJSONObject } from "../src";
import { JSON_OBJECT } from "./Constants";

describe("Parsers", () => {
  // Validate Email
  it(`Parse JSON Object - Should return an object for '${JSON_OBJECT.VALID_STRING}'.`, () => {
    expect(ParseJSONObject(JSON_OBJECT.VALID_STRING)).toEqual(JSON_OBJECT.VALID_OBJECT);
  });
});
