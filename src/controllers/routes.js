// required packages
const express = require('express');
// alternative to app.get where (app) is passed in from the server.js file
const router = express.Router();
const models = require('./../models');

router.get("/", function(req, res) {
  //Burger must be capitalized, because it is calling the variable inside of the burger model
  models.Burger.findOne({ where: {burgerName: 'secondBurger' }}).then(found => {
  console.log(found.burgerName);
  })

  res.render("index");
});

router.post('/create', function(req, res) {
    res.redirect("/");
});

router.put('/update', function(req, res) {
    res.redirect('/');
});

router.delete('/update', function(req, res) {
    res.redirect('/');
});


module.exports = router;
