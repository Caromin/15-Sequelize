// required packages
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const express = require('express');
// alternative to app.get where (app) is passed in from the server.js file
const router = express.Router();
const models = require('./../models');

router.get("/", function(req, res) {
  //Burger must be capitalized, because it is calling the variable inside of the burger model
  //use raw: true to display the data in an array format
  models.Burger.findAll({ raw: true}).then(found => {
    console.log('length: ' + found.length);
    //use a for loop to loop through all of the potential answers in the array generated
    //from the query above
    for (i=0; i < found.length; i++) {
      //use JSON.stringify to covert the data into a workable object
      console.log('this burger was not consumed: ' + JSON.stringify(found[i].burgerName));
    }
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
