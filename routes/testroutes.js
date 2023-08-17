const express = require('express');
const { testcontroller } = require('../controllers/testcontroller');
//router object
const router = express.Router();

router.get("/", testcontroller );

module.exports = router