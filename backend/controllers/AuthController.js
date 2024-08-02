require('dotenv').config();
const bcrypt = require('bcryptjs');

// Hashes my selected password
const ACCESS_PASSWORD_HASH = process.env.ACCESS_PASSWORD_HASH;

// Hashes the user's password and compares it to my hash
const verifyPassword = async (password, req) => {
  const isValid = await bcrypt.compare(password, ACCESS_PASSWORD_HASH);
  if (isValid) {
    req.session.authenticated = true;
  }
  return isValid;
};

module.exports = {
  verifyPassword,
};