const express = require('express');
const router = express.Router();
const typeJeu_controller = require("../controllers/typeJeu_controller")

router.get("/",typeJeu_controller.selectTypeJeux)
router.get("/:id",typeJeu_controller.selectTypeJeuById)
router.delete("/delete",typeJeu_controller.deleteTypeJeu)
router.post("/create",typeJeu_controller.createTypeJeu)
router.put("/update",typeJeu_controller.updateTypeJeuById)

module.exports = router