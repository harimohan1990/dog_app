const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

// Create a new home
router.post('/home', homeController.createHome);

// Get all profiles
router.get('/home', homeController.getAllHomes);

module.exports = router;
