const connection = require("../config/bd");
const db = require("../config/bd");

async function getJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Jeu"
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
async function getJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Jeu WHERE idJeu = ${db.escape(id)}`
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
async function deleteJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Jeu WHERE idJeu = ${db.escape(id)}`
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

async function createJeu(idType,nom){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Jeu VALUES (NULL, ${db.escape(idType)},${db.escape(nom)})`
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

async function updateJeu(idType,nom,id){
    return new Promise((resolve, reject) => {
        sql = `UPDATE Jeu SET idType = ${db.escape(idType)}, nom = ${db.escape(nom)} WHERE idJeu = ${db.escape(id)}`
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
async function getAllInformationsJeu(id){
    return new Promise((resolve, reject) => {
        sql = `SELECT Jeu.idJeu, Jeu.idType, Jeu.nom AS nomJeu, AttributionJeu.idZone, TypeJeu.nom AS nomType FROM awi_festival.Jeu INNER JOIN awi_festival.AttributionJeu ON Jeu.idJeu = AttributionJeu.idJeu INNER JOIN awi_festival.TypeJeu ON TypeJeu.idType = Jeu.idType WHERE Jeu.idJeu = ${db.escape(id)}`
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
    getJeux,
    getJeu,
    deleteJeu,
    createJeu,
    updateJeu,
    getAllInformationsJeu
}