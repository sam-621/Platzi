import { numbers } from '../src/numbers';

describe('compare numbers', () => {
  test('mayor que', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  test('more than or equal', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test('less than', () => {
    expect(numbers(2, 2)).toBeLessThan(5);
  });
  test('less than or equal', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);
  });

  //float or double
  test('float or double', () => {
    expect(numbers(1.4, 1.4)).toBeCloseTo(2.8);
  });
});
