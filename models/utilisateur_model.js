const db = require("../config/bd");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
require("dotenv").config()

async function getUtilisateurs(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Utilisateur"
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}
async function getUtilisateur(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE idUtilisateur = ${db.escape(id)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}
async function deleteUtilisateur(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Utilisateur WHERE idUtilisateur = ${db.escape(id)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                resolve(result);
            }
        });
    });
}

async function createUtilisateur(nom,prenom,email,mdp,isAdmin){
    //cryptage mdp
    bcrypt.genSalt(10, function (err , salt) {
        if(err) return console.log(err)
      bcrypt.hash(mdp, salt, function (err, hash) {
        if (err) {
          return console.log('Impossible de crypter le mot de passe');
        }
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO Utilisateur VALUES (NULL, ${db.escape(nom)},${db.escape(prenom)},${db.escape(email)},${db.escape(hash)},${db.escape(isAdmin)})`
            db.query(sql, [], (err, result) => {
                if (err){
                    console.error(err.message);
                }
                else{
                    resolve(result);
                }
            });
        });
      })
    })
}

async function updateUtilisateur(nom,prenom,email,mdp,isAdmin,id){
    return new Promise((resolve, reject) => {
        let sql = ""
        if(mdp == undefined || mdp == null){
            sql = `UPDATE Utilisateur SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, email = ${db.escape(email)}, isAdmin = ${db.escape(isAdmin)} WHERE idUtilisateur= ${db.escape(id)}`
            db.query(sql, [], (err, result) => {
                if (err){
                    console.error(err.message);
                }
                else{
                    resolve(result);
                }
            });
        }else{
            bcrypt.genSalt(10, function (err , salt) {
                if(err) return console.log(err)
                bcrypt.hash(mdp, salt, function (err, hash) {
                    if (err) {
                    return console.log('Impossible de crypter le mot de passe');
                    }
                    sql = `UPDATE Utilisateur SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, email = ${db.escape(email)}, mdp = ${db.escape(mdp)}, isAdmin = ${db.escape(isAdmin)} WHERE idUtilisateur= ${db.escape(id)}`
                    db.query(sql, [], (err, result) => {
                        if (err){
                            console.error(err.message);
                        }
                        else{
                            resolve(result);
                        }
                    });
                })
            })
        }
    });
}

async function connexionUtilisateur(email,mdp){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE email = ${db.escape(email)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.log("COCUCOCU")
                console.error(err.message);
            }
            else if (!result.length) {
                console.error("Identifiant ou mot de passe incorrect !")
            }
            else{
                // verification du mdp hashé avec compare
                bcrypt.compare(mdp,result[0].mdp,(bErr, bResult) => {
                    // mauvais mdp
                    if (bErr) {
                        console.log("Email ou mot de passe incorrect !")
                    }
                    if (bResult) {
                        //creation token 
                        try{
                            const token = jwt.sign({ idUtilisateur: result[0]['idUtilisateur'], isAdmin: result[0]['isAdmin']}, process.env.SECRET_KEY, {expiresIn: '2 days'})
                            console.log("Connexion réussie !")
                            resolve(token);
                        }catch(err){
                            console.log(err)
                            console.error("Erreur lors de la connexion avec le token !")
                        }   
                    }
                })
            }
        });
    });
}

module.exports ={
    getUtilisateurs,
    getUtilisateur,
    deleteUtilisateur,
    createUtilisateur,
    updateUtilisateur,
    connexionUtilisateur
}