
module.exports = {
  getSteps: getSteps,
  getRecipe: getRecipe,
  incrementStep: incrementStep
}

function getSteps (connection) {
  return connection('steps').select()
}

function getRecipe (id, connection) {
  return connection('recipe').where('id', id)
}

function incrementStep (id, connection) {
  return connection ('recipe').where('id', id).first()
    .then(function (recipe){
      var updateStepId = recipe.steps_id + 1
      return connection ('recipe').where('id', id).update({steps_id: updateStepId})
    })

}
