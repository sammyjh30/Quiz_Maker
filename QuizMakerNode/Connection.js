    const config = {
        user: 'sqlserver',
        password: 'LoQhDx0HN97&',
        server: '35.189.127.206', 
        database: 'QuizMakerDB',
        options: {
          enableArithAbort: true,
          encrypt: true
        },
    };


const sql = require('mssql');
const poolPromise = new sql.ConnectionPool(config).connect();



module.exports = {
  sql, poolPromise
}