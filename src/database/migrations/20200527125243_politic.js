exports.up = function(knex) {
  return knex.schema.createTable('politic', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('hashPassword').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('politic');
};
