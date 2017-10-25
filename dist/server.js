'use strict';

// required npm packages
var Sequelize = require('sequelize');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Import routes and give the server access to them.
var routes = require('./controllers/routes');

var app = express();
// all caps means it will not change
var PORT = process.env.PORT || 8000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));

// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
// must be used before any module needs to know the method of request, ex. get, post

// Example call with query override using HTML <form>:
// <form method="POST" action="/resource?_method=DELETE">
//   <button type="submit">Delete resource</button>
// </form>
//so instead of a router.post the route will be looking for router.delete
app.use(methodOverride("_method"));

//this is needed if you are using helper functions
var hbs = exphbs.create({
	// Specify helpers which are only registered on this instance.
	helpers: {
		plusOne: function plusOne(val) {
			return parseInt(val) + 1;
		}
	},
	//sets the default layout to main.handlebars
	defaultLayout: 'main'
});

//hbs.engine would be used if you have custom helpers/other settings
app.engine("handlebars", hbs.engine);
//.set is saying now use the engine with parameters handlebars and run that as the viewing engine
app.set("view engine", "handlebars");

//now I'm telling the server to listen to these specific routes and if used, pass them into the routes handling js
//for a specific action to take place
app.use("/", routes);
app.use("/create", routes);
app.use("/update", routes);

//just to make sure the port is functioning as intended
app.listen(PORT, function () {
	console.log("Listening to port: " + PORT);
});