import { FormatAmount, PluralizeIfNeeded } from "../src/Formats";
import { FORMAT, PLURALIZE } from "./Constants";

describe("Formats", () => {
  it(`Pluralize If Needed - Should display '${PLURALIZE.SINGULAR}' when passing 1 as an argument.`, () => {
    expect(PluralizeIfNeeded(1, PLURALIZE.SINGULAR, PLURALIZE.PLURAL)).toBe(
      PLURALIZE.SINGULAR
    );
  });
  it(`Pluralize If Needed - Should return '${PLURALIZE.PLURAL}' when passing 2 as an argument.`, () => {
    expect(PluralizeIfNeeded(2, PLURALIZE.SINGULAR, PLURALIZE.PLURAL)).toBe(
      PLURALIZE.PLURAL
    );
  });
  it(`Pluralize If Needed - Should return '${PLURALIZE.SINGULAR}' if no plural is passed and 2 is passed as an argument.`, () => {
    expect(PluralizeIfNeeded(2, PLURALIZE.SINGULAR)).toBe(PLURALIZE.SINGULAR);
  });
  it(`Format Amount - Should return ${FORMAT.OUTPUT}  if ${FORMAT.ENTRY} is passed`, () => {
    console.log(FormatAmount(FORMAT.ENTRY))
    expect(FormatAmount(FORMAT.ENTRY)).toBe(FORMAT.OUTPUT);
  });
});
