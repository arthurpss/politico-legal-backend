exports.up = function(knex) {
  return knex.schema.createTable('post', function(table) {
    table.string('id').primary();
    table.string('title').notNullable();
    table.text('content').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('post');
};
