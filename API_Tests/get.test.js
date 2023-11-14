const request = require('supertest');

let token;

beforeAll(async () => {
  const res = await request('http://localhost:3000')
    .post('/api/v1/users')
    .send({
      name: 'Get Test',
      email: 'get@test.com',
      password: 'test',
    });

  await request('http://localhost:3000')
    .post('/api/v1/auth')
    .send({
      email: 'get@test.com',
      password: 'test',
    })
    .then((res) => {
      token = res.body.token;
    });
});

afterAll(async () => {
  await request('http://localhost:3000').delete('/api/v1/all-users').send({
    key_admin: 'keyadmin123',
  });
});

describe('Get User', () => {
  it('Should get a user successfully with valid credentials', async () => {
    const res = await request('http://localhost:3000')
      .get('/api/v1/users')
      .set('authorization', token);
    expect(res.statusCode).toEqual(200);
  });

  it('Should not get a user without a token', async () => {
    const res = await request('http://localhost:3000')
      .get('/api/v1/users')
      .set('authorization', '');
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('Unauthorized');
  });

  it('Should not get a user with an invalid token', async () => {
    const res = await request('http://localhost:3000')
      .get('/api/v1/users')
      .set('authorization', 'invalidtoken');
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('Unauthorized');
  });
});
