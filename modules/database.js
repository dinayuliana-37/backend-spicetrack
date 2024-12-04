const mysql = require('mysql2');
require("dotenv").config()

// Konfigurasi koneksi ke database
const db = mysql.createPool({
  host: process.env.DB_HOST, // Alamat host (IP Cloud SQL)
  user: process.env.DB_USER, // Username database
  password: process.env.DB_PASSWORD, // Password database
  database: process.env.DB_NAME, // Nama database
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Fungsi eksekusi query MySQL
const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = { db, executeQuery };
