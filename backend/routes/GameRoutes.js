const express = require('express');
const router = express.Router();
const gameController = require('../controllers/GameController');

router.post('/:gameId/:playerId/draw', gameController.drawCard);
router.post('/:gameId/:playerId/play/:cardId', gameController.playCard);

// Route to play a property card
router.post('/playPropertyCard', async (req, res) => {
    const { playerId, cardId } = req.body;
    try {
        await playPropertyCard(playerId, cardId);
        res.status(200).send('Property card played successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Route to add houses or hotels
router.post('/addBuilding', async (req, res) => {
    const { playerId, propertySetType, buildingType } = req.body;
    try {
        await addBuildingToSet(playerId, propertySetType, buildingType);
        res.status(200).send('Building added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;