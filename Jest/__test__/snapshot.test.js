import { getCharacter } from '../src/snapshot';
import rick from '../src/rick.json';

describe('Snapshots', () => {
  test('Snapshot test', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
  test('always fail', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };
    expect(user).toMatchSnapshot();
  });

  test('have an exception', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: 'Rogelio',
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});
