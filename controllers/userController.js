const { findUserById, updateUserProfile } = require('../models/userModel');

const editProfile = async (req, res) => {
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
};

const logout = (req, res) => {
  res.json({ message: "You have been logged out successfully!" });
};

module.exports = { editProfile, logout };
