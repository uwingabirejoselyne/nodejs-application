const express = require("express");
const router = express.Router();
router.get('/add-product', (res,req,next) =>{
    res.send(
        '<html><form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form></html>'
      );
})
router.post("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });
module.exports = router;
