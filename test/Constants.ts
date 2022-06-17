export enum PLURALIZE {
  SINGULAR = 'Cheese',
  PLURAL = 'Cheeses',
}

export enum FORMAT {
  ZERO = 0,
  NEGATIVE_ENTRY = -12345,
  NEGATIVE_OUTPUT = '-12,345',
  NEGATIVE_OUTPUT_CURRENCY = '- £12,345.00',
  POSITIVE_ENTRY = 7890,
  POSITIVE_OUTPUT = '7,890',
  POSITIVE_OUTPUT_CURRENCY = '£7,890.00',
  INVALID_OUTPUT = '-',
  INVALID_STRING = 'NA',
  CURRENCY_SYMBOL = '£',
}

export enum INPUTS {
  VALID_EMAIL = 'test@foo.com',
  INVALID_EMAIL = 'juan@f.c',
}

export const JSON_OBJECT = {
  VALID_STRING: '{"Cheese": "Gruyere", "Age": 5, "CanEat": true}',
  VALID_OBJECT: {
    Cheese: 'Gruyere',
    Age: 5,
    CanEat: true
  }
}