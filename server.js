// needed requirements for the node to run
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 3000;
var app = express();
// example variable for express handlebars
var exphbs = require("express-handlebars");
// alternative to passing the app parameter between files
var routes = require("./controllers/burgersController.js");


// used for static folder files
app.use(express.static(__dirname + "/public"));
// uses bodyparser everytime express is used, false for anything type
app.use(bodyParser.urlencoded({extended: false}));
// allows the ability to update or delete any express
app.use(methodOverride("_method"));
// set up for the handlebars to default to main and use view folders, this is how handlebars knows where to go
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// if express uses this path, use this action, var routes
app.use("/", routes);

app.use("/update", routes);

app.use("/create", routes);

// listing to PORT, if it connects then will display the console.log
app.listen(PORT, function() {
	console.log("Listening to port: " + PORT);
	
});
