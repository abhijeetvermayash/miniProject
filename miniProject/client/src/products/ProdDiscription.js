import React, { useContext, useEffect, useState } from "react";
import { ProdCtx } from "../context/product";
import Axios from "axios";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";

export default function ProdDiscription(props) {
  console.log(props);
  const { products, setproducts } = useContext(ProdCtx);
  const call = async () => {
    if (products.length === 0) {
      let response = await Axios.get("/getproducts");

      setproducts(response.data.result);
    }
  };
  useEffect(() => {
    call();
  }, []);

  const product = products.filter(
    (prod) => prod.prod_id === props.match.params.id
  );
  console.log(product);
  return (
    <div>
      <br />

      <h1 style={{ marginTop: "20px" }}>{product[0].prod_title}</h1>
      <img
        src={product[0].prod_img}
        style={{
          height: "600px",
          width: "600px",
          float: "left",
          marginTop: "50px",
          marginLeft: "200px",
          marginBottom: "200px",
        }}
      />
      <h2 style={{ marginTop: "200px" }}>Product Discription</h2>
      <br />
      <h3>{product[0].prod_desc}</h3>

      <br />
      <h2 style={{ marginTop: "50px" }}>Product Price</h2>
      <br />
      <h3>Rs &nbsp;{product[0].prod_price}</h3>
      <br />

      <button
        type="submit"
        style={{
          backgroundColor: "#f44336",
          border: "none",
          color: "white",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
        }}
        class="btn"
      >
        Contact Seller
      </button>
    </div>
  );
}
