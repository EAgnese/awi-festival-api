let mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'postgresql-simplify.alwaysdata.net',
  user     : 'simplify_awi_festival',
  password : 'awi_festival',
  database : 'simplify_awi_festival'
})

module.exports = connection