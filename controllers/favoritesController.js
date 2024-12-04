const { executeQuery } = require("../modules/database")

// const getFavorites = async (req, res) => {
//   try {
//     const herbs = await executeQuery("SELECT * FROM Herbs", []);
//     res.json(herbs);
//   } catch (err) {
//     res
//       .status(500)
//       .json({ message: "Error fetching herbs", error: err.message });
//   }
// };

const addFavorite = async (req, res) => {
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
};

const removeFavorite = async (req, res) => {
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
};

module.exports = { addFavorite, removeFavorite };
