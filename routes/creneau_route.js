const express = require('express');
const router = express.Router();
const creneau_controller = require("../controllers/creneau_controller")

router.get("/", creneau_controller.selectCreneaux)

module.exports = router