const db = require("../config/bd");

function getBenevoles(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM BENEVOLE"
        console.log(sql)
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                console.log("err")
            }
            else{
                console.log("bd envoie données sur BENEVOLE")
                resolve(result);
            }
        });
    });
}

module.exports ={
    getBenevoles,
}