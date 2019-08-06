const mysql = require('mysql2');

const mysqlPool = mysql.createPool({
    
    host:'us-cdbr-iron-east-02.cleardb.net',
    user:'b429471a9ed4ee',
    password:'c483bfff',
    database:'heroku_cd5497db7ba8561'


    // host:'127.0.0.1',
    // user:'root',
    // password:'root',
    // database:'testdb'
    
});

module.exports = mysqlPool.promise();
