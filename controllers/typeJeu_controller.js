const typeJeu_model = require("../models/typeJeu_model")

function select_typesJeux(req, res) {

    promise = typeJeu_model.getTypesJeux()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des types de jeu"})
        console.error(error.message)
    })
}

module.exports = {
    select_typesJeux,
}