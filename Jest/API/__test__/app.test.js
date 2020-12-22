const req = require('supertest');
const app = require('../app');

describe('Test Express', () => {
  test('should response get method', (done) => {
    req(app)
      .get('/')
      .then((res) => {
        expect(res.status).toBe(202);
        done();
      });
  });
});
