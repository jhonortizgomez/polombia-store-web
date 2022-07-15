import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import iconAddToCart from "../../assets/icons/bt_add_to_cart.svg";
import iconAddedToCart from "../../assets/icons/bt_added_to_cart.svg";
import "./ProductItem.scss";

const ProductItem = ({ product }) => {
  const { toCart, addedToCart } = useContext(AppContext);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p> ${product.price} </p>
          <p> {product.title} </p>
        </div>
        <figure onClick={() => toCart(product)}>
          {addedToCart(product) ? (
            <img src={iconAddedToCart} alt="" />
          ) : (
            <img src={iconAddToCart} alt="" />
          )}
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
