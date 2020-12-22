import { div, multiply, rest, sum } from '../src/math.js';

describe('mathematics', () => {
  test('Test sum', () => {
    expect(sum(1, 1)).toBe(2);
  });
  test('rest', () => {
    expect(rest(5, 2)).toBe(3);
  });
  test('multiply', () => {
    expect(multiply(2, 2)).toBe(4);
  });
  test('div', () => {
    expect(div(4, 4)).toBe(1);
  });
});
