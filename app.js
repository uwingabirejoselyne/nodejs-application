const route = require("./routes");
const express = require("express");
const app = express();
app.use("/add-product", (req, res, next) => {
  console.log("In the middlware");
  res.send(
    '<html><form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form></html>'
  );
});
app.use('/pr')
app.use("/", (req, res, next) => {
  console.log("next middleware");
});
app.use(route);
app.listen(3000);
