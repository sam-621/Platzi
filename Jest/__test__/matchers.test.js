describe('common comparatives', () => {
  const user = {
    name: 'Rogelio',
    lastName: 'Moreno Corrales',
  };
  const user2 = {
    name: 'Rogelio',
    lastName: 'Moreno Corrales',
  };

  test('elements equality', () => {
    expect(user).toEqual(user2);
  });
  // test('No equal', () => {
  //   expect(user).not.toEqual(user2);
  // });
});
