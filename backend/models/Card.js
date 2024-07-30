const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    type: {
        type: String,
        enum: ['property', 'cash', 'action'],
        required: true
    },
    name: { type: String, required: true },
    value: { type: Number },
    propertyType: {
        type: String,
        enum: ['solid', 'wild', 'dual']
    },
    color: {
        type: String,
        enum: ['brown', 'light-blue', 'magenta', 'orange', 'red', 'yellow', 'green', 'dark-blue']
    },
    action: { type: String } // applicable for action cards
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;