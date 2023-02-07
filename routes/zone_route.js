const express = require('express');
const router = express.Router();
const zone_controller = require("../controllers/zone_controller")

router.get("/",middlewareUtilisateur.verifAdmin,zone_controller.select_zones)
router.post("/zone/info",middlewareUtilisateur.verifAdmin,zone_controller.selectByID)
router.delete("/zone/delete",middlewareUtilisateur.verifAdmin,zone_controller.delete)
router.post("/zone/creation",zone_controller.create)
router.put("/zone/update",middlewareUtilisateur.verifAdmin,zone_controller.updateByID)

module.exports = router