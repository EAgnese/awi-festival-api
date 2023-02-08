const express = require('express');
const router = express.Router();
const zone_controller = require("../controllers/zone_controller")

router.get("/",zone_controller.selectZones)
router.post("/zone/info",zone_controller.selectZoneById)
router.delete("/zone/delete",zone_controller.deleteZone)
router.post("/zone/creation",zone_controller.createZone)
router.put("/zone/update",zone_controller.updateZoneById)

module.exports = router