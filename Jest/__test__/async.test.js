import { getDataFromApi } from '../src/promise';

describe('testing for async and await', () => {
  test('api request', async () => {
    const API = 'https://rickandmortyapi.com/api/character/';
    const APIRick = 'https://rickandmortyapi.com/api/character/1';
    await getDataFromApi(API).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
    });

    await getDataFromApi(APIRick).then((data) => {
      expect(data.name).toEqual('Rick Sanchez');
    });
  });

  test('doing api request with error', async () => {
    const apiError = 'http://httpstat.us/404';
    const API = getDataFromApi(apiError);
    await expect(API).rejects.toEqual(
      new Error('Request failed with status code 404')
    );
  });

  test('Resolve a hi', async () => {
    await expect(Promise.resolve('Hi')).resolves.toBe('Hi');
    await expect(Promise.reject('Error')).rejects.toBe('Error');
  });
});
