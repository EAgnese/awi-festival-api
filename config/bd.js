let mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'dokku-mysql-awi-festival',
  user     : 'mysql',
  password : 'b49b0dd8a1ae40ed',
  database : 'awi_festival',
  port     : '3306',
})

module.exports = connection
