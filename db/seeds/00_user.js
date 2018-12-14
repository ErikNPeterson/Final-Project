
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Eric', email: 'eric@eric.com', password: 'password'},
        {username: 'Ryan', email: 'ryan@ryan.com', password: 'password'},
        {username: 'Azusa', email: 'azusa@azusa.com', password: 'password'},
        {username: 'Erik', email: 'erik@erik.com', password: 'password'}
      ]);
    });
};
