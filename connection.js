const mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'Mysqlaksha@34',
    database: 'cyber'
});

connection.connect((err) => {
    if(!err){
        console.log('Database is connected');
    }
    else{
        console.log(err);
    }
});



module.exports = connection;