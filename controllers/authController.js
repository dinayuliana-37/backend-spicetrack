const users = []; // In-memory user storage (for simplicity, replace with DB in production)

// Register a new user
exports.register = (req, res) => {
  const { username, password } = req.body;
  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }
  const newUser = { username, password };
  users.push(newUser);
  res.status(201).json({ message: "User registered successfully" });
};

// Login user
exports.login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  // Add session or token logic here
  res.json({ message: "User logged in successfully" });
};

// Logout user
exports.logout = (req, res) => {
  // Invalidate session or token logic here
  res.json({ message: "User logged out successfully" });
};
