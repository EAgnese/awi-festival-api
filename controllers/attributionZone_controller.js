const attribution_model = require("../models/attributionZone_model")

function selectAttributionsZone(req, res) {

    promise = attribution_model.getAttributionsZone()
    promise.then(
        (values) => {
            const result =  values.map(item => {
                return {
                zone : {
                    id : item.idZone,
                    nom : item.nomZone
                },
                benevole : {
                    id : item.idUtilisateur, 
                    nom : item.nom, 
                    prenom : item.prenom
                },
                creneau : {
                    id: item.idCreneau,
                    dateDebut :item.dateDebut, 
                    dateFin : item.dateFin
                }
            }})
            res.status(200).send(result)
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


module.exports = {
    selectAttributionsZone,
    selectAttributionZoneById,
    deleteAttributionZone,
    createAttributionZone,
}