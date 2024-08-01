// AuthRoutes.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController'); // Adjust the path as necessary

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