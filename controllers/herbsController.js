const { getAllHerbs, getHerbById, searchHerbs } = require('../models/herbsModel');

const getHerbs = async (req, res) => {
  try {
    const herbs = await getAllHerbs();
    res.json(herbs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching herbs', error: err.message });
  }
};

const getHerb = async (req, res) => {
  const { id } = req.params;

  try {
    const herb = await getHerbById(id);
    if (herb.length === 0) return res.status(404).json({ message: 'Herb not found' });

    res.json(herb[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching herb', error: err.message });
  }
};

const searchHerb = async (req, res) => {
  const { query } = req.query;

  try {
    const herbs = await searchHerbs(query);
    res.json(herbs);
  } catch (err) {
    res.status(500).json({ message: 'Error searching herbs', error: err.message });
  }
};

module.exports = { getHerbs, getHerb, searchHerb };
