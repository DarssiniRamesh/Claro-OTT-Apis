const Metadata = require('../models/Metadata');
const dbService = require('../services/dbService');

/**
 * PUBLIC_INTERFACE
 * Get all metadata
 * @route GET /api/metadata
 * @access Public
 */
const getMetadata = async (req, res, next) => {
  try {
    const metadataItems = await dbService.findAll(Metadata);

    res.status(200).json({
      success: true,
      count: metadataItems.length,
      data: metadataItems
    });
  } catch (error) {
    next(error);
  }
};

/**
 * PUBLIC_INTERFACE
 * Get single metadata by ID
 * @route GET /api/metadata/:id
 * @access Public
 */
const getMetadataById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const metadata = await dbService.findById(Metadata, id);

    if (!metadata) {
      return res.status(404).json({
        success: false,
        message: `Metadata not found with id ${id}`
      });
    }

    res.status(200).json({
      success: true,
      data: metadata
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMetadata,
  getMetadataById
};
