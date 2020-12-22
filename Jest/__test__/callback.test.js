import { callbackHell } from '../src/callbacks';

describe('Testing callback', () => {
  test('callback', (done) => {
    function otherCallback(data) {
      expect(data).toBe('hola javascripters');
      done();
    }
    callbackHell(otherCallback);
  });
});
