
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'Pattie', ingredients: 'Onion, egg, bread crumbs', time: '15mins', steps_id: 2},
        {id: 2, name: 'Cook pattie', ingredients: 'Pattie', time: '8mins', steps_id: 3},
        {id: 3, name: 'Vege', ingredients: 'Tomatoes, pickles, lettuce, cheese', time: '7mins', steps_id: 2},
        {id: 4, name: 'Sauce', ingredients: 'Mayonnaise, tomato sauce', time: '1min', steps_id: 2},
        {id: 5, name: 'Buns', ingredients: 'Burger buns', time: '1min', steps_id: 3},
        {id: 6, name: 'Assemble', ingredients: 'The burger', time: '5', steps_id: 4}
      ]);
    });
};
