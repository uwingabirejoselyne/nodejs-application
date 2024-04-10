const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const router = express.Router();
const products = [];
const fs = require("fs")
const productControllers = require('../controllers/products')

router.get("/add-product", productControllers.getAddProduct);

router.post("/add-product", (req, res, next) => {
  const title = req.body.title;
  products.push({ title: title });
  fs.readFile(path.join(rootDir, "views", "card.html"), "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal server error");
    }
    const renderedcard = data.replace("{{title}}", title);
    res.send(renderedcard);
  });
  // res.sendFile(path.join(rootDir, "views", "card.html"));

});

// module.exports = router;
exports.routes = router;
exports.products = products;
