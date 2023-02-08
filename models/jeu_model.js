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
function getJeu(){
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
function deleteJeu(){
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

function createJeu(){
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

function updateJeu(){
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

module.exports ={
    getJeux,
    getJeu,
    deleteJeu,
    createJeu,
    updateJeu,
}