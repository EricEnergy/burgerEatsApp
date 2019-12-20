var connection = require("../config/connection.js");

var orm = {

 selectWhere: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  insertOne: function(val1, cb) {
    var queryString = "INSERT INTO `burgers`(burger_name) VALUES (?)";
    connection.query(queryString, [val1], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },

  updateOne: function (idNum, cb) {
    var queryString = "UPDATE burgers SET devoured = true WHERE `id` = ?;";
    connection.query(queryString, [idNum], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  
  delete: function (idNum, cb) {
    var queryString = "DELETE FROM burgers WHERE id= ?;";
    connection.query(queryString, [idNum], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
};





module.exports = orm