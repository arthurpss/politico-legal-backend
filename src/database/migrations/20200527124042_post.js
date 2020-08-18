exports.up = function(knex) {
  return knex.schema.createTable('post', function(table) {
    table.increments(); //Create an integer, not null, pk, autoincrement ID
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.integer('fixado').notNullable();
    table.datetime('data_criacao').notNullable();
    table.string('author').notNullable();
    table.foreign('author').references('political');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('post');
};
