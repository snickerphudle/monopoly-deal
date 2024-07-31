const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const propertySetSchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'Player', required: true }, // Reference to the player who owns the set
    propertySet: {
        type: String,
        enum: ['brown', 'light-blue', 'magenta', 'orange', 'red', 'yellow', 'green', 'dark-blue'],
        required: true
    },
    properties: [{ type: Schema.Types.ObjectId, ref: 'Card' }], // References to property cards in the set
    houses: { type: Number, default: 0 }, // Number of houses on the set
    hotels: { type: Number, default: 0 } // Number of hotels on the set
});

const PropertySet = mongoose.model('PropertySet', propertySetSchema);
module.exports = PropertySet;
