const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      distance:{
        type: Number,
        required: true
      }
 
})


module.exports = mongoose.model('home', homeSchema);


