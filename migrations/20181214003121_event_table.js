
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function (table) {
    table.increments('event_id').primary().unsigned();
    table.string('name');
    table.string('description');
    table.string('url');
    table.date('start');
    table.date('end');
    table.string('status');
    table.string('external_event_id');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
