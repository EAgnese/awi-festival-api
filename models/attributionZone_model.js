const db = require("../config/bd");

async function getAttributionsZone(){
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
async function getAttributionZone(idZone,idUtilisateur,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `SELECT Z.nom as nomZone, U.nom, U.prenom, C.dateDebut, C.dateFin \
        FROM attributionZone as A, Creneau as C, Utilisateur as U, Zone as Z \
        where A.idZone = Z.idZone AND A.idUtilisateur = U.idUtilisateur AND A.idCreneau = C.idCreneau\
        AND idZone = ${db.escape(idZone)} AND idUtilisateur = ${db.escape(idUtilisateur)} AND idCreneau = ${db.escape(idCreneau)}`
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
async function deleteAttributionZone(idZone,idUtilisateur,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM attributionZone WHERE idZone = ${db.escape(idZone)} AND idUtilisateur = ${db.escape(idUtilisateur)} AND idCreneau = ${db.escape(idCreneau)}`
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
async function createAttributionZone(idZone,idUtilisateur,idCreneau){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO attributionZone VALUES (${db.escape(idZone)},${db.escape(idUtilisateur)},${db.escape(idCreneau)})`
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
// c'est un update d'une clé primaire donc jsp trop comment le gérer pour l'instant

// async function updateAttributionZone(idZone,idUtilisateur,idCreneau){
//     return new Promise((resolve, reject) => {   
//         const sql = `UPDATE attributionZone SET idZone = ${db.escape(idZone)} , idUtilisateur = ${db.escape(idUtilisateur)} WHERE idCreneau = ${db.escape(idCreneau)}`
//         db.query(sql, [], (err, result) => {
//             if (err){
//                 console.error(err.message);
//                 reject(err)
//             }
//             else{
//                 resolve(result);
//             }
//         });
//     });
// }

module.exports ={
    getAttributionsZone,
    getAttributionZone,
    deleteAttributionZone,
    createAttributionZone,
    //updateAttributionZone,
}