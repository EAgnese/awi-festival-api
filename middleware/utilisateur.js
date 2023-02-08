const jwt = require('jsonwebtoken');
require("dotenv").config()

module.exports = {
  //verification du format du mdp
  verification: (req, res, next) => { 
    // pseudo > 3 caractères
    if (!req.body.pseudo || req.body.pseudo.length < 3) {
      return res.status(400).send({msg: 'Entrez un pseudo avec au moins 3 caractères'})
    }
    // mdp > 6 caractères
    if (!req.body.mdp || req.body.mdp.length < 6) {
      return res.status(400).send({msg: 'Entrez un mot de passe avec au moins 6 caractères'})
    }
    // mdp = mdp de vérification
    if (!req.body.mdpC || req.body.mdp != req.body.mdpC) {
      return res.status(400).send({msg: 'Les mots de passe ne correspondent pas'})
    }
    next()
  },
  //verification utilisateur connecté
  connecte: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token,'KJI54!zyuhsu6353hdsdskhsz1!!fdj7EH1')
      req.userData = decoded
      next()
    } catch (err) {
      return res.status(400).send({msg: 'Session invalide !'})
    }
  },// verif utilisateur admin 
  verifAdmin: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token,'KJI54!zyuhsu6353hdsdskhsz1!!fdj7EH1')
      req.userData = decoded
      if (req.userData.isAdmin === 1){
        next()
      }else{
        return res.status(400).send({msg: 'Utilisateur non admin'})
      }
    } catch (err) {
      return res.status(400).send({msg: 'Problème admin'})
    }
  }
}