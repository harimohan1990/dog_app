const Home = require('../models/HomeModel')


// creating posts 
exports.createHome = async (req, res) => {
   try {
      const home =  new Home(req.body);
      await home.save()
      res.status(201).send(home);

   } catch (error) {
    res.status(400).send(error);
   }

}

// get post created 

exports.getAllHomes = async (req, res) => {
   try {
      const homes = await Profile.find();
      res.send(homes);
      
   } catch (error) {
      res.status(500).send(error);
   }
}

