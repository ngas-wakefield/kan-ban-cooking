
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

      // Inserts seed entries
      return knex('recipe').insert([
        {img_url: 'www.google.com'}
      ]);
    
};
