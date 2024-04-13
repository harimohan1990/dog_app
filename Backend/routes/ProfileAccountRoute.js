const express = require('express');
const router = express.Router();
const profileAccountController = require('../controllers/ProfileAccountController');

// Route for creating a new profile account
router.post('/postprofileaccount', profileAccountController.postProfileAccount);

// Route for retrieving all profile accounts
router.get('/getprofileaccount', profileAccountController.getProfileAccount);

module.exports = router;
