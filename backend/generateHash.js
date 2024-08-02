const bcrypt = require('bcryptjs');

const password = 'davidqtranrealestate2024!';
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log(hashedPassword); // Store this in your .env file as ACCESS_PASSWORD_HASH