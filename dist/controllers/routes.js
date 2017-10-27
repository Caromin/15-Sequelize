'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// required packages
var Sequelize = require('sequelize');
var Op = Sequelize.Op;
var express = require('express');
// alternative to app.get where (app) is passed in from the server.js file
var router = express.Router();
var models = require('./../models');

router.get("/", function (req, res) {
    //Burger must be capitalized, because it is calling the variable inside of the burger model
    models.Burger.findAll({ where: { devoured: _defineProperty({}, Op.eq, true) } }).then(function (found) {
        console.log('this burger was not consumed' + found.burgerName);
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