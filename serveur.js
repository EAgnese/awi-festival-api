const cors = require('cors') //
const express = require('express')
const bodyParser = require('body-parser')
const app = express()


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))


// on va chercher fichier routes
var routes = require("./routes/route");
routes(app) //envoi de l'app 

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`L'application tourne sur le port ${ PORT }`);
})
