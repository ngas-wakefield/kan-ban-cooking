
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.string('ingredients')
    table.string('time')
    table.integer('steps_id')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe')

};
