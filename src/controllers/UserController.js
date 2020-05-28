const crypto = require('crypto');
const bcrypt = require('bcrypt');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const {nome, usuario, senha} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
    const senhaHash = await bcrypt.hash(senha, 10);
    await connection('usuario').insert({
      id,
      nome,
      usuario,
      senhaHash,
    });

    return response.json({id, senha, senhaHash});
  },

  async get(request, response) {
    const usuarios = await connection('usuario').select('*').from('usuario');
    return response.json(usuarios);
  },
};
