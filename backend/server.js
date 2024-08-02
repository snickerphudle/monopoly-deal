require('dotenv').config();

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const session = require('express-session');
const AWS = require('aws-sdk');


const authRoutes = require('./routes/authRoutes');
const checkAuthenticated = require('./middleware/checkAuthenticated');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6 * 60 * 60 * 1000, secure: false } // Set to true if using HTTPS, 6 hour session
}));

app.set('view engine', 'ejs'); // Ensure EJS is set as the view engine

app.use('/api', authRoutes);
// app.use('/api/games', checkAuthenticated, gameRoutes);
// app.use('/api/players', checkAuthenticated, playerRoutes);

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