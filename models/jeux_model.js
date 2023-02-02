const db = require("../config/bd");

function getJeux(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM JEU"
        console.log(sql)
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                console.log("err")
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