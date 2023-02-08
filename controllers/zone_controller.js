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

    promise = zone_model.getZone()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection d'une zone"})
        console.error(error.message)
    })
}
function deleteZone(req, res) {

    promise = zone_model.deletezone()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème suppression d'une zone"})
        console.error(error.message)
    })
}
function createZone(req, res) {

    promise = zone_model.createZone()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème création d'une zone"})
        console.error(error.message)
    })
}
function updateZoneById(req, res) {

    promise = zone_model.updateZone()
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