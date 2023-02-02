const sql = require("../config/bd.js")

exports.selectAll = (req,res) =>{
  sql.query('SELECT * FROM categorie',(err, rows) => {
    if (err) return res.status(400).send({msg: 'Problème sélection des catégories'})
    return res.status(200).send({msg: '', categories:rows})
  })
}
exports.selectCategorieByID = (req,res) =>{
  sql.query(`SELECT * FROM categorie WHERE idCategorie = ${sql.escape(req.body.id)}`,(err, rows) => {
    if (err) return res.status(400).send({msg: err})
    return res.status(200).send({msg: '', categorie:rows})
  })
}
exports.updateByID = (req,res) =>{
  sql.query(`SELECT * FROM categorie WHERE LOWER(nomCategorie) = LOWER(${sql.escape(req.body.nom)})`,(err,result) => {
    if (result.length) {
      return res.status(400).send({msg: 'Le nom est déjà utilisé'})
    } 
    else {
      sql.query(`UPDATE categorie SET nomCategorie = ${sql.escape(req.body.nom)} WHERE idCategorie = ${sql.escape(req.body.id)}`,(err) => {
        if (err) return res.status(400).send({msg: 'Problème de mise à jour de la categorie'})
        return res.status(200).send({msg: 'Mise à jour categorie !'})
      })
    }
  })
}
exports.createCategorie = (req, res) => {
  sql.query(`SELECT * FROM categorie WHERE LOWER(nomCategorie) = LOWER(${sql.escape(req.body.nom)})`,(err,result) => {
    if (result.length) {
      return res.status(400).send({msg: 'Le nom est déjà utilisé'})
    } 
    else {
      //calcul du nouvel id du categorie à insérer
      sql.query('SELECT MAX(idCategorie) AS idC FROM categorie',(err, rows) =>{
      if (err) return res.status(400).send({msg: 'problème identifiant categorie'})
        let id = rows[0].idC+1
        sql.query(`INSERT INTO categorie VALUES (${sql.escape(id)},${sql.escape(req.body.nom)})`,(err2) => {
          if (err2) return res.status(400).send({msg: 'problème création categorie'})
          return res.status(200).send({msg: 'Création categorie réussie !',idCategorie:id})
        })
      })
    }
  })
}
exports.deleteCategorie = (req,res) =>{
  sql.query(`DELETE FROM categorie WHERE idCategorie = ${sql.escape(req.body.id)}`,(err) => {
    if (err) return res.status(400).send({msg: 'Problème suppression categorie'})
    return res.status(200).send({msg: 'Suppression categorie réussie !'})
  })
}
exports.selectCategorieByIdVaisseau = (req,res) =>{
  sql.query(`SELECT * FROM categorie WHERE idCategorie IN ( SELECT idCategorie FROM categorise WHERE idVaisseau = ${sql.escape(req.body.id)})`,(err, rows) => {
    if (err) return res.status(400).send({msg: err})
    return res.status(200).send({msg: '', categories:rows})
  })
}

exports.deleteCategorieByIDVaisseau = (req,res) =>{
  sql.query(`DELETE FROM categorise WHERE idCategorie = ${sql.escape(req.body.idCategorie)} AND idVaisseau = ${sql.escape(req.body.idVaisseau)}`,(err) => {
    if (err) return res.status(400).send({msg: 'Problème suppression categorie liaison'})
    return res.status(200).send({msg: 'Suppression categorie liaison réussie !'})
  })
}




