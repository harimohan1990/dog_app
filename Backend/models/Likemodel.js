const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({

    // suppose to be coming from cloudnary (will do it later)
    likeImageUrl: {
        type: String,
        required: true
      }

})

module.exports = mongoose.model('like',likeSchema );
