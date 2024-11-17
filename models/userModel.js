const users = [
  {
    username: "testUser",
    email: "testUser@example.com",
    password: "securePassword123", // Tambahkan password di sini
    updateProfile: updateProfile,
  },
];

// Menyimulasikan pencarian pengguna berdasarkan username
const findByUsername = (username) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.username === username);
    if (user) resolve(user);
    else reject("User not found");
  });
};

// Menyimulasikan pembaruan profil pengguna
function updateProfile(newProfileData) {
  // Pastikan password tidak diperbarui sembarangan kecuali eksplisit
  if (newProfileData.password) {
    throw new Error(
      "Password cannot be updated using updateProfile. Use a dedicated method."
    );
  }

  // Update profil (ini hanya simulasi, sesuaikan dengan database Anda)
  Object.assign(this, newProfileData); // Menggunakan `this` untuk memperbarui data pengguna
  return this; // Kembalikan pengguna yang sudah diperbarui
}

// Menyimulasikan pembaruan password pengguna
function updatePassword(newPassword) {
  if (!newPassword || newPassword.length < 8) {
    throw new Error("Password must be at least 8 characters long.");
  }
  this.password = newPassword; // Perbarui password
  return { message: "Password updated successfully" };
}

// Tambahkan metode pembaruan password ke setiap pengguna
users.forEach((user) => {
  user.updatePassword = updatePassword;
});

module.exports = { findByUsername };
