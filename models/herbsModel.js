const { executeQuery } = require('./db');

const getAllHerbs = () => {
  return executeQuery('SELECT * FROM Herbs', []);
};

const getHerbById = (id) => {
  return executeQuery('SELECT * FROM Herbs WHERE id_herbs = ?', [id]);
};

const searchHerbs = (query) => {
  return executeQuery(
    'SELECT * FROM Herbs WHERE title LIKE ? OR tags LIKE ?',
    [`%${query}%`, `%${query}%`]
  );
};

module.exports = { getAllHerbs, getHerbById, searchHerbs };
