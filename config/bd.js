let mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'dokku-mysql-awi-festival',
  user     : 'mysql',
  password : 'b49b0dd8a1ae40ed',
  database : 'awi_festival',
  port     : '3306',
})
connection.connect(function(err) {
  if (err) {
      console.log('Conexão com banco ocorreu erro. ' + err + ' ' + err.code);
      return;
  }
  console.log('Conexão com banco ok!');
});

module.exports = connection
