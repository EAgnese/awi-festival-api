const express = require('express');
const router = express.Router();
const attributionZone_controller = require("../controllers/attributionZone_controller")

router.get("/", attributionZone_controller.selectAttributionsZone)
router.get("/:id",attributionZone_controller.selectAttributionZoneById)
router.get("/zone/:id",attributionZone_controller.selectAttributionsByZone)
router.get("/creneau/:id",attributionZone_controller.selectAttributionsByCreneau)
router.get("/benevole/:id",attributionZone_controller.selectAttributionsByBenevole)
router.delete("/delete",attributionZone_controller.deleteAttributionZone)
router.post("/create",attributionZone_controller.createAttributionZone)

module.exports = router