const db = require("../config/bd");

function getTypeJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM TypeJeu"
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
function getTypeJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM TypeJeu WHERE idTypeJeu = ${db.escape(id)}`
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
function deleteTypeJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM TypeJeu WHERE idTypeJeu = ${db.escape(id)}`
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

function createTypeJeu(nom){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO TypeJeu VALUES (NULL, ${db.escape(nom)})`
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

function updateTypeJeu(id,nom){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE TypeJeu SET nom = ${db.escape(nom)} WHERE idTypeJeu= ${db.escape(id)}`
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
    getTypeJeux,
    getTypeJeu,
    deleteTypeJeu,
    createTypeJeu,
    updateTypeJeu,
}