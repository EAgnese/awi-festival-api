const express = require('express');
const router = express.Router();
const controller_affectations = require("../controllers/affectations_controller")

router.get("/", controller_affectations.select_affectations)

module.exports = router