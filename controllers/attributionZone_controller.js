const attribution_model = require("../models/attributionZone_model")

function selectAttributionsZone(req, res) {

    promise = attribution_model.getAttributionsZone()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection des attributionx"})
        console.error(error.message)
    })
}

function selectAttributionZoneById(req, res) {

    const idZone = req.params.idZone
    const idUtilisateur = req.params.idUtilisateur
    const idCreneau = req.params.idCreneau
    promise = attribution_model.getAttributionZone(idZone,idUtilisateur,idCreneau)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème sélection du attribution"})
        console.error(error.message)
    })
}

function deleteAttributionZone(req, res) {

    promise = attribution_model.deleteAttributionZone(req.body.idZone,req.body.idUtilisateur,req.body.idCreneau)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème suppression du attribution"})
        console.error(error.message)
    })
}

function createAttributionZone(req, res) {

    promise = attribution_model.createAttributionZone(req.body.idZone,req.body.idUtilisateur,req.body.idCreneau)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: "Problème création du attribution"})
        console.error(error.message)
    })
}

// function updateAttributionZoneById(req, res) {

//     promise = attribution_model.updateAttribution(req.body.id,req.body.idType,req.body.nom)
//     promise.then(
//         (values) => {
//             res.status(200).send(values)
//         },
//         (error) => {
//             res.status(400).send({msg: error.message})
//         }
//     ).catch((error) => {
//         res.status(500).send({msg: "Problème mise à jour du attribution"})
//         console.error(error.message)
//     })
// }

module.exports = {
    selectAttributionsZone,
    selectAttributionZoneById,
    deleteAttributionZone,
    createAttributionZone,
    //updateAttributionZOneById,
}