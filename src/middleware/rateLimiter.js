/**
 * PUBLIC_INTERFACE
 * Simple rate limiter middleware
 * Limits requests from the same IP
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */

// Store for tracking request counts
const requestCounts = {};

// Reset interval in milliseconds (1 minute)
const RESET_INTERVAL = 60 * 1000;

// Maximum requests per interval
const MAX_REQUESTS = 100;

const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  
  // Initialize or increment request count
  requestCounts[ip] = requestCounts[ip] ? requestCounts[ip] + 1 : 1;
  
  // Check if limit exceeded
  if (requestCounts[ip] > MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests, please try again later.'
    });
  }
  
  next();
};

// Reset counters periodically
setInterval(() => {
  for (const ip in requestCounts) {
    delete requestCounts[ip];
  }
}, RESET_INTERVAL);

module.exports = rateLimiter;
