// middleware/checkAuthenticated.js

const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

async function checkAuthenticated(req, res, next) {
    if (!req.session || !req.session.token) {
        return res.redirect('/login');
    }

    const params = {
        AccessToken: req.session.token
    };

    try {
        await cognito.getUser(params).promise();
        next();
    } catch (error) {
        console.error('Cognito error:', error);
        res.redirect('/login');
    }
}

module.exports = checkAuthenticated;