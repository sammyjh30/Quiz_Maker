const config = require('../config');

const sql = require('mssql');
const poolPromise = new sql.ConnectionPool(config.db).connect();

module.exports = {
  sql, poolPromise
}