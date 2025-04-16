const jwt = require('jsonwebtoken');
const config = require('../config/config');
const dbService = require('../services/dbService');
const mockData = require('../utils/mockData');

/**
 * PUBLIC_INTERFACE
 * Middleware to protect routes that require authentication
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const protect = (req, res, next) => {
  let token;

  // Check if token exists in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Get token from header
    token = req.headers.authorization.split(' ')[1];
    
    // Check if database is available
    const isDbAvailable = dbService.getDbAvailability();
    
    if (isDbAvailable) {
      // Normal mode - verify token with JWT
      try {
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = { id: decoded.id };
        next();
      } catch (error) {
        console.error('JWT verification error:', error);
        return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
      }
    } else {
      // Fallback mode - handle mock tokens
      try {
        // Try standard verification first
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = { id: decoded.id };
        next();
      } catch (error) {
        console.log('Standard JWT verification failed in fallback mode, checking for mock token');
        
        // In fallback mode, try to decode without verification
        try {
          const decoded = jwt.decode(token);
          
          if (decoded && decoded.id) {
            // Check if this ID exists in mock users
            const mockUser = mockData.users.find(user => user.id === decoded.id);
            
            if (mockUser) {
              console.log('Mock token accepted in fallback mode for user:', mockUser.id);
              req.user = { id: mockUser.id };
              return next();
            }
          }
          
          // If we get here, the token didn't match any mock users
          console.error('Mock token validation failed: User not found');
          return res.status(401).json({ success: false, message: 'Not authorized, invalid mock token' });
        } catch (decodeError) {
          console.error('Token decode error in fallback mode:', decodeError);
          return res.status(401).json({ success: false, message: 'Not authorized, invalid token format' });
        }
      }
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token' });
  }
};

/**
 * PUBLIC_INTERFACE
 * Check if a token is a valid mock token (for testing purposes)
 * @param {string} token - JWT token to validate
 * @returns {boolean} Whether the token is valid in mock mode
 */
const isMockTokenValid = (token) => {
  try {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.id) return false;
    
    // Check if this ID exists in mock users
    const mockUser = mockData.users.find(user => user.id === decoded.id);
    return !!mockUser;
  } catch (error) {
    return false;
  }
};

module.exports = { protect, isMockTokenValid };
