const express = require('express');
const router = express.Router();
const jeu_controller = require("../controllers/jeu_controller")

router.get("/", jeu_controller.selectJeux)
router.post("/jeu/info",jeu_controller.selectJeuById)
router.delete("/jeu/delete",jeu_controller.deleteJeu)
router.post("/jeu/creation",jeu_controller.createJeu)
router.put("/jeu/update",jeu_controller.updateJeuById)

module.exports = router