const { getAllHerbs, getHerbById, searchHerbs } = require('../models/herbsModel');
const { executeQuery } = require("../modules/database")

const getHerbs = async (req, res) => {
  try {
    const herbs = await executeQuery("SELECT * FROM Herbs", []);
    res.json(herbs);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching herbs", error: err.message });
  }
};

const getHerb = async (req, res) => {
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
};

const searchHerb = async (req, res) => {
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
};

module.exports = { getHerbs, getHerb, searchHerb };
