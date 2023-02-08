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
        const sql = `INSERT INTO Utilisateur VALUES (NULL, ${db.escape(nom)},${db.escape(prenom)},${db.escape(mail)},${db.escape(mdp)})`
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

function updateUtilisateur(nom,prenom,mail,mdp,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Utilisateur SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, mail = ${db.escape(mail)}, mdp = ${db.escape(mdp)} WHERE idUtilisateur= ${db.escape(id)}`
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

module.exports ={
    getUtilisateurs,
    getUtilisateur,
    deleteUtilisateur,
    createUtilisateur,
    updateUtilisateur,
}