const express = require('express');
const router = express.Router();
const attribution_controller = require("../controllers/attribution_controller")

router.get("/", attribution_controller.selectAttributions)
router.get("/:id",attribution_controller.selectAttributionById)
router.delete("/delete",attribution_controller.deleteAttribution)
router.post("/create",attribution_controller.createAttribution)
router.put("/update",attribution_controller.updateAttributionById)

module.exports = router