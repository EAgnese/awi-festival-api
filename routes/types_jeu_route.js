const express = require('express');
const router = express.Router();
const controller_types_jeu = require("../controllers/types_jeu_controller")

router.post("/", controller_types_jeu.select_types_jeu)

module.exports = router