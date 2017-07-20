var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getSteps(req.app.get('connection'))
    .then(function () {
      res.render('index', { steps: steps })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/recipe', function (req, res) {
  db.getRecipe(req.app.get('connection'))
    .then(function(recipe) {
      res.render('recipe', recipe)

    })
})

module.exports = router
