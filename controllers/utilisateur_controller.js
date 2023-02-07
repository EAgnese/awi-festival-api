const utilisateur_model = require("../models/utilisateur_model")

function select_utilisateurs(req, res) {

    promise = utilisateur_model.getUtilisateurs()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des utilisateurs"})
        console.error(error.message)
    })
}

module.exports = {
    select_utilisateurs,
}