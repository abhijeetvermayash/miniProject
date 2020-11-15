// const bcrypt = require("bcrypt");
// const saltRounds = 10;
const jwt = require("jsonwebtoken");
var stream = require("stream");
const s3 = require("../config/s3.config.js");
const con = require("../db");
var md5 = require("md5");

exports.signup = async (req, response) => {
  const s3Client = s3.s3Client;
  const params = s3.uploadParams;

  var imageurl;

  console.log(req.body.heloo);

  var pics = req.file.originalname.split(".");
  params.Key = pics[0] + Date.now().toString() + "." + pics[1];
  params.Body = req.file.buffer;

  let { Location } = await s3Client.upload(params).promise();

  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  var sample = md5(name + email);

  let user_id = sample;
  let role = "user";
  let dp = Location;
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

    await con.query(sql);
    var useris = {
      user_id: user_id,
    };
    jwt.sign(
      {
        useris,
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
