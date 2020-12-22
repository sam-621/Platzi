import { arraysColors, arraysFruits } from '../src/arrays';

describe('if an element exists', () => {
  test('content a banana?', () => {
    expect(arraysFruits()).toContain('banana');
  });
  test('Not content a platano?', () => {
    expect(arraysFruits()).not.toContain('platano');
  });
  test('How many elements array have', () => {
    expect(arraysFruits()).toHaveLength(4);
  });
  test('if a color exists', () => {
    expect(arraysColors()).toContain('blue');
  });
});
