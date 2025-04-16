const jwt = require('jsonwebtoken');
const config = require('../config/config');

/**
 * PUBLIC_INTERFACE
 * Generate a JWT token for a user
 * @param {string} id - User ID
 * @returns {string} JWT token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn
  });
};

module.exports = generateToken;
