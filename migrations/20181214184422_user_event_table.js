
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_event', function (table) {
    table.integer('user_id').unsigned().notNullable();
    table.integer('event_id').unsigned().notnullable();
    table.primary(['user_id', 'event_id'])

    table.foreign('user_id').references('user_id').inTable('user');
    table.foreign('event_id').references('event_id').inTable('event');



  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_event')

};
