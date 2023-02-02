const sql = require("../config/bd.js")

exports.selectAll = (req,res) =>{
  sql.query('SELECT * FROM commande', (err, rows) => {
    if (err) return res.status(400).send({msg: 'Problème sélection des commandes'})
    return res.status(200).send({msg: '', commandes:rows})
  })
}
exports.selectCommandeByID = (req,res) =>{
  sql.query(`SELECT * FROM commande WHERE idU = ${sql.escape(req.body.id)} `,(err, rows)=> {
    if (err) return res.status(400).send({msg: 'Problème sélection info commande'})
    return res.status(200).send({msg: '', commandes:rows})
  })
}
exports.updateByID = (req,res) =>{
  sql.query(`UPDATE commande SET pseudo = "${sql.escape(req.body.pseudo)}", mdp = "${sql.escape(req.body.mdp)}", isAdmin = ${sql.escape(req.body.isAdmin)} WHERE idU = ${sql.escape(req.body.id)}`, (err) => {
    if (err) return res.status(400).send({msg: 'Problème modification de la commande'})
    return res.status(200).send({msg: 'Mise à jour commande !'})
  })
}
exports.createCommande = (req,res) =>{
  //calcul du nouvel id de la commande à insérer
  sql.query(`SELECT MAX(idCommande) AS idCommande FROM commande`,(err, rows) =>{
    if (err) return res.status(400).send({msg: 'problème identifiant commande'})
      let id = rows[0].idCommande+1
      sql.query(`INSERT INTO commande VALUES (${sql.escape(id)}, ${sql.escape(req.body.idU)}, ${sql.escape(req.body.prixTotal)},${sql.escape(req.body.dateCommande)})`,(err2) => {
        if (err2) return res.status(400).send({msg: 'problème insertion catégorie pour le vaisseau'})
        return res.status(200).send({msg: 'Commande créee !', idCommande:id})
      })
  })
}
exports.deletecommande = (req,res) =>{
  sql.query(`DELETE FROM commande WHERE idU = ${sql.escape(req.body.id)}`,(err) => {
    if (err) return res.status(400).send({msg: 'Problème suppression de la commande'})
    return res.status(200).send({msg: 'Suppression commande réussie !'})
  })
}




