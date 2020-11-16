const jwt = require("jsonwebtoken");
const helper = require("../config/helper_upload");
const con = require("../db");
var md5 = require("md5");

exports.signup = async (req, response) => {
  var imageurl;
  if (!req.file) {
    response.status(400).json({ error: "No file given" });
    return;
  }

  imageurl = await helper.uploadImage(req.file);

  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let addr = req.body.addr;
  let pincode = req.body.pincode;
  let state = req.body.state;
  let city = req.body.city;

  var sample = md5(name + email);

  let user_id = sample;
  let role = "user";
  let dp = imageurl;
  let contact_no = req.body.contact_no;

  var sql = `select* from users where user_id = '${user_id}'`;
  try {
    var [user] = await con.query(sql);
    if (user.length > 0) {
      return response
        .status(500)
        .json({ errors: [{ message: "User Already Exists" }] });
    }

    sql = `insert into users values ("${user_id}", "${name}", "${email}","${password}","${role}","${dp}","${contact_no}") `;
    sql1 = `insert into area values ("${addr}", "${pincode}", "${state}","${city}","${user_id}") `;

    await con.query(sql);
    var user = {
      user_id: user_id,
    };
    await con.query(sql1);

    jwt.sign(
      {
        user,
      },
      "secretkey",
      (err, token) => {
        response.json({
          token,
        });
      }
    );
  } catch (err) {
    console.log(err);
    response.status(500).send("Server err");
  }
};
