const signIn = require("./controller/signIn");
const signUp = require("./controller/signUp");
const Product = require("./controller/Product");
let upload = require("./config/multer.config.js");
const db = require("./db");
const express = require("express");

// const tokenVerif = require("./controller/tokenVerification");

const app = express();

app.use(
  express.json({
    extended: false,
  })
);
(async () => {
  await db.query("select * from users");
  console.log("db connected");
})();

// app.get("/getUser", tokenVerif.verifyToken, tokenVerif.loadUser);
app.post("/getLogin", signIn.signin);
app.post("/addprod", upload.single("image"), Product.AddProduct);

app.get("/getproducts", Product.showAllProd);
app.post("/getSignup", upload.single("file"), signUp.signup);
app.put("/updateprod", upload.single("image"), Product.UpdateProduct);
app.delete("/deleteprod/:prod_id", Product.DelProd);

app.listen(4000, () => {
  console.log("Server running at port 4000");
});
