const express = require('express');
const { registerController } = require('../controllers/authController');
const { loginController } = require('../controllers/authController');
const { currentUserController}= require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
//register || post
router.post('/register', registerController);
// login || post
router.post('/login', loginController);
// getcurrent  user
router.get('/current-user', authMiddleware, currentUserController);
module.exports = router;