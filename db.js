
module.exports = {
  getSteps: getSteps,
  getRecipe: getRecipe,
  incrementStep: incrementStep
}

function getSteps (connection) {
  return connection('steps').select()
}

function getRecipe (connection) {
  return connection('recipe').where('id', id)
}

function incrementStep () {
    return connection ('recipe').where('id', id)
    .then(function (recipe){
    var updateStepId = recipe.steps_id+1
    connection ('recipe').where('id', id).update({steps_id: updateStepId})
    .then()
  })

}

function {
  
}
