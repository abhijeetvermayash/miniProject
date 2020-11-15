const jwt = require("jsonwebtoken");
const db = require("../db");
exports.verifyToken = async (req, res, next) => {
  try {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      let authData = await jwt.verify(bearerHeader, "secretkey");
      req.user = authData.user;

      next();
    } else {
      res.status(403).json({ errors: [{ message: "authorisation failed" }] });
    }
  } catch (err) {
    res.status(403).json({ errors: [{ message: "authorisation failed" }] });
  }
};

exports.loadUser = async (req, res) => {
  try {
    const [user] = await db.query(
      `select name,email,user_id,contact_no from users where user_id=\"${req.user.user_id}\"`
    );
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(403).json({ errors: [{ message: "authorisation failed " }] });
  }
};
