const http = require("http");
const route = require("./routes");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("In the middlware");
  res.send('<h1>Sending middleware!</h1>')
  next()
});
app.use((req, res, next) => {
  console.log("next middleware");
});
app.use(route)
const server = http.createServer(app);
server.listen(3000);
