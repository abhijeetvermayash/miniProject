const mysql = require('mysql2')

const con =  mysql.createPool({
    host: "database-2.c6exrjimw94y.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "QWERTYUI",

    database: "project",
    port:"3306",
    connectTimeout:"15000"
    
    
})


module.exports = con.promise();