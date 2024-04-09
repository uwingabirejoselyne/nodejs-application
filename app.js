const route = require("./routes");
const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use((req,res,next) =>{
  res.status(404).render('error')
})
app.listen(3000);
