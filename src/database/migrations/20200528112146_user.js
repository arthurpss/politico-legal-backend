
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('hashPassword').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
