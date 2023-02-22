const express = require('express');
const router = express.Router();
const utilisateur_controller = require("../controllers/utilisateur_controller")

router.get("/",utilisateur_controller.selectUtilisateurs)
router.get("/:id",utilisateur_controller.selectUtilisateurById)
router.delete("/delete",utilisateur_controller.deleteUtilisateur)
router.post("/create",utilisateur_controller.createUtilisateur)
router.put("/update",utilisateur_controller.updateUtilisateurById)
router.post("/connexion",utilisateur_controller.connexionUtilisateur)

module.exports = router