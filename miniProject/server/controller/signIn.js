const jwt = require("jsonwebtoken");

const con = require("../db");

exports.signin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    var sql = `select * from users where email="${email}"`;
    const [rows] = await con.query(sql);

    if (rows.length == 0) {
      return res.status(500).json({ errors: [{ message: "Wrong email" }] });
    }

    var sqlquery = `select  getPassbyEmail('${email}') as pass`;

    const [[result]] = await con.query(sqlquery);

    console.log(result.pass);

    if (result.pass != password) {
      return res.status(500).json({ errors: [{ message: "Wrong Password" }] });
    }

    let user = {
      //name:rows[0].name,
      user_id: rows[0].user_id,
      // email:rows[0].email,
      // password:rows[0].password,
      // year:rows[0].year,
      // section:rows[0].section,
      // batch:rows[0].batch,
    };
    jwt.sign(
      {
        user,
      },
      "secretkey",
      (err, token) => {
        res.json({
          token,
        });
      }
    );

    // return res.json({user:usn});
  } catch (err) {
    return res.status(500).json({ errors: [{ message: "Server Error" }] });
  }
};

// console.log(usn, password)
