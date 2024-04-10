const path = require("path");
const rootDir = require("../util/path");
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};
