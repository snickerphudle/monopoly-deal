const Game = require('../models/Game');
const Player = require('../models/Player');
const PropertySet = require('../models/PropertySet'); // Import the PropertySet model
const Card = require('../models/Card'); // Import the Card model

// Draw a card from the deck
exports.drawCard = async (req, res) => {
  const { gameId, playerId } = req.params;
  
  try {
    const game = await Game.findById(gameId);
    const player = await Player.findById(playerId);

    if (game.deck.length === 0) {
      return res.status(400).json({ message: 'The deck is empty' });
    }

    const drawnCard = game.deck.pop();
    player.hand.push(drawnCard);
    
    await game.save();
    await player.save();

    res.status(200).json({ message: 'Card drawn', card: drawnCard });
  } catch (err) {
    res.status(500).json({ message: 'Error drawing card', error: err });
  }
};

// Play a card
exports.playCard = async (req, res) => {
  const { gameId, playerId, cardId } = req.params;
  const { targetPlayerId } = req.body; // For action cards that target other players

  try {
    const game = await Game.findById(gameId);
    const player = await Player.findById(playerId);
    const card = await Card.findById(cardId);

    if (!player.hand.includes(cardId)) {
      return res.status(400).json({ message: 'Player does not have this card in hand' });
    }

    // Handle different card types
    switch (card.type) {
      case 'cash':
        player.cash.push(cardId);
        break;
      case 'property':
        player.properties.push(cardId);
        break;
      case 'action':
        // Handle action card logic, e.g., charging rent, swapping properties, etc.
        await handleActionCard(game, player, card, targetPlayerId);
        break;
      case 'rent':
        // Handle rent card logic
        await handleRentCard(game, player, card, targetPlayerId);
        break;
      default:
        return res.status(400).json({ message: 'Invalid card type' });
    }

    // Remove the card from player's hand and add to discard pile
    player.hand.pull(cardId);
    game.discardPile.push(cardId);

    await game.save();
    await player.save();

    res.status(200).json({ message: 'Card played', card: card });
  } catch (err) {
    res.status(500).json({ message: 'Error playing card', error: err });
  }
};

// Handle action card logic
async function handleActionCard(game, player, card, targetPlayerId) {
  // Implement specific action card logic here
  // For example, if the action card is "Deal Breaker":
  if (card.action === 'Deal Breaker') {
    const targetPlayer = await Player.findById(targetPlayerId);
    // Assume "Deal Breaker" steals a full property set from target player
    // Implement the stealing logic
  }
}

// Handle rent card logic
async function handleRentCard(game, player, card, targetPlayerId) {
  // Implement rent card logic here
  // For example, charging rent from target player
  const targetPlayer = await Player.findById(targetPlayerId);
  // Implement the rent charging logic
}

// Function to play a property card
async function playPropertyCard(playerId, cardId) {
    const card = await Card.findById(cardId);

    if (card.type !== 'property') {
        throw new Error('Card is not a property card');
    }

    let propertySet = await PropertySet.findOne({
        owner: playerId,
        propertySet: card.propertySet
    });

    if (!propertySet) {
        propertySet = new PropertySet({
            owner: playerId,
            propertySet: card.propertySet,
            properties: [cardId]
        });
    } else {
        propertySet.properties.push(cardId);
    }

    await propertySet.save();
}

// Function to add a building to a property set
async function addBuildingToSet(playerId, propertySetType, buildingType) {
    if (buildingType !== 'house' && buildingType !== 'hotel') {
        throw new Error('Invalid building type');
    }

    const propertySet = await PropertySet.findOne({
        owner: playerId,
        propertySet: propertySetType
    });

    if (!propertySet) {
        throw new Error('Property set does not exist');
    }

    if (buildingType === 'house') {
        propertySet.houses += 1;
    } else if (buildingType === 'hotel') {
        propertySet.hotels += 1;
    }

    await propertySet.save();
}

module.exports = {
    playPropertyCard,
    addBuildingToSet
};
