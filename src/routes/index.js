const express = require('express');
const metadataRoutes = require('./metadataRoutes');
const assetRoutes = require('./assetRoutes');
const navigationRoutes = require('./navigationRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Mount routers
router.use('/api/metadata', metadataRoutes);
router.use('/api/asset', assetRoutes);
router.use('/nav', navigationRoutes);
router.use('/user', userRoutes);

module.exports = router;
