const typeJeu_model = require("../models/typeJeu_model")

function selectTypeJeux(req, res) {

    promise = typeJeu_model.getTypeJeux()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des types de jeux"})
        console.error(error.message)
    })
}
function selectTypeJeuById(req, res) {

    const id = req.params.id
    promise = typeJeu_model.getTypeJeu(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection du type de jeu"})
        console.error(error.message)
    })
}
function deleteTypeJeu(req, res) {

    promise = typeJeu_model.deleteTypeJeu(req.body.id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression du type de jeu"})
        console.error(error.message)
    })
}
function createTypeJeu(req, res) {

    promise = typeJeu_model.createTypeJeu(req.body.nom)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création du type de jeu"})
        console.error(error.message)
    })
}
function updateTypeJeuById(req, res) {

    promise = typeJeu_model.updateTypeJeu(req.body.id,req.body.nom)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème mise à jour du type de jeu"})
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