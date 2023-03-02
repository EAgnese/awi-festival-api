const attribution_model = require("../models/attribution_model")

function selectAttributions(req, res) {

    promise = attribution_model.getAttributions()
    promise.then((values) => {

        res.status(200).send(values)
        
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des attributionx"})
        console.error(error.message)
    })
}

function selectAttributionById(req, res) {

    const id = req.params.id
    promise = attribution_model.getAttribution(id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection du attribution"})
        console.error(error.message)
    })
}

function deleteAttribution(req, res) {

    promise = attribution_model.deleteAttribution(req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème suppression du attribution"})
        console.error(error.message)
    })
}

function createAttribution(req, res) {

    promise = attribution_model.createAttribution(req.body.idType, req.body.nom)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème création du attribution"})
        console.error(error.message)
    })
}

function updateAttributionById(req, res) {

    promise = attribution_model.updateAttribution(req.body.id,req.body.idType,req.body.nom)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème mise à jour du attribution"})
        console.error(error.message)
    })
}

module.exports = {
    selectAttributions,
    selectAttributionById,
    deleteAttribution,
    createAttribution,
    updateAttributionById,
}