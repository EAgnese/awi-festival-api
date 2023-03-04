let mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : 'simplify_awi_festival',
})

module.exports = connection