const express = require('express');
const { registerUser, loginUser, getUserHeaderInfo } = require('../controllers/userController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/startheaderinfo', protect, getUserHeaderInfo);

module.exports = router;
