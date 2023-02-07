const jeu_model = require("../models/jeu_model")

function selectJeux(req, res) {

    promise = jeu_model.getJeux()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des jeux"})
        console.error(error.message)
    })
}
function selectJeuById(req, res) {

    promise = jeu_model.getJeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection du jeu"})
        console.error(error.message)
    })
}
function deleteJeu(req, res) {

    promise = jeu_model.deletejeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème suppression du jeu"})
        console.error(error.message)
    })
}
function createJeu(req, res) {

    promise = jeu_model.createJeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème création du jeu"})
        console.error(error.message)
    })
}
function updateJeuByID(req, res) {

    promise = jeu_model.updateJeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème mise à jour du jeu"})
        console.error(error.message)
    })
}

module.exports = {
    selectJeux,
    selectJeuById,
    deleteJeu,
    createJeu,
    updateJeuByID,
}