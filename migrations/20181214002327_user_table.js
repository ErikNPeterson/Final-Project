
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function (table) {
    table.increments('id').primary().unsigned();
    table.string('username').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('location');
    table.string('color');
    table.string('avatar');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user')
};
