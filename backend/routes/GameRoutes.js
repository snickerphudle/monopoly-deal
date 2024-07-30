const express = require('express');
const gameController = require('../controllers/GameController');

const router = express.Router();

router.post('/create', gameController.createGame);
// Add other game routes here

module.exports = router;
