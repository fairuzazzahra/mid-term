const mongoose = require("mongoose");

// Mongoose Schema => define structure inside MongoDB collection
const productSchema = mongoose.Schema({
  link_product: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
});

/*
    mongoose.model(<Collection Name>, <Collection Schema>)
*/

// menentukan nama collection di database MongoDB
module.exports = mongoose.model("Product", productSchema);
