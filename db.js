
module.exports = {
  getSteps: getSteps,
  getRecipe: getRecipe,
  getRecipeInAStep:getRecipeInAStep,
  getRecipes: getRecipes,
  incrementStep: incrementStep
}

function getSteps (connection) {
  return connection('steps').select()
}

function getRecipe(connection, id) {
  return connection('recipe').where('id', id)
}

function getRecipeInAStep (connection, steps_id) {
  return connection('recipe').where('steps_id', steps_id)
}

function getRecipes(connection) {
  return connection('recipe')
  .join('steps', 'recipe.steps_id', '=', 'steps.id')
  .select('recipe.*', 'recipe.name as recipe_name', 'steps.name as step_name')
}

function incrementStep () {
    return connection ('recipe').where('id', id)
    .then(function (recipe){
    var updateStepId = recipe.steps_id+1
    connection ('recipe').where('id', id).update({steps_id: updateStepId})
    .then()
  })

}
