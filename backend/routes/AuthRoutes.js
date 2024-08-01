// AuthRoutes.js

const express = require('express');
const router = express.Router();
const session = require('express-session');
const AuthController = require('../controllers/AuthController'); // Adjust the path as necessary

router.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true if using HTTPS
}));

router.post('/verify-password', (req, res) => {
  console.log('endpoint hit')
  const { password } = req.body;
  const isValid = AuthController.verifyPassword(password);
  if (isValid) {
    req.session.authenticated = true;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

module.exports = router;