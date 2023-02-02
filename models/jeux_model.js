const db = require("../config/bd");

function getJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM Jeu"
        console.log(sql)
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
            }
            else{
                console.log("bd envoie données sur JEU")
                resolve(result);
            }
        });
    });
}

module.exports ={
    getJeux,
}