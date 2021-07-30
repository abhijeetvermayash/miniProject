const con = require("../db");
// var mailer = require("nodemailer");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
// var smtpTransport = mailer.createTransport({
//   service: "Gmail",
//   auth: {
//     // user: "aashutosh.aashutoshjha.jha@gmail.com",
//     // pass: "Nodemailer@123",
//     user: "abhijeetvermayash@gmail.com",
//     pass: "8579081636",
//   },
// });
var transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "abhijeetvermayash@gmail.com",
      pass: "8579081636",
    },
  })
);

exports.makeDeal = async (req, res) => {
  try {
    let buyer_id = req.user.user_id;
    let prod_id = req.body.prod_id;
    console.log(buyer_id);
    console.log(prod_id);

    query = `insert into deal (buyer_id,prod_id,date) values('${buyer_id}','${prod_id}',CURDATE())`;
    await con.query(query);
    query = `select email from users where user_id=(select seller_id from products where prod_id='${prod_id}')`;
    const [[result]] = await con.query(query);
    console.log(result.email);
    // var mail = {
    //   from: "Monkey D Luffy <abhijeetvermayash@gmail.com>",
    //   to: "jeetabhijeet18@gmail.com",
    //   subject: "You have new notification ",
    //   text: "People are interested in your products go and check",
    //   html: "<b>People are interested in your products go and check</b>",
    // };

    // await smtpTransport.sendMail(mail);
    var mailOptions = {
      from: "UnTrash <abhijeetvermayash@gmail.com>",
      to: result.email,
      subject: "New Notification",
      html: "<p>hello sir,</p><p>People are interested in your product go and check</p>",
    };

    console.log("dasdad");
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log("contacted");

    return res.status(200).json({ result: "success" });
  } catch (e) {
    return res.status(500).json({ errors: [{ message: e }] });
  }
};
exports.getDeal = async (req, res) => {
  try {
    let query = `select p.prod_id,p.prod_title,p.prod_img,p.prod_desc,u.name,u.email,u.contact_no,d.buyer_id from  deal d,products p,users u where d.prod_id=p.prod_id and p.seller_id='${req.user.user_id}' and u.user_id=d.buyer_id and d.status='pending'`;
    let [result] = await con.query(query);
    return res.status(200).json({ result });
  } catch (e) {
    return res.status(500).json({ errors: [{ message: e }] });
  }
};

exports.getalreadydeal = async (req, res) => {
  try {
    let buyer_id = req.user.user_id;
    let prod_id = req.body.prod_id;
    let query = `select * from deal where buyer_id='${buyer_id}'&& prod_id='${prod_id}' && status='pending'`;
    let [result] = await con.query(query);
    return res.status(200).json({ result });
  } catch (e) {
    return res.status(500).json({ errors: [{ message: e }] });
  }
};

exports.newapproveDeals = async (req, res) => {
  console.log("ysessess");
  console.log(req.body);
  console.log(req.user.user_id);
  try {
    let [[result]] = await con.query(
      `select * from users where user_id='${req.user.user_id}'`
    );
    console.log(result);
    console.log(result.email);
    console.log("okkkkkkk");
    console.log(req.body.approved);
    if (req.body.approved) {
      query = `update deal set status ='approved' where prod_id='${req.body.prod_id}' and buyer_id='${req.body.buyer_id}'`;
      await con.query(query);
      var mailOptions = {
        from: `UnTrash <abhjeetvermayash@gmail.com>`,
        to: req.body.email,
        // to: "jeetabhijeet18@gmail.com",
        subject: "You have new notification ",
        text: `
        Congratulations! It's a DEAL!!
        Product Title:-${req.body.prod_title}
        E-Mail:-${result.email}
              Name:-${result.name}
              Contact No:-${result.contact_no}
        `,
        html: `
        <h1>Congratulations,It's a deal!!</h1>
        <h3>you can contact the seller now</h3>
        <h3>Product Title:-${req.body.prod_title}</h3><br/>
        <b>E-Mail:-${result.email}<br/>
        Name:-${result.name}<br/>
        Contact No:-${result.contact_no}</b>`,
      };
      console.log(1);
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log("contacted");
      console.log(2);
    } else {
      query = `update deal set status ='declined' where prod_id='${req.body.prod_id}' and buyer_id='${req.body.buyer_id}'`;

      console.log(query);
      await con.query(query);
      var mailOptions = {
        from: `UnTrash <company@gmail.com>`,
        to: req.body.email,
        subject: "You have new notification ",
        text: `
        Product Title:-${req.body.prod_title}
       Declined
        `,
        html: `<b>We are sorry your request has been declined</b>`,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      console.log("contacted");
      console.log(2);
    }

    return res.status(200).json({ result: "success" });
  } catch {
    return res.status(500).json({ errors: [{ message: error }] });
  }
};

exports.approveDeal = async (req, res) => {
  console.log("ysessess");
  try {
    let approved = req.body.approved;
    console.log(approved);
    console.log(req.body.email);

    let [[result]] = await con.query(
      `select * from users where user_id='${req.user.user_id}'`
    );
    console.log(result);
    console.log(result.email);

    let query;
    if (approved) {
      var mail = {
        from: `Monkey D Luffy <company@gmail.com>`,
        to: req.body.email,
        // to: "jeetabhijeet18@gmail.com",
        subject: "You have new notification ",
        text: `
        Congratulations! It's a DEAL!!
        Product Title:-${req.body.prod_title}
        E-Mail:-${result.email}
              Name:-${result.name}
              Contact No:-${result.contact_no}
        `,
        html: `
        <h1>Congratulations,It's a deal!!</h1>
        <h3>you can contact the seller now</h3>
        <h3>Product Title:-${req.body.prod_title}</h3><br/>
        <b>E-Mail:-${result.email}<br/>
        Name:-${result.name}<br/>
        Contact No:-${result.contact_no}</b>`,
      };
      console.log(1);
      await smtpTransport.sendMail(mail);
      console.log(2);

      smtpTransport.close();
      query = `update deal set status ='approved' where prod_id='${req.body.prod_id}' and buyer_id='${req.body.buyer_id}'`;
    } else {
      var mail = {
        from: `Monkey D Luffy <company@gmail.com>`,
        to: req.body.email,
        subject: "You have new notification ",
        text: `
        Product Title:-${req.body.prod_title}
       Declined
        `,
        html: `<b>We are sorry your request has been declined</b>`,
      };

      await smtpTransport.sendMail(mail);

      smtpTransport.close();
      query = `update deal set status ='declined' where prod_id='${req.body.prod_id}' and buyer_id='${req.body.buyer_id}'`;

      console.log(query);
      await con.query(query);
      return res.status(200).json({ result: "success" });
    }
  } catch (error) {
    return res.status(900).json({ errors: [{ message: error }] });
  }
};
