const db = require("../config/bd");

async function getAttributions(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT Z.nom as nomZone, U.nom, U.prenom, C.dateDebut, C.dateFin \
                    FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
                    where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau"
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
async function getAttribution(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Attribution WHERE idAttribution = ${db.escape(id)}`
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
async function deleteAttribution(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Attribution WHERE idAttribution = ${db.escape(id)}`
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
async function createAttribution(idType, nom){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Attribution VALUES (NULL, ${db.escape(idType)},${db.escape(nom)})`
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
async function updateAttribution(id,idType,nom){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Attribution SET idType = ${db.escape(idType)} , nom = ${db.escape(nom)} WHERE idAttribution = ${db.escape(id)}`
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

module.exports ={
    getAttributions,
    getAttribution,
    deleteAttribution,
    createAttribution,
    updateAttribution,
}