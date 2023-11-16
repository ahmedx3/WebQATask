import 'regenerator-runtime/runtime';
const request = require('supertest');
import app from 'mock-user-auth/app';

describe('Get User', () => {
  let token;

  beforeAll(async () => {
    await request(app).post('/api/v1/users').send({
      name: 'Get Test',
      email: 'get@test.com',
      password: 'test',
    });

    await request(app)
      .post('/api/v1/auth')
      .send({
        email: 'get@test.com',
        password: 'test',
      })
      .then((res) => {
        token = res.body.token;
      });
  });

  it('Should get a user successfully with valid credentials', async () => {
    const res = await request(app)
      .get('/api/v1/users')
      .set('authorization', token);
    expect(res.statusCode).toEqual(200);
  });

  it('Should not get a user without a token', async () => {
    const res = await request(app)
      .get('/api/v1/users')
      .set('authorization', '');
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('Unauthorized');
  });

  it('Should not get a user with an invalid token', async () => {
    const res = await request(app)
      .get('/api/v1/users')
      .set('authorization', 'invalidtoken');
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('Unauthorized');
  });
});
