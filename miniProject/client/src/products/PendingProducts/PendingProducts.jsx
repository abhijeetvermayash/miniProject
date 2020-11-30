import Axios from "axios";
import React, { useEffect, useState } from "react";

import SingleProd from "../singleprod";

export default function MyProducts() {
  //   const { state } = useContext(AuthContext);
  const [prod, setprod] = useState([]);
  const call = async () => {
    let response = await Axios.get("/getStatus");

    setprod(response.data.result);
  };
  useEffect(() => {
    call();
  }, []);
  let jsx = prod.map((prod) => {
    return <SingleProd {...prod} statusShow pendingShow call={call} />;
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
