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
    // created two arrays one for false devoured each view and one for true
    let arrTrue = [];
    let arrFalse = []
    //use a for loop to loop through all of the potential answers in the array generated
    //from the query above
    for (i=0; i < found.length; i++) {
      //use JSON.stringify to covert the data into a workable object
      // console.log('this burger was not consumed: ' + found[i]);

      // if devoured is 0 (false) it will be pushed into the arrFalse array, otherwise into the arrTrue array
      if (found[i].devoured === 0 ) {
        (arrFalse).push(found[i]);
      } else {
        (arrTrue).push(found[i]);
      }
    };
    
    //arr will say [object object], that just means an object converted into a string
    // console.log('this is arr: ' + arr);
    //the PURPOSE OF arr is when the data is called in views it will be called in a each loop
    //so it will be like arr[0].burgerName and so on...
    res.render("index", { burger_false: arrFalse, burger_true: arrTrue });
  })
});

router.post('/create', function(req, res) {
  //checked to see if req.body is functioning correctly, yes.
  // console.log('this is burger name: ' + (req.body.burgerName).toString());
  // REMEBER: newBurger is just renamed title of data, can be named anything!!!
  models.Burger.create({burgerName: (req.body.burgerName).toString()}).then(newBurger => {
    //just converting the data to plain text in node (plain: true)
    console.log('this is being created: ' + newBurger.get({
      plain: true
    }));
    //then going back to route '/' once the burger is created
    res.redirect("/");
  });
});

router.put('/update', function(req, res) {
  models.Burger.update({devoured: true}, {where: {id: parseInt(req.body.burger_id)}}).then(updatedData => {
    //updatedData in this case is 1, because 0 is false, so I am updating it to be true, where id = req.body...
    console.log('this is being devoured: ' + updatedData);
    res.redirect('/');
  });
});

router.delete('/update', function(req, res) {
  models.Burger.destroy({ where: {id: parseInt(req.body.burger_id)}}).then(deletedData => {
    console.log('this was deleted: ' + deletedData);
  })
    res.redirect('/');
});


module.exports = router;
