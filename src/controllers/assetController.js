const Asset = require('../models/Asset');
const dbService = require('../services/dbService');

/**
 * PUBLIC_INTERFACE
 * Get all assets
 * @route GET /api/asset
 * @access Public
 */
const getAssets = async (req, res, next) => {
  try {
    const assets = await dbService.findAll(Asset);

    res.status(200).json({
      success: true,
      count: assets.length,
      data: assets
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUBLIC_INTERFACE
 * Get single asset by ID
 * @route GET /api/asset/:id
 * @access Public
 */
const getAssetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const asset = await dbService.findById(Asset, id);

    if (!asset) {
      return res.status(404).json({
        success: false,
        message: `Asset not found with id ${id}`
      });
    }

    res.status(200).json({
      success: true,
      data: asset
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAssets,
  getAssetById
};
