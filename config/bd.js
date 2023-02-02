let mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'mysql-simplify.alwaysdata.net',
  user     : 'simplify_awi',
  password : 'awi_festival',
  database : 'simplify_awi_festival'
})

module.exports = connection