const express = require('express');
const router = express.Router();
const attributionZone_controller = require("../controllers/attributionZone_controller")

router.get("/", attributionZone_controller.selectAttributionsZone)
router.get("/:id",attributionZone_controller.selectAttributionZoneById)
router.get("/zone/:idZone",attributionZone_controller.selectAttributionsByZone)
router.get("/creneau/:idCreneau",attributionZone_controller.selectAttributionsByCreneau)
router.get("/benevole/:idUtilisateur",attributionZone_controller.selectAttributionsByBenevole)
router.get("/all",attributionZone_controller.selectAttributionsByAll)
router.get("/zone-benevole/:idZone/:idBene",attributionZone_controller.selectCreneauNonSelectByZoneAndBenevole)
router.delete("/delete",attributionZone_controller.deleteAttributionZone)
router.post("/create",attributionZone_controller.createAttributionZone)

module.exports = router