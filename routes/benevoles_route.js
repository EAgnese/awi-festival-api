const express = require('express');
const router = express.Router();
const controller_benevoles = require("../controllers/benevoles_controller")

router.get("/", controller_benevoles.select_benevoles)

module.exports = router