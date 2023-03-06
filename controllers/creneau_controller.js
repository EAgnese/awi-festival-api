const creneau_model = require("../models/creneau_model")

function selectCreneaux(req, res) {

    promise = creneau_model.getCreneaux()
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

module.exports = {
    selectCreneaux,
}