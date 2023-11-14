const request = require('supertest');

beforeAll(async () => {
  await request('http://localhost:3000').post('/api/v1/users').send({
    name: 'Existing User',
    email: 'existinguser@test.com',
    password: 'test',
  });
});

afterAll(async () => {
  await request('http://localhost:3000').delete('/api/v1/all-users').send({
    key_admin: 'keyadmin123',
  });
});

describe('Create User', () => {
  it('Should create a user successfully with valid credentials', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/users')
      .send({
        name: 'User Test1',
        email: 'test@test.com',
        password: 'test',
      });
    expect(res.statusCode).toEqual(200);
  });

  it('Should not create a user with an existing email', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/users')
      .send({
        name: 'Existing User',
        email: 'existinguser@test.com',
        password: 'test',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('User already registered');
  });

  it('Should not create a user without an email', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/users')
      .send({
        name: 'User Test2',
        email: '',
        password: 'test',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('Email is required');
  });

  it('Should not create a user without a password', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/users')
      .send({
        name: 'User Test3',
        email: 'test3@test.com',
        password: '',
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body.message).toEqual('Password is required');
  });

  it('Should return token in response', async () => {
    const res = await request('http://localhost:3000')
      .post('/api/v1/users')
      .send({
        name: 'User Test4',
        email: 'test4@test.com',
        password: 'test',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });
});
