const db = require("../config/bd");

function getZones(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Zone"
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
function getZone(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Zone"
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
function deleteZone(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Zone"
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

function createZone(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Zone"
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

function updateZone(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Zone"
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
    getZones,
    getZone,
    deleteZone,
    createZone,
    updateZone,
}