const Profile = require('../models/ProfileModel');

// Create a new profile
exports.createProfile = async (req, res) => {
    try {
        const newProfile = await Profile.create(req.body);
        res.status(201).json(newProfile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error saving profile" });
    }
};

// Get all profiles
exports.getAllProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find();
        res.status(200).json(profiles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching profiles" });
    }
};
