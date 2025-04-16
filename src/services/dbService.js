/**
 * Database Service
 * Provides a layer of abstraction for database operations with fallback to mock data
 */

const mockData = require('../utils/mockData');

// Global flag to track database availability
let isDbAvailable = false;

/**
 * PUBLIC_INTERFACE
 * Set the database availability status
 * @param {boolean} status - Whether the database is available
 */
const setDbAvailability = (status) => {
  isDbAvailable = status;
  if (!status) {
    console.log('Database unavailable - using mock data');
  } else {
    console.log('Database connected - using MongoDB');
  }
};

/**
 * PUBLIC_INTERFACE
 * Get the database availability status
 * @returns {boolean} Whether the database is available
 */
const getDbAvailability = () => {
  return isDbAvailable;
};

/**
 * Get mock data for a specific model
 * @param {string} modelName - Name of the model (lowercase, plural)
 * @returns {Array} Array of mock data objects
 */
const getMockData = (modelName) => {
  switch (modelName.toLowerCase()) {
    case 'asset':
    case 'assets':
      return mockData.assets;
    case 'metadata':
      return mockData.metadata;
    case 'navigation':
      return mockData.navigation;
    case 'user':
    case 'users':
      return mockData.users;
    default:
      return [];
  }
};

/**
 * Find a mock item by ID
 * @param {Array} items - Array of mock items
 * @param {string} id - ID to find
 * @returns {Object|null} Found item or null
 */
const findMockById = (items, id) => {
  return items.find(item => item.id === id) || null;
};

/**
 * PUBLIC_INTERFACE
 * Find all documents for a model
 * @param {Object} model - Mongoose model
 * @param {Object} query - Query object
 * @param {Object} options - Query options
 * @returns {Promise<Array>} Array of documents
 */
const findAll = async (model, query = {}, options = {}) => {
  try {
    if (isDbAvailable) {
      return await model.find(query, null, options);
    } else {
      // Use mock data when database is unavailable
      const modelName = model.modelName.toLowerCase();
      return getMockData(modelName);
    }
  } catch (error) {
    console.error(`Error in findAll operation: ${error.message}`);
    // Fallback to mock data on error
    const modelName = model.modelName.toLowerCase();
    return getMockData(modelName);
  }
};

/**
 * PUBLIC_INTERFACE
 * Find a document by ID
 * @param {Object} model - Mongoose model
 * @param {string} id - Document ID
 * @returns {Promise<Object|null>} Found document or null
 */
const findById = async (model, id) => {
  try {
    if (isDbAvailable) {
      return await model.findById(id);
    } else {
      // Use mock data when database is unavailable
      const modelName = model.modelName.toLowerCase();
      const items = getMockData(modelName);
      return findMockById(items, id);
    }
  } catch (error) {
    console.error(`Error in findById operation: ${error.message}`);
    // Fallback to mock data on error
    const modelName = model.modelName.toLowerCase();
    const items = getMockData(modelName);
    return findMockById(items, id);
  }
};

/**
 * PUBLIC_INTERFACE
 * Create a new document
 * @param {Object} model - Mongoose model
 * @param {Object} data - Document data
 * @returns {Promise<Object>} Created document
 */
const create = async (model, data) => {
  try {
    if (isDbAvailable) {
      return await model.create(data);
    } else {
      // In mock mode, just return the data with an ID
      // This is simplified and doesn't actually persist the data
      return { 
        ...data, 
        id: Math.random().toString(36).substring(2, 15),
        createdAt: new Date() 
      };
    }
  } catch (error) {
    console.error(`Error in create operation: ${error.message}`);
    // Return a mock object on error
    return { 
      ...data, 
      id: Math.random().toString(36).substring(2, 15),
      createdAt: new Date() 
    };
  }
};

/**
 * PUBLIC_INTERFACE
 * Update a document by ID
 * @param {Object} model - Mongoose model
 * @param {string} id - Document ID
 * @param {Object} data - Update data
 * @returns {Promise<Object|null>} Updated document or null
 */
const updateById = async (model, id, data) => {
  try {
    if (isDbAvailable) {
      return await model.findByIdAndUpdate(id, data, { new: true });
    } else {
      // In mock mode, just return the combined data
      // This is simplified and doesn't actually persist the update
      return { ...data, id, updatedAt: new Date() };
    }
  } catch (error) {
    console.error(`Error in updateById operation: ${error.message}`);
    // Return a mock object on error
    return { ...data, id, updatedAt: new Date() };
  }
};

/**
 * PUBLIC_INTERFACE
 * Delete a document by ID
 * @param {Object} model - Mongoose model
 * @param {string} id - Document ID
 * @returns {Promise<Object|null>} Deleted document or null
 */
const deleteById = async (model, id) => {
  try {
    if (isDbAvailable) {
      return await model.findByIdAndDelete(id);
    } else {
      // In mock mode, just return a success indicator
      // This is simplified and doesn't actually delete anything
      return { id, deleted: true };
    }
  } catch (error) {
    console.error(`Error in deleteById operation: ${error.message}`);
    // Return a mock success on error
    return { id, deleted: true };
  }
};

module.exports = {
  setDbAvailability,
  getDbAvailability,
  findAll,
  findById,
  create,
  updateById,
  deleteById
};
