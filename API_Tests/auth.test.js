const request = require('supertest');

let token;

beforeAll(async () => {
  const res = await request('http://localhost:3000')
    .post('/api/v1/users')
    .send({
      name: 'Auth Test',
      email: 'auth@test.com',
      password: 'test',
    });
  token = res.body.token;
  console.log(token);
});

afterAll(async () => {
  await request('http://localhost:3000').delete('/api/v1/all-users').send({
    key_admin: 'keyadmin123',
  });
});

describe('Authentication', () => {
  it('Should authenticate with valid credentials', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/auth')
      .send({
        email: 'auth@test.com',
        password: 'test',
      });
    expect(res.statusCode).toEqual(200);
  });

  it('Should have a token in the response', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/auth')
      .send({
        email: 'auth@test.com',
        password: 'test',
      });
    expect(res.body).toHaveProperty('token');
  });

  it('Should not authenticate with invalid credentials', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/auth')
      .send({
        email: '',
        password: '',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('Incorrect email or password');
  });
});
