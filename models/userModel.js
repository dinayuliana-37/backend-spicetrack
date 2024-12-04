const { executeQuery } = require('./db');

const findUserByUsername = (username) => {
  return executeQuery('SELECT * FROM Users WHERE username = ?', [username]);
};

const createUser = (username, password) => {
  return executeQuery(
    'INSERT INTO Users (username, password, created_at, updated_at) VALUES (?, ?, NOW(), NOW())',
    [username, password]
  );
};

const findUserById = (id_user) => {
  return executeQuery('SELECT * FROM Users WHERE id_user = ?', [id_user]);
};

const updateUserProfile = (id_user, username, password) => {
  const fields = [];
  const values = [];

  if (username) {
    fields.push('username = ?');
    values.push(username);
  }
  if (password) {
    fields.push('password = ?');
    values.push(password);
  }

  values.push(id_user);
  const query = `UPDATE Users SET ${fields.join(', ')}, updated_at = NOW() WHERE id_user = ?`;

  return executeQuery(query, values);
};

module.exports = { findUserByUsername, createUser, findUserById, updateUserProfile };
