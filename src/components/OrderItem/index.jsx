import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

import close from "../../assets/icons/icon_close.png";
import "./OrderItem.scss";

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt="bike" />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img src={close} alt="close" onClick={() => removeFromCart(product)} />
    </div>
  );
};

export { OrderItem };
