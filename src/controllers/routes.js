// required packages
var express = require('express');
// alternative to app.get where (app) is passed in from the server.js file
var router = express.Router();
var burger = require('../models/burger.js');

//when I say burger, I am saying go to burger.selectAll inside of burger.js
router.get("/", function(req, res) {
  burger.selectAll(function(result) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    // when I render the index page from handlebars view, I am passing over the burgerData (switch can be named anything)
    // and setting the key to burger_data
    res.render("index", { burger_data: result });
  });
});

// post route -> back to index
router.post('/create', function(req, res) {
  // takes the request object using it as input for buger.addBurger
  burger.insertOne(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    res.redirect("/");
  });
});

router.put('/update', function(req, res) {
  //the burger_id comes from name='burger_id' from the index.handlebars <input>
  // console.log(req.body.burger_id);
  burger.updateOne(req.body.burger_id, function(result) {
    
    res.redirect('/');
  });
});

router.delete('/update', function(req, res) {
  burger.deleteOne(req.body.burger_id, function(result) {
    res.redirect('/');
  });
});


module.exports = router;
