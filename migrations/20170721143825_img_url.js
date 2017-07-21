
exports.up = function(knex, Promise) {
  return knex.schema.table('recipe', function(table) {
    table.string('img_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe')
};
