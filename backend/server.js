const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const gameRoutes = require('./routes/GameRoutes');
const playerRoutes = require('./routes/PlayerRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/monopoly-deal');

app.use('/api/games', gameRoutes);
app.use('/api/players', playerRoutes);

io.on('connection', (socket) => {
  console.log('New client connected');
  // Handle socket events here
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Trying another port...`);
    server.listen(0); // 0 means a random available port
  } else {
    console.error(err);
  }
});