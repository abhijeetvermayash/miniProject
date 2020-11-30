import Axios from "axios";
import React, { useState } from "react";
import { SpinnerCircular } from "spinners-react";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";

export default function SingleProd(props) {
  const [loading, setloading] = useState(false);
  const onClk = async (approved) => {
    let data = JSON.stringify({ approved, prod_id: props.prod_id });
    try {
      setloading(true);

      await Axios.post("/setStatus", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setloading(false);
      props.call();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div class="col-lg-3 shop-info-grid text-center mt-4">
        <div class="product-shoe-info shoe">
          <div class="men-thumb-item">
            <img src={props.prod_img} class="img-fluid" alt="" />
          </div>
          <div class="item-info-product">
            <h4>
              <a href="single.html">{props.prod_title} </a>
            </h4>

            <div class="product_price">
              <div class="grid-price">
                <span class="money">₹{props.prod_price}</span>
              </div>
              {props.statusShow ? (
                <div class={props.status}>
                  <span class="status">{props.status}</span>
                </div>
              ) : null}
            </div>
            {props.pendingShow ? (
              !loading ? (
                <div className="pendings">
                  <i
                    class="fa fa-times fa-2x"
                    aria-hidden="true"
                    onClick={() => onClk(false)}
                  ></i>
                  <i
                    class="fa fa-check fa-2x"
                    aria-hidden="true"
                    onClick={() => onClk(true)}
                  ></i>
                </div>
              ) : (
                <SpinnerCircular />
              )
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
