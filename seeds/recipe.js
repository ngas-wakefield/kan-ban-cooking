
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'Pattie', ingredients: 'Onion, egg, bread crumbs', time: '15mins', steps_id: 2, img_url: 'http://www.jimmysbutchery.com/wp-content/uploads/2016/09/Raw-hamburger-meat-with-pepper-garlic-olive-oil-and-salt-000058277356_Large-300x300.jpg'},
        {id: 2, name: 'Cook pattie', ingredients: 'Pattie', time: '8mins', steps_id: 3, img_url: 'https://images-na.ssl-images-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A5KARZN12EBBG/B01IBRX66I/IpyWL7xSeSZ._UX300_TTW_.jpg '},
        {id: 3, name: 'Vege', ingredients: 'Tomatoes, pickles, lettuce, cheese', time: '7mins', steps_id: 2, img_url: ''},
        {id: 4, name: 'Sauce', ingredients: 'Mayonnaise, tomato sauce', time: '1min', steps_id: 2, img_url:},
        {id: 5, name: 'Buns', ingredients: 'Burger buns', time: '1min', steps_id: 3, img_url:},
        {id: 6, name: 'Assemble', ingredients: 'The burger', time: '5', steps_id: 4, img_url:}
      ]);
    });
};
