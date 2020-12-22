describe('check Strings', () => {
  const text = 'Un bonito text';

  test('Must contain the next text', () => {
    expect(text).toMatch(/bonito/); //si en el string está bonito
  });

  test('Must not contain the next text', () => {
    expect(text).not.toMatch(/es/);
  });

  test('Length of string', () => {
    expect(text).toHaveLength(14);
  });
});
