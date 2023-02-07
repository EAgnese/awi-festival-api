const db = require("../config/bd");

function getJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Jeu"
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
    getJeux,
}