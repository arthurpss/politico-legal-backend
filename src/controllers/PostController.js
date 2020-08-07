const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async createPost(request, response) {
    const {title, content} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('post').insert({
      id,
      title,
      content,
    });

    return response.json({id});
  },
};
