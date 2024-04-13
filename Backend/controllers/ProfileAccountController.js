const ProfileAccount = require('../models/ProfileAccountModel');

exports.postProfileAccount = async (req, res) => {
    try {
        const newProfileAccount = new ProfileAccount(req.body);
        await newProfileAccount.save();
        res.status(201).json(newProfileAccount);
    } catch (error) {
        console.error("Error creating profile account:", error);
        res.status(400).json({ error: "Failed to create profile account" });
    }
}

exports.getProfileAccount = async (req, res) => {
    try {
        const profileAccounts = await ProfileAccount.find();
        res.json(profileAccounts);
    } catch (error) {
        console.error("Error fetching profile accounts:", error);
        res.status(500).json({ error: "Failed to fetch profile accounts" });
    }
}
