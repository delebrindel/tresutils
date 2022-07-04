export const DashIfUndefinedOrZero = (value: number | null, invalidCharacter: string = '-') => {
  return value && value !== 0 ? value : invalidCharacter;
};

export const PluralizeIfNeeded = (value: number, singular: string, plural?: string ) => {
  return value === 1 ? singular : plural ?? singular;
};

export const FormatAmount = (amount: number | null) => {
  if (amount || amount === 0) {
    return FormatNumberWithCommas(amount.toString());
  }
  return '-';
};

export const FormatCurrency = (currencySymbol: string, amount: number | string | null, invalidCharacter: string = '-') => {
  if (amount !== null) {
    const number = +amount || 0;
    return amount >= 0
      ? `${currencySymbol}${FormatNumberWithCommas(number.toFixed(2))}`
      : `- ${currencySymbol}${FormatNumberWithCommas(Math.abs(number).toFixed(2))}`;
  }
  return invalidCharacter;
};

const FormatNumberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
