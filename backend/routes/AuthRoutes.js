// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

const USER_POOL_ID = 'your_user_pool_id';
const CLIENT_ID = 'your_app_client_id';
const ACCESS_CODE = 'your_access_code';

router.get('/login', (req, res) => {
    res.render('login'); // Render login page
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: CLIENT_ID,
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password
        }
    };

    try {
        const data = await cognito.initiateAuth(params).promise();
        req.session.token = data.AuthenticationResult.AccessToken;
        res.redirect('/');
    } catch (error) {
        console.error('Cognito error:', error);
        res.status(401).send('Invalid credentials');
    }
});

router.get('/signup', (req, res) => {
    res.render('signup'); // Render signup page
});

router.post('/signup', async (req, res) => {
    const { email, password, accessCode } = req.body;

    if (accessCode !== ACCESS_CODE) {
        return res.status(401).send('Invalid access code');
    }

    const params = {
        ClientId: CLIENT_ID,
        Username: email,
        Password: password,
        UserAttributes: [
            {
                Name: 'email',
                Value: email
            }
        ]
    };

    try {
        await cognito.signUp(params).promise();
        res.redirect('/login');
    } catch (error) {
        console.error('Cognito error:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;