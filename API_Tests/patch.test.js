const request = require('supertest');

let token1;
let token2;
let oldName;
let oldEmail;
let oldPassword;

beforeAll(async () => {
  const res = await request('http://localhost:3000')
    .post('/api/v1/users')
    .send({
      name: 'Patch Test1',
      email: 'patch1@test.com',
      password: 'test',
    });

  await request('http://localhost:3000')
    .post('/api/v1/auth')
    .send({
      email: 'patch1@test.com',
      password: 'test',
    })
    .then((res) => {
      token1 = res.body.token;
    });

  await request('http://localhost:3000').post('/api/v1/users').send({
    name: 'Patch Test2',
    email: 'patch2@test.com',
    password: 'test',
  });

  await request('http://localhost:3000')
    .post('/api/v1/auth')
    .send({
      email: 'patch2@test.com',
      password: 'test',
    })
    .then((res) => {
      token2 = res.body.token;
    });

  await request('http://localhost:3000')
    .get('/api/v1/users')
    .set('authorization', token1)
    .then((res) => {
      oldName = res.body.name;
      oldEmail = res.body.email;
      oldPassword = res.body.password;
    });
});

afterAll(async () => {
  await request('http://localhost:3000').delete('/api/v1/all-users').send({
    key_admin: 'keyadmin123',
  });
});

describe('Patch User', () => {
  it('Should patch a user successfully with valid credentials', async () => {
    const res = await request('http://localhost:3000')
      .patch('/api/v1/users')
      .set('authorization', token1)
      .send({
        name: 'New Patch Test',
        email: 'new_patch@test.com',
        password: 'test',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).not.toEqual(oldName);
    expect(res.body.email).not.toEqual(oldEmail);
    expect(res.body.password).not.toEqual(oldPassword);
    expect(res.body.message).toEqual('User updated with success!');
  });

  it('Should not patch a user with invalid credentials', async () => {
    const res = await request('http://localhost:3000')
      .patch('/api/v1/users')
      .set('authorization', token2)
      .send({
        name: '',
        email: '',
        password: '',
      });
    expect(res.statusCode).toEqual(403);
  });

  it('Should not patch a user without a token', async () => {
    const res = await request('http://localhost:3000')
      .patch('/api/v1/users')
      .set('authorization', '')
      .send({
        name: 'New Patch Test',
        email: 'new_test@test.com',
        password: 'test',
      });
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('jwt must be provided');
  });
});
