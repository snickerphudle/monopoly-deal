const Game = require('../models/Game');
const Player = require('../models/Player');

exports.createGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(201).send(game);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Add other game controller functions here
