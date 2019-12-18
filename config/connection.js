var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "z1frgt2dd53m96cd	",
  password: "bvzaggvqiiyjj58a",
  database: "tbmt2yhbc7bxfbop"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
