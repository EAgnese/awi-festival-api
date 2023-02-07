const zone_model = require("../models/zone_model")

function select_zones(req, res) {

    promise = zone_model.getZones()
    promise.then((values) => {
        res.status(200).send(values)
    }).catch((error) => {
        res.status(400).send({msg: "Problème sélection des zones"})
        console.error(error.message)
    })
}

module.exports = {
    select_zones,
}