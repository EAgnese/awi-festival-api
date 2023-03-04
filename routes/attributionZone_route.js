const express = require('express');
const router = express.Router();
const attributionZone_controller = require("../controllers/attributionZone_controller")

router.get("/", attributionZone_controller.selectAttributionsZone)
router.get("/:id",attributionZone_controller.selectAttributionZoneById)
router.delete("/delete",attributionZone_controller.deleteAttributionZone)
router.post("/create",attributionZone_controller.createAttributionZone)
//router.put("/update",attributionZone_controller.updateAttributionZoneById)

module.exports = router