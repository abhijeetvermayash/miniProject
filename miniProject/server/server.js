const signIn = require("./controller/signIn");
const signUp = require("./controller/signUp");
const Product = require("./controller/Product");
let upload = require("./config/multer.config.js");
const db = require("./db");
const express = require("express");
const admin = require("./controller/admin");
const tokenVerif = require("./controller/tokenVerification");
const userc = require("./controller/user");
const app = express();
const cors = require("cors");
app.use(require("cors")());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:4000/"],
    credentials: true,
  })
);
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
app.post(
  "/addprod",
  tokenVerif.verifyToken,
  upload.single("image"),
  Product.AddProduct
);
app.get("/getUser", tokenVerif.verifyToken, tokenVerif.loadUser);

app.get("/getproducts", Product.showAllProd);
app.post("/getSignup", upload.single("file"), signUp.signup);
app.get("/getStatus", admin.getStatus);
app.post("/setStatus", admin.setStatus);
app.post("/usr/makeDeal", tokenVerif.verifyToken, userc.makeDeal);
app.get("/getsubcat", Product.getSubcat);
app.put(
  "/updateprod",
  tokenVerif.verifyToken,
  upload.single("image"),
  Product.UpdateProduct
);
app.get("/getDeal", tokenVerif.verifyToken, userc.getDeal);
app.post("/getalreadydeal", tokenVerif.verifyToken, userc.getalreadydeal);
app.post("/approvedeals", tokenVerif.verifyToken, userc.approveDeal);

app.post("/newapprovedeals", tokenVerif.verifyToken, userc.newapproveDeals);

app.delete("/deleteprod/:prod_id", Product.DelProd);

app.listen(4000, () => {
  console.log("Server running at port 4000");
});
