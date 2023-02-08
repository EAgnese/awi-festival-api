const express = require('express');
const router = express.Router();
const benevole_controller = require("../controllers/benevole_controller")

router.get("/", benevole_controller.selectBenevoles)
router.post("/benevole/info",benevole_controller.selectBenevoleById)
router.delete("/benevole/delete",benevole_controller.deleteBenevole)
router.post("/benevole/creation",benevole_controller.createBenevole)
router.put("/benevole/update",benevole_controller.updateBenevoleById)

module.exports = router