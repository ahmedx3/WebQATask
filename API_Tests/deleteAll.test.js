import 'regenerator-runtime/runtime';
const request = require('supertest');
import app from 'mock-user-auth/app';

describe('Delete All Users', () => {
  it('Should not delete all users with invalid key admin', async () => {
    const res = await request(app).delete('/api/v1/all-users').send({
      key_admin: '',
    });
    expect(res.statusCode).toEqual(403);
    expect(res.body.message).toEqual('Unauthorized access');
  });
});
