exports.up = function(knex) {
  return knex.schema.createTable('political', (table) => {
    table.string('political_id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('hashPassword').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('political');
};
