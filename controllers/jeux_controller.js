const model_affectations = require("../models/jeux_model")

function select_affectations(req, res) {

    console.log(req.method)
    console.log(req.url)
    console.log("demande de tous les jeux")

    promise = model_affectations.getAffectations()
    promise.then((values) => {
        res.status(200).send(values.rows)
        console.log("tous les jeux recup")
    }).catch((error) => {
        res.status(400).send({msg: 'Problème sélection des jeux'})
        console.error(error.message)
    })
}

module.exports = {
    select_affectations,
}