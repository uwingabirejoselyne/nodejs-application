const path = require("path");
const rootDir = require("../util/path");
const fs = require('fs')
const products = []
exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};
exports.postAddProduct = (res, req,next) =>{
    const title = products.push({title: req.body.title})
    fs.readFile(path.join(rootDir,'views','card.html'),'utf8',(err,data) =>{
        if(err){
            console.log(err);
            return res.status(500).send('internal server erro')
        }
        const renderedcard = data.replace("{{title}}", title);
        res.send(renderedcard);
    })
}
