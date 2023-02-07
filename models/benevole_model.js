const db = require("../config/bd");

function getBenevoles(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Benevole"
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
function getBenevole(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Benevole"
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
function deleteBenevole(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Benevole"
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

function createBenevole(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Benevole"
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

function updateBenevole(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Benevole"
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
    getBenevoles,
    getBenevole,
    deleteBenevole,
    createBenevole,
    updateBenevole,
}