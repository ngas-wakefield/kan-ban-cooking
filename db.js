
module.exports = {
  getSteps: getSteps,
  getRecipe: getRecipe
}

function getSteps (connection) {
  return connection('steps').select()
}

function getRecipe (id, connection) {
  return connection('recipe').where('id', id)
}
