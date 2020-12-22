import { getDataFromApi } from '../src/promise';

describe('testing promises', () => {
  test('doing api request', (done) => {
    const API = 'https://rickandmortyapi.com/api/character/';
    getDataFromApi(API).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});
