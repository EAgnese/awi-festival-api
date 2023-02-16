const express = require('express');
const router = express.Router();
const jeu_controller = require("../controllers/jeu_controller")

router.get("/", jeu_controller.selectJeux)
router.get("/:id",jeu_controller.selectJeuById)
router.delete("/delete",jeu_controller.deleteJeu)
router.post("/create",jeu_controller.createJeu)
router.put("/update",jeu_controller.updateJeuById)

module.exports = router