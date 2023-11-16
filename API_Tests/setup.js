import 'regenerator-runtime/runtime';
const request = require('supertest');
import app from 'mock-user-auth/app';

afterAll(async () => {
  await request(app).delete('/api/v1/all-users').send({
    key_admin: 'keyadmin123',
  });
});
