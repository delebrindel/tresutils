export const DashIfUndefinedOrZero = (value: number | null, characterToUse: string = '-') => {
  return value && value !== 0 ? value : characterToUse;
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

const FormatNumberWithCommas = (x: string) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
