import { isFalse, isNull, isTrue, isUndefined } from '../src/true';

describe('Null', () => {
  test('Is null?', () => {
    expect(isNull()).toBeNull(); //Or toBe(null)
  });
});

describe('True', () => {
  test('Is true?', () => {
    expect(isTrue()).toBeTruthy(); //Or toBe(null)
  });
});

describe('False', () => {
  test('Is false?', () => {
    expect(isFalse()).toBeFalsy(); //Or toBe(null)
  });
});

describe('Undefined', () => {
  test('Is undefined?', () => {
    expect(isUndefined()).toBeUndefined(); //Or toBe(null)
  });
});

describe('No true', () => {
  test('Is not true?', () => {
    expect(isFalse()).not.toBeTruthy(); //Or toBe(null)
  });
});
