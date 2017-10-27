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
    // console.log('length: ' + found.length);
    //create an empty array for objects to be pushed into, to be able to work with views engine
    let arr = [];
    //use a for loop to loop through all of the potential answers in the array generated
    //from the query above
    for (i=0; i < found.length; i++) {
      //use JSON.stringify to covert the data into a workable object
      // console.log('this burger was not consumed: ' + found[i]);
      (arr).push(found[i]);
    };
    //arr will say [object object], that just means an object converted into a string
    // console.log('this is arr: ' + arr);
    //the PURPOSE OF arr is when the data is called in views it will be called in a each loop
    //so it will be like arr[0].burgerName and so on...
    res.render("index", { burger_data: arr });
  })
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
