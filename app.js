const express = require("express");
const mysql = require("mysql2");
const app = express();

// Middleware untuk mem-parsing JSON dalam request body
app.use(express.json());

// Konfigurasi koneksi ke Cloud SQL
const db = mysql.createPool({
  host: "34.101.112.6",
  user: "root",
  password: "&s*J1s%%&n5o)Cfx",
  database: "db-ujicoba", //
});

// Fungsi untuk menjalankan query MySQL
const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

app.get("/", (req, res) => {
  res.send("Welcome to Spice Track!!");
});
// POST register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required!" });
  }

  try {
    const existingUser = await executeQuery(
      "SELECT * FROM Users WHERE username = ?",
      [username]
    );
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Username already exists!" });
    }

    await executeQuery(
      "INSERT INTO Users (username, password, created_at, updated_at) VALUES (?, ?, NOW(), NOW())",
      [username, password]
    );

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error registering user", error: err.message });
  }
});

// POST login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required!" });
  }

  try {
    const user = await executeQuery(
      "SELECT * FROM Users WHERE username = ? AND password = ?",
      [username, password]
    );

    if (user.length === 0) {
      return res.status(401).json({ message: "Invalid username or password!" });
    }

    res.json({ message: `Hello, ${username}. Welcome to Spice Track!.` });
  } catch (err) {
    res.status(500).json({ message: "Error logging in", error: err.message });
  }
});

// POST edit profile
app.post("/edit-profile", async (req, res) => {
  const { id_user, newUsername, newPassword } = req.body;

  if (!id_user || (!newUsername && !newPassword)) {
    return res.status(400).json({
      message:
        "User ID and at least one new field (newUsername or newPassword) are required!",
    });
  }

  try {
    const user = await executeQuery("SELECT * FROM Users WHERE id_user = ?", [
      id_user,
    ]);
    if (user.length === 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    if (newUsername) {
      await executeQuery(
        "UPDATE Users SET username = ?, updated_at = NOW() WHERE id_user = ?",
        [newUsername, id_user]
      );
    }

    if (newPassword) {
      await executeQuery(
        "UPDATE Users SET password = ?, updated_at = NOW() WHERE id_user = ?",
        [newPassword, id_user]
      );
    }

    res.json({ message: "Profile updated successfully!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: err.message });
  }
});

// POST logout
app.post("/logout", (req, res) => {
  res.json({ message: "You have been logged out successfully!" });
});

// GET all herbs
app.get("/herbs", async (req, res) => {
  try {
    const herbs = await executeQuery("SELECT * FROM Herbs", []);
    res.json(herbs);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching herbs", error: err.message });
  }
});

// GET single herb by ID
app.get("/herbs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const herb = await executeQuery("SELECT * FROM Herbs WHERE id_herbs = ?", [
      id,
    ]);
    if (herb.length === 0)
      return res.status(404).json({ message: "Herb not found" });
    res.json(herb[0]);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching herb", error: err.message });
  }
});

// GET search herbs by tags or title
app.get("/herbs/search", async (req, res) => {
  try {
    const { query } = req.query;
    const herbs = await executeQuery(
      "SELECT * FROM Herbs WHERE title LIKE ? OR tags LIKE ?",
      [`%${query}%`, `%${query}%`]
    );
    res.json(herbs);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error searching herbs", error: err.message });
  }
});

// POST add herb to favorites
app.post("/favorites", async (req, res) => {
  try {
    const { id_user, id_herbs } = req.body;
    await executeQuery(
      "INSERT INTO Scans (id_user, id_herbs, scan_date) VALUES (?, ?, NOW())",
      [id_user, id_herbs]
    );
    res.status(201).json({ message: "Herb added to favorites!" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error adding herb to favorites", error: err.message });
  }
});

// POST remove herb from favorites
app.post("/favorites/remove", async (req, res) => {
  try {
    const { id_user, id_herbs } = req.body;
    await executeQuery("DELETE FROM Scans WHERE id_user = ? AND id_herbs = ?", [
      id_user,
      id_herbs,
    ]);
    res.json({ message: "Herb removed from favorites!" });
  } catch (err) {
    res.status(500).json({
      message: "Error removing herb from favorites",
      error: err.message,
    });
  }
});

// Jalankan server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
