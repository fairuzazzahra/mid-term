const mongoose = require("mongoose");

// Mongoose Schema => define structure inside MongoDB collection
const commentSchema = mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
  timestamps: true,
});

/*
    mongoose.model(<Collection Name>, <Collection Schema>)
*/

// menentukan nama collection di database MongoDB
module.exports = mongoose.model("Comment", commentSchema);
