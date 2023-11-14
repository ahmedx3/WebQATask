const request = require('supertest');

describe('Delete All Users', () => {
  it('Should not delete all users with invalid key admin', async () => {
    const res = await request('http://localhost:3000')
      .delete('/api/v1/all-users')
      .send({
        key_admin: '',
      });
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('Unauthorized access');
  });
});
