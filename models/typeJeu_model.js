const db = require("../config/bd");

async function getTypeJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM TypeJeu"
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
async function getTypeJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM TypeJeu WHERE idType = ${db.escape(id)}`
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
async function deleteTypeJeu(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM TypeJeu WHERE idType = ${db.escape(id)}`
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

async function createTypeJeu(nom){
    return new Promise((resolve, reject) => {
        //cryptage mdp
        const sql = `INSERT INTO TypeJeu VALUES (NULL, ${db.escape(nom)})`
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

async function updateTypeJeu(nom,id){
    return new Promise((resolve, reject) => {
        sql = `UPDATE TypeJeu SET nom = ${db.escape(nom)} WHERE idType = ${db.escape(id)}`
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

module.exports ={
    getTypeJeux,
    getTypeJeu,
    deleteTypeJeu,
    createTypeJeu,
    updateTypeJeu,
}