const db = require("../config/bd");

async function getTypeJeux(){
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
async function getTypeJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM TypeJeu WHERE idType = ${db.escape(id)}`
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
async function deleteTypeJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM TypeJeu WHERE idType = ${db.escape(id)}`
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

async function createTypeJeu(nom){
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

async function updateTypeJeu(id,nom){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE TypeJeu SET nom = ${db.escape(nom)} WHERE idType = ${db.escape(id)}`
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