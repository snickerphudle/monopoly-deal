const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hand: { type: Array, required: true },
  properties: { type: Array, required: true },
  cash: { type: Array, required: true },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
