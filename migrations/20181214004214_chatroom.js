exports.up = function(knex, Promise) {
  return knex.schema.createTable('chatroom', function (table) {
    table.increments('id').primary().unsigned();


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chatroom')
};
