//after each test
afterEach(() => console.log('After each test'));
afterAll(() => console.log('After all tests'));

//Before each test
beforeEach(() => console.log('before each test'));
beforeAll(() => console.log('before all tests'));

describe('Preparing before start', () => {
  test('is true?', () => {
    expect(true).toBe(true);
  });
});
