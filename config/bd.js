let mysql = require('mysql2');
require("dotenv").config()
const url = require('url');

const dbUrl = process.env.DATABASE_URL; // assuming this is where you have stored the DSN
const params = url.parse(dbUrl);


const connection = mysql.createPool({
  host: params.hostname,
  port: params.port,
  user: params.auth.split(':')[0],
  password: params.auth.split(':')[1],
  database: params.pathname.slice(1)
});

/*
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'simplify_awi',
  password : 'Awi_festival02',
  database : 'awi_festival',
  port     : '3306',
});
*/

module.exports = connection
