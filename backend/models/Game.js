const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    deck: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    discardPile: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
    turn: { type: Number, default: 0 },
    settings: {
        cardsInUse: [String],
        cardsCount: { type: Map, of: Number },
        winCondition: { type: Number }
    },
    state: {
        phase: { type: String, default: 'draw' },
        actionsLeft: { type: Number, default: 3 }
    }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
