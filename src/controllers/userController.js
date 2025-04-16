const User = require('../models/User');
const dbService = require('../services/dbService');
const generateToken = require('../utils/generateToken');

/**
 * PUBLIC_INTERFACE
 * Register a new user
 * @route POST /api/users/register
 * @access Public
 */
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const users = await dbService.findAll(User, { email });
    const existingUser = users.find(user => user.email === email);
    
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with that email already exists'
      });
    }
    
    // Create new user
    const userData = { name, email, password, role: 'user' };
    const user = await dbService.create(User, userData);
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        id: user.id || user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUBLIC_INTERFACE
 * Login user
 * @route POST /api/users/login
 * @access Public
 */
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const users = await dbService.findAll(User, { email });
    const user = users.find(user => user.email === email);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
    
    // In a real app, we would verify the password here
    // For mock data, we'll assume it's correct
    
    // Generate token (use User model method if available, otherwise use utility function)
    let token;
    if (dbService.getDbAvailability() && typeof user.getSignedJwtToken === 'function') {
      token = user.getSignedJwtToken();
    } else {
      // Generate a valid JWT token even in fallback mode
      const userId = user.id || user._id;
      token = generateToken(userId);
    }
    
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user.id || user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUBLIC_INTERFACE
 * Get user header info
 * @route GET /user/startheaderinfo
 * @access Private
 */
const getUserHeaderInfo = async (req, res, next) => {
  try {
    // In a real application, we would get the user ID from the authenticated request
    // For demonstration, we'll use a fixed ID
    const userId = '1';
    const user = await dbService.findById(User, userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    // Additional user info that might come from other sources
    const userInfo = {
      id: user.id || user._id,
      name: user.name,
      email: user.email,
      avatar: 'https://example.com/avatar.jpg',
      notifications: 3,
      subscription: 'premium',
      lastLogin: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      data: userInfo
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserHeaderInfo
};
