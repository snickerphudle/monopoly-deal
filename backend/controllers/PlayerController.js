const Player = require('../models/Player');
const Game = require('../models/Game');

exports.addPlayer = async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    const game = await Game.findById(req.body.game);
    game.players.push(player._id);
    await game.save();
    res.status(201).send(player);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Add other player controller functions here
