import React from "react";
import singleprod from "./singleprod";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";

export default function ProdGrid() {
  var state = {
    props: {
      price: 100,
      img: "/images/b6.jpg",
      title: "book",
    },
  };
  return (
    <>
      <section className="banner-bottom py-5">
        <div className="container py-5">
          <div className="row shop-wthree-info text-center">
            {singleprod(state.props)}
            {singleprod(state.props)}
            {singleprod(state.props)}
            {singleprod(state.props)}
          </div>
        </div>
      </section>
    </>
  );
}
