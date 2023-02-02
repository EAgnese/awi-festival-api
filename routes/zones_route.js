const express = require('express');
const router = express.Router();
const controller_zones = require("../controllers/zones_controller")

router.post("/", controller_zones.select_zones)

module.exports = router