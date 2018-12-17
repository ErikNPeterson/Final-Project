
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_events', function (table) {
    table.integer('user_id').unsigned().notNullable();
    table.integer('event_id').unsigned().notNullable();
    table.primary(['user_id', 'event_id']);
    table.boolean('bookmark');
    table.boolean('like');

    table.foreign('user_id').references('user_id').inTable('users');
    table.foreign('event_id').references('event_id').inTable('events');



  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_events')

};
