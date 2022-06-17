import { FormatAmount, PluralizeIfNeeded } from "../src/Formats";
import { FORMAT, PLURALIZE } from "./Constants";

describe("Formats", () => {
  // Pluralize If Needed
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
  // Format Amount
  it(`Format Amount - Should return '${FORMAT.POSITIVE_OUTPUT}'  if ${FORMAT.POSITIVE_ENTRY} is passed`, () => {
    expect(FormatAmount(FORMAT.POSITIVE_ENTRY)).toBe(FORMAT.POSITIVE_OUTPUT);
  });
  it(`Format Amount - Should return '${FORMAT.NEGATIVE_OUTPUT}'  if ${FORMAT.NEGATIVE_ENTRY} is passed`, () => {
    expect(FormatAmount(FORMAT.NEGATIVE_ENTRY)).toBe(FORMAT.NEGATIVE_OUTPUT);
  });
});
