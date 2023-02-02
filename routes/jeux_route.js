const express = require('express');
const router = express.Router();
const controller_jeux = require("../controllers/jeux_controller")

router.post("/", controller_jeux.select_jeux)

module.exports = router