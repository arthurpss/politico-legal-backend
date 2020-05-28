exports.up = function(knex) {
  return knex.schema.createTable('politico', (table) => {
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('post_id').references('id').inTable('posts');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('politico');
};
