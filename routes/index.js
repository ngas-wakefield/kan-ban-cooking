var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getSteps(req.app.get('connection'))
    .then(function () {
      res.render('index', {
        steps: steps
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/recipe', function (req, res) {
  var data = {}
  var connection = req.app.get('connection')
  db.getSteps(connection)
    .then(function (steps) {
      data.steps = steps

      db.getRecipes(connection)
        .then(function (recipes) {
          data = recipes.reduce(function (data, recipe) {
            var step = data.steps.find(function (step) {
              return step.name == recipe.step_name
            })

            if (!step.recipes) step.recipes = []
            step.recipes.push(recipe)
            return data
          }, data)

          res.render('recipe', data)
        })
    })
})

router.post('/recipe/move', function (req, res) {
  db.getRecipe(req.app.get('connection'), req.body.id)
    .then(function (item) {
      item.steps_id
    })

})

module.exports = router