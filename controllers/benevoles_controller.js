const model_benevoles = require("../models/benevoles_model")

function select_benevoles(req, res) {

    promise = model_benevoles.getBenevoles()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: 'Problème sélection des benevoles'})
        console.error(error.message)
    })
}

module.exports = {
    select_benevoles,
}