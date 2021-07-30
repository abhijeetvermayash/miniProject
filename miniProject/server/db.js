const mysql = require("mysql2");

const con = mysql.createPool({
  host: "us-cdbr-east-04.cleardb.com",
  user: "b68a82d541862c",
  password: "11bfbd4f",

  database: "heroku_76a0295bdb1e3f5",
});

module.exports = con.promise();
