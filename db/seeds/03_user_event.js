exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_events').del()
    .then(function () {
      return Promise.all([
        knex('users').pluck('user_id'),
        knex('events').pluck('event_id')
      ]);
    })
    .then(function(ids) {
      let [userIds, eventIds] = ids;
      // Inserts seed entries
      return knex('users_events').insert([
        {event_id: eventIds[0], user_id: userIds[0], like: true, bookmark: true},
        {event_id: eventIds[0], user_id: userIds[1], like: false, bookmark: true},
        {event_id: eventIds[0], user_id: userIds[2], like: true, bookmark: false},
        {event_id: eventIds[0], user_id: userIds[3], like: true, bookmark: true},
      ]);
  });
};
