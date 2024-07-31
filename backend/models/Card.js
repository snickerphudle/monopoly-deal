const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    type: {
        type: String,
        enum: ['property', 'cash', 'action', 'house', 'hotel'], // Added 'house' and 'hotel'
        required: true
    },
    name: { type: String, required: true },
    cardDescription: {
        type: String,
        default: 'No description provided',
        required: true
    },
    value: { type: Number }, // cash value
    propertyType: {
        type: String,
        enum: ['solid', 'wild', 'dual']
    },
    propertySet: {
        type: String,
        enum: ['brown', 'light-blue', 'magenta', 'orange', 'red', 'yellow', 'green', 'dark-blue', 'railroad', 'utility']
    },
    // Add a new field to specify whether the card is a house or hotel
    isBuilding: {
        type: Boolean,
        default: false // Default to false for non-building cards
    }
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
