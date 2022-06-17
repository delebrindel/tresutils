import { DashIfUndefinedOrZero, FormatAmount, FormatCurrency, PluralizeIfNeeded } from "../src/Formats";
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
  it(`Pluralize If Needed - Should return '${PLURALIZE.SINGULAR}' if no plural is passed and 2 is passed.`, () => {
    expect(PluralizeIfNeeded(2, PLURALIZE.SINGULAR)).toBe(PLURALIZE.SINGULAR);
  });
  // Dash If Undefined Or Zero
  it(`Dash If Undefined Or Zero - Should Return ${FORMAT.POSITIVE_ENTRY} if ${FORMAT.POSITIVE_ENTRY} is passed`, ()=>{
    expect(DashIfUndefinedOrZero(FORMAT.POSITIVE_ENTRY)).toBe(FORMAT.POSITIVE_ENTRY);
  });
  it(`Dash If Undefined Or Zero - Should Return ${FORMAT.INVALID_OUTPUT} if ${FORMAT.ZERO} is passed`, ()=>{
    expect(DashIfUndefinedOrZero(FORMAT.ZERO)).toBe(FORMAT.INVALID_OUTPUT);
  });
  it(`Dash If Undefined Or Zero - Should Return ${FORMAT.INVALID_OUTPUT} if null is passed`, ()=>{
    expect(DashIfUndefinedOrZero(null)).toBe(FORMAT.INVALID_OUTPUT);
  });
  it(`Dash If Undefined Or Zero - Should Return ${FORMAT.INVALID_STRING} if ${FORMAT.ZERO} is passed`, ()=>{
    expect(DashIfUndefinedOrZero(FORMAT.ZERO, FORMAT.INVALID_STRING)).toBe(FORMAT.INVALID_STRING);
  });
  // Format Amount
  it(`Format Amount - Should return '${FORMAT.POSITIVE_OUTPUT}'  if ${FORMAT.POSITIVE_ENTRY} is passed.`, () => {
    expect(FormatAmount(FORMAT.POSITIVE_ENTRY)).toBe(FORMAT.POSITIVE_OUTPUT);
  });
  it(`Format Amount - Should return '${FORMAT.NEGATIVE_OUTPUT}'  if ${FORMAT.NEGATIVE_ENTRY} is passed.`, () => {
    expect(FormatAmount(FORMAT.NEGATIVE_ENTRY)).toBe(FORMAT.NEGATIVE_OUTPUT);
  });
  it(`Format Amount - Should return '${FORMAT.ZERO}' if ${FORMAT.ZERO} is passed.`, ()=>{
    expect(FormatAmount(FORMAT.ZERO)).toBe(FORMAT.ZERO.toString());
  });
  it(`Format Amount - Should return '${FORMAT.INVALID_OUTPUT}' if null is passed.`, ()=>{
    expect(FormatAmount(null)).toBe(FORMAT.INVALID_OUTPUT);
  })
  // Format Currency
  it(`Format Currency - Should return '${FORMAT.POSITIVE_OUTPUT_CURRENCY}'  if ${FORMAT.POSITIVE_ENTRY} is passed.`, () => {
    expect(FormatCurrency(FORMAT.CURRENCY_SYMBOL, FORMAT.POSITIVE_ENTRY)).toBe(FORMAT.POSITIVE_OUTPUT_CURRENCY);
  });
  it(`Format Currency - Should return '${FORMAT.NEGATIVE_OUTPUT_CURRENCY}'  if ${FORMAT.NEGATIVE_ENTRY} is passed.`, () => {
    expect(FormatCurrency(FORMAT.CURRENCY_SYMBOL, FORMAT.NEGATIVE_ENTRY)).toBe(FORMAT.NEGATIVE_OUTPUT_CURRENCY);
  });
  it(`Format Currency - Should return '${FORMAT.INVALID_OUTPUT}'  if null is passed.`, () => {
    expect(FormatCurrency(FORMAT.CURRENCY_SYMBOL, null)).toBe(FORMAT.INVALID_OUTPUT);
  });
  it(`Format Currency - Should return '${FORMAT.INVALID_STRING}'  if null is passed and InvalidString is assigned.`, () => {
    expect(FormatCurrency(FORMAT.CURRENCY_SYMBOL, null, FORMAT.INVALID_STRING)).toBe(FORMAT.INVALID_STRING);
  });
});
