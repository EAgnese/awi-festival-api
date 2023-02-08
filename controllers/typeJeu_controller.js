const typeJeu_model = require("../models/typeJeu_model")

function selectTypeJeux(req, res) {

    promise = typeJeu_model.getTypeJeux()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des types de jeux"})
        console.error(error.message)
    })
}
function selectTypeJeuById(req, res) {

    promise = typeJeu_model.getTypeJeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection du type de jeu"})
        console.error(error.message)
    })
}
function deleteTypeJeu(req, res) {

    promise = typeJeu_model.deleteTypeJeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème suppression du type de jeu"})
        console.error(error.message)
    })
}
function createTypeJeu(req, res) {

    promise = typeJeu_model.createTypeJeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème création du type de jeu"})
        console.error(error.message)
    })
}
function updateTypeJeuById(req, res) {

    promise = typeJeu_model.updateTypeJeu()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème mise à jour du type de jeu"})
        console.error(error.message)
    })
}

module.exports = {
    selectTypeJeux,
    selectTypeJeuById,
    deleteTypeJeu,
    createTypeJeu,
    updateTypeJeuById,
}