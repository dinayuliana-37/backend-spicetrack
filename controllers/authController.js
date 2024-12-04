const { findUserByUsername, createUser } = require('../models/userModel');

const register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required!' });
  }

  try {
    const existingUser = await findUserByUsername(username);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Username already exists!' });
    }

    await createUser(username, password);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required!' });
  }

  try {
    const user = await findUserByUsername(username);

    if (user.length === 0 || user[0].password !== password) {
      return res.status(401).json({ message: 'Invalid username or password!' });
    }

    res.json({ message: `Hello, ${username}. You are logged in.` });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

module.exports = { register, login };
