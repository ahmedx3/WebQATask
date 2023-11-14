const request = require('supertest');

describe('Delete User', () => {
  let token;

  beforeAll(async () => {
    await request('http://localhost:3000').post('/api/v1/users').send({
      name: 'Delete Test1',
      email: 'delete1@test.com',
      password: 'test',
    });

    await request('http://localhost:3000')
      .post('/api/v1/auth')
      .send({
        email: 'delete1@test.com',
        password: 'test',
      })
      .then((res) => {
        token = res.body.token;
      });
  });

  it('Should delete a user successfully with valid credentials', async () => {
    const res = await request('http://localhost:3000')
      .delete('/api/v1/users')
      .set('authorization', token);
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('User deleted with success!');
  });

  it('Should not delete a user without a token', async () => {
    const res = await request('http://localhost:3000')
      .delete('/api/v1/users')
      .set('authorization', '');
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('Unauthorized to delete');
  });
});
