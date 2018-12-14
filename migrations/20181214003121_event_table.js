
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', function (table) {
    table.increments('id').primary().unsigned();
    table.string('name');
    table.string('description');
    table.string('url');
    table.date('start');
    table.date('end');
    table.string('status');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event')
};
