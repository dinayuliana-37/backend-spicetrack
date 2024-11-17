const User = require("../models/userModel"); // Pastikan Anda sudah memiliki model User yang menghubungkan dengan database

const editProfile = (req, res) => {
  const { username, newProfileData } = req.body;

  // Validasi input
  if (!username || !newProfileData) {
    return res
      .status(400)
      .send({ message: "Username and profile data are required" });
  }

  // Mencari pengguna berdasarkan username
  User.findByUsername(username)
    .then((user) => {
      if (!user) {
        // Jika pengguna tidak ditemukan
        return res.status(404).send({ message: "User not found" });
      }

      // Pembaruan profil pengguna
      const updatedUser = user.updateProfile(newProfileData);

      // Mengembalikan respons jika profil berhasil diperbarui
      res
        .status(200)
        .send({ message: "Profile updated successfully", user: updatedUser });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Error finding user" });
    });
};

module.exports = { editProfile };
