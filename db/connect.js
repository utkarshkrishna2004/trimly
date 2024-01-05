const mongoose = require("mongoose");

async function connectToMongoDB(url) {
   try {
      return mongoose.connect(url);
   } 
   catch (error) {
      throw console.log("Couldn't connect to MongoDB");
   }
}

module.exports = {
   connectToMongoDB,
};
