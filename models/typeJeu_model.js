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
function getTypeJeu(){
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
function deleteTypeJeu(){
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

function createTypeJeu(){
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

function updateTypeJeu(){
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

module.exports ={
    getTypeJeux,
    getTypeJeu,
    deleteTypeJeu,
    createTypeJeu,
    updateTypeJeu,
}