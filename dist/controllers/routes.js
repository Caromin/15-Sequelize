'use strict';

// required packages
var express = require('express');
// alternative to app.get where (app) is passed in from the server.js file
var router = express.Router();
var models = require('./../models');

router.get("/", function (req, res) {
    //Burger must be capitalized, because it is calling the variable inside of the burger model
    models.Burger.findAll({ where: { burgerName: 'secondBurger' } }).then(function (found) {
        console.log(found.burgerName);
    });

    res.render("index");
});

router.post('/create', function (req, res) {
    res.redirect("/");
});

router.put('/update', function (req, res) {
    res.redirect('/');
});

router.delete('/update', function (req, res) {
    res.redirect('/');
});

module.exports = router;