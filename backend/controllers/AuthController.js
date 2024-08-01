require('dotenv').config();

// AuthControllers.js
const ACCESS_PASSWORD = process.env.ACCESS_PASSWORD;

// AuthController.js
const verifyPassword = (password) => {
  return password === ACCESS_PASSWORD;
};

module.exports = {
  verifyPassword,
};

module.exports = {
  verifyPassword,
};
