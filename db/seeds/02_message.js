exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      return Promise.all([
        knex('users').pluck('user_id'),
        knex('events').pluck('event_id')
      ]);
    })
    .then(function(ids) {
      let [userIds, eventIds] = ids;
      // Inserts seed entries
      return knex('messages').insert([
        {event_id: eventIds[0], user_id: userIds[0], content: "I can't wait! Anyone else going??"},
        {event_id: eventIds[0], user_id: userIds[1], content: "I'll DEFINITELY be there!"},
        {event_id: eventIds[0], user_id: userIds[2], content: "This looks super funnnnnn!!"},
        {event_id: eventIds[0], user_id: userIds[3], content: "See you guys there!"},
        {event_id: eventIds[0], user_id: userIds[2], content: "WAHOOOOOOO!!"}
      ]);
  });
};
