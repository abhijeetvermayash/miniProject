import Axios from "axios";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { ProdCtx } from "../../context/product";
import SingleProd from "../singleprod";

export default function MyProducts() {
  const { products, setproducts } = useContext(ProdCtx);
  const { state } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (products.length === 0) {
        let response = await Axios.get("/getproducts");

        setproducts(response.data.result);
      }
    })();
  }, []);
  let jsx = products.map((prod) => {
    if (prod.seller_id === state.user.user_id)
      return <SingleProd {...prod} statusShow />;
  });
  return (
    <>
      <section className="banner-bottom py-5">
        <div className="container py-5">
          <div className="row shop-wthree-info text-center">{jsx}</div>
        </div>
      </section>
    </>
  );
}
