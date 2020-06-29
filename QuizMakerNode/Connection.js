    const config = {
        user: 'admin',
        password: 'LoQhDx0HN97&',
        server: 'quizmakerdb.cffqzqllixvr.af-south-1.rds.amazonaws.com', 
        database: 'QuizMakerDB',
        options: {
          enableArithAbort: true,
          encrypt: true
        },
        port: 1433
    };


const sql = require('mssql');
const poolPromise = new sql.ConnectionPool(config).connect();



module.exports = {
  sql, poolPromise
}