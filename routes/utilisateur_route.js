const express = require('express');
const router = express.Router();
const utilisateur_controller = require("../controllers/utilisateur_controller")

router.get("/",middlewareUtilisateur.verifAdmin,utilisateur_controller.select_utilisateurs)
router.post("/utilisateur/info",middlewareUtilisateur.verifAdmin,utilisateur_controller.selectByID)
router.delete("/utilisateur/delete",middlewareUtilisateur.verifAdmin,utilisateur_controller.delete)
router.post("/utilisateur/creation",utilisateur_controller.create)
router.put("/utilisateur/update",middlewareUtilisateur.verifAdmin,utilisateur_controller.updateByID)

module.exports = router