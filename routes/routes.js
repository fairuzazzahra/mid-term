const express = require("express");
const router = express.Router();

const Video = require("../models/video");
const Product = require("../models/product");
const Comment = require("../models/comment");
const Submit = require("../models/submit");

// GET -- find all product
router.get("/product", async (req, res) => {
  try {
    // db.product.find()
    const allProducts = await Product.find();
    res.status(200).json({
      products: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// GET -- find product by id
router.get("/product/:id", async (req, res) => {
  try {
    // db.product.find({_id: req.params.id})
    const { id } = req.params;
    const product = await Product.findById(req.params, id);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// POST -- insert product
router.post("/product", (req, res) => {
  let newProduct = req.body;

  try {
    // db.product.insertOne({})
    const saveProduct = newProduct.save();
    res.status(201).json(saveProduct);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// PATCH -- update product
router.patch("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // req.body = mengambil semua yang ada di body
    const payload = req.body;
    const option = { new: true };

    const result = await Product.findByIdAndUpdate(
      // payload = semua yg diletakkan di request
      id,
      payload,
      option
    );
    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

//  DELETE -- delete product by id
router.delete("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Product.findByIdAndUpdate(id);
    res.status(200).json({ message: `${result.title} has been deleted` });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

// GET -- find video by id
router.get("/video/:id", async (req, res) => {
  try {
    // db.video.find({_id: req.params.id})
    const { id } = req.params;
    const video = await Video.findById(req.params, id);
    res.status(200).json({ video });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// GET -- find comment by id
router.get("/comment/:id/comment", async (req, res) => {
  try {
    // db.comment.find({_id: req.params.id})
    const { id } = req.params;
    const comment = await Comment.findById(req.params, id);
    res.status(200).json({ comment });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// POST -- submit comment
router.post("/submit", (req, res) => {
  let submit = req.body;

  try {
    // db.submit.insertOne({})
    const saveSubmit = submit.save();
    res.status(201).json(saveSubmit);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = router;
