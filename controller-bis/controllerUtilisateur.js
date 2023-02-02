const sql = require("../config/bd.js")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
require("dotenv").config()

exports.selectAll = (req,res) =>{
  sql.query('SELECT * FROM utilisateur', (err, rows) => {
    if (err) return res.status(400).send({msg: 'Problème sélection des utilisateurs'})
    return res.status(200).send({msg: '', utilisateurs:rows})
  })
}
exports.selectUtilisateurByID = (req,res) =>{
  sql.query(`SELECT * FROM utilisateur WHERE idU = ${sql.escape(req.body.id)}`,(err, rows) => {
    if (err) return res.status(400).send({msg: 'Problème pour la sélection'})
    return res.status(200).send({msg: '', utilisateur:rows})
  })
}
exports.updateByID = (req,res) =>{
  if (!req.body.pseudo || req.body.pseudo.length < 3) {
    return res.status(400).send({msg: 'Entrez un pseudo avec au moins 3 caractères'})
  }
  sql.query(`UPDATE utilisateur SET pseudo = ${sql.escape(req.body.pseudo)}, isAdmin = ${sql.escape(req.body.isAdmin)} WHERE idU = ${sql.escape(req.body.id)}`, function(err) {
    if (err) return res.status(400).send({msg: 'Problème de mise à jour utilisateur'})
    return res.status(200).send({msg: 'Mise à jour utilisateur !'})
  })
}
exports.deleteUtilisateur = (req,res) =>{
  sql.query(`DELETE FROM utilisateur WHERE idU = ${sql.escape(req.body.id)}`, (err) => {
    if (err) return res.status(400).send({msg: 'Problème suppression utilisateur'})
    return res.status(200).send({msg: 'Suppression utilisateur réussie !'})
  })
}
exports.connexion = (req,res) =>{
  sql.query(`SELECT * FROM utilisateur WHERE pseudo = ${sql.escape(req.body.pseudo)}`,(err, result) => {
    // utilisateur introuvable
    if (err) {
      return res.status(400).send({msg: 'Problème connexion utilisateur!'})
    }
    if (!result.length) {
      return res.status(404).send({msg: 'Pseudo ou mot de passe incorrect !'})
    }
    // verification du mdp hashé avec compare
    bcrypt.compare(req.body.mdp,result[0]['mdp'],(bErr, bResult) => {
      // mauvais mdp
      if (bErr) {
        return res.status(404).send({msg: 'Pseudo ou mot de passe incorrect !'})
      }
      if (bResult) {
        let token = jwt.sign({idU: result[0].idU,pseudo: result[0].pseudo,isAdmin: result[0].isAdmin},'KJI54!zyuhsu6353hdsdskhsz1!!fdj7EH1', {expiresIn: '7d'})
        return res.status(200).send({
          msg: 'Connexion réussie !',
          token,
          utilisateur: result[0]
        })
      }
      return res.status(404).send({msg: 'Pseudo ou mot de passe incorrect !'})
    })
  })
}
exports.inscription = (req, res, next) => {
  sql.query(`SELECT * FROM utilisateur WHERE LOWER(pseudo) = LOWER(${sql.escape(req.body.pseudo)})`,(err, result) => {
    if (err) {
      return res.status(400).send({msg: 'Problème pour chercher les utilisateurs dans la BD'})
    }
    if (result.length) {
      return res.status(400).send({msg: 'Le pseudo est déjà utilisé'})
    } 
    else {
      //hashage du mdp
      bcrypt.hash(req.body.mdp, 10, (err, hash) => {
        if (err) {
          return res.status(500).send({msg: 'Problème pour crypter le mdp'});
        } else {
          //creation id
          sql.query('SELECT MAX(idU) AS idUtilisateur FROM utilisateur',(err, rows) =>{
            if (err) return res.status(400).send({msg: 'Problème création identifiant utilisateur'})
            let id = rows[0].idUtilisateur+1
            sql.query(`INSERT INTO utilisateur (idU, pseudo, mdp, isAdmin) VALUES ('${id}', ${sql.escape(req.body.pseudo)}, ${sql.escape(hash)},${sql.escape(req.body.isAdmin)})`,(err, result) => {
                if (err) {
                  return res.status(400).send({msg: 'Problème ajout utilisateur'})
                }
                return res.status(200).send({msg: 'Inscription réussie !'})
              })
          })
        }
      })
    }
  })
}



