const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config/config');
const connectDB = require('./config/db');
const routes = require('./routes');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const rateLimiter = require('./middleware/rateLimiter');

// Connect to database with fallback to mock data
connectDB().then(isConnected => {
  if (!isConnected) {
    console.log('Running in fallback mode with mock data');
  }
});

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(morgan('dev')); // Request logging

// Custom logger middleware
const logger = require('./middleware/logger');
app.use(logger);

// Rate limiter middleware
app.use(rateLimiter);

// Mount routes
app.use('/', routes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Claro OTT API',
    version: '1.0.0'
  });
});

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running in ${config.env} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  process.exit(1);
});
