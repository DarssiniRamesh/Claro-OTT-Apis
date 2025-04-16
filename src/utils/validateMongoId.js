const mongoose = require('mongoose');

/**
 * PUBLIC_INTERFACE
 * Validate if a string is a valid MongoDB ObjectId
 * @param {string} id - ID to validate
 * @returns {boolean} True if valid, false otherwise
 */
const validateMongoId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

module.exports = validateMongoId;
