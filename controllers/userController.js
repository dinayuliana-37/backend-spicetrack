const { findUserById, updateUserProfile } = require('../models/userModel');

const editProfile = async (req, res) => {
  const { id_user, newUsername, newPassword } = req.body;

  if (!id_user || (!newUsername && !newPassword)) {
    return res.status(400).json({ message: 'User ID and at least one new field (newUsername or newPassword) are required!' });
  }

  try {
    const user = await findUserById(id_user);
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found!' });
    }

    await updateUserProfile(id_user, newUsername, newPassword);
    res.json({ message: 'Profile updated successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile', error: err.message });
  }
};

const logout = (req, res) => {
  // Logout logic (e.g., invalidating tokens) would go here if using authentication.
  res.json({ message: 'You have been logged out successfully!' });
};

module.exports = { editProfile, logout };
