const db = require("../config/bd");

function getJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Jeu"
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
function getJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Jeu WHERE idJeu = ${db.escape(id)}`
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
function deleteJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Jeu WHERE idJeu = ${db.escape(id)}`
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
function createJeu(idType, nom){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Jeu VALUES (NULL, ${db.escape(idType)},${db.escape(nom)})`
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
function updateJeu(id,idType,nom){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Jeu SET idType = ${db.escape(idType)} , nom = ${db.escape(nom)} WHERE idJeu = ${db.escape(id)}`
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
    getJeux,
    getJeu,
    deleteJeu,
    createJeu,
    updateJeu,
}