const db = require("../config/bd");

function getUtilisateurs(){
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
function getUtilisateur(id){
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
function deleteUtilisateur(id){
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

function createUtilisateur(nom,prenom,mail,mdp){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Utilisateur VALUES (NULL, ${db.escape(nom)},${db.escape(prenom)},${db.escape(mail)},${db.escape(mdp)},${db.escape(0)})`
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

function updateUtilisateur(nom,prenom,mail,mdp,isAdmin,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Utilisateur SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, mail = ${db.escape(mail)}, mdp = ${db.escape(mdp)}, isAdmin = ${db.escape(isAdmin)} WHERE idUtilisateur= ${db.escape(id)}`
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

function connexionUtilisateur(email,mdp){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Utilisateur WHERE email = ${db.escape(email)} AND mdp = ${db.escape(mdp)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
            }
            else if (!result.length) {
                console.error("Identifiant ou mot de passe incorrect !")
            }
            else{
                console.log("Connexion réussie !")
                /*
                // verification du mdp hashé avec compare
                bcrypt.compare(mdp,result[0]['mdp'],(bErr, bResult) => {
                    // mauvais mdp
                    if (bErr) {
                        console.log("Email ou mot de passe incorrect !")
                    }
                    if (bResult) {
                        let token = jwt.sign({idU: result[0].idU,pseudo: result[0].pseudo,isAdmin: result[0].isAdmin},'KJI54!zyuhsu6353hdsdskhsz1!!fdj7EH1', {expiresIn: '7d'})
                        console.log("Connexion réussie !")
                    }
                })*/
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