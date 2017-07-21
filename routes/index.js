var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res) {
  res.redirect('/recipe')
})


router.post('/recipe/move', function(req, res) {
  db.incrementStep(req.body.recipe_id, req.app.get('connection'))
    .then(function() {
      console.log(req.body.recipe_id);
      res.redirect('/recipe')
    })
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/recipe', function(req, res) {
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
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
