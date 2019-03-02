var mysql = require('mysql');
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"fk",
});
connection.connect();
connection.query("drop table if exists productFeedListing");
connection.query(`create table productFeedListing(
    category_id int(10) AUTO_INCREMENT,
    category_name varchar(100),
    getUrl varchar(200),
    deltaGetUrl varchar(200),
    PRIMARY KEY(category_id)
)`);

// PRODUCT LISTINGS table

// connection.query('');

module.exports = connection;