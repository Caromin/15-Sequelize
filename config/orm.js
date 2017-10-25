// required files, so that you can connect and search the database
var connection = require('./connections.js');


function printQuestionMarks(ValuesGivenArrayNumber) {
  var arr = [];

  for (var i = 0; i < ValuesGivenArrayNumber; i++) {
    arr.push("?");
  }

  return arr.toString();
};


var orm = {
// function that will select all in a specificied column
//tableInput was 'burgers' from burgers.js
	selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
// ideally this should look for the table and had a block of values like the seeds.sql
// addingNewValues should look like this (cheeseburger, devoured/boolean, date modified)
	insertOne: function(table, columnNamesArray, ValuesGivenArray, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += columnNamesArray.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(ValuesGivenArray.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, ValuesGivenArray, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, burgerId, devoured, cb) {
    var queryString = 'UPDATE ' + table + ' SET ' + 'devoured= ' + devoured + ' WHERE ' 
    + 'id=' + burgerId; 
    
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  deleteOne: function(table, burgerId, cb) {
    var queryString = 'DELETE FROM ' + table + ' WHERE id=' + burgerId;
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });  
  },

};

// exports the variable orm only
module.exports = orm;