//this is adding the specific update, delete, post ACTIONS functions to a specific json call
var orm = require('../config/orm.js');

//where each request is housed from controllers.js 
//ex when burger.selectAll is requested in controller, it will go to var burgers.selectAll
//then run the specific function with the parameters given
var burger = {
  // cb paramter passed is the burgerData from controllers
	selectAll:  function(cb) {
    //this is passing in the parameter table, burgers, thats renamed as tableInput in orm.js
    //so it is saying go to orm.selectAll and go to unnamed function and pass the table
    orm.selectAll("burgers", function(res) {
      //CALLBACK RESULTS!!!!! FUCKING A
      // a vanilla callback function is passed into a (typically) asynchronous function, which is a common pattern in node.js 
      // (it's sometimes labelled next, but you can call it bananas if you so desire - it's just an argument).
      
      //this is a callback to the previous function to run from controllers
      cb(res);
    });
	},

	insertOne:  function(burgerNameCreated, cbisfunctionPassedfromControllers) {
    orm.insertOne("burgers", 
      [ "burger_name", "devoured" ], 
      [ burgerNameCreated, false ], cbisfunctionPassedfromControllers
    )
	},

  updateOne: function(burgerId, cb) {
    orm.updateOne('burgers', burgerId, true, cb
    )
  },

  deleteOne: function(burgerId, cb) {
    orm.deleteOne('burgers', burgerId, cb
    )
  },

};  

module.exports = burger;