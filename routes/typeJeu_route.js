const express = require('express');
const router = express.Router();
const typeJeu_controller = require("../controllers/typeJeu_controller")

router.get("/",typeJeu_controller.selectTypeJeux)
router.post("/typeJeu/info",typeJeu_controller.selectTypeJeuById)
router.delete("/typeJeu/delete",typeJeu_controller.deleteTypeJeu)
router.post("/typeJeu/creation",typeJeu_controller.createTypeJeu)
router.put("/typeJeu/update",typeJeu_controller.updateTypeJeuById)

module.exports = router