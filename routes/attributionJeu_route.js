const express = require('express');
const router = express.Router();
const attributionJeu_controller = require("../controllers/attributionJeu_controller")
const { verifConnecte } = require('../middleware/utilisateur');


router.get("/", attributionJeu_controller.selectAttributions)
router.get("/jeu/:id",attributionJeu_controller.selectAttributionByJeu)
router.get("/zone/:id",attributionJeu_controller.selectAttributionByZone)
router.get("/zone",attributionJeu_controller.selectAttributionByZoneJeu)
router.get("/jeu/zone/:id",attributionJeu_controller.selectJeuByZone)
router.delete("/delete",verifConnecte,attributionJeu_controller.deleteAttribution)
router.post("/create",verifConnecte,attributionJeu_controller.createAttribution)

module.exports = router
