'use strict';

// required packages
var express = require('express');
// alternative to app.get where (app) is passed in from the server.js file
var router = express.Router();
var models = require('./../models');

//when I say burger, I am saying go to burger.selectAll inside of burger.js
router.get("/", function (req, res) {
  models.burger.findAll().then(function (found) {
    console.log(found);
    res.render("index");
  });
});

// post route -> back to index
router.post('/create', function (req, res) {
  // takes the request object using it as input for buger.addBurger
  // burger.insertOne(req.body.burger_name, function(result) {
  //   // wrapper for orm.js that using MySQL insert callback will return a log to console,
  //   // render back to index with handle
  //   res.redirect("/");
  // });
});

router.put('/update', function (req, res) {
  //the burger_id comes from name='burger_id' from the index.handlebars <input>
  // console.log(req.body.burger_id);
  // burger.updateOne(req.body.burger_id, function(result) {
  //
  //   res.redirect('/');
  // });
});

router.delete('/update', function (req, res) {
  // burger.deleteOne(req.body.burger_id, function(result) {
  //   res.redirect('/');
  // });
});

module.exports = router;