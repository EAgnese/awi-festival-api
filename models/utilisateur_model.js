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
function getUtilisateur(){
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
function deleteUtilisateur(){
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

function createUtilisateur(){
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

function updateUtilisateur(){
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

module.exports ={
    getUtilisateurs,
    getUtilisateur,
    deleteUtilisateur,
    createUtilisateur,
    updateUtilisateur,
}