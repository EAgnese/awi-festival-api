const db = require("../config/bd");

async function getAttributionsJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM AttributionJeu"
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function getJeuByIdZone(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Jeu WHERE idJeu NOT IN (SELECT idJeu FROM AttributionJeu WHERE idZone = ${db.escape(id)}) `
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function getAttributionJeuByIdZone(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT idJeu FROM AttributionJeu WHERE idZone = ${db.escape(id)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function getAttributionJeuByZoneJeu(idZone,idJeu){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM AttributionJeu WHERE idZone = ${db.escape(idZone)} AND idJeu = ${db.escape(idJeu)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function getAttributionJeuByIdJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT idZone FROM AttributionJeu WHERE idJeu = ${db.escape(id)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        });
    });
}
async function deleteAttributionJeu(idZone,idJeu){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AttributionJeu WHERE idZone = ${db.escape(idZone)} AND idJeu = ${db.escape(idJeu)}`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        })
    })
}

async function createAttributionJeu(idZone,idJeu){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AttributionJeu VALUES (${db.escape(idZone)},${db.escape(idJeu)})`
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                reject(err)
            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports ={
    getAttributionsJeux,
    getAttributionJeuByIdJeu,
    getAttributionJeuByIdZone,
    getJeuByIdZone,
    getAttributionJeuByZoneJeu,
    deleteAttributionJeu,
    createAttributionJeu,
}