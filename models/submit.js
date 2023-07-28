const mongoose = require("mongoose");

// Mongoose Schema => define structure inside MongoDB collection
const submitSchema = mongoose.Schema({
  success: {
    required: true,
    type: String,
  },
  fail: {
    required: true,
    type: String,
  },
});

/*
    mongoose.model(<Collection Name>, <Collection Schema>)
*/

// menentukan nama collection di database MongoDB
module.exports = mongoose.model("Submit", submitSchema);
