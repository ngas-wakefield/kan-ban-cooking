
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'Pattie', ingredients: 'Onion, egg, bread crumbs', time: '15mins', steps_id: 1, img_url: 'http://www.jimmysbutchery.com/wp-content/uploads/2016/09/Raw-hamburger-meat-with-pepper-garlic-olive-oil-and-salt-000058277356_Large-300x300.jpg'},
        {id: 2, name: 'Cook pattie', ingredients: 'Pattie', time: '8mins', steps_id: 1, img_url: 'https://images-na.ssl-images-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A5KARZN12EBBG/B01IBRX66I/IpyWL7xSeSZ._UX300_TTW_.jpg '},

        {id: 3, name: 'Vege', ingredients: 'Tomatoes, pickles, lettuce, cheese', time: '7mins', steps_id: 1, img_url: 'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/a/c/0/6/b8dc-41cc-4973-8c37-03a4dcc8fe1c.jpg'},
        {id: 4, name: 'Sauce', ingredients: 'Mayonnaise, tomato sauce', time: '1min', steps_id: 1, img_url: 'https://ilovenz.me/wp-content/uploads/2016/11/watties-tomato-sauce-300x300.jpg'},
        {id: 5, name: 'Buns', ingredients: 'Burger buns', time: '1min', steps_id: 1, img_url: 'http://www.completelydelicious.com/wp-content/uploads/2016/11/9178973602_f0bbbb6d84_o-1-300x300.jpg'},
        {id: 6, name: 'Assemble', ingredients: 'The burger', time: '5', steps_id: 4, img_url: 'https://www.napoleongrills.com/Portals/0/images/Blog/1_590lb-burger-weight-300x300.jpg'}
      ]);
    });
};
