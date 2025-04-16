const express = require('express');
const { getAssets, getAssetById } = require('../controllers/assetController');

const router = express.Router();

router.route('/').get(getAssets);
router.route('/:id').get(getAssetById);

module.exports = router;
