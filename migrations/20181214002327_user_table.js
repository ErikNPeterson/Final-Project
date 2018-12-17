
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id').primary().unsigned();
    table.string('username').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('location');
    table.string('color');
    table.string('avatar');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};