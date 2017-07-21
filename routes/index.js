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
  db.incrementStep(req.body.recipe_id, req.app.get('connection'))
    .then(function (){
      console.log(req.body.recipe_id);
      res.redirect('/recipe')
  })

})

router.get('/recipe', function (req, res) {
  res.render('recipe', {steps: [
    {step_name: "Prep", items: [
      {item_name: "meat patty"},
      {item_name: "veges"},
      {item_name: "patty meat"},
      {item_name: "sauce"}
    ]},
    {step_name: "Cook", items: [
    {item_name: "Chicken"}, {item_name: "bacon"}
    ]},
    {step_name: "Plate", items: [{item_name: "Burger Buns"}
    ]}
    ],})
})

module.exports = router
