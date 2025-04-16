const mongoose = require('mongoose');
const config = require('./config');
const dbService = require('../services/dbService');

/**
 * PUBLIC_INTERFACE
 * Connect to MongoDB database with fallback to mock data
 * @returns {Promise<boolean>} Connection success status
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    dbService.setDbAvailability(true);
    return true;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.warn('Falling back to mock data mode');
    dbService.setDbAvailability(false);
    return false;
  }
};

module.exports = connectDB;
