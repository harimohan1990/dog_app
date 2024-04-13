const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    dogbread: String,
    vaccination: String,
    location: String
});

module.exports = mongoose.model('Profile', profileSchema);
