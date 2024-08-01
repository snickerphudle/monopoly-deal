// lobbyController.js
const express = require('express');
const router = express.Router();
const lobbyService = require('./services/lobbyService');

router.post('/create-lobby', async (req, res) => {
  const username = req.session.username;
  const lobbyCode = await lobbyService.createLobby(username);
  res.json({ success: true, code: lobbyCode });
});

router.post('/join-lobby', async (req, res) => {
  const { code } = req.body;
  const username = req.session.username;
  const result = await lobbyService.joinLobby(code, username);
  res.json(result);
});

module.exports = router;
