const db = require("../config/bd");

async function getZones(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Zone"
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
async function getZone(id){
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Zone WHERE idZone = ${db.escape(id)}`
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
async function deleteZone(id){
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM Zone WHERE idZone = ${db.escape(id)}`
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

async function createZone(nom){
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO Zone VALUES (NULL, ${db.escape(nom)})`
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

async function updateZone(nom,id){
    return new Promise((resolve, reject) => {
        const sql = `UPDATE Zone SET nom = ${db.escape(nom)} WHERE idZone = ${db.escape(id)}`
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
    getZones,
    getZone,
    deleteZone,
    createZone,
    updateZone,
}