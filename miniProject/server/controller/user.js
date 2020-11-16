const con = require("../db");
var mailer = require("nodemailer");
var smtpTransport = mailer.createTransport({
  service: "Gmail",
  auth: {
    user: "aashutosh.aashutoshjha.jha@gmail.com",
    pass: "ankur_jha",
  },
});

exports.makeDeal = async (req, res) => {
  try {
    let buyer_id = req.user.user_id;
    let prod_id = req.body.prod_id;

    query = `insert into deal (buyer_id,prod_id,date) values('${buyer_id}','${prod_id}',CURDATE())`;
    await con.query(query);
    query = `select email from users where user_id=(select seller_id from products where prod_id='${prod_id}')`;
    const [[result]] = await con.query(query);
    console.log(result.email);
    var mail = {
      from: "Monkey D Luffy <from@gmail.com>",
      to: result.email,
      subject: "You have new notification ",
      text: "People are interested in your products go and check",
      html: "<b>People are interested in your products go and check</b>",
    };

    await smtpTransport.sendMail(mail);

    smtpTransport.close();

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
exports.approveDeal = async (req, res) => {
  try {
    let approved = req.body.approved;
    let [result] = await con.query(
      `select* from users where user_id='${req.user.user_id}'`
    );
    let query;
    if (approved) {
      var mail = {
        from: `Monkey D Luffy <company@gmail.com>`,
        to: req.body.email,
        subject: "You have new notification ",
        text: `
        Product Title:-${req.body.prod_title}
        E-Mail:-${result.email}
              Name:-${result.name}
              Contact No:-${result.contact_no}
        `,
        html: `<b>E-Mail:-${result.email}
        Name:-${result.name}
        Contact No:-${result.contact_no}</b>`,
      };

      // await smtpTransport.sendMail(mail);

      // smtpTransport.close();
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
        html: `<b>E-Mail:-${result.email}
        Name:-${result.name}
        Contact No:-${result.contact_no}</b>`,
      };

      // await smtpTransport.sendMail(mail);

      // smtpTransport.close();
      query = `update deal set status ='declined' where prod_id='${req.body.prod_id}' and buyer_id='${req.body.buyer_id}'`;
    }
    await con.query(query);
    return res.status(200).json({ result: "success" });
  } catch (error) {
    return res.status(500).json({ errors: [{ message: e }] });
  }
};
