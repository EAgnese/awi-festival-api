const sql = require("../config/bd.js")

exports.selectAll = (req,res) =>{
  sql.query('SELECT * FROM vaisseau', (err, rows)=> {
    if (err) return res.status(400).send({msg: 'Problème sélection des vaisseaux'})
    return res.status(200).send({msg: '', vaisseaux:rows})
  })
}
exports.selectVaisseauByID = (req,res) =>{
  sql.query(`SELECT * FROM vaisseau WHERE idVaisseau = ${sql.escape(req.body.id)}`,(err, rows) => {
    if (err) return res.status(400).send({msg: err})
    return res.status(200).send({msg: '', vaisseau:rows})
  })
}
exports.updateByID = (req,res) =>{
  sql.query(`SELECT * FROM vaisseau WHERE LOWER(nomV) = LOWER(${sql.escape(req.body.nom)})`,(err2,result) => {
    if (result.length && !req.body.nomIdentique) {
      return res.status(400).send({msg: 'Le nom est déjà utilisé'})
    }
    else{
      if(req.body.nomCategorie !==''){
        //verification liaison pas existante 
        sql.query(`SELECT * FROM categorise WHERE idVaisseau = ${sql.escape(req.body.id)} AND idCategorie = ${sql.escape(req.body.idC)}`,(err4,result2) => {
          if (result2.length) {
            return res.status(400).send({msg: 'Le vaisseau a déjà cette catégorie ! '})
          }
        })
        //liaison catégorie et nouveau vaisseau
        sql.query(`INSERT INTO categorise VALUES (${sql.escape(req.body.id)},${sql.escape(req.body.idC)})`,(err3) => {
          if (err3) return res.status(400).send({msg: 'problème liaison catégorie pour le vaisseau'})
        })
      }
      else{
        //update données vaisseau
        if(req.body.prix >= 0){
          sql.query(`UPDATE vaisseau SET nomV = ${sql.escape(req.body.nom)} , img = ${sql.escape(req.body.img)}, prixUnitaire = ${sql.escape(req.body.prix)} WHERE idVaisseau = ${sql.escape(req.body.id)}`, (err) => {
            if (err) return res.status(400).send({msg: 'Problème de mise à jour du vaisseau'})
            return res.status(200).send({msg: 'Mise à jour vaisseau !'})
          })
        }else{
          return res.status(400).send({msg: 'Le prix unitaire du vaisseau est négatif ! '})
        }
      }
    } 
  })
}
exports.createVaisseau = (req, res) => {
  console.log("CREATION VAISSEAU")
  sql.query(`SELECT * FROM vaisseau WHERE LOWER(nomV) = LOWER(${sql.escape(req.body.nom)})`,(err,result) => {
    if (result.length) {
      return res.status(400).send({msg: 'Le nom est déjà utilisé'})
    } 
    else {
      //calcul du nouvel id du vaisseau à insérer
      sql.query('SELECT MAX(idVaisseau) AS idVaisseau FROM vaisseau',(err, rows) =>{
      if (err) return res.status(400).send({msg: 'problème identifiant vaisseau'})
        let id = rows[0].idVaisseau+1
        console.log("MOI ETRE LA")
        if(req.body.prix >= 0){
          sql.query(`INSERT INTO vaisseau VALUES (${sql.escape(id)},${sql.escape(req.body.nom)},${sql.escape(req.body.img)}, ${sql.escape(req.body.prix)})`,(err2) => {
            if (err2) return res.status(400).send({msg: 'problème création vaisseau'})
            //liaison catégorie et nouveau vaisseau
            sql.query(`INSERT INTO categorise VALUES (${sql.escape(id)},${sql.escape(req.body.idCategorie)})`,(err3) => {
              if (err3) return res.status(400).send({msg: 'problème insertion catégorie pour le vaisseau'})
              return res.status(200).send({msg: 'Création vaisseau réussie !'})
            })
          })
        }else{
          return res.status(400).send({msg: 'Le prix unitaire du vaisseau est négatif ! '})
        }
      })
    }
  })
}
exports.deleteVaisseau = (req,res) =>{
  sql.query(`DELETE FROM vaisseau WHERE idVaisseau = ${sql.escape(req.body.id)}`,(err) => {
    if (err) return res.status(400).send({msg: 'Problème suppression vaisseau'})
    return res.status(200).send({msg: 'Suppression vaisseau réussie !'})
  })
}



