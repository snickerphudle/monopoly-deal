const express = require('express');
const playerController = require('../controllers/PlayerController');

const router = express.Router();

router.post('/add', playerController.addPlayer);
// Add other player routes here

router.post('/set-username', (req, res) => {
    if (!req.session.authenticated) {
      return res.status(403).json({ success: false });
    }
  
    const { username } = req.body;
  
    // Check if the username is already taken (you need to implement this logic)
    const isUsernameTaken = false; // Implement your logic here
  
    if (isUsernameTaken) {
      return res.json({ success: false });
    }
  
    req.session.username = username;
    res.json({ success: true });
  });
  

module.exports = router;
