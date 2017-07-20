
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, name: 'Raw'},
        {id: 2, name: 'Preparation'},
        {id: 3, name: 'Cook'},
        {id: 4, name: 'Plate'}
      ]);
    });
};
