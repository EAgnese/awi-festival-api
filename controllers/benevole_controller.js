const benevole_model = require("../models/benevole_model")

function selectBenevoles(req, res) {
    promise = benevole_model.getBenevoles()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des bénévoles"})
        console.error(error.message)
    })
}
function selectBenevoleById(req, res) {
    promise = benevole_model.getBenevole(req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection du bénévole"})
        console.error(error.message)
    })
}
function deleteBenevole(req, res) {

    promise = benevole_model.deleteBenevole(req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème suppression du bénévole"})
        console.error(error.message)
    })
}
function createBenevole(req, res) {

    promise = benevole_model.createBenevole(req.body.nom, req.body.prenom, req.body.email, req.body.mdp)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème création du bénévole"})
        console.error(error.message)
    })
}
function updateBenevoleById(req, res) {

    promise = benevole_model.updateBenevole(req.body.nom, req.body.prenom, req.body.email,req.body.mdp, req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème mise à jour du bénévole"})
        console.error(error.message)
    })
}

module.exports = {
    selectBenevoles,
    selectBenevoleById,
    deleteBenevole,
    createBenevole,
    updateBenevoleById,
}