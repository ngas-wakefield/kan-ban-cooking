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
  db.getRecipes(connection)
    .then(function (recipes) {
      var data = recipes.reduce(function (data, recipe) {
        var step = data.steps.find(function (step) {
          return step.step_name == recipe.step_name
        })

        if (!step) {
          step = {
            step_name: recipe.step_name,
            recipes: []
          }
          data.steps.push(step)
        }

        step.recipes.push(recipe)
        return data
      }, {
        steps: []
      })

      res.render('recipe', data)
    })
})

module.exports = router