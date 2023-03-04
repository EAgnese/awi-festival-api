let mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'simplify_awi',
  password : 'Awi_festival02',
  database : 'awi_festival',
  port     : '3306',
})

module.exports = connection