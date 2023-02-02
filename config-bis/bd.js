let mysql = require('mysql')

let connection = mysql.createConnection({
  host     : 'sql11.freemysqlhosting.net',
  user     : 'sql11481586',
  password : '9p2wj4sy4P',
  database : 'sql11481586'
})

module.exports = connection