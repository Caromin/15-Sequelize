// needed to connect to the database
var mysql = require('mysql');

// setting the connection to a variable
var pool = mysql.createPool( {
	connectTimeout: 300000,
	host: 'us-cdbr-iron-east-05.cleardb.net',
	user: 'bac4edfa125487',
	password: '68c188c3',
	database: 'heroku_82100a74448265a'
});

//found online to help trouble shoot the server disconnect when using cleardb
function handleDisconnect() {
  pool.getConnection(function(err, connection){
      if(err) { return; }
      connection.query( "SELECT 1", function(err, rows) {
        connection.release();
        if (err) {
            console.log("QUERY ERROR: " + err);
        }
      });
  });
}


handleDisconnect();

// after running through the whole page, this will export the var connection ONLY, 
// connect.connect alert only happens because it appears before the module.exports
module.exports = pool;