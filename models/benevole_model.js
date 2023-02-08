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
function getBenevole(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Benevole WHERE idBenevole = ${db.escape(id)}`
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
function deleteBenevole(id){
    console.log("test")
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Benevole WHERE idBenevole = ${db.escape(id)}`
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

function createBenevole(nom,prenom,email){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Benevole VALUES (NULL, ${db.escape(nom)},${db.escape(prenom)},${db.escape(email)})`
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

function updateBenevole(nom,prenom,email,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Benevole SET nom = ${db.escape(nom)} , prenom = ${db.escape(prenom)}, email = ${db.escape(email)} WHERE idBenevole= ${db.escape(id)}`
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