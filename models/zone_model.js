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

module.exports ={
    getZones,
}