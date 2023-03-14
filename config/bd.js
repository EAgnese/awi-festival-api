let mysql = require('mysql');
require("dotenv").config()
const url = require('url');

/*

console.log(process.env.DATABASE_URL)
const dbUrl = process.env.DATABASE_URL; // assuming this is where you have stored the DSN
const params = url.parse(dbUrl);
console.log(params)

const connection = mysql.createConnection({
  host: params.hostname,
  port: params.port,
  user: params.auth.split(':')[0],
  password: params.auth.split(':')[1],
  database: params.pathname.slice(1)
});
*/
/*

let connection = mysql.createConnection({
  host     : 'dokku-mysql-awi-festival',
  user     : 'mysql',
  password : 'd9600d42cb844e52',
  database : 'awi_festival',
  //port     : '3306',
  connectTimeout: 1000000,
});*/

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'simplify_awi',
  password : 'Awi_festival02',
  database : 'awi_festival',
  port     : '3306',
});
connection.connect(function(err) {
  if (err) {
      console.log('Connexion error ' + err + ' ' + err.code);
      return;
  }
  console.log('connexion  ok!');
});

module.exports = connection
