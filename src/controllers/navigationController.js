const Navigation = require('../models/Navigation');
const dbService = require('../services/dbService');

/**
 * PUBLIC_INTERFACE
 * Get navigation data
 * @route GET /nav/data
 * @access Public
 */
const getNavigationData = async (req, res, next) => {
  try {
    const navigationItems = await dbService.findAll(Navigation);

    res.status(200).json({
      success: true,
      count: navigationItems.length,
      data: navigationItems
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getNavigationData
};
