var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req, res) {
  res.redirect('/recipe')
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
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
  db.getRecipes(connection)
    .then(function(recipes) {
      var data = recipes.reduce(function(data, recipe) {
        var step = data.steps.find(function(step) {
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
    .catch(function(err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
