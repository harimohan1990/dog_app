const mongoose = require('mongoose');

const ProfileAccountSchema = mongoose.Schema({
  name: {
    type: String,
   
  },
  phonenumber: {
    type: Number, // Changed to string to preserve formatting
   
  },
  dateofbirth: {
    type: Date, // Removed default value
    // You can add additional validation rules for the date if needed
  }
});

module.exports = mongoose.model('ProfileAccount', ProfileAccountSchema);
