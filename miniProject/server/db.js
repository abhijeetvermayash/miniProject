const mysql = require("mysql2");

const con = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "8579081636",

  database: "project",
  port: "3306",
  connectTimeout: "15000",
});

module.exports = con.promise();
