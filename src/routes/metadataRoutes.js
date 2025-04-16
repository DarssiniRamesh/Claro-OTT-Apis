const express = require('express');
const { getMetadata, getMetadataById } = require('../controllers/metadataController');

const router = express.Router();

router.route('/').get(getMetadata);
router.route('/:id').get(getMetadataById);

module.exports = router;
