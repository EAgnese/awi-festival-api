const db = require("../config/bd");

function getTypesJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM TypeJeu"
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
    getTypesJeux,
}