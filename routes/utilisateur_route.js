const express = require('express');
const router = express.Router();
const utilisateur_controller = require("../controllers/utilisateur_controller")

router.get("/",utilisateur_controller.selectUtilisateurs)
router.post("/utilisateur/info",utilisateur_controller.selectUtilisateurById)
router.delete("/utilisateur/delete",utilisateur_controller.deleteUtilisateur)
router.post("/utilisateur/creation",utilisateur_controller.createUtilisateur)
router.put("/utilisateur/update",utilisateur_controller.updateUtilisateurById)

module.exports = router