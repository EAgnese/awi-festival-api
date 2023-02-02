const model_benevoles = require("../models/benevoles_model")

function select_benevoles(req, res) {
    console.log("CC")
    console.log(req.method)
    console.log(req.url)
    console.log("demande de tous les benevoles")

    promise = model_benevoles.getBenevoles()
    promise.then((values) => {
        res.status(200).send(values.rows)
        console.log("tous les benevoles recup")
    }).catch((error) => {
        res.status(400).send({msg: 'Problème sélection des benevoles'})
        console.error(error.message)
    })
}

module.exports = {
    select_benevoles,
}