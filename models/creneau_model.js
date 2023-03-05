const db = require("../config/bd");

async function getCreneaux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Creneau"
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
    getCreneaux,
}