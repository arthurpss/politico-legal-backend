const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const {titulo, conteudo} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('posts').insert({
      id,
      titulo,
      conteudo,
    });

    return response.json({id});
  },
};
