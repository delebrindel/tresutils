export type BaseKeyboardEvent = {
  key: string;
  preventDefault: ()=> void;
}

export const ValidateEmail = (email: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const PreventNonDigits = <EventType extends BaseKeyboardEvent>(event: EventType): void => {
  const unallowedSymbols: string[] = ['.', 'e', '-', '+'];
  unallowedSymbols.includes(event.key) && event.preventDefault();
};

export const PreventAllExceptDash = <EventType extends BaseKeyboardEvent>(event: EventType): void => {
  const unallowedSymbols: string[] = ['.', 'e', '+'];
  unallowedSymbols.includes(event.key) && event.preventDefault();
};


export const PreventSignsAllowDecimals = <EventType extends BaseKeyboardEvent>(event: EventType): void => {
  const unallowedSymbols: string[] = ['-', 'e', '+'];
  unallowedSymbols.includes(event.key) && event.preventDefault();
};

