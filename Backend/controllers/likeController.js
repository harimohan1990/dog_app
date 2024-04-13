
const Likes = require('../models/Likemodel');


// post request for feed the images 
exports.createLikes = async (req, res) => {
    try {
        const like = new Likes(req.body);
        await like.save();
        res.status(201).send(like);
        
    } catch (error) {
        res.status(400).send(error);
    }
}


// get request to access the images
exports.getLikes = async (req, res) => {
    try {
        const likes = await Likes.find();
        res.send(likes);
      } catch (error) {
        res.status(500).send(error);
      }
}