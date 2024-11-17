const mysql = require("mysql2");

// Konfigurasi koneksi MySQL
const connection = mysql.createConnection({
  host: "localhost", // Host database
  user: "root", // Username default untuk XAMPP
  password: "", // Kosongkan jika tanpa password
  database: "db_my_spice_app", // Nama database Anda
});

// Menghubungkan ke database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Contoh query untuk membaca data dari tabel 'barang'
connection.query("SELECT * FROM users", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(
    "result: ",
    result.map((users) => {
      console.log(users);
      return users;
    })
  );
});

// Ekspor koneksi agar dapat digunakan di file lain
module.exports = connection;
