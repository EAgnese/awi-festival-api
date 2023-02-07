const express = require('express');
const router = express.Router();
const benevole_controller = require("../controllers/benevole_controller")

router.get("/", benevole_controller.selectBenevoles)
router.post("/benevole/info",benevole_controller.selectBenevoleByID)
router.delete("/benevole/delete",middlewareUtilisateur.verifAdmin,benevole_controller.deleteBenevole)
router.post("/benevole/creation",benevole_controller.createBenevole)
router.put("/benevole/update",middlewareUtilisateur.verifAdmin,benevole_controller.updateBenevoleByID)

module.exports = router