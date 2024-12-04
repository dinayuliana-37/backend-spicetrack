const mysql = require('mysql2');

const db = mysql.createPool({
  socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`, 
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = { db };
