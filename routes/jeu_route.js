const express = require('express');
const router = express.Router();
const jeu_controller = require("../controllers/jeu_controller")

router.get("/", jeu_controller.select_jeux)
router.post("/jeu/info",jeu_controller.selectByID)
router.delete("/jeu/delete",middlewareUtilisateur.verifAdmin,jeu_controller.delete)
router.post("/jeu/creation",jeu_controller.create)
router.put("/jeu/update",middlewareUtilisateur.verifAdmin,jeu_controller.updateByID)

module.exports = router