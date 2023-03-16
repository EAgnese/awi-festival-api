const db = require("../config/bd");

async function getAttributionsJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM AttributionJeu"
        try { 
            db.query(sql, [], (err, result,connection) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getJeuNonSelectByIdZone(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Jeu WHERE idJeu NOT IN (SELECT idJeu FROM AttributionJeu WHERE idZone = ${db.escape(id)}) `
        try { 
            db.query(sql, [], (err, result,connection) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getJeuByIdZone(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Jeu WHERE idJeu IN (SELECT idJeu FROM AttributionJeu WHERE idZone = ${db.escape(id)})`
        try { 
            db.query(sql, [], (err, result,connection) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getAttributionByZoneJeu(idZone,idJeu){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM AttributionJeu WHERE idZone = ${db.escape(idZone)} AND idJeu = ${db.escape(idJeu)}`
        try { 
            db.query(sql, [], (err, result,connection) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function getZoneByIdJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT idZone FROM AttributionJeu WHERE idJeu = ${db.escape(id)}`
        try { 
            db.query(sql, [], (err, result,connection) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    });
}
async function deleteAttributionJeu(idZone,idJeu){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM AttributionJeu WHERE idZone = ${db.escape(idZone)} AND idJeu = ${db.escape(idJeu)}`
        try { 
            db.query(sql, [], (err, result,connection) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    })
}

async function createAttributionJeu(idZone,idJeu){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO AttributionJeu VALUES (${db.escape(idZone)},${db.escape(idJeu)})`
        try { 
            db.query(sql, [], (err, result,connection) => {
                if (err){ 
                    reject(err) 
                } else{ 
                    resolve(result)
                } 
            }) 
        } catch (error) { 
            reject(error) 
        }
    })
}

module.exports ={
    getAttributionsJeux,
    getZoneByIdJeu,
    getJeuByIdZone,
    getJeuNonSelectByIdZone,
    getAttributionByZoneJeu,
    deleteAttributionJeu,
    createAttributionJeu,
}