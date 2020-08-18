const crypto = require('crypto');
const bcrypt = require('bcrypt');
const connection = require('../database/connection');

module.exports = {
  async createUser(request, response) {
    const {name, email, password} = request.body;
    const user_id = crypto.randomBytes(4).toString('HEX');
    const hashPassword = await bcrypt.hash(password, 10);
    await connection('user').insert({
      user_id,
      name,
      email,
      hashPassword,
    });
    return response.json({user_id});
  },

  async getUsers(request, response) {
    const users = await connection('user').select('*').from('user');
    return response.json(users);
  },

  async findByEmail(email) {
    const user = await connection('user')
        .select('*')
        .from('user')
        .where('email', email).first();
    return user;
  },

  async findById(id) {
    const user = await connection('user')
        .select('*')
        .from('user')
        .where('user_id', id);
    return user;
  }
};
