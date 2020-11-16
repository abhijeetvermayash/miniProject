const con = require("../db");
const helper = require(".././config/helper_upload");
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
  try {
    let Location = await helper.uploadImage(req.file);
    var { prod_title, prod_disc, category, subcat, prod_price } = req.body;
    seller_id = req.user.user_id;
    var prod_img = Location;

    var sample = md5(prod_title + seller_id);

    sql = `insert into products (prod_id,prod_title,prod_desc,prod_img,seller_id,category,prod_price,subcat)  values ('${sample}','${prod_title}','${prod_disc}','${prod_img}','${seller_id}','${category}',${+prod_price},'${subcat}')`;
    // sql1 = `insert into aprroved values('${sample}')`;

    await con.query(sql);
    // await con.query(sql1);
    return res.status(200).json({ result: "success" });
  } catch (Err) {
    console.log(Err);

    return res.status(500).json({ errors: [{ message: Err }] });
  }
};
exports.UpdateProduct = async (req, res) => {
  try {
    let Location = await helper.uploadImage(req.file);
    var {
      prod_id,
      prod_title,
      prod_disc,
      category,
      subcat,

      prod_price,
    } = req.body;
    seller_id = req.user.user_id;

    var prod_img = Location;

    sql = `update  products set prod_title='${prod_title}', prod_desc='${prod_disc}',prod_img='${prod_img}',seller_id='${seller_id}',category='${category}',prod_price=${prod_price},subcat='${subcat}' where prod_id='${prod_id}'`;
    // sql1 = `insert into approved values('${sample}')`;

    await con.query(sql);
    // await con.query(sql1);

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
