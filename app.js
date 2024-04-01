const route = require("./routes");
const express = require("express");
const app = express();
app.use('/add-product',(req, res, next) => {
  console.log("In the middlware");
  res.send('<h1>Sending middleware!</h1>')
});
app.use('/',(req, res, next) => {
  console.log("next middleware");
});
app.use(route)
app.listen(3000);
