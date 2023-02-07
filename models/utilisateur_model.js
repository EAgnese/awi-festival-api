const db = require("../config/bd");

function getUtilisateurs(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Utilisateur"
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
    getUtilisateurs,
}