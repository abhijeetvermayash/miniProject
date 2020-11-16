const con = require("../db");

exports.getStatus = async (req, res) => {
  try {
    let [result1] = await con.query(
      "select * from products p,aprroved a where p.prod_id=a.prod_id"
    );
    return res.status(200).json({ result: result1 });
  } catch (e) {
    return res.status(500).json({ errors: [{ message: e }] });
  }
};

exports.setStatus = async (req, res) => {
  try {
    let approved = req.body.approved;
    let prod_id = req.body.prod_id;
    let query;
    if (approved) {
      query = `update products set status = 'approved' where prod_id='${prod_id}'`;
    } else {
      query = `update products set status = 'declined' where prod_id='${prod_id}'`;
    }
    await con.query(query);
    await con.query(`delete from aprroved where prod_id='${prod_id}'`);

    return res.status(200).json({ result: "success" });
  } catch (e) {
    return res.status(500).json({ errors: [{ message: e }] });
  }
};
