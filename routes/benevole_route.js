const express = require('express');
const router = express.Router();
const benevole_controller = require("../controllers/benevole_controller")

router.get("/", benevole_controller.selectBenevoles)
router.post("/info",benevole_controller.selectBenevoleById)
router.delete("/delete",benevole_controller.deleteBenevole)
router.post("/create",benevole_controller.createBenevole)
router.put("/update",benevole_controller.updateBenevoleById)

module.exports = router