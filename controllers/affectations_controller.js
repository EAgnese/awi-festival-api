const model_affectations = require("../models/affectations_model")

function select_affectations(req, res) {
    console.log(req.method)
    console.log(req.url)
    console.log("demande de toutes les affectations")
    promise = model_affectations.getAffectations()
    promise.then((values) => {
        res.status(200).send(values.rows)
        console.log("toutes les affectations recup")
    }).catch((error) => {
        console.error(error.message)
    })
}

module.exports = {
    select_affectations,
}