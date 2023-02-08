const utilisateur_model = require("../models/utilisateur_model")

function selectUtilisateurs(req, res) {

    promise = utilisateur_model.getUtilisateurs()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des utilisateurs"})
        console.error(error.message)
    })
}
function selectUtilisateurById(req, res) {

    promise = utilisateur_model.getUtilisateur(req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection d'un utilisateur"})
        console.error(error.message)
    })
}
function deleteUtilisateur(req, res) {

    promise = utilisateur_model.deleteUtilisateur(req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème suppression d'un utilisateur"})
        console.error(error.message)
    })
}
function createUtilisateur(req, res) {

    promise = utilisateur_model.createUtilisateur(req.body.nom,req.body.prenom,req.body.mail,req.body.mdp)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème création d'un utilisateur"})
        console.error(error.message)
    })
}
function updateUtilisateurById(req, res) {

    promise = utilisateur_model.updateUtilisateur(req.body.nom,req.body.prenom,req.body.mail,req.body.mdp,req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème mise à jour d'un utilisateur"})
        console.error(error.message)
    })
}

module.exports = {
    selectUtilisateurs,
    selectUtilisateurById,
    deleteUtilisateur,
    createUtilisateur,
    updateUtilisateurById,
}