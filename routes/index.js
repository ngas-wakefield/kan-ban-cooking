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

router.post('/recipe/move', function (req, res) {
db.getRecipe(req.app.get('connection'), req.body.id)
    .then(function (item){
     item.steps_id
})

})

router.get('/recipe', function (req, res) {
  // db.getRecipe(req.app.get('connection'))
  //   .then(function(recipe) {
  //     res.render('recipe', recipe)

  //   })

  res.render('recipe', {steps: [
    {step_name: "Prep", items: [{item_name: "meat patty"}]},
    {step_name: "Cook", items: [{item_name: "meat patty"}, {item_name: "meat patty"}]},
    {step_name: "Plate", items: [{item_name: "meat patty"}]}
  ],})
})

module.exports = router
