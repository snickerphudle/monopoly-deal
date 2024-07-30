const express = require('express');
const playerController = require('../controllers/PlayerController');

const router = express.Router();

router.post('/add', playerController.addPlayer);
// Add other player routes here

module.exports = router;
