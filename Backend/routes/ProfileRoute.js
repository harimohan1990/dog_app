const express = require('express');
const router = express.Router();
const profileController = require('../controllers/ProfileController');

// Create a new profile
router.post('/', profileController.createProfile);

// Get all profiles
router.get('/', profileController.getAllProfiles);

module.exports = router;
