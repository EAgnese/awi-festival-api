const express = require('express');
const router = express.Router();
const typeJeu_controller = require("../controllers/typeJeu_controller")

router.get("/",middlewareUtilisateur.verifAdmin,typeJeu_controller.select_typesJeux)
router.post("/typeJeu/info",middlewareUtilisateur.verifAdmin,typeJeu_controller.selectByID)
router.delete("/typeJeu/delete",middlewareUtilisateur.verifAdmin,typeJeu_controller.delete)
router.post("/typeJeu/creation",middlewareUtilisateur.verifAdmin,typeJeu_controller.create)
router.put("/typeJeu/update",middlewareUtilisateur.verifAdmin,typeJeu_controller.updateByID)

module.exports = router