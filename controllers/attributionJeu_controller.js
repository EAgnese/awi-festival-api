const attributionJeu_model = require("../models/attributionJeu_model")

function selectAttributions(req, res) {

    promise = attributionJeu_model.getAttributionsJeux()
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectAttributionByZone(req, res) {
    
    const id = req.params.id
    promise = attributionJeu_model.getAttributionJeuByIdZone(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectJeuByZone(req, res) {
    
    const id = req.params.id
    promise = attributionJeu_model.getJeuByIdZone(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function selectAttributionByZoneJeu(req, res) {

    promise = attributionJeu_model.getAttributionJeuByZoneJeu(req.body.idZone,req.body.idJeu)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}

function selectAttributionByJeu(req, res) {

    const id = req.params.id
    promise = attributionJeu_model.getAttributionJeuByIdJeu(id)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function deleteAttribution(req, res) {

    promise = attributionJeu_model.deleteAttributionJeu(req.body.idZone,req.body.idJeu)
    promise.then(
        (values) => {
            res.status(200).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
function createAttribution(req, res) {

    promise = attributionJeu_model.createAttributionJeu(req.body.idZone,req.body.idJeu)
    promise.then(
        (values) => {
            res.status(201).send(values)
        },
        (error) => {
            res.status(400).send({msg: error.message})
        }
    ).catch((error) => {
        res.status(500).send({msg: error.message})
        console.error(error.message)
    })
}
module.exports = {
    selectAttributions,
    selectAttributionByZone,
    selectAttributionByJeu,
    selectAttributionByZoneJeu,
    selectJeuByZone,
    deleteAttribution,
    createAttribution,
}