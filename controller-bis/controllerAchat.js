const sql = require("../config/bd.js")

exports.selectAll = (req,res) =>{
  sql.query('SELECT * FROM achat', (err, rows) => {
    if (err) return res.status(400).send({msg: 'Problème sélection des achats'})
    return res.status(200).send({msg: '', achats:rows})
  })
}
exports.createAchat = (req,res) =>{
  //calcul du nouvel id de la achat à insérer
  sql.query(`INSERT INTO achat VALUES (${sql.escape(req.body.idCommande)}, ${sql.escape(req.body.idVaisseau)}, ${sql.escape(req.body.quantite)})`,(err) => {
    if (err) return res.status(400).send({msg: 'Problème sélection des achats'})
    return res.status(200).send({msg: 'Ajout dans le panier réussi ! '})
  })
}
exports.deleteAchat = (req,res) =>{
  sql.query(`DELETE FROM achat WHERE idU = ${sql.escape(req.body.id)}`,(err, rows) => {
    if (err) return res.status(400).send({msg: 'Problème sélection des achats'})
    return res.status(200).send({msg: 'Suppression achat !'})
  })
}




