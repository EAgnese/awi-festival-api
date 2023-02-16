const zone_model = require("../models/zone_model")

function selectZones(req, res) {

    promise = zone_model.getZones()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des zones"})
        console.error(error.message)
    })
}
function selectZoneById(req, res) {

    const id = req.params.id
    promise = zone_model.getZone(id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection d'une zone"})
        console.error(error.message)
    })
}
function deleteZone(req, res) {

    promise = zone_model.deleteZone(req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème suppression d'une zone"})
        console.error(error.message)
    })
}
function createZone(req, res) {

    promise = zone_model.createZone(req.body.nom)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème création d'une zone"})
        console.error(error.message)
    })
}
function updateZoneById(req, res) {

    promise = zone_model.updateZone(req.body.nom,req.body.id)
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème mise à jour d'une zone"})
        console.error(error.message)
    })
}

module.exports = {
    selectZones,
    selectZoneById,
    deleteZone,
    createZone,
    updateZoneById,
}