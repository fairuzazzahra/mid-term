const mongoose = require("mongoose");

// Mongoose Schema => define structure inside MongoDB collection
const videoSchema = mongoose.Schema({
  urlImage: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
});

/*
    mongoose.model(<Collection Name>, <Collection Schema>)
*/

// menentukan nama collection di database MongoDB
module.exports = mongoose.model("Video", videoSchema);
