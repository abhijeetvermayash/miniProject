import React from "react";
import "../assets/css/bootstrap.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";

export default function singleprod(props) {
  return (
    <>
      <div class="col-lg-3 shop-info-grid text-center mt-4">
        <div class="product-shoe-info shoe">
          <div class="men-thumb-item">
            <img src={props.img} class="img-fluid" alt="" />
          </div>
          <div class="item-info-product">
            <h4>
              <a href="single.html">{props.title} </a>
            </h4>

            <div class="product_price">
              <div class="grid-price">
                <span class="money">{props.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
