let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'dokku-mysql-awi-festival',
  user     : 'mysql',
  password : 'd9600d42cb844e52',
  database : 'awi_festival',
  port     : '3306'
});
/*
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'simplify_awi',
  password : 'Awi_festival02',
  database : 'awi_festival',
  port     : '3306',
});*/
connection.connect(function(err) {
  if (err) {
      console.log('Connexion error ' + err + ' ' + err.code);
      return;
  }
  console.log('connexion  ok!');
});

module.exports = connection
