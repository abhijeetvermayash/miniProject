import React, { useContext, useEffect } from "react";
import SingleProd from "./singleprod";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import { ProdCtx } from "../context/product";
import Axios from "axios";

export default function ProdGrid() {
  const { products, setproducts } = useContext(ProdCtx);
  var state = {
    props: {
      price: 100,
      img: "/images/b6.jpg",
      title: "book",
    },
  };
  const call = async () => {
    if (products.length === 0) {
      let response = await Axios.get("/getproducts");

      setproducts(response.data.result);
    }
  };
  useEffect(() => {
    call();
  }, []);
  let jsx = products.map((prod) => {
    return <SingleProd {...prod} />;
  });
  return (
    <>
      <section className="banner-bottom py-5">
        <div className="container py-5">
          <div className="row shop-wthree-info text-center">
            {jsx}
            {/* <SingleProd {...state.props} />
            <SingleProd {...state.props} /> */}
          </div>
        </div>
      </section>
    </>
  );
}
