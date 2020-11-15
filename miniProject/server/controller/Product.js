const con = require("../db");
const s3 = require("../config/s3.config.js");

var md5 = require("md5");

exports.showAllProd = async (req, res) => {
  try {
    sql = `select * from products`;
    var [result] = await con.query(sql);
    return res.status(200).json({ result });
  } catch (Err) {
    return res.status(500).json({ errors: [{ message: Err }] });
  }
};

exports.AddProduct = async (req, res) => {
  const s3Client = s3.s3Client;
  const params = s3.uploadParams;

  console.log(req.body.heloo);

  var pics = req.file.originalname.split(".");
  params.Key = pics[0] + Date.now().toString() + "." + pics[1];
  params.Body = req.file.buffer;

  try {
    let { Location } = await s3Client.upload(params).promise();
    var { prod_title, prod_disc, category, seller_id, prod_price } = req.body;
    var prod_img = Location;

    var sample = md5(prod_title + seller_id);

    sql = `insert into products values ('${sample}','${prod_title}','${prod_disc}','${prod_img}','${seller_id}','${category}',${prod_price})`;
    await con.query(sql);
    return res.status(200).json({ result: "success" });
  } catch (Err) {
    return res.status(500).json({ errors: [{ message: Err }] });
  }
};
exports.UpdateProduct = async (req, res) => {
  const s3Client = s3.s3Client;
  const params = s3.uploadParams;

  console.log(req.body.heloo);

  var pics = req.file.originalname.split(".");
  params.Key = pics[0] + Date.now().toString() + "." + pics[1];
  params.Body = req.file.buffer;

  try {
    let { Location } = await s3Client.upload(params).promise();
    var {
      prod_id,
      prod_title,
      prod_disc,
      category,
      seller_id,
      prod_price,
    } = req.body;
    var prod_img = Location;

    sql = `update  products set prod_title='${prod_title}', prod_desc='${prod_disc}',prod_img='${prod_img}',seller_id='${seller_id}',category='${category}',prod_price=${prod_price} where prod_id='${prod_id}'`;
    await con.query(sql);
    return res.status(200).json({ result: "success" });
  } catch (Err) {
    return res.status(500).json({ errors: [{ message: Err }] });
  }
};

exports.DelProd = async (req, res) => {
  try {
    sql = `delete from products where prod_id='${req.params.prod_id}'`;
    await con.query(sql);
    return res.status(200).json({ result: "success" });
  } catch (Err) {
    return res.status(500).json({ errors: [{ message: Err }] });
  }
};
