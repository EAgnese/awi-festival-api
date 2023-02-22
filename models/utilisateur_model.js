const db = require("../config/bd");
const bcrypt = require("bcryptjs");

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

async function createUtilisateur(nom,prenom,email,mdp){
    //cryptage mdp
    bcrypt.genSalt(10, function (err , salt) {
        if(err) return console.log(err)
      bcrypt.hash(mdp, salt, function (err, hash) {
        if (err) {
          return console.log('Impossible de crypter le mot de passe');
        }
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO Utilisateur VALUES (NULL, ${db.escape(nom)},${db.escape(prenom)},${db.escape(email)},${db.escape(hash)},${db.escape(0)})`
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
        const sql = `UPDATE Utilisateur SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, email = ${db.escape(email)}, mdp = ${db.escape(mdp)}, isAdmin = ${db.escape(isAdmin)} WHERE idUtilisateur= ${db.escape(id)}`
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

async function connexionUtilisateur(email,mdp){
    return new Promise((resolve, reject) => {
        const sql = `SELECT mdp FROM Utilisateur WHERE email = ${db.escape(email)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
            }
            else if (!result.length) {
                console.error("Identifiant ou mot de passe incorrect !")
            }
            else{
                // verification du mdp hashé avec compare
                bcrypt.compare(mdp,result[0]['mdp'],(bErr, bResult) => {
                    // mauvais mdp
                    if (bErr) {
                        console.log("Email ou mot de passe incorrect !")
                    }
                    if (bResult) {
                        //let token = jwt.sign({idU: result[0].idU,pseudo: result[0].pseudo,isAdmin: result[0].isAdmin},'KJI54!zyuhsu6353hdsdskhsz1!!fdj7EH1', {expiresIn: '7d'})
                        console.log("Connexion réussie !")
                    }
                })
                resolve(result);
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