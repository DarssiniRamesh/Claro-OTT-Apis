const express = require('express');
const { getNavigationData } = require('../controllers/navigationController');

const router = express.Router();

router.route('/data').get(getNavigationData);

module.exports = router;
