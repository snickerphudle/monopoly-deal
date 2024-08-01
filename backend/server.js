const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const session = require('express-session');

const authRoutes = require('./routes/AuthRoutes');
// const gameRoutes = require('./routes/GameRoutes');
// const playerRoutes = require('./routes/PlayerRoutes');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.use('/api', authRoutes);
// app.use('/api/games', gameRoutes);
// app.use('/api/players', playerRoutes);

io.on('connection', (socket) => {
    console.log('New client connected');
    // Handle socket events here
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => { });

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Trying another port...`);
        server.listen(65243);
        const address = server.address();
        console.log(`Server is listening on port ${address.port}`);
    } else {
        console.error(err);
    }
});