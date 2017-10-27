// required npm packages
const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride  = require('method-override');
const exphbs = require('express-handlebars');

const reconnectOptions = {
  max_retries: 999,
  onRetry: function(count) {
    console.log("connection lost, trying to reconnect ("+count+")");
  }
};

//execute file that will connect to mysql database
const sequelize = new Sequelize('heroku_472b2c36fd35cda', 'bcc14fb1730453', '40d4dcaf', {
  host: 'us-cdbr-iron-east-05.cleardb.net',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 75000,
    reconnect: reconnectOptions || true
  }
});

//
// // needed to connect to the database
// var mysql = require('mysql');
//
// // setting the connection to a variable
// var pool = mysql.createPool( {
// 	connectTimeout: 300000,
// 	host: 'us-cdbr-iron-east-05.cleardb.net',
// 	user: 'bac4edfa125487',
// 	password: '68c188c3',
// 	database: 'heroku_82100a74448265a'
// });
//
// //found online to help trouble shoot the server disconnect when using cleardb
// function handleDisconnect() {
//   pool.getConnection(function(err, connection){
//       if(err) { return; }
//       connection.query( "SELECT 1", function(err, rows) {
//         connection.release();
//         if (err) {
//             console.log("QUERY ERROR: " + err);
//         }
//       });
//   });
// }
//
//
// handleDisconnect();



// Import routes and give the server access to them.
const routes = require('./controllers/routes');
const app = express();
// all caps means it will not change
const PORT = process.env.PORT || 8000;

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
const hbs = exphbs.create({
   // Specify helpers which are only registered on this instance.
   helpers: {
    	plusOne: function(val) {
			return parseInt(val) + 1;
		},
	},
	//sets the default layout to main.handlebars
	defaultLayout: 'main',
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
app.listen(PORT, function() {
	console.log("Listening to port: " + PORT);
});

//testing if sequelize is connected, working.
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
