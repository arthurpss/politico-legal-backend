exports.up = function(knex) {
  return knex.schema.createTable('posts', function(table) {
    table.string('id').primary();
    table.string('titulo').notNullable();
    table.string('conteudo').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('posts');
};
