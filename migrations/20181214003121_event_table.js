
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function (table) {
    table.increments('event_id').primary().unsigned();
    table.string('name');
    table.string('external_event_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
