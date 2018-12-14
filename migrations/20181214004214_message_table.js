exports.up = function(knex, Promise) {
  return knex.schema.createTable('message', function (table) {
    table.increments('message_id').primary().unsigned();
    table.integer('user_id').unsigned().notNullable();
    table.string('content');
    table.boolean('like');
    table.boolean('dislike');
    table.foreign('user_id').references('user_id').inTable('user');


  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('message')
};
