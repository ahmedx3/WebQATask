import 'regenerator-runtime/runtime';
const request = require('supertest');
import app from 'mock-user-auth/app';

describe('Authentication', () => {
  let token;

  beforeAll(async () => {
    const res = await request(app).post('/api/v1/users').send({
      name: 'Auth Test',
      email: 'auth@test.com',
      password: 'test',
    });
    token = res.body.token;
  });

  afterAll(async () => {
    await request(app).delete('/api/v1/all-users').send({
      key_admin: 'keyadmin123',
    });
  });

  it('Should authenticate with valid credentials', async () => {
    const res = await request(app).post('/api/v1/auth').send({
      email: 'auth@test.com',
      password: 'test',
    });
    expect(res.statusCode).toEqual(200);
  });

  it('Should not authenticate with invalid credentials', async () => {
    const res = await request(app).post('/api/v1/auth').send({
      email: '',
      password: '',
    });
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('Incorrect email or password');
  });
});
