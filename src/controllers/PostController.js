const connection = require('../database/connection');

module.exports = {
  async createPost(request, response) {
    const {title, content, fixado, data_criacao, author} = request.body;

    await connection('post').insert({
      title, content, fixado, data_criacao, author
    });

    return response.json({title});
  },

  async getPosts(request, response) {
    const posts = await connection('post').select('*').from('post');
    return response.json(posts);
  }
};
