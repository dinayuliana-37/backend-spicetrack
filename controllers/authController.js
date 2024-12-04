const { executeQuery } = require("../modules/database");

const register = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
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
};
const login = async (req, res) => {
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
};

module.exports = { register, login };