const cards = [
    /* CASH */
    { name: '1 Dollar', type: 'cash', cardDescription: '1 Dollar Cash Card', value: 1 },
    { name: '2 Dollars', type: 'cash', cardDescription: '2 Dollars Cash Card', value: 2 },
    { name: '3 Dollars', type: 'cash', cardDescription: '3 Dollars Cash Card', value: 3 },
    { name: '4 Dollars', type: 'cash', cardDescription: '4 Dollars Cash Card', value: 4 },
    { name: '5 Dollars', type: 'cash', cardDescription: '5 Dollars Cash Card', value: 5 },
    { name: '10 Dollars', type: 'cash', cardDescription: '10 Dollars Cash Card', value: 10 },

    /* PROPERTIES */
    { name: 'Mediterranean Avenue', type: 'property', cardDescription: 'A standard brown property', value: 1, propertyType: 'solid', propertySet: 'brown' },
    { name: 'Baltic Avenue', type: 'property', cardDescription: 'A standard brown property', value: 1, propertyType: 'solid', propertySet: 'brown' },
    { name: 'Oriental Avenue', type: 'property', cardDescription: 'A standard light blue property', value: 1, propertyType: 'solid', propertySet: 'light-blue' },
    { name: 'Vermont Avenue', type: 'property', cardDescription: 'A standard light blue property', value: 1, propertyType: 'solid', propertySet: 'light-blue' },
    { name: 'Connecticut Avenue', type: 'property', cardDescription: 'A standard light blue property', value: 1, propertyType: 'solid', propertySet: 'light-blue' },
    { name: 'St. Charles Place', type: 'property', cardDescription: 'A standard magenta property', value: 2, propertyType: 'solid', propertySet: 'magenta' },
    { name: 'States Avenue', type: 'property', cardDescription: 'A standard magenta property', value: 2, propertyType: 'solid', propertySet: 'magenta' },
    { name: 'Virginia Avenue', type: 'property', cardDescription: 'A standard magenta property', value: 2, propertyType: 'solid', propertySet: 'magenta' },
    { name: 'St. James Place', type: 'property', cardDescription: 'A standard orange property', value: 2, propertyType: 'solid', propertySet: 'orange' },
    { name: 'Tennessee Avenue', type: 'property', cardDescription: 'A standard orange property', value: 2, propertyType: 'solid', propertySet: 'orange' },
    { name: 'New York Avenue', type: 'property', cardDescription: 'A standard orange property', value: 2, propertyType: 'solid', propertySet: 'orange' },
    { name: 'Kentucky Avenue', type: 'property', cardDescription: 'A standard red property', value: 3, propertyType: 'solid', propertySet: 'red' },
    { name: 'Indiana Avenue', type: 'property', cardDescription: 'A standard red property', value: 3, propertyType: 'solid', propertySet: 'red' },
    { name: 'Illinois Avenue', type: 'property', cardDescription: 'A standard red property', value: 3, propertyType: 'solid', propertySet: 'red' },
    { name: 'Atlantic Avenue', type: 'property', cardDescription: 'A standard yellow property', value: 3, propertyType: 'solid', propertySet: 'yellow' },
    { name: 'Ventnor Avenue', type: 'property', cardDescription: 'A standard yellow property', value: 3, propertyType: 'solid', propertySet: 'yellow' },
    { name: 'Marvin Gardens', type: 'property', cardDescription: 'A standard yellow property', value: 3, propertyType: 'solid', propertySet: 'yellow' },
    { name: 'Pacific Avenue', type: 'property', cardDescription: 'A standard green property', value: 4, propertyType: 'solid', propertySet: 'green' },
    { name: 'North Carolina Avenue', type: 'property', cardDescription: 'A standard green property', value: 4, propertyType: 'solid', propertySet: 'green' },
    { name: 'Pennsylvania Avenue', type: 'property', cardDescription: 'A standard green property', value: 4, propertyType: 'solid', propertySet: 'green' },
    { name: 'Park Place', type: 'property', cardDescription: 'A standard dark blue property', value: 4, propertyType: 'solid', propertySet: 'dark-blue' },
    { name: 'Boardwalk', type: 'property', cardDescription: 'A standard dark blue property', value: 4, propertyType: 'solid', propertySet: 'dark-blue' },
    { name: 'Reading Railroad', type: 'property', cardDescription: 'A standard railroad property', value: 2, propertyType: 'solid', propertySet: 'railroad' },
    { name: 'Pennsylvania Railroad', type: 'property', cardDescription: 'A standard railroad property', value: 2, propertyType: 'solid', propertySet: 'railroad' },
    { name: 'B. & O. Railroad', type: 'property', cardDescription: 'A standard railroad property', value: 2, propertyType: 'solid', propertySet: 'railroad' },
    { name: 'Short Line', type: 'property', cardDescription: 'A standard railroad property', value: 2, propertyType: 'solid', propertySet: 'railroad' },
    { name: 'Electric Company', type: 'property', cardDescription: 'A standard utility property', value: 2, propertyType: 'solid', propertySet: 'utility' },
    { name: 'Water Works', type: 'property', cardDescription: 'A standard utility property', value: 2, propertyType: 'solid', propertySet: 'utility' },

    /* WILD PROPERTIES */
    { name: 'Wild Property', type: 'property', cardDescription: 'A wild property that can be used as any color.', value: 1, propertyType: 'wild' },
    { name: 'Wild Property (Brown/Light Blue)', type: 'property', cardDescription: 'A wild property that can be used as either a Brown or Light Blue property.', value: 1, propertyType: 'dual', propertySet: null },
    { name: 'Wild Property (Magenta/Orange)', type: 'property', cardDescription: 'A wild property that can be used as either a Magenta or Orange property.', value: 1, propertyType: 'dual', propertySet: null },
    { name: 'Wild Property (Red/Yellow)', type: 'property', cardDescription: 'A wild property that can be used as either a Red or Yellow property.', value: 1, propertyType: 'dual', propertySet: null },
    { name: 'Wild Property (Green/Dark Blue)', type: 'property', cardDescription: 'A wild property that can be used as either a Green or Dark Blue property.', value: 1, propertyType: 'dual', propertySet: null },



    /* ACTIONS */
    { name: 'Deal Breaker', type: 'action', cardDescription: 'Steal a complete set of properties from any player.', value: 5 },
    { name: 'Debt Collector', type: 'action', cardDescription: 'Demand $5M from any player.', value: 3 },
    { name: 'Double the Rent', type: 'action', cardDescription: 'Double the rent on any property set.', value: 1 },
    { name: 'Forced Deal', type: 'action', cardDescription: 'Swap any one of your properties with any one of another player\'s properties.', value: 3 },
    { name: 'Hotel', type: 'action', cardDescription: 'Add a hotel to any complete property set with a house. Increase rent by $4', value: 4 },
    { name: 'House', type: 'action', cardDescription: 'Add a hotel to any complete property set. Increase rent by $3M', value: 3 },
    { name: 'It\'s My Birthday', type: 'action', cardDescription: 'All players give you $2M as a birthday gift.', value: 2 },
    { name: 'Just Say No', type: 'action', cardDescription: 'Stop any action card played against you.', value: 4 },
    { name: 'Pass Go', type: 'action', cardDescription: 'Draw 2 extra cards.', value: 1 },
    { name: 'Sly Deal', type: 'action', cardDescription: 'Steal a property from any player.', value: 3 },

    /* CUSTOM ACTIONS */
    { name: 'Triple Rent', type: 'action', cardDescription: 'When you play this card with a rent card, you can charge three times the rent value.', value: 3 },
    { name: 'Reverse Rent', type: 'action', cardDescription: 'Charge the rent back to the player who tried to collect it from you.', value: 3 },
    { name: 'Bank Robbery', type: 'action', cardDescription: 'Steal all the money from a player\'s bank.', value: 5 },
    { name: 'Skyscraper', type: 'action', cardDescription: 'Add 10M to a property set.', value: 5 },
    // { name: 'Property Insurance', type: 'action', cardDescription: 'Protect one of your properties from being stolen or taken away for the next three turns.', value: 3 },
    // { name: 'Rent Freeze', type: 'action', cardDescription: 'Prevent a player from collecting rent for the next two turns.', value: 3 },
    // { name: 'Auction', type: 'action', cardDescription: 'Choose 1 property to go up for auction.', value: 2 },
    // { name: 'Rent Discount', type: 'action', cardDescription: 'Pay half the rent.', value: 2 },
    // { name: 'Property Magnet', type: 'action', cardDescription: 'Draw the top three property cards from the deck and keep one, returning the other two to the bottom of the deck.', value: 4 },
    // { name: 'Lottery', type: 'action', cardDescription: 'Draw 5 cards. Keep all money cards. Shuffle the other cards back into the deck.', value: 3 },
    { name: 'Gentrification', type: 'action', cardDescription: 'Discard any number of properties. Choose a property. That property\’s rent is increased by (2 x number of properties discarded).', value: 4 },
    { name: 'HOA Regulation', type: 'action', cardDescription: 'Remove someone’s played property and make them return it to their hand.', value: 3 },
    { name: 'Landlord\'s Special', type: 'action', cardDescription: 'Player chooses a color. All properties and sets of that color have their value cut in half (rounded down to the nearest whole million).', value: 2 },
    { name: 'Refinance', type: 'action', cardDescription: 'Choose a property or property set. Value drops 2M per property but you get the difference in cash.', value: 3 },
    { name: 'Housing Market Crash', type: 'action', cardDescription: 'Everyone except you discards 1 property.', value: 4 },
    // { name: 'Rich Uncle', type: 'action', cardDescription: 'Get a free property.', value: 3 },
    { name: 'Subletting', type: 'action', cardDescription: 'Choose another player to pay rent for you (cannot be the same player who charged you rent).', value: 2 },
    // { name: 'DQT Real Estate', type: 'action', cardDescription: 'Sell a property or property set for double its value', value: 5 },
    // { name: 'Zoning Restrictions', type: 'action', cardDescription: 'You can\'t build houses, hotels, or skyscrapers on a set.', value: 3 },
    // { name: 'Eviction Notice', type: 'action', cardDescription: 'Choose a player. Their turn is skipped next round.', value: 3 }


];

module.exports = cards;