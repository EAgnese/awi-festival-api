const db = require("../config/bd");

function getAffectations(){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM GAMES"
        console.log(sql)
        db.query(sql, [], (err, result) => {
            if (err){
                console.error(err.message);
                console.log("err")
            }
            else{
                console.log("bd envoie données sur GAMES")
                resolve(result);
            }
        });
    });
}

module.exports ={
    getAffectations,
}